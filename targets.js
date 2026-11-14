/**
 * SSH target configuration and local OpenSSH inspection shared by the
 * `telework_status` tool and the Remote panel route.
 */

import { execFile } from 'node:child_process'
import { readEffectiveSettings } from './ssh-g.js'

export const DEFAULT_SSH_TIMEOUT_MS = 5_000
export const MAX_TARGETS = 20
const MAX_ERROR_CHARS = 500

/** @param {string} value */
function bounded(value) {
  return value.length <= MAX_ERROR_CHARS ? value : `${value.slice(0, MAX_ERROR_CHARS)}…`
}

/**
 * Validate the plugin row configuration once, at activation.
 * @param {unknown} raw - the `config` object of the plugin row.
 * @returns {{ sshTimeoutMs: number, targets: Array<{ id: string, alias: string, description?: string, workspace?: string }> }}
 */
export function normalizeConfig(raw) {
  const config = raw === null || typeof raw !== 'object' ? {} : raw
  const timeout = config.sshTimeoutMs ?? DEFAULT_SSH_TIMEOUT_MS
  if (!Number.isInteger(timeout) || timeout < 1_000 || timeout > 30_000) {
    throw new TypeError('dsh-telework: config.sshTimeoutMs must be an integer between 1000 and 30000')
  }
  const input = config.targets ?? []
  if (!Array.isArray(input)) throw new TypeError('dsh-telework: config.targets must be an array')
  if (input.length > MAX_TARGETS) throw new RangeError(`dsh-telework: at most ${MAX_TARGETS} targets are supported`)

  const seen = new Set()
  const targets = input.map((rawTarget, index) => {
    const where = `config.targets[${index}]`
    if (rawTarget === null || typeof rawTarget !== 'object') throw new TypeError(`dsh-telework: ${where} must be an object`)
    const { id, alias, description, workspace } = rawTarget

    if (typeof id !== 'string' || id.trim() === '') throw new TypeError(`dsh-telework: ${where}.id must be a non-empty string`)
    if (seen.has(id)) throw new TypeError(`dsh-telework: duplicate target id "${id}"`)
    seen.add(id)

    if (typeof alias !== 'string' || alias.trim() === '') throw new TypeError(`dsh-telework: ${where}.alias must be a non-empty string`)
    if (/^-/u.test(alias) || /\s/u.test(alias)) {
      throw new TypeError(`dsh-telework: ${where}.alias must be an OpenSSH host alias or user@host without spaces or a leading "-"`)
    }
    if (description !== undefined && typeof description !== 'string') throw new TypeError(`dsh-telework: ${where}.description must be a string`)
    if (workspace !== undefined && (typeof workspace !== 'string' || workspace.trim() === '')) {
      throw new TypeError(`dsh-telework: ${where}.workspace must be a non-empty string when present`)
    }

    return Object.freeze({
      id,
      alias,
      ...(description === undefined ? {} : { description }),
      ...(workspace === undefined ? {} : { workspace }),
    })
  })

  return { sshTimeoutMs: timeout, targets }
}

/**
 * Resolve one host alias through the local OpenSSH client. `ssh -G` parses
 * configuration only; it never opens a connection.
 * @param {string} alias - OpenSSH host alias or user@host.
 * @param {number} timeoutMs - process timeout.
 * @param {AbortSignal | undefined} signal - caller cancellation.
 * @returns {Promise<{ stdout: string, stderr: string }>}
 */
function resolveOpenSsh(alias, timeoutMs, signal) {
  return new Promise((resolve, reject) => {
    execFile(
      'ssh',
      ['-G', alias],
      {
        timeout: timeoutMs,
        signal,
        windowsHide: true,
        maxBuffer: 1024 * 1024,
        encoding: 'utf8',
      },
      (error, stdout, stderr) => {
        if (error !== null) {
          const detail = String(stderr ?? '').trim() || error.message
          reject(new Error(detail))
          return
        }
        resolve({ stdout: String(stdout ?? ''), stderr: String(stderr ?? '').trim() })
      },
    )
  })
}

/**
 * Inspect every configured target in configuration order. Failures are
 * reported per target so one broken alias does not hide the rest.
 * @param {{ sshTimeoutMs: number, targets: Array<{ id: string, alias: string, description?: string, workspace?: string }> }} settings
 * @param {AbortSignal | undefined} signal
 * @returns {Promise<Array<Record<string, unknown>>>}
 */
export async function inspectTargets(settings, signal) {
  return Promise.all(settings.targets.map(async (target) => {
    const base = {
      id: target.id,
      alias: target.alias,
      ...(target.description === undefined ? {} : { description: target.description }),
      ...(target.workspace === undefined ? {} : { workspace: target.workspace }),
    }
    try {
      const { stdout, stderr } = await resolveOpenSsh(target.alias, settings.sshTimeoutMs, signal)
      return {
        ...base,
        ...readEffectiveSettings(stdout),
        ...(stderr === '' ? {} : { warning: bounded(stderr) }),
      }
    } catch (error) {
      if (signal?.aborted === true) throw error
      const message = error instanceof Error ? error.message : String(error)
      return { ...base, error: bounded(message) }
    }
  }))
}
