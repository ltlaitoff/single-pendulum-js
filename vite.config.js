import { defineConfig } from 'vite'

export default defineConfig({
	server: {
		port: 3002,
		hmr: {
			port: 3012
		}
	}
})
