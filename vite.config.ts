import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'package-nodecg.json',
          dest: '.',
          rename: 'package.json',
        },
      ],
    }),
  ],
  build: {
    assetsDir: 'web-assets',
    rollupOptions: {
      input: {
        'graphics/a': resolve(__dirname, 'graphics/a/index.html'),
        'graphics/b': resolve(__dirname, 'graphics/b/index.html'),
        'graphics/c': resolve(__dirname, 'graphics/c/index.html'),
        'graphics/d': resolve(__dirname, 'graphics/d/index.html'),
        'graphics/setup': resolve(__dirname, 'graphics/setup/index.html'),
        'dashboard/group-control/a': resolve(
          __dirname,
          'dashboard/group-control/a/index.html'
        ),
        'dashboard/group-control/b': resolve(
          __dirname,
          'dashboard/group-control/b/index.html'
        ),
        'dashboard/group-control/c': resolve(
          __dirname,
          'dashboard/group-control/c/index.html'
        ),
        'dashboard/group-control/d': resolve(
          __dirname,
          'dashboard/group-control/d/index.html'
        ),
        'dashboard/commentator': resolve(
          __dirname,
          'dashboard/commentator/index.html'
        ),
        'dashboard/common-control': resolve(
          __dirname,
          'dashboard/common-control/index.html'
        ),
      },
      output: {
        assetFileNames: 'web-assets/[name]-[hash][extname]',
      },
    },
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '~': '/src',
    },
  },
})
