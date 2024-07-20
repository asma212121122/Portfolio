import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', 
  plugins: [react()],
  build: {
    outDir: 'dist', 
    assetsDir: '.',
    rollupOptions: {
      input: 'main.jsx', //
    },
  },
});
