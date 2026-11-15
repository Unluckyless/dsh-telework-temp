# dsh-telework development

All plugin development lives inside this directory. The old sibling `.tools`
build workspace is no longer required.

## Rebuild the vendored UI bundles

The three UI sub-bundles ship prebuilt `lib/client.js` files. To rebuild them
from the committed sources under `bundles/.../vendor/.../src`:

```powershell
pnpm install
pnpm run build:ui
```

The script writes the reconstructed bundles back to:

```text
bundles/dsh-telework-sidebar/vendor/dsh-client-ui-sidebar/lib/client.js
bundles/dsh-telework-topbar/vendor/dsh-client-ui-layout/lib/client.js
bundles/dsh-telework-conversation/vendor/dsh-client-ui-conversation/lib/client.js
```

`dev/.build/` is only an ignored intermediate directory.

After a rebuild, disable and re-enable the matching DSH bundle (or restart
DSH) so the Web Client modules reload.
