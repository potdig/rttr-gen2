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
    rollupOptions: {
      input: {
        a: resolve(__dirname, 'graphics/a/index.html'),
        b: resolve(__dirname, 'graphics/b/index.html'),
        c: resolve(__dirname, 'graphics/c/index.html'),
        d: resolve(__dirname, 'graphics/d/index.html'),
      },
    },
  },
})
