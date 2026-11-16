window.__ModuleLoader__.load({id:"@deepseek-ai/dsh-client-ui-sidebar-right",factory:require=>{var module={exports:{}};var exports=module.exports;

var process = { env: {} };
var __teleworkPlugin = "@deepseek-ai/dsh-client-ui-sidebar-right";
var __teleworkCss = "/* bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/GuideBody.module.css */\n.GuideBody_guide {\n  --dsl-guide-entry-radius: var(--dsw-radius-xl);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  min-height: 100%;\n  padding: 0 24px;\n}\n.GuideBody_guide::after {\n  content: \"\";\n  flex: 0 1 10%;\n}\n.GuideBody_hero {\n  display: flex;\n  margin-bottom: 16px;\n  color: var(--dsw-specific-guide-hero);\n}\n.GuideBody_entry {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  box-sizing: border-box;\n  width: 380px;\n  max-width: 100%;\n  min-height: 56px;\n  padding: 14px 20px;\n  color: var(--dsw-alias-label-primary);\n  font: inherit;\n  text-align: left;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 0.5px solid var(--dsw-alias-border-l3);\n  border-radius: var(--dsl-guide-entry-radius);\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .GuideBody_entry:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.GuideBody_entryIcon {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 26px;\n  color: var(--dsw-alias-label-secondary);\n}\n.GuideBody_placeholderInk {\n  color: var(--dsw-alias-label-tertiary);\n}\n.GuideBody_entryText {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.GuideBody_entryTitle {\n  overflow: hidden;\n  font-size: 14px;\n  line-height: 1.4;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.GuideBody_entryDescription {\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 1.4;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.GuideBody_titleIcon {\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n.GuideBody_entryCell {\n  width: 380px;\n  max-width: 100%;\n}\n.GuideBody_moreAnchor {\n  display: flex;\n  width: 380px;\n  max-width: 100%;\n}\n.GuideBody_moreAnchor .GuideBody_entry[aria-expanded=true] {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n.GuideBody_moreMenu {\n  width: max-content;\n  max-width: min(480px, calc(100vw - 24px));\n}\n\n/* bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/ExpandButton.module.css */\n.ExpandButton_button {\n  flex: none;\n  width: 28px;\n  padding: 0;\n  color: var(--dsw-alias-label-secondary);\n}\n.ExpandButton_button svg {\n  width: 15px;\n  height: 15px;\n}\n.ExpandButton_expanded {\n  visibility: hidden;\n}\n.ExpandButton_icon {\n  transform: scaleX(-1);\n}\n\n/* bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/dockkit.module.css */\n.dockkit_split {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n}\n.dockkit_splitRow {\n  flex-direction: row;\n}\n.dockkit_splitColumn {\n  flex-direction: column;\n}\n.dockkit_splitCell {\n  display: flex;\n  flex-basis: 0;\n  min-width: 0;\n  min-height: 0;\n}\n.dockkit_divider {\n  position: relative;\n  z-index: 1;\n  flex: none;\n  touch-action: none;\n}\n.dockkit_divider::before,\n.dockkit_divider::after {\n  content: \"\";\n  position: absolute;\n}\n.dockkit_divider::before {\n  background: var(--dsw-alias-border-l4);\n}\n.dockkit_splitRow > .dockkit_divider {\n  width: 0;\n  cursor: col-resize;\n}\n.dockkit_splitRow > .dockkit_divider::before {\n  top: 0;\n  bottom: 0;\n  left: -0.25px;\n  width: 0.5px;\n}\n.dockkit_splitRow > .dockkit_divider::after {\n  top: 0;\n  bottom: 0;\n  left: -4px;\n  right: -4px;\n}\n.dockkit_splitColumn > .dockkit_divider {\n  height: 0;\n  cursor: row-resize;\n}\n.dockkit_splitColumn > .dockkit_divider::before {\n  left: 0;\n  right: 0;\n  top: -0.25px;\n  height: 0.5px;\n}\n.dockkit_splitColumn > .dockkit_divider::after {\n  left: 0;\n  right: 0;\n  top: -4px;\n  bottom: -4px;\n}\n.dockkit_divider::after {\n  opacity: 0;\n  transition: opacity 120ms ease-out;\n}\n@media (hover: hover) {\n  .dockkit_divider:hover::after {\n    opacity: 1;\n  }\n}\n.dockkit_splitRow > .dockkit_divider::after {\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--dsw-alias-label-caption) 50%,\n      transparent) center / 1px 100% no-repeat;\n}\n.dockkit_splitColumn > .dockkit_divider::after {\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      var(--dsw-alias-label-caption) 50%,\n      transparent) center / 100% 1px no-repeat;\n}\n.dockkit_surface {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n}\n.dockkit_tabLayout {\n  display: grid;\n  flex: 1 1 auto;\n  grid-template-rows: minmax(0, 1fr);\n  min-width: 0;\n  min-height: 0;\n}\n.dockkit_tabCell,\n.dockkit_emptyTabHost {\n  display: flex;\n  min-width: 0;\n  min-height: 0;\n  z-index: var(--dsh-dockkit-dock-layer, 10);\n}\n.dockkit_tabCell[hidden] {\n  display: none;\n}\n.dockkit_floatingCell {\n  width: 0;\n  height: 0;\n  z-index: var(--dsh-dockkit-float-layer, 60);\n}\n.dockkit_tabHost {\n  min-width: 0;\n  min-height: 0;\n  pointer-events: auto;\n}\n.dockkit_tabHost:not(.dockkit_float),\n.dockkit_emptyTabHost {\n  background: var(--dsw-alias-bg-base);\n}\n.dockkit_tabCell[data-dockkit-host=dock][data-dockkit-column=\"0\"] > .dockkit_tabHost {\n  border-left: 0.5px solid var(--dsw-alias-border-l4);\n}\n.dockkit_tabCell[data-dockkit-host=dock][data-dockkit-row] > .dockkit_tabHost {\n  border-left: 0.5px solid var(--dsw-alias-border-l4);\n}\n.dockkit_tabHostHeader {\n  flex: none;\n}\n.dockkit_tabHostBody {\n  position: relative;\n  min-width: 0;\n}\n.dockkit_tabLayoutDivider {\n  width: 0;\n  cursor: col-resize;\n  z-index: calc(var(--dsh-dockkit-dock-layer, 10) + 1);\n  pointer-events: auto;\n}\n.dockkit_tabLayoutDivider::before {\n  top: 0;\n  bottom: 0;\n  left: -0.25px;\n  width: 0.5px;\n}\n.dockkit_tabLayoutDivider::after {\n  top: 0;\n  bottom: 0;\n  left: -4px;\n  right: -4px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--dsw-alias-label-caption) 50%,\n      transparent) center / 1px 100% no-repeat;\n}\n.dockkit_tabLayoutDividerVertical {\n  width: auto;\n  height: 0;\n  cursor: row-resize;\n}\n.dockkit_tabLayoutDividerVertical::before {\n  top: -0.25px;\n  bottom: auto;\n  left: 0;\n  right: 0;\n  width: auto;\n  height: 0.5px;\n}\n.dockkit_tabLayoutDividerVertical::after {\n  top: -4px;\n  bottom: -4px;\n  left: 0;\n  right: 0;\n  background:\n    linear-gradient(\n      to right,\n      transparent,\n      var(--dsw-alias-label-caption) 50%,\n      transparent) center / 100% 1px no-repeat;\n}\n.dockkit_pane {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  min-width: 0;\n  min-height: 0;\n  overflow: hidden;\n}\n.dockkit_pane:focus,\n.dockkit_float:focus {\n  outline: none;\n}\n.dockkit_tabStrip {\n  display: flex;\n  flex: none;\n  gap: 4px;\n  align-items: center;\n  height: 28px;\n  padding: 10px 6px 0 var(--dsh-dockkit-strip-inline-start, 10px);\n  touch-action: none;\n}\n.dockkit_stripTabs {\n  display: flex;\n  flex: 0 1 auto;\n  align-items: center;\n  min-width: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  touch-action: none;\n}\n.dockkit_stripTabs::-webkit-scrollbar {\n  display: none;\n}\n.dockkit_stripTabs[data-dockkit-strip-scroll=end] {\n  mask-image:\n    linear-gradient(\n      to right,\n      black calc(100% - 24px),\n      transparent);\n}\n.dockkit_stripTabs[data-dockkit-strip-scroll=start] {\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 24px);\n}\n.dockkit_stripTabs[data-dockkit-strip-scroll=\"start end\"] {\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 24px,\n      black calc(100% - 24px),\n      transparent);\n}\n.dockkit_stripFill {\n  flex: 1 1 0;\n  min-width: 0;\n}\n.dockkit_stripChrome {\n  display: flex;\n  flex: none;\n  gap: 8px;\n  align-items: center;\n  height: 28px;\n  margin-left: 4px;\n}\n:where(html[data-platform=darwin]) .dockkit_pane,\n:where(html[data-platform=darwin]) .dockkit_stripChrome,\n:where(html[data-platform=darwin]) .dockkit_float,\n:where(html[data-platform=darwin]) .dockkit_divider {\n  -webkit-app-region: no-drag;\n}\n.dockkit_slot {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 10px;\n  height: 28px;\n}\n.dockkit_slot::before {\n  content: \"\";\n  width: 0.5px;\n  height: 14px;\n  background: var(--dsw-alias-border-l4);\n}\n.dockkit_tabActive + .dockkit_slot:not(.dockkit_slotCaret)::before,\n.dockkit_slot:not(.dockkit_slotCaret):has(+ .dockkit_tabActive)::before {\n  background: transparent;\n}\n.dockkit_slotCaret::before {\n  width: 2px;\n  height: 20px;\n  background: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n}\n.dockkit_tab {\n  position: relative;\n  display: flex;\n  flex: 0 1 auto;\n  align-items: center;\n  min-width: 80px;\n  max-width: 170px;\n  height: 28px;\n  padding: 0 10px;\n  color: var(--dsw-alias-label-secondary);\n  font-size: var(--dsh-content-font-size-secondary, 13px);\n  line-height: 1;\n  white-space: nowrap;\n  border-radius: var(--dsw-radius-sm);\n  cursor: pointer;\n  touch-action: none;\n  user-select: none;\n}\n.dockkit_tabTitle {\n  display: flex;\n  flex: 1 1 auto;\n  gap: 5px;\n  align-items: center;\n  min-width: 0;\n  overflow: hidden;\n  line-height: 1.4;\n}\n.dockkit_tabTitle[data-dockkit-tab-clipped] {\n  mask-image:\n    linear-gradient(\n      to right,\n      black calc(100% - 16px),\n      transparent);\n}\n.dockkit_tab:not(.dockkit_floatTitle):focus-within .dockkit_tabTitle,\n.dockkit_tabActive .dockkit_tabTitle {\n  mask-image:\n    linear-gradient(\n      to right,\n      black calc(100% - 30px),\n      transparent calc(100% - 14px));\n}\n@media (hover: hover) {\n  .dockkit_tab:not(.dockkit_floatTitle):hover .dockkit_tabTitle {\n    mask-image:\n      linear-gradient(\n        to right,\n        black calc(100% - 30px),\n        transparent calc(100% - 14px));\n  }\n}\n.dockkit_tabClose {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  color: var(--dsw-alias-label-tertiary);\n  line-height: 1;\n  background: transparent;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  cursor: pointer;\n  opacity: 0;\n  pointer-events: none;\n}\n.dockkit_tab:focus-within .dockkit_tabClose,\n.dockkit_tabActive .dockkit_tabClose {\n  opacity: 1;\n  pointer-events: auto;\n}\n@media (hover: hover) {\n  .dockkit_tab:hover .dockkit_tabClose {\n    opacity: 1;\n    pointer-events: auto;\n  }\n}\n.dockkit_addTab {\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  color: var(--dsw-alias-label-secondary);\n  line-height: 1;\n  background: transparent;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .dockkit_addTab:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n  .dockkit_tabClose:hover {\n    color: var(--dsw-alias-label-primary);\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n  .dockkit_tab:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.dockkit_tabActive {\n  color: var(--dsw-alias-label-primary);\n  background: var(--dsw-alias-markdown-tag);\n}\n.dockkit_tab.dockkit_tabQuiet {\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  cursor: default;\n}\n@media (hover: hover) {\n  .dockkit_tab.dockkit_tabQuiet:hover {\n    color: var(--dsw-alias-label-primary);\n    background: transparent;\n    cursor: default;\n  }\n}\n.dockkit_tab.dockkit_tabQuiet .dockkit_tabTitle,\n.dockkit_tab.dockkit_tabQuiet:focus-within .dockkit_tabTitle {\n  mask-image: none;\n}\n@media (hover: hover) {\n  .dockkit_tab.dockkit_tabQuiet:hover .dockkit_tabTitle {\n    mask-image: none;\n  }\n}\n.dockkit_tab.dockkit_tabQuiet .dockkit_tabTitle[data-dockkit-tab-clipped] {\n  mask-image:\n    linear-gradient(\n      to right,\n      black calc(100% - 16px),\n      transparent);\n}\n.dockkit_tabDragging {\n  opacity: 0.5;\n}\n.dockkit_iconButton {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 6px;\n  color: var(--dsw-alias-label-secondary);\n  line-height: 1;\n  background: transparent;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  cursor: pointer;\n}\n.dockkit_iconButton svg {\n  width: 15px;\n  height: 15px;\n}\n@media (hover: hover) {\n  .dockkit_iconButton:hover:not(:disabled) {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.dockkit_iconButton:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.dockkit_iconButton[data-dockkit-split-blocked] {\n  pointer-events: none;\n}\n.dockkit_menu {\n  position: fixed;\n  z-index: 70;\n  display: flex;\n  flex-direction: column;\n  min-width: 96px;\n  padding: 4px;\n  border: 0.5px solid var(--dsw-alias-border-l2);\n}\n.dockkit_menu:not(:has([role=menuitem], [role=menuitemcheckbox], [role=menuitemradio])) {\n  display: none;\n}\n.dockkit_menuItem {\n  padding: 4px 7px;\n  color: var(--dsw-alias-label-primary);\n  font-size: calc(var(--dsh-content-font-size-secondary, 13px) - 1px);\n  text-align: left;\n  background: transparent;\n  border: none;\n  border-radius: var(--dsw-radius-md);\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .dockkit_menuItem:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.dockkit_paneBody {\n  position: relative;\n  flex: 1 1 auto;\n  min-width: 0;\n  min-height: 0;\n  overflow: auto;\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n}\n.dockkit_empty {\n  margin: 0;\n  padding: 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: var(--dsh-content-font-size-secondary, 13px);\n}\n.dockkit_dockScrim {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  pointer-events: none;\n  background: color-mix(in srgb, var(--dsw-alias-bg-base) 72%, transparent);\n  backdrop-filter: blur(6px);\n  animation: dockkit_dockScrimIn 140ms ease-out;\n}\n.dockkit_dockHint {\n  position: absolute;\n  z-index: 10;\n  display: flex;\n  box-sizing: border-box;\n  padding: 8px;\n  pointer-events: none;\n}\n.dockkit_dockHint[data-dockkit-dock-zone=center] {\n  inset: 0;\n}\n.dockkit_dockHint[data-dockkit-dock-zone=left] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 40%;\n}\n.dockkit_dockHint[data-dockkit-dock-zone=right] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 40%;\n}\n[data-dockkit-drop-zones=horizontal] .dockkit_dockHint[data-dockkit-dock-zone=left] {\n  width: 50%;\n  padding-right: 4px;\n}\n[data-dockkit-drop-zones=horizontal] .dockkit_dockHint[data-dockkit-dock-zone=right] {\n  width: 50%;\n  padding-left: 4px;\n}\n.dockkit_dockHintCard {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  gap: 8px;\n  align-items: center;\n  justify-content: center;\n  min-width: 0;\n  min-height: 0;\n  padding: 12px;\n  overflow: hidden;\n  color: var(--dsw-alias-label-tertiary);\n  border: 1.5px dashed var(--dsw-alias-border-l2);\n  border-radius: var(--dsw-radius-lg);\n  transition:\n    color 120ms ease-out,\n    background-color 120ms ease-out,\n    border-color 120ms ease-out;\n  animation: dockkit_dockHintIn 140ms ease-out;\n}\n.dockkit_dockHint[data-dockkit-drop-active] .dockkit_dockHintCard {\n  color: var(--dsw-alias-label-secondary);\n  background: color-mix(in srgb, var(--dsw-alias-brand-primary-new-colorprimary-new-color) 8%, transparent);\n  border-color: var(--dsw-alias-brand-primary-new-colorprimary-new-color);\n}\n.dockkit_dockHintCard svg {\n  flex: none;\n  width: 20px;\n  height: 20px;\n}\n.dockkit_dockHintLabel {\n  max-width: 100%;\n  overflow: hidden;\n  font-size: var(--dsh-content-font-size-secondary, 13px);\n  font-weight: 500;\n  line-height: 1.4;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n@keyframes dockkit_dockHintIn {\n  from {\n    opacity: 0;\n    transform: scale(0.98);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes dockkit_dockScrimIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dockkit_dockHint[data-dockkit-dock-zone=top] {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 40%;\n}\n.dockkit_dockHint[data-dockkit-dock-zone=bottom] {\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 40%;\n}\nhtml[data-windows-titlebar] .dockkit_float {\n  --dsh-dockkit-float-top: calc(var(--dsh-windows-titlebar-height) + 20px);\n}\nhtml[data-windows-titlebar][data-fullscreen] .dockkit_float {\n  --dsh-dockkit-float-top: 20px;\n}\n.dockkit_float {\n  position: fixed;\n  left: max(0px, min(var(--dsh-dockkit-float-x), 100vw - var(--dsh-dockkit-float-width)));\n  top: max(var(--dsh-dockkit-float-top, 0px), min(var(--dsh-dockkit-float-y), 100dvh - var(--dsh-dockkit-float-height)));\n  width: min(var(--dsh-dockkit-float-width), 100vw);\n  height: min(var(--dsh-dockkit-float-height), 100dvh - var(--dsh-dockkit-float-top, 0px));\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: var(--dsw-alias-bg-layer-2);\n  border-radius: var(--dsw-radius-panel);\n  --dsw-elevation-stroke-color: var(--dsw-alias-border-l2);\n  box-shadow: var(--dsw-elevation-prominent);\n  pointer-events: auto;\n}\n.dockkit_floatHeader {\n  cursor: move;\n  user-select: none;\n}\n.dockkit_floatTitle {\n  flex: 0 1 auto;\n  cursor: inherit;\n}\n@media (hover: hover) {\n  .dockkit_tab.dockkit_floatTitle:hover {\n    background: transparent;\n  }\n}\n.dockkit_dockGlyph {\n  transform: scaleX(-1);\n}\n.dockkit_floatBody {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n  --dsh-scrollbar-thumb: var(--dsw-alias-scrollbar-bg-l2);\n  --dsh-scrollbar-thumb-hover: var(--dsw-alias-scrollbar-hover-l2);\n}\n.dockkit_floatResize {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 20px;\n  height: 20px;\n  cursor: nwse-resize;\n  touch-action: none;\n}\n.dockkit_floatResize::after {\n  content: \"\";\n  position: absolute;\n  right: 4px;\n  bottom: 4px;\n  width: calc(var(--dsw-radius-panel) - 4px);\n  height: calc(var(--dsw-radius-panel) - 4px);\n  border-right: 1.5px solid var(--dsw-alias-label-caption);\n  border-bottom: 1.5px solid var(--dsw-alias-label-caption);\n  border-bottom-right-radius: calc(var(--dsw-radius-panel) - 4px);\n  opacity: 0;\n  transition: opacity 120ms ease-out;\n}\n.dockkit_floatResize:active::after {\n  opacity: 1;\n}\n@media (hover: hover) {\n  .dockkit_float:hover .dockkit_floatResize::after {\n    opacity: 1;\n  }\n  .dockkit_floatResize:hover::after {\n    border-color: var(--dsw-alias-label-tertiary);\n  }\n}\n\n/* bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/SidebarRight.module.css */\n.SidebarRight_session {\n  display: contents;\n}\n.SidebarRight_session[hidden] {\n  display: none;\n}\n.SidebarRight_panel {\n  --dsh-dockkit-dock-layer: 10;\n  --dsh-dockkit-float-layer: 60;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: clip;\n  pointer-events: none;\n}\n.SidebarRight_panel [data-dockkit-host=dock],\n.SidebarRight_panel [data-dockkit-empty],\n.SidebarRight_panel [data-dockkit-divider] {\n  transform: translateX(var(--dsh-sidebar-width));\n  visibility: hidden;\n  transition: transform var(--ds-transition-duration-slow) var(--ds-ease-in-out), visibility 0s linear var(--ds-transition-duration-slow);\n}\n.SidebarRight_panel[data-sidebar-right-open] [data-dockkit-host=dock],\n.SidebarRight_panel[data-sidebar-right-open] [data-dockkit-empty],\n.SidebarRight_panel[data-sidebar-right-open] [data-dockkit-divider] {\n  transform: none;\n  visibility: visible;\n  transition: transform var(--ds-transition-duration-slow) var(--ds-ease-in-out);\n}\n@starting-style {\n  .SidebarRight_panel[data-sidebar-right-opening] [data-dockkit-host=dock],\n  .SidebarRight_panel[data-sidebar-right-opening] [data-dockkit-empty],\n  .SidebarRight_panel[data-sidebar-right-opening] [data-dockkit-divider] {\n    transform: translateX(var(--dsh-sidebar-width));\n  }\n}\n.SidebarRight_panel[data-sidebar-right-panel=fullscreen] {\n  --dsh-dockkit-dock-layer: 40;\n}\n[data-windows-titlebar] .SidebarRight_panel[data-sidebar-right-panel=fullscreen] {\n  max-width: calc(100vw - var(--dsh-windows-sidebar-width));\n}\n[data-windows-titlebar] .SidebarRight_panel[data-sidebar-right-panel=fullscreen] [data-dockkit-column=\"0\"][data-dockkit-pane] {\n  border-radius: var(--dsh-windows-content-radius) 0 0 0;\n  corner-shape: round;\n}\n[data-platform=darwin] .SidebarRight_panel[data-sidebar-right-panel=fullscreen] [data-dockkit-host=dock][data-dockkit-column=\"0\"] {\n  --dsh-dockkit-strip-inline-start: 88px;\n}\n[data-platform=darwin] .SidebarRight_panel[data-sidebar-right-panel=fullscreen] [data-dockkit-host=dock][data-dockkit-column=\"1\"] {\n  --dsh-dockkit-strip-inline-start: 10px;\n}\n[data-platform=darwin][data-fullscreen] .SidebarRight_panel[data-sidebar-right-panel=fullscreen] [data-dockkit-host=dock][data-dockkit-column=\"0\"] {\n  --dsh-dockkit-strip-inline-start: 10px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .SidebarRight_panel [data-dockkit-host=dock],\n  .SidebarRight_panel [data-dockkit-empty],\n  .SidebarRight_panel [data-dockkit-divider],\n  .SidebarRight_panel[data-sidebar-right-open] [data-dockkit-host=dock],\n  .SidebarRight_panel[data-sidebar-right-open] [data-dockkit-empty],\n  .SidebarRight_panel[data-sidebar-right-open] [data-dockkit-divider] {\n    transition: none;\n  }\n}\n.SidebarRight_iconButton {\n  display: inline-flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 6px;\n  color: var(--dsw-alias-label-secondary);\n  line-height: 1;\n  background: transparent;\n  border: none;\n  border-radius: var(--dsw-radius-sm);\n  cursor: pointer;\n}\n.SidebarRight_iconButton svg {\n  width: 15px;\n  height: 15px;\n}\n@media (hover: hover) {\n  .SidebarRight_iconButton:hover {\n    background: var(--dsw-alias-interactive-bg-hover);\n  }\n}\n.SidebarRight_collapseGlyph {\n  transform: scaleX(-1);\n}\n.SidebarRight_panelBody {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 0;\n}\n@media (pointer: coarse) {\n  .SidebarRight_panelBody [data-dockkit-split-control]:has(> [data-dockkit-split-blocked]) {\n    visibility: hidden;\n  }\n}\n.SidebarRight_unavailable {\n  margin: 0;\n  padding: 12px;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: var(--dsh-content-font-size-secondary, 13px);\n}\n.SidebarRight_tabTitle {\n  display: contents;\n}\n.SidebarRight_tabBody {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n  min-width: 0;\n  overflow: hidden;\n}\n.SidebarRight_panel [data-dockkit-pane][data-sidebar-right-flash],\n.SidebarRight_panel [data-dockkit-float][data-sidebar-right-flash] {\n  --sidebar-right-flash-color: var(--dsw-specific-sidebar-right-flash);\n  --sidebar-right-flash-ring: color-mix(in srgb, var(--sidebar-right-flash-color) 48%, transparent);\n  --sidebar-right-flash-near: color-mix(in srgb, var(--sidebar-right-flash-color) 16%, transparent);\n  --sidebar-right-flash-far: color-mix(in srgb, var(--sidebar-right-flash-color) 10%, transparent);\n}\n.SidebarRight_panel [data-dockkit-pane][data-sidebar-right-flash] {\n  position: relative;\n}\n.SidebarRight_panel [data-dockkit-pane][data-sidebar-right-flash]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: 7;\n  pointer-events: none;\n  --sidebar-right-flash-from:\n    inset 0 0 0 1px var(--sidebar-right-flash-ring),\n    inset 0 2px 4px 0 var(--sidebar-right-flash-near),\n    inset 0 0 10px 0 var(--sidebar-right-flash-far);\n  --sidebar-right-flash-to:\n    inset 0 0 0 1px transparent,\n    inset 0 2px 4px 0 transparent,\n    inset 0 0 10px 0 transparent;\n}\n.SidebarRight_panel [data-dockkit-float][data-sidebar-right-flash] {\n  --sidebar-right-flash-from:\n    var(--dsw-elevation-prominent),\n    0 0 0 1px var(--sidebar-right-flash-ring),\n    0 2px 4px 0 var(--sidebar-right-flash-near),\n    0 0 10px 0 var(--sidebar-right-flash-far);\n  --sidebar-right-flash-to:\n    var(--dsw-elevation-prominent),\n    0 0 0 1px transparent,\n    0 2px 4px 0 transparent,\n    0 0 10px 0 transparent;\n}\n.SidebarRight_panel [data-dockkit-pane][data-sidebar-right-flash]::after,\n.SidebarRight_panel [data-dockkit-float][data-sidebar-right-flash] {\n  animation-duration: calc(var(--ds-transition-duration-slow) * 2);\n  animation-timing-function: var(--ds-ease-in-out);\n}\n.SidebarRight_panel [data-dockkit-pane][data-sidebar-right-flash=odd]::after,\n.SidebarRight_panel [data-dockkit-float][data-sidebar-right-flash=odd] {\n  animation-name: SidebarRight_flashOdd;\n}\n.SidebarRight_panel [data-dockkit-pane][data-sidebar-right-flash=even]::after,\n.SidebarRight_panel [data-dockkit-float][data-sidebar-right-flash=even] {\n  animation-name: SidebarRight_flashEven;\n}\n@keyframes SidebarRight_flashOdd {\n  from {\n    box-shadow: var(--sidebar-right-flash-from);\n  }\n  to {\n    box-shadow: var(--sidebar-right-flash-to);\n  }\n}\n@keyframes SidebarRight_flashEven {\n  from {\n    box-shadow: var(--sidebar-right-flash-from);\n  }\n  to {\n    box-shadow: var(--sidebar-right-flash-to);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .SidebarRight_panel [data-dockkit-pane][data-sidebar-right-flash]::after,\n  .SidebarRight_panel [data-dockkit-float][data-sidebar-right-flash] {\n    animation-timing-function: step-end;\n  }\n}\n";
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

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/constants.js"(exports, module2) {
    "use strict";
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DEFAULT_MAX_EXTGLOB_RECURSION = 0;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var SEP = "/";
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR,
      SEP
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
      SEP: "\\"
    };
    var POSIX_REGEX_SOURCE = {
      __proto__: null,
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      DEFAULT_MAX_EXTGLOB_RECURSION,
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        __proto__: null,
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.isWindows = () => {
      if (typeof navigator !== "undefined" && navigator.platform) {
        const platform = navigator.platform.toLowerCase();
        return platform === "win32" || platform === "windows";
      }
      if (typeof process !== "undefined" && process.platform) {
        return process.platform === "win32";
      }
      return false;
    };
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
    exports.basename = (path, { windows } = {}) => {
      const segs = path.split(windows ? /[\\/]/ : "/");
      const last = segs[segs.length - 1];
      if (last === "") {
        return segs[segs.length - 2];
      }
      return last;
    };
  }
});

// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/scan.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.tokens === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance2 = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance2();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance2();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance2())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance2();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance2()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              let parens = 0;
              while (eos() !== true && (code = advance2())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  advance2();
                  continue;
                }
                if (code === CHAR_LEFT_PARENTHESES) {
                  parens++;
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance2())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance2();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            let parens = 1;
            while (eos() !== true && (code = advance2())) {
              if (code === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance2();
                continue;
              }
              if (code === CHAR_LEFT_PARENTHESES) {
                parens++;
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n2 = prevIndex !== void 0 ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value2 = input.slice(n2, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value2;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (i >= start) {
            parts.push(value2);
            prevIndex = i;
          }
        }
        const n = prevIndex !== void 0 ? prevIndex + 1 : start;
        const value = input.slice(n);
        parts.push(value);
        if (opts.tokens && prevIndex && prevIndex + 1 < input.length) {
          tokens[tokens.length - 1].value = value;
          depth(tokens[tokens.length - 1]);
          state.maxDepth += tokens[tokens.length - 1].depth;
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/parse.js"(exports, module2) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var splitTopLevel = (input) => {
      const parts = [];
      let bracket = 0;
      let paren = 0;
      let quote = 0;
      let value = "";
      let escaped = false;
      for (const ch of input) {
        if (escaped === true) {
          value += ch;
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          value += ch;
          escaped = true;
          continue;
        }
        if (ch === '"') {
          quote = quote === 1 ? 0 : 1;
          value += ch;
          continue;
        }
        if (quote === 0) {
          if (ch === "[") {
            bracket++;
          } else if (ch === "]" && bracket > 0) {
            bracket--;
          } else if (bracket === 0) {
            if (ch === "(") {
              paren++;
            } else if (ch === ")" && paren > 0) {
              paren--;
            } else if (ch === "|" && paren === 0) {
              parts.push(value);
              value = "";
              continue;
            }
          }
        }
        value += ch;
      }
      parts.push(value);
      return parts;
    };
    var isPlainBranch = (branch) => {
      let escaped = false;
      for (const ch of branch) {
        if (escaped === true) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (/[?*+@!()[\]{}]/.test(ch)) {
          return false;
        }
      }
      return true;
    };
    var normalizeSimpleBranch = (branch) => {
      let value = branch.trim();
      let changed = true;
      while (changed === true) {
        changed = false;
        if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
          value = value.slice(2, -1);
          changed = true;
        }
      }
      if (!isPlainBranch(value)) {
        return;
      }
      return value.replace(/\\(.)/g, "$1");
    };
    var hasRepeatedCharPrefixOverlap = (branches) => {
      const values = branches.map(normalizeSimpleBranch).filter(Boolean);
      for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
          const a = values[i];
          const b = values[j];
          const char = a[0];
          if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
            continue;
          }
          if (a === b || a.startsWith(b) || b.startsWith(a)) {
            return true;
          }
        }
      }
      return false;
    };
    var parseRepeatedExtglob = (pattern, requireEnd = true) => {
      if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") {
        return;
      }
      let bracket = 0;
      let paren = 0;
      let quote = 0;
      let escaped = false;
      for (let i = 1; i < pattern.length; i++) {
        const ch = pattern[i];
        if (escaped === true) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (ch === '"') {
          quote = quote === 1 ? 0 : 1;
          continue;
        }
        if (quote === 1) {
          continue;
        }
        if (ch === "[") {
          bracket++;
          continue;
        }
        if (ch === "]" && bracket > 0) {
          bracket--;
          continue;
        }
        if (bracket > 0) {
          continue;
        }
        if (ch === "(") {
          paren++;
          continue;
        }
        if (ch === ")") {
          paren--;
          if (paren === 0) {
            if (requireEnd === true && i !== pattern.length - 1) {
              return;
            }
            return {
              type: pattern[0],
              body: pattern.slice(2, i),
              end: i
            };
          }
        }
      }
    };
    var buildCharClassStar = (chars) => {
      const source = chars.length === 1 ? utils.escapeRegex(chars[0]) : `[${chars.map((ch) => utils.escapeRegex(ch)).join("")}]`;
      return `${source}*`;
    };
    var getStarExtglobSequenceChars = (pattern) => {
      let index = 0;
      const chars = [];
      while (index < pattern.length) {
        const match = parseRepeatedExtglob(pattern.slice(index), false);
        if (!match || match.type !== "*") {
          return;
        }
        const branches = splitTopLevel(match.body).map((branch2) => branch2.trim());
        if (branches.length !== 1) {
          return;
        }
        const branch = normalizeSimpleBranch(branches[0]);
        if (!branch || branch.length !== 1) {
          return;
        }
        chars.push(branch);
        index += match.end + 1;
      }
      if (chars.length < 1) {
        return;
      }
      return chars;
    };
    var repeatedExtglobRecursion = (pattern) => {
      let depth = 0;
      let value = pattern.trim();
      let match = parseRepeatedExtglob(value);
      while (match) {
        depth++;
        value = match.body.trim();
        match = parseRepeatedExtglob(value);
      }
      return depth;
    };
    var analyzeRepeatedExtglob = (body, options) => {
      if (options.maxExtglobRecursion === false) {
        return { risky: false };
      }
      const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants.DEFAULT_MAX_EXTGLOB_RECURSION;
      const branches = splitTopLevel(body).map((branch) => branch.trim());
      if (branches.length > 1) {
        if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) {
          return { risky: true };
        }
      }
      const safeChars = [];
      let sawStarSequence = false;
      let combinable = true;
      for (const branch of branches) {
        const chars = getStarExtglobSequenceChars(branch);
        if (chars) {
          sawStarSequence = true;
          safeChars.push(...chars);
          continue;
        }
        const literal = normalizeSimpleBranch(branch);
        if (literal && literal.length === 1) {
          safeChars.push(literal);
          continue;
        }
        combinable = false;
        if (repeatedExtglobRecursion(branch) > max) {
          return { risky: true };
        }
      }
      if (sawStarSequence) {
        return combinable ? { risky: true, safeOutput: buildCharClassStar([...new Set(safeChars)]) } : { risky: true };
      }
      return { risky: false };
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const PLATFORM_CHARS = constants.globChars(opts.windows);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance2 = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance2();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.output = (prev.output || prev.value) + tok.value;
          prev.value += tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        token.startIndex = state.index;
        token.tokensIndex = tokens.length;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance2(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        const literal = input.slice(token.startIndex, state.index + 1);
        const body = input.slice(token.startIndex + 2, state.index);
        const analysis = analyzeRepeatedExtglob(body, opts);
        if ((token.type === "plus" || token.type === "star") && analysis.risky) {
          const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : void 0;
          const open = tokens[token.tokensIndex];
          open.type = "text";
          open.value = literal;
          open.output = safeOutput || utils.escapeRegex(literal);
          for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
            tokens[i].value = "";
            tokens[i].output = "";
            delete tokens[i].suffix;
          }
          state.output = token.output + open.output;
          state.backtrack = true;
          push({ type: "paren", extglob: true, value, output: "" });
          decrement("parens");
          return;
        }
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance2();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance2();
          } else {
            value += advance2();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance2();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          const isEnd = eos() || state.parens > 0 && rest === ")".repeat(state.parens) && !extglobs.some((extglob) => extglob.type === "negate");
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && isEnd) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance2());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance2());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(opts.windows);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/picomatch.js"(exports, module2) {
    "use strict";
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch2 = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch2(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = opts.windows;
      const regex = isState ? picomatch2.compileRe(glob, options) : picomatch2.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch2(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch2.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch2.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch2.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch2.matchBase = (input, glob, options, posix = options && options.windows) => {
      const regex = glob instanceof RegExp ? glob : picomatch2.makeRe(glob, options);
      return regex.test(utils.basename(input, { windows: posix }));
    };
    picomatch2.isMatch = (str, patterns, options) => picomatch2(patterns, options)(str);
    picomatch2.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch2.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch2.scan = (input, options) => scan(input, options);
    picomatch2.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch2.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch2.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch2.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch2.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch2.constants = constants;
    module2.exports = picomatch2;
  }
});

// node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/posix.js
var require_posix = __commonJS({
  "node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/posix.js"(exports, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/index.ts
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);
var import_dsh_client_ui_primitives9 = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/TabMenuContent.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function TabMenuContent({ target, dismiss, useViews, SessionProvider, renderSlot }) {
  const views = useViews((value) => value);
  if (target.kind !== "tab") return null;
  const view = views.find((view2) => view2.sessionId === target.value.sessionId);
  const tab = target.value.tab;
  if (view === void 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionProvider, { session: view.reference, children: renderSlot("sidebar.right.tab.menu.item", { tab, dismiss }) });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/focus.ts
function sidebarTargetFromElement(element, sessionId, layout2, occurrence) {
  if (element === null || !element.isConnected) return void 0;
  const owner = element.closest("[data-sidebar-right-session]");
  if (owner?.dataset.sidebarRightSession !== sessionId) return void 0;
  const container = element.closest("[data-dockkit-pane], [data-dockkit-float]");
  const paneId2 = container?.dataset.dockkitPane ?? container?.dataset.dockkitFloat;
  if (paneId2 === void 0 || container?.closest('[hidden], [aria-hidden="true"]') !== null) return void 0;
  const pane = layout2.nodes[paneId2];
  if (pane?.kind !== "pane" || pane.host === "dock" && !layout2.expanded) return void 0;
  const tabElement = element.closest("[data-dockkit-tab], [data-sidebar-right-tab]");
  const tabId2 = tabElement?.dataset.dockkitTab ?? tabElement?.dataset.sidebarRightTab ?? pane.activeTabId;
  if (tabId2 !== void 0 && (!pane.tabs.includes(tabId2) || layout2.tabs[tabId2] === void 0)) return void 0;
  const held = tabId2 === void 0 ? void 0 : occurrence(tabId2);
  const marker = element.closest("[data-sidebar-right-occurrence]") ?? tabElement?.querySelector("[data-sidebar-right-occurrence]");
  if (marker !== null && marker !== void 0 && marker.dataset.sidebarRightOccurrence !== held?.id) return void 0;
  return {
    sessionId,
    paneId: paneId2,
    host: pane.host,
    tabId: tabId2,
    occurrence: held,
    navigationRevision: held?.navigation.getSnapshot().revision
  };
}
function visibleSidebarPane(document2, sessionId, paneId2) {
  const panes = [...document2.querySelectorAll("[data-dockkit-pane], [data-dockkit-float]")].filter((pane) => {
    const owner = pane.closest("[data-sidebar-right-session]");
    return owner?.dataset.sidebarRightSession === sessionId && pane.closest('[hidden], [aria-hidden="true"]') === null && (pane.hasAttribute("data-dockkit-float") || owner.hasAttribute("data-sidebar-right-open"));
  });
  return panes.find((pane) => (pane.dataset.dockkitPane ?? pane.dataset.dockkitFloat) === paneId2) ?? panes.find((pane) => pane.hasAttribute("data-dockkit-pane-active") || pane.hasAttribute("data-dockkit-float-active")) ?? panes[0];
}
function observeSidebarFocus(document2) {
  let active = true;
  let focused;
  const removal = new MutationObserver(() => {
    if (focused === void 0 || focused.element.isConnected) return;
    const previous = focused;
    focused = void 0;
    removal.disconnect();
    if (document2.activeElement !== document2.body) return;
    const moved = previous.occurrence === void 0 ? void 0 : [...document2.querySelectorAll("[data-sidebar-right-occurrence]")].find((marker) => marker.dataset.sidebarRightOccurrence === previous.occurrence)?.closest("[data-dockkit-pane], [data-dockkit-float]");
    const paneId2 = moved?.dataset.dockkitPane ?? moved?.dataset.dockkitFloat;
    visibleSidebarPane(document2, previous.sessionId, paneId2 ?? previous.paneId)?.focus({ preventScroll: true });
  });
  const capture = () => {
    removal.disconnect();
    focused = void 0;
    const element = document2.activeElement;
    const pane = element?.closest("[data-dockkit-pane], [data-dockkit-float]");
    if (element === null || pane === void 0 || pane === null) return;
    const owner = pane.closest("[data-sidebar-right-session]");
    const sessionId = owner?.dataset.sidebarRightSession;
    const paneId2 = pane.dataset.dockkitPane ?? pane.dataset.dockkitFloat;
    if (owner === null || sessionId === void 0 || paneId2 === void 0) return;
    const tab = element.closest("[data-dockkit-tab]") ?? pane.querySelector('[role="tab"][aria-selected="true"], [data-dockkit-float-title]');
    const marker = element.closest("[data-sidebar-right-occurrence]") ?? tab?.querySelector("[data-sidebar-right-occurrence]");
    focused = { element, sessionId, paneId: paneId2, occurrence: marker?.dataset.sidebarRightOccurrence };
    removal.observe(owner, { childList: true, subtree: true });
    if (owner.parentElement !== null) removal.observe(owner.parentElement, { childList: true });
  };
  const focusout = (event) => {
    if (event.relatedTarget === null && focused?.element.isConnected) {
      focused = void 0;
      removal.disconnect();
    }
  };
  const pointer = (event) => {
    const element = event.composedPath().find((value) => value instanceof Element);
    if (!(element instanceof Element)) return;
    const pane = element.closest("[data-sidebar-right-session] [data-dockkit-pane], [data-sidebar-right-session] [data-dockkit-float]");
    if (pane === null) {
      focused = void 0;
      removal.disconnect();
    }
    const control = element.closest("button, input, textarea, select, a, [contenteditable], [tabindex], iframe");
    if (pane !== null && (control === null || control === pane)) {
      pane.focus({ preventScroll: true });
    }
  };
  const blur = () => {
    queueMicrotask(() => {
      if (active) capture();
    });
  };
  document2.addEventListener("focusin", capture);
  document2.addEventListener("focusout", focusout);
  document2.addEventListener("pointerdown", pointer, true);
  document2.defaultView?.addEventListener("blur", blur);
  document2.defaultView?.addEventListener("focus", capture);
  capture();
  return () => {
    active = false;
    removal.disconnect();
    document2.removeEventListener("focusin", capture);
    document2.removeEventListener("focusout", focusout);
    document2.removeEventListener("pointerdown", pointer, true);
    document2.defaultView?.removeEventListener("blur", blur);
    document2.defaultView?.removeEventListener("focus", capture);
  };
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shortcuts.ts
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
function registerSidebarShortcuts(shortcuts, sidebar, t, closeWindow) {
  const reason = (kind, target) => {
    if (kind === "split") {
      const block = sidebar.splitBlock(target);
      return block === void 0 ? null : t(`command.${block}`);
    }
    if (target.host === "float") return t("command.float");
    return null;
  };
  const disposers = [shortcuts.register({
    id: "sidebar.right.toggle",
    label: () => t("command.toggle"),
    aliases: ["right sidebar", "toggle right panel"],
    defaults: {
      "desktop:macos": { code: "KeyB", modifiers: ["primary", "alt"] },
      "desktop:windows": { code: "KeyB", modifiers: ["primary", "alt"] },
      "desktop:linux": { code: "KeyB", modifiers: ["primary", "alt"] },
      "web:macos": { code: "KeyB", modifiers: ["primary", "shift"] },
      "web:windows": { code: "KeyB", modifiers: ["primary", "shift"] }
    },
    regions: ["page", "editable", "terminal"],
    modals: [],
    resolve: () => {
      const target = sidebar.commandTarget(null);
      if (target === void 0) return { status: "blocked", reason: t("command.noSession") };
      return { status: "handled", run: () => {
        if (sidebar.isTargetCurrent(target)) sidebar.toggleExpanded();
      } };
    }
  })];
  for (const kind of ["split", "fullscreen"]) {
    const binding = kind === "split" ? { code: "Backslash", modifiers: ["primary"] } : { code: "Enter", modifiers: ["primary", "alt"] };
    disposers.push(shortcuts.register({
      id: kind === "split" ? "pane.split" : "pane.fullscreen.toggle",
      label: () => t(kind === "split" ? "dock.splitPane" : "command.fullscreen"),
      aliases: [kind, "panel"],
      defaults: {
        "desktop:macos": binding,
        "desktop:windows": binding,
        "desktop:linux": binding,
        "web:macos": binding,
        "web:windows": binding
      },
      regions: ["page", "editable", "terminal"],
      modals: [],
      resolve: ({ target: element }) => {
        const target = sidebar.focusedTarget(element);
        if (target === void 0) return { status: "blocked", reason: t("command.noFocus") };
        const unavailable = reason(kind, target);
        if (unavailable !== null) return { status: "blocked", reason: unavailable };
        return { status: "handled", run: () => {
          if (!sidebar.isTargetCurrent(target)) return;
          if (kind === "split") sidebar.split(target.paneId);
          else sidebar.toggleFullscreen(target);
        } };
      }
    }));
  }
  for (const kind of ["close", "refresh"]) {
    const desktop = { code: kind === "close" ? "KeyW" : "KeyR", modifiers: ["primary"] };
    const web = { ...desktop, modifiers: ["primary", "alt"] };
    disposers.push(shortcuts.register({
      id: `page.${kind}`,
      label: () => t(`command.${kind}`),
      aliases: [kind, "page"],
      defaults: {
        "desktop:macos": desktop,
        "desktop:windows": desktop,
        "desktop:linux": desktop,
        "web:windows": web,
        ...kind === "close" ? { "web:macos": web } : {}
      },
      regions: ["page", "editable", "terminal"],
      modals: kind === "close" ? ["settings", "shortcuts", "other"] : [],
      resolve: ({ target: element, source, modal }) => {
        if (kind === "close" && modal !== null) {
          return { status: "handled", run: () => {
            (0, import_dsh_client_ui_primitives.closeTopModal)(document);
          } };
        }
        const target = sidebar.focusedTarget(element);
        if (target === void 0 && (source === "iframe" || element?.closest("[data-sidebar-right-session]"))) {
          return { status: "blocked", reason: t("command.stale") };
        }
        if (kind === "refresh") {
          const refresh = target?.occurrence?.commands.refresh;
          if (target === void 0 || refresh === void 0) return { status: "blocked", reason: t("command.noRefresh") };
          return { status: "handled", run: () => {
            if (sidebar.isTargetCurrent(target) && target.occurrence?.commands.refresh === refresh) refresh();
          } };
        }
        if (target !== void 0 && sidebar.canCloseTarget(target)) {
          return { status: "handled", run: () => {
            sidebar.closeTarget(target);
          } };
        }
        if (shortcuts.runtime !== "desktop") return { status: "blocked", reason: t("command.noFocus") };
        return { status: "handled", run: () => {
          if (target === void 0 || sidebar.isTargetCurrent(target)) closeWindow();
        } };
      }
    }));
  }
  return () => {
    for (const dispose of disposers.reverse()) dispose();
  };
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/GuideBody.tsx
var import_react = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/GuideBody.module.css
var GuideBody_default = {
  guide: "GuideBody_guide",
  hero: "GuideBody_hero",
  entry: "GuideBody_entry",
  entryIcon: "GuideBody_entryIcon",
  placeholderInk: "GuideBody_placeholderInk",
  entryText: "GuideBody_entryText",
  entryTitle: "GuideBody_entryTitle",
  entryDescription: "GuideBody_entryDescription",
  titleIcon: "GuideBody_titleIcon",
  entryCell: "GuideBody_entryCell",
  moreAnchor: "GuideBody_moreAnchor",
  moreMenu: "GuideBody_moreMenu"
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/GuideTitle.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function CompassGlyph({ size = 16, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z", stroke: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M10.6101 5.39014L8.99014 8.99014L5.39014 10.6101L7.01014 7.01014L10.6101 5.39014Z", fill: "currentColor" })
  ] });
}
function CubeGlyph({ size = 16, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M7.99998 2.5L12.9 5.2V10.8L7.99998 13.5L3.09998 10.8V5.2L7.99998 2.5Z", stroke: "currentColor", strokeLinejoin: "round" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3.09998 5.19995L7.99998 7.89995M7.99998 7.89995L12.9 5.19995M7.99998 7.89995V13.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function GuideTitle({ useTabInfo }) {
  const { tab } = useTabInfo();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CompassGlyph, { className: GuideBody_default.titleIcon }),
    tab.title
  ] });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/GuideMoreIcon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function GuideMoreIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "svg",
    {
      width: "22",
      height: "22",
      viewBox: "0 0 22 22",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "#A6B2C7",
      strokeWidth: "1.38181",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.45873 5.04102H7.90157C8.57615 5.04102 9.123 5.58787 9.123 6.26244V8.70528C9.123 9.37986 8.57615 9.92671 7.90157 9.92671H5.45873C4.78415 9.92671 4.2373 9.37986 4.2373 8.70528V6.26244C4.2373 5.58787 4.78415 5.04102 5.45873 5.04102Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5.45873 12.9805H7.90157C8.57615 12.9805 9.123 13.5273 9.123 14.2019V16.6447C9.123 17.3193 8.57615 17.8662 7.90157 17.8662H5.45873C4.78415 17.8662 4.2373 17.3193 4.2373 16.6447V14.2019C4.2373 13.5273 4.78415 12.9805 5.45873 12.9805Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M13.3992 12.9805H15.842C16.5166 12.9805 17.0634 13.5273 17.0634 14.2019V16.6447C17.0634 17.3193 16.5166 17.8662 15.842 17.8662H13.3992C12.7246 17.8662 12.1777 17.3193 12.1777 16.6447V14.2019C12.1777 13.5273 12.7246 12.9805 13.3992 12.9805Z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.0692 3.86523V6.91879M15.0692 6.91879V9.97235M15.0692 6.91879H12.0156M15.0692 6.91879H18.1227" })
      ]
    }
  );
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/guide-pins.ts
var import_dsh_client_store = require("@deepseek-ai/dsh-client-store");
var FIXED_GUIDE_KIND = "files";
var NO_CARDS = [];
function guideEntryId(entry) {
  return `${entry.kind}:${entry.id}`;
}
function createGuidePins() {
  const store = (0, import_dsh_client_store.createSnapshotStore)({ unpinned: NO_CARDS });
  return {
    unpinned: { getSnapshot: () => store.getSnapshot().unpinned, subscribe: (listener) => store.subscribe(listener) },
    setPinned: (id, pinned) => {
      const current = store.getSnapshot().unpinned;
      if (id.startsWith(`${FIXED_GUIDE_KIND}:`) || pinned !== current.includes(id)) return;
      store.set({ unpinned: pinned ? current.filter((entry) => entry !== id) : [...current, id] });
    }
  };
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/GuideBody.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var MAX_DESCRIBED_ENTRIES = 4;
function EntryBox({ entry, described, onPick, shortcut }) {
  const Icon = entry.icon ?? CubeGlyph;
  const description = described ? entry.description?.() : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "button",
    {
      type: "button",
      className: GuideBody_default.entry,
      "data-sidebar-right-guide-entry": entry.kind,
      "aria-keyshortcuts": shortcut?.aria,
      onClick: () => {
        onPick(entry);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: GuideBody_default.entryIcon, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { size: description === void 0 ? 22 : 26, className: entry.icon === void 0 ? GuideBody_default.placeholderInk : void 0 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: GuideBody_default.entryText, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: GuideBody_default.entryTitle, children: entry.title() }),
          description !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: GuideBody_default.entryDescription, children: description })
        ] }),
        shortcut !== void 0 && shortcut.keys.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives2.ShortcutKeys, { keys: shortcut.keys })
      ]
    }
  );
}
function GuideMoreMenu({ label, entries, onOpen, onPinnedChange, renderSlot }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const onDismiss = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_dsh_client_ui_primitives2.Menu,
    {
      open,
      onClose: onDismiss,
      portal: true,
      autoFocus: true,
      minWidthFromAnchor: true,
      align: "end",
      className: GuideBody_default.moreAnchor,
      listClassName: GuideBody_default.moreMenu,
      anchor: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "button",
        {
          type: "button",
          className: GuideBody_default.entry,
          "aria-label": label,
          "aria-haspopup": "menu",
          "aria-expanded": open,
          onClick: () => {
            setOpen((value) => !value);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: GuideBody_default.entryIcon, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GuideMoreIcon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: GuideBody_default.entryText, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: GuideBody_default.entryTitle, children: label }) })
          ]
        }
      ),
      children: renderSlot("sidebar.right.tab.guide.actions", { entries, onOpen, onPinnedChange, onDismiss })
    }
  );
}
function ShippedGuide({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: GuideBody_default.guide, "data-sidebar-right-guide": true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: GuideBody_default.hero, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CompassGlyph, { size: 56 }) }),
    children
  ] });
}
function GuideBody({
  useTabInfo,
  useGuideEntries,
  renderSlot,
  renderSlotChain,
  useShortcuts,
  useEntryPins,
  useEntryActions,
  setPinned,
  t
}) {
  const shortcuts = useShortcuts((entries2) => entries2);
  const { tab } = useTabInfo();
  const entries = useGuideEntries((entries2) => entries2);
  const unpinned = useEntryPins((ids) => ids);
  const hasEntryActions = useEntryActions((registered) => registered);
  const open = (kind) => {
    tab.actions.openTab(kind, { replaceTab: true });
    tab.actions.close();
  };
  const visibleEntries = entries.filter((entry) => entry.kind === FIXED_GUIDE_KIND || !unpinned.includes(guideEntryId(entry)));
  const options = {
    hookContext: useTabInfo,
    fallback: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ShippedGuide, { children: [
      visibleEntries.map((entry) => {
        const described = visibleEntries.length <= MAX_DESCRIBED_ENTRIES;
        const description = described ? entry.description?.() : void 0;
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: GuideBody_default.entryCell, children: renderSlot("sidebar.right.tab.guide.entry", {
          entryId: entry.id,
          kind: entry.kind,
          title: entry.title(),
          ...description === void 0 ? {} : { description }
        }, {
          entryKey: entry.providerId,
          hookContext: useTabInfo,
          fallback: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            EntryBox,
            {
              entry,
              described,
              shortcut: shortcuts.find((shortcut) => shortcut.id === entry.commandId),
              onPick: (selected) => {
                open(selected.kind);
              }
            }
          )
        }) }, JSON.stringify([entry.providerId, entry.id]));
      }),
      hasEntryActions && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        GuideMoreMenu,
        {
          label: t("tab.guide.more"),
          entries: entries.filter((entry) => entry.kind !== FIXED_GUIDE_KIND).map((entry) => ({ id: guideEntryId(entry), label: entry.title(), pinned: !unpinned.includes(guideEntryId(entry)) })),
          onOpen: (id) => {
            const entry = entries.find((candidate) => guideEntryId(candidate) === id);
            if (entry !== void 0) open(entry.kind);
          },
          onPinnedChange: setPinned,
          renderSlot
        }
      )
    ] })
  };
  return renderSlotChain("sidebar.right.tab.guide", {}, options);
}

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

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/ExpandButton.tsx
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/ExpandButton.module.css
var ExpandButton_default = {
  button: "ExpandButton_button",
  expanded: "ExpandButton_expanded",
  icon: "ExpandButton_icon"
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/ExpandButton.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function ExpandButton({ sessionId, useStore, actions, t, useShortcuts }) {
  const shortcut = useShortcuts((entries) => entries.find((entry) => entry.id === "sidebar.right.toggle"));
  const expanded = useStore((state) => state.bySession[sessionId]?.layout.expanded ?? false);
  if (expanded && !(0, import_dsh_client_ui_primitives3.isMobileDevice)()) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives3.Tooltip, { label: t("chrome.expand"), shortcutKeys: shortcut?.keys, side: "bottom", delayMs: 500, disabled: expanded, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_dsh_client_ui_primitives3.Button,
    {
      size: "sm",
      className: clsx_default(ExpandButton_default.button, expanded && ExpandButton_default.expanded),
      disabled: expanded,
      "aria-label": t("chrome.expandAria"),
      "aria-keyshortcuts": shortcut?.aria,
      "data-sidebar-right-expand": true,
      onClick: () => {
        actions.setExpanded(sessionId, true);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives3.IconPanelLeftOutlineRegular, { className: ExpandButton_default.icon })
    }
  ) });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/SidebarRight.tsx
