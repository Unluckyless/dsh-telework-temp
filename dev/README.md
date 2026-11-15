# dsh-telework development

All plugin development lives inside this directory. The old sibling `.tools`
build workspace is no longer required.

## Rebuild the vendored UI bundles

The main DSH bundle consumes prebuilt `lib/client.js` artifacts from the
vendored UI packages. To rebuild them from the committed sources under
`bundles/.../vendor/.../src`:

```powershell
pnpm install
pnpm run build:ui              # all targets
node dev/build-ui.mjs sidebar  # one target
```

Available targets: `sidebar`, `layout`, `workspace`, `rightbar`, `conversation`.

The script writes to:

```text
bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/lib/client.js
bundles/dsh-telework-topbar/vendor/dsh-client-ui-layout/lib/client.js
bundles/dsh-telework-sidebar/vendor/dsh-client-ui-workspace/lib/client.js
bundles/dsh-telework-rightbar/vendor/dsh-client-ui-sidebar-right/lib/client.js
bundles/dsh-telework-conversation/vendor/dsh-client-ui-conversation/lib/client.js
```

`dev/.build/` is only an ignored intermediate directory.

**Do not run this build while the DSH Web page is open.** client-modules keys
artifacts by mtime/ctime/size; a running page can request the old revision and
fail its Web boot. Build, then refresh or restart the page.

The UI vendors are inserted by the main bundle's `cordis.patch.yml`. Do not
install the directories under `bundles/` as separate profile bundles: they
would insert the same client module ids twice.
