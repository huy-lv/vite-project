import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [
      tsconfigPaths(),
      react(),
      federation({
        name: "app",
        remotes: {
          RemoteComponent:
            "https://raw.githubusercontent.com/huy-lv/vite-project/test/RemoteComponent/dist/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom", "@mui/material"],
      }),
    ],
  });
};
