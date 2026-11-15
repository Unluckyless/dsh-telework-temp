window.__ModuleLoader__.load({id:"@deepseek-ai/dsh-client-ui-sidebar",factory:require=>{var module={exports:{}};var exports=module.exports;

var process = { env: {} };
var __teleworkPlugin = "@deepseek-ai/dsh-client-ui-sidebar";
var __teleworkCss = "/* bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/HeaderLeadingControls.module.css */\n.HeaderLeadingControls_controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.HeaderLeadingControls_iconButton {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .HeaderLeadingControls_iconButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n\n/* bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/SidebarRoot.module.css */\n.SidebarRoot_root {\n  --dsh-sidebar-inline-padding: 8px;\n  --dsh-sidebar-row-padding: 12px;\n  --dsh-sidebar-label-gap: 6px;\n  --dsh-sidebar-paint-inset: 3px;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  padding: 0;\n  box-sizing: border-box;\n  background: var(--dsw-specific-sidebar-fill);\n  color: var(--dsw-alias-label-primary);\n  font-size: 14px;\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n}\n.SidebarRoot_activityRail {\n  flex: none;\n  width: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 4px 6px;\n  box-sizing: border-box;\n}\n.SidebarRoot_railBrand {\n  width: 36px;\n  height: 36px;\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_railButton {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n  padding: 0;\n}\n@media (hover: hover) {\n  .SidebarRoot_railButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n    color: var(--dsw-alias-label-primary);\n  }\n}\n.SidebarRoot_railButton:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n.SidebarRoot_railActive {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_railRemoteBadge {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  min-width: 12px;\n  height: 12px;\n  padding: 0 3px;\n  box-sizing: border-box;\n  border: 1px solid var(--dsw-specific-sidebar-fill, var(--dsw-alias-bg-base));\n  border-radius: 6px;\n  background: var(--dsw-alias-state-success-primary, #1a7f37);\n  color: var(--dsw-alias-label-on-business, #fff);\n  font-size: 9px;\n  line-height: 10px;\n  font-weight: 600;\n  text-align: center;\n}\n.SidebarRoot_railRemoteBadge[data-status=connecting] {\n  background: var(--dsw-alias-state-warning-primary, #d97706);\n}\n.SidebarRoot_railRemoteBadge:empty {\n  top: 5px;\n  right: 5px;\n  width: 8px;\n  min-width: 8px;\n  height: 8px;\n  padding: 0;\n  border-radius: 4px;\n}\n.SidebarRoot_railGrow {\n  flex: 1 1 auto;\n  min-height: 8px;\n}\n.SidebarRoot_railFoot {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n}\n.SidebarRoot_panelColumn {\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 6px var(--dsh-sidebar-inline-padding);\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.SidebarRoot_filesPane {\n  flex: 0 0 38%;\n  min-height: 96px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 0;\n  box-sizing: border-box;\n}\n.SidebarRoot_filesSplit {\n  flex: none;\n  height: 6px;\n  cursor: row-resize;\n  border-top: 1px solid var(--dsw-alias-border-l1);\n  touch-action: none;\n}\n.SidebarRoot_filesSplit:hover,\n.SidebarRoot_filesSplit:focus-visible {\n  border-top-color: var(--dsw-alias-brand-primary);\n}\n.SidebarRoot_filesSplit:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: -2px;\n}\n.SidebarRoot_filesHeader {\n  flex: none;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n  padding: 0 6px 0 var(--dsh-sidebar-row-padding, 12px);\n  box-sizing: border-box;\n}\n.SidebarRoot_filesTitle {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0;\n  text-transform: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_filesRefresh {\n  width: 28px;\n  height: 28px;\n  flex: none;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n}\n.SidebarRoot_filesRefresh:hover:not(:disabled) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_filesRefresh:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.SidebarRoot_filesBody {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding-bottom: 4px;\n}\n.SidebarRoot_fileRow {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: var(--dsh-sidebar-label-gap);\n  height: 32px;\n  border: none;\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: left;\n  padding: 0 8px;\n  cursor: pointer;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.SidebarRoot_fileRow:hover:not(:disabled) {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_fileRow:disabled {\n  cursor: default;\n}\n.SidebarRoot_fileArrow {\n  width: 12px;\n  height: 12px;\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dsw-alias-label-tertiary);\n  transition: transform 150ms var(--ds-ease-in-out);\n}\n.SidebarRoot_fileArrowOpen {\n  transform: rotate(90deg);\n}\n.SidebarRoot_fileIcon {\n  width: 16px;\n  height: 20px;\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_fileName {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.SidebarRoot_fileHint,\n.SidebarRoot_fileError {\n  padding: 2px 8px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--dsw-alias-label-secondary);\n}\n.SidebarRoot_fileError {\n  color: var(--dsw-alias-state-error-primary);\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n[data-animating]:not([data-dragging]) .SidebarRoot_root {\n  transition: width var(--ds-transition-duration-slow) var(--ds-ease-in-out);\n}\n[data-platform=darwin] .SidebarRoot_root {\n  background: transparent;\n}\n.SidebarRoot_root.SidebarRoot_collapsed {\n  padding: 0;\n}\n[data-windows-titlebar] .SidebarRoot_root .SidebarRoot_logoRow {\n  height: 40px;\n  margin: 0;\n  padding: 0;\n}\n[data-windows-titlebar] .SidebarRoot_toggle {\n  position: fixed;\n  top: calc((var(--dsh-windows-titlebar-height) - 28px) / 2);\n  left: 12px;\n  z-index: 30;\n  -webkit-app-region: no-drag;\n}\n[data-windows-titlebar] .SidebarRoot_root.SidebarRoot_collapsed .SidebarRoot_logoRow {\n  height: 0;\n}\n[data-windows-titlebar] .SidebarRoot_root:not(.SidebarRoot_collapsed) .SidebarRoot_brand {\n  padding-left: 8px;\n}\n[data-windows-titlebar] .SidebarRoot_brandIdentity {\n  transform: translateY(1px);\n}\n[data-windows-titlebar] .SidebarRoot_brandMark {\n  transform: translateX(1px);\n}\n[data-windows-titlebar] .SidebarRoot_brandName {\n  font-weight: 400;\n}\n[data-windows-titlebar] .SidebarRoot_root.SidebarRoot_collapsed {\n  padding: 0;\n}\n[data-windows-titlebar] .SidebarRoot_root:not(.SidebarRoot_collapsed) .SidebarRoot_newSessionRow {\n  margin-top: 6px;\n}\n[data-windows-titlebar] .SidebarRoot_collapsed .SidebarRoot_panelList,\n[data-windows-titlebar] .SidebarRoot_collapsed .SidebarRoot_regionArea,\n[data-windows-titlebar] .SidebarRoot_collapsed .SidebarRoot_footArea {\n  display: none;\n}\nhtml[data-windows-titlebar]:has([data-sidebar-collapsed=true]) {\n  --dsh-windows-menu-start: 84px;\n}\n[data-windows-titlebar] .SidebarRoot_collapsed .SidebarRoot_newSession {\n  position: fixed;\n  top: calc((var(--dsh-windows-titlebar-height) - 28px) / 2);\n  left: 48px;\n  margin: 0;\n  padding: 0;\n  border: none;\n  z-index: 30;\n  -webkit-app-region: no-drag;\n}\n[data-windows-titlebar] .SidebarRoot_railIn .SidebarRoot_iconButton,\n[data-windows-titlebar] .SidebarRoot_railIn .SidebarRoot_newSession {\n  animation: none;\n}\n[data-windows-titlebar] .SidebarRoot_collapsed .SidebarRoot_toggle,\n[data-windows-titlebar] .SidebarRoot_collapsed .SidebarRoot_newSession {\n  width: 28px;\n  height: 28px;\n  border-radius: var(--dsw-radius-sm);\n  color: var(--dsw-alias-label-secondary);\n}\n[data-windows-titlebar] .SidebarRoot_collapsed .SidebarRoot_toggle .SidebarRoot_panelIcon {\n  display: inline;\n}\n.SidebarRoot_root.SidebarRoot_quietBars {\n  --dsh-scrollbar-thumb: transparent;\n  --dsh-scrollbar-thumb-hover: transparent;\n}\n.SidebarRoot_fading > * {\n  opacity: 0;\n  transition: opacity 150ms var(--ds-ease-in-out);\n}\n.SidebarRoot_wide {\n  animation: SidebarRoot_wide-in 200ms var(--ds-ease-in-out);\n}\n@keyframes SidebarRoot_wide-in {\n  from {\n    opacity: 0;\n  }\n}\n.SidebarRoot_railIn .SidebarRoot_iconButton,\n.SidebarRoot_railIn .SidebarRoot_newSessionRow > [data-slot=\"sidebar.session.action\"] > *,\n.SidebarRoot_railIn .SidebarRoot_panelList,\n.SidebarRoot_railIn .SidebarRoot_regionArea {\n  animation: SidebarRoot_rail-in 150ms var(--ds-ease-in-out) backwards;\n}\n.SidebarRoot_railIn .SidebarRoot_footArea {\n  animation: SidebarRoot_rail-fade-in 150ms var(--ds-ease-in-out) backwards;\n}\n@keyframes SidebarRoot_rail-in {\n  from {\n    opacity: 0;\n    transform: translateX(49px);\n  }\n}\n@keyframes SidebarRoot_rail-fade-in {\n  from {\n    opacity: 0;\n  }\n}\n.SidebarRoot_topStrip {\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 52px;\n  box-sizing: border-box;\n  margin: -6px calc(-1 * var(--dsh-sidebar-inline-padding)) 0;\n  padding: 0 12px 2px;\n}\nhtml[data-platform=darwin]:not([data-fullscreen]) .SidebarRoot_root:not(.SidebarRoot_collapsed) > .SidebarRoot_topStrip > .SidebarRoot_toggle {\n  transform: translateX(4px);\n}\n[data-fullscreen] .SidebarRoot_topStrip {\n  justify-content: flex-start;\n}\n.SidebarRoot_topStrip + .SidebarRoot_logoRow {\n  margin-top: -12px;\n}\n.SidebarRoot_logoRow {\n  display: none;\n}\n.SidebarRoot_collapsed .SidebarRoot_logoRow {\n  height: 36px;\n  padding: 0;\n  margin-bottom: 12px;\n  justify-content: flex-start;\n  overflow: visible;\n}\n.SidebarRoot_brand {\n  flex: 1;\n  min-width: 0;\n  display: inline-flex;\n  align-items: center;\n  overflow: hidden;\n  padding: 0;\n  border: none;\n  background: transparent;\n  color: inherit;\n  cursor: pointer;\n}\n[data-platform=darwin] .SidebarRoot_brand {\n  cursor: default;\n}\n.SidebarRoot_brandIdentity {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 24px;\n  min-width: 0;\n}\n.SidebarRoot_brandMark {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.SidebarRoot_brandName {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n  height: 24px;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 0.04em;\n}\n.SidebarRoot_fallbackBrandName {\n  font-size: 17px;\n  letter-spacing: 0px;\n  white-space: nowrap;\n}\n.SidebarRoot_localBuildBrand {\n  flex: none;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 1px;\n  height: 24px;\n  white-space: nowrap;\n}\n.SidebarRoot_copyVersion {\n  display: inline-flex;\n  cursor: pointer;\n  -webkit-app-region: no-drag;\n}\n.SidebarRoot_localBuildTitle {\n  font-size: 12px;\n  line-height: 13px;\n  letter-spacing: 0;\n}\n.SidebarRoot_iconButton {\n  position: relative;\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--dsw-alias-label-secondary);\n}\n@media (hover: hover) {\n  .SidebarRoot_iconButton:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.SidebarRoot_iconButton.SidebarRoot_toggle:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n.SidebarRoot_collapsed .SidebarRoot_iconButton {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--dsw-radius-md);\n}\n.SidebarRoot_collapsed .SidebarRoot_toggle .SidebarRoot_panelIcon {\n  display: none;\n}\n@media (hover: hover) {\n  .SidebarRoot_collapsed .SidebarRoot_toggle:hover .SidebarRoot_panelIcon {\n    display: inline;\n  }\n  .SidebarRoot_collapsed .SidebarRoot_toggle:hover .SidebarRoot_railMark {\n    display: none;\n  }\n}\n.SidebarRoot_railMark {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.SidebarRoot_collapsed .SidebarRoot_iconButton {\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_buildVersion {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  height: 10px;\n  padding: 0 3px;\n  border-radius: 2px;\n  color: var(--dsw-alias-label-primary-inverted);\n  background: var(--dsw-alias-label-primary);\n  font-family: var(--ds-font-family-code);\n  font-size: 6px;\n  font-weight: 500;\n  line-height: 10px;\n  white-space: nowrap;\n}\n.SidebarRoot_newSessionRow {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 calc(var(--dsh-sidebar-paint-inset) + 1px);\n}\n.SidebarRoot_newSession {\n  container-type: inline-size;\n  position: relative;\n  flex: 1 1 auto;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  height: 38px;\n  padding: 8px 12px;\n  margin: 0;\n  box-sizing: border-box;\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsw-radius-md);\n  background: var(--dsw-alias-button-elevated-fill);\n  color: var(--dsw-alias-label-primary);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 22px;\n  cursor: pointer;\n  overflow: hidden;\n}\n@media (hover: hover) {\n  .SidebarRoot_newSession:hover {\n    background: var(--dsw-alias-button-floating-hover);\n  }\n}\n[data-platform=darwin] :where(.SidebarRoot_root:not([role=dialog])) .SidebarRoot_newSession {\n  background: var(--dsw-specific-sidebar-glass-fill);\n}\n@media (hover: hover) {\n  [data-platform=darwin] :where(.SidebarRoot_root:not([role=dialog])) .SidebarRoot_newSession:hover {\n    background: var(--dsw-specific-sidebar-glass-hover);\n  }\n}\n.SidebarRoot_collapsed .SidebarRoot_newSessionRow {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  margin: 0 0 12px;\n}\n.SidebarRoot_collapsed .SidebarRoot_newSession {\n  flex: none;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0;\n  gap: 0;\n  border-color: transparent;\n  background: transparent;\n}\n@media (hover: hover) {\n  .SidebarRoot_collapsed .SidebarRoot_newSession:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n[data-platform=darwin] :where(.SidebarRoot_root:not([role=dialog])).SidebarRoot_collapsed .SidebarRoot_newSession {\n  background: var(--dsw-specific-sidebar-glass-collapsed-fill);\n}\n@media (hover: hover) {\n  [data-platform=darwin] :where(.SidebarRoot_root:not([role=dialog])).SidebarRoot_collapsed .SidebarRoot_newSession:hover {\n    background: var(--dsw-specific-sidebar-glass-collapsed-hover);\n  }\n}\n.SidebarRoot_newSessionLabel {\n  max-width: 200px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.SidebarRoot_collapsed .SidebarRoot_newSessionLabel {\n  max-width: 0;\n}\n.SidebarRoot_newSessionLabelMask {\n  flex: 1;\n  min-width: 0;\n}\n.SidebarRoot_newSession:focus-visible .SidebarRoot_newSessionLabelMask:has(+ .SidebarRoot_newSessionShortcut) {\n  overflow: hidden;\n  mask-image:\n    linear-gradient(\n      to right,\n      black calc(100% - 16px),\n      transparent);\n}\n@media (hover: hover) {\n  .SidebarRoot_newSession:hover .SidebarRoot_newSessionLabelMask:has(+ .SidebarRoot_newSessionShortcut) {\n    overflow: hidden;\n    mask-image:\n      linear-gradient(\n        to right,\n        black calc(100% - 16px),\n        transparent);\n  }\n}\n.SidebarRoot_newSessionContent {\n  display: flex;\n  width: 100cqw;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n}\n.SidebarRoot_newSessionContent > svg {\n  flex: none;\n}\n.SidebarRoot_newSessionShortcut {\n  opacity: 0;\n  display: inline-flex;\n  flex: none;\n  pointer-events: none;\n  font-weight: 400;\n}\n.SidebarRoot_newSession:focus-visible .SidebarRoot_newSessionShortcut {\n  opacity: 1;\n}\n@media (hover: hover) {\n  .SidebarRoot_newSession:hover .SidebarRoot_newSessionShortcut {\n    opacity: 1;\n  }\n}\n.SidebarRoot_scrollRegion {\n  margin-top: 4px;\n  position: relative;\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n}\n.SidebarRoot_root:not(.SidebarRoot_collapsed) .SidebarRoot_scrollRegion {\n  container-type: size;\n}\n.SidebarRoot_scrollArea {\n  flex: 1;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: 4px minmax(0, 1fr) calc(var(--dsh-sidebar-inline-padding) - 2px);\n  grid-template-rows: 8px max-content 2px max-content;\n  align-content: start;\n  margin-left: -4px;\n  margin-right: calc(2px - var(--dsh-sidebar-inline-padding));\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.SidebarRoot_root:not(.SidebarRoot_collapsed) .SidebarRoot_scrollArea {\n  container-type: scroll-state;\n  scrollbar-width: none;\n}\n.SidebarRoot_root:not(.SidebarRoot_collapsed) .SidebarRoot_scrollArea::-webkit-scrollbar {\n  display: none;\n}\n.SidebarRoot_scrollArea::before,\n.SidebarRoot_scrollArea::after {\n  content: \"\";\n  grid-column: 2;\n  pointer-events: none;\n}\n.SidebarRoot_scrollArea::before {\n  grid-row: 1;\n}\n.SidebarRoot_scrollArea::after {\n  grid-row: 3;\n}\n.SidebarRoot_scrollFade {\n  position: absolute;\n  inset-inline: 0;\n  bottom: 0;\n  height: 24px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--dsw-specific-sidebar-fill));\n  pointer-events: none;\n}\n[data-platform=darwin] .SidebarRoot_scrollFade,\n.SidebarRoot_collapsed .SidebarRoot_scrollFade,\n.SidebarRoot_collapsed .SidebarRoot_scrollArea::before,\n.SidebarRoot_collapsed .SidebarRoot_scrollArea::after {\n  display: none;\n}\n.SidebarRoot_collapsed .SidebarRoot_scrollRegion {\n  margin-top: 0;\n}\n.SidebarRoot_collapsed .SidebarRoot_scrollArea {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n.SidebarRoot_panelEntry {\n  position: relative;\n  display: flex;\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  border-radius: var(--dsw-radius-md);\n  background-clip: padding-box;\n}\n.SidebarRoot_panelEntryWide > *:first-child {\n  flex: 1;\n  min-width: 0;\n}\n.SidebarRoot_panelEntryWide .SidebarRoot_panelRow {\n  width: 100%;\n  margin: 0;\n  border-inline: 0;\n  padding-right: 38px;\n  background: transparent;\n}\n.SidebarRoot_panelEntryActive,\n.SidebarRoot_panelEntry:has(:focus-visible) {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_panelUnpin {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border: 0;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-caption);\n  cursor: pointer;\n}\n.SidebarRoot_panelUnpin:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n@media (hover: hover) {\n  .SidebarRoot_panelUnpin {\n    opacity: 0;\n  }\n  .SidebarRoot_panelEntry:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n  .SidebarRoot_panelEntry .SidebarRoot_panelRow:hover {\n    background: transparent;\n  }\n  .SidebarRoot_panelUnpin:hover {\n    color: var(--dsw-alias-label-primary);\n  }\n  .SidebarRoot_panelEntry:hover .SidebarRoot_panelUnpin,\n  .SidebarRoot_panelEntry:has(:focus-visible) .SidebarRoot_panelUnpin {\n    opacity: 1;\n  }\n}\n.SidebarRoot_panelList {\n  grid-column: 2;\n  grid-row: 2;\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.SidebarRoot_panelRow {\n  display: flex;\n  align-items: center;\n  gap: var(--dsh-sidebar-label-gap);\n  margin: 0;\n  min-height: 32px;\n  padding: 5px calc(var(--dsh-sidebar-row-padding) - var(--dsh-sidebar-paint-inset));\n  box-sizing: border-box;\n  border: none;\n  border-inline: var(--dsh-sidebar-paint-inset) solid transparent;\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  background-clip: padding-box;\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  line-height: 22px;\n  text-align: left;\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .SidebarRoot_panelRow:hover {\n    background-color: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.SidebarRoot_panelRow:focus-visible {\n  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));\n  outline-offset: -2px;\n}\n.SidebarRoot_moreAnchor {\n  display: flex;\n  flex-direction: column;\n}\n.SidebarRoot_panelRow[aria-expanded=true] {\n  background-color: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_moreMenu {\n  width: 288px;\n  max-width: calc(100vw - 24px);\n}\n.SidebarRoot_panelGlyph {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.SidebarRoot_panelTitle {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.SidebarRoot_collapsed .SidebarRoot_panelList {\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.SidebarRoot_collapsed .SidebarRoot_panelEntry {\n  border-inline: 0;\n}\n.SidebarRoot_collapsed .SidebarRoot_panelRow {\n  width: 36px;\n  height: 36px;\n  justify-content: center;\n  margin: 0;\n  border-inline: 0;\n  background-clip: border-box;\n  padding: 0;\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_regionArea {\n  grid-column: 2;\n  grid-row: 4;\n  min-height: 0;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.SidebarRoot_collapsed .SidebarRoot_regionArea {\n  flex: 1;\n}\n.SidebarRoot_footArea {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n}\n.SidebarRoot_settingsArea,\n.SidebarRoot_footerActions {\n  flex: none;\n  min-width: 0;\n  width: 100%;\n}\n.SidebarRoot_footerActions {\n  display: flex;\n}\n.SidebarRoot_collapsed .SidebarRoot_footArea {\n  align-items: center;\n}\n.SidebarRoot_collapsed .SidebarRoot_settingsArea,\n.SidebarRoot_collapsed .SidebarRoot_footerActions {\n  display: flex;\n  justify-content: center;\n  width: auto;\n}\n@media (prefers-reduced-motion: reduce) {\n  [data-animating]:not([data-dragging]) .SidebarRoot_root,\n  .SidebarRoot_wide,\n  .SidebarRoot_fading > *,\n  .SidebarRoot_railIn .SidebarRoot_iconButton,\n  .SidebarRoot_railIn .SidebarRoot_newSessionRow > [data-slot=\"sidebar.session.action\"] > *,\n  .SidebarRoot_railIn .SidebarRoot_panelList,\n  .SidebarRoot_railIn .SidebarRoot_footArea,\n  .SidebarRoot_railIn .SidebarRoot_regionArea {\n    transition: none;\n    animation: none;\n  }\n}\n.SidebarRoot_panelColumnRemote > :not(.SidebarRoot_remotePanel) {\n  display: none;\n}\n.SidebarRoot_remotePanel {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n}\n.SidebarRoot_remoteForm {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  padding: 2px 0 10px;\n  border-bottom: 1px solid var(--dsw-alias-border-l1);\n}\n.SidebarRoot_remoteSectionTitle {\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 500;\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_remoteField {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.SidebarRoot_remoteFieldGrow {\n  flex: 1;\n}\n.SidebarRoot_remoteFieldPort {\n  flex: 0 0 64px;\n}\n.SidebarRoot_remoteRow {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n}\n.SidebarRoot_remoteLabel {\n  font-size: 11px;\n  line-height: 15px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remotePasswordHint {\n  margin-left: 6px;\n  color: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remoteRemember {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 18px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n  user-select: none;\n}\n.SidebarRoot_remoteRemember input {\n  width: 14px;\n  height: 14px;\n  margin: 0;\n  accent-color: var(--dsw-alias-state-business-primary);\n}\n.SidebarRoot_remoteInput {\n  width: 100%;\n  min-width: 0;\n  height: 30px;\n  box-sizing: border-box;\n  padding: 0 8px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-base);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 13px;\n  outline: none;\n}\n.SidebarRoot_remoteInput::placeholder {\n  color: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remoteInput:focus {\n  border-color: var(--dsw-alias-state-business-primary);\n}\n.SidebarRoot_remoteCommandRow {\n  display: flex;\n  gap: 6px;\n  min-width: 0;\n}\n.SidebarRoot_remoteCommandRow .SidebarRoot_remoteInput {\n  flex: 1;\n}\n.SidebarRoot_remoteParseButton {\n  flex: none;\n  height: 30px;\n  padding: 0 8px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 12px;\n  cursor: pointer;\n}\n.SidebarRoot_remoteParseButton:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_remoteStatus {\n  margin: 0;\n  font-size: 11px;\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remoteStatusSuccess {\n  color: var(--dsw-alias-state-success-primary, #1a7f37);\n}\n.SidebarRoot_remoteStatusError {\n  color: var(--dsw-alias-state-danger-primary, #d1242f);\n}\n.SidebarRoot_remoteConnectButton {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 32px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-state-business-primary);\n  color: var(--dsw-alias-label-on-business, #fff);\n  font: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.SidebarRoot_remoteConnectButton:hover {\n  filter: brightness(1.06);\n}\n.SidebarRoot_remoteConnectButton:disabled {\n  opacity: 0.6;\n  cursor: default;\n  filter: none;\n}\n.SidebarRoot_remoteHistory {\n  flex: 1;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  padding-top: 8px;\n}\n.SidebarRoot_remoteWorkspacesPanel {\n  flex: none;\n  max-height: 190px;\n  overflow-y: auto;\n  margin-top: 4px;\n}\n.SidebarRoot_remoteHistoryHeader {\n  flex: none;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remoteHistoryCount {\n  font-size: 11px;\n  color: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remoteHistoryList {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  padding-bottom: 8px;\n}\n.SidebarRoot_remoteEmpty {\n  margin: 4px 6px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remoteHistoryRow {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  border-radius: var(--dsw-radius-md);\n}\n.SidebarRoot_remoteHistoryRow:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_remoteHistoryMain {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 36px;\n  padding: 0 6px;\n  border: none;\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 13px;\n  text-align: left;\n  cursor: pointer;\n}\n.SidebarRoot_remoteHistoryMain svg {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remoteHistoryScreen {\n  fill: transparent;\n  transition: fill 120ms var(--ds-ease-in-out);\n}\n.SidebarRoot_remoteHistoryScreenConnected {\n  fill: var(--dsw-alias-state-success-primary, #1a7f37);\n}\n.SidebarRoot_remoteHistoryRowConnected .SidebarRoot_remoteHistoryMain svg {\n  color: var(--dsw-alias-state-success-primary, #1a7f37);\n}\n.SidebarRoot_remoteHistoryText {\n  min-width: 0;\n  display: flex;\n  align-items: baseline;\n  gap: 1px;\n}\n.SidebarRoot_remoteHistoryHost {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.SidebarRoot_remoteHistoryMeta {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n}\n.SidebarRoot_remoteConnectedBadge {\n  flex: none;\n  height: 16px;\n  margin-left: 5px;\n  padding: 0 5px;\n  border-radius: 8px;\n  background: color-mix(in srgb, var(--dsw-alias-state-success-primary, #1a7f37) 12%, transparent);\n  color: var(--dsw-alias-state-success-primary, #1a7f37);\n  font-size: 10px;\n  line-height: 16px;\n}\n.SidebarRoot_remoteDelete {\n  flex: none;\n  width: 24px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-caption);\n  cursor: pointer;\n}\n.SidebarRoot_remoteDelete:hover {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_remoteHeaderButton {\n  flex: none;\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n}\n.SidebarRoot_remoteHeaderButton svg {\n  flex: none;\n}\n.SidebarRoot_remoteHeaderButton:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_remoteWorkspaceList {\n  margin-top: 6px;\n  padding-top: 6px;\n  border-top: 1px solid var(--dsw-alias-border-l1);\n}\n.SidebarRoot_remoteWorkspaceHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  height: 28px;\n  padding: 0 var(--dsh-sidebar-row-padding, 12px);\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remoteWorkspaceHeaderStatus {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remoteWorkspaceStatusDot {\n  flex: none;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remoteWorkspaceHeaderStatus[data-online=true] .SidebarRoot_remoteWorkspaceStatusDot,\n.SidebarRoot_remoteWorkspaceStatus[data-online=true] .SidebarRoot_remoteWorkspaceStatusDot {\n  background: var(--dsw-alias-state-success-primary, #1a7f37);\n}\n.SidebarRoot_remoteWorkspaceItem {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  border-radius: var(--dsw-radius-md);\n}\n.SidebarRoot_remoteWorkspaceItem:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_remoteWorkspaceMain {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 36px;\n  padding: 0 6px;\n  border: none;\n  border-radius: var(--dsw-radius-md);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  text-align: left;\n  cursor: pointer;\n}\n.SidebarRoot_remoteWorkspaceMain svg {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remoteWorkspaceText {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.SidebarRoot_remoteWorkspacePath {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 14px;\n  line-height: 20px;\n}\n.SidebarRoot_remoteWorkspaceHost {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  min-width: 0;\n  font-size: 11px;\n  line-height: 15px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remoteWorkspaceStatus {\n  flex: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 10px;\n  line-height: 15px;\n  color: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remoteWorkspaceStatus[data-online=true] {\n  color: var(--dsw-alias-state-success-primary, #1a7f37);\n}\n.SidebarRoot_remoteWorkspaceTarget {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.SidebarRoot_remoteWorkspaceSessionCount {\n  flex: none;\n  margin-left: 2px;\n  color: var(--dsw-alias-label-caption);\n  font-size: 10px;\n}\n.SidebarRoot_remoteWorkspaceRemove {\n  flex: none;\n  width: 24px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-caption);\n  cursor: pointer;\n}\n.SidebarRoot_remoteWorkspaceRemove:hover {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_remoteWorkspaceActions {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  padding-right: 2px;\n  opacity: 0;\n  transition: opacity 120ms var(--ds-ease-in-out);\n}\n.SidebarRoot_remoteWorkspaceItem:hover .SidebarRoot_remoteWorkspaceActions,\n.SidebarRoot_remoteWorkspaceItem:focus-within .SidebarRoot_remoteWorkspaceActions {\n  opacity: 1;\n}\n@media (hover: none) {\n  .SidebarRoot_remoteWorkspaceActions {\n    opacity: 1;\n  }\n}\n.SidebarRoot_remoteWorkspaceAction {\n  flex: none;\n  width: 24px;\n  height: 24px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  cursor: pointer;\n}\n.SidebarRoot_remoteWorkspaceAction:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_remoteWorkspaceMenuAnchor {\n  flex: none;\n}\n.SidebarRoot_remoteWorkspaceMenu {\n  min-width: 180px;\n  padding: 4px;\n}\n.SidebarRoot_remoteWorkspaceMenuItem {\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 8px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 12px;\n  text-align: left;\n  cursor: pointer;\n}\n.SidebarRoot_remoteWorkspaceMenuItem:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_remotePickerOverlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.28);\n}\n.SidebarRoot_remotePickerDialog {\n  width: 520px;\n  max-width: calc(100vw - 40px);\n  max-height: min(620px, calc(100vh - 40px));\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px solid var(--dsw-alias-border-l1);\n  border-radius: 10px;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.24);\n}\n.SidebarRoot_remotePickerHeader {\n  flex: none;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 16px 10px;\n}\n.SidebarRoot_remotePickerTitle {\n  font-size: 15px;\n  line-height: 22px;\n  font-weight: 600;\n}\n.SidebarRoot_remotePickerSub {\n  margin-top: 2px;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.SidebarRoot_remotePickerSelectConnection {\n  max-width: 190px;\n  height: 28px;\n  padding: 0 8px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-bg-base);\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 12px;\n}\n.SidebarRoot_remotePickerToolbar {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 16px 10px;\n}\n.SidebarRoot_remotePickerPath {\n  flex: 1;\n  min-width: 0;\n}\n.SidebarRoot_remotePickerTool {\n  flex: none;\n  height: 30px;\n  padding: 0 8px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 12px;\n  cursor: pointer;\n}\n.SidebarRoot_remotePickerTool:hover:not(:disabled) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_remotePickerTool:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.SidebarRoot_remotePickerList {\n  flex: 1;\n  min-height: 180px;\n  overflow-y: auto;\n  padding: 4px 10px 8px;\n  border-top: 1px solid var(--dsw-alias-border-l1);\n  border-bottom: 1px solid var(--dsw-alias-border-l1);\n}\n.SidebarRoot_remotePickerRow {\n  width: 100%;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 8px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  font-size: 13px;\n  text-align: left;\n  cursor: pointer;\n}\n.SidebarRoot_remotePickerRow:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.SidebarRoot_remotePickerFile {\n  color: var(--dsw-alias-label-secondary);\n  cursor: default;\n}\n.SidebarRoot_remotePickerFile:hover {\n  background: transparent;\n}\n.SidebarRoot_remotePickerGlyph {\n  flex: none;\n  width: 16px;\n  color: var(--dsw-alias-label-tertiary);\n  text-align: center;\n}\n.SidebarRoot_remotePickerEmpty {\n  margin: 12px 8px;\n  font-size: 12px;\n  color: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remotePickerError {\n  margin: 12px 8px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-state-danger-primary, #d1242f);\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.SidebarRoot_remotePickerCreateRow {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 4px;\n}\n.SidebarRoot_remotePickerCreateInput {\n  flex: 1;\n  min-width: 0;\n}\n.SidebarRoot_remotePickerCreate {\n  flex: none;\n  height: 30px;\n  padding: 0 10px;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  background: var(--dsw-alias-state-business-primary);\n  color: var(--dsw-alias-label-on-business, #fff);\n  font: inherit;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.SidebarRoot_remotePickerCreate:hover {\n  filter: brightness(1.06);\n}\n.SidebarRoot_remotePickerFooter {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n}\n.SidebarRoot_remotePickerHint {\n  flex: 1;\n  min-width: 0;\n  font-size: 11px;\n  color: var(--dsw-alias-label-caption);\n}\n.SidebarRoot_remotePickerCancel,\n.SidebarRoot_remotePickerSelect {\n  flex: none;\n  height: 28px;\n  padding: 0 12px;\n  border-radius: var(--dsw-radius-sm);\n  font: inherit;\n  font-size: 12px;\n  cursor: pointer;\n}\n.SidebarRoot_remotePickerCancel {\n  border: 1px solid var(--dsw-alias-border-l2);\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n}\n.SidebarRoot_remotePickerCancel:hover {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n.SidebarRoot_remotePickerSelect {\n  border: none;\n  background: var(--dsw-alias-state-business-primary);\n  color: var(--dsw-alias-label-on-business, #fff);\n  font-weight: 500;\n}\n.SidebarRoot_remotePickerSelect:hover {\n  filter: brightness(1.06);\n}\n";
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

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/index.ts
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_dsh_client_store2 = require("@deepseek-ai/dsh-client-store");
var import_dsh_client_ui_slots = require("@deepseek-ai/dsh-client-ui-slots");

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/panel-pins.ts
var import_dsh_client_store = require("@deepseek-ai/dsh-client-store");
var FIXED_PANEL_ID = "plugins";
var NO_PANELS = [];
function createPanelPins() {
  const store = (0, import_dsh_client_store.createSnapshotStore)({ unpinned: NO_PANELS });
  return {
    unpinned: { getSnapshot: () => store.getSnapshot().unpinned, subscribe: (listener) => store.subscribe(listener) },
    setPinned: (id, pinned) => {
      const current = store.getSnapshot().unpinned;
      if (id === FIXED_PANEL_ID || pinned !== current.includes(id)) return;
      store.set({ unpinned: pinned ? current.filter((entry) => entry !== id) : [...current, id] });
    }
  };
}

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/HeaderLeadingControls.tsx
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/HeaderLeadingControls.module.css
var HeaderLeadingControls_default = {
  controls: "HeaderLeadingControls_controls",
  iconButton: "HeaderLeadingControls_iconButton"
};

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/HeaderLeadingControls.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function HeaderLeadingControls({
  toggleSidebar,
  startSession,
  trackEntryClick,
  useRemoteAccess,
  useShortcuts,
  t
}) {
  const canStartSession = useRemoteAccess("session/create");
  const desktop = document.documentElement.hasAttribute("data-platform");
  const shortcut = useShortcuts((rows) => rows.find((row) => row.id === "sidebar.left.toggle"));
  const newShortcut = useShortcuts((rows) => rows.find((row) => row.id === "session.new"));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: HeaderLeadingControls_default.controls, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tooltip, { label: t("toggle.open"), shortcutKeys: shortcut?.keys, delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        "data-sidebar-opener": true,
        type: "button",
        className: HeaderLeadingControls_default.iconButton,
        "aria-label": t("toggle.open"),
        "aria-keyshortcuts": shortcut?.aria,
        onClick: () => {
          toggleSidebar();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconPanelLeftOutlineRegular, { size: 16 })
      }
    ) }),
    desktop && canStartSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tooltip, { label: t("session.new.label"), shortcutKeys: newShortcut?.keys, delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: HeaderLeadingControls_default.iconButton,
        "aria-label": t("session.new.label"),
        "aria-keyshortcuts": newShortcut?.aria,
        onClick: () => {
          trackEntryClick({ menu_name: "new_session", position: "titlebar" });
          startSession();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconNewChatOutlineRegular, { size: 16 })
      }
    ) })
  ] });
}

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/SidebarRoot.tsx
var import_react = require("react");
var import_react_dom = require("react-dom");

