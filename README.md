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

## Development

Plain JavaScript, no build step and no dependencies. WSL on the same machine can act as a local SSH target for early experiments.

```
dsh-telework/
  index.js             Host plugin (config, status route, telework_status tool)
  targets.js           Config validation and `ssh -G` target inspection
  ssh-g.js             Pure parser for `ssh -G` output
  client.js            Web Client half (Remote sidebar entry + panel)
  cordis.patch.yml     Loader patch that inserts the plugin row
  locale/              Plugin Manager title and description
  icon.svg             Plugin icon
  bundles/             UI sub-bundles installed alongside this one
    dsh-telework-sidebar/       vendored activity rail and workspace panel
    dsh-telework-topbar/        vendored top bar with the window controls
    dsh-telework-conversation/  vendored single-line conversation header
  docs/design.zh-CN.md Architecture notes and open questions
  README.zh-CN.md      中文说明
```

The three UI bundles under `bundles/` are separate DSH bundles used during
development. They live inside this repository so a GitHub checkout is one
directory; install each one from its `bundles/...` path. They can be merged into
this main bundle for a single-package release.

Check the syntax with any Node.js 24+ executable:

```powershell
node --check index.js
```

## License

TBD.
