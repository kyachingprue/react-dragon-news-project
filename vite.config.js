import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 10000, // এখন 1000KB না হওয়া পর্যন্ত warning দেখাবে না
  },
  plugins: [react(), tailwindcss()],
});
