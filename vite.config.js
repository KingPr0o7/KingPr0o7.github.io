import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist',
		publicDir: 'public',
		rollupOptions: {
		  input: {
			index: resolve(__dirname, 'index.html'),
			'404': resolve(__dirname, '404/404.html'),
			'blogs': resolve(__dirname, 'blogs/index.html'),
			'privacy-policy': resolve(__dirname, 'privacy-policy/index.html'),
			'all-about-me': resolve(__dirname, 'blogs/all-about-me/index.html'),
			'the-computer-science-speedrun': resolve(__dirname, 'blogs/the-computer-science-speedrun/index.html')
		  },
		},
	},
	server: {
		open: 'index.html'
	}
})