# 设计备忘：把 DSH 的工作区搬到 SSH 远端

> 调研时间：2026-11-14。对象：本机安装的 DSH Desktop `0.2.2-rc.3`（`DSH_PROFILE=desktop`），以及安装包内随附的文档与运行时 Service 目录。

## 目标

- 本地 Windows 上的 DSH（模型、UI、插件）保持不动，把“工作区”放到远端机器（Linux 服务器，早期可用 WSL）。
- 理想状态：`read` / `write` / `edit` / `pwsh`、文件树、终端、git 变更记录、`@` 文件引用都像本地一样工作。
- 非目标（当前阶段）：多人协作、把整个 DSH 会话托管到远端、跨主机同步。

## DSH 的工作区执行模型（已核实）

- 工具不直接碰磁盘：文件工具经 `ctx.fs`，`pwsh` / `bash` 经 `ctx.shell`，进程类能力经 `ctx.subprocess`，写操作再由 `ctx.sandbox` / `fs-sandbox` 按权限模式约束。
- 每个 seam 在一个上下文里只有一个提供方，由 profile 的补丁层在启动时组合决定；没有“当前会话用哪个 fs”的运行时开关。
- `ctx.workingDirectory` 负责每个会话的目录，其校验和切换依赖文件系统。远端路径只有在 `ctx.fs` 本身是远端时才能成立。
- 因此“像本地一样”意味着替换整台 DSH 主机的执行后端（profile 级），而不是给单个会话加一个 SSH 开关。

## 这个版本里有什么（已核实）

- 运行时的 Service 目录中存在 `ctx.ssh`，方法为 `ready`、`request`、`connectStream`、`dispose`，描述是“一次不重连的 SSH 会话；断线会使所有进行中的操作失效”。这说明宿主已经具备 SSH 会话与远端 helper 的骨架。
- 随附文档 `docs/capability-seams.md` 把 `@deepseek-ai/dsh-ssh` 以及 `fs-ssh`、`subprocess-ssh`、`sandbox-ssh` 列为官方远程提供方。
- 但当前安装包的 `node_modules/@deepseek-ai` 中没有这些包，Config 目录里也没有对应行。可以依赖的 `ctx.ssh` 接口存在，但现成的远程 provider 不在，需要自行实现或等待官方 bundle。
- `docs/config-catalog.md` 中有 “Deployment-owned SSH identity and installed helper” 与 “OpenSSH host alias …” 的配置项，升级指南提到远端 helper 协议 2。官方路线看起来是：部署级组合 + 在远端安装 helper，而不是每个会话动态连接。

## UI 扩展边界

2026-11-14 核对了运行中的 Web GUI 的 Slot 树：

- 左栏是一个 `sidebar` slot（single）。展开时是工作区/会话导航，折叠时是 56px 图标栏；它由 `ui-sidebar` 的 `SidebarRoot` 占用。`sidebar` 的 catalog 明确写着：注册到这里会整体替换左栏，内置的 `sidebar.workspaces`、`sidebar.settings` 等子槽会一起消失。
- DSH 没有独立的 activity bar 插槽。最接近的官方机制是：
  - `sidebar.panellist`（list）：全局面板图标，内置 Plugins、Automation tasks；每个 id 对应一个 `main` 面板。
  - `main`（keyed）：中央面板内容，按 `sidebar.panellist` 的 id 选择；`conversation` 是保留 key。
  - `layout.selectPanel(id)`：切换中央面板。
- 因此插件可以做到：在左栏增加 VS Code 风格的面板入口，点击后打开自己的中央页面（当前骨架就是这么做的）。插件做不到：把左栏拆成“48px activity bar + 二级面板”，并让内置资源管理器/搜索/插件列表复用它。
- 真正的 VS Code 三栏需要改 DSH 前端：
  1. fork `packages/client/ui-layout`（增加 activity bar slot）和 `packages/client/ui-sidebar`（把 rail 与 panel 拆开），然后构建并运行自定义 Web 前端；
  2. 或者替换整个 `sidebar` slot，自己重写工作区/会话导航、设置入口和对应子槽——工作量大，且会偏离上游。
