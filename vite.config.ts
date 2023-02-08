import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    host: true,
  },
  build: {
    assetsDir: 'web-assets',
    rollupOptions: {
      input: {
        'graphics/a': resolve(__dirname, 'graphics/a/index.html'),
        'graphics/b': resolve(__dirname, 'graphics/b/index.html'),
        'graphics/c': resolve(__dirname, 'graphics/c/index.html'),
        'graphics/d': resolve(__dirname, 'graphics/d/index.html'),
      },
      output: {
        assetFileNames: "web-assets/[name]-[hash][extname]"
      },
    },
  },
})