var import_react11 = require("react");
var import_dsh_client_ui_primitives8 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_dsh_client_ui_dockkit4 = require("@deepseek-ai/dsh-client-ui-dockkit");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/DockSurface.tsx
var import_react10 = require("react");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/engine/tree.ts
function getNode(state, id) {
  const node2 = state.nodes[id];
  if (node2 === void 0) throw new Error(`layout: unknown node ${id}`);
  return node2;
}
function getPane(state, id) {
  const node2 = getNode(state, id);
  if (node2.kind !== "pane") throw new Error(`layout: ${id} is not a pane`);
  return node2;
}
function getSplit(state, id) {
  const node2 = getNode(state, id);
  if (node2.kind !== "split") throw new Error(`layout: ${id} is not a split`);
  return node2;
}
function getTab(state, id) {
  const tab = state.tabs[id];
  if (tab === void 0) throw new Error(`layout: unknown tab ${id}`);
  return tab;
}
function floatRect(pane) {
  if (pane.host !== "float" || pane.rect === void 0) throw new Error(`layout: ${pane.id} is not floating`);
  return pane.rect;
}
function findTabPane(state, tabId2) {
  for (const node2 of Object.values(state.nodes)) {
    if (node2.kind === "pane" && node2.tabs.includes(tabId2)) return node2;
  }
  throw new Error(`layout: tab ${tabId2} has no pane`);
}
function descend(state, choose) {
  let node2 = getNode(state, state.rootId);
  while (node2.kind === "split") {
    const next = choose(node2);
    if (next === void 0) throw new Error(`layout: split ${node2.id} has no children`);
    node2 = getNode(state, next);
  }
  return node2.id;
}
function topRightPaneId(state) {
  return descend(state, (split) => split.axis === "row" ? split.children.at(-1) : split.children[0]);
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/engine/constraints.ts
var MIN_PANE_FRACTION = 0.12;
var FLOAT_DEFAULT_SIZE = { width: 380, height: 300 };
var FLOAT_MIN_SIZE = { width: 220, height: 140 };
var DOCK_EDGE_FRACTION = 0.25;
function zoneAt(x, y, edge = DOCK_EDGE_FRACTION) {
  let zone = "left";
  let distance = x;
  if (1 - x < distance) {
    zone = "right";
    distance = 1 - x;
  }
  if (y < distance) {
    zone = "top";
    distance = y;
  }
  if (1 - y < distance) {
    zone = "bottom";
    distance = 1 - y;
  }
  return distance < edge ? zone : "center";
}
function clampSizes(sizes, minimum = MIN_PANE_FRACTION) {
  if (sizes.length === 0) return [];
  const floor = Math.min(minimum, 1 / sizes.length);
  const positive = sizes.map((size) => size > 0 ? size : 0);
  const total = positive.reduce((sum, size) => sum + size, 0);
  let shares = total > 0 ? positive.map((size) => size / total) : positive.map(() => 1 / sizes.length);
  const pinned = /* @__PURE__ */ new Set();
  for (; ; ) {
    const under = shares.flatMap((share, index) => !pinned.has(index) && share < floor ? [index] : []);
    if (under.length === 0) return shares;
    for (const index of under) pinned.add(index);
    const remainder = 1 - pinned.size * floor;
    const freeTotal = shares.reduce((sum, share, index) => pinned.has(index) ? sum : sum + share, 0);
    shares = shares.map((share, index) => pinned.has(index) ? floor : share / freeTotal * remainder);
  }
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/engine/geometry.ts
function containsPoint(rect, x, y) {
  return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
}
function zoneInRect(rect, x, y, edge = DOCK_EDGE_FRACTION) {
  if (!(rect.width > 0) || !(rect.height > 0)) return "center";
  return zoneAt((x - rect.x) / rect.width, (y - rect.y) / rect.height, edge);
}
function insertionIndex(tabRects, x) {
  let index = 0;
  for (const rect of tabRects) {
    if (x < rect.x + rect.width / 2) break;
    index += 1;
  }
  return index;
}
var SPLIT_MINIMUMS = { divider: 0, chip: 100, body: 48 };
function halvesFit(measure, minimums = SPLIT_MINIMUMS) {
  const { pane, strip } = measure;
  if (!(pane.width > 0) || !(pane.height > 0) || !(strip.width > 0)) return { row: true, column: true };
  const borders = Math.max(0, pane.width - strip.width);
  const fixed = Math.max(0, strip.width - measure.chipsWidth - measure.fillWidth - (measure.splitControlWidth ?? 0));
  const halfWidth = (pane.width - minimums.divider) / 2 - borders;
  const halfHeight = (pane.height - minimums.divider) / 2 - borders;
  return {
    row: halfWidth >= fixed + minimums.chip,
    column: halfHeight >= strip.height + minimums.body
  };
}
var DRAG_THRESHOLD = 4;
function passedThreshold(startX, startY, x, y) {
  return Math.abs(x - startX) >= DRAG_THRESHOLD || Math.abs(y - startY) >= DRAG_THRESHOLD;
}
function dividerSizes(sizes, index, delta) {
  const before = sizes[index];
  const after = sizes[index + 1];
  if (before === void 0 || after === void 0) return [...sizes];
  const next = [...sizes];
  next[index] = before + delta;
  next[index + 1] = after - delta;
  return next;
}
function movedRect(rect, dx, dy) {
  return { ...rect, x: rect.x + dx, y: rect.y + dy };
}
function resizedRect(rect, dx, dy, min) {
  return {
    ...rect,
    width: Math.max(min.width, rect.width + dx),
    height: Math.max(min.height, rect.height + dy)
  };
}
var FLOAT_RESISTANCE = 120;
function clampAxis(value, min, max) {
  return Math.max(min, Math.min(value, max));
}
function legalFloatRect(rect, bounds) {
  const width = Math.min(rect.width, bounds.width);
  const height = Math.min(rect.height, bounds.height - bounds.top);
  return {
    x: clampAxis(rect.x, 0, bounds.width - width),
    y: clampAxis(rect.y, bounds.top, bounds.height - height),
    width,
    height
  };
}
function resist(overflow) {
  return Math.sign(overflow) * FLOAT_RESISTANCE * Math.abs(overflow) / (FLOAT_RESISTANCE + Math.abs(overflow));
}
function resistedRect(desired, bounds) {
  const legal = legalFloatRect(desired, bounds);
  return { ...legal, x: legal.x + resist(desired.x - legal.x), y: legal.y + resist(desired.y - legal.y) };
}
var MAX_INVERTIBLE = FLOAT_RESISTANCE * 0.99;
function unresist(displacement) {
  const shown = Math.min(Math.abs(displacement), MAX_INVERTIBLE);
  return Math.sign(displacement) * FLOAT_RESISTANCE * shown / (FLOAT_RESISTANCE - shown);
}
function unresistedRect(drawn, bounds) {
  const legal = legalFloatRect(drawn, bounds);
  return { ...legal, x: legal.x + unresist(drawn.x - legal.x), y: legal.y + unresist(drawn.y - legal.y) };
}
function boundedResize(rect, bounds, min) {
  return {
    ...rect,
    width: Math.max(min.width, Math.min(rect.width, bounds.width - rect.x)),
    height: Math.max(min.height, Math.min(rect.height, bounds.height - rect.y))
  };
}
function floatRectAt(x, y, size) {
  return { x: Math.max(0, x - GRAB_OFFSET.x), y: Math.max(0, y - GRAB_OFFSET.y), ...size };
}
var GRAB_OFFSET = { x: 60, y: 14 };

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/measure.ts
var NO_RECT = { x: 0, y: 0, width: 0, height: 0 };
var UNMEASURED = { row: true, column: true };
function rectOf(element) {
  return element === null ? NO_RECT : element.getBoundingClientRect();
}
function px(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
function paneElements(root) {
  const panes = [];
  for (const pane of root.querySelectorAll("[data-dockkit-pane]")) {
    const paneId2 = pane.dataset.dockkitPane;
    if (paneId2 === void 0) continue;
    panes.push([paneId2, pane]);
  }
  return panes;
}
function chipMinimum(root) {
  const chip = root.querySelector("[data-dockkit-tab]");
  if (chip === null) return SPLIT_MINIMUMS.chip;
  const style = getComputedStyle(chip);
  const min = px(style.minWidth);
  if (min <= 0) return SPLIT_MINIMUMS.chip;
  if (style.boxSizing === "border-box") return min;
  return min + px(style.paddingLeft) + px(style.paddingRight) + px(style.borderLeftWidth) + px(style.borderRightWidth);
}
function dividerSize(root) {
  const divider = root.querySelector("[data-dockkit-divider]");
  if (divider === null) return SPLIT_MINIMUMS.divider;
  const { width, height } = divider.getBoundingClientRect();
  const thickness = Math.min(width, height);
  return thickness > 0 ? thickness : SPLIT_MINIMUMS.divider;
}
function splitControlFootprint(pane) {
  const control = pane.querySelector("[data-dockkit-split-button]");
  if (control === null) return 0;
  const width = control.getBoundingClientRect().width;
  if (!(width > 0)) return 0;
  const strip = pane.querySelector("[data-dockkit-strip]");
  return width + (strip === null ? 0 : px(getComputedStyle(strip).columnGap));
}
function measurePaneFits(root, splitHiddenWhenBlocked = false) {
  const minimums = { divider: dividerSize(root), chip: chipMinimum(root), body: SPLIT_MINIMUMS.body };
  const fits = /* @__PURE__ */ new Map();
  for (const [paneId2, pane] of paneElements(root)) {
    fits.set(paneId2, halvesFit({
      pane: rectOf(pane),
      strip: rectOf(pane.querySelector("[data-dockkit-strip]")),
      chipsWidth: rectOf(pane.querySelector("[data-dockkit-strip-tabs]")).width,
      fillWidth: rectOf(pane.querySelector("[data-dockkit-strip-fill]")).width,
      splitControlWidth: splitHiddenWhenBlocked ? splitControlFootprint(pane) : 0
    }, minimums));
  }
  return fits;
}
function fitOf(fits, paneId2) {
  return fits.get(paneId2) ?? UNMEASURED;
}
function sameFits(a, b) {
  if (a.size !== b.size) return false;
  for (const [paneId2, fit] of a) {
    const other = b.get(paneId2);
    if (other === void 0 || other.row !== fit.row || other.column !== fit.column) return false;
  }
  return true;
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/pointer.ts
var import_react2 = require("react");
function capturePointer(element, pointerId) {
  if (typeof element.setPointerCapture !== "function") return;
  element.setPointerCapture(pointerId);
}
function followPointer(element, pointerId, followers) {
  capturePointer(element, pointerId);
  const controller = new AbortController();
  const { signal } = controller;
  element.dataset.dockkitPointer = String(pointerId);
  signal.addEventListener("abort", () => {
    if (element.dataset.dockkitPointer === String(pointerId)) delete element.dataset.dockkitPointer;
  }, { once: true });
  const own = (event) => event.pointerId === pointerId;
  window.addEventListener("pointermove", (event) => {
    if (own(event)) followers.move(event);
  }, { signal });
  window.addEventListener("pointerup", (event) => {
    if (!own(event)) return;
    controller.abort();
    followers.up(event);
  }, { signal });
  window.addEventListener("pointercancel", (event) => {
    if (!own(event)) return;
    controller.abort();
    followers.cancel();
  }, { signal });
  return () => {
    controller.abort();
  };
}
function useGesture(reset) {
  const inFlight = (0, import_react2.useRef)(void 0);
  (0, import_react2.useEffect)(() => () => {
    inFlight.current?.stop();
  }, []);
  return (element, pointerId, followers) => {
    inFlight.current?.end();
    const settle = () => {
      inFlight.current = void 0;
      reset();
    };
    const stop = followPointer(element, pointerId, {
      move: followers.move,
      up: (event) => {
        settle();
        followers.up(event);
      },
      cancel: settle
    });
    inFlight.current = {
      stop,
      end: () => {
        stop();
        settle();
      }
    };
  };
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/PaneTree.tsx
var import_react7 = require("react");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabPanel.tsx
var import_react6 = require("react");
var import_dsh_client_ui_primitives6 = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabBody.tsx
var import_react3 = require("react");
var TabBody = (0, import_react3.memo)(function TabBody2({ tab, renderTab }) {
  return renderTab(tab);
});

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabMenu.tsx
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_react4 = require("react");
var import_react_dom = require("react-dom");
var import_dsh_client_ui_primitives5 = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/dockkit.module.css
var dockkit_default = {
  split: "dockkit_split",
  splitRow: "dockkit_splitRow",
  splitColumn: "dockkit_splitColumn",
  splitCell: "dockkit_splitCell",
  divider: "dockkit_divider",
  surface: "dockkit_surface",
  tabLayout: "dockkit_tabLayout",
  tabCell: "dockkit_tabCell",
  emptyTabHost: "dockkit_emptyTabHost",
  floatingCell: "dockkit_floatingCell",
  tabHost: "dockkit_tabHost",
  float: "dockkit_float",
  tabHostHeader: "dockkit_tabHostHeader",
  tabHostBody: "dockkit_tabHostBody",
  tabLayoutDivider: "dockkit_tabLayoutDivider",
  tabLayoutDividerVertical: "dockkit_tabLayoutDividerVertical",
  pane: "dockkit_pane",
  tabStrip: "dockkit_tabStrip",
  stripTabs: "dockkit_stripTabs",
  stripFill: "dockkit_stripFill",
  stripChrome: "dockkit_stripChrome",
  slot: "dockkit_slot",
  tabActive: "dockkit_tabActive",
  slotCaret: "dockkit_slotCaret",
  tab: "dockkit_tab",
  tabTitle: "dockkit_tabTitle",
  floatTitle: "dockkit_floatTitle",
  tabClose: "dockkit_tabClose",
  addTab: "dockkit_addTab",
  tabQuiet: "dockkit_tabQuiet",
  tabDragging: "dockkit_tabDragging",
  iconButton: "dockkit_iconButton",
  menu: "dockkit_menu",
  menuItem: "dockkit_menuItem",
  paneBody: "dockkit_paneBody",
  empty: "dockkit_empty",
  dockScrim: "dockkit_dockScrim",
  dockScrimIn: "dockkit_dockScrimIn",
  dockHint: "dockkit_dockHint",
  dockHintCard: "dockkit_dockHintCard",
  dockHintIn: "dockkit_dockHintIn",
  dockHintLabel: "dockkit_dockHintLabel",
  floatHeader: "dockkit_floatHeader",
  dockGlyph: "dockkit_dockGlyph",
  floatBody: "dockkit_floatBody",
  floatResize: "dockkit_floatResize"
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabMenu.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var MENU_GAP = 4;
function placeMenu(anchor, menu) {
  const rect = anchor.getBoundingClientRect();
  const width = menu.offsetWidth;
  const left = rect.left + width + MENU_GAP > window.innerWidth ? Math.max(MENU_GAP, rect.right - width) : rect.left;
  return { top: rect.bottom + MENU_GAP, left };
}
function TabMenu({ labels, anchor, onClose, onDismiss, extras }) {
  const self = (0, import_react4.useRef)(null);
  const [position, setPosition] = (0, import_react4.useState)(void 0);
  const hasItems = onClose !== void 0 || import_react4.Children.toArray(extras).some((item) => item !== "");
  (0, import_react4.useLayoutEffect)(() => {
    if (self.current === null) return;
    setPosition(placeMenu(anchor, self.current));
  }, [anchor, hasItems]);
  (0, import_react4.useEffect)(() => {
    const menu = self.current;
    if (menu === null) return void 0;
    const document2 = menu.ownerDocument;
    const composition = (0, import_dsh_client_ui_primitives5.observeComposition)(document2);
    const onKeyDown = (event) => {
      if (composition.guards(event) || event.defaultPrevented || event.key !== "Escape" || event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) return;
      const top = [...document2.querySelectorAll(import_dsh_client_ui_primitives5.modalSelector)].at(-1);
      if (top !== menu) return;
      event.preventDefault();
      if (event.repeat) return;
      const restoreFocus = menu.contains(document2.activeElement);
      onDismiss();
      if (restoreFocus) (0, import_dsh_client_ui_primitives5.focusWithoutRing)(anchor);
    };
    document2.addEventListener("keydown", onKeyDown, true);
    const onPointerDown = (event) => {
      if (event.target instanceof Node && menu.contains(event.target)) return;
      onDismiss();
    };
    window.addEventListener("pointerdown", onPointerDown, true);
    return () => {
      composition.dispose();
      document2.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("pointerdown", onPointerDown, true);
    };
  }, [anchor, onDismiss, hasItems]);
  if (!hasItems) return null;
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      import_dsh_client_ui_primitives4.MenuSurface,
      {
        className: dockkit_default.menu,
        ref: self,
        role: "menu",
        "data-dockkit-tab-menu": true,
        style: position ?? { visibility: "hidden", top: 0, left: 0 },
        onPointerDown: (event) => {
          event.stopPropagation();
        },
        onClick: (event) => {
          event.stopPropagation();
        },
        onAuxClick: (event) => {
          event.stopPropagation();
        },
        children: [
          onClose !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", role: "menuitem", className: dockkit_default.menuItem, "data-dockkit-menu-close": true, onClick: onClose, children: labels.closeTab }),
          extras
        ]
      }
    ),
    document.body
  );
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabTitle.tsx
var import_react5 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
function markClipped(element) {
  if (element.scrollWidth > element.clientWidth + 1) element.dataset.dockkitTabClipped = "";
  else delete element.dataset.dockkitTabClipped;
}
function TabTitle({ children }) {
  const span = (0, import_react5.useRef)(null);
  (0, import_react5.useLayoutEffect)(() => {
    if (span.current !== null) markClipped(span.current);
  });
  (0, import_react5.useLayoutEffect)(() => {
    const element = span.current;
    if (element === null || typeof ResizeObserver === "undefined") return void 0;
    const observer = new ResizeObserver(() => {
      markClipped(element);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { ref: span, className: dockkit_default.tabTitle, "data-dockkit-tab-title": true, children });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabPanel.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var PANEL_FRAME = "M9.67272 0.522841C10.8339 0.522841 11.76 0.522714 12.4963 0.602493C13.2453 0.683657 13.8789 0.854248 14.4264 1.25197C14.7504 1.48739 15.0355 1.77247 15.2709 2.0965C15.6686 2.64394 15.8392 3.27758 15.9204 4.02655C16.0002 4.7629 16 5.68895 16 6.85014V9.14986C16 10.3111 16.0002 11.2371 15.9204 11.9735C15.8392 12.7224 15.6686 13.3561 15.2709 13.9035C15.0355 14.2275 14.7504 14.5126 14.4264 14.748C13.8789 15.1458 13.2453 15.3163 12.4963 15.3975C11.76 15.4773 10.8339 15.4772 9.67272 15.4772H6.3273C5.16611 15.4772 4.24006 15.4773 3.50371 15.3975C2.75474 15.3163 2.1211 15.1458 1.57366 14.748C1.24963 14.5126 0.964549 14.2275 0.729131 13.9035C0.331407 13.3561 0.160817 12.7224 0.0796529 11.9735C-0.000126137 11.2371 1.25338e-09 10.3111 1.25338e-09 9.14986V6.85014C1.25329e-09 5.68895 -0.000126137 4.7629 0.0796529 4.02655C0.160817 3.27758 0.331407 2.64394 0.729131 2.0965C0.964549 1.77247 1.24963 1.48739 1.57366 1.25197C2.1211 0.854248 2.75474 0.683657 3.50371 0.602493C4.24006 0.522714 5.16611 0.522841 6.3273 0.522841H9.67272ZM4.1828 14.0873L5.54303 14.1118C5.78636 14.1128 6.04709 14.1169 6.3273 14.1169H9.67272C10.8639 14.1169 11.7032 14.1164 12.3493 14.0465C12.9824 13.9779 13.3497 13.8494 13.6268 13.6482C13.8354 13.4966 14.0195 13.3125 14.1711 13.1039C14.3723 12.8268 14.5007 12.4595 14.5693 11.8264C14.6393 11.1803 14.6398 10.341 14.6398 9.14986V6.85014C14.6398 5.65896 14.6393 4.81967 14.5693 4.1736C14.5007 3.54048 14.3723 3.17318 14.1711 2.89609C14.0195 2.68747 13.8354 2.50337 13.6268 2.35179C13.3497 2.1506 12.9824 2.02212 12.3493 1.95353C11.7032 1.88358 10.8639 1.88307 9.67272 1.88307H6.3273C6.04709 1.88307 5.78636 1.8862 5.54303 1.88715L4.1828 1.91166C3.99125 1.9216 3.8148 1.93577 3.65076 1.95353C3.01764 2.02212 2.65034 2.1506 2.37325 2.35179C2.16463 2.50337 1.98052 2.68747 1.82895 2.89609C1.62776 3.17318 1.49928 3.54048 1.43069 4.1736C1.36074 4.81967 1.36023 5.65896 1.36023 6.85014V9.14986C1.36023 10.341 1.36074 11.1803 1.43069 11.8264C1.49928 12.4595 1.62776 12.8268 1.82895 13.1039C1.98052 13.3125 2.16463 13.4966 2.37325 13.6482C2.65034 13.8494 3.01764 13.9779 3.65076 14.0465C3.81478 14.0642 3.99127 14.0774 4.1828 14.0873Z";
function SplitGlyph() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M13.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5Z", stroke: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M8 1.5V14.5", stroke: "currentColor" })
  ] });
}
var ZONE_FILL = {
  center: "M4.56 3.48H11.44A1.6 1.6 0 0 1 13.04 5.08V10.92A1.6 1.6 0 0 1 11.44 12.52H4.56A1.6 1.6 0 0 1 2.96 10.92V5.08A1.6 1.6 0 0 1 4.56 3.48Z",
  left: "M4 0.523H8V15.477H4A4 4 0 0 1 0 11.477V4.523A4 4 0 0 1 4 0.523Z",
  right: "M8 0.523H12A4 4 0 0 1 16 4.523V11.477A4 4 0 0 1 12 15.477H8Z",
  top: "M0 8V4.523A4 4 0 0 1 4 0.523H12A4 4 0 0 1 16 4.523V8Z",
  bottom: "M0 8H16V11.477A4 4 0 0 1 12 15.477H4A4 4 0 0 1 0 11.477Z"
};
function ZoneGlyph({ zone }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: PANEL_FRAME, fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: ZONE_FILL[zone], fill: "currentColor" })
  ] });
}
function DockHint({ zone, active, labels }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: dockkit_default.dockHint, "data-dockkit-dock-zone": zone, "data-dockkit-drop-active": active || void 0, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: dockkit_default.dockHintCard, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ZoneGlyph, { zone }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: dockkit_default.dockHintLabel, children: labels.dropZone[zone] })
  ] }) });
}
function chipToFocus(key, tabs, tabId2) {
  const count = tabs.length;
  const index = tabs.indexOf(tabId2);
  switch (key) {
    case "ArrowLeft":
      return tabs[(index - 1 + count) % count];
    case "ArrowRight":
      return tabs[(index + 1) % count];
    case "Home":
      return tabs[0];
    case "End":
      return tabs.at(-1);
    default:
      return void 0;
  }
}
function selects(key) {
  return key === "Enter" || key === " ";
}
function hiddenSides(box) {
  const start = box.scrollLeft > 1;
  const end = box.scrollLeft + box.clientWidth < box.scrollWidth - 1;
  if (start && end) return "start end";
  if (start) return "start";
  if (end) return "end";
  return void 0;
}
function useStripScrollFades(box, tabs) {
  (0, import_react6.useLayoutEffect)(() => {
    const element = box.current;
    if (element === null) return void 0;
    const apply2 = () => {
      const sides = hiddenSides(element);
      if (sides === void 0) delete element.dataset.dockkitStripScroll;
      else element.dataset.dockkitStripScroll = sides;
    };
    apply2();
    element.addEventListener("scroll", apply2, { passive: true });
    const observer = typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver(apply2);
    observer?.observe(element);
    return () => {
      element.removeEventListener("scroll", apply2);
      observer?.disconnect();
    };
  }, [box, tabs]);
}
function jumpTo(element, left) {
  element.style.scrollBehavior = "auto";
  element.scrollLeft = left;
  element.style.removeProperty("scroll-behavior");
}
function useActiveChipInView(box, chips, tabs, activeTabId, paneId2, offsets) {
  const placed = (0, import_react6.useRef)(void 0);
  (0, import_react6.useLayoutEffect)(() => {
    if (offsets === void 0) return void 0;
    const element = box.current;
    if (element === null) return void 0;
    return () => {
      offsets.set(paneId2, element.scrollLeft);
    };
  }, [box, paneId2, offsets]);
  (0, import_react6.useLayoutEffect)(() => {
    const element = box.current;
    const chip = activeTabId === void 0 ? void 0 : chips.get(activeTabId);
    if (element === null || chip === void 0) return;
    const first = placed.current !== paneId2;
    placed.current = paneId2;
    const recorded = first ? offsets?.get(paneId2) : void 0;
    if (recorded !== void 0) jumpTo(element, recorded);
    const bounds = element.getBoundingClientRect();
    const rect = chip.getBoundingClientRect();
    let delta = 0;
    if (rect.left < bounds.left) delta = rect.left - bounds.left - STRIP_FADE;
    else if (rect.right > bounds.right) delta = rect.right - bounds.right + STRIP_FADE;
    if (delta === 0) return;
    if (first && recorded === void 0) jumpTo(element, element.scrollLeft + delta);
    else element.scrollLeft += delta;
  }, [box, chips, tabs, activeTabId, paneId2, offsets]);
}
var STRIP_FADE = 24;
function splitBlockedTitle(labels, block) {
  switch (block) {
    case "budget":
      return labels.splitPaneDisabled;
    case "width":
      return labels.splitPaneNarrow;
  }
}
function TabStrip({ state, pane, callbacks, offsets }) {
  const [menu, setMenu] = (0, import_react6.useState)(void 0);
  const [chips] = (0, import_react6.useState)(() => /* @__PURE__ */ new Map());
  const stripTabs = (0, import_react6.useRef)(null);
  useStripScrollFades(stripTabs, pane.tabs);
  useActiveChipInView(stripTabs, chips, pane.tabs, pane.activeTabId, pane.id, offsets);
  const block = callbacks.splitBlock(pane.id);
  const target = callbacks.dropTarget;
  const stripIndex = target !== void 0 && target.kind === "strip" && target.paneId === pane.id ? target.index : void 0;
  const activate = (tabId2) => {
    if (state.activePaneId === pane.id && pane.activeTabId === tabId2) return;
    callbacks.onFocusTab(tabId2);
  };
  const focusChip = (tabId2) => {
    const chip = chips.get(tabId2);
    if (chip === void 0) return;
    chip.focus();
  };
  return (
    // The window drag claim is withdrawn while any pane floats: a floating pane
    // renders among this surface's cells in tab-id order, so one sorted before this
    // row would sit earlier in the document, where this row's drag box overrides the
    // float's own subtraction and swallows the panel's header and controls.
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "div",
      {
        className: dockkit_default.tabStrip,
        role: "tablist",
        "data-dockkit-strip": pane.id,
        "data-window-drag": state.floats.length === 0 ? true : void 0,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { ref: stripTabs, className: dockkit_default.stripTabs, role: "presentation", "data-dockkit-strip-tabs": pane.id, "data-window-drag-exclude": true, children: [
            pane.tabs.map((tabId2, index) => {
              const tab = getTab(state, tabId2);
              const selected = tabId2 === pane.activeTabId;
              const closable = callbacks.canCloseTab(tabId2);
              const quiet = !closable && pane.tabs.length === 1;
              const onKeyDown = (event) => {
                if (event.target !== event.currentTarget) return;
                if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.nativeEvent.isComposing) return;
                const next = chipToFocus(event.key, pane.tabs, tabId2);
                if (next !== void 0) {
                  event.preventDefault();
                  focusChip(next);
                  return;
                }
                if (selects(event.key)) {
                  event.preventDefault();
                  activate(tabId2);
                }
              };
              return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react6.Fragment, { children: [
                (index > 0 || stripIndex === index) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "div",
                  {
                    className: clsx_default(dockkit_default.slot, stripIndex === index && dockkit_default.slotCaret),
                    "data-dockkit-caret": stripIndex === index ? index : void 0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                  "div",
                  {
                    role: "tab",
                    "aria-selected": selected,
                    tabIndex: selected ? 0 : -1,
                    className: clsx_default(
                      dockkit_default.tab,
                      selected && dockkit_default.tabActive,
                      quiet && dockkit_default.tabQuiet,
                      callbacks.draggingTabId === tabId2 && dockkit_default.tabDragging
                    ),
                    "data-dockkit-tab": tabId2,
                    "data-dockkit-tab-quiet": quiet || void 0,
                    ref: (element) => {
                      if (element === null) chips.delete(tabId2);
                      else chips.set(tabId2, element);
                    },
                    onPointerDown: (event) => {
                      if (event.button !== 0) return;
                      callbacks.onTabPressed(tabId2, event);
                    },
                    onMouseDown: (event) => {
                      if (event.button === 1) event.preventDefault();
                    },
                    onAuxClick: (event) => {
                      if (event.button !== 1) return;
                      event.preventDefault();
                      event.stopPropagation();
                      if (closable && event.buttons === 0) callbacks.onCloseTab(tabId2);
                    },
                    onClick: (event) => {
                      event.stopPropagation();
                      activate(tabId2);
                    },
                    ...callbacks.getTabTriggerProps?.(tab, pane.id, { onKeyDown, tabIndex: selected ? 0 : -1 }) ?? {
                      onKeyDown,
                      onContextMenu: (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        const anchor = event.currentTarget;
                        setMenu((current) => current?.tabId === tabId2 ? void 0 : { tabId: tabId2, anchor });
                      }
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TabTitle, { children: callbacks.renderTabTitle?.(tab) ?? tab.title }),
                      closable && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_dsh_client_ui_primitives6.Tooltip, { disabled: menu !== void 0 || callbacks.tabMenuOpen === true, label: callbacks.labels.closeTab, shortcutKeys: callbacks.labels.closeTabKeys, side: "bottom", delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                        "button",
                        {
                          type: "button",
                          className: dockkit_default.tabClose,
                          "aria-label": callbacks.labels.closeTab,
                          "aria-keyshortcuts": callbacks.labels.closeTabShortcut,
                          "data-dockkit-tab-close": tabId2,
                          onPointerDown: (event) => {
                            event.stopPropagation();
                          },
                          onClick: (event) => {
                            event.stopPropagation();
                            callbacks.onCloseTab(tabId2);
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_dsh_client_ui_primitives6.IconCloseFillRegular, { size: 14 })
                        }
                      ) }),
                      menu?.tabId === tabId2 && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                        TabMenu,
                        {
                          labels: callbacks.labels,
                          anchor: menu.anchor,
                          onClose: closable ? () => {
                            setMenu(void 0);
                            callbacks.onCloseTab(tabId2);
                          } : void 0,
                          onDismiss: () => {
                            setMenu(void 0);
                          },
                          extras: callbacks.renderTabMenuItems?.(tab, () => {
                            setMenu(void 0);
                          })
                        }
                      )
                    ]
                  }
                )
              ] }, tabId2);
            }),
            stripIndex === pane.tabs.length && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: clsx_default(dockkit_default.slot, dockkit_default.slotCaret), "data-dockkit-caret": stripIndex })
          ] }),
          callbacks.canAddTab(pane.id) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_dsh_client_ui_primitives6.Tooltip, { label: callbacks.labels.addTab, side: "bottom", delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              type: "button",
              className: dockkit_default.addTab,
              "aria-label": callbacks.labels.addTab,
              "data-dockkit-add-tab": pane.id,
              onClick: (event) => {
                event.stopPropagation();
                callbacks.onAddTab(pane.id);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_dsh_client_ui_primitives6.IconPlusOutlineRegular, { size: 14 })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: dockkit_default.stripFill, "data-dockkit-strip-fill": true }),
          !(callbacks.hideSplitWhenBlocked && block !== void 0) && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_dsh_client_ui_primitives6.Tooltip, { label: block === void 0 ? callbacks.labels.splitPane : splitBlockedTitle(callbacks.labels, block), shortcutKeys: callbacks.labels.splitPaneKeys, side: "bottom", delayMs: 500, openOnClick: block !== void 0, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "span",
            {
              "data-dockkit-split-control": true,
              tabIndex: block === void 0 ? void 0 : 0,
              "aria-label": block === void 0 ? void 0 : splitBlockedTitle(callbacks.labels, block),
              onClick: (event) => {
                if (block !== void 0) event.stopPropagation();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "button",
                {
                  type: "button",
                  className: dockkit_default.iconButton,
                  "aria-label": callbacks.labels.splitPane,
                  "aria-keyshortcuts": callbacks.labels.splitPaneShortcut,
                  disabled: block !== void 0,
                  "data-dockkit-split-button": pane.id,
                  "data-dockkit-split-blocked": block,
                  onClick: (event) => {
                    event.stopPropagation();
                    callbacks.onSplitPane(pane.id);
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SplitGlyph, {})
                }
              )
            }
          ) }),
          pane.id === callbacks.chromePaneId && callbacks.chrome !== void 0 && // The embedder's controls report their own intents; the pane's
          // click-to-focus must not add a focus entry to each of them.
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "div",
            {
              className: dockkit_default.stripChrome,
              "data-dockkit-strip-chrome": true,
              onClick: (event) => {
                event.stopPropagation();
              },
              children: callbacks.chrome
            }
          )
        ]
      }
    )
  );
}
function PaneDropHints({ pane, callbacks }) {
  const target = callbacks.dropTarget;
  const zone = target?.kind === "zone" && target.paneId === pane.id ? target.zone : void 0;
  if (zone === void 0) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: dockkit_default.dockScrim, "data-dockkit-dock-scrim": true }),
    callbacks.horizontalDrops && zone !== "center" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DockHint, { zone: "left", active: zone === "left", labels: callbacks.labels }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DockHint, { zone: "right", active: zone === "right", labels: callbacks.labels })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DockHint, { zone, active: true, labels: callbacks.labels })
  ] });
}
function TabPanel({ state, pane, callbacks }) {
  const active = pane.activeTabId === void 0 ? void 0 : getTab(state, pane.activeTabId);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "section",
    {
      className: dockkit_default.pane,
      "data-dockkit-pane": pane.id,
      tabIndex: -1,
      "data-dockkit-pane-active": state.activePaneId === pane.id || void 0,
      onClick: () => {
        if (state.activePaneId !== pane.id) callbacks.onFocusPane(pane.id);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TabStrip, { state, pane, callbacks }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: dockkit_default.paneBody, "data-dockkit-pane-body": "", children: [
          active === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: dockkit_default.empty, children: callbacks.labels.emptyPane }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TabBody, { tab: active, renderTab: callbacks.renderTab }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaneDropHints, { pane, callbacks })
        ] })
      ]
    }
  );
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/PaneTree.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabLayout.tsx
var import_react9 = require("react");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/FloatLayer.tsx
var import_react8 = require("react");
var import_dsh_client_ui_primitives7 = require("@deepseek-ai/dsh-client-ui-primitives");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/engine/spring.ts
var RESPONSE = 0.32;
var DAMPING_RATIO = 0.72;
var OMEGA = 2 * Math.PI / RESPONSE;
var SUBSTEP = 1 / 480;
var REST_DISTANCE = 1;
var REST_SPEED = 60;
var SPRING_MAX_VELOCITY = 1500;
var SPRING_DEADLINE_MS = 900;
var SPRING_MAX_FRAME_MS = 64;
var SPRING_STALL_MS = 250;
function stepSpring(axis, target, dtSeconds) {
  const steps = Math.max(1, Math.ceil(dtSeconds / SUBSTEP));
  const h = dtSeconds / steps;
  let { position, velocity } = axis;
  for (let step = 0; step < steps; step++) {
    velocity += (-OMEGA * OMEGA * (position - target) - 2 * DAMPING_RATIO * OMEGA * velocity) * h;
    position += velocity * h;
  }
  return { position, velocity };
}
function launchVelocity(position, target, velocity, reach) {
  const offset = position - target;
  if (offset === 0) return 0;
  if (Math.sign(velocity) !== Math.sign(offset)) return velocity;
  return Math.sign(offset) * Math.min(Math.abs(velocity), OMEGA * Math.max(0, reach - Math.abs(offset)));
}
function springSettled(axis, target) {
  return Math.abs(axis.position - target) <= REST_DISTANCE && Math.abs(axis.velocity) <= REST_SPEED;
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/FloatLayer.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function draggedRect(drag, x, y) {
  const dx = x - drag.originX;
  const dy = y - drag.originY;
  return drag.mode === "move" ? movedRect(drag.rect, dx, dy) : resizedRect(drag.rect, dx, dy, FLOAT_MIN_SIZE);
}
function sameRect(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function raised(state, paneId2) {
  return state.activePaneId === paneId2 && state.floats.at(-1) === paneId2;
}
function floatBounds() {
  const root = document.documentElement;
  const windows = root.hasAttribute("data-windows-titlebar");
  const caption = windows && !root.hasAttribute("data-fullscreen") ? Number.parseFloat(root.style.getPropertyValue("--dsh-windows-titlebar-height")) : 0;
  return { top: windows ? (Number.isFinite(caption) ? caption : 0) + 20 : 0, width: window.innerWidth, height: window.innerHeight };
}
function reducedMotion() {
  return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
var VELOCITY_WINDOW_MS = 100;
function sampleDrawn(samples, t, rect) {
  samples.push({ t, x: rect.x, y: rect.y });
  while (t - samples[0].t > VELOCITY_WINDOW_MS) samples.shift();
}
function releaseVelocity(samples) {
  const first = samples[0];
  const last = samples[samples.length - 1];
  if (last.t === first.t) return { x: 0, y: 0 };
  const rate = (travel) => Math.max(-SPRING_MAX_VELOCITY, Math.min(SPRING_MAX_VELOCITY, travel / (last.t - first.t) * 1e3));
  return { x: rate(last.x - first.x), y: rate(last.y - first.y) };
}
function floatStyle(rect, lifted) {
  if (lifted) return { left: rect.x, top: rect.y, width: rect.width, height: rect.height };
  return {
    "--dsh-dockkit-float-x": `${rect.x}px`,
    "--dsh-dockkit-float-y": `${rect.y}px`,
    "--dsh-dockkit-float-width": `${rect.width}px`,
    "--dsh-dockkit-float-height": `${rect.height}px`
  };
}
function useFloatGestures(state, intents) {
  const [preview, setPreview] = (0, import_react8.useState)(void 0);
  const [bounds, setBounds] = (0, import_react8.useState)(floatBounds);
  const area = (0, import_react8.useRef)(bounds);
  const latest = (0, import_react8.useRef)(state);
  latest.current = state;
  const settling = (0, import_react8.useRef)(void 0);
  const begin = useGesture(() => {
    setPreview(void 0);
  });
  const cancelSettling = (0, import_react8.useRef)(() => {
    const running = settling.current;
    if (running === void 0) return false;
    cancelAnimationFrame(running.frame);
    settling.current = void 0;
    return true;
  }).current;
  (0, import_react8.useEffect)(() => {
    const resize = () => {
      if (cancelSettling()) setPreview(void 0);
      area.current = floatBounds();
      setBounds(area.current);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelSettling();
    };
  }, [cancelSettling]);
  const frame = () => {
    const running = settling.current;
    const now = performance.now();
    const gap = now - running.last;
    running.last = now;
    const layout2 = latest.current;
    const recorded = layout2.floats.includes(running.paneId) && sameRect(legalFloatRect(floatRect(getPane(layout2, running.paneId)), area.current), running.target);
    if (recorded && gap <= SPRING_STALL_MS && now - running.started < SPRING_DEADLINE_MS) {
      const dt = Math.min(gap, SPRING_MAX_FRAME_MS) / 1e3;
      running.x = stepSpring(running.x, running.target.x, dt);
      running.y = stepSpring(running.y, running.target.y, dt);
      if (!springSettled(running.x, running.target.x) || !springSettled(running.y, running.target.y)) {
        setPreview({ paneId: running.paneId, rect: { ...running.target, x: running.x.position, y: running.y.position } });
        running.frame = requestAnimationFrame(frame);
        return;
      }
    }
    settling.current = void 0;
    setPreview(void 0);
  };
  const settle = (paneId2, from, target, velocity) => {
    const axis = (position, goal, speed) => ({ position, velocity: launchVelocity(position, goal, speed, FLOAT_RESISTANCE) });
    const now = performance.now();
    settling.current = {
      paneId: paneId2,
      target,
      started: now,
      last: now,
      x: axis(from.x, target.x, velocity.x),
      y: axis(from.y, target.y, velocity.y),
      frame: requestAnimationFrame(frame)
    };
    setPreview({ paneId: paneId2, rect: from });
  };
  const raise = (paneId2) => {
    if (raised(state, paneId2)) return;
    intents.focusPane(paneId2);
  };
  const rectOf2 = (paneId2, stored) => preview?.paneId === paneId2 ? preview.rect : legalFloatRect(stored, bounds);
  const drag = (mode, paneId2, event) => {
    event.stopPropagation();
    const drawn = settling.current?.paneId === paneId2 ? preview?.rect : void 0;
    if (cancelSettling() && drawn === void 0) setPreview(void 0);
    area.current = floatBounds();
    const reduce = reducedMotion();
    const shown = drawn ?? legalFloatRect(floatRect(getPane(state, paneId2)), area.current);
    const rect = mode === "move" && !reduce ? unresistedRect(shown, area.current) : shown;
    const start = { mode, originX: event.clientX, originY: event.clientY, rect };
    const reached = (x, y) => {
      const desired = draggedRect(start, x, y);
      if (mode === "resize") {
        const resized = boundedResize(desired, area.current, FLOAT_MIN_SIZE);
        const legal2 = legalFloatRect(resized, area.current);
        return { drawn: reduce ? legal2 : resized, legal: legal2 };
      }
      const legal = legalFloatRect(desired, area.current);
      return { drawn: reduce ? legal : resistedRect(desired, area.current), legal };
    };
    const pressed = reached(event.clientX, event.clientY);
    const samples = [];
    sampleDrawn(samples, performance.now(), pressed.drawn);
    begin(event.currentTarget, event.pointerId, {
      move: (moved) => {
        const { drawn: drawn2 } = reached(moved.clientX, moved.clientY);
        sampleDrawn(samples, performance.now(), drawn2);
        setPreview({ paneId: paneId2, rect: drawn2 });
      },
      up: (released) => {
        const { drawn: drawn2, legal } = reached(released.clientX, released.clientY);
        sampleDrawn(samples, performance.now(), drawn2);
        if (sameRect(legal, pressed.legal)) raise(paneId2);
        else if (mode === "move") intents.moveFloat(paneId2, legal.x, legal.y);
        else intents.resizeFloat(paneId2, legal);
        if (!sameRect(drawn2, legal)) settle(paneId2, drawn2, legal, releaseVelocity(samples));
      }
    });
  };
  return { preview, raise, drag, rectOf: rectOf2 };
}
function FloatHeader({ paneId: paneId2, tab, labels, intents, renderTabTitle, canCloseTab: canCloseTab2, drag }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "header",
    {
      className: clsx_default(dockkit_default.tabStrip, dockkit_default.floatHeader),
      "data-dockkit-float-grip": paneId2,
      onPointerDown: (event) => {
        drag("move", paneId2, event);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: clsx_default(dockkit_default.tab, dockkit_default.floatTitle), "data-dockkit-float-title": true, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TabTitle, { children: renderTabTitle?.(tab) ?? tab.title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: dockkit_default.stripFill }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives7.Tooltip, { label: labels.dockFloat, side: "bottom", delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            type: "button",
            className: dockkit_default.iconButton,
            "aria-label": labels.dockFloat,
            "data-dockkit-float-dock": paneId2,
            onPointerDown: (event) => {
              event.stopPropagation();
            },
            onClick: () => {
              intents.unfloatPane(paneId2);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives7.IconPanelLeftOutlineRegular, { className: dockkit_default.dockGlyph })
          }
        ) }),
        (canCloseTab2?.(tab.id) ?? true) && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives7.Tooltip, { label: labels.closeTab, shortcutKeys: labels.closeTabKeys, side: "bottom", delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "button",
          {
            type: "button",
            className: dockkit_default.iconButton,
            "aria-label": labels.closeTab,
            "data-dockkit-float-close": paneId2,
            onPointerDown: (event) => {
              event.stopPropagation();
            },
            onClick: () => {
              intents.closeTab(tab.id);
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives7.IconCloseOutlineRegular, {})
          }
        ) })
      ]
    }
  );
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/TabLayout.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function TabHost({
  state,
  callbacks,
  intents,
  tab,
  pane,
  column,
  vertical,
  floats,
  focusRequest,
  offsets,
  keepMounted,
  active = true
}) {
  const floating = pane.host === "float";
  const selected = floating || pane.activeTabId === tab.id;
  const visible = active && selected && (floating || state.expanded);
  const retained = keepMounted?.(tab) ?? false;
  const [visited, setVisited] = (0, import_react9.useState)(visible);
  if (visible && !visited) setVisited(true);
  const host = (0, import_react9.useRef)(null);
  const body = (0, import_react9.useRef)(null);
  (0, import_react9.useLayoutEffect)(() => {
    const section = host.current;
    section.inert = !visible;
    const focused = document.activeElement;
    if (!visible && focused instanceof HTMLElement && section.contains(focused)) focused.blur();
    const request = focusRequest.current;
    if (!visible || request?.tabId !== tab.id) return;
    focusRequest.current = void 0;
    if (focused !== null && focused !== document.body && focused !== document.documentElement && focused !== request.origin) return;
    const strip = section.querySelector("[data-dockkit-strip]");
    const chip = [...strip?.querySelectorAll("[data-dockkit-tab]") ?? []].find((element) => element.dataset.dockkitTab === tab.id);
    chip?.focus({ preventScroll: true });
  }, [visible, tab.id, focusRequest]);
  (0, import_react9.useEffect)(() => {
    const element = body.current;
    const focus = () => {
      if (!visible) return;
      if (floating) floats.raise(pane.id);
      else if (state.activePaneId !== pane.id) callbacks.onFocusPane(pane.id);
    };
    element.addEventListener("focus", focus, true);
    return () => {
      element.removeEventListener("focus", focus, true);
    };
  }, [visible, floating, floats, pane.id, state.activePaneId, callbacks]);
  const lifted = floating && floats.preview?.paneId === pane.id ? floats.preview.rect : void 0;
  const rect = floating ? floats.rectOf(pane.id, floatRect(pane)) : void 0;
  const depth = lifted === void 0 ? state.floats.indexOf(pane.id) + 1 : state.floats.length + 1;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      className: clsx_default(dockkit_default.tabCell, floating && dockkit_default.floatingCell),
      hidden: !selected,
      "data-dockkit-host": floating ? "float" : "dock",
      "data-dockkit-column": floating || vertical ? void 0 : column,
      "data-dockkit-row": !floating && vertical ? column : void 0,
      style: vertical ? { gridColumn: 1, gridRow: floating ? 1 : column * 2 + 1, order: floating ? depth : 0 } : { gridColumn: floating ? 1 : column * 2 + 1, gridRow: 1, order: floating ? depth : 0 },
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "section",
        {
          ref: host,
          tabIndex: -1,
          className: clsx_default(dockkit_default.tabHost, floating ? dockkit_default.float : dockkit_default.pane),
          "aria-hidden": !visible || void 0,
          "data-dockkit-content": tab.id,
          "data-dockkit-pane": !floating && selected ? pane.id : void 0,
          "data-dockkit-pane-active": !floating && state.activePaneId === pane.id || void 0,
          "data-dockkit-float": floating ? pane.id : void 0,
          "data-dockkit-float-active": floating && state.activePaneId === pane.id || void 0,
          "data-dockkit-column": !floating && !vertical ? column : void 0,
          "data-dockkit-row": !floating && vertical ? column : void 0,
          style: rect === void 0 ? void 0 : floatStyle(rect, lifted !== void 0),
          onPointerDown: () => {
            if (floating) floats.raise(pane.id);
          },
          onClick: () => {
            if (!floating && state.activePaneId !== pane.id) callbacks.onFocusPane(pane.id);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: dockkit_default.tabHostHeader, children: selected && (floating ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              FloatHeader,
              {
                paneId: pane.id,
                tab,
                labels: callbacks.labels,
                intents,
                renderTabTitle: callbacks.renderTabTitle,
                canCloseTab: callbacks.canCloseTab,
                drag: floats.drag
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TabStrip, { state, pane, callbacks, offsets })) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
              "div",
              {
                ref: body,
                className: clsx_default(dockkit_default.tabHostBody, floating ? dockkit_default.floatBody : dockkit_default.paneBody),
                "data-dockkit-pane-body": floating ? void 0 : "",
                children: [
                  visited && (retained || active && selected) ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TabBody, { tab, renderTab: callbacks.renderTab }) : null,
                  !floating && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PaneDropHints, { pane, callbacks })
                ]
              }
            ),
            floating && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "div",
              {
                className: dockkit_default.floatResize,
                "data-dockkit-float-resize": pane.id,
                onPointerDown: (event) => {
                  floats.drag("resize", pane.id, event);
                }
              }
            )
          ]
        }
      )
    }
  );
}
function TabLayout(props) {
  const { state, callbacks, preview } = props;
  const focusRequest = (0, import_react9.useRef)();
  const [offsets] = (0, import_react9.useState)(() => /* @__PURE__ */ new Map());
  const tabCallbacks = {
    ...callbacks,
    onFocusTab: (tabId2) => {
      focusRequest.current = findTabPane(state, tabId2).activeTabId === tabId2 ? void 0 : { tabId: tabId2, origin: document.activeElement };
      callbacks.onFocusTab(tabId2);
    }
  };
  const root = getNode(state, state.rootId);
  if (root.kind === "split" && root.children.length !== 2) {
    throw new Error("DockLayout requires one pane or two split panes");
  }
  const vertical = root.kind === "split" && root.axis === "column";
  const panes = root.kind === "pane" ? [root] : root.children.map((id) => getPane(state, id));
  const sizes = root.kind === "split" ? preview?.splitId === root.id ? preview.sizes : root.sizes : [1];
  const floats = useFloatGestures(state, props.intents);
  const tracks = sizes.map((size) => `minmax(0, ${size}fr)`).join(" 0px ");
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: dockkit_default.tabLayout,
      "data-dockkit-split": root.kind === "split" ? root.id : void 0,
      "data-dockkit-axis": vertical ? "column" : "row",
      style: vertical ? { gridTemplateRows: tracks } : { gridTemplateColumns: tracks },
      children: [
        Object.values(state.tabs).sort((a, b) => a.id.localeCompare(b.id)).map((tab) => {
          const pane = findTabPane(state, tab.id);
          return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            TabHost,
            {
              ...props,
              callbacks: tabCallbacks,
              tab,
              pane,
              vertical,
              column: panes.findIndex((candidate) => candidate.id === pane.id),
              floats,
              focusRequest,
              offsets
            },
            tab.id
          );
        }),
        panes.filter((pane) => pane.tabs.length === 0).map((pane) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: dockkit_default.emptyTabHost,
            "data-dockkit-empty": true,
            style: vertical ? { gridColumn: 1, gridRow: panes.indexOf(pane) * 2 + 1 } : { gridColumn: panes.indexOf(pane) * 2 + 1, gridRow: 1 },
            children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TabPanel, { state, pane, callbacks })
          },
          pane.id
        )),
        root.kind === "split" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: clsx_default(dockkit_default.divider, dockkit_default.tabLayoutDivider, vertical && dockkit_default.tabLayoutDividerVertical),
            "data-dockkit-divider": `${root.id}:0`,
            style: vertical ? { gridColumn: 1, gridRow: 2 } : { gridColumn: 2, gridRow: 1 },
            onPointerDown: (event) => {
              callbacks.onDividerPressed(root.id, 0, event);
            }
          }
        )
      ]
    }
  );
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/dockkit/components/DockSurface.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var NO_PREVIEW = { draggingTabId: void 0, dropTarget: void 0, sizes: void 0 };
var NO_FITS = /* @__PURE__ */ new Map();
var ALWAYS = () => true;
function hitTest(root, x, y, tabId2, canSplit4, fits, dropZones) {
  for (const [paneId2, pane] of paneElements(root)) {
    const rect = pane.getBoundingClientRect();
    if (!containsPoint(rect, x, y)) continue;
    const strip = pane.querySelector("[data-dockkit-strip]");
    if (strip !== null && containsPoint(strip.getBoundingClientRect(), x, y)) {
      const tabs = [...strip.querySelectorAll("[data-dockkit-tab]")];
      const index = insertionIndex(tabs.map((tab) => tab.getBoundingClientRect()), x);
      const sourceIndex = tabs.findIndex((tab) => tab.dataset.dockkitTab === tabId2);
      if (sourceIndex >= 0 && (index === sourceIndex || index === sourceIndex + 1)) return void 0;
      return { kind: "strip", paneId: paneId2, index };
    }
    const zone = dropZones === "horizontal" ? canSplit4 && fitOf(fits, paneId2).row ? x < rect.x + rect.width / 2 ? "left" : "right" : "center" : zoneInRect(rect, x, y);
    if (zone !== "center") {
      const fit = fitOf(fits, paneId2);
      const room = zone === "left" || zone === "right" ? fit.row : fit.column;
      if (!canSplit4 || !room) return void 0;
    }
    return { kind: "zone", paneId: paneId2, zone };
  }
  return void 0;
}
function draggedSizes(drag, x, y, minimum) {
  const moved = (drag.axis === "row" ? x : y) - drag.origin;
  const delta = drag.extent > 0 ? moved / drag.extent : 0;
  return clampSizes(dividerSizes(drag.sizes, drag.index, delta), minimum);
}
var SIZE_TOLERANCE = 1e-9;
function sameSizes(a, b) {
  return a.length === b.length && a.every((size, index) => {
    const other = b[index];
    return other !== void 0 && Math.abs(size - other) < SIZE_TOLERANCE;
  });
}
function Surface({
  state,
  canSplit: canSplit4,
  canAddTab,
  canCloseTab: canCloseTab2,
  intents,
  labels,
  renderTab,
  renderTabTitle,
  renderTabMenuItems,
  getTabTriggerProps,
  tabMenuOpen,
  chrome,
  onRoom,
  draw,
  dropZones = "edges",
  minPaneFraction = MIN_PANE_FRACTION,
  hideSplitWhenBlocked = false
}) {
  const surface2 = (0, import_react10.useRef)(null);
  const [preview, setPreview] = (0, import_react10.useState)(NO_PREVIEW);
  const [fits, setFits] = (0, import_react10.useState)(NO_FITS);
  const begin = useGesture(() => {
    setPreview(NO_PREVIEW);
  });
  const withSurface = (0, import_react10.useCallback)((use) => {
    const root = surface2.current;
    if (root === null) return;
    use(root);
  }, []);
  const remeasure = (0, import_react10.useCallback)(() => {
    withSurface((root) => {
      const next = measurePaneFits(root, hideSplitWhenBlocked);
      setFits((current) => sameFits(current, next) ? current : next);
    });
  }, [withSurface, hideSplitWhenBlocked]);
  (0, import_react10.useLayoutEffect)(() => {
    remeasure();
  });
  (0, import_react10.useEffect)(() => {
    onRoom?.(fits);
  }, [fits, onRoom]);
  (0, import_react10.useEffect)(() => {
    const root = surface2.current;
    if (root === null || typeof ResizeObserver === "undefined") return void 0;
    const observer = new ResizeObserver(() => {
      remeasure();
    });
    observer.observe(root);
    return () => {
      observer.disconnect();
    };
  }, [remeasure]);
  const splitBlock = (paneId2) => {
    if (!canSplit4) return "budget";
    return fitOf(fits, paneId2).column ? void 0 : "width";
  };
  const callbacks = {
    onFocusTab: intents.focusTab.bind(intents),
    onFocusPane: intents.focusPane.bind(intents),
    onSplitPane: intents.splitPane.bind(intents),
    onAddTab: intents.addTab.bind(intents),
    onCloseTab: intents.closeTab.bind(intents),
    // A press is not yet a drag: the chip lifts, and the drop preview follows,
    // once the pointer has travelled the threshold. A release before that is a
    // click and reports nothing here.
    onTabPressed: (tabId2, event) => {
      withSurface((root) => {
        const startX = event.clientX;
        const startY = event.clientY;
        let dragging = false;
        begin(event.currentTarget, event.pointerId, {
          move: (moved) => {
            if (!dragging) {
              if (!passedThreshold(startX, startY, moved.clientX, moved.clientY)) return;
              dragging = true;
            }
            setPreview({
              ...NO_PREVIEW,
              draggingTabId: tabId2,
              dropTarget: hitTest(root, moved.clientX, moved.clientY, tabId2, canSplit4, fits, dropZones)
            });
          },
          up: (released) => {
            if (!dragging) return;
            const target = hitTest(root, released.clientX, released.clientY, tabId2, canSplit4, fits, dropZones);
            if (target === void 0) {
              if (containsPoint(root.getBoundingClientRect(), released.clientX, released.clientY)) return;
              intents.floatTab(tabId2, floatRectAt(released.clientX, released.clientY, FLOAT_DEFAULT_SIZE));
              return;
            }
            if (target.kind === "strip") intents.placeTab(tabId2, target.paneId, target.index);
            else intents.dropTab(tabId2, target.paneId, target.zone);
          }
        });
      });
    },
    onDividerPressed: (splitId2, index, event) => {
      const container = event.currentTarget.parentElement;
      if (container === null) return;
      const split = getSplit(state, splitId2);
      const box = container.getBoundingClientRect();
      const drag = {
        splitId: splitId2,
        index,
        axis: split.axis,
        origin: split.axis === "row" ? event.clientX : event.clientY,
        extent: split.axis === "row" ? box.width : box.height,
        sizes: split.sizes
      };
      begin(event.currentTarget, event.pointerId, {
        move: (moved) => {
          setPreview({ ...NO_PREVIEW, sizes: { splitId: splitId2, sizes: draggedSizes(drag, moved.clientX, moved.clientY, minPaneFraction) } });
        },
        up: (released) => {
          const sizes = draggedSizes(drag, released.clientX, released.clientY, minPaneFraction);
          if (sameSizes(sizes, drag.sizes)) return;
          intents.resizeSplit(splitId2, sizes);
        }
      });
    },
    splitBlock,
    hideSplitWhenBlocked,
    canAddTab: canAddTab ?? ALWAYS,
    canCloseTab: canCloseTab2 ?? ALWAYS,
    dropTarget: preview.dropTarget,
    horizontalDrops: dropZones === "horizontal",
    draggingTabId: preview.draggingTabId,
    labels,
    renderTab,
    renderTabTitle,
    renderTabMenuItems,
    getTabTriggerProps,
    tabMenuOpen,
    chromePaneId: topRightPaneId(state),
    chrome
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: dockkit_default.surface, ref: surface2, "data-dockkit-surface": true, "data-dockkit-drop-zones": dropZones, children: draw(callbacks, preview.sizes) });
}
function DockLayout(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Surface, { ...props, draw: (callbacks, preview) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TabLayout, { ...props, callbacks, preview }) });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/contract/seed.ts
function defaultSeed(tabs) {
  const [only, ...others] = tabs.guide();
  const single = only !== void 0 && others.length === 0;
  const kind = single ? only.kind : GUIDE_KIND;
  const definition = tabs.get(kind);
  if (definition === void 0) throw new Error(`sidebarRight: default tab kind "${kind}" is not registered`);
  return { kind, title: definition.title(pageAddress(kind)) };
}
var GUIDE_KIND = "guide";
function pageAddress(kind) {
  return `sidebar://${kind}`;
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/labels.ts
function dockLabels(t, split, close) {
  return {
    emptyPane: t("dock.emptyPane"),
    splitPane: t("dock.splitPane"),
    splitPaneShortcut: split?.aria,
    splitPaneKeys: split?.keys,
    splitPaneDisabled: t("dock.splitPaneDisabled"),
    splitPaneNarrow: t("dock.splitPaneNarrow"),
    closeTab: t("dock.closeTab"),
    closeTabShortcut: close?.aria,
    closeTabKeys: close?.keys,
    addTab: t("dock.addTab"),
    dockFloat: t("dock.dockFloat"),
    closeFloat: t("dock.closeFloat"),
    dropZone: {
      center: t("dock.drop.center"),
      left: t("dock.drop.left"),
      right: t("dock.drop.right"),
      top: t("dock.drop.top"),
      bottom: t("dock.drop.bottom")
    }
  };
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/stores.ts
var import_dsh_client_store2 = require("@deepseek-ai/dsh-client-store");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/persistence.ts
var import_zod = require("zod");
var import_dsh_client_ui_dockkit = require("@deepseek-ai/dsh-client-ui-dockkit");
var sidebarPersistence = "dsh.sidebar-right.v1";
var paneId = import_zod.z.string().regex(/^(?:pane|float)[1-9][0-9]*$/u);
var splitId = import_zod.z.string().regex(/^split[1-9][0-9]*$/u);
var tabId = import_zod.z.string().regex(/^tab[1-9][0-9]*$/u);
var nodeId = import_zod.z.union([paneId, splitId]);
var rectangle = import_zod.z.object({ x: import_zod.z.number(), y: import_zod.z.number(), width: import_zod.z.number().positive(), height: import_zod.z.number().positive() });
var node = import_zod.z.discriminatedUnion("kind", [
  import_zod.z.object({ kind: import_zod.z.literal("pane"), id: paneId, host: import_zod.z.enum(["dock", "float"]), tabs: import_zod.z.array(tabId), activeTabId: tabId.optional(), rect: rectangle.optional() }),
  import_zod.z.object({ kind: import_zod.z.literal("split"), id: splitId, axis: import_zod.z.enum(["row", "column"]), children: import_zod.z.array(nodeId).min(2), sizes: import_zod.z.array(import_zod.z.number().positive()).min(2) })
]);
var layout = import_zod.z.object({
  nodes: import_zod.z.record(nodeId, node),
  tabs: import_zod.z.record(tabId, import_zod.z.object({ id: tabId, kind: import_zod.z.string().min(1), contentId: import_zod.z.string().min(1), title: import_zod.z.string() })),
  rootId: nodeId,
  floats: import_zod.z.array(paneId),
  activePaneId: paneId,
  expanded: import_zod.z.boolean(),
  mode: import_zod.z.enum(["push", "fullscreen"])
});
var surface = import_zod.z.object({ layout, minted: import_zod.z.int().nonnegative() });
var envelope = import_zod.z.object({ bySession: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()) });
function validateReferences(value) {
  const { layout: layout2, minted } = value;
  const reject = () => {
    throw new Error("Invalid saved sidebar layout references");
  };
  const visited = /* @__PURE__ */ new Set();
  const usedTabs = /* @__PURE__ */ new Set();
  const pending = [{ id: layout2.rootId, host: "dock" }, ...layout2.floats.map((id) => ({ id, host: "float" }))];
  for (const [id, entry] of [...Object.entries(layout2.nodes), ...Object.entries(layout2.tabs)]) {
    if (entry.id !== id || Number(id.replace(/^[a-z]+/u, "")) > minted) reject();
  }
  for (const { id, host } of pending) {
    const entry = layout2.nodes[id];
    if (visited.has(id) || entry === void 0) reject();
    visited.add(id);
    if (entry.kind === "split") {
      if (host !== "dock" || id !== layout2.rootId || entry.axis !== "row" || entry.children.length !== 2 || entry.children.length !== entry.sizes.length || Math.abs(entry.sizes.reduce((sum, size) => sum + size, 0) - 1) > 1e-9) reject();
      pending.push(...entry.children.map((id2) => ({ id: id2, host })));
    } else {
      if (entry.host !== host || (host === "float" ? entry.rect === void 0 || entry.tabs.length !== 1 : entry.rect !== void 0)) reject();
      if (entry.tabs.length === 0 ? entry.activeTabId !== void 0 : !entry.tabs.includes(entry.activeTabId ?? "")) reject();
      for (const tab of entry.tabs) {
        if (usedTabs.has(tab) || layout2.tabs[tab] === void 0) reject();
        usedTabs.add(tab);
      }
    }
  }
  if (visited.size !== Object.keys(layout2.nodes).length || usedTabs.size !== Object.keys(layout2.tabs).length || layout2.nodes[layout2.activePaneId]?.kind !== "pane") reject();
}
function readSidebarLayout(sessionId) {
  if (typeof localStorage === "undefined") return void 0;
  let raw;
  try {
    raw = localStorage.getItem(`${sidebarPersistence}.${sessionId}`);
  } catch (_storageUnavailable) {
    return void 0;
  }
  if (raw === null) return void 0;
  try {
    const saved = envelope.parse(JSON.parse(raw)).bySession[sessionId];
    if (saved === void 0) return void 0;
    const parsed = surface.parse(saved);
    validateReferences(parsed);
    return { layout: parsed.layout, minted: parsed.minted, history: import_dsh_client_ui_dockkit.EMPTY_HISTORY };
  } catch (_invalidLayout) {
    clearSidebarLayout(sessionId);
    return void 0;
  }
}
function writeSidebarLayout(sessionId, surface2) {
  if (typeof localStorage === "undefined") return;
  const saved = { bySession: { [sessionId]: { layout: surface2.layout, minted: surface2.minted } } };
  try {
    localStorage.setItem(`${sidebarPersistence}.${sessionId}`, JSON.stringify(saved));
  } catch (error) {
    console.error("Sidebar layout persistence failed:", error);
  }
}
function clearSidebarLayout(sessionId) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.removeItem(`${sidebarPersistence}.${sessionId}`);
  } catch (_storageUnavailable) {
  }
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/stores.ts
var import_dsh_client_ui_dockkit3 = require("@deepseek-ai/dsh-client-ui-dockkit");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/split-column.ts
var import_dsh_client_ui_dockkit2 = require("@deepseek-ai/dsh-client-ui-dockkit");
var NOTHING = [];
function planSplitPaneColumn(state, mint, paneId2, makePaneTab) {
  if (!(0, import_dsh_client_ui_dockkit2.canSplit)(state)) return NOTHING;
  const target = paneId2 ?? (0, import_dsh_client_ui_dockkit2.activeDockPaneId)(state);
  if ((0, import_dsh_client_ui_dockkit2.getPane)(state, target).host !== "dock") return NOTHING;
  const newPaneId = mint("pane");
  const ops = [{
    type: "split",
    paneId: target,
    axis: "column",
    direction: "after",
    newPaneId,
    newSplitId: mint("split")
  }];
  const seed = makePaneTab?.(mint("tab"));
  if (seed !== void 0) ops.push({ type: "openTab", paneId: newPaneId, tab: seed, index: 0 });
  return ops;
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/stores.ts
function canCloseTab(surface2, tabId2) {
  const tab = surface2.layout.tabs[tabId2];
  return tab !== void 0 && !(tab.kind === GUIDE_KIND && soleDockedTab(surface2.layout, tabId2));
}
function seedRecord(id, seed) {
  const initial = seed();
  return { id, kind: initial.kind, title: initial.title, contentId: pageAddress(initial.kind) };
}
function findHostContentTab(state, destination, contentId, kind) {
  const panes = destination === "sidebar" ? (0, import_dsh_client_ui_dockkit3.dockPaneIds)(state) : state.floats;
  for (const paneId2 of panes) {
    const found = (0, import_dsh_client_ui_dockkit3.findPaneContentTab)(state, paneId2, contentId, kind);
    if (found !== void 0) return found;
  }
  return void 0;
}
function planOpenIn(state, mint, intent, destination) {
  const { kind, contentId, title } = intent;
  const other = destination === "sidebar" ? "float" : "sidebar";
  const here = findHostContentTab(state, destination, contentId, kind);
  const there = here === void 0 ? findHostContentTab(state, other, contentId, kind) : void 0;
  if (destination === "sidebar") {
    const expand = (0, import_dsh_client_ui_dockkit3.planSetExpanded)(state, true);
    if (here !== void 0) return { ops: [...expand, { type: "focusTab", tabId: here }], tabId: here };
    const paneId3 = (0, import_dsh_client_ui_dockkit3.activeDockPaneId)(state);
    if (there !== void 0) return { ops: [...expand, ...(0, import_dsh_client_ui_dockkit3.planUnfloatPane)(state, (0, import_dsh_client_ui_dockkit3.findTabPane)(state, there).id, paneId3)], tabId: there };
    const opened2 = (0, import_dsh_client_ui_dockkit3.planOpenContent)(state, mint, { kind, contentId, title, paneId: paneId3, revealIfOpened: false });
    return { ops: [...expand, ...opened2.ops], tabId: opened2.tabId };
  }
  if (here !== void 0) return { ops: [{ type: "focusTab", tabId: here }], tabId: here };
  if (there !== void 0) return { ops: (0, import_dsh_client_ui_dockkit3.planFloatTab)(state, mint, there).ops, tabId: there };
  const paneId2 = (0, import_dsh_client_ui_dockkit3.activeDockPaneId)(state);
  const pane = (0, import_dsh_client_ui_dockkit3.getPane)(state, paneId2);
  const index = pane.activeTabId === void 0 ? 0 : pane.tabs.indexOf(pane.activeTabId) + 1;
  const opened = (0, import_dsh_client_ui_dockkit3.planOpenContent)(state, mint, { kind, contentId, title, paneId: paneId2, index, revealIfOpened: false });
  return { ops: [...opened.ops, ...(0, import_dsh_client_ui_dockkit3.planFloatTab)(state, mint, opened.tabId).ops], tabId: opened.tabId };
}
function counting(from) {
  let counter = from;
  const mint = ((prefix) => {
    counter += 1;
    return `${prefix}${counter}`;
  });
  return { mint, used: () => counter };
}
function createSurface() {
  const counter = counting(0);
  return {
    layout: (0, import_dsh_client_ui_dockkit3.createInitialState)({ next: counter.mint }),
    history: import_dsh_client_ui_dockkit3.EMPTY_HISTORY,
    minted: counter.used()
  };
}
function panePage(state, paneId2, kind) {
  return (0, import_dsh_client_ui_dockkit3.findPaneContentTab)(state, paneId2, pageAddress(kind), kind);
}
function pageKind(state, tabId2) {
  const tab = state.tabs[tabId2];
  return tab !== void 0 && tab.contentId === pageAddress(tab.kind) ? tab.kind : void 0;
}
function soleDockedTab(state, tabId2) {
  const pane = (0, import_dsh_client_ui_dockkit3.findTabPane)(state, tabId2);
  return pane.host === "dock" && pane.tabs.length === 1 && (0, import_dsh_client_ui_dockkit3.dockPaneIds)(state).length === 1;
}
function planFocusTab(state, tabId2) {
  const pane = (0, import_dsh_client_ui_dockkit3.findTabPane)(state, tabId2);
  return pane.activeTabId === tabId2 && state.activePaneId === pane.id ? [] : [{ type: "focusTab", tabId: tabId2 }];
}
function planFocusPane(state, paneId2) {
  return state.activePaneId === paneId2 ? [] : [{ type: "focusPane", paneId: paneId2 }];
}
function arriving(state, tabId2, toPaneId, otherwise) {
  const kind = pageKind(state, tabId2);
  if (kind === void 0) return otherwise();
  const existing = panePage(state, toPaneId, kind);
  if (existing === void 0 || existing === tabId2) return otherwise();
  return [{ type: "closeTab", tabId: tabId2 }, { type: "focusTab", tabId: existing }];
}
function advance(surface2, plan, seed) {
  const counter = counting(surface2.minted);
  const makeTab = (id) => seedRecord(id, seed);
  const planned = plan(surface2.layout, counter.mint, makeTab);
  if (planned.length === 0) return surface2;
  const after = (0, import_dsh_client_ui_dockkit3.replay)(surface2.layout, planned);
  const settled = (0, import_dsh_client_ui_dockkit3.planSettle)(after, counter.mint, after.expanded ? makeTab : void 0);
  const stepped2 = (0, import_dsh_client_ui_dockkit3.record)(surface2.history, surface2.layout, [...planned, ...settled]);
  return { layout: stepped2.state, history: stepped2.history, minted: counter.used() };
}
function seat(state, sessionId, next) {
  const existing = state.bySession[sessionId];
  const updated = next(existing ?? createSurface());
  return updated === existing ? state.bySession : { ...state.bySession, [sessionId]: updated };
}
function stepped(surface2, step) {
  const moved = step(surface2.history, surface2.layout);
  return moved === void 0 ? surface2 : { ...surface2, layout: moved.state, history: moved.history };
}
function createSidebarRightStore(seed) {
  const handle = (0, import_dsh_client_store2.defineStore)({
    init: () => ({ bySession: {} }),
    actions: {
      // Materialize a session's surface without changing it, so the first read
      // after a session switch sees the collapsed empty column rather than nothing.
      open: (d, sessionId) => {
        d.bySession = seat(d, sessionId, (surface2) => surface2);
      },
      setExpanded: (d, sessionId, expanded) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => (0, import_dsh_client_ui_dockkit3.planSetExpanded)(state, expanded), seed));
      },
      toggleExpanded: (d, sessionId) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => (0, import_dsh_client_ui_dockkit3.planSetExpanded)(state, !state.expanded), seed));
      },
      // Switching presentation is recorded like any other change, so stepping
      // back through the sequence puts the surface back the way it was drawn.
      setMode: (d, sessionId, mode) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => (0, import_dsh_client_ui_dockkit3.planSetMode)(state, mode), seed));
      },
      // `settled` reports the pane the split created, synchronously, because
      // actions return nothing; it is not called when nothing was split.
      splitPane: (d, sessionId, paneId2, settled) => {
        d.bySession = seat(d, sessionId, (s) => {
          const next = advance(s, (state, mint, makeTab) => (0, import_dsh_client_ui_dockkit3.dockPaneIds)(state).length >= 2 || (0, import_dsh_client_ui_dockkit3.getPane)(state, paneId2 ?? (0, import_dsh_client_ui_dockkit3.activeDockPaneId)(state)).tabs.length === 0 ? [] : planSplitPaneColumn(state, mint, paneId2, makeTab), seed);
          if (settled !== void 0 && next !== s) {
            const before = new Set((0, import_dsh_client_ui_dockkit3.dockPaneIds)(s.layout));
            for (const id of (0, import_dsh_client_ui_dockkit3.dockPaneIds)(next.layout)) {
              if (!before.has(id)) settled(id);
            }
          }
          return next;
        });
      },
      // One entry carries the whole open: revealing the column (an open behind
      // a collapsed panel is not an open) unless it reveals or replaces a
      // floating tab, focusing or seating the tab, and closing the tab new
      // content replaces. `settled` reports the tab the planner landed on,
      // synchronously, because actions return nothing.
      openContent: (d, sessionId, intent, settled) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state, mint) => {
          if (intent.destination !== void 0) {
            const planned2 = planOpenIn(state, mint, intent, intent.destination);
            settled(planned2.tabId);
            return planned2.ops;
          }
          const { kind, contentId, title } = intent;
          const replace = intent.replaceTab !== void 0 && state.tabs[intent.replaceTab] !== void 0 ? intent.replaceTab : void 0;
          const replaced = replace === void 0 ? void 0 : (0, import_dsh_client_ui_dockkit3.findTabPane)(state, replace);
          const lent = replaced?.host === "dock" ? replaced : void 0;
          const paneId2 = lent?.id ?? intent.paneId;
          const index = lent === void 0 || replace === void 0 ? void 0 : lent.tabs.indexOf(replace);
          const page = contentId === pageAddress(kind);
          const held = page ? panePage(state, replaced?.id ?? paneId2 ?? (0, import_dsh_client_ui_dockkit3.activeDockPaneId)(state), kind) : void 0;
          const revealed = page ? held : intent.revealIfOpened === false ? void 0 : (0, import_dsh_client_ui_dockkit3.findContentTab)(state, contentId, kind);
          if (replace !== void 0 && revealed === void 0 && replaced?.host === "float") {
            const tab = { id: mint("tab"), kind, contentId, title };
            settled(tab.id);
            return [
              { type: "closeTab", tabId: replace },
              {
                type: "insertPane",
                pane: { ...replaced, tabs: [tab.id], activeTabId: tab.id },
                tabs: [tab],
                attach: { mode: "float", index: state.floats.indexOf(replaced.id) }
              },
              { type: "focusTab", tabId: tab.id }
            ];
          }
          const ops = revealed !== void 0 && (0, import_dsh_client_ui_dockkit3.findTabPane)(state, revealed).host === "float" ? [] : [...(0, import_dsh_client_ui_dockkit3.planSetExpanded)(state, true)];
          let openedInNewPane;
          const split = intent.preferNewPane === true && replace === void 0 && revealed === void 0 ? planSplitPaneColumn(state, mint, paneId2, (id) => {
            openedInNewPane = id;
            return { id, kind, contentId, title };
          }) : [];
          const planned = revealed !== void 0 ? { ops: [{ type: "focusTab", tabId: revealed }], tabId: revealed } : openedInNewPane !== void 0 ? { ops: split, tabId: openedInNewPane } : (0, import_dsh_client_ui_dockkit3.planOpenContent)(state, mint, {
            kind,
            contentId,
            title,
            ...paneId2 === void 0 ? {} : { paneId: paneId2 },
            ...index === void 0 ? {} : { index },
            ...page ? { revealIfOpened: false } : intent.revealIfOpened === void 0 ? {} : { revealIfOpened: intent.revealIfOpened }
          });
          ops.push(...planned.ops);
          if (replace !== void 0 && revealed === void 0) ops.push({ type: "closeTab", tabId: replace });
          settled(planned.tabId);
          return ops;
        }, seed));
      },
      // A page is never copied: the copy would sit beside it in the same pane.
      duplicateTab: (d, sessionId, tabId2) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state, mint) => pageKind(state, tabId2) !== void 0 ? [] : (0, import_dsh_client_ui_dockkit3.planDuplicateTab)(state, mint, tabId2).ops, seed));
      },
      // A tab already gone — closed twice by a racing callback and the user — is
      // left alone rather than handed to the kit, which refuses an unknown tab.
      // The docked surface's last tab follows the close rule, whoever asks: the
      // guide stays (the kit hides its close routes through `canCloseTab`, and
      // this plan refuses the programmatic path), and anything else closes
      // together with the column, which stays empty until an expansion seeds
      // the then-current default page.
      closeTab: (d, sessionId, tabId2) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => {
          if (!canCloseTab(s, tabId2)) return [];
          if (!soleDockedTab(state, tabId2)) return [{ type: "closeTab", tabId: tabId2 }];
          return [{ type: "closeTab", tabId: tabId2 }, ...(0, import_dsh_client_ui_dockkit3.planSetMode)(state, "push"), ...(0, import_dsh_client_ui_dockkit3.planSetExpanded)(state, false)];
        }, seed));
      },
      focusTab: (d, sessionId, tabId2) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => planFocusTab(state, tabId2), seed));
      },
      focusPane: (d, sessionId, paneId2) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => planFocusPane(state, paneId2), seed));
      },
      placeTab: (d, sessionId, tabId2, toPaneId, index) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => arriving(state, tabId2, toPaneId, () => (0, import_dsh_client_ui_dockkit3.planPlaceTab)(state, tabId2, toPaneId, index)), seed));
      },
      // Only a centre release lands in the target pane; an edge release makes a
      // new pane, where nothing can already be — and when the release drags a
      // pane's only tab to that pane's own edge, the default page backfills it.
      dropTab: (d, sessionId, tabId2, paneId2, zone) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state, mint, makeTab) => {
          if (zone === "top" || zone === "bottom") return [];
          if (zone !== "center" && (0, import_dsh_client_ui_dockkit3.dockPaneIds)(state).length >= 2) return [];
          const plan = () => (0, import_dsh_client_ui_dockkit3.planDropTab)(state, mint, tabId2, paneId2, zone, makeTab);
          return zone === "center" ? arriving(state, tabId2, paneId2, plan) : plan();
        }, seed));
      },
      floatTab: (d, sessionId, tabId2, rect) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state, mint) => (0, import_dsh_client_ui_dockkit3.planFloatTab)(state, mint, tabId2, rect).ops, seed));
      },
      // A floating pane holds one tab; docking it back expands the column and
      // lands in the active docked pane, and only a page is subject to the
      // merge rule there.
      unfloatPane: (d, sessionId, paneId2) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, (state) => {
          const floated = (0, import_dsh_client_ui_dockkit3.getPane)(state, paneId2).tabs[0];
          const plan = () => (0, import_dsh_client_ui_dockkit3.planUnfloatPane)(state, paneId2);
          const ops = floated === void 0 ? plan() : arriving(state, floated, (0, import_dsh_client_ui_dockkit3.activeDockPaneId)(state), plan);
          return [...(0, import_dsh_client_ui_dockkit3.planSetExpanded)(state, true), ...ops];
        }, seed));
      },
      moveFloat: (d, sessionId, paneId2, x, y) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, () => [{ type: "moveFloat", paneId: paneId2, x, y }], seed));
      },
      resizeFloat: (d, sessionId, paneId2, rect) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, () => [{ type: "resizeFloat", paneId: paneId2, rect }], seed));
      },
      resizeSplit: (d, sessionId, splitId2, sizes) => {
        d.bySession = seat(d, sessionId, (s) => advance(s, () => (0, import_dsh_client_ui_dockkit3.planResizeSplit)(splitId2, sizes, 0.2), seed));
      },
      undo: (d, sessionId) => {
        d.bySession = seat(d, sessionId, (s) => stepped(s, import_dsh_client_ui_dockkit3.stepBack));
      },
      redo: (d, sessionId) => {
        d.bySession = seat(d, sessionId, (s) => stepped(s, import_dsh_client_ui_dockkit3.stepForward));
      }
    }
  });
  return { ...handle, create(scopeKey) {
    const instance = handle.create(scopeKey);
    if (scopeKey === void 0) return instance;
    const saved = readSidebarLayout(scopeKey);
    if (saved !== void 0) instance.store.set({ bySession: { [scopeKey]: saved } });
    instance.subscribe(() => {
      const surface2 = instance.getSnapshot().bySession[scopeKey];
      if (surface2 !== void 0) writeSidebarLayout(scopeKey, surface2);
    });
    return { ...instance, clearPersisted: () => {
      clearSidebarLayout(scopeKey);
    } };
  } };
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/flash.ts
function flashPane(root, flash) {
  if (root === null || flash === void 0) return void 0;
  const pane = root.querySelector(`[data-dockkit-pane="${flash.paneId}"], [data-dockkit-float="${flash.paneId}"]`);
  if (pane === null) return void 0;
  let started;
  const start = (event) => {
    if (event.target === pane) started = event.animationName;
  };
  const end = (event) => {
    if (event.target === pane && event.animationName === started) clear();
  };
  const clear = () => {
    pane.removeEventListener("animationstart", start);
    pane.removeEventListener("animationend", end);
    pane.removeEventListener("animationcancel", end);
    delete pane.dataset.sidebarRightFlash;
  };
  pane.dataset.sidebarRightFlash = flash.serial % 2 === 0 ? "even" : "odd";
  pane.addEventListener("animationstart", start);
  pane.addEventListener("animationend", end);
  pane.addEventListener("animationcancel", end);
  return clear;
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/SidebarRight.module.css
var SidebarRight_default = {
  session: "SidebarRight_session",
  panel: "SidebarRight_panel",
  iconButton: "SidebarRight_iconButton",
  collapseGlyph: "SidebarRight_collapseGlyph",
  panelBody: "SidebarRight_panelBody",
  unavailable: "SidebarRight_unavailable",
  tabTitle: "SidebarRight_tabTitle",
  tabBody: "SidebarRight_tabBody",
  flashOdd: "SidebarRight_flashOdd",
  flashEven: "SidebarRight_flashEven"
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/SidebarRight.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function guideIn(layout2, paneId2) {
  return (0, import_dsh_client_ui_dockkit4.findPaneContentTab)(layout2, paneId2, pageAddress(GUIDE_KIND), GUIDE_KIND);
}
function intentsFor(sessionId, actions, openTab, closeTab, splitPane) {
  return {
    focusTab: (tabId2) => {
      actions.focusTab(sessionId, tabId2);
    },
    focusPane: (paneId2) => {
      actions.focusPane(sessionId, paneId2);
    },
    splitPane: splitPane ?? ((paneId2) => {
      actions.splitPane(sessionId, paneId2);
    }),
    // The guide is unique per pane: the control is drawn only while its pane
    // holds none (`canAddTab` below) and asks for one there without regard to
    // guides in other panes; the store settles the open on a guide the pane
    // already holds, so the ask is idempotent all the same.
    addTab: (paneId2) => {
      openTab(GUIDE_KIND, { paneId: paneId2, revealIfOpened: false });
    },
    closeTab: closeTab ?? ((tabId2) => {
      actions.closeTab(sessionId, tabId2);
    }),
    duplicateTab: (tabId2) => {
      actions.duplicateTab(sessionId, tabId2);
    },
    floatTab: (tabId2, rect) => {
      actions.floatTab(sessionId, tabId2, rect);
    },
    unfloatPane: (paneId2) => {
      actions.unfloatPane(sessionId, paneId2);
    },
    placeTab: (tabId2, toPaneId, index) => {
      actions.placeTab(sessionId, tabId2, toPaneId, index);
    },
    dropTab: (tabId2, paneId2, zone) => {
      actions.dropTab(sessionId, tabId2, paneId2, zone);
    },
    moveFloat: (paneId2, x, y) => {
      actions.moveFloat(sessionId, paneId2, x, y);
    },
    resizeFloat: (paneId2, rect) => {
      actions.resizeFloat(sessionId, paneId2, rect);
    },
    resizeSplit: (splitId2, sizes) => {
      actions.resizeSplit(sessionId, splitId2, sizes);
    }
  };
}
function TabSlot({
  renderSlot,
  occurrence,
  useTabTypes,
  useTabNavigation,
  useStore,
  fullscreen,
  shortcuts,
  active,
  retainTab,
  tab,
  seat: seat2,
  fallback
}) {
  const { id, signal, tabActions } = occurrence(tab);
  const definition = useTabTypes((types) => types.find((definition2) => definition2.kind === tab.kind));
  const retained = seat2 === "sidebar.right.pane.tab" && definition?.keepMounted === true;
  (0, import_react11.useLayoutEffect)(() => retained ? retainTab(tab.id, signal) : void 0, [retained, retainTab, tab.id, signal]);
  const hookContext = (0, import_react11.useMemo)(() => ({
    tabId: tab.id,
    shortcuts,
    title: seat2 === "sidebar.right.pane.tab.title",
    fullscreen,
    active,
    signal,
    actions: tabActions,
    useStore,
    useTabNavigation
  }), [tab.id, seat2, fullscreen, active, signal, tabActions, useStore, useTabNavigation, shortcuts]);
  const content = renderSlot(seat2, {}, { entryKey: definition?.id ?? tab.kind, fallback, hookContext });
  return seat2 === "sidebar.right.pane.tab.title" ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: SidebarRight_default.tabTitle, "data-sidebar-right-tab": tab.id, "data-sidebar-right-occurrence": id, children: content }, id) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: SidebarRight_default.tabBody, "data-sidebar-right-tab": tab.id, "data-sidebar-right-occurrence": id, children: content }, id);
}
function bodiesFor(panel) {
  const { t, ...rest } = panel;
  return (tab) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    TabSlot,
    {
      ...rest,
      tab,
      seat: "sidebar.right.pane.tab",
      fallback: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: SidebarRight_default.unavailable, "data-sidebar-right-unavailable": true, children: t("tab.unavailable") })
    },
    tab.id
  );
}
function titlesFor(panel) {
  return (tab) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TabSlot, { ...panel, tab, seat: "sidebar.right.pane.tab.title", fallback: tab.title }, tab.id);
}
function FullscreenGlyph() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { d: "M2.33203 10.4054V13.1681C2.33229 13.444 2.55605 13.6681 2.83203 13.6681H5.49512V14.6681H2.83203C2.00376 14.6681 1.33229 13.9963 1.33203 13.1681V10.4054H2.33203ZM14.6689 13.1681C14.6687 13.996 13.9968 14.6676 13.1689 14.6681H10.4951V13.6681H13.1689C13.4445 13.6676 13.6687 13.4437 13.6689 13.1681V10.4054H14.6689V13.1681ZM13.1689 1.33118C13.9969 1.33163 14.6688 2.00315 14.6689 2.83118V5.4054H13.6689V2.83118C13.6688 2.55544 13.4446 2.33162 13.1689 2.33118H10.4951V1.33118H13.1689ZM5.49512 2.33118H2.83203C2.55598 2.33118 2.33218 2.55516 2.33203 2.83118V5.4054H1.33203V2.83118C1.33218 2.00288 2.00369 1.33118 2.83203 1.33118H5.49512V2.33118Z", fill: "currentColor" }) });
}
function ExitFullscreenGlyph() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { d: "M9 2.5V6C9 6.26522 9.10536 6.51957 9.29289 6.70711C9.48043 6.89464 9.73478 7 10 7H13.5", stroke: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { d: "M7 13.5V10C7 9.73478 6.89464 9.48043 6.70711 9.29289C6.51957 9.10536 6.26522 9 6 9H2.5", stroke: "currentColor" })
  ] });
}
function PanelChrome({ sessionId, fullscreen, actions, t, shortcuts, toggleFullscreen }) {
  const next = fullscreen ? "push" : "fullscreen";
  const modeLabel = fullscreen ? t("chrome.exitFullscreen") : t("chrome.toFullscreen");
  const mode = shortcuts.find((entry) => entry.id === "pane.fullscreen.toggle");
  const toggle = shortcuts.find((entry) => entry.id === "sidebar.right.toggle");
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dsh_client_ui_primitives8.Tooltip, { label: modeLabel, shortcutKeys: mode?.keys, side: "bottom", delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        type: "button",
        className: SidebarRight_default.iconButton,
        "aria-label": modeLabel,
        "aria-keyshortcuts": mode?.aria,
        "data-sidebar-right-mode": next,
        onClick: toggleFullscreen,
        children: fullscreen ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ExitFullscreenGlyph, {}) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FullscreenGlyph, {})
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dsh_client_ui_primitives8.Tooltip, { label: t("chrome.collapse"), shortcutKeys: toggle?.keys, side: "bottom", delayMs: 500, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        type: "button",
        className: SidebarRight_default.iconButton,
        "aria-label": t("chrome.collapseAria"),
        "aria-keyshortcuts": toggle?.aria,
        "data-sidebar-right-toggle": true,
        onClick: () => {
          actions.toggleExpanded(sessionId);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_dsh_client_ui_primitives8.IconPanelLeftOutlineRegular, { className: SidebarRight_default.collapseGlyph })
      }
    ) })
  ] });
}
function SidebarPanel(panel) {
  const { sessionId, surface: surface2, actions, t, openTab, width, reportRoom, fullscreen, panelRef } = panel;
  const { expanded } = surface2.layout;
  const types = panel.useTabTypes((value) => value);
  const flash = panel.useFlash((value) => value);
  const played = (0, import_react11.useRef)(flash?.serial);
  (0, import_react11.useLayoutEffect)(() => {
    if (flash === void 0 || flash.serial === played.current) return void 0;
    played.current = flash.serial;
    return panel.active ? flashPane(panelRef.current, flash) : void 0;
  }, [flash, panel.active, panelRef]);
  const [opened, setOpened] = (0, import_react11.useState)(expanded);
  const [opening, setOpening] = (0, import_react11.useState)(false);
  if (opened !== expanded) {
    setOpened(expanded);
    setOpening(expanded && panel.active);
  } else if (opening && !panel.active) {
    setOpening(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    {
      ref: panelRef,
      className: SidebarRight_default.panel,
      style: {
        width: fullscreen ? "100vw" : width,
        "--dsh-sidebar-width": fullscreen ? "100vw" : `${width}px`
      },
      "data-sidebar-right-session": sessionId,
      "data-sidebar-right-panel": fullscreen ? "fullscreen" : "push",
      "data-sidebar-right-open": expanded || void 0,
      "data-sidebar-right-opening": opening || void 0,
      onTransitionEnd: opening ? () => {
        setOpening(false);
      } : void 0,
      "aria-hidden": !expanded && surface2.layout.floats.length === 0 || void 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: SidebarRight_default.panelBody, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        DockLayout,
        {
          state: surface2.layout,
          canSplit: (0, import_dsh_client_ui_dockkit4.canSplit)(surface2.layout) && (0, import_dsh_client_ui_dockkit4.dockPaneIds)(surface2.layout).length < 2,
          dropZones: "edges",
          minPaneFraction: 0.2,
          canAddTab: (paneId2) => guideIn(surface2.layout, paneId2) === void 0,
          canCloseTab: (tabId2) => canCloseTab(surface2, tabId2),
          intents: intentsFor(sessionId, actions, openTab, panel.closeTab, panel.splitPane),
          labels: dockLabels(t, panel.shortcuts.find((entry) => entry.id === "pane.split"), panel.shortcuts.find((entry) => entry.id === "page.close")),
          renderTab: bodiesFor(panel),
          renderTabTitle: titlesFor(panel),
          active: panel.active,
          keepMounted: (tab) => types.find((type) => type.kind === tab.kind)?.keepMounted === true,
          getTabTriggerProps: panel.getTabTriggerProps,
          tabMenuOpen: panel.tabMenuOpen,
          chrome: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            PanelChrome,
            {
              sessionId,
              fullscreen,
              actions,
              t,
              shortcuts: panel.shortcuts,
              toggleFullscreen: panel.toggleFullscreen
            }
          ),
          onRoom: reportRoom
        }
      ) })
    }
  );
}
function RightbarSeat({
  sessionId,
  width,
  viewportWidth,
  canShow,
  useStore,
  actions,
  t,
  renderSlot,
  syncPresentation,
  measureRoom,
  reportAutoFullscreen,
  openTab,
  closeTab,
  useContextMenu,
  useContextMenuTarget,
  useTabTypes,
  useTabNavigation,
  occurrence,
  retainTab,
  active,
  useShortcuts,
  splitPane,
  toggleFullscreen,
  useFlash
}) {
  const { getTriggerProps } = useContextMenu();
  const getTabTriggerProps = (tab, paneId2, handlers) => getTriggerProps({ kind: "tab", value: { sessionId, tab, paneId: paneId2 } }, handlers);
  const tabMenuOpen = useContextMenuTarget((target) => target?.kind === "tab" && target.value.sessionId === sessionId);
  const shortcuts = useShortcuts((entries) => entries);
  const surface2 = useStore((state) => state.bySession[sessionId]);
  const shown = active && surface2 !== void 0 && surface2.layout.expanded;
  const autoFullscreen = viewportWidth < 768;
  const fullscreen = autoFullscreen || surface2?.layout.mode === "fullscreen";
  const panelRef = (0, import_react11.useRef)(null);
  const reportRoom = (0, import_react11.useCallback)((fits) => {
    measureRoom((paneId2) => {
      const fit = fits.get(paneId2);
      return (fit?.column ?? fit?.row) !== false;
    });
  }, [measureRoom]);
  const track = shown && !autoFullscreen;
  (0, import_react11.useEffect)(() => {
    if (active && surface2 === void 0) actions.open(sessionId);
  }, [actions, sessionId, surface2, active]);
  (0, import_react11.useLayoutEffect)(() => {
    if (shown && !fullscreen && !canShow) actions.setExpanded(sessionId, false);
  }, [actions, sessionId, shown, fullscreen, canShow]);
  (0, import_react11.useLayoutEffect)(() => {
    reportAutoFullscreen(autoFullscreen);
  }, [reportAutoFullscreen, autoFullscreen]);
  (0, import_react11.useLayoutEffect)(() => {
    if (!active) return;
    let disposed = false;
    const reportWhenCovered = () => {
      if (disposed) return;
      const entering = shown && fullscreen ? panelRef.current.getAnimations({ subtree: true }).filter((animation) => "transitionProperty" in animation && animation.transitionProperty === "transform" && animation.playState !== "finished" && animation.playState !== "idle") : [];
      if (entering.length === 0) {
        syncPresentation({ shown, track, fullscreen });
        return;
      }
      void Promise.allSettled(entering.map((animation) => animation.finished)).then(reportWhenCovered);
    };
    reportWhenCovered();
    return () => {
      disposed = true;
    };
  }, [sessionId, shown, track, fullscreen, syncPresentation, active]);
  (0, import_react11.useLayoutEffect)(() => active ? () => {
    syncPresentation({ shown: false, track: false, fullscreen: false });
  } : void 0, [syncPresentation, active]);
  if (surface2 === void 0) return null;
  const panel = {
    sessionId,
    actions,
    t,
    renderSlot,
    surface: surface2,
    openTab,
    closeTab,
    getTabTriggerProps,
    tabMenuOpen,
    useTabTypes,
    useTabNavigation,
    useStore,
    useFlash,
    occurrence,
    fullscreen,
    autoFullscreen,
    reportRoom,
    active,
    retainTab,
    shortcuts,
    splitPane,
    toggleFullscreen
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarPanel, { ...panel, width, panelRef });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/close-focus.ts
var import_react_dom2 = require("react-dom");
function openWithPaneFocus(document2, sessionId, open) {
  let paneId2;
  (0, import_react_dom2.flushSync)(() => {
    paneId2 = open();
  });
  if (paneId2 !== void 0) visibleSidebarPane(document2, sessionId, paneId2)?.focus({ preventScroll: true });
}
function closeWithPaneFocus(document2, sessionId, paneId2, close) {
  const before = document2.activeElement;
  const owner = before?.closest("[data-sidebar-right-session]");
  const source = before?.closest("[data-dockkit-pane], [data-dockkit-float]");
  const retain = owner?.dataset.sidebarRightSession === sessionId && (source?.dataset.dockkitPane ?? source?.dataset.dockkitFloat) === paneId2;
  (0, import_react_dom2.flushSync)(close);
  if (!retain || document2.activeElement !== document2.body && document2.activeElement !== before) return;
  visibleSidebarPane(document2, sessionId, paneId2)?.focus({ preventScroll: true });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/shell/RightbarRoot.tsx
var import_react12 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function SessionView({ view, visible, SessionProvider, renderSlot, mountView, width, viewportWidth, canShow }) {
  (0, import_react12.useLayoutEffect)(() => mountView(view.reference), [mountView, view.reference]);
  const active = visible && view.selected;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: SidebarRight_default.session, hidden: !active, "data-sidebar-right-session": view.sessionId, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SessionProvider, { session: view.reference, children: renderSlot("rightbar.session", { width, viewportWidth, canShow, active, retainTab: view.retainTab }) }) });
}
function RightbarRoot({ usePanelInfo, useViews, ...props }) {
  const visible = usePanelInfo((info) => info.activePanelId === null);
  const views = useViews((value) => value);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_jsx_runtime14.Fragment, { children: views.map((view) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SessionView, { ...props, view, visible }, view.sessionId)) });
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/session-views.ts
var import_dsh_client_store3 = require("@deepseek-ai/dsh-client-store");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/session-view.ts
var SidebarSessionView = class {
  /**
   * @param sessionId - Session displayed by this view.
   * @param sessions - allocator for this view's independent reference.
   * @param onDispose - removes this view from the collection's index before reference release.
   * @param onTabRelease - reconsiders retention after a body releases its hold.
   */
  constructor(sessionId, sessions, onDispose, onTabRelease) {
    this.sessionId = sessionId;
    this.onDispose = onDispose;
    this.onTabRelease = onTabRelease;
    this.reference = sessions.retain(sessionId, { source: "sidebarView" });
    void this.reference.ready.catch((error) => {
      console.error("Sidebar Session opening failed:", error);
    });
  }
  sessionId;
  onDispose;
  onTabRelease;
  /** Session reference released exclusively by this View. */
  reference;
  tabs = /* @__PURE__ */ new Map();
  mounts = 0;
  retired = false;
  disposed = false;
  /** Whether an initialized retained body still needs this view. */
  get hasRetainedTabs() {
    return this.tabs.size > 0;
  }
  /**
   * Keep a retired View's reference until its committed roots finish unmounting.
   * @returns cleanup to call once for this root; the final cleanup releases a retired View.
   */
  mount() {
    this.mounts += 1;
    return () => {
      this.mounts -= 1;
      if (this.retired && this.mounts === 0) this.dispose();
    };
  }
  /**
   * Hold an initialized body until unmount or occurrence cancellation.
   * @param tabId - initialized body identity.
   * @param signal - occurrence lifetime; closing and undoing a tab creates a new lifetime.
   * @returns idempotent release of this body's hold.
   */
  retainTab = (tabId2, signal) => {
    if (signal.aborted || this.disposed) return () => {
    };
    this.tabs.set(tabId2, (this.tabs.get(tabId2) ?? 0) + 1);
    let held = true;
    const release = () => {
      if (!held) return;
      held = false;
      signal.removeEventListener("abort", release);
      const count = this.tabs.get(tabId2);
      if (count === 1) this.tabs.delete(tabId2);
      else this.tabs.set(tabId2, count - 1);
      this.onTabRelease(this);
    };
    signal.addEventListener("abort", release, { once: true });
    return release;
  };
  /** End a withdrawn view after its existing committed mounts finish. */
  retire() {
    this.retired = true;
    if (this.mounts === 0) this.dispose();
  }
  /** Release once; plugin shutdown does not wait for remaining React mounts. */
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.retired = true;
    this.onDispose(this);
    this.reference.release();
  }
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/session-views.ts
var SidebarSessionViews = class {
  constructor(sessions) {
    this.sessions = sessions;
  }
  sessions;
  /** Selected and retained View targets observed by the root renderer. */
  source = (0, import_dsh_client_store3.createSnapshotStore)([]);
  views = /* @__PURE__ */ new Map();
  viewsByReference = /* @__PURE__ */ new Map();
  selected;
  closed = false;
  /**
   * Change the foreground Session while preserving retained background Views.
   * @param sessionId - main selection, or absence.
   */
  select(sessionId) {
    if (this.closed || this.selected === sessionId) return;
    this.selected = sessionId;
    if (sessionId !== void 0 && !this.views.has(sessionId)) {
      const view = new SidebarSessionView(sessionId, this.sessions, (disposed) => {
        this.viewsByReference.delete(disposed.reference);
      }, (released) => {
        this.prune(released);
      });
      this.views.set(sessionId, view);
      this.viewsByReference.set(view.reference, view);
    }
    for (const view of this.views.values()) this.prune(view);
    this.publish();
  }
  /**
   * Bind a committed root; release retired references after that root unmounts.
   * @param reference - framework target published by this owner.
   * @returns releases this committed mount.
   */
  mount(reference) {
    const view = this.viewsByReference.get(reference);
    if (view === void 0) {
      if (this.closed) return () => {
      };
      throw new Error("Sidebar Session view reference is no longer owned");
    }
    return view.mount();
  }
  /** Plugin shutdown releases every view, including any awaiting a React unmount. */
  dispose() {
    this.closed = true;
    this.views.clear();
    this.source.set([]);
    for (const view of this.viewsByReference.values()) view.dispose();
  }
  prune(view) {
    if (view.sessionId === this.selected || view.hasRetainedTabs || this.views.get(view.sessionId) !== view) return;
    this.views.delete(view.sessionId);
    this.publish();
    view.retire();
  }
  publish() {
    this.source.set([...this.views.values()].sort((a, b) => a.sessionId.localeCompare(b.sessionId)).map((view) => ({
      sessionId: view.sessionId,
      reference: view.reference,
      selected: view.sessionId === this.selected,
      retainTab: view.retainTab
    })));
  }
};

