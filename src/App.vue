<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-300 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-900 font-sans"
  >
    <Navbar />
    <main class="flex-1 pt-20 container mx-auto px-4">
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

useHead({
  titleTemplate: (sub?: string) => (sub ? `${sub} | ${SITE_NAME}` : SITE_NAME),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0ea5e9' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
  ],
})
</script>
