import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        RemoteComponent: 'https://raw.githubusercontent.com/huy-lv/vite-project/test/RemoteComponent/dist/assets/remoteEntry.js',
      },
      shared: ['react','react-dom', '@mui/material']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})