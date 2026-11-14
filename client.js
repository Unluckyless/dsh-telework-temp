window.__ModuleLoader__.load({
  id: 'dsh-telework',
  factory(require) {
    const React = require('react')
    const { useEffect, useReducer, useState } = React
    const h = React.createElement

    const EN = {
      panelLabel: 'Remote',
      toggleSidebar: 'Collapse or expand the sidebar',
      back: 'Back to conversation',
      title: 'Telework remote development',
      description: 'Inspect the SSH targets this DSH host can use. This early build reads your local OpenSSH configuration only; files, shells and terminals still run locally.',
      refresh: 'Refresh',
      refreshing: 'Refreshing…',
      loading: 'Inspecting local OpenSSH configuration…',
      targetsLabel: 'configured targets',
      emptyTitle: 'No SSH targets configured',
      emptyBody: 'Add targets to the Telework plugin row in your profile patch, then refresh.',
      configHint: 'Example profile patch:',
      errorTitle: 'Telework status is unavailable',
      errorBody: 'The DSH host route could not be reached. Reload the Web GUI and try again.',
      retry: 'Retry',
      hostLabel: 'Host',
      workspaceLabel: 'Remote workspace',
      aliasLabel: 'SSH alias',
      statusOk: 'OpenSSH configuration resolved',
      statusError: 'OpenSSH configuration failed',
      notImplemented: 'Remote file and shell execution is not implemented yet.',
      noHost: 'Not resolved',
    }

    const ZH = {
      panelLabel: '远程',
      toggleSidebar: '收起或展开侧边栏',
      back: '返回对话',
      title: 'Telework 远程开发',
      description: '查看这台 DSH 主机可以使用的 SSH 目标。当前版本只读取本机 OpenSSH 配置；文件、shell 和终端仍在本机运行。',
      refresh: '刷新',
      refreshing: '刷新中…',
      loading: '正在检查本机 OpenSSH 配置…',
      targetsLabel: '个目标',
      emptyTitle: '尚未配置 SSH 目标',
      emptyBody: '在 profile 补丁的 Telework 插件行中添加目标，然后刷新。',
      configHint: 'profile 补丁示例：',
      errorTitle: '无法读取 Telework 状态',
      errorBody: '无法访问 DSH 主机的状态接口，请刷新 Web GUI 后重试。',
      retry: '重试',
      hostLabel: '主机',
      workspaceLabel: '远端工作区',
      aliasLabel: 'SSH 别名',
      statusOk: 'OpenSSH 配置已解析',
      statusError: 'OpenSSH 配置解析失败',
      notImplemented: '远端文件与 shell 执行尚未实现。',
      noHost: '未解析',
    }

    const CONFIG_SAMPLE = [
      '- id: telework',
      '  name: dsh-telework',
      '  config:',
      '    targets:',
      '      - id: devbox',
      '        alias: devbox',
      '        workspace: /srv/app',
    ].join('\n')

    const CSS = `
      .telework-page {
        box-sizing: border-box;
        height: 100%;
        overflow-y: auto;
        color: var(--dsw-alias-label-primary);
      }
      .telework-inner {
        box-sizing: border-box;
        max-width: 880px;
        margin: 0 auto;
        padding: 28px 32px 56px;
      }
      .telework-title {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      .telework-description {
        max-width: 680px;
        margin: 8px 0 0;
        font-size: 13px;
        line-height: 1.65;
        color: var(--dsw-alias-label-secondary);
      }
      .telework-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        margin: 22px 0 14px;
      }
      .telework-button {
        appearance: none;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
        font: inherit;
        font-size: 12px;
        line-height: 1;
        padding: 7px 12px;
        cursor: pointer;
      }
      .telework-button:hover:not(:disabled) {
        background: var(--dsw-alias-bg-layer-2);
        border-color: var(--dsw-alias-border-l2);
      }
      .telework-button:focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 2px;
      }
      .telework-button:disabled {
        opacity: 0.55;
        cursor: default;
      }
      .telework-count {
        font-size: 12px;
        color: var(--dsw-alias-label-secondary);
      }
      .telework-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .telework-card {
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
        padding: 12px 14px;
      }
      .telework-card-head {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      .telework-dot {
        width: 8px;
        height: 8px;
        flex: none;
        border-radius: 50%;
        background: var(--dsw-alias-state-success-primary);
      }
      .telework-dot.is-error {
        background: var(--dsw-alias-state-error-primary);
      }
      .telework-id {
        font-size: 13px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .telework-alias {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
        font-size: 12px;
        color: var(--dsw-alias-label-secondary);
      }
      .telework-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 16px;
        margin-top: 8px;
        font-size: 12px;
        line-height: 1.55;
        color: var(--dsw-alias-label-secondary);
      }
      .telework-meta b {
        font-weight: 500;
        color: var(--dsw-alias-label-primary);
      }
      .telework-error,
      .telework-warning {
        margin: 8px 0 0;
        font-size: 12px;
        line-height: 1.55;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .telework-error {
        color: var(--dsw-alias-state-error-primary);
      }
      .telework-warning {
        color: var(--dsw-alias-state-warn-primary);
      }
      .telework-empty {
        border: 1px dashed var(--dsw-alias-border-l2);
        border-radius: 8px;
        padding: 18px 20px;
      }
      .telework-empty h3 {
        margin: 0 0 6px;
        font-size: 14px;
        font-weight: 600;
      }
      .telework-empty p {
        margin: 0;
        font-size: 13px;
        line-height: 1.6;
        color: var(--dsw-alias-label-secondary);
      }
      .telework-code {
        margin: 12px 0 0;
        padding: 12px;
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-2);
        font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
        font-size: 12px;
        line-height: 1.55;
        overflow-x: auto;
      }
      .telework-state {
        margin: 20px 0;
        font-size: 13px;
        color: var(--dsw-alias-label-secondary);
      }
      .telework-error-card {
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
        padding: 16px;
      }
      .telework-error-card h3 {
        margin: 0 0 6px;
        font-size: 14px;
        font-weight: 600;
      }
      .telework-error-card p {
        margin: 0;
        font-size: 13px;
        line-height: 1.6;
        color: var(--dsw-alias-label-secondary);
      }
      .telework-error-detail {
        margin-top: 8px !important;
        font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
        font-size: 12px !important;
        color: var(--dsw-alias-label-secondary);
        white-space: pre-wrap;
        word-break: break-word;
      }
      .telework-error-card .telework-button {
        margin-top: 12px;
      }
      .telework-note {
        margin: 18px 0 0;
        font-size: 12px;
        color: var(--dsw-alias-label-secondary);
      }
    `

    function useLocaleRefresh(ctx) {
      const [, force] = useReducer((value) => value + 1, 0)
      useEffect(() => ctx.locale.subscribe(() => force()), [ctx])
    }

    function TeleworkIcon({ size = 16, active = false }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        'aria-hidden': true,
        style: { display: 'block', color: active ? 'var(--dsw-alias-brand-primary)' : 'currentColor' },
      },
        h('rect', { x: 1.5, y: 2.5, width: 13, height: 11, rx: 2.5, stroke: 'currentColor', strokeWidth: 1.4 }),
        h('path', { d: 'M4.5 6.5 6.5 8l-2 1.5', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        h('path', { d: 'M8.5 10h3', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' }),
      )
    }

    function renderTarget(target, t) {
      const endpoint = target.hostname === undefined
        ? undefined
        : `${target.user === undefined ? '' : `${target.user}@`}${target.hostname}${target.port === undefined ? '' : `:${target.port}`}`
      const ok = target.error === undefined
      const status = ok ? t('statusOk') : t('statusError')
      return h('article', { className: 'telework-card', key: target.id },
        h('div', { className: 'telework-card-head' },
          h('span', {
            className: `telework-dot${ok ? '' : ' is-error'}`,
            role: 'img',
            'aria-label': status,
            title: status,
          }),
          h('span', { className: 'telework-id' }, target.id),
          h('code', { className: 'telework-alias', title: target.alias }, target.alias),
        ),
        h('div', { className: 'telework-meta' },
          h('span', null, h('b', null, `${t('hostLabel')}: `), endpoint ?? t('noHost')),
          target.workspace === undefined
            ? null
            : h('span', null, h('b', null, `${t('workspaceLabel')}: `), target.workspace),
          target.description === undefined ? null : h('span', null, target.description),
        ),
        target.error === undefined ? null : h('p', { className: 'telework-error' }, target.error),
        target.warning === undefined ? null : h('p', { className: 'telework-warning' }, target.warning),
      )
    }

    function TeleworkPanel({ t, onBack }) {
      const [revision, setRevision] = useState(0)
      const [state, setState] = useState({ phase: 'loading', targets: [], error: undefined })

      useEffect(() => {
        const controller = new AbortController()
        setState((previous) => ({
          ...previous,
          phase: previous.targets.length === 0 ? 'loading' : 'refreshing',
          error: undefined,
        }))
        fetch('/telework/status', {
          signal: controller.signal,
          cache: 'no-store',
          headers: { accept: 'application/json' },
        })
          .then(async (response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`)
            const type = response.headers.get('content-type') ?? ''
            if (!type.includes('application/json')) throw new Error(`Unexpected response (${response.status})`)
            const body = await response.json()
            if (!Array.isArray(body.targets)) throw new Error('Malformed Telework response')
            setState({ phase: 'ready', targets: body.targets, error: undefined })
          })
          .catch((error) => {
            if (controller.signal.aborted) return
            setState({ phase: 'error', targets: [], error: error instanceof Error ? error.message : String(error) })
          })
        return () => controller.abort()
      }, [revision])

      const busy = state.phase === 'loading' || state.phase === 'refreshing'
      const refresh = () => setRevision((value) => value + 1)

      let content
      if (state.phase === 'error') {
        content = h('div', { className: 'telework-error-card', role: 'alert' },
          h('h3', null, t('errorTitle')),
          h('p', null, t('errorBody')),
          h('p', { className: 'telework-error-detail' }, String(state.error)),
          h('button', { type: 'button', className: 'telework-button', onClick: refresh }, t('retry')),
        )
      } else if (state.phase === 'loading' && state.targets.length === 0) {
        content = h('p', { className: 'telework-state', role: 'status' }, t('loading'))
      } else if (state.targets.length === 0) {
        content = h('div', { className: 'telework-empty' },
          h('h3', null, t('emptyTitle')),
          h('p', null, t('emptyBody')),
          h('p', null, t('configHint')),
          h('pre', { className: 'telework-code' }, CONFIG_SAMPLE),
        )
      } else {
        content = h('div', { className: 'telework-list' }, state.targets.map((target) => renderTarget(target, t)))
      }

      return h('div', { className: 'telework-page' },
        h('style', null, CSS),
        h('div', { className: 'telework-inner' },
          h('header', null,
            h('h2', { className: 'telework-title' }, t('title')),
            h('p', { className: 'telework-description' }, t('description')),
          ),
          h('div', { className: 'telework-toolbar' },
            h('button', { type: 'button', className: 'telework-button', onClick: onBack }, t('back')),
            h('button', {
              type: 'button',
              className: 'telework-button',
              onClick: refresh,
              disabled: busy,
              'aria-busy': busy,
            }, busy ? t('refreshing') : t('refresh')),
            h('span', { className: 'telework-count', 'aria-live': 'polite' },
              `${state.targets.length} ${t('targetsLabel')}`),
          ),
          content,
          h('p', { className: 'telework-note' }, t('notImplemented')),
        ),
      )
    }

    return {
      inject: ['slots', 'locale', 'layout'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register('telework', 'en', EN), 'telework: English dictionary')
        ctx.effect(() => ctx.locale.register('telework', 'zh', ZH), 'telework: Chinese dictionary')
        const t = ctx.locale.bind('telework')

        const TeleworkPanelBound = () => {
          useLocaleRefresh(ctx)
          return h(TeleworkPanel, { t, onBack: () => ctx.layout.selectPanel(null) })
        }

        const SidebarToggle = () => h('button', {
          type: 'button',
          'aria-label': t('toggleSidebar'),
          title: t('toggleSidebar'),
          onClick: () => ctx.layout.toggleSidebar(),
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            flex: 'none',
            padding: 0,
            border: 'none',
            borderRadius: 6,
            background: 'transparent',
            color: 'var(--dsw-alias-label-secondary)',
            cursor: 'pointer',
          },
        }, h('svg', {
          width: 16,
          height: 16,
          viewBox: '0 0 16 16',
          fill: 'none',
          'aria-hidden': true,
        },
          h('rect', { x: 1.5, y: 2.5, width: 13, height: 11, rx: 2, stroke: 'currentColor', strokeWidth: 1.3 }),
          h('path', { d: 'M6 3v10', stroke: 'currentColor', strokeWidth: 1.3 }),
        ))

        // The sidebar's global panel list selects a `main` panel by id; the
        // icon component gets { size, active } and the label is localized.
        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main',
          key: 'telework',
        }, TeleworkPanelBound))

        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist',
          id: 'telework',
          order: 20,
          label: () => t('panelLabel'),
        }, TeleworkIcon))

        // A persistent sidebar toggle outside the collapsing column: the
        // conversation header stays visible when the sidebar is hidden, so the
        // user always has a way back. The VS Code-style top bar can grow here.
        ctx.slots.inject('conversation.header.leading', () => ctx.slots.register({
          name: 'conversation.header.leading',
        }, SidebarToggle))
      },
    }
  },
})
