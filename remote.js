/**
 * Minimal live SSH/SFTP connection manager for the Telework Remote UI.
 *
 * Connections live in the DSH Host process, not the browser. Passwords are
 * kept only in the active ssh2 client; they are never written to disk, logged,
 * or returned by the routes. Host keys use a local trust-on-first-use store so
 * a changed key is rejected after the first successful connection.
 */

import { Client } from 'ssh2'
import { createHash } from 'node:crypto'
import { promises as fs } from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const CONNECT_TIMEOUT_MS = 15_000
const LIST_TIMEOUT_MS = 20_000

/** Bound request values before they reach ssh2. */
function text(value, field, max) {
  if (typeof value !== 'string') throw new TypeError(`${field} must be a string`)
  const trimmed = value.trim()
  if (trimmed === '' || trimmed.length > max) throw new TypeError(`${field} is invalid`)
  return trimmed
}

function port(value) {
  const number = typeof value === 'number' ? value : Number(value)
  if (!Number.isInteger(number) || number < 1 || number > 65535) throw new TypeError('port is invalid')
  return number
}

function sshHome() {
  return process.env.DSH_HOME ?? path.join(os.homedir(), '.dsh')
}

function knownHostsFile() {
  return path.join(sshHome(), 'telework', 'known_hosts.json')
}

/** SHA256 fingerprint in the OpenSSH display form. */
function fingerprint(key) {
  return `SHA256:${createHash('sha256').update(key).digest('base64').replace(/=+$/u, '')}`
}

async function readKnownHosts() {
  try {
    const parsed = JSON.parse(await fs.readFile(knownHostsFile(), 'utf8'))
    return typeof parsed === 'object' && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

async function writeKnownHosts(known) {
  const file = knownHostsFile()
  await fs.mkdir(path.dirname(file), { recursive: true, mode: 0o700 })
  await fs.writeFile(file, `${JSON.stringify(known, null, 2)}\n`, { mode: 0o600 })
}

function withTimeout(promise, ms, message) {
  let timer
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), ms)
  })
  return Promise.race([promise, timeout]).finally(() => { clearTimeout(timer) })
}

/** Live SSH connections keyed by an opaque id used by the Web client. */
export class RemoteConnections {
  #connections = new Map()
  #disposed = false

