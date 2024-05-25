import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'remote-component.config.js': path.resolve(__dirname, 'remote-component.config.js')
    }
  }
})
