/** Registers the sidebar shell and global panel navigation. */
import type {} from '@deepseek-ai/dsh-client-product-analytics/client'
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import { createSnapshotStore } from '@deepseek-ai/dsh-client-store'
import { resolveSlotLabel } from '@deepseek-ai/dsh-client-ui-slots'
import type { MainPanelId } from '@deepseek-ai/dsh-client-ui-layout/client'
// Type-only: pulls the locale plugin's Context merge (ctx.locale).
import type {} from '@deepseek-ai/dsh-client-locale/client'
// Type-only: pulls the SlotRegistry service merge (ctx.slots).
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
// Type-only: pulls the Session root standard-props merge.
import type {} from '@deepseek-ai/dsh-client-ui-session/client'
import type { SidebarPanelMetadata, SidebarRootInjected, SidebarSectionInjected } from './contract/slots.ts'
import { createPanelPins } from './panel-pins.ts'
import { HeaderLeadingControls } from './HeaderLeadingControls.tsx'
import { SidebarRoot } from './SidebarRoot.tsx'
import { PanelIcon } from './PanelIcon.tsx'
import { en, ja, es, fr, de, ru, pt, zh, type SidebarKey } from './locales.ts'

export type {
  SidebarBrandMarkOwnerProps, SidebarBrandNameOwnerProps, SidebarFooterActionOwnerProps,
  SidebarPanelActionEntry, SidebarPanelActionsOwnerProps, SidebarPanelIconOwnerProps, SidebarPanelMetadata,
  SidebarRootComponentProps, SidebarRootInjected, SidebarSectionOwnerProps, SidebarSessionActionOwnerProps,
  SidebarSettingsOwnerProps, SectionScroller, SidebarSectionHookContext, SidebarSectionInjected, UseSectionScroller,
} from './contract/slots.ts'
export type { SidebarKey } from './locales.ts'

/** The section occupant receives the scroller hook from each render's hookContext. */
const SIDEBAR_SECTION_INJECT: SidebarSectionInjected = {
  hooks: { sectionScroller: (_standard, { useSectionScroller }) => useSectionScroller },
}

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Sidebar controls and global panel copy. */
    sidebar: SidebarKey
  }
}

/** Dictionary namespace owned by this plugin. */
const NS = 'sidebar'

interface WorkspaceNavigation {
  startSession(workspaceId?: Parameters<SidebarRootInjected['startSession']>[0]): void
  openSession(sessionId: string): void
}

interface WorkspaceRegistry {
  create(input: { path: string }): Promise<{ workspaceId: string, path: string, title: string }>
  list: { getSnapshot(): { items: readonly { workspaceId: string }[] } }
}

interface SessionController {
  create(request: { workspaceId: string }): Promise<string>
}

interface SidebarRightController {
  openTabs: {
    getSnapshot(): readonly { sessionId: string, tabId: string, kind: string }[]
  }
  openResource(address: string, options?: { replaceTab?: string }): void
}

/** Build the same dsh-resource file address the document-preview provider claims. */
function sessionFileAddress(sessionId: string, path: string): string {
  const encode = (segment: string): string => encodeURIComponent(segment).replace(/%3A/gi, ':')
  const normalized = path.replace(/\\/g, '/').replace(/^(?:\.\/)+/u, '')
  return `dsh-resource://file/session/${encode(sessionId)}/${normalized.split('/').map(encode).join('/')}`
}

/** Services required by the sidebar plugin. */
export const inject = ['slots', 'layout', 'uiWorkspace', 'workspaces', 'sessions', 'sidebarRight', 'locale', 'shortcuts']

const TELEWORK_RELOAD_GUARD = 'dsh-telework.ui-reload-at'

/** Reload into a new client graph, at most once per 15 seconds per tab. */
function scheduleUiReload(): void {
  if (typeof window === 'undefined') return
  try {
    const last = Number(window.sessionStorage.getItem(TELEWORK_RELOAD_GUARD) ?? 0)
    if (Number.isFinite(last) && Date.now() - last < 15_000) return
    window.sessionStorage.setItem(TELEWORK_RELOAD_GUARD, String(Date.now()))
  } catch {
    // Storage can be denied; still reload once from this stack.
  }
  window.setTimeout(() => { window.location.reload() }, 250)
}

/** Registers the sidebar shell and its service callbacks.
 * @param ctx - Client root context.
 */
