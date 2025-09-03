// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Alias '@' apunta a la carpeta 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
