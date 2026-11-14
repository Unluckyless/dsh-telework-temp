/**
 * Pure parser for the output of `ssh -G <host>`.
 *
 * `ssh -G` prints the effective configuration as `key value` lines
 * (lower-cased keys, one per line). This module keeps the parsing separate
 * from process spawning so it can be tested without an SSH client.
 */

/**
 * Read the fields this plugin reports from `ssh -G` output.
 * @param {string} stdout - the complete `ssh -G` output.
 * @returns {{ hostname?: string, user?: string, port?: number }}
 */
export function readEffectiveSettings(stdout) {
  const settings = {}
  for (const rawLine of String(stdout).split(/\r?\n/u)) {
    const match = /^(hostname|user|port)\s+(\S.*)$/u.exec(rawLine.trim())
    if (match === null) continue
    const [, key, value] = match
    if (key === 'port') {
      if (/^\d+$/u.test(value)) settings.port = Number(value)
    } else {
      settings[key] = value
    }
  }
  return settings
}
