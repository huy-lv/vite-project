import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      'react': 'react',
      '@mui/material': '@mui/material'
    })
  ],
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'index.tsx'),
      },
      output: {
        entryFileNames: "[name].js"
      }
    }
  },
})