export function apply(ctx: ClientContext): void {
  // One reload at most per 15s. Reinstall/HMR can dispose this vendor several
  // times in a row; an unthrottled reload would loop the whole page.
  ctx.effect(() => () => scheduleUiReload(), 'telework: reload after sidebar unload')
  const workspaceNavigation = ctx.get('uiWorkspace') as unknown as WorkspaceNavigation
  const workspaceRegistry = ctx.get('workspaces') as unknown as WorkspaceRegistry
  const sessionController = ctx.get('sessions') as unknown as SessionController
  const sidebarRight = ctx.get('sidebarRight') as unknown as SidebarRightController
  ctx.effect(() => ctx.locale.register(NS, { zh, en, ja, es, fr, de, ru, pt }), 'ui-sidebar: dictionaries')
  const panels = createSnapshotStore<readonly SidebarPanelMetadata[]>([])
  const syncPanels = (): void => {
    const next = ctx.slots.entriesOfSlot('sidebar.panellist').map(({ options }) => {
      // The list registration requires an id; StoredEntry erases the slot kind.
      const id = options.id as MainPanelId
      return { id, order: options.order ?? 0, label: resolveSlotLabel(options.label) ?? id }
    }).sort((a, b) => a.order - b.order)
    const previous = panels.getSnapshot()
    if (previous.length === next.length && previous.every((panel, index) => {
      const candidate = next[index] as SidebarPanelMetadata
      return panel.id === candidate.id && panel.order === candidate.order && panel.label === candidate.label
    })) return
    panels.set(next)
  }
  ctx.effect(() => ctx.slots.subscribe('sidebar.panellist', syncPanels), 'ui-sidebar: panel entries')
  ctx.effect(() => ctx.locale.subscribe(syncPanels), 'ui-sidebar: panel labels')
  const panelPins = createPanelPins()
  const selection = (workspaceNavigation as unknown as {
    selection?: { getSnapshot: () => { sessionId?: string }, subscribe: (listener: () => void) => () => void }
  }).selection ?? createSnapshotStore<{ sessionId?: string }>({})
  const entryActions = {
    getSnapshot: () => ctx.slots.entriesOfSlot('sidebar.panellist.actions').length > 0,
    subscribe: (listener: () => void) => ctx.slots.subscribe('sidebar.panellist.actions', listener),
  }

  const injectProps = (): SidebarRootInjected => ({
    // The shell's New Session button rides the Workspace UI's shared action
    // (current Session Workspace, then recent Workspace).
    startSession: (workspaceId) => { workspaceNavigation.startSession(workspaceId) },
    openSession: (sessionId) => { workspaceNavigation.openSession(sessionId) },
    openFile: (path) => {
      const sessionId = selection.getSnapshot().sessionId
      if (sessionId === undefined) return
      const tabs = sidebarRight.openTabs.getSnapshot()
      // Prefer the top document; fall back to the guide tab, which occupies the
      // top pane until the first file opens. Never replace the bottom terminal.
      const document = tabs.find(tab => tab.sessionId === sessionId && tab.kind !== 'terminal' && tab.kind !== 'guide')
      const guide = tabs.find(tab => tab.sessionId === sessionId && tab.kind === 'guide')
      const target = document ?? guide
      sidebarRight.openResource(
        sessionFileAddress(sessionId, path),
        target === undefined ? undefined : { replaceTab: target.tabId },
      )
    },
    createWorkspace: (input) => workspaceRegistry.create(input),
    createSession: (workspaceId) => sessionController.create({ workspaceId }),
    toggleSidebar: () => { ctx.layout.toggleSidebar() },
    selectPanel: (id) => { ctx.layout.selectPanel(id) },    setPinned: panelPins.setPinned,
    currentSession: selection,
    waitForWorkspace: (workspaceId) => new Promise<void>((resolve) => {
      const deadline = Date.now() + 4000
      const check = (): void => {
        const items = workspaceRegistry.list.getSnapshot().items
        if (items.some(item => item.workspaceId === workspaceId) || Date.now() >= deadline) {
          resolve()
          return
        }
        window.setTimeout(check, 50)
      }
      check()
    }),
    trackEntryClick: (attributes) => { ctx.get('productAnalytics')?.track('sidebar_menu_click', attributes) },
    hooks: { panels, shortcuts: ctx.shortcuts.catalog, entryPins: panelPins.unpinned, entryActions },
  })
  ctx.slots.inject('sidebar', function* () {
    yield ctx.slots.registerFactory({
      name: 'sidebar.panel.icon', scope: 'root',
      children: { 'sidebar.panellist': { kind: 'list', scope: 'root' } },
    }, PanelIcon)
    yield ctx.slots.register({
      name: 'sidebar',
      locale: NS,
      children: {
        'sidebar.brand.mark': { kind: 'single', scope: 'root' },
        'sidebar.brand.name': { kind: 'single', scope: 'root' },
        'sidebar.toggle.badge': { kind: 'single', scope: 'root' },
        'sidebar.panellist.actions': { kind: 'list', scope: 'root' },
        'sidebar.workspaces': { kind: 'single', scope: 'root', inject: SIDEBAR_SECTION_INJECT },
        'sidebar.settings': { kind: 'single', scope: 'root' },
        'sidebar.footer.action': { kind: 'list', scope: 'root' },
        'sidebar.session.action': { kind: 'hoc', scope: 'root' },
      },
      inject: injectProps,
    }, SidebarRoot)
  })
  // macOS desktop hides the collapsed sidebar entirely, so the open/New
  // Session controls move into the frame's window-chrome seat beside the
  // traffic lights; the occupant reuses the shell's injected actions, and
  // the AppFrame mounts the seat only while the column is fully hidden.
  ctx.slots.inject('shell.leading', () => ctx.slots.register({
    name: 'shell.leading',
    locale: NS,
    inject: injectProps,
  }, HeaderLeadingControls))
  syncPanels()
}
