import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      name: 'RemoteComponent',
      fileName: 'index',
      formats: ['cjs'] // Specify 'cjs' for CommonJS format
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material'], // Externalize React and other dependencies
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          '@mui/material': '@mui/material'
        },
        exports: 'named'
      }
    }
  }
});
