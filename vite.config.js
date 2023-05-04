import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		outDir: 'dist',
		publicDir: 'public',
		rollupOptions: {
		  input: {
			index: resolve(__dirname, 'src/main-page/index.html'),
			'404': resolve(__dirname, 'src/404-page/404.html'),
			'blogs': resolve(__dirname, 'src/blogs/index.html'),
			'privacy-policy': resolve(__dirname, 'src/privacy-policy/index.html'),
			'all-about-me': resolve(__dirname, 'src/blogs/all-about-me/index.html'),
			'the-computer-science-speedrun': resolve(__dirname, 'src/blogs/the-computer-science-speedrun/index.html')
		  },
		},
	},
	server: {
		open: '/src/main-page/index.html'
	}
})