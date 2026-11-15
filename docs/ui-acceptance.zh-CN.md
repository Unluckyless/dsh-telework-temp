# Telework UI 验收记录

- 日期：2026-11-15
- DSH：0.2.2-rc.3（Desktop）
- Profile：`desktop`
- 结论：**自动化与结构验收通过；视觉交互项待人工点击确认后冻结 UI。**

## 1. 干净 Profile

已从 profile 中移除三个独立 UI 子 bundle：

```text
dsh-telework-topbar
dsh-telework-sidebar
dsh-telework-conversation
```

现在 profile 的依赖只有：

```text
dsh-telework
dsh-whale-widget
```

`dsh.profile.bundles` 中也只有主 `dsh-telework`。三个 UI vendor 的 Host/client
产物全部由主包的 `cordis.patch.yml` 一次性插入。

## 2. 自动检查

| 检查 | 结果 |
|---|---|
| 主包 `files` 包含 `bundles` | 通过 |
| 4 个 UI vendor 的 `lib/index.js` 与 `lib/client.js` 共 8 个文件存在 | 通过 |
| `pnpm run build:ui` 可执行 | 通过 |
| 构建后 `git status` 干净（内容可复现） | 通过 |
| `index.js`、主 `client.js` 与四个 vendor client 语法检查 | 通过 |
| 主 patch 禁用 `ui-layout` / `ui-sidebar` / `ui-workspace` / `ui-conversation` | 通过 |
| 主 patch 插入四个 `telework-*` vendor 行 | 通过 |
| 构建后的 shell CSS 含 `-webkit-app-region: drag` | 通过 |
| 侧栏源码含断连拦截、空白会话过滤、session-not-live 重试、hover card、官方 folder icon | 通过 |

## 3. Host 路由

| 路由 | 结果 |
|---|---|
| `GET /telework/status` | 200 |
| `GET /telework/remote/workspaces` | 200，返回 workspace 与 sessionIds |
| `GET /telework/files?session=missing` | 404，`session is not live`（UI 会自动重试并转灰） |
| `POST /telework/remote/connect` 非法 body | 400，校验错误正常返回 |

## 4. Client 槽位

重启 Desktop 后检查：

| Slot | 状态 |
|---|---|
| `sidebar.workspaces` | active |
| `conversation.header.leading` | active |
| `shell.bottom` | active |
| `sidebar` 根 | active |
| `sidebar.panellist` 的 `telework` | active |

说明合并后的 layout / sidebar / workspace / conversation vendor 均正常挂载。

## 5. 视觉交互清单（人工确认）

- [ ] 顶部栏空白区域可拖动窗口，按钮区域不触发拖动。
- [ ] 本地与远程工作区选中时，前置文件夹图标均为官方蓝色 folder。
- [ ] 远程工作区 `+` 在线时新增会话，断连时提示“远程工作区未连接”且不切会话。
- [ ] 空白会话只显示当前项；输入内容后保留；切走未使用的空白会话后隐藏。
- [ ] 文件区首次打开自动重试，不出现红色 `session is not live`；超时后为灰色。
- [ ] 会话行字号/标题/hover card 与本地工作区一致。

## 6. 已知边界

1. 远程工作区仍是本地占位 Workspace；远程文件树和远程工具执行还未接入。
2. UI vendor 基于 DSH `0.2.2-rc.3` 源码，升级 DSH 后需要重新构建。
3. `pnpm run build:ui` 会改写 vendor `lib/client.js`。**不要在 Web 页面打开时执行**：
   client-modules 使用 mtime/ctime/size 作为 revision，运行中的页面可能请求旧
   revision 导致 Web boot 失败。构建后刷新/重启页面。
4. 远程会话绑定与密码记忆仍在浏览器 localStorage；卸载清理是归档，不是物理
   迁移到默认工作区（DSH 没有 move-session API）。
