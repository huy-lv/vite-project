import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [
      tsconfigPaths(),
      react()
    ],
    resolve: {
      alias: {
        'remote-component.config.js': resolve(__dirname, 'remote-component.config.js')
      }
    },
  });
};