// node_modules/.pnpm/@deepseek-ai+dsh-util-crypt_4a55503ceb94d7a445d3557b359d2821/node_modules/@deepseek-ai/dsh-util-crypto/lib/index.js
function randomUUID() {
  const bytes = globalThis.crypto.getRandomValues(new Uint8Array(16));
  const hex = Array.from(bytes, (byte, index) => {
    return (index === 6 ? byte & 15 | 64 : index === 8 ? byte & 63 | 128 : byte).toString(16).padStart(2, "0");
  }).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/service.ts
var import_dsh_client_store6 = require("@deepseek-ai/dsh-client-store");
var import_dsh_client_ui_dockkit6 = require("@deepseek-ai/dsh-client-ui-dockkit");

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tab-domain.ts
var import_dsh_client_ui_dockkit5 = require("@deepseek-ai/dsh-client-ui-dockkit");
var import_dsh_client_store4 = require("@deepseek-ai/dsh-client-store");
var TabDomain = class {
  /**
   * @param navigator - where tab actions go, aimed at the tab's session; the navigation controller.
   * @param pin - `ctx.resources.pin`, called once per occurrence at its first sync.
   */
  constructor(navigator2, pin) {
    this.navigator = navigator2;
    this.pin = pin;
  }
  navigator;
  pin;
  bySession = /* @__PURE__ */ new Map();
  /**
   * Reconcile one session's occurrences with its committed layout.
   *
   * Called by the seat after every commit, and only then: aborting a vanished
   * record runs the types' cleanup, which writes their stores.
   * @param sessionId - the session whose layout committed.
   * @param layout - that session's layout as committed.
   */
  sync(sessionId, layout2) {
    const held = this.session(sessionId);
    for (const [tabId2, occurrence] of held) {
      if (layout2.tabs[tabId2] !== void 0) continue;
      held.delete(tabId2);
      occurrence.controller.abort();
    }
    for (const tab of Object.values(layout2.tabs)) {
      const occurrence = held.get(tab.id) ?? this.hold(sessionId, tab.id, { address: tab.contentId, params: void 0, revision: 0 });
      const pane = (0, import_dsh_client_ui_dockkit5.findTabPane)(layout2, tab.id);
      occurrence.paneId = pane.host === "dock" ? pane.id : void 0;
      if (occurrence.pinned) continue;
      occurrence.pinned = true;
      this.pin(occurrence.navigation.getSnapshot().address, occurrence.signal);
    }
  }
  /**
   * Read an occurrence created by navigation or committed-store reconciliation.
   * @param sessionId - the session the record is in.
   * @param tab - the record being drawn.
   * @returns its occurrence.
   * @throws when the record has not been reconciled or has disappeared.
   */
  occurrence(sessionId, tab) {
    const occurrence = this.bySession.get(sessionId)?.get(tab.id);
    if (occurrence === void 0) throw new Error(`sidebarRight: tab "${tab.id}" has no committed occurrence in session "${sessionId}"`);
    return occurrence;
  }
  /**
   * Record that an `open` settled on a tab.
   *
   * A record the layout has not yet shown the seat gets its occurrence here, so
   * the body's first render already carries the opener's `params`.
   * @param sessionId - the session opened into.
   * @param tabId - the tab the open settled on.
   * @param target - the address and the opener's params.
   */
  navigate(sessionId, tabId2, target) {
    const existing = this.session(sessionId).get(tabId2);
    if (existing === void 0) {
      this.hold(sessionId, tabId2, { ...target, revision: 1 });
      return;
    }
    existing.navigation.set({ ...target, revision: existing.navigation.getSnapshot().revision + 1 });
  }
  /** Abort every occurrence of every session; the package is unloading. */
  dispose() {
    for (const held of this.bySession.values()) {
      for (const occurrence of held.values()) occurrence.controller.abort();
    }
    this.bySession.clear();
  }
  session(sessionId) {
    let held = this.bySession.get(sessionId);
    if (held === void 0) {
      held = /* @__PURE__ */ new Map();
      this.bySession.set(sessionId, held);
    }
    return held;
  }
  hold(sessionId, tabId2, navigation) {
    const controller = new AbortController();
    const { navigator: navigator2 } = this;
    const place = (placement) => ({
      ...placement.replaceTab === true ? { replaceTab: tabId2 } : held.paneId === void 0 ? {} : { paneId: held.paneId },
      ...placement.paneId === void 0 ? {} : { paneId: placement.paneId },
      ...placement.preferNewPane === void 0 ? {} : { preferNewPane: placement.preferNewPane },
      ...placement.revealIfOpened === void 0 ? {} : { revealIfOpened: placement.revealIfOpened }
    });
    const held = {
      id: randomUUID(),
      sessionId,
      tabId: tabId2,
      controller,
      commands: {},
      signal: controller.signal,
      navigation: (0, import_dsh_client_store4.createSnapshotStore)(navigation),
      paneId: void 0,
      pinned: false,
      tabActions: {
        bindCommands: (commands) => {
          if (controller.signal.aborted) return () => {
          };
          held.commands = commands;
          const release = () => {
            if (held.commands === commands) held.commands = {};
            controller.signal.removeEventListener("abort", release);
          };
          controller.signal.addEventListener("abort", release, { once: true });
          return release;
        },
        // An explicit host ignores this tab's pane and never names it for replacement.
        openResource: (address, options = {}) => {
          navigator2.openResourceIn(sessionId, address, options.destination === void 0 ? { ...place(options), params: options.params } : { destination: options.destination, params: options.params });
        },
        openTab: (kind, options = {}) => {
          navigator2.openTabIn(sessionId, kind, { ...place(options), params: options.params });
        },
        close: () => {
          navigator2.closeIn(sessionId, tabId2);
        }
      }
    };
    this.session(sessionId).set(tabId2, held);
    return held;
  }
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tab-inventory.ts
var import_dsh_client_store5 = require("@deepseek-ai/dsh-client-store");
var SidebarTabInventory = class {
  sessions = /* @__PURE__ */ new Map();
  snapshot = (0, import_dsh_client_store5.createSnapshotStore)([]);
  /** Read-only metadata observable shared with content providers. */
  source = this.snapshot;
  /** Read saved layouts once before the root service is published. */
  constructor() {
    try {
      if (typeof localStorage === "undefined") return;
      const keys = Array.from({ length: localStorage.length }, (_, index) => localStorage.key(index));
      for (const key of keys) {
        if (key === null || !key.startsWith(`${sidebarPersistence}.`)) continue;
        const sessionId = key.slice(sidebarPersistence.length + 1);
        const saved = readSidebarLayout(sessionId);
        if (saved !== void 0) this.sessions.set(sessionId, Object.values(saved.layout.tabs).map((tab) => ({
          sessionId,
          tabId: tab.id,
          kind: tab.kind,
          contentId: tab.contentId
        })));
      }
      this.publish();
    } catch (_storageUnavailable) {
    }
  }
  /**
   * Replace membership from the authoritative in-window store.
   * @param sessionId - adopted Session.
   * @param tabs - current committed records.
   */
  update(sessionId, tabs) {
    this.sessions.set(sessionId, tabs.map((tab) => ({ sessionId, tabId: tab.id, kind: tab.kind, contentId: tab.contentId })));
    this.publish();
  }
  /**
   * Forget a permanently cleared scope.
   * @param sessionId - removed Session scope.
   */
  remove(sessionId) {
    this.sessions.delete(sessionId);
    this.publish();
  }
  publish() {
    const next = [...this.sessions.values()].flat();
    if (JSON.stringify(next) !== JSON.stringify(this.snapshot.getSnapshot())) this.snapshot.set(next);
  }
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/service.ts
function createSidebarRightController(tabs, pin, host) {
  const adopted = /* @__PURE__ */ new Map();
  const rooms = /* @__PURE__ */ new Map();
  const onScreen = (0, import_dsh_client_store6.createSnapshotStore)(void 0);
  const inventory = new SidebarTabInventory();
  const flashes = /* @__PURE__ */ new Map();
  const controller = new SidebarRightController(tabs, pin, host, { adopted, rooms, onScreen, openTabs: inventory.source, flashes });
  return {
    controller,
    forget: (sessionId) => {
      inventory.remove(sessionId);
      rooms.delete(sessionId);
      flashes.delete(sessionId);
    },
    show: (sessionId) => {
      if (onScreen.getSnapshot() !== sessionId) onScreen.set(sessionId);
    },
    measure: (sessionId, canSplitPane) => {
      rooms.set(sessionId, canSplitPane);
    },
    adopt(sessionId, store) {
      adopted.get(sessionId)?.unsubscribe();
      const sync = () => {
        const surface2 = store.getSnapshot().bySession[sessionId];
        inventory.update(sessionId, Object.values(surface2?.layout.tabs ?? {}));
        if (surface2 !== void 0) controller.tabDomain.sync(sessionId, surface2.layout);
      };
      const adoption = { store, unsubscribe: store.subscribe(sync) };
      adopted.set(sessionId, adoption);
      sync();
      return () => {
        adoption.unsubscribe();
        if (adopted.get(sessionId) === adoption) adopted.delete(sessionId);
      };
    }
  };
}
var RESOURCE_SCHEME = "dsh-resource://";
var SidebarRightController = class {
  /**
   * @param tabs - the tab-type registry consulted to claim an address.
   * @param pin - `ctx.resources.pin`, which the Tab domain holds addresses with.
   * @param host - the viewport rule and focus continuity the commands use.
   * @param sessions - plugin-owned adopted stores, room rules, on-screen Session, and open tab metadata.
   */
  constructor(tabs, pin, host, sessions) {
    this.tabs = tabs;
    this.host = host;
    this.adopted = sessions.adopted;
    this.rooms = sessions.rooms;
    this.mounted = sessions.onScreen;
    this.openTabs = sessions.openTabs;
    this.flashes = sessions.flashes;
    this.tabDomain = new TabDomain(this, pin);
  }
  tabs;
  host;
  /** Open tab metadata across saved and adopted Sessions, independent of visible seats. */
  openTabs;
  /** The on-screen Session; see {@link ISidebarRight.mounted}. */
  mounted;
  adopted;
  rooms;
  closeHandlers = /* @__PURE__ */ new Map();
  flashes;
  /**
   * Register resource cleanup before explicit removal. Failure preserves the tab.
   * @param kind - tab kind owned by the registering plugin.
   * @param handler - saves any background cleanup before returning and allowing removal.
   * @returns an effect-scoped unregister callback.
   */
  registerCloseHandler(kind, handler) {
    if (this.closeHandlers.has(kind)) throw new Error(`sidebarRight: close handler already registered for ${kind}`);
    this.closeHandlers.set(kind, handler);
    return () => {
      if (this.closeHandlers.get(kind) === handler) this.closeHandlers.delete(kind);
    };
  }
  /**
   * The Tab domain this controller navigates into; synced from each adopted
   * store's commits, read by the seat for each body's owner share.
   */
  tabDomain;
  /**
   * Read closeable tabs from the clicked pane.
   * @param sessionId - owning Session.
   * @param paneId - clicked pane.
   * @param tabId - anchor tab.
   * @returns closeable ids in display order, or empty sets after the anchor moves or closes.
   */
  menuTabs(sessionId, paneId2, tabId2) {
    const surface2 = this.adopted.get(sessionId)?.store.getSnapshot().bySession[sessionId];
    const pane = surface2?.layout.nodes[paneId2];
    if (surface2 === void 0 || pane?.kind !== "pane" || !pane.tabs.includes(tabId2)) return { all: [], right: [], close: false };
    const index = pane.tabs.indexOf(tabId2);
    const closeable = (id) => canCloseTab(surface2, id);
    return {
      close: closeable(tabId2),
      all: pane.tabs.filter((id) => id !== tabId2 && closeable(id)),
      right: pane.tabs.slice(index + 1).filter(closeable)
    };
  }
  /**
   * Read the committed tabs of a Session so providers can restore their content.
   * @param sessionId - Session whose layout has been adopted.
   * @returns its open records, or an empty list before adoption.
   */
  tabsIn(sessionId) {
    return Object.values(this.adopted.get(sessionId)?.store.getSnapshot().bySession[sessionId]?.layout.tabs ?? {});
  }
  /**
   * Open a resource: claim it, place it, reveal the column, record the navigation.
   * @param address - a `dsh-resource://<type>/…` address.
   * @param options - placement, the opening type, and navigation parameters.
   */
  openResource(address, options = {}) {
    const { sessionId, actions } = this.require();
    this.placeResource(sessionId, actions, address, options);
  }
  /**
   * Open a page type by kind at the address this package records pages under.
   * @param kind - the page type's kind.
   * @param options - placement and that kind's navigation parameters.
   */
  openTab(kind, options = {}) {
    const { sessionId, actions } = this.require();
    this.placeTab(sessionId, actions, kind, options);
  }
  /**
   * Open a resource in one session, for a tab's own action; nothing happens
   * for a session whose store was never adopted or whose adoption was released.
   * Not part of `ISidebarRight`: the Tab domain's path.
   * @param sessionId - the session the acting tab is in.
   * @param address - a `dsh-resource://<type>/…` address.
   * @param options - placement, the opening type, and navigation parameters.
   */
  openResourceIn(sessionId, address, options = {}) {
    const actions = this.actionsFor(sessionId);
    if (actions !== void 0) this.placeResource(sessionId, actions, address, options);
  }
  /**
   * Open a page type in one session, for a tab's own action; nothing happens
   * for a session whose store was never adopted or whose adoption was released.
   * Not part of `ISidebarRight`: the Tab domain's path.
   * @param sessionId - the session the acting tab is in.
   * @param kind - the page type's kind.
   * @param options - placement and that kind's navigation parameters.
   */
  openTabIn(sessionId, kind, options = {}) {
    const actions = this.actionsFor(sessionId);
    if (actions !== void 0) this.placeTab(sessionId, actions, kind, options);
  }
  /**
   * Close a tab of one session, preserving the sole docked guide; nothing happens
   * for a session whose store was never adopted or whose adoption was released.
   * Not part of `ISidebarRight`: the Tab domain's path.
   * @param sessionId - the session the tab is in.
   * @param tabId - the tab to close.
   */
  closeIn(sessionId, tabId2) {
    const actions = this.actionsFor(sessionId);
    const surface2 = this.adopted.get(sessionId)?.store.getSnapshot().bySession[sessionId];
    if (actions === void 0 || surface2 === void 0) return;
    const tab = surface2.layout.tabs[tabId2];
    if (tab === void 0 || !canCloseTab(surface2, tabId2)) return;
    this.removeAfterCleanup(sessionId, tab, () => {
      actions.closeTab(sessionId, tabId2);
    });
  }
  removeAfterCleanup(sessionId, tab, commit) {
    this.closeHandlers.get(tab.kind)?.(sessionId, tab);
    commit();
  }
  /** Claim a resource and place it in one session; an address outside the scheme or one no type claims throws. */
  placeResource(sessionId, actions, address, options) {
    if (!address.startsWith(RESOURCE_SCHEME)) {
      throw new Error(`sidebarRight: no registered tab type claims "${address}"`);
    }
    const claim = this.tabs.claim(address, options.kind);
    if (options.destination === void 0) this.place(sessionId, actions, claim, address, options, options.params);
    else this.placeIn(sessionId, actions, claim, address, options.destination, options.params);
  }
  /** Settle a claimed resource in an explicit host: one store intent, no close handler, and a flash only for a reveal. */
  placeIn(sessionId, actions, claim, address, destination, params) {
    const layout2 = this.adopted.get(sessionId)?.store.getSnapshot().bySession[sessionId]?.layout;
    const revealed = layout2 === void 0 ? void 0 : findHostContentTab(layout2, destination, claim.contentId, claim.kind);
    actions.openContent(
      sessionId,
      { kind: claim.kind, contentId: claim.contentId, title: claim.title, destination },
      (tabId2) => {
        this.tabDomain.navigate(sessionId, tabId2, { address, params });
      }
    );
    if (layout2 !== void 0 && revealed !== void 0) this.flashShowing(sessionId, layout2, revealed);
  }
  /** Place a page type in one session at the address pages are recorded under; an unregistered kind throws. */
  placeTab(sessionId, actions, kind, options) {
    const definition = this.tabs.get(kind);
    if (definition === void 0) throw new Error(`sidebarRight: no tab type is registered as "${kind}"`);
    const address = definition.multiple === true ? `${pageAddress(kind)}/${randomUUID()}` : pageAddress(kind);
    this.place(sessionId, actions, { kind, contentId: address, title: definition.title(address) }, address, options, options.params);
  }
  /** The steps both opens share: one store intent, and the navigation record for the tab it settles on. */
  place(sessionId, actions, claim, address, placement, params) {
    const surface2 = this.adopted.get(sessionId)?.store.getSnapshot().bySession[sessionId];
    const layout2 = surface2?.layout;
    const replaced = placement.replaceTab === void 0 ? void 0 : layout2?.tabs[placement.replaceTab];
    const targetPane = layout2 === void 0 ? void 0 : placement.paneId ?? (0, import_dsh_client_ui_dockkit6.activeDockPaneId)(layout2);
    const target = targetPane === void 0 ? void 0 : layout2?.nodes[targetPane];
    const preferNewPane = placement.preferNewPane === true && replaced === void 0 && layout2 !== void 0 && target?.kind === "pane" && target.host === "dock" && target.tabs.length > 0 && (0, import_dsh_client_ui_dockkit6.canSplit)(layout2) && (0, import_dsh_client_ui_dockkit6.dockPaneIds)(layout2).length < 2 && this.mounted.getSnapshot() === sessionId && this.canSplitPane(sessionId, target.id);
    const commit = () => {
      actions.openContent(sessionId, {
        kind: claim.kind,
        contentId: claim.contentId,
        title: claim.title,
        ...placement.paneId === void 0 ? {} : { paneId: placement.paneId },
        ...preferNewPane ? { preferNewPane: true } : {},
        ...replaced === void 0 ? {} : { replaceTab: replaced.id },
        ...placement.revealIfOpened === void 0 ? {} : { revealIfOpened: placement.revealIfOpened }
      }, (tabId2) => {
        this.tabDomain.navigate(sessionId, tabId2, { address, params });
      });
    };
    const pagePane = layout2 === void 0 ? void 0 : replaced === void 0 ? targetPane : (0, import_dsh_client_ui_dockkit6.findTabPane)(layout2, replaced.id).id;
    const revealed = layout2 === void 0 || pagePane === void 0 ? void 0 : claim.contentId === pageAddress(claim.kind) ? (0, import_dsh_client_ui_dockkit6.findPaneContentTab)(layout2, pagePane, claim.contentId, claim.kind) : placement.revealIfOpened === false ? void 0 : (0, import_dsh_client_ui_dockkit6.findContentTab)(layout2, claim.contentId, claim.kind);
    if (replaced === void 0 || revealed !== void 0) commit();
    else this.removeAfterCleanup(sessionId, replaced, commit);
    if (layout2 !== void 0 && revealed !== void 0) this.flashShowing(sessionId, layout2, revealed);
  }
  /**
   * The flash requests of one Session's seat: each open that reveals an
   * existing tab names the pane holding it, with a serial that changes on
   * every request.
   * @param sessionId - the Session whose seat draws the highlight.
   * @returns the Session's stable source.
   */
  flashOf(sessionId) {
    return this.flashSource(sessionId);
  }
  flashSource(sessionId) {
    let source = this.flashes.get(sessionId);
    if (source === void 0) {
      source = (0, import_dsh_client_store6.createSnapshotStore)(void 0);
      this.flashes.set(sessionId, source);
    }
    return source;
  }
  /**
   * Flash the pane holding a revealed tab only when that tab was already on screen; a reveal that switches
   * tabs or expands the column is its own visible change.
   */
  flashShowing(sessionId, layout2, tabId2) {
    const pane = (0, import_dsh_client_ui_dockkit6.findTabPane)(layout2, tabId2);
    if (pane.activeTabId === tabId2 && (pane.host === "float" || layout2.expanded)) this.flash(sessionId, pane.id);
  }
  /** Ask a Session's seat to highlight the pane holding a revealed tab. */
  flash(sessionId, paneId2) {
    const source = this.flashSource(sessionId);
    source.set({ paneId: paneId2, serial: (source.getSnapshot()?.serial ?? 0) + 1 });
  }
  /**
   * Close one tab of the on-screen Session; the sole docked guide remains open.
   * @param tabId - the tab to close.
   */
  close(tabId2) {
    this.closeIn(this.require().sessionId, tabId2);
  }
  /**
   * Hide a tab: close its floating occurrence, or collapse its docked column.
   * @param tabId - the tab to hide; missing tabs are unchanged.
   */
  hide(tabId2) {
    const layout2 = this.mountedSurface()?.layout;
    if (layout2?.tabs[tabId2] === void 0) return;
    if ((0, import_dsh_client_ui_dockkit6.findTabPane)(layout2, tabId2).host === "float") this.close(tabId2);
    else if (layout2.expanded) this.toggleExpanded();
  }
  /**
   * The active tab of the active pane.
   * @returns the record, or `undefined` without an on-screen surface.
   */
  active() {
    const layout2 = this.mountedSurface()?.layout;
    if (layout2 === void 0) return void 0;
    const { activeTabId } = (0, import_dsh_client_ui_dockkit6.getPane)(layout2, layout2.activePaneId);
    return Object.values(layout2.tabs).find((tab) => tab.id === activeTabId);
  }
  /**
   * Whether the column is currently showing its panel.
   * @returns `true` while expanded; `false` while collapsed or without an on-screen surface.
   */
  isExpanded() {
    return this.mountedSurface()?.layout.expanded ?? false;
  }
  /** Collapse the column, or expand it and focus its active dock pane after rendering. */
  toggleExpanded() {
    const { sessionId, actions } = this.require();
    this.host.openWithFocus(sessionId, () => {
      actions.toggleExpanded(sessionId);
      const layout2 = this.mountedSurface()?.layout;
      return layout2?.expanded ? (0, import_dsh_client_ui_dockkit6.activeDockPaneId)(layout2) : void 0;
    });
  }
  /**
   * Focus a tab and the pane holding it; a missing tab is left alone.
   * @param tabId - the tab to focus.
   */
  focus(tabId2) {
    const { sessionId, actions } = this.require();
    if (this.mountedSurface()?.layout.tabs[tabId2] === void 0) return;
    actions.focusTab(sessionId, tabId2);
  }
  /**
   * Capture the page owning current DOM focus; outside focus never uses layout history.
   * @param element - explicit input target, including an embedding iframe; defaults to live document focus.
   * @returns current focused page identity, or undefined outside a visible sidebar page.
   */
  focusedTarget(element = document.activeElement) {
    const screen = this.screen();
    return screen === void 0 ? void 0 : sidebarTargetFromElement(
      element,
      screen.sessionId,
      screen.surface.layout,
      (tabId2) => this.tabDomain.occurrence(screen.sessionId, { id: tabId2 })
    );
  }
  /**
   * Choose a focused sidebar pane, or the on-screen Session's active dock pane for an outside open.
   * @param element - live command input target; stale sidebar markup never falls back to another pane.
   * @returns captured target, or undefined without an on-screen surface.
   */
  commandTarget(element = document.activeElement) {
    const focused = this.focusedTarget(element);
    if (focused !== void 0 || element?.closest("[data-sidebar-right-session]")) return focused;
    const screen = this.screen();
    if (screen === void 0) return void 0;
    const { sessionId, surface: { layout: layout2 } } = screen;
    const pane = (0, import_dsh_client_ui_dockkit6.getPane)(layout2, (0, import_dsh_client_ui_dockkit6.activeDockPaneId)(layout2));
    const tabId2 = pane.activeTabId;
    const held = tabId2 === void 0 ? void 0 : this.tabDomain.occurrence(sessionId, { id: tabId2 });
    return {
      sessionId,
      paneId: pane.id,
      host: pane.host,
      tabId: tabId2,
      occurrence: held,
      navigationRevision: held?.navigation.getSnapshot().revision
    };
  }
  /**
   * Open from a captured pane using the guide's replacement and floating placement rules.
   * @param kind - registered page kind.
   * @param target - captured live pane and optional page.
   */
  openTabFromTarget(kind, target) {
    if (!this.isTargetCurrent(target)) return;
    const { sessionId, actions } = this.require();
    this.host.openWithFocus(sessionId, () => {
      const tab = target.tabId === void 0 ? void 0 : this.mountedSurface()?.layout.tabs[target.tabId];
      if (target.host === "float" && tab?.kind === kind && this.tabs.get(kind)?.multiple !== true) {
        actions.setExpanded(sessionId, true);
        this.focus(tab.id);
        this.flash(sessionId, target.paneId);
      } else {
        const guide = tab?.kind === "guide" ? tab : void 0;
        this.openTab(kind, {
          ...target.host === "dock" ? { paneId: target.paneId } : {},
          ...guide === void 0 ? {} : { replaceTab: guide.id }
        });
        if (guide !== void 0) this.closeIn(sessionId, guide.id);
      }
      return this.mountedSurface()?.layout.activePaneId;
    });
  }
  /**
   * Test explicit close eligibility without using the last selected page.
   * @param target - captured focused page.
   * @returns whether this current page can be removed or its sole guide pane collapsed.
   */
  canCloseTarget(target) {
    return this.isTargetCurrent(target) && target.tabId !== void 0;
  }
  /**
   * Remove a captured page through its resource cleanup handler, or collapse the sole docked guide.
   * Cleanup errors propagate and preserve the page.
   * @param target - page captured while resolving the command.
   * @returns closed after removal or collapse, unavailable without a page, or stale after identity changes.
   */
  closeTarget(target) {
    if (!this.isTargetCurrent(target)) return "stale";
    const surface2 = this.mountedSurface();
    if (surface2 === void 0 || target.tabId === void 0) return "unavailable";
    const tabId2 = target.tabId;
    const { sessionId, actions } = this.require();
    this.host.closeWithFocus(sessionId, target.paneId, () => {
      if (canCloseTab(surface2, tabId2)) this.close(tabId2);
      else actions.setExpanded(sessionId, false);
    });
    return "closed";
  }
  /**
   * Check a captured target before acting, including reopened records and intervening navigation.
   * @param target - identity captured while resolving the input.
   * @returns whether the on-screen Session, pane, tab lifetime and navigation still match.
   */
  isTargetCurrent(target) {
    if (this.mounted.getSnapshot() !== target.sessionId) return false;
    const layout2 = this.mountedSurface()?.layout;
    const pane = layout2?.nodes[target.paneId];
    if (pane?.kind !== "pane" || pane.host !== target.host) return false;
    if (target.tabId === void 0) return pane.activeTabId === void 0;
    if (!pane.tabs.includes(target.tabId) || layout2?.tabs[target.tabId] === void 0) return false;
    const held = this.tabDomain.occurrence(target.sessionId, { id: target.tabId });
    return held === target.occurrence && !held.signal.aborted && held.navigation.getSnapshot().revision === target.navigationRevision;
  }
  /**
   * Explain the same geometry and pane-budget rule used by the split control.
   * @param target - captured command or button target.
   * @returns a localizable block discriminator, or undefined when splitting is available.
   */
  splitBlock(target) {
    const surface2 = this.mountedSurface();
    if (surface2 === void 0 || !this.isTargetCurrent(target)) return "stale";
    const { layout: layout2 } = surface2;
    if (target.host === "float") return "float";
    if (!layout2.expanded) return "collapsed";
    if ((0, import_dsh_client_ui_dockkit6.getPane)(layout2, target.paneId).tabs.length === 0) return "empty";
    if (!(0, import_dsh_client_ui_dockkit6.canSplit)(layout2) || (0, import_dsh_client_ui_dockkit6.dockPaneIds)(layout2).length >= 2) return "budget";
    if (!this.canSplitPane(target.sessionId, target.paneId)) return "width";
    return void 0;
  }
  /**
   * Toggle the right panel's display mode through the same action as its chrome button.
   * @param target - captured dock pane; floating and stale targets are unchanged.
   */
  toggleFullscreen(target) {
    if (!this.isTargetCurrent(target) || target.host === "float" || !this.isExpanded()) return;
    const { sessionId, actions } = this.require();
    const autoFullscreen = this.host.autoFullscreen();
    const fullscreen = autoFullscreen || this.mountedSurface()?.layout.mode === "fullscreen";
    if (fullscreen && autoFullscreen) actions.setExpanded(sessionId, false);
    actions.setMode(sessionId, fullscreen ? "push" : "fullscreen");
  }
  /**
   * Split a docked pane to its right when the budget and the room rule allow.
   * @param paneId - the pane to split; defaults to the active docked pane.
   * @returns the new pane's id, or `undefined` when nothing was split.
   */
  split(paneId2) {
    const { sessionId, actions } = this.require();
    const layout2 = this.mountedSurface()?.layout;
    if (layout2 === void 0) return void 0;
    const target = paneId2 ?? (0, import_dsh_client_ui_dockkit6.activeDockPaneId)(layout2);
    const node2 = layout2.nodes[target];
    if (node2 === void 0 || node2.kind !== "pane" || node2.host !== "dock") return void 0;
    if (!(0, import_dsh_client_ui_dockkit6.canSplit)(layout2) || (0, import_dsh_client_ui_dockkit6.dockPaneIds)(layout2).length >= 2 || !this.canSplitPane(sessionId, target)) return void 0;
    let created;
    this.host.openWithFocus(sessionId, () => {
      actions.splitPane(sessionId, target, (id) => {
        created = id;
      });
      return created;
    });
    return created;
  }
  /**
   * Take a docked tab out into a floating panel; a missing or floating tab is left alone.
   * @param tabId - the tab to float.
   * @param rect - the panel's rectangle; defaults to the cascade from the last panel.
   */
  float(tabId2, rect) {
    const { sessionId, actions } = this.require();
    const layout2 = this.mountedSurface()?.layout;
    if (layout2 === void 0 || layout2.tabs[tabId2] === void 0) return;
    if ((0, import_dsh_client_ui_dockkit6.findTabPane)(layout2, tabId2).host !== "dock") return;
    actions.floatTab(sessionId, tabId2, rect);
  }
  /**
   * Return a floating panel's tab to the active docked pane and expand the column; a missing or docked pane is left alone.
   * @param paneId - the floating pane.
   */
  dock(paneId2) {
    const { sessionId, actions } = this.require();
    const node2 = this.mountedSurface()?.layout.nodes[paneId2];
    if (node2 === void 0 || node2.kind !== "pane" || node2.host !== "float") return;
    actions.unfloatPane(sessionId, paneId2);
  }
  /**
   * Step the on-screen Session's surface back one intent.
   *
   * @internal Not part of the product: the sequence is an architectural fact
   * with no user-facing control yet. Kept reachable for tests.
   */
  _undo() {
    const { sessionId, actions } = this.require();
    actions.undo(sessionId);
  }
  /**
   * Step the on-screen Session's surface forward one intent.
   *
   * @internal See `_undo`.
   */
  _redo() {
    const { sessionId, actions } = this.require();
    actions.redo(sessionId);
  }
  /**
   * The on-screen Session and its committed surface; `undefined` with no Session
   * on screen, before the runtime mints its store, or before its first open.
   */
  screen() {
    const sessionId = this.mounted.getSnapshot();
    if (sessionId === void 0) return void 0;
    const surface2 = this.adopted.get(sessionId)?.store.getSnapshot().bySession[sessionId];
    return surface2 === void 0 ? void 0 : { sessionId, surface: surface2 };
  }
  /** The on-screen Session's surface; see {@link SidebarRightController.screen}. */
  mountedSurface() {
    return this.screen()?.surface;
  }
  /** Whether a Session's docked pane has room for two working halves, as its seat last measured; unmeasured panes do. */
  canSplitPane(sessionId, paneId2) {
    return this.rooms.get(sessionId)?.(paneId2) ?? true;
  }
  /**
   * The store actions a tab's own action on `sessionId` runs through: that
   * session's adopted store. `undefined` — nothing to act on — for a session
   * whose store was never minted or whose adoption was released.
   */
  actionsFor(sessionId) {
    return this.adopted.get(sessionId)?.store.actions;
  }
  require() {
    const sessionId = this.mounted.getSnapshot();
    const actions = sessionId === void 0 ? void 0 : this.actionsFor(sessionId);
    if (sessionId === void 0 || actions === void 0) {
      throw new Error("sidebarRight: no session surface is mounted");
    }
    return { sessionId, actions };
  }
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tab-registry.ts
var import_dsh_client_store7 = require("@deepseek-ai/dsh-client-store");
var import_posix = __toESM(require_posix(), 1);
var RANKS = {
  extension: 3,
  builtin: 2,
  fallback: 1
};
var DEFAULT_BAND = "extension";
function coexists(slot, band) {
  return band !== "fallback" && slot.inForce.band !== "fallback" && slot.inForce.band !== band && slot.shadowed === void 0;
}
function pathOf(address) {
  try {
    return new URL(address).pathname;
  } catch {
    return void 0;
  }
}
function matcherFor(pattern) {
  const whole = pattern.includes(":");
  const match = (0, import_posix.default)(pattern, { nocase: true, dot: true, ...whole ? {} : { basename: true } });
  return (address) => {
    if (whole) return match(address);
    const path = pathOf(address);
    return path !== void 0 && match(path);
  };
}
var SidebarRightTabRegistry = class {
  /** @param ctx - Context whose effects own the contributed types. */
  constructor(ctx) {
    this.ctx = ctx;
  }
  ctx;
  kinds = /* @__PURE__ */ new Map();
  ids = /* @__PURE__ */ new Set();
  listeners = /* @__PURE__ */ new Set();
  registrations = 0;
  cached = [];
  guideEntries = [];
  /**
   * Register one tab type for the caller's lifetime.
   *
   * The caller holds the returned disposer inside its own `ctx.effect`, so a
   * type's registration lives exactly as long as the plugin that contributed it.
   * An `extension` may register a kind a `builtin` already holds and takes it
   * over until it unregisters; a second registration in the same band, or any
   * registration meeting a `fallback` of the same kind, is a wiring mistake, and
   * so is an `id` already in use.
   * @param definition - the contributed type.
   * @returns idempotent disposer.
   * @throws when the id is taken, or the kind is already registered in a way this one cannot coexist with.
   */
  register(definition) {
    const { id, kind } = definition;
    const entries = definition.guide ?? [];
    if (new Set(entries.map((entry2) => entry2.id)).size !== entries.length) throw new Error(`sidebarRight: duplicate guide entry id in "${id}"`);
    const band = definition.priority ?? DEFAULT_BAND;
    if (this.ids.has(id)) throw new Error(`sidebarRight: tab type id "${id}" is already registered`);
    const held = this.kinds.get(kind);
    if (held !== void 0 && !coexists(held, band)) {
      throw new Error(`sidebarRight: tab kind "${kind}" is already registered (${held.inForce.band})`);
    }
    this.registrations += 1;
    const entry = {
      definition,
      band,
      matchers: (definition.patterns ?? []).map((pattern) => ({ pattern, test: matcherFor(pattern) })),
      order: this.registrations
    };
    const dispose = this.ctx.effect(() => {
      this.ids.add(id);
      const slot = this.enter(kind, entry);
      this.refresh();
      return () => {
        this.ids.delete(id);
        this.leave(kind, slot, entry);
        this.refresh();
      };
    }, `sidebarRight.tabs.register(${JSON.stringify(id)})`);
    return () => {
      void dispose();
    };
  }
  /** Add a registration to its kind's slot, the higher band in force; `coexists` has already admitted it. */
  enter(kind, entry) {
    const held = this.kinds.get(kind);
    if (held === void 0) {
      const slot = { inForce: entry, shadowed: void 0 };
      this.kinds.set(kind, slot);
      return slot;
    }
    if (RANKS[entry.band] > RANKS[held.inForce.band]) {
      held.shadowed = held.inForce;
      held.inForce = entry;
    } else {
      held.shadowed = entry;
    }
    return held;
  }
  /** Remove a registration from its kind's slot: a shadowed builtin resumes, and an emptied kind is freed. */
  leave(kind, slot, entry) {
    if (slot.inForce !== entry) {
      slot.shadowed = void 0;
    } else if (slot.shadowed === void 0) {
      this.kinds.delete(kind);
    } else {
      slot.inForce = slot.shadowed;
      slot.shadowed = void 0;
    }
  }
  /** Every kind's registration in force, in registration order. */
  active() {
    return [...this.kinds.values()].map((slot) => slot.inForce).sort((left, right) => left.order - right.order);
  }
  /**
   * Registered types in registration order.
   * @returns reference-stable entries.
   */
  entries() {
    return this.cached;
  }
  /**
   * Every type in force's guide entries, in `order`, each naming the kind it opens.
   * @returns reference-stable entries.
   */
  guide() {
    return this.guideEntries;
  }
  /**
   * The type in force for a kind.
   * @param kind - the type discriminator.
   * @returns the type, or `undefined` when nothing registered it.
   */
  get(kind) {
    return this.kinds.get(kind)?.inForce.definition;
  }
  /**
   * Every type that would open an address, best first.
   *
   * Ranked by priority band, then by the length of the pattern that matched,
   * then by registration order. Types whose `canOpen` vetoes are absent.
   * @param address - the address a caller wants opened.
   * @returns the ranked types; empty when nothing recognizes the address.
   */
  candidates(address) {
    const ranked = [];
    for (const { definition, band, matchers, order } of this.active()) {
      let length = -1;
      for (const matcher of matchers) {
        if (matcher.test(address) && matcher.pattern.length > length) length = matcher.pattern.length;
      }
      if (length < 0) continue;
      if (definition.canOpen !== void 0 && !definition.canOpen(address)) continue;
      ranked.push({ definition, rank: RANKS[band], length, order });
    }
    ranked.sort((left, right) => right.rank - left.rank || right.length - left.length || left.order - right.order);
    return ranked.map((entry) => entry.definition);
  }
  /**
   * Decide which type opens an address, and as what.
   *
   * Without `kind`, the best candidate wins. With `kind`, that type opens the
   * address if its `canOpen` agrees — its globs are not consulted, because
   * naming the type IS the decision.
   *
   * An address no type will open is a wiring mistake, not a user error, so this
   * throws rather than reporting absence.
   * @param address - the address a caller wants opened.
   * @param kind - a type named by the caller, overriding the ranking.
   * @returns the claiming type and the record to open.
   */
  claim(address, kind) {
    if (kind !== void 0) {
      const definition = this.get(kind);
      if (definition === void 0) {
        throw new Error(`sidebarRight: no tab type is registered as "${kind}"`);
      }
      if (definition.canOpen !== void 0 && !definition.canOpen(address)) {
        throw new Error(`sidebarRight: tab type "${kind}" refuses "${address}"`);
      }
      return { kind, contentId: address, title: definition.title(address) };
    }
    const [chosen] = this.candidates(address);
    if (chosen === void 0) {
      throw new Error(`sidebarRight: no registered tab type claims "${address}"`);
    }
    return { kind: chosen.kind, contentId: address, title: chosen.title(address) };
  }
  /**
   * Observe low-frequency registry changes.
   * @param listener - synchronous invalidation callback.
   * @returns unsubscribe callback.
   */
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  refresh() {
    this.cached = this.active().map((entry) => entry.definition);
    this.guideEntries = this.cached.flatMap((definition) => (definition.guide ?? []).map((entry) => ({ ...entry, kind: definition.kind, providerId: definition.id }))).sort((left, right) => left.order - right.order);
    (0, import_dsh_client_store7.notifySubscribers)(this.listeners, "[ui-sidebar-right] tab registry");
  }
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/locales.ts
var zh = {
  "menu.close": "\u5173\u95ED",
  "menu.closeOthers": "\u5173\u95ED\u5176\u4ED6\u6807\u7B7E\u9875",
  "menu.closeRight": "\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875",
  "command.close": "\u5173\u95ED\u5F53\u524D\u9875\u9762\uFF0F\u7A97\u53E3",
  "command.refresh": "\u5237\u65B0\u5F53\u524D\u9875\u9762",
  "command.noRefresh": "\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5237\u65B0",
  "command.toggle": "\u5C55\u5F00\uFF0F\u6536\u8D77\u53F3\u4FA7\u680F",
  "command.fullscreen": "\u9762\u677F\u5168\u5C4F\uFF0F\u9000\u51FA\u5168\u5C4F",
  "command.noSession": "\u8BF7\u5148\u9009\u62E9\u4F1A\u8BDD",
  "command.noFocus": "\u8BF7\u5148\u805A\u7126\u53F3\u4FA7\u9762\u677F",
  "command.stale": "\u9875\u9762\u5DF2\u5207\u6362\uFF0C\u8BF7\u91CD\u65B0\u805A\u7126",
  "command.collapsed": "\u8BF7\u5148\u5C55\u5F00\u53F3\u4FA7\u680F",
  "command.float": "\u6D6E\u52A8\u9762\u677F\u4E0D\u652F\u6301\u6B64\u64CD\u4F5C",
  "command.empty": "\u8BF7\u5148\u6253\u5F00\u9875\u9762",
  "command.budget": "\u5DF2\u8FBE\u4E24\u683C\u4E0A\u9650",
  "command.width": "\u680F\u5BBD\u4E0D\u8DB3\uFF0C\u62D6\u5BBD\u4FA7\u8FB9\u680F\u540E\u518D\u5206\u680F",
  "chrome.expand": "\u6253\u5F00\u4FA7\u8FB9\u680F",
  "chrome.expandAria": "\u6253\u5F00\u53F3\u4FA7\u8FB9\u680F",
  "chrome.collapse": "\u6536\u8D77\u4FA7\u8FB9\u680F",
  "chrome.collapseAria": "\u6536\u8D77\u53F3\u4FA7\u8FB9\u680F",
  "chrome.toFullscreen": "\u5168\u5C4F",
  "chrome.exitFullscreen": "\u9000\u51FA\u5168\u5C4F",
  "dock.emptyPane": "\u7A7A\u9762\u677F",
  "dock.splitPane": "\u5206\u680F",
  "dock.splitPaneDisabled": "\u5DF2\u8FBE\u4E24\u683C\u4E0A\u9650",
  "dock.splitPaneNarrow": "\u680F\u5BBD\u4E0D\u8DB3\uFF0C\u62D6\u5BBD\u4FA7\u8FB9\u680F\u540E\u518D\u5206\u680F",
  "dock.closeTab": "\u5173\u95ED",
  "dock.addTab": "\u65B0\u6807\u7B7E\u9875",
  "dock.dockFloat": "\u6536\u56DE\u5230\u4FA7\u8FB9\u680F",
  "dock.closeFloat": "\u5173\u95ED",
  "dock.drop.center": "\u79FB\u5230\u8FD9\u91CC",
  "dock.drop.left": "\u5DE6\u5206\u680F",
  "dock.drop.right": "\u53F3\u5206\u680F",
  "dock.drop.top": "\u4E0A\u5206\u680F",
  "dock.drop.bottom": "\u4E0B\u5206\u680F",
  "tab.guide.title": "\u5F00\u59CB",
  "tab.guide.more": "\u66F4\u591A\u5DE5\u5177",
  "tab.unavailable": "\u8FD9\u7C7B\u5185\u5BB9\u8FD8\u6CA1\u6709\u53EF\u7528\u7684\u67E5\u770B\u65B9\u5F0F\u3002"
};
var en = {
  "menu.close": "Close",
  "menu.closeOthers": "Close Other Tabs",
  "menu.closeRight": "Close Tabs to the Right",
  "command.close": "Close current page or window",
  "command.refresh": "Refresh current page",
  "command.noRefresh": "This page cannot be refreshed",
  "command.toggle": "Toggle right sidebar",
  "command.fullscreen": "Toggle panel fullscreen",
  "command.noSession": "Select a session first",
  "command.noFocus": "Focus a right sidebar pane first",
  "command.stale": "The page changed; focus it again",
  "command.collapsed": "Expand the right sidebar first",
  "command.float": "This action is unavailable in a floating panel",
  "command.empty": "Open a page first",
  "command.budget": "Two panes is the limit",
  "command.width": "Not enough width to split, widen the sidebar",
  "chrome.expand": "Open sidebar",
  "chrome.expandAria": "Open right sidebar",
  "chrome.collapse": "Collapse sidebar",
  "chrome.collapseAria": "Collapse right sidebar",
  "chrome.toFullscreen": "Fullscreen",
  "chrome.exitFullscreen": "Exit fullscreen",
  "dock.emptyPane": "Empty pane",
  "dock.splitPane": "Split",
  "dock.splitPaneDisabled": "Two panes is the limit",
  "dock.splitPaneNarrow": "Not enough width to split, widen the sidebar",
  "dock.closeTab": "Close",
  "dock.addTab": "New tab",
  "dock.dockFloat": "Send back to the sidebar",
  "dock.closeFloat": "Close",
  "dock.drop.center": "Move here",
  "dock.drop.left": "Add left split",
  "dock.drop.right": "Add right split",
  "dock.drop.top": "Add top split",
  "dock.drop.bottom": "Add bottom split",
  "tab.guide.title": "Start",
  "tab.guide.more": "More tools",
  "tab.unavailable": "Nothing here can view this kind of content yet."
};
var ja = {
  "menu.close": "\u9589\u3058\u308B",
  "menu.closeOthers": "\u4ED6\u306E\u30BF\u30D6\u3092\u9589\u3058\u308B",
  "menu.closeRight": "\u53F3\u5074\u306E\u30BF\u30D6\u3092\u9589\u3058\u308B",
  "command.close": "\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u307E\u305F\u306F\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u9589\u3058\u308B",
  "command.refresh": "\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u3092\u66F4\u65B0",
  "command.noRefresh": "\u3053\u306E\u30DA\u30FC\u30B8\u306F\u66F4\u65B0\u3067\u304D\u307E\u305B\u3093",
  "command.toggle": "\u53F3\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u5207\u308A\u66FF\u3048",
  "command.fullscreen": "\u30D1\u30CD\u30EB\u306E\u5168\u753B\u9762\u8868\u793A\u3092\u5207\u308A\u66FF\u3048",
  "command.noSession": "\u5148\u306B\u30BB\u30C3\u30B7\u30E7\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044",
  "command.noFocus": "\u5148\u306B\u53F3\u30B5\u30A4\u30C9\u30D0\u30FC\u306E\u30DA\u30A4\u30F3\u306B\u30D5\u30A9\u30FC\u30AB\u30B9\u3057\u3066\u304F\u3060\u3055\u3044",
  "command.stale": "\u30DA\u30FC\u30B8\u304C\u5909\u66F4\u3055\u308C\u307E\u3057\u305F\u3002\u518D\u5EA6\u30D5\u30A9\u30FC\u30AB\u30B9\u3057\u3066\u304F\u3060\u3055\u3044",
  "command.collapsed": "\u5148\u306B\u53F3\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u5C55\u958B\u3057\u3066\u304F\u3060\u3055\u3044",
  "command.float": "\u3053\u306E\u64CD\u4F5C\u306F\u30D5\u30ED\u30FC\u30C6\u30A3\u30F3\u30B0\u30D1\u30CD\u30EB\u3067\u306F\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093",
  "command.empty": "\u5148\u306B\u30DA\u30FC\u30B8\u3092\u958B\u3044\u3066\u304F\u3060\u3055\u3044",
  "command.budget": "\u30DA\u30A4\u30F3\u306F2\u3064\u307E\u3067\u3067\u3059",
  "command.width": "\u5206\u5272\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u5E45\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u5E83\u3052\u3066\u304F\u3060\u3055\u3044",
  "chrome.expand": "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u958B\u304F",
  "chrome.expandAria": "\u53F3\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u958B\u304F",
  "chrome.collapse": "\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080",
  "chrome.collapseAria": "\u53F3\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u6298\u308A\u305F\u305F\u3080",
  "chrome.toFullscreen": "\u5168\u753B\u9762",
  "chrome.exitFullscreen": "\u5168\u753B\u9762\u3092\u7D42\u4E86",
  "dock.emptyPane": "\u7A7A\u306E\u30DA\u30A4\u30F3",
  "dock.splitPane": "\u5206\u5272",
  "dock.splitPaneDisabled": "\u30DA\u30A4\u30F3\u306F2\u3064\u307E\u3067\u3067\u3059",
  "dock.splitPaneNarrow": "\u5206\u5272\u3059\u308B\u306E\u306B\u5341\u5206\u306A\u5E45\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30B5\u30A4\u30C9\u30D0\u30FC\u3092\u5E83\u3052\u3066\u304F\u3060\u3055\u3044",
  "dock.closeTab": "\u9589\u3058\u308B",
  "dock.addTab": "\u65B0\u3057\u3044\u30BF\u30D6",
  "dock.dockFloat": "\u30B5\u30A4\u30C9\u30D0\u30FC\u306B\u623B\u3059",
  "dock.closeFloat": "\u9589\u3058\u308B",
  "dock.drop.center": "\u3053\u3053\u306B\u79FB\u52D5",
  "dock.drop.left": "\u5DE6\u306B\u5206\u5272\u3092\u8FFD\u52A0",
  "dock.drop.right": "\u53F3\u306B\u5206\u5272\u3092\u8FFD\u52A0",
  "dock.drop.top": "\u4E0A\u306B\u5206\u5272\u3092\u8FFD\u52A0",
  "dock.drop.bottom": "\u4E0B\u306B\u5206\u5272\u3092\u8FFD\u52A0",
  "tab.guide.title": "\u958B\u59CB",
  "tab.guide.more": "\u305D\u306E\u4ED6\u306E\u30C4\u30FC\u30EB",
  "tab.unavailable": "\u3053\u306E\u7A2E\u985E\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3092\u8868\u793A\u3067\u304D\u308B\u3082\u306E\u306F\u307E\u3060\u3042\u308A\u307E\u305B\u3093\u3002"
};
var es = {
  "menu.close": "Cerrar",
  "menu.closeOthers": "Cerrar otras pesta\xF1as",
  "menu.closeRight": "Cerrar pesta\xF1as a la derecha",
  "command.close": "Cerrar la p\xE1gina o ventana actual",
  "command.refresh": "Actualizar la p\xE1gina actual",
  "command.noRefresh": "Esta p\xE1gina no se puede actualizar",
  "command.toggle": "Alternar barra lateral derecha",
  "command.fullscreen": "Alternar panel de pantalla completa",
  "command.noSession": "Seleccione una sesi\xF3n primero",
  "command.noFocus": "Enfoque primero un panel de la barra lateral derecha",
  "command.stale": "La p\xE1gina cambi\xF3; enfocarlo de nuevo",
  "command.collapsed": "Expande primero la barra lateral derecha",
  "command.float": "Esta acci\xF3n no est\xE1 disponible en un panel flotante",
  "command.empty": "Abra una p\xE1gina primero",
  "command.budget": "Dos paneles es el l\xEDmite",
  "command.width": "No hay suficiente ancho para dividir, ampliar la barra lateral",
  "chrome.expand": "Abrir barra lateral",
  "chrome.expandAria": "Abrir barra lateral derecha",
  "chrome.collapse": "Contraer barra lateral",
  "chrome.collapseAria": "Contraer barra lateral derecha",
  "chrome.toFullscreen": "Pantalla completa",
  "chrome.exitFullscreen": "Salir de pantalla completa",
  "dock.emptyPane": "Panel vac\xEDo",
  "dock.splitPane": "dividir",
  "dock.splitPaneDisabled": "Dos paneles es el l\xEDmite",
  "dock.splitPaneNarrow": "No hay suficiente ancho para dividir, ampliar la barra lateral",
  "dock.closeTab": "Cerrar",
  "dock.addTab": "Nueva pesta\xF1a",
  "dock.dockFloat": "Enviar de vuelta a la barra lateral",
  "dock.closeFloat": "Cerrar",
  "dock.drop.center": "Mu\xE9vete aqu\xED",
  "dock.drop.left": "Agregar divisi\xF3n izquierda",
  "dock.drop.right": "Agregar divisi\xF3n a la derecha",
  "dock.drop.top": "Agregar divisi\xF3n superior",
  "dock.drop.bottom": "Agregar divisi\xF3n inferior",
  "tab.guide.title": "Empezar",
  "tab.guide.more": "M\xE1s herramientas",
  "tab.unavailable": "Nada aqu\xED puede ver este tipo de contenido todav\xEDa."
};
var fr = {
  "menu.close": "Fermer",
  "menu.closeOthers": "Fermer les autres onglets",
  "menu.closeRight": "Fermer les onglets \xE0 droite",
  "command.close": "Fermer la page ou la fen\xEAtre actuelle",
  "command.refresh": "Actualiser la page actuelle",
  "command.noRefresh": "Cette page ne peut pas \xEAtre actualis\xE9e",
  "command.toggle": "Basculer la barre lat\xE9rale droite",
  "command.fullscreen": "Basculer le panneau en plein \xE9cran",
  "command.noSession": "S\xE9lectionnez d'abord une session",
  "command.noFocus": "Concentrer d'abord un volet de la barre lat\xE9rale droite",
  "command.stale": "La page a chang\xE9 ; concentre-le \xE0 nouveau",
  "command.collapsed": "D\xE9veloppez d'abord la barre lat\xE9rale droite",
  "command.float": "Cette action n'est pas disponible dans un panneau flottant",
  "command.empty": "Ouvrir d'abord une page",
  "command.budget": "Deux panneaux sont la limite",
  "command.width": "Pas assez de largeur pour diviser, \xE9largir la barre lat\xE9rale",
  "chrome.expand": "Ouvrir la barre lat\xE9rale",
  "chrome.expandAria": "Ouvrir la barre lat\xE9rale droite",
  "chrome.collapse": "R\xE9duire la barre lat\xE9rale",
  "chrome.collapseAria": "R\xE9duire la barre lat\xE9rale droite",
  "chrome.toFullscreen": "Plein \xE9cran",
  "chrome.exitFullscreen": "Quitter le plein \xE9cran",
  "dock.emptyPane": "Volet vide",
  "dock.splitPane": "Diviser",
  "dock.splitPaneDisabled": "Deux panneaux sont la limite",
  "dock.splitPaneNarrow": "Pas assez de largeur pour diviser, \xE9largir la barre lat\xE9rale",
  "dock.closeTab": "Fermer",
  "dock.addTab": "Nouvel onglet",
  "dock.dockFloat": "Renvoyer \xE0 la barre lat\xE9rale",
  "dock.closeFloat": "Fermer",
  "dock.drop.center": "D\xE9placez-vous ici",
  "dock.drop.left": "Ajouter une division \xE0 gauche",
  "dock.drop.right": "Ajouter une division \xE0 droite",
  "dock.drop.top": "Ajouter une division sup\xE9rieure",
  "dock.drop.bottom": "Ajouter une division inf\xE9rieure",
  "tab.guide.title": "Commencer",
  "tab.guide.more": "Plus d'outils",
  "tab.unavailable": "Rien ici ne peut encore afficher ce type de contenu."
};
var de = {
  "menu.close": "Schlie\xDFen",
  "menu.closeOthers": "Andere Tabs schlie\xDFen",
  "menu.closeRight": "Tabs rechts schlie\xDFen",
  "command.close": "Aktuelle Seite oder Fenster schlie\xDFen",
  "command.refresh": "Aktuelle Seite aktualisieren",
  "command.noRefresh": "Diese Seite kann nicht aktualisiert werden",
  "command.toggle": "Rechte Seitenleiste umschalten",
  "command.fullscreen": "Panel-Vollbild umschalten",
  "command.noSession": "W\xE4hlen Sie zun\xE4chst eine Sitzung aus",
  "command.noFocus": "Fokussieren Sie zuerst einen rechten Seitenleistenbereich",
  "command.stale": "Die Seite hat sich ge\xE4ndert; Konzentrieren Sie es erneut",
  "command.collapsed": "Erweitern Sie zun\xE4chst die rechte Seitenleiste",
  "command.float": "Diese Aktion ist in einem schwebenden Panel nicht verf\xFCgbar",
  "command.empty": "\xD6ffnen Sie zun\xE4chst eine Seite",
  "command.budget": "Zwei Scheiben sind die Grenze",
  "command.width": "Die Breite reicht nicht aus, um die Seitenleiste zu teilen. Verbreitern Sie die Seitenleiste",
  "chrome.expand": "Seitenleiste \xF6ffnen",
  "chrome.expandAria": "Rechte Seitenleiste \xF6ffnen",
  "chrome.collapse": "Seitenleiste einklappen",
  "chrome.collapseAria": "Rechte Seitenleiste einklappen",
  "chrome.toFullscreen": "Vollbild",
  "chrome.exitFullscreen": "Beenden Sie den Vollbildmodus",
  "dock.emptyPane": "Leerer Bereich",
  "dock.splitPane": "Geteilt",
  "dock.splitPaneDisabled": "Zwei Scheiben sind die Grenze",
  "dock.splitPaneNarrow": "Die Breite reicht nicht aus, um die Seitenleiste zu teilen. Verbreitern Sie die Seitenleiste",
  "dock.closeTab": "Schlie\xDFen",
  "dock.addTab": "Neuer Tab",
  "dock.dockFloat": "Zur\xFCck zur Seitenleiste senden",
  "dock.closeFloat": "Schlie\xDFen",
  "dock.drop.center": "Bewegen Sie sich hierher",
  "dock.drop.left": "Linke Teilung hinzuf\xFCgen",
  "dock.drop.right": "Rechte Teilung hinzuf\xFCgen",
  "dock.drop.top": "Oberen Split hinzuf\xFCgen",
  "dock.drop.bottom": "Untere Teilung hinzuf\xFCgen",
  "tab.guide.title": "Starten",
  "tab.guide.more": "Weitere Werkzeuge",
  "tab.unavailable": "Diese Art von Inhalten kann hier noch nicht angezeigt werden."
};
var ru = {
  "menu.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  "menu.closeOthers": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043A\u043B\u0430\u0434\u043A\u0438",
  "menu.closeRight": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u043A\u043B\u0430\u0434\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430",
  "command.close": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0438\u043B\u0438 \u043E\u043A\u043D\u043E",
  "command.refresh": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  "command.noRefresh": "\u042D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
  "command.toggle": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0443\u044E \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "command.fullscreen": "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
  "command.noSession": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0430\u043D\u0441",
  "command.noFocus": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0441\u0444\u043E\u043A\u0443\u0441\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u043F\u0440\u0430\u0432\u043E\u0439 \u0431\u043E\u043A\u043E\u0432\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438",
  "command.stale": "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C; \u0441\u043E\u0441\u0440\u0435\u0434\u043E\u0442\u043E\u0447\u044C\u0441\u044F \u0435\u0449\u0435 \u0440\u0430\u0437",
  "command.collapsed": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0438\u0442\u0435 \u043F\u0440\u0430\u0432\u0443\u044E \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "command.float": "\u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043D\u0430 \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0435\u0439 \u043F\u0430\u043D\u0435\u043B\u0438.",
  "command.empty": "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  "command.budget": "\u0414\u0432\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u2014 \u044D\u0442\u043E \u043F\u0440\u0435\u0434\u0435\u043B",
  "command.width": "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0448\u0438\u0440\u0438\u043D\u044B \u0434\u043B\u044F \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u0448\u0438\u0440\u044C\u0442\u0435 \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "chrome.expand": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "chrome.expandAria": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0430\u0432\u0443\u044E \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "chrome.collapse": "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "chrome.collapseAria": "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u0430\u0432\u0443\u044E \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "chrome.toFullscreen": "\u041F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
  "chrome.exitFullscreen": "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430",
  "dock.emptyPane": "\u041F\u0443\u0441\u0442\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C",
  "dock.splitPane": "\u0421\u043F\u043B\u0438\u0442",
  "dock.splitPaneDisabled": "\u0414\u0432\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u2014 \u044D\u0442\u043E \u043F\u0440\u0435\u0434\u0435\u043B",
  "dock.splitPaneNarrow": "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0448\u0438\u0440\u0438\u043D\u044B \u0434\u043B\u044F \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u0448\u0438\u0440\u044C\u0442\u0435 \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "dock.closeTab": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  "dock.addTab": "\u041D\u043E\u0432\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
  "dock.dockFloat": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0431\u043E\u043A\u043E\u0432\u0443\u044E \u043F\u0430\u043D\u0435\u043B\u044C",
  "dock.closeFloat": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
  "dock.drop.center": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u0441\u044C \u0441\u044E\u0434\u0430",
  "dock.drop.left": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043B\u0435\u0432\u044B\u0439 \u0441\u043F\u043B\u0438\u0442",
  "dock.drop.right": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u043E\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  "dock.drop.top": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0435\u0440\u0445\u043D\u0435\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  "dock.drop.bottom": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0438\u0436\u043D\u0438\u0439 \u0440\u0430\u0437\u0440\u0435\u0437",
  "tab.guide.title": "\u0421\u0442\u0430\u0440\u0442",
  "tab.guide.more": "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
  "tab.unavailable": "\u041D\u0438\u0447\u0442\u043E \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0442\u0430\u043A\u043E\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442."
};
var pt = {
  "menu.close": "Fechar",
  "menu.closeOthers": "Fechar outras abas",
  "menu.closeRight": "Fechar abas \xE0 direita",
  "command.close": "Fechar a p\xE1gina ou janela atual",
  "command.refresh": "Atualizar p\xE1gina atual",
  "command.noRefresh": "Esta p\xE1gina n\xE3o pode ser atualizada",
  "command.toggle": "Alternar barra lateral direita",
  "command.fullscreen": "Alternar painel para tela cheia",
  "command.noSession": "Selecione uma sess\xE3o primeiro",
  "command.noFocus": "Foque primeiro um painel da barra lateral direita",
  "command.stale": "A p\xE1gina mudou; concentre-se novamente",
  "command.collapsed": "Expanda a barra lateral direita primeiro",
  "command.float": "Esta a\xE7\xE3o n\xE3o est\xE1 dispon\xEDvel em um painel flutuante",
  "command.empty": "Abra uma p\xE1gina primeiro",
  "command.budget": "Dois pain\xE9is \xE9 o limite",
  "command.width": "Largura insuficiente para dividir. Amplie a barra lateral",
  "chrome.expand": "Abrir barra lateral",
  "chrome.expandAria": "Abrir barra lateral direita",
  "chrome.collapse": "Recolher barra lateral",
  "chrome.collapseAria": "Recolher barra lateral direita",
  "chrome.toFullscreen": "Tela cheia",
  "chrome.exitFullscreen": "Sair da tela cheia",
  "dock.emptyPane": "Painel vazio",
  "dock.splitPane": "Dividir",
  "dock.splitPaneDisabled": "Dois pain\xE9is \xE9 o limite",
  "dock.splitPaneNarrow": "Largura insuficiente para dividir. Amplie a barra lateral",
  "dock.closeTab": "Fechar",
  "dock.addTab": "Nova guia",
  "dock.dockFloat": "Enviar de volta para a barra lateral",
  "dock.closeFloat": "Fechar",
  "dock.drop.center": "Mova-se aqui",
  "dock.drop.left": "Adicionar divis\xE3o \xE0 esquerda",
  "dock.drop.right": "Adicionar divis\xE3o \xE0 direita",
  "dock.drop.top": "Adicionar divis\xE3o superior",
  "dock.drop.bottom": "Adicionar divis\xE3o inferior",
  "tab.guide.title": "Come\xE7ar",
  "tab.guide.more": "Mais ferramentas",
  "tab.unavailable": "Nada aqui pode visualizar esse tipo de conte\xFAdo ainda."
};

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tabs/guide/definition.ts
var GUIDE_ID = "@deepseek-ai/dsh-client-ui-sidebar-right/guide";
function guideDefinition(t) {
  return {
    id: GUIDE_ID,
    kind: GUIDE_KIND,
    priority: "builtin",
    title: () => t("tab.guide.title")
  };
}

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/tab-info.ts
var import_react13 = require("react");
var import_dsh_client_ui_dockkit7 = require("@deepseek-ai/dsh-client-ui-dockkit");
var tabInfoFactory = (standard, context) => {
  const { sessionId } = standard;
  const { tabId: tabId2, title, fullscreen, active, signal, actions, useStore, useTabNavigation, shortcuts } = context;
  return function useTabInfo() {
    const layout2 = useStore((state) => state.bySession[sessionId]?.layout);
    const navigation = useTabNavigation(tabId2);
    return (0, import_react13.useMemo)(() => {
      const tab = layout2?.tabs[tabId2];
      if (layout2 === void 0 || tab === void 0 || navigation === void 0) {
        throw new Error(`sidebarRight: tab "${tabId2}" is not committed in session "${sessionId}"`);
      }
      const pane = (0, import_dsh_client_ui_dockkit7.findTabPane)(layout2, tabId2);
      return {
        sidebar: { expanded: layout2.expanded, fullscreen },
        panel: { id: pane.id, isFloating: pane.host === "float" },
        tab: {
          ...tab,
          visible: active && (pane.host === "float" || layout2.expanded && (title || pane.activeTabId === tabId2)),
          navigation,
          signal,
          actions,
          refreshShortcut: shortcuts.find((row) => row.id === "page.refresh")
        }
      };
    }, [layout2, navigation, tabId2, title, fullscreen, active, signal, actions, shortcuts]);
  };
};
var guideTabInfoFactory = (_standard, useTabInfo) => useTabInfo;

// bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/src/client/index.ts
var NS = "sidebarRight";
var inject = ["contextMenus", "slots", "layout", "locale", "resources", "sessions", "uiSession", "shortcuts"];
function apply(ctx) {
  const t = ctx.locale.bind(NS);
  const tabs = new SidebarRightTabRegistry(ctx);
  const views = new SidebarSessionViews(ctx.sessions);
  ctx.effect(() => {
    const current = ctx.uiSession.adapter.current;
    const sync = () => {
      views.select(current.getSnapshot().key);
    };
    const unsubscribe = current.subscribe(sync);
    sync();
    return () => {
      unsubscribe();
      views.dispose();
    };
  }, "ui-sidebar-right: retained Session views");
  const layout2 = ctx.layout;
  let autoFullscreen = false;
  const { controller, adopt, forget, show, measure } = createSidebarRightController(
    tabs,
    (address, signal) => {
      ctx.resources.pin(address, signal);
    },
    {
      autoFullscreen: () => autoFullscreen,
      openWithFocus: (sessionId, open) => {
        openWithPaneFocus(document, sessionId, open);
      },
      closeWithFocus: (sessionId, paneId2, close) => {
        closeWithPaneFocus(document, sessionId, paneId2, close);
      }
    }
  );
  ctx.effect(() => ctx.slots.inject("contextMenu.icon", () => ctx.slots.register({
    name: "contextMenu.icon",
    key: "sidebar.close"
  }, import_dsh_client_ui_primitives9.IconCloseOutlineRegular)), "sidebar: menu icon");
  ctx.effect(() => ctx.contextMenus.register({
    id: "sidebar.close",
    target: "tab",
    order: 100,
    resolve: ({ sessionId, paneId: paneId2, tab }) => {
      const tabId2 = tab.id;
      const tabs2 = controller.menuTabs(sessionId, paneId2, tabId2);
      if (!tabs2.close && tabs2.all.length === 0) return [];
      const closeMany = (ids) => {
        for (const id of ids) {
          if (controller.menuTabs(sessionId, paneId2, tabId2).all.includes(id)) controller.closeIn(sessionId, id);
        }
      };
      return [
        { id: "close", commandId: "page.close", icon: { key: "sidebar.close" }, label: t("menu.close"), disabled: !tabs2.close, run: () => {
          if (controller.menuTabs(sessionId, paneId2, tabId2).close) controller.closeIn(sessionId, tabId2);
        } },
        { id: "others", label: t("menu.closeOthers"), disabled: tabs2.all.length === 0, run: () => {
          closeMany(tabs2.all);
        } },
        ...tabs2.right.length === 0 ? [] : [{ id: "right", label: t("menu.closeRight"), run: () => {
          closeMany(tabs2.right);
        } }]
      ];
    }
  }), "sidebar: menu actions");
  ctx.effect(() => ctx.slots.inject("contextMenu.content", () => ctx.slots.register({
    name: "contextMenu.content",
    key: "tab",
    children: { "sidebar.right.tab.menu.item": { kind: "list", scope: "session" } },
    inject: () => ({ hooks: { views: views.source } })
  }, TabMenuContent)), "sidebar: menu extensions");
  ctx.effect(() => {
    const sync = () => {
      const selected = views.source.getSnapshot().find((view) => view.selected);
      show(layout2.panelInfo.getSnapshot().activePanelId === null ? selected?.sessionId : void 0);
    };
    const unsubscribeViews = views.source.subscribe(sync);
    const unsubscribePanel = layout2.panelInfo.subscribe(sync);
    sync();
    return () => {
      unsubscribeViews();
      unsubscribePanel();
      show(void 0);
    };
  }, "ui-sidebar-right: on-screen Session");
  const disposeRegistry = ctx.reflect.provide("sidebarRightTabs", tabs);
  const disposeService = ctx.reflect.provide("sidebarRight", controller);
  ctx.effect(() => () => {
    controller.tabDomain.dispose();
    void disposeService();
    void disposeRegistry();
  }, "ui-sidebar-right: service faces");
  ctx.effect(() => ctx.locale.register(NS, { zh, en, ja, es, fr, de, ru, pt }), "ui-sidebar-right: dictionaries");
  ctx.effect(() => registerSidebarShortcuts(ctx.shortcuts, controller, t, () => {
    void ctx.shortcuts.closeWindow().catch((error) => {
      console.error("Window close failed", error);
    });
  }), "ui-sidebar-right: shortcuts");
  if (typeof document !== "undefined") ctx.effect(() => observeSidebarFocus(document), "ui-sidebar-right: focus");
  ctx.effect(() => {
    const handle = createSidebarRightStore(() => defaultSeed(tabs));
    const adoptions = /* @__PURE__ */ new Map();
    const store = {
      ...handle,
      create: (scopeKey) => {
        const instance = handle.create(scopeKey);
        if (scopeKey !== void 0) {
          const sessionId = scopeKey;
          adoptions.get(sessionId)?.();
          adoptions.set(sessionId, adopt(sessionId, instance));
        }
        return { ...instance, clearPersisted() {
          instance.clearPersisted();
          if (scopeKey !== void 0) forget(scopeKey);
        } };
      }
    };
    const injected = {
      syncPresentation({ shown, track, fullscreen }) {
        if (shown) layout2.openRightbar(track, fullscreen);
        else layout2.closeRightbar();
      },
      reportAutoFullscreen: (value) => {
        autoFullscreen = value;
      },
      splitPane: (paneId2) => {
        controller.split(paneId2);
      },
      toggleFullscreen: () => {
        const target = controller.commandTarget();
        if (target !== void 0) controller.toggleFullscreen(target);
      },
      openTab: (kind, options) => {
        controller.openTab(kind, options);
      }
    };
    const tabTypes = { subscribe: (listener) => tabs.subscribe(listener), getSnapshot: () => tabs.entries() };
    const disposeTypes = [tabs.register(guideDefinition(t))];
    const disposeSeat = ctx.slots.inject("rightbar", function* () {
      yield ctx.slots.register({
        name: "rightbar",
        children: { "rightbar.session": { kind: "single", scope: "session" } },
        inject: () => ({
          hooks: { views: views.source },
          mountView: (reference) => views.mount(reference)
        })
      }, RightbarRoot);
      yield ctx.slots.register({
        name: "rightbar.session",
        locale: NS,
        children: {
          "sidebar.right.pane.tab": { kind: "keyed", scope: "session", inject: { hooks: { tabInfo: tabInfoFactory } } },
          "sidebar.right.pane.tab.title": { kind: "keyed", scope: "session", inject: { hooks: { tabInfo: tabInfoFactory } } }
        },
        store,
        inject: (sessionId) => ({
          ...injected,
          hooks: {
            contextMenuTarget: ctx.contextMenus.active,
            shortcuts: ctx.shortcuts.catalog,
            tabTypes,
            flash: controller.flashOf(sessionId)
          },
          measureRoom: (canSplitPane) => {
            measure(sessionId, canSplitPane);
          },
          closeTab: (tabId2) => {
            try {
              controller.closeIn(sessionId, tabId2);
            } catch (error) {
              console.error("Sidebar tab close failed:", error);
            }
          },
          keyedHooks: { tabNavigation: (key) => controller.tabDomain.occurrence(sessionId, { id: key }).navigation },
          occurrence: (tab) => controller.tabDomain.occurrence(sessionId, tab)
        })
      }, RightbarSeat);
    });
    const disposeExpand = ctx.slots.inject("conversation.session.header.corner", () => ctx.slots.register({
      name: "conversation.session.header.corner",
      locale: NS,
      store,
      inject: () => ({ hooks: { shortcuts: ctx.shortcuts.catalog } })
    }, ExpandButton));
    const guidePins = createGuidePins();
    const guideInjected = {
      hooks: {
        shortcuts: ctx.shortcuts.catalog,
        guideEntries: { subscribe: (listener) => tabs.subscribe(listener), getSnapshot: () => tabs.guide() },
        entryPins: guidePins.unpinned,
        entryActions: {
          getSnapshot: () => ctx.slots.entriesOfSlot("sidebar.right.tab.guide.actions").length > 0,
          subscribe: (listener) => ctx.slots.subscribe("sidebar.right.tab.guide.actions", listener)
        }
      },
      setPinned: guidePins.setPinned
    };
    const disposeGuide = ctx.slots.inject("sidebar.right.pane.tab", () => ctx.slots.register({
      name: "sidebar.right.pane.tab",
      key: GUIDE_ID,
      locale: NS,
      children: {
        "sidebar.right.tab.guide.actions": { kind: "list", scope: "root" },
        "sidebar.right.tab.guide.entry": {
          kind: "keyed",
          scope: "session",
          inject: { hooks: { tabInfo: guideTabInfoFactory } }
        },
        "sidebar.right.tab.guide": {
          kind: "chain",
          scope: "session",
          inject: { hooks: { tabInfo: guideTabInfoFactory } }
        }
      },
      inject: () => guideInjected
    }, GuideBody));
    const disposeGuideTitle = ctx.slots.inject("sidebar.right.pane.tab.title", () => ctx.slots.register(
      { name: "sidebar.right.pane.tab.title", key: GUIDE_ID },
      GuideTitle
    ));
    return () => {
      disposeGuideTitle();
      disposeGuide();
      disposeExpand();
      disposeSeat();
      for (const dispose of disposeTypes.reverse()) dispose();
      for (const release of adoptions.values()) release();
      adoptions.clear();
    };
  }, "ui-sidebar-right: seats and shipped tab type");
}

return module.exports;}});
