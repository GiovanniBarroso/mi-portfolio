<template>
  <div class="min-h-dvh flex flex-col items-center justify-center px-6 text-center">
    <!-- Número 404 decorativo -->
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 500, easing: 'spring' } }"
      aria-hidden="true"
      class="select-none text-[10rem] sm:text-[14rem] font-black leading-none bg-gradient-to-br from-brand-500/20 to-purple-500/20 bg-clip-text text-transparent"
    >
      404
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 150 } }"
      class="-mt-6 space-y-4"
    >
      <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Página no encontrada</h1>
      <p class="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
        La página que buscas no existe o fue movida. Vuelve al inicio y sigue explorando.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-3 pt-4">
        <RouterLink to="/" class="btn px-7 py-3"> Ir al inicio </RouterLink>
        <RouterLink to="/projects" class="btn-outline px-7 py-3"> Ver proyectos </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'

const seo = useSeo()
seo({
  title: '404 — Página no encontrada',
  description: 'Esta página no existe en el portfolio de Giovanni Barroso.',
})
</script>
