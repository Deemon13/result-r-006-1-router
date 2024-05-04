import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'result-r-006-1-router',
	plugins: [react()],
	server: {
		open: true,
	},
});
