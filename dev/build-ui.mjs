/**
 * Rebuild the three vendored Web Client bundles from the sources committed
 * under bundles/.../vendor/.../src.
 *
 * Usage (from the dsh-telework package root):
 *   pnpm install
 *   pnpm run build:ui
 *
 * The script deliberately has no parent-directory dependency: sources,
 * esbuild dependencies, and outputs all live inside dsh-telework.
 */

import { build } from 'esbuild'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const scratch = path.join(root, 'dev', '.build')

const targets = [
  {
    name: 'sidebar',
    packageDir: 'bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar',
    id: '@deepseek-ai/dsh-client-ui-sidebar',
    external: ['react', 'react/*', 'react-dom', 'react-dom/*', '@deepseek-ai/*'],
  },
  {
    name: 'layout',
    packageDir: 'bundles/dsh-telework-topbar/vendor/dsh-client-ui-layout',
    id: '@deepseek-ai/dsh-client-ui-layout',
    external: ['react', 'react/*', 'react-dom', 'react-dom/*', '@deepseek-ai/*'],
  },
  {
    name: 'workspace',
    packageDir: 'bundles/dsh-telework-sidebar/vendor/dsh-client-ui-workspace',
    id: '@deepseek-ai/dsh-client-ui-workspace',
    external: [
      '@deepseek-ai/dsh-client-ui-primitives',
      '@deepseek-ai/dsh-client-store',
      '@deepseek-ai/cordis',
      'react',
      'react/*',
    ],
  },
  {
    name: 'conversation',
    packageDir: 'bundles/dsh-telework-conversation/vendor/dsh-client-ui-conversation',
    id: '@deepseek-ai/dsh-client-ui-conversation',
    // Match the official bundle's require list exactly; everything else,
    // including lexical and the non-baseline @deepseek-ai packages, is bundled.
    external: [
      'react',
      'react/*',
      'react-dom',
      'react-dom/*',
      'zod',
      '@deepseek-ai/cordis',
      '@deepseek-ai/dsh-client-store',
      '@deepseek-ai/dsh-client-ui-primitives',
      '@deepseek-ai/dsh-client-ui-slots',
    ],
  },
]

/** Module-loader wrapper with the process shim and one injected CSS style. */
function wrap(id, js, css) {
  const injection = `
var process = { env: {} };
var __teleworkPlugin = ${JSON.stringify(id)};
var __teleworkCss = ${JSON.stringify(css)};
if (typeof document !== 'undefined') {
  var __teleworkSelector = 'style[data-plugin-css="' + __teleworkPlugin + '"]';
  if (document.querySelector(__teleworkSelector) === null) {
    var __teleworkTag = document.createElement('style');
    __teleworkTag.dataset.plugin = __teleworkPlugin;
    __teleworkTag.dataset.pluginCss = __teleworkPlugin;
    __teleworkTag.textContent = __teleworkCss;
    document.head.appendChild(__teleworkTag);
  }
}
`
  return `window.__ModuleLoader__.load({id:${JSON.stringify(id)},factory:require=>{var module={exports:{}};var exports=module.exports;\n${injection}\n${js}\nreturn module.exports;}});\n`
}

async function readOptional(file) {
  try {
    return await fs.readFile(file, 'utf8')
  } catch {
    return ''
  }
}

for (const target of targets) {
  const packageRoot = path.join(root, target.packageDir)
  const entry = path.join(packageRoot, 'src', 'client', 'index.ts')
  const outdir = path.join(scratch, target.name)
  await fs.rm(outdir, { recursive: true, force: true })
  await build({
    entryPoints: [entry],
    outdir,
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: 'es2022',
    jsx: 'automatic',
    loader: {
      '.css': 'local-css',
      '.svg': 'dataurl',
      '.png': 'dataurl',
    },
    external: target.external,
    logLevel: 'info',
  })
  const js = await fs.readFile(path.join(outdir, 'index.js'), 'utf8')
  const css = await readOptional(path.join(outdir, 'index.css'))
  await fs.writeFile(path.join(packageRoot, 'lib', 'client.js'), wrap(target.id, js, css))
  console.log(`built ${target.name} -> ${path.relative(root, path.join(packageRoot, 'lib', 'client.js'))}`)
}