  /**
   * Open one SSH connection. Password auth is supported, including
   * keyboard-interactive prompts that ask for a password.
   * @param {{ host: string, port?: number|string, username: string, password: string }} input
   * @returns {Promise<{ id: string, host: string, username: string, port: number }>}
   */
  async connect(input) {
    if (this.#disposed) throw new Error('Telework remote manager is disposed')
    const host = text(input?.host, 'host', 255)
    const username = text(input?.username, 'username', 128)
    const password = text(input?.password, 'password', 1024)
    const portNumber = input?.port === undefined || input.port === '' ? 22 : port(input.port)
    const targetKey = `${host}:${portNumber}`
    const known = await readKnownHosts()
    const prior = known[targetKey]

    let acceptedFingerprint
    const client = new Client()
    await withTimeout(new Promise((resolve, reject) => {
      let settled = false
      const settle = (fn, value) => {
        if (settled) return
        settled = true
        fn(value)
      }
      client.on('ready', () => { settle(resolve) })
      client.on('error', (error) => { settle(reject, new Error(`SSH connection failed: ${error.message}`)) })
      client.on('keyboard-interactive', (_name, _instructions, _lang, prompts, finish) => {
        finish(prompts.map(() => password))
      })
      client.connect({
        host,
        port: portNumber,
        username,
        password,
        tryKeyboard: true,
        readyTimeout: CONNECT_TIMEOUT_MS,
        hostVerifier: (key) => {
          const current = fingerprint(key)
          if (prior !== undefined && prior !== current) {
            settle(reject, new Error(`SSH host key changed for ${targetKey}; refusing to connect`))
            return false
          }
          acceptedFingerprint = current
          return true
        },
      })
    }), CONNECT_TIMEOUT_MS + 2_000, 'SSH connection timed out')

    if (acceptedFingerprint !== undefined && prior === undefined) {
      known[targetKey] = acceptedFingerprint
      await writeKnownHosts(known).catch(() => {
        // The connection still works; only the TOFU memory is unavailable.
      })
    }

    const id = `ssh-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
    const record = { id, client, host, username, port: portNumber, sftp: null, sftpPending: null }
    this.#connections.set(id, record)
    client.on('close', () => {
      if (record.sftp !== null) {
        try { record.sftp.end() } catch { /* already closed */ }
      }
      this.#connections.delete(id)
    })
    return { id, host, username, port: portNumber }
  }

  /** Resolve the per-connection SFTP channel, opening it lazily. */
  async #sftp(record) {
    if (record.sftp !== null) return record.sftp
    if (record.sftpPending !== null) return record.sftpPending
    record.sftpPending = withTimeout(new Promise((resolve, reject) => {
      record.client.sftp((error, sftp) => {
        if (error) reject(new Error(`SFTP unavailable: ${error.message}`))
        else resolve(sftp)
      })
    }), LIST_TIMEOUT_MS, 'SFTP channel timed out').then((sftp) => {
      record.sftp = sftp
      record.sftpPending = null
      return sftp
    }, (error) => {
      record.sftpPending = null
      throw error
    })
    return record.sftpPending
  }

  /**
   * List one remote directory.
   * @param {string} id connection id
   * @param {string} remotePath absolute SFTP path
   * @returns {Promise<{ path: string, entries: Array<{ name: string, kind: 'dir'|'file' }> }>}
   */
  async list(id, remotePath) {
    const record = this.#connections.get(id)
    if (record === undefined) throw new Error('SSH connection is not active')
    const requested = text(remotePath, 'path', 4096)
    if (!requested.startsWith('/')) throw new Error('path must be absolute')
    const sftp = await this.#sftp(record)
    const entries = await withTimeout(new Promise((resolve, reject) => {
      sftp.readdir(requested, (error, list) => {
        if (error) reject(new Error(`Cannot read remote directory: ${error.message}`))
        else resolve(list)
      })
    }), LIST_TIMEOUT_MS, 'Remote directory listing timed out')
    const mapped = entries
      .filter(entry => entry.filename !== '.' && entry.filename !== '..')
      .map(entry => ({
        name: entry.filename,
        kind: entry.attrs.isDirectory() ? 'dir' : 'file',
      }))
      .sort((a, b) => (a.kind === b.kind ? a.name.localeCompare(b.name) : a.kind === 'dir' ? -1 : 1))
    return { path: requested, entries: mapped }
  }

  /** Create one remote directory below an absolute parent. */
  async mkdir(id, parentPath, name) {
    const record = this.#connections.get(id)
    if (record === undefined) throw new Error('SSH connection is not active')
    const parent = text(parentPath, 'path', 4096)
    if (!parent.startsWith('/')) throw new Error('path must be absolute')
    const folder = text(name, 'name', 255)
    if (folder === '.' || folder === '..' || /[/\\]/u.test(folder)) throw new Error('folder name is invalid')
    const target = parent === '/' ? `/${folder}` : `${parent}/${folder}`
    const sftp = await this.#sftp(record)
    await withTimeout(new Promise((resolve, reject) => {
      sftp.mkdir(target, (error) => {
        if (error) reject(new Error(`Cannot create remote folder: ${error.message}`))
        else resolve()
      })
    }), LIST_TIMEOUT_MS, 'Remote folder creation timed out')
    return { path: target }
  }

  /** Close one connection. */
  disconnect(id) {
    const record = this.#connections.get(id)
    if (record === undefined) return
    this.#connections.delete(id)
    if (record.sftp !== null) {
      try { record.sftp.end() } catch { /* already closed */ }
    }
    try { record.client.end() } catch { /* already closed */ }
  }

  /** Close every connection when the plugin unloads. */
  dispose() {
    this.#disposed = true
    for (const record of this.#connections.values()) {
      try { record.sftp?.end() } catch { /* already closed */ }
      try { record.client.end() } catch { /* already closed */ }
    }
    this.#connections.clear()
  }
}
