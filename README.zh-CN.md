# dsh-telework

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（DSH）的远程开发插件：通过 SSH 连接一台机器，把它的目录当作本地目录来开发——相当于 DSH 版的 VS Code Remote Development。

> 状态：早期骨架。插件可以安装，会在左栏加入一个 Remote 面板，并能查看你配置的 SSH 目标；但文件读写、命令执行和终端仍在本机运行，尚未把任何操作迁移到远端。架构调研、已核实的事实和待定决策见[设计备忘](docs/design.zh-CN.md)。

## 当前可用的功能

- 一个 Host + Web Client 的 DSH 插件包（`dsh.bundle.patch`），可以从本目录安装。
- 插件激活时校验插件行配置。
- 左栏全局面板列表（`sidebar.panellist`）中的 **Remote** 入口，以及对应的中央面板（`main`，key 为 `telework`）。点击入口会打开一个页面，列出已配置目标及其生效的 OpenSSH 设置；页面读取只读的 Host 路由 `GET /telework/status`。
- `telework_status` 模型工具，仅在至少配置了一个目标时注册。它列出已配置的目标，并用 `ssh -G` 解析每个目标生效的 OpenSSH 设置（`hostname`、`user`、`port`）。该命令只读取本机 OpenSSH 配置：不会连接远端、不会读远端文件、也不会执行远端命令。

左栏入口和中央面板使用 DSH 官方支持的全局面板模式。真正的 VS Code 布局——独立的 activity bar 加二级侧边面板——在当前 DSH 版本中没有对应插槽；原因见[设计备忘](docs/design.zh-CN.md#ui-扩展边界)。

## 计划范围

- 通过 SSH 连接远端主机，并选择一个远端目录作为会话工作区。
- 在该工作区上的文件操作和 shell 命令都在远端执行。
- 模型、UI 和插件保持在本机；只有工作区位于远端。

## 安装

在 DSH Web GUI 中打开 **Plugins** → **Add plugin**，选择本目录。该包为私有包，从本地目录安装，不发布到 npm。安装后请刷新一次 Web GUI，让客户端模块加载并出现 **Remote** 入口。未配置目标时安装不会注册任何工具，状态工具处于惰性状态。

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

纯 JavaScript，无构建步骤。Host 的 SSH/SFTP 后端使用 `ssh2`；安装插件前请在
本目录执行 `pnpm install`（或 `npm install`）。`node_modules` 不提交，因此从
GitHub 拉取后需要先安装依赖。

```
dsh-telework/
  index.js             Host 插件（配置、状态路由、telework_status 工具）
  targets.js           配置校验与 `ssh -G` 目标检查
  ssh-g.js             `ssh -G` 输出的纯解析模块
  remote.js            Remote UI 使用的 SSH/SFTP 连接管理器
  client.js            Web Client 半（Remote 左栏入口 + 中央面板）
  cordis.patch.yml     插入插件行的 Loader 补丁
  locale/              插件管理器的标题与描述
  icon.svg             插件图标
  bundles/             UI 子 bundle，和主插件一起安装
    dsh-telework-sidebar/       活动栏 + 工作区面板
    dsh-telework-topbar/        顶栏与窗口按钮区
    dsh-telework-conversation/  单行对话顶栏
  docs/design.zh-CN.md 架构备忘与待定问题
  README.zh-CN.md      本文件
```

`bundles/` 下的三个 UI 子 bundle 是独立安装的 DSH bundle，放在主目录里是为了
整个项目只上传一个仓库目录；开发时从各自的 `bundles/...` 路径安装。发布时可以
把它们合并进主 bundle，做成单包安装。

用任意 Node.js 24+ 可执行文件检查语法：

```powershell
node --check index.js
```

## 许可证

待定。
