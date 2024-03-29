import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), new WindiCSS(), svgr()],
  base: './',
  server: {
    proxy: {
      '/v1': {
        target: 'http://skillkamp-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, '/v1/api'),
      },
    },
  },
});