// node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/SidebarRoot.tsx
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/scroll-handoff.ts
var GESTURE_GAP_MS = 100;
function verticalWheelPixels(event, page) {
  if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return void 0;
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * page;
  return event.deltaY;
}
function scrollClamped(element, delta) {
  const before = element.scrollTop;
  element.scrollTop = before + delta;
  return element.scrollTop - before;
}
function atEnd(viewport) {
  return viewport.scrollHeight - viewport.clientHeight - viewport.scrollTop < 1;
}
function createScrollHandoff() {
  let scroller = null;
  let releaseViewport;
  let lastSplit = Number.NEGATIVE_INFINITY;
  const handle = (viewport, event) => {
    if (scroller === null || event.defaultPrevented) return;
    const delta = verticalWheelPixels(event, viewport.clientHeight);
    if (delta === void 0 || delta === 0) return;
    const continuing = event.cancelable && event.timeStamp - lastSplit < GESTURE_GAP_MS;
    if (!continuing) {
      const native = atEnd(viewport) && scroller.contains(event.target);
      if (native && (delta > 0 || scroller.scrollTop + delta >= 0)) return;
      if (!event.cancelable) {
        if (native) scrollClamped(viewport, delta + scroller.scrollTop);
        return;
      }
    }
    event.preventDefault();
    lastSplit = event.timeStamp;
    if (delta > 0) {
      const rest2 = delta - scrollClamped(viewport, delta);
      if (rest2 > 0) scrollClamped(scroller, rest2);
      return;
    }
    const rest = delta - scrollClamped(scroller, delta);
    if (rest < 0) scrollClamped(viewport, rest);
  };
  const sectionScroller = {
    bindScrollerRef: (element) => {
      scroller = element;
    }
  };
  return {
    bindViewportRef: (element) => {
      releaseViewport?.();
      releaseViewport = void 0;
      if (element === null) return;
      const onWheel = (event) => {
        handle(element, event);
      };
      element.addEventListener("wheel", onWheel, { passive: false });
      releaseViewport = () => {
        element.removeEventListener("wheel", onWheel);
      };
    },
    useSectionScroller: () => sectionScroller
  };
}

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/SidebarRoot.module.css
var SidebarRoot_default = {
  root: "SidebarRoot_root",
  activityRail: "SidebarRoot_activityRail",
  railBrand: "SidebarRoot_railBrand",
  railButton: "SidebarRoot_railButton",
  railActive: "SidebarRoot_railActive",
  railRemoteBadge: "SidebarRoot_railRemoteBadge",
  railGrow: "SidebarRoot_railGrow",
  railFoot: "SidebarRoot_railFoot",
  panelColumn: "SidebarRoot_panelColumn",
  filesPane: "SidebarRoot_filesPane",
  filesSplit: "SidebarRoot_filesSplit",
  filesHeader: "SidebarRoot_filesHeader",
  filesTitle: "SidebarRoot_filesTitle",
  filesRefresh: "SidebarRoot_filesRefresh",
  filesBody: "SidebarRoot_filesBody",
  fileRow: "SidebarRoot_fileRow",
  fileArrow: "SidebarRoot_fileArrow",
  fileArrowOpen: "SidebarRoot_fileArrowOpen",
  fileIcon: "SidebarRoot_fileIcon",
  fileName: "SidebarRoot_fileName",
  fileHint: "SidebarRoot_fileHint",
  fileError: "SidebarRoot_fileError",
  collapsed: "SidebarRoot_collapsed",
  logoRow: "SidebarRoot_logoRow",
  toggle: "SidebarRoot_toggle",
  brand: "SidebarRoot_brand",
  brandIdentity: "SidebarRoot_brandIdentity",
  brandMark: "SidebarRoot_brandMark",
  brandName: "SidebarRoot_brandName",
  newSessionRow: "SidebarRoot_newSessionRow",
  panelList: "SidebarRoot_panelList",
  regionArea: "SidebarRoot_regionArea",
  footArea: "SidebarRoot_footArea",
  newSession: "SidebarRoot_newSession",
  railIn: "SidebarRoot_railIn",
  iconButton: "SidebarRoot_iconButton",
  panelIcon: "SidebarRoot_panelIcon",
  quietBars: "SidebarRoot_quietBars",
  fading: "SidebarRoot_fading",
  wide: "SidebarRoot_wide",
  "wide-in": "SidebarRoot_wide-in",
  "rail-in": "SidebarRoot_rail-in",
  "rail-fade-in": "SidebarRoot_rail-fade-in",
  topStrip: "SidebarRoot_topStrip",
  fallbackBrandName: "SidebarRoot_fallbackBrandName",
  localBuildBrand: "SidebarRoot_localBuildBrand",
  copyVersion: "SidebarRoot_copyVersion",
  localBuildTitle: "SidebarRoot_localBuildTitle",
  railMark: "SidebarRoot_railMark",
  buildVersion: "SidebarRoot_buildVersion",
  newSessionLabel: "SidebarRoot_newSessionLabel",
  newSessionLabelMask: "SidebarRoot_newSessionLabelMask",
  newSessionShortcut: "SidebarRoot_newSessionShortcut",
  newSessionContent: "SidebarRoot_newSessionContent",
  scrollRegion: "SidebarRoot_scrollRegion",
  scrollArea: "SidebarRoot_scrollArea",
  scrollFade: "SidebarRoot_scrollFade",
  panelEntry: "SidebarRoot_panelEntry",
  panelEntryWide: "SidebarRoot_panelEntryWide",
  panelRow: "SidebarRoot_panelRow",
  panelEntryActive: "SidebarRoot_panelEntryActive",
  panelUnpin: "SidebarRoot_panelUnpin",
  moreAnchor: "SidebarRoot_moreAnchor",
  moreMenu: "SidebarRoot_moreMenu",
  panelGlyph: "SidebarRoot_panelGlyph",
  panelTitle: "SidebarRoot_panelTitle",
  settingsArea: "SidebarRoot_settingsArea",
  footerActions: "SidebarRoot_footerActions",
  panelColumnRemote: "SidebarRoot_panelColumnRemote",
  remotePanel: "SidebarRoot_remotePanel",
  remoteForm: "SidebarRoot_remoteForm",
  remoteSectionTitle: "SidebarRoot_remoteSectionTitle",
  remoteField: "SidebarRoot_remoteField",
  remoteFieldGrow: "SidebarRoot_remoteFieldGrow",
  remoteFieldPort: "SidebarRoot_remoteFieldPort",
  remoteRow: "SidebarRoot_remoteRow",
  remoteLabel: "SidebarRoot_remoteLabel",
  remotePasswordHint: "SidebarRoot_remotePasswordHint",
  remoteRemember: "SidebarRoot_remoteRemember",
  remoteInput: "SidebarRoot_remoteInput",
  remoteCommandRow: "SidebarRoot_remoteCommandRow",
  remoteParseButton: "SidebarRoot_remoteParseButton",
  remoteStatus: "SidebarRoot_remoteStatus",
  remoteStatusSuccess: "SidebarRoot_remoteStatusSuccess",
  remoteStatusError: "SidebarRoot_remoteStatusError",
  remoteConnectButton: "SidebarRoot_remoteConnectButton",
  remoteHistory: "SidebarRoot_remoteHistory",
  remoteWorkspacesPanel: "SidebarRoot_remoteWorkspacesPanel",
  remoteHistoryHeader: "SidebarRoot_remoteHistoryHeader",
  remoteHistoryCount: "SidebarRoot_remoteHistoryCount",
  remoteHistoryList: "SidebarRoot_remoteHistoryList",
  remoteEmpty: "SidebarRoot_remoteEmpty",
  remoteHistoryRow: "SidebarRoot_remoteHistoryRow",
  remoteHistoryMain: "SidebarRoot_remoteHistoryMain",
  remoteHistoryScreen: "SidebarRoot_remoteHistoryScreen",
  remoteHistoryScreenConnected: "SidebarRoot_remoteHistoryScreenConnected",
  remoteHistoryRowConnected: "SidebarRoot_remoteHistoryRowConnected",
  remoteHistoryText: "SidebarRoot_remoteHistoryText",
  remoteHistoryHost: "SidebarRoot_remoteHistoryHost",
  remoteHistoryMeta: "SidebarRoot_remoteHistoryMeta",
  remoteConnectedBadge: "SidebarRoot_remoteConnectedBadge",
  remoteDelete: "SidebarRoot_remoteDelete",
  remoteHeaderButton: "SidebarRoot_remoteHeaderButton",
  remoteWorkspaceList: "SidebarRoot_remoteWorkspaceList",
  remoteWorkspaceHeader: "SidebarRoot_remoteWorkspaceHeader",
  remoteWorkspaceHeaderStatus: "SidebarRoot_remoteWorkspaceHeaderStatus",
  remoteWorkspaceStatusDot: "SidebarRoot_remoteWorkspaceStatusDot",
  remoteWorkspaceStatus: "SidebarRoot_remoteWorkspaceStatus",
  remoteWorkspaceItem: "SidebarRoot_remoteWorkspaceItem",
  remoteWorkspaceMain: "SidebarRoot_remoteWorkspaceMain",
  remoteWorkspaceText: "SidebarRoot_remoteWorkspaceText",
  remoteWorkspacePath: "SidebarRoot_remoteWorkspacePath",
  remoteWorkspaceHost: "SidebarRoot_remoteWorkspaceHost",
  remoteWorkspaceTarget: "SidebarRoot_remoteWorkspaceTarget",
  remoteWorkspaceSessionCount: "SidebarRoot_remoteWorkspaceSessionCount",
  remoteWorkspaceRemove: "SidebarRoot_remoteWorkspaceRemove",
  remoteWorkspaceActions: "SidebarRoot_remoteWorkspaceActions",
  remoteWorkspaceAction: "SidebarRoot_remoteWorkspaceAction",
  remoteWorkspaceMenuAnchor: "SidebarRoot_remoteWorkspaceMenuAnchor",
  remoteWorkspaceMenu: "SidebarRoot_remoteWorkspaceMenu",
  remoteWorkspaceMenuItem: "SidebarRoot_remoteWorkspaceMenuItem",
  remotePickerOverlay: "SidebarRoot_remotePickerOverlay",
  remotePickerDialog: "SidebarRoot_remotePickerDialog",
  remotePickerHeader: "SidebarRoot_remotePickerHeader",
  remotePickerTitle: "SidebarRoot_remotePickerTitle",
  remotePickerSub: "SidebarRoot_remotePickerSub",
  remotePickerSelectConnection: "SidebarRoot_remotePickerSelectConnection",
  remotePickerToolbar: "SidebarRoot_remotePickerToolbar",
  remotePickerPath: "SidebarRoot_remotePickerPath",
  remotePickerTool: "SidebarRoot_remotePickerTool",
  remotePickerList: "SidebarRoot_remotePickerList",
  remotePickerRow: "SidebarRoot_remotePickerRow",
  remotePickerFile: "SidebarRoot_remotePickerFile",
  remotePickerGlyph: "SidebarRoot_remotePickerGlyph",
  remotePickerEmpty: "SidebarRoot_remotePickerEmpty",
  remotePickerError: "SidebarRoot_remotePickerError",
  remotePickerCreateRow: "SidebarRoot_remotePickerCreateRow",
  remotePickerCreateInput: "SidebarRoot_remotePickerCreateInput",
  remotePickerCreate: "SidebarRoot_remotePickerCreate",
  remotePickerFooter: "SidebarRoot_remotePickerFooter",
  remotePickerHint: "SidebarRoot_remotePickerHint",
  remotePickerCancel: "SidebarRoot_remotePickerCancel",
  remotePickerSelect: "SidebarRoot_remotePickerSelect"
};

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/SidebarRoot.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var COLLAPSE_SETTLE_MS = 150;
var EMPTY_SESSION_STORE = {
  getSnapshot: () => ({ sessionId: void 0 }),
  subscribe: () => () => {
  }
};
function FileTreeNode({ entry, sessionId, depth, t }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [children, setChildren] = (0, import_react.useState)(void 0);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(void 0);
  const directory = entry.type === "directory";
  const toggle = () => {
    if (!directory) return;
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
    if (children !== void 0 || loading) return;
    setLoading(true);
    setError(void 0);
    fetch(`/telework/files?session=${encodeURIComponent(sessionId)}&path=${encodeURIComponent(entry.path)}`, { cache: "no-store" }).then(async (response) => {
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? `HTTP ${response.status}`);
      setChildren(body.entries ?? []);
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    }).finally(() => {
      setLoading(false);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        type: "button",
        className: SidebarRoot_default.fileRow,
        style: { paddingLeft: 8 + depth * 12 },
        onClick: toggle,
        disabled: !directory,
        "aria-expanded": directory ? open : void 0,
        title: entry.path,
        children: [
          directory ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { className: clsx_default(SidebarRoot_default.fileArrow, open && SidebarRoot_default.fileArrowOpen), width: 12, height: 12, viewBox: "0 0 12 12", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4 2l5 4-5 4z", fill: "currentColor" }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.fileArrow, "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.fileIcon, "aria-hidden": "true", children: directory ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M1.5 4A1.5 1.5 0 0 1 3 2.5h3.1l1.2 1.5H13A1.5 1.5 0 0 1 14.5 5.5v6A1.5 1.5 0 0 1 13 13H3a1.5 1.5 0 0 1-1.5-1.5V4Z" }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.2, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.5 2.5h5l4 4v7h-9v-11Z", strokeLinejoin: "round" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8.5 2.5v4h4", strokeLinejoin: "round" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.fileName, children: entry.name })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.fileHint, style: { paddingLeft: 20 + depth * 12 }, children: t("files.loading") }),
      error !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.fileError, style: { paddingLeft: 20 + depth * 12 }, children: error }),
      (children ?? []).map((child) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileTreeNode, { entry: child, sessionId, depth: depth + 1, t }, child.path)),
      children !== void 0 && children.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.fileHint, style: { paddingLeft: 20 + depth * 12 }, children: t("files.emptyFolder") })
    ] })
  ] });
}
function WorkspaceFiles({ currentSession = EMPTY_SESSION_STORE, t }) {
  const store = currentSession;
  const sessionId = (0, import_react.useSyncExternalStore)(
    store.subscribe,
    () => store.getSnapshot().sessionId
  );
  const [revision, setRevision] = (0, import_react.useState)(0);
  const [height, setHeight] = (0, import_react.useState)(() => {
    try {
      const stored = Number(localStorage.getItem("dsh-telework.files.height"));
      return Number.isFinite(stored) && stored >= 96 ? stored : null;
    } catch {
      return null;
    }
  });
  const heightRef = (0, import_react.useRef)(height);
  const paneRef = (0, import_react.useRef)(null);
  const dragRef = (0, import_react.useRef)(null);
  const [state, setState] = (0, import_react.useState)({ phase: sessionId === void 0 ? "no-session" : "loading", entries: [] });
  (0, import_react.useEffect)(() => {
    if (sessionId === void 0) {
      setState({ phase: "no-session", entries: [] });
      return;
    }
    const controller = new AbortController();
    setState((previous) => ({ ...previous, phase: "loading", error: void 0 }));
    fetch(`/telework/files?session=${encodeURIComponent(sessionId)}`, { signal: controller.signal, cache: "no-store" }).then(async (response) => {
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? `HTTP ${response.status}`);
      setState({ phase: "ready", entries: body.entries ?? [] });
    }).catch((caught) => {
      if (controller.signal.aborted) return;
      setState({ phase: "error", entries: [], error: caught instanceof Error ? caught.message : String(caught) });
    });
    return () => controller.abort();
  }, [sessionId, revision]);
  const applyHeight = (next) => {
    heightRef.current = next;
    setHeight(next);
  };
  const persistHeight = () => {
    try {
      const value = heightRef.current;
      if (value !== null) localStorage.setItem("dsh-telework.files.height", String(value));
    } catch {
    }
  };
  const maxHeight = () => {
    const parent = paneRef.current?.parentElement;
    if (parent === null || parent === void 0) return 600;
    return Math.max(128, parent.getBoundingClientRect().height - 96);
  };
  const onResizeStart = (event) => {
    const rect = paneRef.current?.getBoundingClientRect();
    if (rect === void 0) return;
    event.preventDefault();
    dragRef.current = { startY: event.clientY, startHeight: rect.height };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onResizeMove = (event) => {
    const drag = dragRef.current;
    if (drag === null) return;
    const next = Math.min(maxHeight(), Math.max(96, drag.startHeight + drag.startY - event.clientY));
    applyHeight(Math.round(next));
  };
  const onResizeEnd = (event) => {
    if (dragRef.current === null) return;
    dragRef.current = null;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
    }
    persistHeight();
  };
  const onResizeKey = (event) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    const base = heightRef.current ?? paneRef.current?.getBoundingClientRect().height ?? 200;
    const next = Math.min(maxHeight(), Math.max(96, base + (event.key === "ArrowUp" ? 16 : -16)));
    applyHeight(Math.round(next));
    persistHeight();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "section",
    {
      ref: paneRef,
      className: SidebarRoot_default.filesPane,
      style: height === null ? void 0 : { flex: `0 0 ${height}px` },
      "aria-label": t("files.label"),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            className: SidebarRoot_default.filesSplit,
            role: "separator",
            "aria-orientation": "horizontal",
            "aria-label": t("files.resize"),
            "aria-valuemin": 96,
            "aria-valuenow": height ?? void 0,
            tabIndex: 0,
            onPointerDown: onResizeStart,
            onPointerMove: onResizeMove,
            onPointerUp: onResizeEnd,
            onPointerCancel: onResizeEnd,
            onKeyDown: onResizeKey
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: SidebarRoot_default.filesHeader, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.filesTitle, children: t("files.label") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: SidebarRoot_default.filesRefresh,
              "aria-label": t("files.refresh"),
              title: t("files.refresh"),
              onClick: () => {
                setRevision((value) => value + 1);
              },
              disabled: sessionId === void 0,
              children: "\u21BB"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.filesBody, children: [
          state.phase === "no-session" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.fileHint, children: t("files.noSession") }),
          state.phase === "loading" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.fileHint, children: t("files.loading") }),
          state.phase === "error" && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.fileError, children: state.error }),
          state.phase === "ready" && state.entries.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.fileHint, children: t("files.empty") }),
          state.phase === "ready" && state.entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileTreeNode, { entry, sessionId, depth: 0, t }, entry.path))
        ] })
      ]
    }
  );
}
function ensureRemoteStore() {
  if (window.__DSH_TELEWORK_REMOTE__ !== void 0) return window.__DSH_TELEWORK_REMOTE__;
  const listeners = /* @__PURE__ */ new Set();
  let connections = [];
  let workspaces = readStoredWorkspaces();
  const emit = () => {
    for (const listener of listeners) listener();
  };
  const store = {
    get: () => connections,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    add: (input) => {
      const existing = connections.find((item) => item.host === input.host && item.username === input.username && item.port === input.port);
      if (existing !== void 0) {
        const id = input.id ?? existing.id;
        const status = input.status ?? existing.status;
        if (existing.status !== status || existing.id !== id) {
          connections = connections.map((item) => item.id === existing.id ? { ...item, id, status } : item);
          emit();
          return { ...existing, id, status };
        }
        return existing;
      }
      const connection = {
        id: input.id ?? `remote-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        host: input.host,
        username: input.username,
        port: input.port,
        status: input.status ?? "connecting",
        at: Date.now()
      };
      connections = [...connections, connection];
      emit();
      return connection;
    },
    update: (id, patch) => {
      connections = connections.map((item) => item.id === id ? { ...item, ...patch } : item);
      emit();
    },
    remove: (id) => {
      connections = connections.filter((item) => item.id !== id);
      const persisted = readStoredWorkspaces();
      if (persisted.length > 0) workspaces = persisted;
      emit();
    },
    getWorkspaces: () => workspaces,
    addWorkspace: (connectionId, path) => {
      const existing = workspaces.find((item) => item.connectionId === connectionId && item.path === path);
      if (existing !== void 0) return existing;
      const connection = connections.find((item) => item.id === connectionId);
      const workspace = {
        id: `workspace-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        connectionId,
        path,
        at: Date.now(),
        host: connection?.host,
        username: connection?.username,
        port: connection?.port
      };
      workspaces = [...workspaces, workspace];
      writeStoredWorkspaces(workspaces);
      emit();
      return workspace;
    },
    removeWorkspace: (id) => {
      workspaces = workspaces.filter((item) => item.id !== id);
      writeStoredWorkspaces(workspaces);
      emit();
    },
    relinkWorkspaces: () => {
      const active = connections.filter((item) => item.status === "connected");
      let changed = false;
      workspaces = workspaces.map((workspace) => {
        if (active.some((item) => item.id === workspace.connectionId)) return workspace;
        const match = active.find((item) => item.host === workspace.host && item.username === workspace.username && (workspace.port === void 0 || workspace.port === "" || String(item.port) === String(workspace.port)));
        if (match === void 0) return workspace;
        changed = true;
        return { ...workspace, connectionId: match.id, port: workspace.port ?? match.port };
      });
      if (!changed) return;
      writeStoredWorkspaces(workspaces);
      emit();
    },
    addSession: (workspaceId, sessionId) => {
      let changed = false;
      workspaces = workspaces.map((workspace) => {
        if (workspace.id !== workspaceId) return workspace;
        const sessions = workspace.sessions ?? [];
        if (sessions.includes(sessionId)) return workspace;
        changed = true;
        return { ...workspace, sessions: [...sessions, sessionId] };
      });
      if (!changed) return;
      writeStoredWorkspaces(workspaces);
      emit();
    }
  };
  window.__DSH_TELEWORK_REMOTE__ = store;
  return store;
}
var REMOTE_HISTORY_KEY = "dsh-telework.remote.history";
var REMOTE_PASSWORDS_KEY = "dsh-telework.remote.passwords";
var REMOTE_WORKSPACES_KEY = "dsh-telework.remote.workspaces";
function remoteHistoryKey(entry) {
  return `${entry.username}@${entry.host}:${entry.port}`;
}
function readRemoteHistory() {
  try {
    const raw = localStorage.getItem(REMOTE_HISTORY_KEY);
    if (raw === null) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) => typeof entry === "object" && entry !== null && typeof entry.host === "string" && typeof entry.username === "string" && typeof entry.port === "string" && typeof entry.at === "number").slice(0, 20);
  } catch {
    return [];
  }
}
function writeRemoteHistory(entries) {
  try {
    localStorage.setItem(REMOTE_HISTORY_KEY, JSON.stringify(entries));
  } catch {
  }
}
function readRemotePasswords() {
  try {
    const parsed = JSON.parse(localStorage.getItem(REMOTE_PASSWORDS_KEY) ?? "{}");
    if (typeof parsed !== "object" || parsed === null) return {};
    const result = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === "string") result[key] = value;
    }
    return result;
  } catch {
    return {};
  }
}
function writeRemotePasswords(passwords) {
  try {
    localStorage.setItem(REMOTE_PASSWORDS_KEY, JSON.stringify(passwords));
  } catch {
  }
}
function saveRemotePassword(key, password) {
  const passwords = readRemotePasswords();
  if (password === null || password === "") delete passwords[key];
  else passwords[key] = password;
  writeRemotePasswords(passwords);
}
function readStoredWorkspaces() {
  try {
    const parsed = JSON.parse(localStorage.getItem(REMOTE_WORKSPACES_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) => typeof entry === "object" && entry !== null && typeof entry.id === "string" && typeof entry.connectionId === "string" && typeof entry.path === "string" && typeof entry.at === "number");
  } catch {
    return [];
  }
}
function writeStoredWorkspaces(workspaces) {
  try {
    localStorage.setItem(REMOTE_WORKSPACES_KEY, JSON.stringify(workspaces));
  } catch {
  }
}
function parseSshCommand(input) {
  const result = { host: "", username: "", port: "" };
  const tokens = input.trim().split(/\s+/).filter(Boolean);
  if (tokens[0] === "ssh") tokens.shift();
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token === "-p" || token === "-P") {
      result.port = tokens[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (token === "-l") {
      result.username = tokens[index + 1] ?? "";
      index += 1;
      continue;
    }
    if (token.startsWith("-")) continue;
    const at = token.lastIndexOf("@");
    if (at > 0) {
      result.username = token.slice(0, at);
      result.host = token.slice(at + 1);
      continue;
    }
    if (result.host === "") result.host = token;
  }
  return result;
}
function RemoteConnectionPanel({ t, onConnectionChange, onNewSession }) {
  const remoteStore = (0, import_react.useMemo)(ensureRemoteStore, []);
  const connections = (0, import_react.useSyncExternalStore)(remoteStore.subscribe, remoteStore.get);
  const workspaces = (0, import_react.useSyncExternalStore)(remoteStore.subscribe, remoteStore.getWorkspaces);
  const [command, setCommand] = (0, import_react.useState)("");
  const [host, setHost] = (0, import_react.useState)("");
  const [username, setUsername] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [port, setPort] = (0, import_react.useState)("22");
  const [rememberPassword, setRememberPassword] = (0, import_react.useState)(false);
  const [status, setStatus] = (0, import_react.useState)(null);
  const [statusTone, setStatusTone] = (0, import_react.useState)("info");
  const [connecting, setConnecting] = (0, import_react.useState)(false);
  const [history, setHistory] = (0, import_react.useState)(() => readRemoteHistory());
  const parseCommand = () => {
    const parsed = parseSshCommand(command);
    if (parsed.host === "") {
      setStatus(t("remote.invalid"));
      setStatusTone("error");
      return;
    }
    setHost(parsed.host);
    if (parsed.username !== "") setUsername(parsed.username);
    if (parsed.port !== "") setPort(parsed.port);
    setStatus(null);
  };
  const rememberConnection = (entry) => {
    const next = [entry, ...history.filter((item) => !(item.host === entry.host && item.username === entry.username && item.port === entry.port))].slice(0, 20);
    setHistory(next);
    writeRemoteHistory(next);
  };
  const connect = async () => {
    if (connecting) return;
    const nextHost = host.trim();
    const nextUsername = username.trim();
    if (nextHost === "" || nextUsername === "") {
      setStatus(t("remote.required"));
      setStatusTone("error");
      return;
    }
    const entry = {
      host: nextHost,
      username: nextUsername,
      port: port.trim() === "" ? "22" : port.trim(),
      at: Date.now(),
      remember: rememberPassword
    };
    const key = remoteHistoryKey(entry);
    setConnecting(true);
    setStatus(t("remote.connecting"));
    setStatusTone("info");
    try {
      const response = await fetch("/telework/remote/connect", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          host: entry.host,
          port: Number(entry.port),
          username: entry.username,
          password
        })
      });
      const text = await response.text();
      let body = {};
      if (text !== "") {
        try {
          body = JSON.parse(text);
        } catch {
          throw new Error(`SSH endpoint returned an unexpected response (HTTP ${response.status})`);
        }
      }
      if (!response.ok || typeof body.id !== "string") {
        throw new Error(body.error ?? (text === "" ? `SSH connection failed (HTTP ${response.status})` : text.slice(0, 300)));
      }
      rememberConnection(entry);
      saveRemotePassword(key, rememberPassword ? password : null);
      setPassword("");
      onConnectionChange({
        id: body.id,
        host: body.host ?? entry.host,
        username: body.username ?? entry.username,
        port: String(body.port ?? entry.port)
      });
      setStatus(t("remote.connectSuccess"));
      setStatusTone("success");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error));
      setStatusTone("error");
    } finally {
      setConnecting(false);
    }
  };
  const useEntry = (entry) => {
    setHost(entry.host);
    setUsername(entry.username);
    setPort(entry.port);
    setRememberPassword(entry.remember === true);
    setPassword(entry.remember === true ? readRemotePasswords()[remoteHistoryKey(entry)] ?? "" : "");
    setStatus(null);
  };
  const removeEntry = (entry) => {
    const key = remoteHistoryKey(entry);
    saveRemotePassword(key, null);
    const next = history.filter((item) => remoteHistoryKey(item) !== key);
    setHistory(next);
    writeRemoteHistory(next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteForm, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.remoteSectionTitle, children: t("remote.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: SidebarRoot_default.remoteField, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteLabel, children: t("remote.command") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteCommandRow, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              className: SidebarRoot_default.remoteInput,
              value: command,
              placeholder: t("remote.commandPlaceholder"),
              spellCheck: false,
              autoComplete: "off",
              onChange: (event) => {
                setCommand(event.target.value);
                setStatus(null);
              },
              onKeyDown: (event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  parseCommand();
                }
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: SidebarRoot_default.remoteParseButton, onClick: parseCommand, children: t("remote.parse") })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteRow, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: clsx_default(SidebarRoot_default.remoteField, SidebarRoot_default.remoteFieldGrow), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteLabel, children: t("remote.host") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              className: SidebarRoot_default.remoteInput,
              value: host,
              placeholder: t("remote.hostPlaceholder"),
              spellCheck: false,
              autoComplete: "off",
              onChange: (event) => {
                setHost(event.target.value);
                setStatus(null);
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: clsx_default(SidebarRoot_default.remoteField, SidebarRoot_default.remoteFieldPort), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteLabel, children: t("remote.port") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              className: SidebarRoot_default.remoteInput,
              value: port,
              inputMode: "numeric",
              placeholder: "22",
              autoComplete: "off",
              onChange: (event) => {
                setPort(event.target.value);
                setStatus(null);
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: SidebarRoot_default.remoteField, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteLabel, children: t("remote.username") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            className: SidebarRoot_default.remoteInput,
            value: username,
            placeholder: t("remote.usernamePlaceholder"),
            spellCheck: false,
            autoComplete: "off",
            onChange: (event) => {
              setUsername(event.target.value);
              setStatus(null);
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: SidebarRoot_default.remoteField, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteLabel, children: [
          t("remote.password"),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remotePasswordHint, children: rememberPassword ? t("remote.passwordSaved") : t("remote.passwordNotSaved") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            className: SidebarRoot_default.remoteInput,
            type: "password",
            value: password,
            placeholder: t("remote.passwordPlaceholder"),
            autoComplete: "new-password",
            onChange: (event) => {
              setPassword(event.target.value);
              setStatus(null);
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: SidebarRoot_default.remoteRemember, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            type: "checkbox",
            checked: rememberPassword,
            onChange: (event) => {
              setRememberPassword(event.target.checked);
              setStatus(null);
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("remote.rememberPassword") })
      ] }),
      status !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "p",
        {
          className: clsx_default(
            SidebarRoot_default.remoteStatus,
            statusTone === "success" && SidebarRoot_default.remoteStatusSuccess,
            statusTone === "error" && SidebarRoot_default.remoteStatusError
          ),
          role: "status",
          children: status
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: SidebarRoot_default.remoteConnectButton, onClick: connect, disabled: connecting, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 2.5h10v11H3v-11Z", stroke: "currentColor", strokeWidth: "1.2" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 5.5h4M6 8h4M6 10.5h2", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" })
        ] }),
        connecting ? t("remote.connecting") : t("remote.connect")
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteHistory, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteHistoryHeader, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("remote.history") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteHistoryCount, children: history.length })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteHistoryList, children: [
        history.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: SidebarRoot_default.remoteEmpty, children: t("remote.empty") }),
        history.map((entry) => {
          const key = remoteHistoryKey(entry);
          const connected = connections.some((item) => item.status === "connected" && remoteHistoryKey(item) === key);
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: clsx_default(SidebarRoot_default.remoteHistoryRow, connected && SidebarRoot_default.remoteHistoryRowConnected), children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: SidebarRoot_default.remoteHistoryMain,
                onClick: () => {
                  useEntry(entry);
                },
                title: `${entry.username}@${entry.host}:${entry.port}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "rect",
                      {
                        className: clsx_default(SidebarRoot_default.remoteHistoryScreen, connected && SidebarRoot_default.remoteHistoryScreenConnected),
                        x: "2.5",
                        y: "3",
                        width: "11",
                        height: "7",
                        rx: "1.2",
                        stroke: "currentColor",
                        strokeWidth: "1.2"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 13h4M8 10v3", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteHistoryText, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteHistoryHost, children: [
                      entry.username,
                      "@",
                      entry.host
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteHistoryMeta, children: [
                      ":",
                      entry.port
                    ] }),
                    connected && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteConnectedBadge, children: t("remote.connected") })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                className: SidebarRoot_default.remoteDelete,
                "aria-label": t("remote.remove"),
                title: t("remote.remove"),
                onClick: () => {
                  removeEntry(entry);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.5 4.5h9M6.5 4.5v-1h3v1M5 4.5l.5 8h5l.5-8", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) })
              }
            )
          ] }, key);
        })
      ] })
    ] }),
    workspaces.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.remoteWorkspacesPanel, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      RemoteWorkspaceList,
      {
        workspaces,
        connections,
        t,
        onOpen: () => {
          setStatus(t("remote.workspaceOpenSoon"));
          setStatusTone("info");
        },
        onNewSession,
        onRemove: (id) => {
          remoteStore.removeWorkspace(id);
        }
      }
    ) })
  ] });
}
function normalizeRemotePath(path) {
  const trimmed = path.trim();
  if (trimmed === "") return "/";
  const withRoot = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withRoot.replace(/\/+$/, "") || "/";
}
function parentRemotePath(path) {
  if (path === "/") return "/";
  const index = path.lastIndexOf("/");
  return index <= 0 ? "/" : path.slice(0, index);
}
function childRemotePath(path, name) {
  return path === "/" ? `/${name}` : `${path}/${name}`;
}
function defaultRemotePath(connection) {
  return connection !== void 0 && connection.username !== "root" ? "/home" : "/";
}
function remoteWorkspaceName(path) {
  const parts = path.split("/").filter(Boolean);
  return parts.length === 0 ? "/" : parts[parts.length - 1];
}
function RemoteWorkspaceRow({ workspace, connection, target, online, t, onOpen, onNewSession, onRemove }) {
  const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteWorkspaceItem, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        type: "button",
        className: SidebarRoot_default.remoteWorkspaceMain,
        title: workspace.path,
        onClick: () => {
          onOpen(workspace);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M1.5 4A1.5 1.5 0 0 1 3 2.5h3.1l1.2 1.5H13A1.5 1.5 0 0 1 14.5 5.5v6A1.5 1.5 0 0 1 13 13H3a1.5 1.5 0 0 1-1.5-1.5V4Z", stroke: "currentColor", strokeWidth: "1.2", strokeLinejoin: "round" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteWorkspaceText, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteWorkspacePath, children: remoteWorkspaceName(workspace.path) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteWorkspaceHost, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.remoteWorkspaceStatus, "data-online": online || void 0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteWorkspaceStatusDot, "aria-hidden": "true" }),
                online ? t("remote.connected") : t("remote.workspaceOfflineShort")
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteWorkspaceTarget, children: target }),
              workspace.sessions !== void 0 && workspace.sessions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remoteWorkspaceSessionCount, children: t("remote.sessionCount").replace("{n}", String(workspace.sessions.length)) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteWorkspaceActions, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_dsh_client_ui_primitives2.Menu,
        {
          open: menuOpen,
          onClose: closeMenu,
          portal: true,
          className: SidebarRoot_default.remoteWorkspaceMenuAnchor,
          listClassName: SidebarRoot_default.remoteWorkspaceMenu,
          anchor: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("remote.workspaceMore"), side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: SidebarRoot_default.remoteWorkspaceAction,
              "aria-label": t("remote.workspaceMore"),
              "aria-haspopup": "menu",
              "aria-expanded": menuOpen,
              onClick: () => {
                setMenuOpen((value) => !value);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconEllipsisOutlineRegular, { size: 14 })
            }
          ) }),
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              type: "button",
              className: SidebarRoot_default.remoteWorkspaceMenuItem,
              onClick: () => {
                closeMenu();
                onRemove(workspace.id);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: 14, height: 14, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.5 4.5h9M6.5 4.5v-1h3v1M5 4.5l.5 8h5l.5-8", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
                t("remote.workspaceRemove")
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("remote.newSession"), side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          className: SidebarRoot_default.remoteWorkspaceAction,
          "aria-label": t("remote.newSession"),
          onClick: () => {
            onNewSession(workspace);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconNewChatOutlineRegular, { size: 14 })
        }
      ) })
    ] })
  ] });
}
function RemoteWorkspaceList({ workspaces, connections, t, onOpen, onNewSession, onRemove }) {
  if (workspaces.length === 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remoteWorkspaceList, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.remoteWorkspaceHeader, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("remote.workspacesTitle") }) }),
    workspaces.map((workspace) => {
      const connection = connections.find((item) => item.id === workspace.connectionId);
      const online = connection !== void 0 && connection.status === "connected";
      const target = connection !== void 0 ? `${connection.username}@${connection.host}` : workspace.username !== void 0 && workspace.host !== void 0 ? `${workspace.username}@${workspace.host}` : t("remote.workspaceOffline");
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        RemoteWorkspaceRow,
        {
          workspace,
          connection,
          target,
          online,
          t,
          onOpen,
          onNewSession,
          onRemove
        },
        workspace.id
      );
    })
  ] });
}
function RemoteWorkspacePicker({ connections, t, onClose, onSelect }) {
  const connected = connections.filter((connection2) => connection2.status === "connected");
  const [connectionId, setConnectionId] = (0, import_react.useState)(connected[0]?.id ?? connections[0]?.id ?? "");
  const connection = connections.find((item) => item.id === connectionId) ?? connections[0];
  const initialPath = defaultRemotePath(connection);
  const [path, setPath] = (0, import_react.useState)(initialPath);
  const [pathInput, setPathInput] = (0, import_react.useState)(initialPath);
  const [entries, setEntries] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
  const [creating, setCreating] = (0, import_react.useState)(false);
  const [newName, setNewName] = (0, import_react.useState)("");
  const [createError, setCreateError] = (0, import_react.useState)(null);
  const [revision, setRevision] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);
  (0, import_react.useEffect)(() => {
    if (connection === void 0) {
      setEntries([]);
      return;
    }
    const controller = new AbortController();
    setEntries([]);
    setLoading(true);
    setError(null);
    fetch(`/telework/remote/list?connection=${encodeURIComponent(connection.id)}&path=${encodeURIComponent(path)}`, {
      signal: controller.signal,
      cache: "no-store"
    }).then(async (response) => {
      const body = await response.json();
      if (!response.ok) throw new Error(body.error ?? `HTTP ${response.status}`);
      setEntries(Array.isArray(body.entries) ? body.entries : []);
    }).catch((caught) => {
      if (controller.signal.aborted) return;
      setEntries([]);
      setError(caught instanceof Error ? caught.message : String(caught));
    }).finally(() => {
      if (!controller.signal.aborted) setLoading(false);
    });
    return () => {
      controller.abort();
    };
  }, [connection?.id, path, revision]);
  const navigate = (next) => {
    const normalized = normalizeRemotePath(next);
    setPath(normalized);
    setPathInput(normalized);
    setCreating(false);
    setCreateError(null);
  };
  const createFolder = async () => {
    if (connection === void 0) return;
    const name = newName.trim();
    if (name === "") {
      setCreateError(t("remote.pickFolderNameRequired"));
      return;
    }
    try {
      const response = await fetch("/telework/remote/mkdir", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ connection: connection.id, path, name })
      });
      const text = await response.text();
      let body = {};
      if (text !== "") {
        try {
          body = JSON.parse(text);
        } catch {
          throw new Error(`Remote folder endpoint returned an unexpected response (HTTP ${response.status})`);
        }
      }
      if (!response.ok) throw new Error(body.error ?? `Cannot create folder (HTTP ${response.status})`);
      setCreating(false);
      setNewName("");
      setCreateError(null);
      setRevision((value) => value + 1);
    } catch (caught) {
      setCreateError(caught instanceof Error ? caught.message : String(caught));
    }
  };
  if (connection === void 0) return null;
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: SidebarRoot_default.remotePickerOverlay,
        onMouseDown: (event) => {
          if (event.target === event.currentTarget) onClose();
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePickerDialog, role: "dialog", "aria-modal": "true", "aria-label": t("remote.pickTitle"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePickerHeader, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.remotePickerTitle, children: t("remote.pickTitle") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePickerSub, children: [
                connection.username,
                "@",
                connection.host,
                ":",
                connection.port
              ] })
            ] }),
            connected.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "select",
              {
                className: SidebarRoot_default.remotePickerSelectConnection,
                value: connectionId,
                "aria-label": t("remote.pickConnection"),
                onChange: (event) => {
                  const next = connected.find((item) => item.id === event.target.value);
                  if (next === void 0) return;
                  setConnectionId(next.id);
                  navigate(defaultRemotePath(next));
                },
                children: connected.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("option", { value: item.id, children: [
                  item.username,
                  "@",
                  item.host
                ] }, item.id))
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePickerToolbar, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: SidebarRoot_default.remotePickerTool, disabled: path === "/", onClick: () => {
              navigate(parentRemotePath(path));
            }, children: t("remote.pickUp") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: clsx_default(SidebarRoot_default.remoteInput, SidebarRoot_default.remotePickerPath),
                value: pathInput,
                spellCheck: false,
                autoComplete: "off",
                onChange: (event) => {
                  setPathInput(event.target.value);
                },
                onKeyDown: (event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    navigate(pathInput);
                  }
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: SidebarRoot_default.remotePickerTool, onClick: () => {
              navigate(pathInput);
            }, children: t("remote.pickGo") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                className: SidebarRoot_default.remotePickerTool,
                onClick: () => {
                  setCreating(true);
                  setNewName("");
                  setCreateError(null);
                },
                children: t("remote.pickNewFolder")
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePickerList, children: [
            creating && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePickerCreateRow, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                {
                  className: clsx_default(SidebarRoot_default.remoteInput, SidebarRoot_default.remotePickerCreateInput),
                  value: newName,
                  autoFocus: true,
                  spellCheck: false,
                  autoComplete: "off",
                  placeholder: t("remote.pickFolderName"),
                  onChange: (event) => {
                    setNewName(event.target.value);
                    setCreateError(null);
                  },
                  onKeyDown: (event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      void createFolder();
                    }
                    if (event.key === "Escape") {
                      event.preventDefault();
                      setCreating(false);
                      setCreateError(null);
                    }
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: SidebarRoot_default.remotePickerCreate, onClick: () => {
                void createFolder();
              }, children: t("remote.pickCreate") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  className: SidebarRoot_default.remotePickerTool,
                  onClick: () => {
                    setCreating(false);
                    setCreateError(null);
                  },
                  children: t("remote.pickCancel")
                }
              )
            ] }),
            createError !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: SidebarRoot_default.remotePickerError, children: createError }),
            path !== "/" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", className: SidebarRoot_default.remotePickerRow, onClick: () => {
              navigate(parentRemotePath(path));
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remotePickerGlyph, children: "\u21B0" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: ".." })
            ] }),
            entries.length === 0 && !loading && error === null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: SidebarRoot_default.remotePickerEmpty, children: t("remote.pickEmpty") }),
            loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: SidebarRoot_default.remotePickerEmpty, children: t("remote.pickLoading") }),
            error !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: SidebarRoot_default.remotePickerError, children: error }),
            !loading && error === null && entries.map((entry) => entry.kind === "dir" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: SidebarRoot_default.remotePickerRow,
                onClick: () => {
                  navigate(childRemotePath(path, entry.name));
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { className: SidebarRoot_default.remotePickerGlyph, width: 16, height: 16, viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M1.5 4A1.5 1.5 0 0 1 3 2.5h3.1l1.2 1.5H13A1.5 1.5 0 0 1 14.5 5.5v6A1.5 1.5 0 0 1 13 13H3a1.5 1.5 0 0 1-1.5-1.5V4Z" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: entry.name })
                ]
              },
              entry.name
            ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: clsx_default(SidebarRoot_default.remotePickerRow, SidebarRoot_default.remotePickerFile), children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { className: SidebarRoot_default.remotePickerGlyph, width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.2, "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.5 2.5h5l4 4v7h-9v-11Z", strokeLinejoin: "round" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8.5 2.5v4h4", strokeLinejoin: "round" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: entry.name })
            ] }, entry.name))
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.remotePickerFooter, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.remotePickerHint, children: t("remote.pickSftp") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: SidebarRoot_default.remotePickerCancel, onClick: onClose, children: t("remote.pickCancel") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                className: SidebarRoot_default.remotePickerSelect,
                onClick: () => {
                  onSelect(connection.id, path);
                },
                children: t("remote.pickSelect")
              }
            )
          ] })
        ] })
      }
    ),
    document.body
  );
}
var SCROLLBAR_LINGER_MS = 2e3;
function localBuildVersion() {
  const version = process.env.DSH_CLIENT_VERSION;
  if (version === void 0) return void 0;
  const commit = process.env.DSH_CLIENT_COMMIT_HASH;
  return version + (commit === void 0 ? "" : `-${commit}`) + (process.env.DSH_CLIENT_GIT_DIRTY === "true" ? "-dirty" : "");
}
function officialEntry(id) {
  if (id === "plugins") return "plugin";
  return id === "schedules" ? "cron" : void 0;
}
function SidebarRoot({
  collapsed,
  width,
  drawer,
  startSession,
  toggleSidebar,
  selectPanel,
  setPinned,
  trackEntryClick,
  currentSession = EMPTY_SESSION_STORE,
  useRemoteAccess,
  usePanels,
  useEntryPins,
  useEntryActions,
  useShortcuts,
  usePanelInfo,
  t,
  renderSlot,
  renderFactorySlot
}) {
  const panels = usePanels((snapshot) => snapshot);
  const unpinned = useEntryPins((ids) => ids);
  const activePanelId = usePanelInfo((info) => info.activePanelId);
  const [remoteMode, setRemoteMode] = (0, import_react.useState)(false);
  const [remoteWorkspaceToast, setRemoteWorkspaceToast] = (0, import_react.useState)(null);
  const [remotePickerOpen, setRemotePickerOpen] = (0, import_react.useState)(false);
  const [workspaceHeader, setWorkspaceHeader] = (0, import_react.useState)(null);
  const remoteStore = (0, import_react.useMemo)(ensureRemoteStore, []);
  const remoteConnections = (0, import_react.useSyncExternalStore)(remoteStore.subscribe, remoteStore.get);
  const remoteWorkspaces = (0, import_react.useSyncExternalStore)(remoteStore.subscribe, remoteStore.getWorkspaces);
  const remoteConnected = remoteConnections.some((connection) => connection.status === "connected");
  const [pendingRemoteWorkspaceId, setPendingRemoteWorkspaceId] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    remoteStore.relinkWorkspaces();
  }, [remoteStore, remoteConnections, remoteWorkspaces]);
  (0, import_react.useEffect)(() => {
    if (pendingRemoteWorkspaceId === null) return;
    const timer = window.setTimeout(() => {
      const sessionId = currentSession.getSnapshot().sessionId;
      if (sessionId !== void 0) {
        remoteStore.addSession(pendingRemoteWorkspaceId, sessionId);
        setRemoteWorkspaceToast(t("remote.sessionCreated"));
      }
      setPendingRemoteWorkspaceId(null);
    }, 300);
    return () => {
      window.clearTimeout(timer);
    };
  }, [pendingRemoteWorkspaceId, currentSession, remoteStore, t]);
  const hasEntryActions = useEntryActions((registered) => registered);
  const shortcut = useShortcuts((rows) => rows.find((row) => row.id === "sidebar.left.toggle"));
  const newShortcut = useShortcuts((rows) => rows.find((row) => row.id === "session.new"));
  const canStartSession = useRemoteAccess("session/create");
  const toggleLabel = collapsed ? t("toggle.open") : t("toggle.collapse");
  const [settled, setSettled] = (0, import_react.useState)(collapsed);
  (0, import_react.useEffect)(() => {
    if (drawer || !collapsed) {
      setSettled(collapsed);
      return;
    }
    const timer = window.setTimeout(() => {
      setSettled(true);
    }, COLLAPSE_SETTLE_MS);
    return () => {
      window.clearTimeout(timer);
    };
  }, [collapsed, drawer]);
  const windowsTitlebar = document.documentElement.hasAttribute("data-windows-titlebar");
  const wide = drawer || (windowsTitlebar ? !collapsed : !collapsed || !settled);
  const [scrollHandoff] = (0, import_react.useState)(createScrollHandoff);
  const sectionHookContext = (0, import_react.useMemo)(
    () => ({ useSectionScroller: scrollHandoff.useSectionScroller }),
    [scrollHandoff]
  );
  const openNewSession = () => {
    trackEntryClick({ menu_name: "new_session", position: windowsTitlebar && collapsed ? "titlebar" : "sidebar" });
    startSession();
  };
  const captionTooltipSide = windowsTitlebar ? "bottom" : "right";
  const lastWideWidth = (0, import_react.useRef)(width);
  if (drawer || !collapsed) lastWideWidth.current = width;
  const animateRail = (0, import_react.useRef)(!collapsed);
  if (drawer || !collapsed) animateRail.current = !collapsed;
  const column = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const root = column.current;
    if (root === null) return;
    const find = () => {
      const next = root.querySelector("[data-sidebar-workspace-header]");
      setWorkspaceHeader((current) => current === next ? current : next);
    };
    find();
    const observer = new MutationObserver(find);
    observer.observe(root, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  const sidebarFocus = (0, import_react.useRef)(null);
  (0, import_dsh_client_ui_primitives2.useModalLayer)(column, drawer && !collapsed, toggleSidebar);
  (0, import_react.useLayoutEffect)(() => {
    if (!collapsed) return;
    const controlled = sidebarFocus.current?.getAttribute("aria-controls")?.split(/\s+/) ?? [];
    const ownsMenuFocus = controlled.some((id) => document.getElementById(id)?.contains(document.activeElement));
    if (sidebarFocus.current !== document.activeElement && !ownsMenuFocus) return;
    const opener = drawer ? column.current?.ownerDocument.querySelector("[data-sidebar-opener]") : column.current?.querySelector("[data-sidebar-toggle]");
    if (opener != null && !(0, import_dsh_client_ui_primitives2.isBehindModal)(opener)) (0, import_dsh_client_ui_primitives2.focusWithoutRing)(opener, { preventScroll: true });
  }, [drawer, collapsed]);
  const [pointerInside, setPointerInside] = (0, import_react.useState)(false);
  const lingerTimer = (0, import_react.useRef)(void 0);
  const armLinger = () => {
    if (lingerTimer.current !== void 0) return;
    lingerTimer.current = window.setTimeout(() => {
      lingerTimer.current = void 0;
      setPointerInside(false);
    }, SCROLLBAR_LINGER_MS);
  };
  const cancelLinger = () => {
    window.clearTimeout(lingerTimer.current);
    lingerTimer.current = void 0;
  };
  (0, import_react.useEffect)(() => {
    if (!pointerInside) return;
    const onMove = (event) => {
      const rect = column.current?.getBoundingClientRect();
      if (rect === void 0) return;
      const inside = event.clientX >= rect.left && event.clientX < rect.right && event.clientY >= rect.top && event.clientY < rect.bottom;
      if (inside) cancelLinger();
      else armLinger();
    };
    document.addEventListener("pointermove", onMove);
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelLinger();
    };
  }, [pointerInside]);
  const buildVersion = localBuildVersion();
  const [copiedToast, setCopiedToast] = (0, import_react.useState)(null);
  const copyVersion = (version) => () => {
    void (0, import_dsh_client_ui_primitives2.writeClipboard)(version).then((ok) => {
      if (ok) setCopiedToast((seq) => (seq ?? 0) + 1);
    });
  };
  const darwinDesktop = (0, import_dsh_client_ui_primitives2.isDarwinDesktop)();
  (0, import_react.useEffect)(() => {
    const openRemote = () => {
      setRemoteMode(true);
      selectPanel(null);
      if (collapsed) toggleSidebar();
    };
    window.addEventListener("dsh-telework:open-remote", openRemote);
    return () => {
      window.removeEventListener("dsh-telework:open-remote", openRemote);
    };
  }, [collapsed, selectPanel, toggleSidebar]);
  const handleRemoteConnection = (summary) => {
    if (summary !== null) remoteStore.add({ ...summary, status: "connected" });
  };
  const startRemoteSession = (workspace) => {
    setPendingRemoteWorkspaceId(workspace.id);
    openNewSession();
  };
  const toggle = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: toggleLabel, shortcutKeys: shortcut?.keys, delayMs: 500, side: captionTooltipSide, portal: drawer, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      "data-sidebar-toggle": true,
      "data-modal-autofocus": drawer || void 0,
      type: "button",
      className: clsx_default(SidebarRoot_default.iconButton, SidebarRoot_default.toggle),
      "aria-label": toggleLabel,
      "aria-keyshortcuts": shortcut?.aria,
      onClick: () => {
        toggleSidebar();
      },
      children: [
        !wide && !windowsTitlebar && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.railMark, "aria-hidden": "true", children: renderSlot("sidebar.brand.mark", { size: 24 }, { fallback: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.FishLogo, { size: 24 }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconPanelLeftOutlineRegular, { className: SidebarRoot_default.panelIcon, size: wide || windowsTitlebar ? 16 : 18 }),
        !wide && renderSlot("sidebar.toggle.badge", {})
      ]
    }
  ) });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      ref: column,
      onFocusCapture: (event) => {
        sidebarFocus.current = event.target;
      },
      role: drawer ? "dialog" : void 0,
      "data-shortcut-modal": drawer ? "sidebar" : void 0,
      "aria-modal": drawer && !collapsed ? true : void 0,
      "aria-label": drawer ? t("navigation.label") : void 0,
      tabIndex: drawer ? -1 : void 0,
      className: clsx_default(
        SidebarRoot_default.root,
        !wide && SidebarRoot_default.collapsed,
        !wide && animateRail.current && SidebarRoot_default.railIn,
        !drawer && collapsed && wide && SidebarRoot_default.fading,
        !pointerInside && SidebarRoot_default.quietBars
      ),
      style: wide ? { width: !drawer && collapsed ? lastWideWidth.current : width } : void 0,
      onPointerEnter: () => {
        cancelLinger();
        setPointerInside(true);
      },
      onPointerLeave: () => {
        armLinger();
      },
      children: [
        darwinDesktop && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.topStrip, "data-window-drag": true, children: toggle }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.activityRail, role: "navigation", "aria-label": t("navigation.label"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("rail.workspaces"), delayMs: 500, side: "right", portal: drawer, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: clsx_default(SidebarRoot_default.railButton, !remoteMode && activePanelId === null && SidebarRoot_default.railActive),
              "aria-label": t("rail.workspaces"),
              "aria-current": !remoteMode && activePanelId === null ? "page" : void 0,
              onClick: () => {
                setRemoteMode(false);
                selectPanel(null);
                if (collapsed) toggleSidebar();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: 18, height: 18, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M2 4.5A1.5 1.5 0 0 1 3.5 3h3l1.2 1.5h5.8A1.5 1.5 0 0 1 15 6v5.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 11.5v-7Z", stroke: "currentColor", strokeWidth: "1.3", strokeLinejoin: "round", transform: "translate(-0.5 0)" }) })
            }
          ) }),
          panels.map((panel) => {
            const isRemotePanel = panel.id === "telework";
            const active = isRemotePanel ? remoteMode : !remoteMode && activePanelId === panel.id;
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: panel.label, delayMs: 500, side: "right", portal: drawer, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: clsx_default(SidebarRoot_default.railButton, active && SidebarRoot_default.railActive),
                "aria-label": panel.label,
                "aria-current": active ? "page" : void 0,
                onClick: () => {
                  if (isRemotePanel) {
                    setRemoteMode(true);
                    selectPanel(null);
                    if (collapsed) toggleSidebar();
                    return;
                  }
                  setRemoteMode(false);
                  const entry = officialEntry(panel.id);
                  if (entry !== void 0) trackEntryClick({ menu_name: entry, position: "sidebar" });
                  selectPanel(panel.id);
                },
                children: [
                  renderFactorySlot("sidebar.panel.icon", { id: panel.id, size: 18, active }),
                  isRemotePanel && remoteConnections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "span",
                    {
                      className: SidebarRoot_default.railRemoteBadge,
                      "data-status": remoteConnections.some((connection) => connection.status === "connected") ? "connected" : "connecting",
                      "aria-hidden": "true",
                      children: remoteConnections.length > 1 ? remoteConnections.length : ""
                    }
                  )
                ]
              }
            ) }, panel.id);
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.railGrow }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.railFoot, children: [
            renderSlot("sidebar.settings", { wide: false }),
            renderSlot("sidebar.footer.action", { wide: false })
          ] })
        ] }),
        !wide && windowsTitlebar && canStartSession && renderSlot("sidebar.session.action", { wide }, {
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("session.new.label"), shortcutKeys: newShortcut?.keys, delayMs: 500, side: captionTooltipSide, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: SidebarRoot_default.newSession,
              "aria-label": t("session.new.label"),
              "aria-keyshortcuts": newShortcut?.aria,
              onClick: openNewSession,
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.newSessionLabelMask, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.newSessionContent, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconNewChatOutlineRegular, { size: 16 }) }) })
            }
          ) })
        }),
        wide && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: clsx_default(SidebarRoot_default.panelColumn, remoteMode && SidebarRoot_default.panelColumnRemote), children: [
          remoteMode && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(RemoteConnectionPanel, { t, onConnectionChange: handleRemoteConnection, onNewSession: startRemoteSession }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.logoRow, "data-window-drag": true, children: wide && (() => {
            const identity = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.brandIdentity, "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.brandMark, children: renderSlot("sidebar.brand.mark", { size: 24 }, {
                fallback: buildVersion === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.FishLogo, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.copyVersion, "data-copy-version": true, onClick: copyVersion(buildVersion), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.FishLogo, { size: 24 }) })
              }) }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.brandName, children: renderSlot("sidebar.brand.name", {}, {
                fallback: buildVersion === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.fallbackBrandName, children: t("brand.localBuild") }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: clsx_default(SidebarRoot_default.localBuildBrand, SidebarRoot_default.copyVersion), "data-copy-version": true, onClick: copyVersion(buildVersion), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.localBuildTitle, children: t("brand.localBuild") }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.buildVersion, children: buildVersion })
                ] })
              }) })
            ] });
            return darwinDesktop || !canStartSession ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: clsx_default(SidebarRoot_default.brand, SidebarRoot_default.wide), children: identity }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                className: clsx_default(SidebarRoot_default.brand, SidebarRoot_default.wide),
                "aria-label": t("session.new.label"),
                "aria-keyshortcuts": newShortcut?.aria,
                onClick: (event) => {
                  if (event.target.closest("[data-copy-version]") !== null) return;
                  openNewSession();
                },
                children: identity
              }
            );
          })() }),
          canStartSession && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: SidebarRoot_default.newSessionRow, children: renderSlot("sidebar.session.action", { wide }, {
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("session.new.label"), shortcutKeys: newShortcut?.keys, delayMs: 500, side: captionTooltipSide, disabled: wide, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: SidebarRoot_default.newSession,
                "aria-label": t("session.new.label"),
                "aria-keyshortcuts": newShortcut?.aria,
                onClick: openNewSession,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.newSessionLabelMask, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: SidebarRoot_default.newSessionContent, children: [
                    wide ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconNewChatOutlineMedium, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconNewChatOutlineRegular, { size: windowsTitlebar ? 16 : 18 }),
                    wide && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: clsx_default(SidebarRoot_default.newSessionLabel, SidebarRoot_default.wide), children: t("session.new") })
                  ] }) }),
                  wide && newShortcut !== void 0 && newShortcut.keys.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.newSessionShortcut, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.ShortcutKeys, { keys: newShortcut.keys }) })
                ]
              }
            ) })
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.scrollRegion, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                ref: scrollHandoff.bindViewportRef,
                className: SidebarRoot_default.scrollArea,
                "data-sidebar-scrollport": wide ? "" : void 0,
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: SidebarRoot_default.regionArea, children: [
                  renderSlot("sidebar.workspaces", {
                    wide,
                    expandSidebar: () => {
                      if (collapsed) toggleSidebar();
                    }
                  }, { hookContext: sectionHookContext }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    RemoteWorkspaceList,
                    {
                      workspaces: remoteWorkspaces,
                      connections: remoteConnections,
                      t,
                      onOpen: () => {
                        setRemoteWorkspaceToast(t("remote.workspaceOpenSoon"));
                      },
                      onNewSession: startRemoteSession,
                      onRemove: (id) => {
                        remoteStore.removeWorkspace(id);
                      }
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: SidebarRoot_default.scrollFade, "aria-hidden": "true" })
          ] }),
          activePanelId === null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WorkspaceFiles, { currentSession, t }),
          copiedToast !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Toast, { tone: "success", text: t("version.copied"), onDone: () => {
            setCopiedToast(null);
          } }, copiedToast),
          remoteWorkspaceToast !== null && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_dsh_client_ui_primitives2.Toast,
            {
              tone: "success",
              text: remoteWorkspaceToast,
              onDone: () => {
                setRemoteWorkspaceToast(null);
              }
            },
            `remote-workspace-${remoteWorkspaceToast}`
          ),
          remotePickerOpen && remoteConnected && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            RemoteWorkspacePicker,
            {
              connections: remoteConnections,
              t,
              onClose: () => {
                setRemotePickerOpen(false);
              },
              onSelect: (connectionId, path) => {
                remoteStore.addWorkspace(connectionId, path);
                setRemotePickerOpen(false);
                setRemoteWorkspaceToast(`${t("remote.workspaceAdded")} ${path}`);
              }
            }
          )
        ] }),
        workspaceHeader !== null && remoteConnected && (0, import_react_dom.createPortal)(
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.Tooltip, { label: t("remote.addWorkspace"), side: "bottom", delayMs: 500, portal: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: SidebarRoot_default.remoteHeaderButton,
              "aria-label": t("remote.addWorkspace"),
              onClick: () => {
                setRemotePickerOpen(true);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "2.5", y: "3", width: "11", height: "7", rx: "1.2", stroke: "currentColor", strokeWidth: "1.2" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 13h4M8 10v3", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M11.5 1.5v4M9.5 3.5h4", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round" })
              ] })
            }
          ) }),
          workspaceHeader
        )
      ]
    }
  );
}

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/PanelIcon.tsx
function PanelIcon({ id, size, active, renderSlot }) {
  return renderSlot("sidebar.panellist", { size, active }, { only: id });
}

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/locales.ts
var zh = {
  "panels.unpinTooltip": "\u4ECE\u5DE6\u4FA7\u680F\u53D6\u6D88\u56FA\u5B9A",
  "panels.unpin": "\u4ECE\u4FA7\u8FB9\u680F\u53D6\u6D88\u56FA\u5B9A{name}",
  "session.new": "\u65B0\u4F1A\u8BDD",
  "session.new.label": "\u65B0\u5EFA\u4F1A\u8BDD",
  "toggle.open": "\u6253\u5F00\u4FA7\u8FB9\u680F",
  "toggle.collapse": "\u6536\u8D77\u4FA7\u8FB9\u680F",
  "panels.label": "\u5168\u5C40\u9762\u677F",
  "navigation.label": "\u5BFC\u822A",
  "panels.more": "\u66F4\u591A",
  "version.copied": "\u7248\u672C\u53F7\u590D\u5236\u6210\u529F",
  "rail.workspaces": "\u5DE5\u4F5C\u533A",
  "files.label": "\u6587\u4EF6",
  "files.refresh": "\u5237\u65B0\u6587\u4EF6",
  "files.loading": "\u52A0\u8F7D\u4E2D\u2026",
  "files.empty": "\u5DE5\u4F5C\u533A\u4E3A\u7A7A",
  "files.emptyFolder": "\u7A7A\u6587\u4EF6\u5939",
  "files.noSession": "\u6253\u5F00\u4E00\u4E2A\u4F1A\u8BDD\u4EE5\u67E5\u770B\u6587\u4EF6",
  "files.resize": "\u8C03\u6574\u6587\u4EF6\u9762\u677F\u9AD8\u5EA6",
  "remote.title": "\u8FDC\u7A0B\u8FDE\u63A5",
  "remote.command": "SSH \u547D\u4EE4",
  "remote.commandPlaceholder": "ssh user@host",
  "remote.parse": "\u89E3\u6790",
  "remote.host": "IP / \u4E3B\u673A",
  "remote.hostPlaceholder": "10.40.62.11",
  "remote.port": "\u7AEF\u53E3",
  "remote.username": "\u7528\u6237\u540D",
  "remote.usernamePlaceholder": "inno",
  "remote.password": "\u5BC6\u7801",
  "remote.passwordPlaceholder": "\u8F93\u5165\u5BC6\u7801",
  "remote.passwordHint": "\u4E0D\u4F1A\u4FDD\u5B58",
  "remote.rememberPassword": "\u8BB0\u4F4F\u5BC6\u7801",
  "remote.passwordSaved": "\u4FDD\u5B58\u5728\u672C\u673A\u6D4F\u89C8\u5668",
  "remote.passwordNotSaved": "\u4E0D\u4F1A\u4FDD\u5B58",
  "remote.connecting": "\u8FDE\u63A5\u4E2D\u2026",
  "remote.connected": "\u5DF2\u8FDE\u63A5",
  "remote.connectSuccess": "\u8FDE\u63A5\u6210\u529F",
  "remote.addWorkspace": "\u6DFB\u52A0\u8FDC\u7A0B\u5DE5\u4F5C\u533A",
  "remote.workspaceSoon": "\u8FDC\u7A0B\u5DE5\u4F5C\u533A\u529F\u80FD\u5373\u5C06\u63A5\u5165",
  "remote.workspaceAdded": "\u5DF2\u6DFB\u52A0\u8FDC\u7A0B\u5DE5\u4F5C\u533A",
  "remote.sessionCreated": "\u5DF2\u521B\u5EFA\u8FDC\u7A0B\u4F1A\u8BDD",
  "remote.sessionCount": "{n} \u4F1A\u8BDD",
  "remote.workspacesTitle": "\u8FDC\u7A0B\u5DE5\u4F5C\u533A",
  "remote.workspaceOpenSoon": "\u8FDC\u7A0B\u5DE5\u4F5C\u533A\u4F1A\u8BDD\u5373\u5C06\u63A5\u5165",
  "remote.workspaceOffline": "\u8FDE\u63A5\u4E0D\u53EF\u7528",
  "remote.workspaceOfflineShort": "\u79BB\u7EBF",
  "remote.workspaceRemove": "\u79FB\u9664\u8FDC\u7A0B\u5DE5\u4F5C\u533A",
  "remote.workspaceMore": "\u66F4\u591A\u64CD\u4F5C",
  "remote.newSession": "\u65B0\u5EFA\u4F1A\u8BDD",
  "remote.pickTitle": "\u9009\u62E9\u8FDC\u7A0B\u5DE5\u4F5C\u533A",
  "remote.pickConnection": "\u8FDE\u63A5",
  "remote.pickUp": "\u4E0A\u4E00\u7EA7",
  "remote.pickGo": "\u8F6C\u5230",
  "remote.pickEmpty": "\u8FD9\u4E2A\u76EE\u5F55\u662F\u7A7A\u7684",
  "remote.pickMock": "SSH \u540E\u7AEF\u672A\u63A5\u5165\uFF0C\u5F53\u524D\u4E3A\u76EE\u5F55\u9884\u89C8",
  "remote.pickLoading": "\u6B63\u5728\u8BFB\u53D6\u8FDC\u7A0B\u76EE\u5F55\u2026",
  "remote.pickSftp": "\u901A\u8FC7 SFTP \u8BFB\u53D6",
  "remote.pickNewFolder": "\u65B0\u5EFA\u6587\u4EF6\u5939",
  "remote.pickFolderName": "\u6587\u4EF6\u5939\u540D\u79F0",
  "remote.pickCreate": "\u521B\u5EFA",
  "remote.pickFolderNameRequired": "\u8BF7\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0",
  "remote.pickCancel": "\u53D6\u6D88",
  "remote.pickSelect": "\u9009\u62E9\u5F53\u524D\u76EE\u5F55",
  "remote.connect": "\u8FDE\u63A5",
  "remote.history": "\u6700\u8FD1\u8FDE\u63A5",
  "remote.empty": "\u8FD8\u6CA1\u6709\u8FDE\u63A5\u8BB0\u5F55",
  "remote.invalid": "\u65E0\u6CD5\u89E3\u6790 SSH \u547D\u4EE4",
  "remote.required": "\u8BF7\u586B\u5199 IP \u548C\u7528\u6237\u540D",
  "remote.saved": "\u5DF2\u4FDD\u5B58\u8FDE\u63A5\uFF1BSSH \u540E\u7AEF\u63A5\u5165\u540E\u5373\u53EF\u8FDE\u63A5",
  "remote.remove": "\u5220\u9664\u8FDE\u63A5\u8BB0\u5F55"
};
var en = {
  "panels.unpinTooltip": "Unpin from left sidebar",
  "panels.unpin": "Unpin {name} from sidebar",
  "session.new": "New Session",
  "session.new.label": "New session",
  "toggle.open": "Open sidebar",
  "toggle.collapse": "Collapse sidebar",
  "panels.label": "Global panels",
  "navigation.label": "Navigation",
  "panels.more": "More",
  "version.copied": "Version copied",
  "rail.workspaces": "Workspaces",
  "files.label": "Files",
  "files.refresh": "Refresh files",
  "files.loading": "Loading\u2026",
  "files.empty": "Workspace is empty",
  "files.emptyFolder": "Empty folder",
  "files.noSession": "Open a session to browse files",
  "files.resize": "Resize the files panel",
  "remote.title": "Remote connection",
  "remote.command": "SSH command",
  "remote.commandPlaceholder": "ssh user@host",
  "remote.parse": "Parse",
  "remote.host": "IP / host",
  "remote.hostPlaceholder": "10.40.62.11",
  "remote.port": "Port",
  "remote.username": "Username",
  "remote.usernamePlaceholder": "inno",
  "remote.password": "Password",
  "remote.passwordPlaceholder": "Enter password",
  "remote.passwordHint": "Not saved",
  "remote.rememberPassword": "Remember password",
  "remote.passwordSaved": "Saved in this browser",
  "remote.passwordNotSaved": "Not saved",
  "remote.connecting": "Connecting\u2026",
  "remote.connected": "Connected",
  "remote.connectSuccess": "Connected successfully",
  "remote.addWorkspace": "Add remote workspace",
  "remote.workspaceSoon": "Remote workspaces are coming soon",
  "remote.workspaceAdded": "Remote workspace added",
  "remote.sessionCreated": "Remote session created",
  "remote.sessionCount": "{n} sessions",
  "remote.workspacesTitle": "Remote workspaces",
  "remote.workspaceOpenSoon": "Remote workspace sessions are coming soon",
  "remote.workspaceOffline": "Connection unavailable",
  "remote.workspaceOfflineShort": "offline",
  "remote.workspaceRemove": "Remove remote workspace",
  "remote.workspaceMore": "More actions",
  "remote.newSession": "New session",
  "remote.pickTitle": "Select remote workspace",
  "remote.pickConnection": "Connection",
  "remote.pickUp": "Up",
  "remote.pickGo": "Go",
  "remote.pickEmpty": "This folder is empty",
  "remote.pickMock": "SSH backend is not wired; directory preview only",
  "remote.pickLoading": "Reading remote directory\u2026",
  "remote.pickSftp": "Read over SFTP",
  "remote.pickNewFolder": "New folder",
  "remote.pickFolderName": "Folder name",
  "remote.pickCreate": "Create",
  "remote.pickFolderNameRequired": "Enter a folder name",
  "remote.pickCancel": "Cancel",
  "remote.pickSelect": "Select this folder",
  "remote.connect": "Connect",
  "remote.history": "Recent connections",
  "remote.empty": "No connections yet",
  "remote.invalid": "Could not parse the SSH command",
  "remote.required": "Enter a host and username",
  "remote.saved": "Connection saved; the SSH backend is not wired yet",
  "remote.remove": "Remove connection"
};
var ja = {
  "panels.unpinTooltip": "\u5DE6\u30B5\u30A4\u30C9\u30D0\u30FC\u304B\u3089\u56FA\u5B9A\u89E3\u9664",
  "panels.unpin": "{name}\u3092\u30B5\u30A4\u30C9\u30D0\u30FC\u304B\u3089\u56FA\u5B9A\u89E3\u9664",
  "session.new": "\u65B0\u898F\u30BB\u30C3\u30B7\u30E7\u30F3",
  "session.new.label": "\u65B0\u898F\u30BB\u30C3\u30B7\u30E7\u30F3",
  "toggle.open": "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u958B\u304F",
  "toggle.collapse": "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080",
  "panels.label": "\u30B0\u30ED\u30FC\u30D0\u30EB\u30D1\u30CD\u30EB",
  "navigation.label": "\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3",
  "panels.more": "\u305D\u306E\u4ED6",
  "version.copied": "\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"
};
var es = {
  "panels.unpinTooltip": "Desanclar de la barra lateral izquierda",
  "panels.unpin": "Desfijar {name} de la barra lateral",
  "session.new": "Nueva sesi\xF3n",
  "session.new.label": "Nueva sesi\xF3n",
  "toggle.open": "Abrir barra lateral",
  "toggle.collapse": "Contraer barra lateral",
  "panels.label": "Paneles globales",
  "navigation.label": "Navegaci\xF3n",
  "panels.more": "M\xE1s",
  "version.copied": "Versi\xF3n copiada"
};
var fr = {
  "panels.unpinTooltip": "Retirer l'\xE9pingle de la barre lat\xE9rale gauche",
  "panels.unpin": "D\xE9s\xE9pingler {name} de la barre lat\xE9rale",
  "session.new": "Nouvelle s\xE9ance",
  "session.new.label": "Nouvelle s\xE9ance",
  "toggle.open": "Ouvrir la barre lat\xE9rale",
  "toggle.collapse": "R\xE9duire la barre lat\xE9rale",
  "panels.label": "Panneaux globaux",
  "navigation.label": "Navigation",
  "panels.more": "Plus",
  "version.copied": "Version copi\xE9e"
};
var de = {
  "panels.unpinTooltip": "Von der linken Seitenleiste l\xF6sen",
  "panels.unpin": "{name} von der Seitenleiste l\xF6sen",
  "session.new": "Neue Sitzung",
  "session.new.label": "Neue Sitzung",
  "toggle.open": "Seitenleiste \xF6ffnen",
  "toggle.collapse": "Seitenleiste einklappen",
  "panels.label": "Globale Bereiche",
  "navigation.label": "Navigation",
  "panels.more": "Mehr",
  "version.copied": "Version kopiert"
};
var ru = {
  "panels.unpinTooltip": "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u043E\u0442 \u043B\u0435\u0432\u043E\u0439 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438",
  "panels.unpin": "\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C {name} \u043E\u0442 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438",
  "session.new": "\u041D\u043E\u0432\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F",
  "session.new.label": "\u041D\u043E\u0432\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F",
  "toggle.open": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "toggle.collapse": "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "panels.label": "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u043D\u0435\u043B\u0438",
  "navigation.label": "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F",
  "panels.more": "\u0415\u0449\u0451",
  "version.copied": "\u0412\u0435\u0440\u0441\u0438\u044F \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430"
};
var pt = {
  "panels.unpinTooltip": "Soltar da barra lateral esquerda",
  "panels.unpin": "Desafixar {name} da barra lateral",
  "session.new": "Nova sess\xE3o",
  "session.new.label": "Nova sess\xE3o",
  "toggle.open": "Abrir barra lateral",
  "toggle.collapse": "Recolher barra lateral",
  "panels.label": "Pain\xE9is globais",
  "navigation.label": "Navega\xE7\xE3o",
  "panels.more": "Mais",
  "version.copied": "Vers\xE3o copiada"
};

// bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/src/client/index.ts
var SIDEBAR_SECTION_INJECT = {
  hooks: { sectionScroller: (_standard, { useSectionScroller }) => useSectionScroller }
};
var NS = "sidebar";
var inject = ["slots", "layout", "uiWorkspace", "locale", "shortcuts"];
function apply(ctx) {
  const workspaceNavigation = ctx.get("uiWorkspace");
  ctx.effect(() => ctx.locale.register(NS, { zh, en, ja, es, fr, de, ru, pt }), "ui-sidebar: dictionaries");
  const panels = (0, import_dsh_client_store2.createSnapshotStore)([]);
  const syncPanels = () => {
    const next = ctx.slots.entriesOfSlot("sidebar.panellist").map(({ options }) => {
      const id = options.id;
      return { id, order: options.order ?? 0, label: (0, import_dsh_client_ui_slots.resolveSlotLabel)(options.label) ?? id };
    }).sort((a, b) => a.order - b.order);
    const previous = panels.getSnapshot();
    if (previous.length === next.length && previous.every((panel, index) => {
      const candidate = next[index];
      return panel.id === candidate.id && panel.order === candidate.order && panel.label === candidate.label;
    })) return;
    panels.set(next);
  };
  ctx.effect(() => ctx.slots.subscribe("sidebar.panellist", syncPanels), "ui-sidebar: panel entries");
  ctx.effect(() => ctx.locale.subscribe(syncPanels), "ui-sidebar: panel labels");
  const panelPins = createPanelPins();
  const selection = workspaceNavigation.selection ?? (0, import_dsh_client_store2.createSnapshotStore)({});
  const entryActions = {
    getSnapshot: () => ctx.slots.entriesOfSlot("sidebar.panellist.actions").length > 0,
    subscribe: (listener) => ctx.slots.subscribe("sidebar.panellist.actions", listener)
  };
  const injectProps = () => ({
    // The shell's New Session button rides the Workspace UI's shared action
    // (current Session Workspace, then recent Workspace).
    startSession: (workspaceId) => {
      workspaceNavigation.startSession(workspaceId);
    },
    toggleSidebar: () => {
      ctx.layout.toggleSidebar();
    },
    selectPanel: (id) => {
      ctx.layout.selectPanel(id);
    },
    setPinned: panelPins.setPinned,
    currentSession: selection,
    trackEntryClick: (attributes) => {
      ctx.get("productAnalytics")?.track("sidebar_menu_click", attributes);
    },
    hooks: { panels, shortcuts: ctx.shortcuts.catalog, entryPins: panelPins.unpinned, entryActions }
  });
  ctx.slots.inject("sidebar", function* () {
    yield ctx.slots.registerFactory({
      name: "sidebar.panel.icon",
      scope: "root",
      children: { "sidebar.panellist": { kind: "list", scope: "root" } }
    }, PanelIcon);
    yield ctx.slots.register({
      name: "sidebar",
      locale: NS,
      children: {
        "sidebar.brand.mark": { kind: "single", scope: "root" },
        "sidebar.brand.name": { kind: "single", scope: "root" },
        "sidebar.toggle.badge": { kind: "single", scope: "root" },
        "sidebar.panellist.actions": { kind: "list", scope: "root" },
        "sidebar.workspaces": { kind: "single", scope: "root", inject: SIDEBAR_SECTION_INJECT },
        "sidebar.settings": { kind: "single", scope: "root" },
        "sidebar.footer.action": { kind: "list", scope: "root" },
        "sidebar.session.action": { kind: "hoc", scope: "root" }
      },
      inject: injectProps
    }, SidebarRoot);
  });
  ctx.slots.inject("shell.leading", () => ctx.slots.register({
    name: "shell.leading",
    locale: NS,
    inject: injectProps
  }, HeaderLeadingControls));
  syncPanels();
}

return module.exports;}});
