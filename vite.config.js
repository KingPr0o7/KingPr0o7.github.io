import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist',
		publicDir: 'public',
		rollupOptions: {
		  input: {
			//index: resolve(__dirname, 'src/loading-page/loading.html'),
			index: resolve(__dirname, 'src/main-page/index.html')
		  },
		},
	},
	server: {
		open: '/src/main-page/index.html'
	}
})