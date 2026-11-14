/**
 * Host half of dsh-telework: SSH remote development for DeepSeek Harness.
 *
 * The current scaffold owns the plugin configuration and one read-only tool.
 * Moving the session workspace, file operations, shell and terminals to a
 * remote host is not implemented yet; see docs/design.zh-CN.md.
 *
 * No dependencies: this file only uses Node.js built-ins and the Cordis
 * context, so the bundle stays a plain local directory install.
 */

import { execFile } from 'node:child_process'
import { readEffectiveSettings } from './ssh-g.js'

/** Cordis plugin name. */
export const name = 'telework'

/** Wait for the tool registry before registering the status tool. */
export const inject = ['tools']

const DEFAULT_SSH_TIMEOUT_MS = 5_000
const MAX_TARGETS = 20
const MAX_ERROR_CHARS = 500

/**
 * Validate the plugin row configuration once, at activation.
 * @param {unknown} raw - the `config` object of the plugin row.
 * @returns {{ sshTimeoutMs: number, targets: Array<{ id: string, alias: string, description?: string, workspace?: string }> }}
 */
function normalizeConfig(raw) {
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
 * @param {AbortSignal | undefined} signal - tool cancellation.
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

/** @param {string} value */
function bounded(value) {
  return value.length <= MAX_ERROR_CHARS ? value : `${value.slice(0, MAX_ERROR_CHARS)}…`
}

/**
 * Render the canonical status value for the model.
 * @param {Record<string, unknown>} _args - validated model arguments (unused).
 * @param {{ targets: Array<Record<string, unknown>> }} value - the canonical result.
 * @returns {Array<{ type: 'text', text: string }>}
 */
function renderStatus(_args, value) {
  const lines = [`Telework targets: ${value.targets.length}`]
  for (const target of value.targets) {
    const parts = []
    if (target.user !== undefined && target.hostname !== undefined && target.port !== undefined) {
      parts.push(`${target.user}@${target.hostname}:${target.port}`)
    } else if (target.hostname !== undefined) {
      parts.push(String(target.hostname))
    }
    if (target.workspace !== undefined) parts.push(String(target.workspace))
    if (target.description !== undefined) parts.push(String(target.description))
    if (target.error !== undefined) parts.push(`error: ${String(target.error)}`)
    lines.push(`- ${target.id} (${target.alias})${parts.length === 0 ? '' : ` - ${parts.join(' - ')}`}`)
  }
  return [{ type: 'text', text: lines.join('\n') }]
}

/** Raw JSON Schema for the single optional argument. */
const parameters = {
  type: 'object',
  additionalProperties: false,
  properties: {
    target: {
      type: 'string',
      description: 'Configured target id to inspect. Omit to list every target.',
    },
  },
}

/** Raw JSON Schema for the tool result. */
const outputSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['targets'],
  properties: {
    targets: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'alias'],
        properties: {
          id: { type: 'string' },
          alias: { type: 'string' },
          description: { type: 'string' },
          workspace: { type: 'string' },
          hostname: { type: 'string' },
          user: { type: 'string' },
          port: { type: 'integer' },
          warning: { type: 'string' },
          error: { type: 'string' },
        },
      },
    },
  },
}

/**
 * Mount the plugin. The tool is registered only when at least one target is
 * configured, so an installed-but-unconfigured bundle adds no prompt tokens.
 * @param {import('@deepseek-ai/cordis').Context} ctx - the plugin context.
 * @param {unknown} config - the plugin row's `config`.
 */
export function apply(ctx, config) {
  const settings = normalizeConfig(config)
  if (settings.targets.length === 0) return

  ctx.tools.register({
    name: 'telework_status',
    description:
      'List the SSH targets configured for Telework remote development. With a target id, also resolve that target\'s effective OpenSSH settings (hostname, user, port) with `ssh -G`. Reads local OpenSSH configuration only: it does not connect to the remote host, read remote files, or run remote commands.',
    parameters,
    output: {
      schema: outputSchema,
      render: renderStatus,
    },
    async execute(args, exec) {
      const requested = args?.target
      if (requested !== undefined && typeof requested !== 'string') {
        throw new TypeError('telework_status: target must be a string')
      }
      const selected = requested === undefined
        ? settings.targets
        : settings.targets.filter((target) => target.id === requested)
      if (selected.length === 0) {
        const known = settings.targets.map((target) => target.id).join(', ')
        throw new Error(`telework_status: unknown target "${requested}"; configured targets: ${known}`)
      }

      const targets = []
      for (const target of selected) {
        const base = {
          id: target.id,
          alias: target.alias,
          ...(target.description === undefined ? {} : { description: target.description }),
          ...(target.workspace === undefined ? {} : { workspace: target.workspace }),
        }
        try {
          const { stdout, stderr } = await resolveOpenSsh(target.alias, settings.sshTimeoutMs, exec.signal)
          targets.push({
            ...base,
            ...readEffectiveSettings(stdout),
            ...(stderr === '' ? {} : { warning: bounded(stderr) }),
          })
        } catch (error) {
          if (exec.signal?.aborted === true) throw error
          const message = error instanceof Error ? error.message : String(error)
          targets.push({ ...base, error: bounded(message) })
        }
      }
      return { targets }
    },
  })
}
