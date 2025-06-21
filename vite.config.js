import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Ramayan-app/", // ✅ GitHub deploy के लिए
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:7297', // ✅ यही आपकी .NET API है
        changeOrigin: true,
        secure: false, // Localhost पर SSL के कारण false रखना जरूरी है
      },
    },
  },
});
