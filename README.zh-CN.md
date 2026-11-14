# dsh-telework

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）的远程开发插件：通过 SSH 连接一台机器，把它的目录当作本地目录来开发——相当于 DSH 版的 VS Code Remote Development。

> 状态：早期骨架。插件可以安装，也能查看你配置的 SSH 目标；但文件读写、命令执行和终端仍在本机运行，尚未把任何操作迁移到远端。架构调研、已核实的事实和待定决策见[设计备忘](docs/design.zh-CN.md)。

## 当前可用的功能

- 一个 Host-only 的 DSH 插件包（`dsh.bundle.patch`），可以从本目录安装。
- 插件激活时校验插件行配置。
- `telework_status` 模型工具，仅在至少配置了一个目标时注册。它列出已配置的目标，并用 `ssh -G` 解析每个目标生效的 OpenSSH 设置（`hostname`、`user`、`port`）。该命令只读取本机 OpenSSH 配置：不会连接远端、不会读远端文件、也不会执行远端命令。

## 计划范围

- 通过 SSH 连接远端主机，并选择一个远端目录作为会话工作区。
- 在该工作区上的文件操作和 shell 命令都在远端执行。
- 模型、UI 和插件保持在本机；只有工作区位于远端。

## 安装

在 DSH Web GUI 中打开 **Plugins** → **Add plugin**，选择本目录。该包为私有包，从本地目录安装，不发布到 npm。未配置目标时安装不会注册任何工具，插件处于惰性状态。

## 配置

在 profile 的补丁层中为插件行添加目标：

```yaml
- id: telework
  name: dsh-telework
  config:
    sshTimeoutMs: 5000
    targets:
      - id: devbox
        alias: devbox
        description: 主要 Linux 开发机
        workspace: /srv/app
```

- `alias` 是 OpenSSH 主机别名（或 `user@host`）。用户、端口、密钥和代理设置来自你平时的 `~/.ssh/config` 和 SSH agent。
- `workspace` 是插件将来用作会话工作区的远端目录。目前只做登记，尚未使用。
- `sshTimeoutMs` 是每次本机 `ssh -G` 调用的超时，默认 `5000`。

插件行位于当前 profile 的 `cordis.patch.yml`（Desktop 为 `%USERPROFILE%\.dsh\profiles\desktop\cordis.patch.yml`）。bundle 的补丁负责插入该行，这里只覆盖它的 `config`。修改配置会重启插件行，新的目标随之加载。

校验比较严格：目标 id 不能重复，别名不能以 `-` 开头或包含空白字符，最多 20 个目标。配置非法时插件激活失败，并在错误信息中点名字段。

## 开发

纯 JavaScript，无构建步骤、无依赖。早期实验可以把同一台机器上的 WSL 当作本地 SSH 目标。

```
dsh-telework/
  index.js             Host 插件（配置校验 + telework_status 工具）
  ssh-g.js             `ssh -G` 输出的纯解析模块
  cordis.patch.yml     插入插件行的 Loader 补丁
  locale/              插件管理器的标题与描述
  icon.svg             插件图标
  docs/design.zh-CN.md 架构备忘与待定问题
  README.zh-CN.md      本文件
```

用任意 Node.js 24+ 可执行文件检查语法：

```powershell
node --check index.js
```

## 许可证

待定。
