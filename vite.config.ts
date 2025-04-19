import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@icons': '/src/assets/icons',
      '@videos': '/src/assets/videos',
      '@showcase': '/src/assets/showcase',
    }
  },
  plugins: [react()],
})
