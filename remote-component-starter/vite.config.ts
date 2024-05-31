import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join, resolve } from 'path';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [react()],
  build: {
    // lib: {
    //   entry: join(__dirname, 'index.tsx'),
    //   name: 'remote_compo',
    //   fileName: 'index' // The name of the output file will be 'index.[format].js'
    // },
    rollupOptions: {
      input: join(__dirname, 'index.tsx'),
      output: {
        format: 'cjs', // CommonJS format,
        entryFileNames: 'main.js',
        globals: {
          'react': 'react',
          '@material-ui/core': '@material-ui/core'
        }
      },
      external: [ 'react', '@material-ui/core' ]
    },
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  resolve: {
    alias: {
      'remote-component.config.js': join(__dirname, "remote-component.config.js")
    }
  },
});
