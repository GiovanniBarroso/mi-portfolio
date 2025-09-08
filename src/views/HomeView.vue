<template>
  <section
    class="relative overflow-hidden transition-colors duration-300 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-800"
  >
    <!-- Fondos decorativos -->
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, easing: 'ease-out' } }"
      class="absolute -top-24 -left-24 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl"
    />
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{
        opacity: 1,
        scale: 1,
        transition: { duration: 1000, delay: 200, easing: 'ease-out' },
      }"
      class="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
    />

    <!-- Contenido principal -->
    <div
      class="container min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center py-20"
    >
      <!-- Tag destacado
      <span
        v-motion
        :initial="{ opacity: 0, y: -10 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400 } }"
        class="px-4 py-1 text-sm font-medium rounded-full backdrop-blur-sm transition bg-zinc-800/40 border border-zinc-700/60 dark:bg-zinc-200/40 dark:border-zinc-300 hover:scale-105"
      >
        🚀 Disponible para colaborar
      </span> -->

      <!-- Título principal -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
      >
        Hola, soy
        <span class="bg-gradient-to-r from-brand-400 to-purple-500 bg-clip-text text-transparent">
          Giovanni Barroso
        </span>
      </h1>

      <!-- Subtítulo -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="mt-4 max-w-2xl text-lg md:text-xl text-zinc-300 dark:text-zinc-600 leading-relaxed"
      >
        Desarrollador Web especializado en
        <strong>Vue, TypeScript y Tailwind</strong>. Apasionado por crear experiencias digitales
        <em> limpias, rápidas y accesibles</em>.
      </p>

      <!-- Botones CTA -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <RouterLink to="/projects" class="btn"> Ver mis proyectos 🚀 </RouterLink>
        <RouterLink to="/contact" class="btn-outline"> Contactar </RouterLink>
      </div>

      <!-- Tags de tecnologías -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90"
      >
        <span
          v-for="tech in techs"
          :key="tech"
          class="px-3 py-1 rounded-full transition hover:scale-105 bg-zinc-800 text-zinc-200 border border-zinc-700 dark:bg-zinc-200 dark:text-zinc-800 dark:border-zinc-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'

const seo = useSeo()
seo({
  title: 'Inicio',
  description:
    'Portfolio de Giovanni Barroso — Desarrollador web especializado en Vue, TypeScript y Tailwind. Proyectos, skills y contacto.',
})

const techs = ['Vue', 'TypeScript', 'Tailwind', 'Python']
</script>
