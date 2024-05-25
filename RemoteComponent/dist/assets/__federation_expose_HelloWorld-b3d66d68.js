import { importShared } from './__federation_fn_import-34e0ebd7.js';
import { j as jsxs, a as jsx } from './jsx-runtime-4e85108c.js';

await importShared('react');

const {Button} = await importShared('@mui/material');

const RemoteComponent = () => /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("h2", { children: "Hello from Remote Component!" }),
  /* @__PURE__ */ jsx(Button, { variant: "contained", children: "Testing Material UI" })
] });

export { RemoteComponent as default };
