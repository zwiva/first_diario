// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // This will proxy requests to '/api' to your Express backend
      '*': {
        target: '*', // Express server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes /api from the request URL
      },
    },
  },
});