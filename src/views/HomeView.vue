<template>
  <main class="space-y-28 sm:space-y-32">
    <!-- HERO -->
    <section
      class="relative isolate min-h-dvh flex flex-col items-center justify-center text-center px-6"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-br from-brand-500/10 to-purple-600/10 dark:from-brand-500/20 dark:to-purple-600/20"
      />
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Hola, soy <span class="text-brand-500">Giovanni</span>
        </h1>

        <p class="mt-6 text-base sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Full-Stack Web Developer —
          <!-- Forzamos animación por si reduce-motion está activo en el SO -->
          <HeroWords :items="heroWords" :force="true" :interval-ms="2200" />
        </p>

        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <RouterLink
            to="/projects"
            rel="nofollow"
            class="px-8 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500/60 transition"
          >
            Ver proyectos
          </RouterLink>
          <RouterLink
            to="/contact"
            rel="nofollow"
            class="px-8 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500/40 transition"
          >
            Contáctame
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- PROYECTOS CLAVE -->
    <section class="container px-6" aria-labelledby="highlights-title">
      <h2 id="highlights-title" class="text-3xl font-bold text-center mb-8">Mis proyectos clave</h2>

      <ul
        v-if="highlights?.length"
        class="grid grid-cols-1 sm:grid-cols-2 gap-6"
        style="content-visibility: auto; contain-intrinsic-size: 320px"
      >
        <li
          v-for="h in highlights"
          :key="h.slug"
          v-motion
          class="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-md hover:shadow-xl transition"
        >
          <h3 class="text-lg font-semibold mb-2">
            <RouterLink
              v-if="h.href && h.href.startsWith('/')"
              :to="h.href"
              class="text-brand-500 hover:underline"
            >
              {{ h.title }}
            </RouterLink>
            <a
              v-else-if="h.href"
              :href="h.href"
              target="_blank"
              rel="noreferrer"
              class="text-brand-500 hover:underline"
            >
              {{ h.title }}
            </a>
            <span v-else class="text-brand-500">{{ h.title }}</span>
          </h3>

          <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            {{ h.description }}
          </p>

          <!-- chips visibles también en dark -->
          <ul v-if="h.tags?.length" class="mt-4 flex flex-wrap gap-2">
            <li
              v-for="t in h.tags"
              :key="t"
              class="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-50/70 dark:bg-white/5 text-zinc-700 dark:text-zinc-300"
            >
              {{ t }}
            </li>
          </ul>
        </li>
      </ul>
      <p v-else class="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Sin destacados por ahora.
      </p>
    </section>

    <!-- PROYECTOS RECIENTES -->
    <section class="container px-6" aria-labelledby="recent-title">
      <h2 id="recent-title" class="text-3xl font-bold mb-8 text-center">Proyectos recientes</h2>
      <ul
        v-if="slicedProjects.length"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-rows:1fr]"
        style="content-visibility: auto; contain-intrinsic-size: 400px"
      >
        <li
          v-for="(p, i) in slicedProjects"
          :key="p.slug"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 80 } }"
          class="flex"
        >
          <ProjectCard v-bind="p" class="h-full flex-1" />
        </li>
      </ul>
      <p v-else class="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Aún no hay proyectos publicados. Vuelve pronto 🚀
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/common/ProjectCard.vue'
import HeroWords from '@/components/common/HeroWords.vue'
import { projects } from '@/data/projects'
import { highlights } from '@/data/highlights'
import { heroWords } from '@/data/hero'
import { computed } from 'vue'

const slicedProjects = computed(() => projects.slice(0, 6))
</script>
