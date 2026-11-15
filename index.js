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
import { listWorkspaceDirectory } from './files.js'
import { RemoteConnections } from './remote.js'

/** Cordis plugin name. */
export const name = 'telework'

/** The Remote panel route and files route need the web server and live sessions. */
export const inject = ['webServer', 'tools', 'agents', 'workingDirectory']

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

/** Read a small JSON request body from a Node HTTP request. */
function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0
    req.on('data', (chunk) => {
      size += chunk.length
      if (size > 1_048_576) {
        reject(new Error('request body is too large'))
        req.destroy()
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => {
      try {
        const text = Buffer.concat(chunks).toString('utf8')
        resolve(text === '' ? {} : JSON.parse(text))
      } catch {
        reject(new Error('request body must be valid JSON'))
      }
    })
    req.on('error', reject)
  })
}

/** Send a JSON response from a Node HTTP handler route. */
function sendJson(res, body, status = 200) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
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

  // Read-only local file tree for the sidebar. A request names a live Session;
  // the route resolves that Session's workspace root and refuses any path that
  // realpaths outside it. Remote workspaces will replace this backend later.
  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: '/telework/files',
    resource: async (request) => {
      const url = new URL(request.url)
      const sessionId = url.searchParams.get('session')
      const requested = url.searchParams.get('path') ?? undefined
      const respond = (body, status = 200) => new Response(JSON.stringify(body), {
        status,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'cache-control': 'no-store',
        },
      })
      if (sessionId === null || sessionId === '') return respond({ error: 'session is required' }, 400)
      const agent = ctx.agents.get(sessionId)
      if (agent === undefined) return respond({ error: 'session is not live' }, 404)
      try {
        const root = await ctx.workingDirectory.ensure(agent, request.signal)
        const listing = await listWorkspaceDirectory(root, requested, request.signal)
        return respond(listing)
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        return respond({ error: message }, 400)
      }
    },
  }), 'telework: files route')

  // Live SSH/SFTP endpoints used by the Remote sidebar and the workspace
  // picker. Passwords stay in this Host process and are never returned.
  const remote = new RemoteConnections()
  const respondJson = (body, status = 200) => new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
  ctx.effect(() => () => remote.dispose(), 'telework: remote connections cleanup')

  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: '/telework/remote/connect',
    handler: async (req, res) => {
      if (req.method !== 'POST') return sendJson(res, { error: 'POST is required' }, 405)
      try {
        const body = await readJsonBody(req)
        const connection = await remote.connect(body)
        sendJson(res, connection)
      } catch (error) {
        sendJson(res, { error: error instanceof Error ? error.message : String(error) }, 400)
      }
    },
  }), 'telework: SSH connect route')

  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: '/telework/remote/list',
    resource: async (request) => {
      if (request.method !== 'GET') return respondJson({ error: 'GET is required' }, 405)
      const url = new URL(request.url)
      const connection = url.searchParams.get('connection')
      const remotePath = url.searchParams.get('path')
      if (connection === null || remotePath === null) {
        return respondJson({ error: 'connection and path are required' }, 400)
      }
      try {
        return respondJson(await remote.list(connection, remotePath))
      } catch (error) {
        return respondJson({ error: error instanceof Error ? error.message : String(error) }, 400)
      }
    },
  }), 'telework: SSH directory route')

  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: '/telework/remote/disconnect',
    handler: async (req, res) => {
      if (req.method !== 'POST') return sendJson(res, { error: 'POST is required' }, 405)
      try {
        const body = await readJsonBody(req)
        if (typeof body?.id !== 'string') return sendJson(res, { error: 'id is required' }, 400)
        remote.disconnect(body.id)
        sendJson(res, { ok: true })
      } catch (error) {
        sendJson(res, { error: error instanceof Error ? error.message : String(error) }, 400)
      }
    },
  }), 'telework: SSH disconnect route')

  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: '/telework/remote/mkdir',
    handler: async (req, res) => {
      if (req.method !== 'POST') return sendJson(res, { error: 'POST is required' }, 405)
      try {
        const body = await readJsonBody(req)
        if (typeof body?.connection !== 'string' || typeof body?.path !== 'string' || typeof body?.name !== 'string') {
          return sendJson(res, { error: 'connection, path and name are required' }, 400)
        }
        sendJson(res, await remote.mkdir(body.connection, body.path, body.name))
      } catch (error) {
        sendJson(res, { error: error instanceof Error ? error.message : String(error) }, 400)
      }
    },
  }), 'telework: SSH mkdir route')

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
