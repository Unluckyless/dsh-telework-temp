/**
 * Host half of dsh-telework: SSH remote development for DeepSeek Harness.
 *
 * This scaffold owns the plugin configuration, one read-only status route for
 * the Remote panel, and one model-facing status tool. Moving the session
 * workspace, file operations, shell and terminals to a remote host is not
 * implemented yet; see docs/design.zh-CN.md.
 *
 * No dependencies: this file only uses Node.js built-ins and the Cordis
 * context, so the bundle stays a plain local directory install.
 */

import { inspectTargets, normalizeConfig } from './targets.js'

/** Cordis plugin name. */
export const name = 'telework'

/** The Remote panel route needs the web server; the status tool needs tools. */
export const inject = ['webServer', 'tools']

/**
 * @param {Record<string, unknown>} _args
 * @param {{ targets: Array<Record<string, unknown>> }} value
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
 * Mount the plugin.
 * @param {import('@deepseek-ai/cordis').Context} ctx - the plugin context.
 * @param {unknown} config - the plugin row's `config`.
 */
export function apply(ctx, config) {
  const settings = normalizeConfig(config)

  // Read-only panel data. The Web host binds this route on the loopback
  // listener; it reports effective OpenSSH configuration, never credentials,
  // and the client page reads it with a same-origin fetch.
  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: '/telework/status',
    resource: async (request) => {
      const targets = await inspectTargets(settings, request.signal)
      return new Response(JSON.stringify({ targets }), {
        status: 200,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      })
    },
  }), 'telework: status route')

  // An installed-but-unconfigured bundle adds no prompt tokens and no tool.
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
      const targets = await inspectTargets({ ...settings, targets: selected }, exec.signal)
      return { targets }
    },
  })
}
