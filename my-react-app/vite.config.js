import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    host: true,
    strictPort: true,
    cors: true,  // Enable CORS
    origin: "https://d054-2409-40d6-1010-db96-a135-7f67-701f-3ba.ngrok-free.app", // Allow Ngrok URL
    allowedHosts: ["d479-59-96-46-44.ngrok-free.app"], // Add your blocked Ngrok host here
  },
});
