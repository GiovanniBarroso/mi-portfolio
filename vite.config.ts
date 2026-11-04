/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import { seoPages } from './build/seo'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    seoPages(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: '/',
        name: 'Giovanni Barroso · Desarrollador Full-Stack',
        short_name: 'G. Barroso',
        description: 'Portfolio de Giovanni Barroso, desarrollador full-stack en Sevilla.',
        lang: 'es',
        dir: 'ltr',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#09090b',
        theme_color: '#09090b',
        categories: ['portfolio', 'developer'],
        icons: [
          { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        shortcuts: [
          { name: 'Proyectos', url: '/projects' },
          { name: 'Contacto', url: '/contact' },
        ],
      },
      workbox: {
        // Sólo la interfaz va precacheada (unos cientos de KB). Las imágenes
        // se guardan cuando se ven por primera vez; antes se precacheaban
        // 1,8 MB de capturas en la primera visita, se vieran o no.
        globPatterns: ['**/*.{js,css,ico,woff2}', 'index.html'],
        globIgnores: ['**/InterVariable-Italic.woff2'],
        navigateFallback: '/index.html',
        // Ficheros reales que no deben acabar sirviendo la SPA
        navigateFallbackDenylist: [/\.(xml|txt|webmanifest|png|jpe?g|webp)$/],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: ({ request, sameOrigin }) => sameOrigin && request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/',
  test: {
    include: ['src/**/*.test.ts', 'build/**/*.test.ts'],
    environment: 'node',
  },
})
