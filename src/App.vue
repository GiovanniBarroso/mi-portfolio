<template>
  <div
    class="min-h-dvh flex flex-col font-sans transition-colors bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 overflow-hidden"
  >
    <Navbar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <component :is="Component" v-motion :initial="routeFade.initial" :enter="routeFade.enter" />
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import { useHead } from '@unhead/vue'
import { SITE_NAME } from '@/config/seo'
import { routeFade } from '@/composables/motionPresets'

const BASE = import.meta.env.BASE_URL

useHead({
  titleTemplate: (sub?: string) => (sub ? `${sub} | ${SITE_NAME}` : SITE_NAME),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0ea5e9' },
  ],
  link: [
    { rel: 'icon', href: `${BASE}favicon.ico` },
    { rel: 'apple-touch-icon', href: `${BASE}apple-touch-icon.png` },
    { rel: 'manifest', href: `${BASE}manifest.webmanifest` },
  ],
})
</script>
