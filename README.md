# dsh-telework

Remote development for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH): connect to a machine over SSH and work on its directories as if they were local — the DSH equivalent of VS Code Remote Development.

> Status: early scaffold. The bundle installs, adds a Remote panel to the left sidebar, and can inspect the SSH targets you configure; file reads and writes, shell commands and terminals still run on the local machine. Nothing is moved to the remote host yet. The architecture, verified findings and open decisions are in the [design notes](docs/design.zh-CN.md) (Chinese).

## What works today

- A Host-only DSH bundle (`dsh.bundle.patch`) with a Web Client half, installable from this directory.
- Validation of the plugin row configuration at activation.
- A **Remote** entry in the sidebar's global panel list (`sidebar.panellist`) and a matching central panel (`main`, key `telework`). Clicking the entry opens a page listing the configured targets with their effective OpenSSH settings. The page reads the read-only host route `GET /telework/status`.
- The `telework_status` model tool, registered only when at least one target is configured. It lists the configured targets and resolves each one's effective OpenSSH settings (`hostname`, `user`, `port`) with `ssh -G`. That reads local OpenSSH configuration only: it does not connect to the remote host, read remote files or run remote commands.

The sidebar entry and panel follow DSH's supported global-panel pattern. A true VS Code-style layout — a separate activity bar beside a secondary panel — is not an available slot in this DSH version; see the [design notes](docs/design.zh-CN.md#ui-扩展边界).

## Planned scope

- Connect to a remote host (SSH) and pick a remote directory as the session workspace.
- Run file operations and shell commands for that workspace on the remote host.
- Keep the model, UI and plugins local; only the workspace lives on the remote machine.

## Install

Open **Plugins** → **Add plugin** in the DSH Web GUI and select this directory. The package is private and installed from the local checkout; it is not published to npm. After installation, refresh the Web GUI once so the client module loads and the **Remote** entry appears. Installing with no targets configured registers no tools, so the status tool stays inert until configured.

## Configure

Add targets to the plugin row in your profile patch:

```yaml
- id: telework
  name: dsh-telework
  config:
    sshTimeoutMs: 5000
    targets:
      - id: devbox
        alias: devbox
        description: Primary Linux development machine
        workspace: /srv/app
```

- `alias` is an OpenSSH host alias (or `user@host`). User, port, key and proxy settings come from your normal `~/.ssh/config` and SSH agent.
- `workspace` is the remote directory the plugin will eventually use as the session workspace. It is recorded but not used yet.
- `sshTimeoutMs` bounds each local `ssh -G` call; default `5000`.

The row lives in the active profile's `cordis.patch.yml` (Desktop: `%USERPROFILE%\.dsh\profiles\desktop\cordis.patch.yml`). The bundle patch inserts the row; this profile entry only overrides its `config`. A configuration change restarts the plugin row, so the new targets are reloaded.

Validation is strict: target ids must be unique, aliases must not start with `-` or contain whitespace, and at most 20 targets are accepted. An invalid row fails plugin activation with a message naming the offending field.

## Getting started from a GitHub clone

Requires Node.js 24+ and DeepSeek Harness `0.2.2-rc.3` (the vendored Web UI is
built from that version's sources).

```powershell
git clone https://github.com/Unluckyless/dsh-telework-temp.git
cd dsh-telework-temp
pnpm install
```

`pnpm` 11 may print `ERR_PNPM_IGNORED_BUILDS` and exit 1 for the optional
native scripts of `cpu-features`, `ssh2`, and `esbuild`. The JavaScript
packages are installed and the plugin works; this is a security prompt, not a
failed dependency install. Use `pnpm approve-builds` if you want to opt in to
those scripts.

Then open **Plugins → Add plugin** in the DSH Web GUI and select this main
directory. Refresh the Web GUI once after installation.

> Install **only this main directory**. The folders under `bundles/` are
> vendored UI packages consumed by the main bundle's `cordis.patch.yml`; adding
> them as separate profile bundles would insert the same client module ids twice
> and break the Web boot.

```
dsh-telework/
  index.js             Host plugin (config, status route, telework_status tool)
  targets.js           Config validation and `ssh -G` target inspection
  ssh-g.js             Pure parser for `ssh -G` output
  remote.js            Live SSH/SFTP connection manager for the Remote UI
  client.js            Web Client half (Remote sidebar entry + panel)
  cordis.patch.yml     Loader patch: Host row + all Web UI overrides
  locale/              Plugin Manager title and description
  icon.svg             Plugin icon
  bundles/             Vendored UI packages owned by this bundle
    dsh-telework-sidebar/       activity rail + workspace panel + workspace vendor
    dsh-telework-topbar/        top bar / window controls
    dsh-telework-conversation/  single-line conversation header
    dsh-telework-rightbar/      right Sidebar vendor (vertical-split experiment)
  dev/                 UI bundle build scripts (pnpm run build:ui)
  docs/design.zh-CN.md Architecture notes and open questions
  README.zh-CN.md      中文说明
```

The vendored client artifacts (`lib/client.js` under each vendor package) are
committed, so a clone can install and run without a build step. To rebuild them
from the committed sources:

```powershell
pnpm run build:ui              # all targets
node dev/build-ui.mjs sidebar  # one target
```

See `dev/README.md`. Do not run the UI build while the Web page is open:
client-modules keys artifacts by mtime/ctime/size and a running page can request
a stale revision. Refresh or restart the page after building.

The old sibling `.tools` workspace is not needed; all sources and build
dependencies live inside this repository.

Check the syntax with any Node.js 24+ executable:

```powershell
node --check index.js
```

## License

TBD.
