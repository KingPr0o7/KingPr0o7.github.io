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
			'blogs-page': resolve(__dirname, 'src/blogs-page/index.html'),
			'all-about-me': resolve(__dirname, 'src/blogs-page/all-about-me/index.html'),
			'the-computer-science-speedrun': resolve(__dirname, 'src/blogs-page/the-computer-science-speedrun/index.html')
		  },
		},
	},
	server: {
		open: '/src/main-page/index.html'
	}
})