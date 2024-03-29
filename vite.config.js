import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  appType: 'spa',
  // root: fileURLToPath(new URL('./src', import.meta.url)),
  base: '/elise-portfolio',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),
      'imgs': fileURLToPath(new URL('./public/imgs/', import.meta.url)),
    }
  },
    // server: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost:3000',
    //             changeOrigin: true,
    //             rewrite: (path) => path.replace(/^\/api/, '')
    //
    //         }
    //     }
    // },
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
})
