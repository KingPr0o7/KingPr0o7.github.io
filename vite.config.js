import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    publicDir: 'public',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/loading-page/loading.html'),
        nested: resolve(__dirname, 'src/main-page/main.html')
      },
    },
  },
  server: {
    open: '/src/loading-page/loading.html'
  }
})