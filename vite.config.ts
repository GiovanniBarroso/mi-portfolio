// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      // Alias '@' apunta a la carpeta 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 👇 Necesario para GitHub Pages (el nombre del repo)
  base: '/mi-portfolio/',
})
