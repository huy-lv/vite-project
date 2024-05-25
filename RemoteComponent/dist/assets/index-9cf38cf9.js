import { importShared } from './__federation_fn_import-34e0ebd7.js';
import { a as jsx } from './jsx-runtime-4e85108c.js';
import { r as reactDomExports } from './__federation_shared_react-dom-789a7190.js';
import RemoteComponent from './__federation_expose_HelloWorld-b3d66d68.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function App() {
  return RemoteComponent;
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
