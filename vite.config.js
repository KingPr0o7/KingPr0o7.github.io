import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist',
		publicDir: 'public',
		rollupOptions: {
		  input: {
			index: resolve(__dirname, 'src/main-page/index.html'),
			'404': resolve(__dirname, 'src/404-page/404.html')
		  },
		},
	},
	server: {
		open: '/src/main-page/index.html'
	}
})