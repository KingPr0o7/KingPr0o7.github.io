import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	base: './',
	root: 'src',
	build: {
		publicDir: 'public',
		outDir: '../dist',
		rollupOptions: {
		  input: {
			index: resolve(__dirname, 'src/index.html'),
			main: resolve(__dirname, 'src/404.html'),
			'blogs': resolve(__dirname, 'src/blogs/index.html'),
			'privacy-policy': resolve(__dirname, 'src/privacy-policy/index.html'),
			'all-about-me': resolve(__dirname, 'src/blogs/all-about-me/index.html'),
			'the-computer-science-speedrun': resolve(__dirname, 'src/blogs/the-computer-science-speedrun/index.html')
		  },
		},
	},
	server: {
		open: 'index.html'
	}
})