import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Ramayan-app/", // 👈 Ensure this matches your GitHub repo name
});
