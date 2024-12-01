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
      }
    },
    open: true
  },
  define: {
    'process.env': {
      VITE_API_URL: process.env.VITE_API_URL,  // Access environment variable in vite.config.js
    }
  },
  optimizeDeps: {
    include: ['jwt-decode']
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Página principal
        'article-all': 'article-all.html', // Otra vista
        'article-edit': 'article-edit.html',
        'article-new': 'article-new.html',
        'article': 'article.html',
        dashboard: 'dashboard.html',
        login: 'login.html',
        registro: 'registro.html',
        seccion: 'seccion.html',
        secciones: 'secciones.html',
        'user-all': 'user-all.html', // Otra vista
        'user-edit': 'user-edit.html', // Otra vista
        'user-new': 'user-new.html', // Otra vista
      },
    },
  },
});