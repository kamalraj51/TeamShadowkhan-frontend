import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/sphinx': {
        target: 'https://localhost:8443',
        changeOrigin: true,
        secure: false, // Set to false if using self-signed SSL certificate
      }
    }
  }
})