- 当前选择：先走官方 `sidebar.panellist` + `main`，保证可升级、可回滚；真正的三栏改造等确认后再做。

## 可选架构

### A. Provider 级：替换 fs / subprocess / sandbox（最接近“像本地一样”）

在 profile 中把 `fs`、`subprocess`、`sandbox` 换成 SSH 实现（或实现与 `fs-ssh` / `subprocess-ssh` / `sandbox-ssh` 等价的提供方），复用 `ctx.ssh` 会话。

- 优点：现有工具、文件树、`@` 引用、`working_directory`、git 变更记录都无需改工具层。
- 代价：部署级，整个 profile 的所有会话都在远端；远端要安装受版本约束的 helper；本地 `fs-sandbox` 被替换后，权限/审批语义要重新设计；文件监听、附件上传、图片、剪贴板等跨越本机/远端的路径要逐一处理。
- 风险：`ctx.fs` 的接口很宽（版本守卫、原子写、patch、move、watch），实现成本和正确性要求高。

### B. Tool 级：新增远端工具（纯插件 MVP）

新增 `remote_read` / `remote_write` / `remote_exec` 等模型工具，每次调用通过 `ssh` 或 `ctx.ssh` 执行命令或传输文件。

- 优点：不碰 seam；按会话或按调用选择主机；无 helper；可以快速验证 SSH、路径、审批等交互。
- 代价：模型要在“本地工具/远端工具”之间选择，提示词和工具数量增加；文件树、终端、`@` 引用、技能、todo 仍看本地；不是“像本地一样”。
- 适合：先做原型、验证需求，或作为 Provider 级落地前的过渡。

### C. 远端 DSH 实例 + 端口转发

在远端安装并运行 `dsh web`（或 headless），本地用 `ssh -L` 把端口映射过来，在浏览器打开远端 GUI。

- 优点：完整 harness 在远端（fs、shell、git、终端、MCP 都是远端的），改动最小；最接近 VS Code Remote 的“远端 server”模型。
- 代价：远端多一套 DSH / Node / 依赖与版本管理；认证和凭据在远端；会话存储、插件、技能也都在远端；桌面集成（原生目录选择、open-in-app、附件）会退化；“本地安装的插件用 SSH 连接”这个诉求里，插件其实不在本地跑。

### D. 混合

先做 B 的单机多主机工具集，再逐步把常用操作升级为 A 的 provider；或把 C 作为“完整远端环境”的兜底，A 作为“本地 UI + 远端工作区”的长期目标。

## 需要先定下来的问题

1. **作用域**：一个 profile 固定连一台远端（A），还是每个会话/每次工具调用可选主机（B）？
2. **认证**：复用本机 `~/.ssh/config` 和 agent，还是由插件管理密码/密钥？密码交互在 DSH 的审批/问答模型里如何表达？
3. **helper**：能否接受在远端安装一个受版本约束的 helper（A 的前提）？由谁负责升级和版本匹配？
4. **权限**：远端的 `workspace-write` 边界怎么映射？`danger-full-access` 在远端意味着什么？审批请求由本机还是远端发起？
5. **工作区语义**：远端 `/srv/app` 如何进入会话 header 和 workspace registry？git 变更快照、文件监听、`@` 引用、附件上传分别归谁？
6. **终端与长任务**：是否也走远端？断线重连后，进行中的任务期望是什么行为？
7. **Windows 本地的特殊性**：路径转换、CRLF、OpenSSH 版本、编码。

## 当前骨架

- Host + Web Client bundle；无依赖、无构建步骤。
- 配置校验、只读状态路由 `GET /telework/status`，以及 `telework_status` 工具（调用 `ssh -G`，只读，不连接、不执行远端命令）。
- 左栏 `sidebar.panellist` 的 **Remote** 入口 + 中央 `main` 面板，显示已配置目标及其 `ssh -G` 结果。
- `targets[].workspace` 目前只是登记，没有任何实际远端 I/O。
- 下一步建议：先决定上面第 1、2、3 个问题，再选择 A / B / C 中的一条路线；在决定之前不引入 helper 或依赖。UI 上如果要真正的 VS Code 三栏，先做“是否 fork 前端”的决定。
