<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
  >
    <Navbar />
    <main class="flex-1 pt-20">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

import { useHead } from '@unhead/vue'
import { SITE_NAME } from '@/config/seo'

useHead({
  titleTemplate: (sub?: string) => (sub ? `${sub} | ${SITE_NAME}` : SITE_NAME),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0ea5e9' },
  ],
})
</script>
