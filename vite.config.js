import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Ramayan-app/', // 🔹 Match exactly with your GitHub repo name
});
