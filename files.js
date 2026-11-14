/**
 * Local workspace directory listing for the Telework sidebar's file tree.
 * The first version is read-only and local-only; remote filesystem providers
 * can replace this module once the remote workspace layer lands.
 */

import { readdir, realpath } from 'node:fs/promises'
import { isAbsolute, join, relative, resolve } from 'node:path'

const MAX_ENTRIES = 500

/**
 * List one directory inside a Session workspace root.
 * @param {string} root - canonical workspace root.
 * @param {string | undefined} requested - absolute directory path, or absent for the root.
 * @param {AbortSignal | undefined} signal
 */
export async function listWorkspaceDirectory(root, requested, signal) {
  signal?.throwIfAborted()
  const rootReal = await realpath(root)
  const targetReal = requested === undefined ? rootReal : await realpath(resolve(requested))
  const relativePath = relative(rootReal, targetReal)
  if (relativePath.startsWith('..') || isAbsolute(relativePath)) {
    throw new Error('dsh-telework: path is outside the workspace')
  }

  const dirents = await readdir(targetReal, { withFileTypes: true })
  const entries = dirents
    .slice(0, MAX_ENTRIES)
    .map((entry) => ({
      name: entry.name,
      path: join(targetReal, entry.name),
      type: entry.isDirectory() ? 'directory' : entry.isFile() ? 'file' : 'other',
    }))
    .sort((left, right) => {
      if (left.type !== right.type) {
        if (left.type === 'directory') return -1
        if (right.type === 'directory') return 1
      }
      return left.name.localeCompare(right.name, undefined, { sensitivity: 'base' })
    })

  return {
    root: rootReal,
    path: targetReal,
    truncated: dirents.length > MAX_ENTRIES,
    entries,
  }
}
