/**
 * Sidebar shell: column geometry and global panel navigation.
 * Collapse is a slide plus crossfade:
 * content freezes at its expanded width (inline style) and fades out in place
 * while the sliding column (AppFrame grid tracks) clips it — nothing reflows
 * mid-slide. At settle the wide-only content unmounts and the upper
 * controls enter the 56px rail from the same horizontal offset (one icon each,
 * same top-down order) on one fade that ends with the slide. The bottom-pinned
 * settings control only fades. The workspace/session browsing region between
 * global panel rows and the foot is the `sidebar.workspaces` registrant's,
 * and the foot holds `sidebar.settings` plus `sidebar.footer.action`; the shell
 * hands them the wide flag (plus an expand request callback for the browser).
 * Through the browser's hookContext, the shell also hands it the scroller hook
 * that continues wheel scrolling over the sidebar viewport into its list.
 *
 * The column also owns whether the scroll regions nested in it draw a
 * scrollbar at all: the shell tracks the pointer and rebinds ui-theme's
 * scrollbar indirection away while it is elsewhere, so a list the user is not
 * pointing at carries no bar.
 */
import { useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import {
  FishLogo, IconAppsAddOutlineRegular, IconEllipsisOutlineRegular, IconNewChatOutlineMedium, IconNewChatOutlineRegular,
  IconPanelLeftOutlineRegular, IconPinFillRegular, focusWithoutRing, isBehindModal, isDarwinDesktop, Menu, ShortcutKeys, Toast,
  Tooltip, useModalLayer, writeClipboard,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type { InjectFace, PropsRenderFactories, PropsRenderSlots, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type {
  SidebarPanelActionsOwnerProps, SidebarPanelMetadata, SidebarRootComponentProps, SidebarRootInjected, SidebarSectionHookContext,
  SidebarSectionOwnerProps,
} from './contract/slots.ts'
import { FIXED_PANEL_ID } from './panel-pins.ts'
import { createScrollHandoff } from './scroll-handoff.ts'
import css from './SidebarRoot.module.css'

/** Wide-content unmount delay; matches the 150ms wide-content fade-out. */
const COLLAPSE_SETTLE_MS = 150

const EMPTY_SESSION_STORE = {
  getSnapshot: () => ({ sessionId: undefined as string | undefined }),
  subscribe: () => () => {},
}

interface WorkspaceFileEntry {
  readonly name: string
  readonly path: string
  readonly type: 'directory' | 'file' | 'other'
}

/**
 * One lazy file-tree row. Directories load their children on first expand;
 * files are display-only in this first version.
 */
function FileTreeNode({ entry, sessionId, depth, t }: {
  entry: WorkspaceFileEntry
  sessionId: string
  depth: number
  t: (key: string) => string
}) {
  const [open, setOpen] = useState(false)
  const [children, setChildren] = useState<readonly WorkspaceFileEntry[] | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const directory = entry.type === 'directory'
  const toggle = (): void => {
    if (!directory) return
    if (open) { setOpen(false); return }
    setOpen(true)
    if (children !== undefined || loading) return
    setLoading(true)
    setError(undefined)
    fetch(`/telework/files?session=${encodeURIComponent(sessionId)}&path=${encodeURIComponent(entry.path)}`, { cache: 'no-store' })
      .then(async (response) => {
        const body = await response.json() as { entries?: WorkspaceFileEntry[], error?: string }
        if (!response.ok) throw new Error(body.error ?? `HTTP ${response.status}`)
        setChildren(body.entries ?? [])
      })
      .catch((caught: unknown) => { setError(caught instanceof Error ? caught.message : String(caught)) })
      .finally(() => { setLoading(false) })
  }
  return (
    <div>
      <button
        type="button"
        className={css.fileRow}
        style={{ paddingLeft: 8 + depth * 12 }}
        onClick={toggle}
        disabled={!directory}
        aria-expanded={directory ? open : undefined}
        title={entry.path}
      >
        {directory
          ? <svg className={clsx(css.fileArrow, open && css.fileArrowOpen)} width={12} height={12} viewBox="0 0 12 12" aria-hidden="true">
            <path d="M4 2l5 4-5 4z" fill="currentColor" />
          </svg>
          : <span className={css.fileArrow} aria-hidden="true" />}
        <span className={css.fileIcon} aria-hidden="true">
          {directory
            ? <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.5 4A1.5 1.5 0 0 1 3 2.5h3.1l1.2 1.5H13A1.5 1.5 0 0 1 14.5 5.5v6A1.5 1.5 0 0 1 13 13H3a1.5 1.5 0 0 1-1.5-1.5V4Z" />
            </svg>
            : <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.2}>
              <path d="M3.5 2.5h5l4 4v7h-9v-11Z" strokeLinejoin="round" />
              <path d="M8.5 2.5v4h4" strokeLinejoin="round" />
            </svg>}
        </span>
        <span className={css.fileName}>{entry.name}</span>
      </button>
      {open && (
        <div>
          {loading && <div className={css.fileHint} style={{ paddingLeft: 20 + depth * 12 }}>{t('files.loading')}</div>}
          {error !== undefined && <div className={css.fileError} style={{ paddingLeft: 20 + depth * 12 }}>{error}</div>}
          {(children ?? []).map(child => (
            <FileTreeNode key={child.path} entry={child} sessionId={sessionId} depth={depth + 1} t={t} />
          ))}
          {children !== undefined && children.length === 0 && (
            <div className={css.fileHint} style={{ paddingLeft: 20 + depth * 12 }}>{t('files.emptyFolder')}</div>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * The lower half of the Workspaces activity: a read-only tree for the current
 * Session's workspace, backed by the local `/telework/files` route.
 */
function WorkspaceFiles({ currentSession = EMPTY_SESSION_STORE, t }: {
  currentSession?: { getSnapshot: () => { sessionId?: string }, subscribe: (listener: () => void) => () => void }
  t: (key: string) => string
}) {
  const store = currentSession
  const sessionId = useSyncExternalStore(
    store.subscribe,
    () => store.getSnapshot().sessionId,
  )
  const [revision, setRevision] = useState(0)
  const [height, setHeight] = useState<number | null>(() => {
    try {
      const stored = Number(localStorage.getItem('dsh-telework.files.height'))
      return Number.isFinite(stored) && stored >= 96 ? stored : null
    } catch {
      return null
    }
  })
  const heightRef = useRef<number | null>(height)
  const paneRef = useRef<HTMLElement | null>(null)
  const dragRef = useRef<{ startY: number; startHeight: number } | null>(null)
  const [state, setState] = useState<{
    phase: 'loading' | 'ready' | 'error' | 'no-session'
    entries: readonly WorkspaceFileEntry[]
    error?: string
  }>({ phase: sessionId === undefined ? 'no-session' : 'loading', entries: [] })

  useEffect(() => {
    if (sessionId === undefined) {
      setState({ phase: 'no-session', entries: [] })
      return
    }
    const controller = new AbortController()
    setState(previous => ({ ...previous, phase: 'loading', error: undefined }))
    fetch(`/telework/files?session=${encodeURIComponent(sessionId)}`, { signal: controller.signal, cache: 'no-store' })
      .then(async (response) => {
        const body = await response.json() as { entries?: WorkspaceFileEntry[], error?: string }
        if (!response.ok) throw new Error(body.error ?? `HTTP ${response.status}`)
        setState({ phase: 'ready', entries: body.entries ?? [] })
      })
      .catch((caught: unknown) => {
        if (controller.signal.aborted) return
        setState({ phase: 'error', entries: [], error: caught instanceof Error ? caught.message : String(caught) })
      })
    return () => controller.abort()
  }, [sessionId, revision])

  const applyHeight = (next: number): void => {
    heightRef.current = next
    setHeight(next)
  }
  const persistHeight = (): void => {
    try {
      const value = heightRef.current
      if (value !== null) localStorage.setItem('dsh-telework.files.height', String(value))
    } catch {
      // Private browsing or a storage-denied carrier: the resize stays in memory.
    }
  }
  const maxHeight = (): number => {
    const parent = paneRef.current?.parentElement
    if (parent === null || parent === undefined) return 600
    return Math.max(128, parent.getBoundingClientRect().height - 96)
  }
  const onResizeStart = (event: ReactPointerEvent<HTMLDivElement>): void => {
    const rect = paneRef.current?.getBoundingClientRect()
    if (rect === undefined) return
    event.preventDefault()
    dragRef.current = { startY: event.clientY, startHeight: rect.height }
    event.currentTarget.setPointerCapture(event.pointerId)
  }
  const onResizeMove = (event: ReactPointerEvent<HTMLDivElement>): void => {
    const drag = dragRef.current
    if (drag === null) return
    const next = Math.min(maxHeight(), Math.max(96, drag.startHeight + drag.startY - event.clientY))
    applyHeight(Math.round(next))
  }
  const onResizeEnd = (event: ReactPointerEvent<HTMLDivElement>): void => {
    if (dragRef.current === null) return
    dragRef.current = null
    try {
      event.currentTarget.releasePointerCapture(event.pointerId)
    } catch {
      // The pointer may already be released by a cancelled capture.
    }
    persistHeight()
  }
  const onResizeKey = (event: ReactKeyboardEvent<HTMLDivElement>): void => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return
    event.preventDefault()
    const base = heightRef.current ?? paneRef.current?.getBoundingClientRect().height ?? 200
    const next = Math.min(maxHeight(), Math.max(96, base + (event.key === 'ArrowUp' ? 16 : -16)))
    applyHeight(Math.round(next))
    persistHeight()
  }

  return (
    <section
      ref={paneRef}
      className={css.filesPane}
      style={height === null ? undefined : { flex: `0 0 ${height}px` }}
      aria-label={t('files.label')}
    >
      <div
        className={css.filesSplit}
        role="separator"
        aria-orientation="horizontal"
        aria-label={t('files.resize')}
        aria-valuemin={96}
        aria-valuenow={height ?? undefined}
        tabIndex={0}
        onPointerDown={onResizeStart}
        onPointerMove={onResizeMove}
        onPointerUp={onResizeEnd}
        onPointerCancel={onResizeEnd}
        onKeyDown={onResizeKey}
      />
      <header className={css.filesHeader}>
        <span className={css.filesTitle}>{t('files.label')}</span>
        <button
          type="button"
          className={css.filesRefresh}
          aria-label={t('files.refresh')}
          title={t('files.refresh')}
          onClick={() => { setRevision(value => value + 1) }}
          disabled={sessionId === undefined}
        >
          ↻
        </button>
      </header>
      <div className={css.filesBody}>
        {state.phase === 'no-session' && <div className={css.fileHint}>{t('files.noSession')}</div>}
        {state.phase === 'loading' && <div className={css.fileHint}>{t('files.loading')}</div>}
        {state.phase === 'error' && <div className={css.fileError}>{state.error}</div>}
        {state.phase === 'ready' && state.entries.length === 0 && <div className={css.fileHint}>{t('files.empty')}</div>}
        {state.phase === 'ready' && state.entries.map(entry => (
          <FileTreeNode key={entry.path} entry={entry} sessionId={sessionId as string} depth={0} t={t} />
        ))}
      </div>
    </section>
  )
}

/**
 * Sidebar-local Remote surface: connection form plus recent server history.
 * The SSH backend is not wired yet; connecting records the server so the UI
 * flow and persistence can be exercised without storing a password.
 */
interface RemoteHistoryEntry {
  host: string
  username: string
  port: string
  at: number
  remember?: boolean
}

interface RemoteConnectionSummary {
  id: string
  host: string
  username: string
  port: string
}

type SharedRemoteStatus = 'connecting' | 'connected' | 'error'

interface SharedRemoteConnection {
  id: string
  host: string
  username: string
  port: string
  status: SharedRemoteStatus
  error?: string
  at: number
}

interface SharedRemoteWorkspace {
  id: string
  connectionId: string
  path: string
  at: number
  host?: string
  username?: string
  port?: string
  sessions?: readonly string[]
  localWorkspaceId?: string
}

interface SharedRemoteStore {
  get: () => readonly SharedRemoteConnection[]
  subscribe: (listener: () => void) => () => void
  add: (input: { host: string, username: string, port: string, status?: SharedRemoteStatus, id?: string }) => SharedRemoteConnection
  update: (id: string, patch: Partial<Omit<SharedRemoteConnection, 'id'>>) => void
  remove: (id: string) => void
  getWorkspaces: () => readonly SharedRemoteWorkspace[]
  addWorkspace: (connectionId: string, path: string) => SharedRemoteWorkspace
  removeWorkspace: (id: string) => void
  relinkWorkspaces: () => void
  addSession: (workspaceId: string, sessionId: string) => boolean
  setLocalWorkspaceId: (workspaceId: string, localWorkspaceId: string) => void
}

declare global {
  interface Window {
    __DSH_TELEWORK_REMOTE__?: SharedRemoteStore
  }
}

/**
 * One in-page connection registry shared by the sidebar, the shell status bar,
 * and the rail badge. The Host-backed registry will replace this projection
 * once SSH connects for real; consumers already read through this narrow API.
 */
function ensureRemoteStore(): SharedRemoteStore {
  if (window.__DSH_TELEWORK_REMOTE__ !== undefined) return window.__DSH_TELEWORK_REMOTE__
  const listeners = new Set<() => void>()
  let connections: SharedRemoteConnection[] = []
  let workspaces: SharedRemoteWorkspace[] = readStoredWorkspaces()
  const emit = (): void => {
    for (const listener of listeners) listener()
  }
  const store: SharedRemoteStore = {
    get: () => connections,
    subscribe: (listener) => {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    add: (input) => {
      const existing = connections.find(item => (
        item.host === input.host && item.username === input.username && item.port === input.port
      ))
      if (existing !== undefined) {
        const id = input.id ?? existing.id
        const status = input.status ?? existing.status
        if (existing.status !== status || existing.id !== id) {
          connections = connections.map(item => item.id === existing.id ? { ...item, id, status } : item)
          emit()
          return { ...existing, id, status }
        }
        return existing
      }
      const connection: SharedRemoteConnection = {
        id: input.id ?? `remote-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        host: input.host,
        username: input.username,
        port: input.port,
        status: input.status ?? 'connecting',
        at: Date.now(),
      }
      connections = [...connections, connection]
      emit()
      return connection
    },
    update: (id, patch) => {
      connections = connections.map(item => item.id === id ? { ...item, ...patch } : item)
      emit()
    },
    remove: (id) => {
      connections = connections.filter(item => item.id !== id)
      // A disconnect must not take the remote workspaces with it. The persisted
      // list is authoritative here, so an in-memory reset cannot hide them.
      const persisted = readStoredWorkspaces()
      if (persisted.length > 0) workspaces = persisted
      emit()
    },
    getWorkspaces: () => workspaces,
    addWorkspace: (connectionId, path) => {
      const existing = workspaces.find(item => item.connectionId === connectionId && item.path === path)
      if (existing !== undefined) return existing
      const connection = connections.find(item => item.id === connectionId)
      const workspace: SharedRemoteWorkspace = {
        id: `workspace-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        connectionId,
        path,
        at: Date.now(),
        host: connection?.host,
        username: connection?.username,
        port: connection?.port,
      }
      workspaces = [...workspaces, workspace]
      writeStoredWorkspaces(workspaces)
      emit()
      return workspace
    },
    removeWorkspace: (id) => {
      workspaces = workspaces.filter(item => item.id !== id)
      writeStoredWorkspaces(workspaces)
      emit()
    },
    relinkWorkspaces: () => {
      const active = connections.filter(item => item.status === 'connected')
      let changed = false
      workspaces = workspaces.map((workspace) => {
        if (active.some(item => item.id === workspace.connectionId)) return workspace
        const match = active.find(item => (
          item.host === workspace.host
          && item.username === workspace.username
          && (workspace.port === undefined || workspace.port === '' || String(item.port) === String(workspace.port))
        ))
        if (match === undefined) return workspace
        changed = true
        return { ...workspace, connectionId: match.id, port: workspace.port ?? match.port }
      })
      if (!changed) return
      writeStoredWorkspaces(workspaces)
      emit()
    },
    addSession: (workspaceId, sessionId) => {
      let changed = false
      workspaces = workspaces.map((workspace) => {
        if (workspace.id !== workspaceId) return workspace
        const sessions = workspace.sessions ?? []
        if (sessions.includes(sessionId)) return workspace
        changed = true
        return { ...workspace, sessions: [...sessions, sessionId] }
      })
      if (!changed) return false
      writeStoredWorkspaces(workspaces)
      emit()
      return true
    },
    setLocalWorkspaceId: (workspaceId, localWorkspaceId) => {
      workspaces = workspaces.map(workspace => (
        workspace.id === workspaceId ? { ...workspace, localWorkspaceId } : workspace
      ))
      writeStoredWorkspaces(workspaces)
      emit()
    },
  }
  window.__DSH_TELEWORK_REMOTE__ = store
  return store
}

const REMOTE_HISTORY_KEY = 'dsh-telework.remote.history'
const REMOTE_PASSWORDS_KEY = 'dsh-telework.remote.passwords'
const REMOTE_WORKSPACES_KEY = 'dsh-telework.remote.workspaces'

function remoteHistoryKey(entry: Pick<RemoteHistoryEntry, 'host' | 'username' | 'port'>): string {
  return `${entry.username}@${entry.host}:${entry.port}`
}

function readRemoteHistory(): RemoteHistoryEntry[] {
  try {
    const raw = localStorage.getItem(REMOTE_HISTORY_KEY)
    if (raw === null) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter((entry): entry is RemoteHistoryEntry => (
      typeof entry === 'object' && entry !== null
      && typeof (entry as RemoteHistoryEntry).host === 'string'
      && typeof (entry as RemoteHistoryEntry).username === 'string'
      && typeof (entry as RemoteHistoryEntry).port === 'string'
      && typeof (entry as RemoteHistoryEntry).at === 'number'
    )).slice(0, 20)
  } catch {
    return []
  }
}

function writeRemoteHistory(entries: RemoteHistoryEntry[]): void {
  try {
    localStorage.setItem(REMOTE_HISTORY_KEY, JSON.stringify(entries))
  } catch {
    // History is a convenience; a denied store leaves the current list in memory.
  }
}

function readRemotePasswords(): Record<string, string> {
  try {
    const parsed = JSON.parse(localStorage.getItem(REMOTE_PASSWORDS_KEY) ?? '{}') as unknown
    if (typeof parsed !== 'object' || parsed === null) return {}
    const result: Record<string, string> = {}
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === 'string') result[key] = value
    }
    return result
  } catch {
    return {}
  }
}

function writeRemotePasswords(passwords: Record<string, string>): void {
  try {
    localStorage.setItem(REMOTE_PASSWORDS_KEY, JSON.stringify(passwords))
  } catch {
    // The remembered password is a convenience; a denied store drops it.
  }
}

function saveRemotePassword(key: string, password: string | null): void {
  const passwords = readRemotePasswords()
  if (password === null || password === '') delete passwords[key]
  else passwords[key] = password
  writeRemotePasswords(passwords)
}

function readStoredWorkspaces(): SharedRemoteWorkspace[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(REMOTE_WORKSPACES_KEY) ?? '[]') as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter((entry): entry is SharedRemoteWorkspace => (
      typeof entry === 'object' && entry !== null
      && typeof (entry as SharedRemoteWorkspace).id === 'string'
      && typeof (entry as SharedRemoteWorkspace).connectionId === 'string'
      && typeof (entry as SharedRemoteWorkspace).path === 'string'
      && typeof (entry as SharedRemoteWorkspace).at === 'number'
    ))
  } catch {
    return []
  }
}

function writeStoredWorkspaces(workspaces: readonly SharedRemoteWorkspace[]): void {
  try {
    localStorage.setItem(REMOTE_WORKSPACES_KEY, JSON.stringify(workspaces))
  } catch {
    // The list stays in memory when storage is unavailable.
  }
}

/** Parse `ssh user@host`, `ssh -p 2222 user@host`, or a bare `user@host`. */
function parseSshCommand(input: string): { host: string, username: string, port: string } {
  const result = { host: '', username: '', port: '' }
  const tokens = input.trim().split(/\s+/).filter(Boolean)
  if (tokens[0] === 'ssh') tokens.shift()
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index]
    if (token === '-p' || token === '-P') {
      result.port = tokens[index + 1] ?? ''
      index += 1
      continue
    }
    if (token === '-l') {
      result.username = tokens[index + 1] ?? ''
      index += 1
      continue
    }
    if (token.startsWith('-')) continue
    const at = token.lastIndexOf('@')
    if (at > 0) {
      result.username = token.slice(0, at)
      result.host = token.slice(at + 1)
      continue
    }
    if (result.host === '') result.host = token
  }
  return result
}

function RemoteConnectionPanel({ t, onConnectionChange, onNewSession, onOpenSession, workspaces }: {
  t: (key: string) => string
  onConnectionChange: (connection: RemoteConnectionSummary | null) => void
  onNewSession: (workspace: SharedRemoteWorkspace) => void
  onOpenSession: (sessionId: string) => void
  workspaces: readonly SharedRemoteWorkspace[]
}) {
  const remoteStore = useMemo(ensureRemoteStore, [])
  const connections = useSyncExternalStore(remoteStore.subscribe, remoteStore.get)
  const [command, setCommand] = useState('')
  const [host, setHost] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [port, setPort] = useState('22')
  const [rememberPassword, setRememberPassword] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [statusTone, setStatusTone] = useState<'info' | 'error' | 'success'>('info')
  const [connecting, setConnecting] = useState(false)
  const [history, setHistory] = useState<RemoteHistoryEntry[]>(() => readRemoteHistory())

  const parseCommand = (): void => {
    const parsed = parseSshCommand(command)
    if (parsed.host === '') {
      setStatus(t('remote.invalid'))
      setStatusTone('error')
      return
    }
    setHost(parsed.host)
    if (parsed.username !== '') setUsername(parsed.username)
    if (parsed.port !== '') setPort(parsed.port)
    setStatus(null)
  }

  const rememberConnection = (entry: RemoteHistoryEntry): void => {
    const next = [entry, ...history.filter(item => !(
      item.host === entry.host && item.username === entry.username && item.port === entry.port
    ))].slice(0, 20)
    setHistory(next)
    writeRemoteHistory(next)
  }

  const connect = async (): Promise<void> => {
    if (connecting) return
    const nextHost = host.trim()
    const nextUsername = username.trim()
    if (nextHost === '' || nextUsername === '') {
      setStatus(t('remote.required'))
      setStatusTone('error')
      return
    }
    const entry: RemoteHistoryEntry = {
      host: nextHost,
      username: nextUsername,
      port: port.trim() === '' ? '22' : port.trim(),
      at: Date.now(),
      remember: rememberPassword,
    }
    const key = remoteHistoryKey(entry)
    setConnecting(true)
    setStatus(t('remote.connecting'))
    setStatusTone('info')
    try {
      const response = await fetch('/telework/remote/connect', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          host: entry.host,
          port: Number(entry.port),
          username: entry.username,
          password,
        }),
      })
      const text = await response.text()
      let body: { id?: string, host?: string, username?: string, port?: number, error?: string } = {}
      if (text !== '') {
        try {
          body = JSON.parse(text) as typeof body
        } catch {
          throw new Error(`SSH endpoint returned an unexpected response (HTTP ${response.status})`)
        }
      }
      if (!response.ok || typeof body.id !== 'string') {
        throw new Error(body.error ?? (text === ''
          ? `SSH connection failed (HTTP ${response.status})`
          : text.slice(0, 300)))
      }
      rememberConnection(entry)
      saveRemotePassword(key, rememberPassword ? password : null)
      setPassword('')
      onConnectionChange({
        id: body.id,
        host: body.host ?? entry.host,
        username: body.username ?? entry.username,
        port: String(body.port ?? entry.port),
      })
      setStatus(t('remote.connectSuccess'))
      setStatusTone('success')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error))
      setStatusTone('error')
    } finally {
      setConnecting(false)
    }
  }

  const useEntry = (entry: RemoteHistoryEntry): void => {
    setHost(entry.host)
    setUsername(entry.username)
    setPort(entry.port)
    setRememberPassword(entry.remember === true)
    setPassword(entry.remember === true ? (readRemotePasswords()[remoteHistoryKey(entry)] ?? '') : '')
    setStatus(null)
  }

  const removeEntry = (entry: RemoteHistoryEntry): void => {
    const key = remoteHistoryKey(entry)
    saveRemotePassword(key, null)
    const next = history.filter(item => remoteHistoryKey(item) !== key)
    setHistory(next)
    writeRemoteHistory(next)
  }

  return (
    <div className={css.remotePanel}>
      <div className={css.remoteForm}>
        <div className={css.remoteSectionTitle}>{t('remote.title')}</div>

        <label className={css.remoteField}>
          <span className={css.remoteLabel}>{t('remote.command')}</span>
          <span className={css.remoteCommandRow}>
            <input
              className={css.remoteInput}
              value={command}
              placeholder={t('remote.commandPlaceholder')}
              spellCheck={false}
              autoComplete="off"
              onChange={(event) => { setCommand(event.target.value); setStatus(null) }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  parseCommand()
                }
              }}
            />
            <button type="button" className={css.remoteParseButton} onClick={parseCommand}>
              {t('remote.parse')}
            </button>
          </span>
        </label>

        <div className={css.remoteRow}>
          <label className={clsx(css.remoteField, css.remoteFieldGrow)}>
            <span className={css.remoteLabel}>{t('remote.host')}</span>
            <input
              className={css.remoteInput}
              value={host}
              placeholder={t('remote.hostPlaceholder')}
              spellCheck={false}
              autoComplete="off"
              onChange={(event) => { setHost(event.target.value); setStatus(null) }}
            />
          </label>
          <label className={clsx(css.remoteField, css.remoteFieldPort)}>
            <span className={css.remoteLabel}>{t('remote.port')}</span>
            <input
              className={css.remoteInput}
              value={port}
              inputMode="numeric"
              placeholder="22"
              autoComplete="off"
              onChange={(event) => { setPort(event.target.value); setStatus(null) }}
            />
          </label>
        </div>

        <label className={css.remoteField}>
          <span className={css.remoteLabel}>{t('remote.username')}</span>
          <input
            className={css.remoteInput}
            value={username}
            placeholder={t('remote.usernamePlaceholder')}
            spellCheck={false}
            autoComplete="off"
            onChange={(event) => { setUsername(event.target.value); setStatus(null) }}
          />
        </label>

        <label className={css.remoteField}>
          <span className={css.remoteLabel}>
            {t('remote.password')}
            <span className={css.remotePasswordHint}>
              {rememberPassword ? t('remote.passwordSaved') : t('remote.passwordNotSaved')}
            </span>
          </span>
          <input
            className={css.remoteInput}
            type="password"
            value={password}
            placeholder={t('remote.passwordPlaceholder')}
            autoComplete="new-password"
            onChange={(event) => { setPassword(event.target.value); setStatus(null) }}
          />
        </label>

        <label className={css.remoteRemember}>
          <input
            type="checkbox"
            checked={rememberPassword}
            onChange={(event) => { setRememberPassword(event.target.checked); setStatus(null) }}
          />
          <span>{t('remote.rememberPassword')}</span>
        </label>

        {status !== null && (
          <p
            className={clsx(
              css.remoteStatus,
              statusTone === 'success' && css.remoteStatusSuccess,
              statusTone === 'error' && css.remoteStatusError,
            )}
            role="status"
          >
            {status}
          </p>
        )}

        <button type="button" className={css.remoteConnectButton} onClick={connect} disabled={connecting}>
          <svg width={14} height={14} viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 2.5h10v11H3v-11Z" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 5.5h4M6 8h4M6 10.5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {connecting ? t('remote.connecting') : t('remote.connect')}
        </button>
      </div>

      <div className={css.remoteHistory}>
        <div className={css.remoteHistoryHeader}>
          <span>{t('remote.history')}</span>
          <span className={css.remoteHistoryCount}>{history.length}</span>
        </div>
        <div className={css.remoteHistoryList}>
          {history.length === 0 && <p className={css.remoteEmpty}>{t('remote.empty')}</p>}
          {history.map(entry => {
            const key = remoteHistoryKey(entry)
            const connected = connections.some(item => item.status === 'connected' && remoteHistoryKey(item) === key)
            return (
              <div key={key} className={clsx(css.remoteHistoryRow, connected && css.remoteHistoryRowConnected)}>
                <button
                  type="button"
                  className={css.remoteHistoryMain}
                  onClick={() => { useEntry(entry) }}
                  title={`${entry.username}@${entry.host}:${entry.port}`}
                >
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect
                      className={clsx(css.remoteHistoryScreen, connected && css.remoteHistoryScreenConnected)}
                      x="2.5" y="3" width="11" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.2"
                    />
                    <path d="M6 13h4M8 10v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className={css.remoteHistoryText}>
                    <span className={css.remoteHistoryHost}>{entry.username}@{entry.host}</span>
                    <span className={css.remoteHistoryMeta}>:{entry.port}</span>
                    {connected && <span className={css.remoteConnectedBadge}>{t('remote.connected')}</span>}
                  </span>
                </button>
                <button
                  type="button"
                  className={css.remoteDelete}
                  aria-label={t('remote.remove')}
                  title={t('remote.remove')}
                  onClick={() => { removeEntry(entry) }}
                >
                  <svg width={14} height={14} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3.5 4.5h9M6.5 4.5v-1h3v1M5 4.5l.5 8h5l.5-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {workspaces.length > 0 && (
        <div className={css.remoteWorkspacesPanel}>
          <RemoteWorkspaceList
            workspaces={workspaces}
            connections={connections}
            t={t}
            onOpen={() => { setStatus(t('remote.workspaceOpenSoon')); setStatusTone('info') }}
            onNewSession={onNewSession}
            onOpenSession={onOpenSession}
            onRemove={(id) => { remoteStore.removeWorkspace(id) }}
          />
        </div>
      )}
    </div>
  )
}

interface MockRemoteEntry {
  name: string
  kind: 'dir' | 'file'
}

const DEFAULT_REMOTE_HOME: readonly MockRemoteEntry[] = [
  { name: 'projects', kind: 'dir' },
  { name: 'scripts', kind: 'dir' },
  { name: '.ssh', kind: 'dir' },
  { name: 'notes.txt', kind: 'file' },
]

const MOCK_REMOTE_TREE: Readonly<Record<string, readonly MockRemoteEntry[]>> = {
  '/': [
    { name: 'home', kind: 'dir' },
    { name: 'srv', kind: 'dir' },
    { name: 'var', kind: 'dir' },
    { name: 'opt', kind: 'dir' },
    { name: 'tmp', kind: 'dir' },
  ],
  '/home': [{ name: 'inno', kind: 'dir' }, { name: 'ubuntu', kind: 'dir' }],
  '/home/inno': DEFAULT_REMOTE_HOME,
  '/home/inno/projects': [
    { name: 'web-app', kind: 'dir' },
    { name: 'api', kind: 'dir' },
    { name: 'README.md', kind: 'file' },
  ],
  '/home/inno/projects/web-app': [
    { name: 'src', kind: 'dir' },
    { name: 'public', kind: 'dir' },
    { name: 'package.json', kind: 'file' },
    { name: 'README.md', kind: 'file' },
  ],
  '/srv': [{ name: 'app', kind: 'dir' }, { name: 'data', kind: 'dir' }, { name: 'www', kind: 'dir' }],
  '/srv/app': [
    { name: 'src', kind: 'dir' },
    { name: 'public', kind: 'dir' },
    { name: 'package.json', kind: 'file' },
    { name: 'README.md', kind: 'file' },
  ],
  '/srv/app/src': [
    { name: 'main.ts', kind: 'file' },
    { name: 'lib', kind: 'dir' },
    { name: 'styles.css', kind: 'file' },
  ],
  '/srv/data': [{ name: 'logs', kind: 'dir' }, { name: 'cache', kind: 'dir' }],
  '/srv/www': [{ name: 'index.html', kind: 'file' }, { name: 'assets', kind: 'dir' }],
  '/opt': [{ name: 'tools', kind: 'dir' }],
  '/tmp': [],
}

function normalizeRemotePath(path: string): string {
  const trimmed = path.trim()
  if (trimmed === '') return '/'
  const withRoot = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withRoot.replace(/\/+$/, '') || '/'
}

function parentRemotePath(path: string): string {
  if (path === '/') return '/'
  const index = path.lastIndexOf('/')
  return index <= 0 ? '/' : path.slice(0, index)
}

function childRemotePath(path: string, name: string): string {
  return path === '/' ? `/${name}` : `${path}/${name}`
}

/** Non-root users start at /home; root keeps the full filesystem root. */
function defaultRemotePath(connection: SharedRemoteConnection | undefined): string {
  return connection !== undefined && connection.username !== 'root' ? '/home' : '/'
}

/** Show the folder name like a local Workspace row; the full path stays in the title. */
function remoteWorkspaceName(path: string): string {
  const parts = path.split('/').filter(Boolean)
  return parts.length === 0 ? '/' : parts[parts.length - 1]
}

function mockRemoteListing(connection: SharedRemoteConnection, path: string): readonly MockRemoteEntry[] {
  const normalized = normalizeRemotePath(path)
  const fixed = MOCK_REMOTE_TREE[normalized]
  if (fixed !== undefined) return fixed
  if (normalized === `/home/${connection.username}`) return DEFAULT_REMOTE_HOME
  return []
}

function RemoteWorkspaceRow({ workspace, connection, target, online, t, onOpen, onNewSession, onOpenSession, onRemove }: {
  workspace: SharedRemoteWorkspace
  connection: SharedRemoteConnection | undefined
  target: string
  online: boolean
  t: (key: string) => string
  onOpen: (workspace: SharedRemoteWorkspace) => void
  onNewSession: (workspace: SharedRemoteWorkspace) => void
  onOpenSession: (sessionId: string) => void
  onRemove: (id: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = (): void => { setMenuOpen(false) }
  return (
    <div className={css.remoteWorkspaceBlock}>
    <div className={css.remoteWorkspaceItem}>
      <button
        type="button"
        className={css.remoteWorkspaceMain}
        title={workspace.path}
        onClick={() => { onOpen(workspace) }}
      >
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M1.5 4A1.5 1.5 0 0 1 3 2.5h3.1l1.2 1.5H13A1.5 1.5 0 0 1 14.5 5.5v6A1.5 1.5 0 0 1 13 13H3a1.5 1.5 0 0 1-1.5-1.5V4Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
        <span className={css.remoteWorkspaceText}>
          <span className={css.remoteWorkspacePath}>{remoteWorkspaceName(workspace.path)}</span>
          <span className={css.remoteWorkspaceHost}>
            <span className={css.remoteWorkspaceStatus} data-online={online || undefined}>
              <span className={css.remoteWorkspaceStatusDot} aria-hidden="true" />
              {online ? t('remote.connected') : t('remote.workspaceOfflineShort')}
            </span>
            <span className={css.remoteWorkspaceTarget}>{target}</span>
          </span>
        </span>
      </button>
      <div className={css.remoteWorkspaceActions}>
        <Menu
          open={menuOpen}
          onClose={closeMenu}
          portal
          className={css.remoteWorkspaceMenuAnchor}
          listClassName={css.remoteWorkspaceMenu}
          anchor={(
            <Tooltip label={t('remote.workspaceMore')} side="bottom" delayMs={500} portal>
              <button
                type="button"
                className={css.remoteWorkspaceAction}
                aria-label={t('remote.workspaceMore')}
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => { setMenuOpen(value => !value) }}
              >
                <IconEllipsisOutlineRegular size={14} />
              </button>
            </Tooltip>
          )}
        >
          <button
            type="button"
            className={css.remoteWorkspaceMenuItem}
            onClick={() => { closeMenu(); onRemove(workspace.id) }}
          >
            <svg width={14} height={14} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 4.5h9M6.5 4.5v-1h3v1M5 4.5l.5 8h5l.5-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t('remote.workspaceRemove')}
          </button>
        </Menu>
        <Tooltip label={t('remote.newSession')} side="bottom" delayMs={500} portal>
          <button
            type="button"
            className={css.remoteWorkspaceAction}
            aria-label={t('remote.newSession')}
            onClick={() => { onNewSession(workspace) }}
          >
            <IconNewChatOutlineRegular size={14} />
          </button>
        </Tooltip>
      </div>
    </div>
    {workspace.sessions !== undefined && workspace.sessions.length > 0 && (
      <div className={css.remoteWorkspaceSessions}>
        {workspace.sessions.map((sessionId, index) => (
          <button
            key={sessionId}
            type="button"
            className={css.remoteWorkspaceSessionRow}
            title={sessionId}
            onClick={() => { onOpenSession(sessionId) }}
          >
            <IconNewChatOutlineRegular size={13} />
            <span>{t('remote.sessionRow').replace('{n}', String(index + 1))}</span>
          </button>
        ))}
      </div>
    )}
    </div>
  )
}

function RemoteWorkspaceList({ workspaces, connections, t, onOpen, onNewSession, onOpenSession, onRemove }: {
  workspaces: readonly SharedRemoteWorkspace[]
  connections: readonly SharedRemoteConnection[]
  t: (key: string) => string
  onOpen: (workspace: SharedRemoteWorkspace) => void
  onNewSession: (workspace: SharedRemoteWorkspace) => void
  onOpenSession: (sessionId: string) => void
  onRemove: (id: string) => void
}) {
  if (workspaces.length === 0) return null
  return (
    <div className={css.remoteWorkspaceList}>
      <div className={css.remoteWorkspaceHeader}>
        <span>{t('remote.workspacesTitle')}</span>
      </div>
      {workspaces.map(workspace => {
        const connection = connections.find(item => item.id === workspace.connectionId)
        const online = connection !== undefined && connection.status === 'connected'
        const target = connection !== undefined
          ? `${connection.username}@${connection.host}`
          : workspace.username !== undefined && workspace.host !== undefined
            ? `${workspace.username}@${workspace.host}`
            : t('remote.workspaceOffline')
        return (
          <RemoteWorkspaceRow
            key={workspace.id}
            workspace={workspace}
            connection={connection}
            target={target}
            online={online}
            t={t}
            onOpen={onOpen}
            onNewSession={onNewSession}
            onOpenSession={onOpenSession}
            onRemove={onRemove}
          />
        )
      })}
    </div>
  )
}

function RemoteWorkspacePicker({ connections, t, onClose, onSelect }: {
  connections: readonly SharedRemoteConnection[]
  t: (key: string) => string
  onClose: () => void
  onSelect: (connectionId: string, path: string) => void
}) {
  const connected = connections.filter(connection => connection.status === 'connected')
  const [connectionId, setConnectionId] = useState(connected[0]?.id ?? connections[0]?.id ?? '')
  const connection = connections.find(item => item.id === connectionId) ?? connections[0]
  const initialPath = defaultRemotePath(connection)
  const [path, setPath] = useState(initialPath)
  const [pathInput, setPathInput] = useState(initialPath)
  const [entries, setEntries] = useState<readonly MockRemoteEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [newName, setNewName] = useState('')
  const [createError, setCreateError] = useState<string | null>(null)
  const [revision, setRevision] = useState(0)

  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey) }
  }, [onClose])

  useEffect(() => {
    if (connection === undefined) {
      setEntries([])
      return
    }
    const controller = new AbortController()
    setEntries([])
    setLoading(true)
    setError(null)
    fetch(`/telework/remote/list?connection=${encodeURIComponent(connection.id)}&path=${encodeURIComponent(path)}`, {
      signal: controller.signal,
      cache: 'no-store',
    })
      .then(async (response) => {
        const body = await response.json() as { entries?: MockRemoteEntry[], error?: string }
        if (!response.ok) throw new Error(body.error ?? `HTTP ${response.status}`)
        setEntries(Array.isArray(body.entries) ? body.entries : [])
      })
      .catch((caught: unknown) => {
        if (controller.signal.aborted) return
        setEntries([])
        setError(caught instanceof Error ? caught.message : String(caught))
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })
    return () => { controller.abort() }
  }, [connection?.id, path, revision])

  const navigate = (next: string): void => {
    const normalized = normalizeRemotePath(next)
    setPath(normalized)
    setPathInput(normalized)
    setCreating(false)
    setCreateError(null)
  }

  const createFolder = async (): Promise<void> => {
    if (connection === undefined) return
    const name = newName.trim()
    if (name === '') {
      setCreateError(t('remote.pickFolderNameRequired'))
      return
    }
    try {
      const response = await fetch('/telework/remote/mkdir', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ connection: connection.id, path, name }),
      })
      const text = await response.text()
      let body: { error?: string } = {}
      if (text !== '') {
        try {
          body = JSON.parse(text) as typeof body
        } catch {
          throw new Error(`Remote folder endpoint returned an unexpected response (HTTP ${response.status})`)
        }
      }
      if (!response.ok) throw new Error(body.error ?? `Cannot create folder (HTTP ${response.status})`)
      setCreating(false)
      setNewName('')
      setCreateError(null)
      setRevision(value => value + 1)
    } catch (caught) {
      setCreateError(caught instanceof Error ? caught.message : String(caught))
    }
  }

  if (connection === undefined) return null

  return createPortal(
    <div
      className={css.remotePickerOverlay}
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}
    >
      <div className={css.remotePickerDialog} role="dialog" aria-modal="true" aria-label={t('remote.pickTitle')}>
        <div className={css.remotePickerHeader}>
          <div>
            <div className={css.remotePickerTitle}>{t('remote.pickTitle')}</div>
            <div className={css.remotePickerSub}>{connection.username}@{connection.host}:{connection.port}</div>
          </div>
          {connected.length > 1 && (
            <select
              className={css.remotePickerSelectConnection}
              value={connectionId}
              aria-label={t('remote.pickConnection')}
              onChange={(event) => {
                const next = connected.find(item => item.id === event.target.value)
                if (next === undefined) return
                setConnectionId(next.id)
                navigate(defaultRemotePath(next))
              }}
            >
              {connected.map(item => (
                <option key={item.id} value={item.id}>{item.username}@{item.host}</option>
              ))}
            </select>
          )}
        </div>

        <div className={css.remotePickerToolbar}>
          <button type="button" className={css.remotePickerTool} disabled={path === '/'} onClick={() => { navigate(parentRemotePath(path)) }}>
            {t('remote.pickUp')}
          </button>
          <input
            className={clsx(css.remoteInput, css.remotePickerPath)}
            value={pathInput}
            spellCheck={false}
            autoComplete="off"
            onChange={(event) => { setPathInput(event.target.value) }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                navigate(pathInput)
              }
            }}
          />
          <button type="button" className={css.remotePickerTool} onClick={() => { navigate(pathInput) }}>
            {t('remote.pickGo')}
          </button>
          <button
            type="button"
            className={css.remotePickerTool}
            onClick={() => { setCreating(true); setNewName(''); setCreateError(null) }}
          >
            {t('remote.pickNewFolder')}
          </button>
        </div>

        <div className={css.remotePickerList}>
          {creating && (
            <div className={css.remotePickerCreateRow}>
              <input
                className={clsx(css.remoteInput, css.remotePickerCreateInput)}
                value={newName}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                placeholder={t('remote.pickFolderName')}
                onChange={(event) => { setNewName(event.target.value); setCreateError(null) }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault()
                    void createFolder()
                  }
                  if (event.key === 'Escape') {
                    event.preventDefault()
                    setCreating(false)
                    setCreateError(null)
                  }
                }}
              />
              <button type="button" className={css.remotePickerCreate} onClick={() => { void createFolder() }}>
                {t('remote.pickCreate')}
              </button>
              <button
                type="button"
                className={css.remotePickerTool}
                onClick={() => { setCreating(false); setCreateError(null) }}
              >
                {t('remote.pickCancel')}
              </button>
            </div>
          )}
          {createError !== null && <p className={css.remotePickerError}>{createError}</p>}
          {path !== '/' && (
            <button type="button" className={css.remotePickerRow} onClick={() => { navigate(parentRemotePath(path)) }}>
              <span className={css.remotePickerGlyph}>↰</span>
              <span>..</span>
            </button>
          )}
          {entries.length === 0 && !loading && error === null && <p className={css.remotePickerEmpty}>{t('remote.pickEmpty')}</p>}
          {loading && <p className={css.remotePickerEmpty}>{t('remote.pickLoading')}</p>}
          {error !== null && <p className={css.remotePickerError}>{error}</p>}
          {!loading && error === null && entries.map(entry => entry.kind === 'dir' ? (
            <button
              key={entry.name}
              type="button"
              className={css.remotePickerRow}
              onClick={() => { navigate(childRemotePath(path, entry.name)) }}
            >
              <svg className={css.remotePickerGlyph} width={16} height={16} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M1.5 4A1.5 1.5 0 0 1 3 2.5h3.1l1.2 1.5H13A1.5 1.5 0 0 1 14.5 5.5v6A1.5 1.5 0 0 1 13 13H3a1.5 1.5 0 0 1-1.5-1.5V4Z" />
              </svg>
              <span>{entry.name}</span>
            </button>
          ) : (
            <div key={entry.name} className={clsx(css.remotePickerRow, css.remotePickerFile)}>
              <svg className={css.remotePickerGlyph} width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden="true">
                <path d="M3.5 2.5h5l4 4v7h-9v-11Z" strokeLinejoin="round" />
                <path d="M8.5 2.5v4h4" strokeLinejoin="round" />
              </svg>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>

        <div className={css.remotePickerFooter}>
          <span className={css.remotePickerHint}>{t('remote.pickSftp')}</span>
          <button type="button" className={css.remotePickerCancel} onClick={onClose}>{t('remote.pickCancel')}</button>
          <button
            type="button"
            className={css.remotePickerSelect}
            onClick={() => { onSelect(connection.id, path) }}
          >
            {t('remote.pickSelect')}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

/**
 * How long the column's scrollbars stay drawn after the pointer leaves it.
 * The bar is a pointer affordance here, and hiding it on the leave event
 * itself makes it blink out while the pointer is only crossing the column's
 * edge — on the way to the conversation, or around a portalled menu.
 */
const SCROLLBAR_LINGER_MS = 2000

/** Format complete-build metadata for the local brand badge. */
function localBuildVersion(): string | undefined {
  const version = process.env.DSH_CLIENT_VERSION
  if (version === undefined) return undefined
  const commit = process.env.DSH_CLIENT_COMMIT_HASH
  return version
    + (commit === undefined ? '' : `-${commit}`)
    + (process.env.DSH_CLIENT_GIT_DIRTY === 'true' ? '-dirty' : '')
}

type PanelRowProps =
  Pick<SidebarPanelMetadata, 'id' | 'label'>
  & Pick<SidebarSectionOwnerProps, 'wide'>
  & Pick<PropsRuntime<'sidebar'>, 'usePanelInfo'>
  & Pick<InjectFace<SidebarRootInjected>, 'selectPanel' | 'trackEntryClick' | 'setPinned'>
  & { readonly unpinLabel: string; readonly unpinTooltip: string; readonly canUnpin: boolean }
  & PropsRenderFactories

/** Analytics category of an official panel; other panels are never reported. */
function officialEntry(id: string): 'plugin' | 'cron' | undefined {
  if (id === 'plugins') return 'plugin'
  return id === 'schedules' ? 'cron' : undefined
}

/** Each panel row subscribes only to its own selection state. */
function PanelRow({
  id, label, wide, unpinLabel, unpinTooltip, canUnpin, usePanelInfo, selectPanel, setPinned, trackEntryClick, renderFactorySlot,
}: PanelRowProps) {
  const active = usePanelInfo(info => info.activePanelId === id)
  return (
    <div className={clsx(css.panelEntry, wide && css.panelEntryWide, active && css.panelEntryActive)}>
      <Tooltip label={label} delayMs={500} disabled={wide}>
        <button
          type="button"
          className={css.panelRow}
          aria-label={label}
          aria-current={active ? 'page' : undefined}
          onClick={() => {
            const entry = officialEntry(id)
            if (entry !== undefined) trackEntryClick({ menu_name: entry, position: 'sidebar' })
            selectPanel(id)
          }}
        >
          <span className={css.panelGlyph} aria-hidden="true">
            {renderFactorySlot('sidebar.panel.icon', { id, size: wide ? 16 : 18, active })}
          </span>
          {wide && (
            <span className={clsx(css.panelTitle, css.wide)}>
              {label}
            </span>
          )}
        </button>
      </Tooltip>
      {wide && canUnpin && <Tooltip label={unpinTooltip} side="bottom" align="end" delayMs={500} portal>
        <button type="button" className={css.panelUnpin} aria-label={unpinLabel} onClick={(event) => {
          // Unpin is rendered only while this navigation also renders More.
          const navigation = event.currentTarget.closest('nav') as HTMLElement
          const more = navigation.querySelector('button[aria-haspopup="menu"]') as HTMLButtonElement
          focusWithoutRing(more)
          setPinned(id, false)
        }}>
          <IconPinFillRegular size={14} />
        </button>
      </Tooltip>}
    </div>
  )
}

type PanelMoreMenuProps =
  Pick<SidebarSectionOwnerProps, 'wide'>
  & Omit<SidebarPanelActionsOwnerProps, 'onDismiss'>
  & PropsRenderSlots<'sidebar.panellist.actions'>
  & Pick<InjectFace<SidebarRootInjected>, 'trackEntryClick'>
  & { readonly label: string }

/** The panel list's More launcher: a panel-row button whose menu rows come from `sidebar.panellist.actions`. */
function PanelMoreMenu({ wide, label, entries, onOpen, onPinnedChange, trackEntryClick, renderSlot }: PanelMoreMenuProps) {
  const [open, setOpen] = useState(false)
  const onDismiss = (): void => { setOpen(false) }
  return (
    <Menu open={open} onClose={onDismiss} portal autoFocus className={css.moreAnchor} listClassName={css.moreMenu}
      anchor={(
        <Tooltip label={label} delayMs={500} disabled={wide}>
          <button type="button" className={css.panelRow} aria-label={label} aria-haspopup="menu" aria-expanded={open}
            onClick={() => {
              trackEntryClick({ menu_name: 'more', position: 'sidebar' })
              setOpen(value => !value)
            }}>
            <span className={css.panelGlyph} aria-hidden="true"><IconAppsAddOutlineRegular size={wide ? 16 : 18} /></span>
            {wide && <span className={clsx(css.panelTitle, css.wide)}>{label}</span>}
          </button>
        </Tooltip>
      )}>
      {renderSlot('sidebar.panellist.actions', { entries, onOpen, onPinnedChange, onDismiss })}
    </Menu>
  )
}

/**
 * Render the sidebar column shell.
 * @param props - composed slot props (runtime share + injected callbacks, contract/slots.ts).
 * @returns the sidebar element tree.
 */
export function SidebarRoot({
  collapsed,
  width,
  drawer,
  startSession,
  openSession,
  createWorkspace,
  createSession,
  waitForWorkspace,
  toggleSidebar,
  selectPanel,
  setPinned,
  trackEntryClick,
  currentSession = EMPTY_SESSION_STORE,
  useWorkspaces,
  useSessions,
  useRemoteAccess,
  usePanels,
  useEntryPins,
  useEntryActions,
  useShortcuts,
  usePanelInfo,
  t,
  renderSlot,
  renderFactorySlot,
}: SidebarRootComponentProps) {
  const panels = usePanels(snapshot => snapshot)
  const unpinned = useEntryPins(ids => ids)
  const activePanelId = usePanelInfo(info => info.activePanelId)
  // Remote mode is a sidebar-local surface: it keeps the conversation in the
  // center and swaps only the sidebar body. The Main panel stays registered for
  // direct navigation, but the rail button never selects it.
  const [remoteMode, setRemoteMode] = useState(false)
  const [remoteWorkspaceToast, setRemoteWorkspaceToast] = useState<string | null>(null)
  const [remotePickerOpen, setRemotePickerOpen] = useState(false)
  const [workspaceHeader, setWorkspaceHeader] = useState<HTMLElement | null>(null)
  const remoteStore = useMemo(ensureRemoteStore, [])
  const remoteConnections = useSyncExternalStore(remoteStore.subscribe, remoteStore.get)
  const storedRemoteWorkspaces = useSyncExternalStore(remoteStore.subscribe, remoteStore.getWorkspaces)
  const remoteConnected = remoteConnections.some(connection => connection.status === 'connected')
  const workspaceState = useWorkspaces(state => state)
  const workspaceItems = workspaceState.items
  const sessionList = useSessions(state => state)
  const currentSessionId = useSyncExternalStore(
    currentSession.subscribe,
    () => currentSession.getSnapshot().sessionId,
  )
  // Mirror the official Workspace browser: a remote Workspace's rows are the
  // local placeholder Workspace's own Session ids, and among blank Sessions
  // only the current one is visible (tree.ts `sessionVisible`).
  const remoteWorkspaces = useMemo(() => storedRemoteWorkspaces.map((workspace) => {
    // The placeholder path embeds the stable remote Workspace id. Prefer the
    // path match so a stale localWorkspaceId cannot hide the real session list.
    const marker = `placeholders/${workspace.id}/`
    const markerWindows = `placeholders\\${workspace.id}\\`
    const byPath = workspaceItems.find(item => (
      item.path.includes(marker) || item.path.includes(markerWindows)
    ))
    const local = workspace.localWorkspaceId === undefined
      ? undefined
      : workspaceItems.find(item => item.workspaceId === workspace.localWorkspaceId)
    const sessionIds = (byPath ?? local)?.sessionIds ?? []
    const visible = sessionIds.filter((sessionId) => {
      if (workspaceState.archivedSessionIds.includes(sessionId)) return false
      const session = sessionList.byId[sessionId]
      if (session === undefined) return false
      return !session.blank || sessionId === currentSessionId
    })
    return { ...workspace, sessions: visible }
  }), [storedRemoteWorkspaces, workspaceItems, workspaceState.archivedSessionIds, sessionList, currentSessionId])
  // A reconnect gets a fresh Host connection id. Re-point persisted workspaces
  // at the matching username@host:port so their status returns to connected.
  useEffect(() => {
    remoteStore.relinkWorkspaces()
  }, [remoteStore, remoteConnections, storedRemoteWorkspaces])
  const hasEntryActions = useEntryActions(registered => registered)
  const shortcut = useShortcuts(rows => rows.find(row => row.id === 'sidebar.left.toggle'))
  const newShortcut = useShortcuts(rows => rows.find(row => row.id === 'session.new'))
  // A page whose access snapshot excludes starting a Session offers no New Session affordance.
  const canStartSession = useRemoteAccess('session/create')
  const toggleLabel = collapsed ? t('toggle.open') : t('toggle.collapse')
  // Wide content stays mounted while the collapse animates (fading via
  // .collapsed .wide), unmounts at settle, and remounts right away on expand.
  // A closed drawer retains its content with the rail phase already settled.
  const [settled, setSettled] = useState(collapsed)
  useEffect(() => {
    if (drawer || !collapsed) { setSettled(collapsed); return }
    const timer = window.setTimeout(() => { setSettled(true) }, COLLAPSE_SETTLE_MS)
    return () => { window.clearTimeout(timer) }
  }, [collapsed, drawer])
  const windowsTitlebar = document.documentElement.hasAttribute('data-windows-titlebar')
  const wide = drawer || (windowsTitlebar ? !collapsed : !collapsed || !settled)
  const [scrollHandoff] = useState(createScrollHandoff)
  const sectionHookContext = useMemo<SidebarSectionHookContext>(
    () => ({ useSectionScroller: scrollHandoff.useSectionScroller }), [scrollHandoff],
  )
  // The Windows titlebar hosts the New Session controls while the sidebar is collapsed.
  const openNewSession = (): void => {
    trackEntryClick({ menu_name: 'new_session', position: windowsTitlebar && collapsed ? 'titlebar' : 'sidebar' })
    startSession()
  }
  // The Windows caption menus occupy the strip to the right of these controls
  // (that is what --dsh-windows-menu-start reserves), so a right-side bubble
  // lands under their text. Below the caption is the only clear side.
  const captionTooltipSide = windowsTitlebar ? 'bottom' : 'right'
  // Freeze the content at its expanded width while it fades out (collapsed
  // && wide): the sliding column then clips it instead of reflowing it. The
  // rail layout (.collapsed styles) only applies once the fade settles.
  const lastWideWidth = useRef(width)
  if (drawer || !collapsed) lastWideWidth.current = width

  // A closed drawer returns to the static rail; only a live collapse fades it in.
  const animateRail = useRef(!collapsed)
  if (drawer || !collapsed) animateRail.current = !collapsed

  // Scrollbars in the column follow the pointer (.quietBars rebinds them
  // away): drawn while it is inside, and for SCROLLBAR_LINGER_MS after it
  // leaves. A pointer that returns within that window cancels the pending
  // hide rather than restarting from a hidden bar.
  const column = useRef<HTMLDivElement>(null)
  // The Workspaces header is owned by ui-workspace, but it publishes a stable
  // marker. Portal the remote-workspace action into that row so it sits beside
  // the shipped add-workspace button instead of taking a new row above it.
  useEffect(() => {
    const root = column.current
    if (root === null) return
    const find = (): void => {
      const next = root.querySelector<HTMLElement>('[data-sidebar-workspace-header]')
      setWorkspaceHeader(current => current === next ? current : next)
    }
    find()
    const observer = new MutationObserver(find)
    observer.observe(root, { childList: true, subtree: true })
    return () => { observer.disconnect() }
  }, [])
  const sidebarFocus = useRef<Element | null>(null)
  useModalLayer(column, drawer && !collapsed, toggleSidebar)
  useLayoutEffect(() => {
    if (!collapsed) return
    const controlled = sidebarFocus.current?.getAttribute('aria-controls')?.split(/\s+/) ?? []
    const ownsMenuFocus = controlled.some(id => document.getElementById(id)?.contains(document.activeElement))
    if (sidebarFocus.current !== document.activeElement && !ownsMenuFocus) return
    const opener = drawer
      ? column.current?.ownerDocument.querySelector<HTMLElement>('[data-sidebar-opener]')
      : column.current?.querySelector<HTMLElement>('[data-sidebar-toggle]')
    if (opener != null && !isBehindModal(opener)) focusWithoutRing(opener, { preventScroll: true })
  }, [drawer, collapsed])
  const [pointerInside, setPointerInside] = useState(false)
  const lingerTimer = useRef<number | undefined>(undefined)
  const armLinger = (): void => {
    if (lingerTimer.current !== undefined) return
    lingerTimer.current = window.setTimeout(() => {
      lingerTimer.current = undefined
      setPointerInside(false)
    }, SCROLLBAR_LINGER_MS)
  }
  const cancelLinger = (): void => {
    window.clearTimeout(lingerTimer.current)
    lingerTimer.current = undefined
  }
  // Leaving is decided by the column's BOX, not by DOM containment, and only
  // while the bars are drawn. ui-settings renders its full-viewport panel as a
  // fixed-position DESCENDANT of this column, so a pointer moved onto that
  // panel — or onto the conversation once it closes — fires no `pointerleave`
  // here, and the bars would stay drawn over a column nobody is pointing at.
  // The element's own leave stays as the one signal geometry cannot give: a
  // pointer that leaves the window emits no further moves.
  useEffect(() => {
    if (!pointerInside) return
    const onMove = (event: PointerEvent): void => {
      const rect = column.current?.getBoundingClientRect()
      /* v8 ignore next -- the listener only exists while the column is mounted and revealed. */
      if (rect === undefined) return
      const inside = event.clientX >= rect.left && event.clientX < rect.right
        && event.clientY >= rect.top && event.clientY < rect.bottom
      if (inside) cancelLinger()
      else armLinger()
    }
    document.addEventListener('pointermove', onMove)
    return () => {
      document.removeEventListener('pointermove', onMove)
      cancelLinger()
    }
  }, [pointerInside])

  const buildVersion = localBuildVersion()
  // The local-build fallbacks copy the badge text; the brand button below
  // skips New Session for clicks inside them. The click still bubbles, so
  // document-level outside-click listeners see it.
  // Each successful copy bumps the key so a repeated copy replays the toast.
  const [copiedToast, setCopiedToast] = useState<number | null>(null)
  const copyVersion = (version: string) => (): void => {
    void writeClipboard(version).then((ok) => {
      if (ok) setCopiedToast(seq => (seq ?? 0) + 1)
    })
  }

  const darwinDesktop = isDarwinDesktop()
  // The shell status bar's Manage action asks the sidebar to reveal this
  // surface without touching the center conversation.
  useEffect(() => {
    const openRemote = (): void => {
      setRemoteMode(true)
      selectPanel(null)
      if (collapsed) toggleSidebar()
    }
    window.addEventListener('dsh-telework:open-remote', openRemote)
    return () => { window.removeEventListener('dsh-telework:open-remote', openRemote) }
  }, [collapsed, selectPanel, toggleSidebar])

  // Broadcast a successful connect into the shared store. The Remote panel and
  // the shell status bar both derive their connected state from this store, so
  // a status-bar disconnect also clears the "connected" badge in the panel.
  const handleRemoteConnection = (summary: RemoteConnectionSummary | null): void => {
    if (summary !== null) remoteStore.add({ ...summary, status: 'connected' })
  }

  // DSH can only create a Session inside a local Workspace. For a remote
  // Workspace, create an empty local placeholder directory, register it as a
  // normal Workspace, then start the Session there. The Session log stays local.
  const startRemoteSession = async (workspace: SharedRemoteWorkspace): Promise<void> => {
    if (!remoteConnections.some(connection => connection.id === workspace.connectionId && connection.status === 'connected')) {
      setRemoteWorkspaceToast(t('remote.workspaceDisconnected'))
      return
    }
    try {
      // Resolve the local placeholder Workspace fresh on every click. A stored
      // id can outlive its registration; `create` returns the existing
      // Workspace for the stable placeholder path, or creates it again.
      const response = await fetch('/telework/remote/placeholder', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ workspaceId: workspace.id, name: remoteWorkspaceName(workspace.path) }),
      })
      const text = await response.text()
      let body: { path?: string, error?: string } = {}
      if (text !== '') {
        try {
          body = JSON.parse(text) as typeof body
        } catch {
          throw new Error(`Placeholder endpoint returned an unexpected response (HTTP ${response.status})`)
        }
      }
      if (!response.ok || typeof body.path !== 'string') {
        throw new Error(body.error ?? `Cannot prepare local workspace (HTTP ${response.status})`)
      }
      const view = await createWorkspace({ path: body.path })
      const localWorkspaceId = String(view.workspaceId)
      remoteStore.setLocalWorkspaceId(workspace.id, localWorkspaceId)
      await waitForWorkspace(localWorkspaceId)
      const sessionId = await createSession(localWorkspaceId)
      openSession(sessionId)
    } catch (error) {
      setRemoteWorkspaceToast(error instanceof Error ? error.message : String(error))
    }
  }
  // Rail resting state is the whale mark; hovering swaps in the panel icon
  // (the expand affordance, figma sidebar-hover flow). Expanded it is a plain
  // panel icon.
  const toggle = (
    <Tooltip label={toggleLabel} shortcutKeys={shortcut?.keys} delayMs={500} side={captionTooltipSide} portal={drawer}>
      <button
        data-sidebar-toggle
        data-modal-autofocus={drawer || undefined}
        type="button"
        className={clsx(css.iconButton, css.toggle)}
        aria-label={toggleLabel}
        aria-keyshortcuts={shortcut?.aria}
        onClick={() => { toggleSidebar() }}
      >
        {!wide && !windowsTitlebar && (
          <span className={css.railMark} aria-hidden="true">
            {renderSlot('sidebar.brand.mark', { size: 24 }, { fallback: <FishLogo size={24} /> })}
          </span>
        )}
        {/* Rail icons render at 18 (figma rail spec); expanded keeps the glyph-native sizes. */}
        <IconPanelLeftOutlineRegular className={css.panelIcon} size={wide || windowsTitlebar ? 16 : 18} />
        {!wide && renderSlot('sidebar.toggle.badge', {})}
      </button>
    </Tooltip>
  )

  return (
    <div
      ref={column}
      onFocusCapture={(event) => { sidebarFocus.current = event.target }}
      role={drawer ? 'dialog' : undefined}
      data-shortcut-modal={drawer ? 'sidebar' : undefined}
      aria-modal={drawer && !collapsed ? true : undefined}
      aria-label={drawer ? t('navigation.label') : undefined}
      tabIndex={drawer ? -1 : undefined}
      className={clsx(
        css.root, !wide && css.collapsed, !wide && animateRail.current && css.railIn,
        !drawer && collapsed && wide && css.fading, !pointerInside && css.quietBars,
      )}
      style={wide ? { width: !drawer && collapsed ? lastWideWidth.current : width } : undefined}
      onPointerEnter={() => {
        cancelLinger()
        setPointerInside(true)
      }}
      onPointerLeave={() => { armLinger() }}
    >
      {/* macOS hiddenInset titlebar: the strip shares the row with the
          traffic lights and keeps the toggle at the sidebar's top-right. */}
      {darwinDesktop && <div className={css.topStrip} data-window-drag>{toggle}</div>}
      <div className={css.activityRail} role="navigation" aria-label={t('navigation.label')}>
        <Tooltip label={t('rail.workspaces')} delayMs={500} side="right" portal={drawer}>
          <button
            type="button"
            className={clsx(css.railButton, !remoteMode && activePanelId === null && css.railActive)}
            aria-label={t('rail.workspaces')}
            aria-current={!remoteMode && activePanelId === null ? 'page' : undefined}
            onClick={() => {
              setRemoteMode(false)
              selectPanel(null)
              if (collapsed) toggleSidebar()
            }}
          >
            <svg width={18} height={18} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4.5A1.5 1.5 0 0 1 3.5 3h3l1.2 1.5h5.8A1.5 1.5 0 0 1 15 6v5.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 11.5v-7Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" transform="translate(-0.5 0)" />
            </svg>
          </button>
        </Tooltip>
        {panels.map(panel => {
          const isRemotePanel = panel.id === 'telework'
          const active = isRemotePanel ? remoteMode : !remoteMode && activePanelId === panel.id
          return (
            <Tooltip key={panel.id} label={panel.label} delayMs={500} side="right" portal={drawer}>
              <button
                type="button"
                className={clsx(css.railButton, active && css.railActive)}
                aria-label={panel.label}
                aria-current={active ? 'page' : undefined}
                onClick={() => {
                  if (isRemotePanel) {
                    setRemoteMode(true)
                    // Keep the conversation in the center: clearing the main
                    // panel id prevents the Remote main page from replacing it.
                    selectPanel(null)
                    if (collapsed) toggleSidebar()
                    return
                  }
                  setRemoteMode(false)
                  const entry = officialEntry(panel.id)
                  if (entry !== undefined) trackEntryClick({ menu_name: entry, position: 'sidebar' })
                  selectPanel(panel.id)
                }}
              >
                {renderFactorySlot('sidebar.panel.icon', { id: panel.id, size: 18, active })}
                {isRemotePanel && remoteConnections.length > 0 && (
                  <span
                    className={css.railRemoteBadge}
                    data-status={remoteConnections.some(connection => connection.status === 'connected') ? 'connected' : 'connecting'}
                    aria-hidden="true"
                  >
                    {remoteConnections.length > 1 ? remoteConnections.length : ''}
                  </span>
                )}
              </button>
            </Tooltip>
          )
        })}
        <div className={css.railGrow} />
        <div className={css.railFoot}>
          {renderSlot('sidebar.settings', { wide: false })}
          {renderSlot('sidebar.footer.action', { wide: false })}
        </div>
      </div>
      {!wide && windowsTitlebar && canStartSession && renderSlot('sidebar.session.action', { wide }, {
        children: (
          <Tooltip label={t('session.new.label')} shortcutKeys={newShortcut?.keys} delayMs={500} side={captionTooltipSide}>
            <button
              type="button"
              className={css.newSession}
              aria-label={t('session.new.label')}
              aria-keyshortcuts={newShortcut?.aria}
              onClick={openNewSession}
            >
              <span className={css.newSessionLabelMask}><span className={css.newSessionContent}>
                <IconNewChatOutlineRegular size={16} />
              </span></span>
            </button>
          </Tooltip>
        ),
      })}
      {wide && (
        <div className={clsx(css.panelColumn, remoteMode && css.panelColumnRemote)}>
          {remoteMode && <RemoteConnectionPanel t={t} onConnectionChange={handleRemoteConnection} onNewSession={startRemoteSession} onOpenSession={(sessionId) => { openSession(sessionId) }} workspaces={remoteWorkspaces} />}
          <div className={css.logoRow} data-window-drag>
        {/* Expanded, the brand doubles as a New Session shortcut while the
            access snapshot allows `session/create` — except on
            macOS, where it stays part of the logo row's window-drag surface
            (the drag-row controls rule would subtract a button);
            the collapsed rail's logo is the expand toggle below instead.
            Mouse clicks on the local-build fallbacks copy the version instead. */}
        {wide && (() => {
          const identity = (
            <span className={css.brandIdentity} aria-hidden="true">
              <span className={css.brandMark}>
                {renderSlot('sidebar.brand.mark', { size: 24 }, {
                  fallback: buildVersion === undefined
                    ? <FishLogo size={24} />
                    : <span className={css.copyVersion} data-copy-version onClick={copyVersion(buildVersion)}><FishLogo size={24} /></span>,
                })}
              </span>
              <span className={css.brandName}>
                {renderSlot('sidebar.brand.name', {}, {
                  fallback: buildVersion === undefined
                    ? <span className={css.fallbackBrandName}>{t('brand.localBuild')}</span>
                    : (
                      <span className={clsx(css.localBuildBrand, css.copyVersion)} data-copy-version onClick={copyVersion(buildVersion)}>
                        <span className={css.localBuildTitle}>{t('brand.localBuild')}</span>
                        <span className={css.buildVersion}>{buildVersion}</span>
                      </span>
                    ),
                })}
              </span>
            </span>
          )
          return darwinDesktop || !canStartSession
            ? <span className={clsx(css.brand, css.wide)}>{identity}</span>
            : (
              <button
                type="button"
                className={clsx(css.brand, css.wide)}
                aria-label={t('session.new.label')}
                aria-keyshortcuts={newShortcut?.aria}
                onClick={(event) => {
                  if ((event.target as Element).closest('[data-copy-version]') !== null) return
                  openNewSession()
                }}
              >
                {identity}
              </button>
            )
        })()}
      </div>

      {/* The label fades before the hover/focus shortcut, including on translucent backgrounds. */}
      {canStartSession && (
        <div className={css.newSessionRow}>
          {renderSlot('sidebar.session.action', { wide }, {
            children: (
              <Tooltip label={t('session.new.label')} shortcutKeys={newShortcut?.keys} delayMs={500} side={captionTooltipSide} disabled={wide}>
                <button
                  type="button"
                  className={css.newSession}
                  aria-label={t('session.new.label')}
                  aria-keyshortcuts={newShortcut?.aria}
                  onClick={openNewSession}
                >
                  <span className={css.newSessionLabelMask}><span className={css.newSessionContent}>
                    {wide
                      ? <IconNewChatOutlineMedium size={14} />
                      : <IconNewChatOutlineRegular size={windowsTitlebar ? 16 : 18} />}
                    {wide && <span className={clsx(css.newSessionLabel, css.wide)}>{t('session.new')}</span>}
                  </span></span>
                  {wide && newShortcut !== undefined && newShortcut.keys.length > 0 && <span className={css.newSessionShortcut} aria-hidden="true">
                    <ShortcutKeys keys={newShortcut.keys} />
                  </span>}
                </button>
              </Tooltip>
            ),
          })}
        </div>
      )}

      <div className={css.scrollRegion}>
        <div
          ref={scrollHandoff.bindViewportRef}
          className={css.scrollArea}
          data-sidebar-scrollport={wide ? '' : undefined}
        >
          <div className={css.regionArea}>
            {renderSlot('sidebar.workspaces', {
              wide,
              expandSidebar: () => { if (collapsed) toggleSidebar() },
            }, { hookContext: sectionHookContext })}
            <RemoteWorkspaceList
              workspaces={remoteWorkspaces}
              connections={remoteConnections}
              t={t}
              onOpen={() => { setRemoteWorkspaceToast(t('remote.workspaceOpenSoon')) }}
              onNewSession={startRemoteSession}
              onOpenSession={(sessionId) => { openSession(sessionId) }}
              onRemove={(id) => { remoteStore.removeWorkspace(id) }}
            />
          </div>
        </div>
        <span className={css.scrollFade} aria-hidden="true" />
      </div>

      {activePanelId === null && <WorkspaceFiles currentSession={currentSession} t={t} />}

      {copiedToast !== null && (
        <Toast key={copiedToast} tone="success" text={t('version.copied')} onDone={() => { setCopiedToast(null) }} />
      )}

      {remoteWorkspaceToast !== null && (
        <Toast
          key={`remote-workspace-${remoteWorkspaceToast}`}
          tone="success"
          text={remoteWorkspaceToast}
          onDone={() => { setRemoteWorkspaceToast(null) }}
        />
      )}

      {remotePickerOpen && remoteConnected && (
        <RemoteWorkspacePicker
          connections={remoteConnections}
          t={t}
          onClose={() => { setRemotePickerOpen(false) }}
          onSelect={(connectionId, path) => {
            remoteStore.addWorkspace(connectionId, path)
            setRemotePickerOpen(false)
            setRemoteWorkspaceToast(`${t('remote.workspaceAdded')} ${path}`)
          }}
        />
      )}

        </div>
      )}

      {workspaceHeader !== null && remoteConnected && createPortal(
        <Tooltip label={t('remote.addWorkspace')} side="bottom" delayMs={500} portal>
          <button
            type="button"
            className={css.remoteHeaderButton}
            aria-label={t('remote.addWorkspace')}
            onClick={() => { setRemotePickerOpen(true) }}
          >
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <rect x="2.5" y="3" width="11" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
              <path d="M6 13h4M8 10v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M11.5 1.5v4M9.5 3.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </Tooltip>,
        workspaceHeader,
      )}
    </div>
  )
}
