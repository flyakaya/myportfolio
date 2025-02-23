import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },  
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@services', replacement: '/src/services' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@theme', replacement: '/src/theme' },
      { find: '@types', replacement: '/src/types' },
    ],
  },
})
