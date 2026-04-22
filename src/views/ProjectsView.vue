<template>
  <div class="section-base" aria-labelledby="projects-title">
    <div class="container px-6 mx-auto max-w-6xl">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-12 text-center"
      >
        <p class="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
          Portafolio
        </p>
        <h1 id="projects-title" class="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Proyectos
        </h1>
        <div
          class="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
        />
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
          Trabajos reales, experimentos técnicos y side projects.
        </p>

        <!-- Stats strip -->
        <div class="mt-8 flex flex-wrap justify-center gap-6">
          <div class="flex items-center gap-2 text-sm">
            <span class="h-2 w-2 rounded-full bg-brand-500"></span>
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">{{
              projects.length
            }}</span>
            <span class="text-zinc-500 dark:text-zinc-400">proyectos</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">{{ liveCount }}</span>
            <span class="text-zinc-500 dark:text-zinc-400">en producción</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="h-2 w-2 rounded-full bg-purple-500"></span>
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">{{ openCount }}</span>
            <span class="text-zinc-500 dark:text-zinc-400">open source</span>
          </div>
        </div>
      </div>

      <!-- Featured projects (2 cards side by side) -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 80 } }"
        class="mb-4"
      >
        <p
          class="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4"
        >
          Destacados
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <ProjectCard
            v-for="(p, i) in featuredProjects"
            :key="p.slug"
            v-bind="p"
            :delay="i * 80"
          />
        </div>
      </div>

      <!-- Divider -->
      <div class="flex items-center gap-4 mb-8">
        <div class="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
        <p
          class="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest whitespace-nowrap"
        >
          Todos los proyectos
        </p>
        <div class="flex-1 h-px bg-zinc-100 dark:bg-zinc-800" />
      </div>

      <!-- Filter chips -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: 120 } }"
        class="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar proyectos por tecnología"
      >
        <button
          v-for="f in filters"
          :key="f"
          :class="activeFilter === f ? 'chip-filter-active' : 'chip-filter'"
          @click="activeFilter = f"
        >
          {{ f }}
        </button>
      </div>

      <!-- Grid -->
      <TransitionGroup
        name="project-grid"
        tag="ul"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <li
          v-for="(p, i) in filteredProjects"
          :key="p.slug"
          v-motion
          :initial="{ opacity: 0, y: 28 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: (i % 3) * 70 } }"
          class="flex"
        >
          <ProjectCard v-bind="p" class="h-full flex-1" />
        </li>
      </TransitionGroup>

      <!-- Empty state -->
      <p v-if="!filteredProjects.length" class="py-20 text-center text-zinc-500 dark:text-zinc-400">
        No hay proyectos con ese filtro.
      </p>

      <!-- CTA GitHub -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
        class="mt-16 text-center"
      >
        <p class="text-zinc-500 dark:text-zinc-400 mb-4 text-sm">
          ¿Quieres ver más? Tengo repositorios con experimentos, pruebas técnicas y side projects.
        </p>
        <a
          href="https://github.com/GiovanniBarroso"
          target="_blank"
          rel="noopener noreferrer"
          class="btn px-7 py-3 shadow-lg shadow-brand-500/20"
          aria-label="Abrir perfil de GitHub de Giovanni Barroso"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          Ver más en GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import { projects } from '@/data/projects'
import { useSeo } from '@/composables/useSeo'

const seo = useSeo()
seo({
  title: 'Proyectos',
  description:
    'Giovanni Barroso — Proyectos destacados en desarrollo web: SPA, CI/CD, performance y accesibilidad.',
})

const activeFilter = ref('Todos')

const FEATURED = [
  { slug: 'cosas-d-casa', badge: undefined },
  { slug: 'date-un-respiro', badge: 'En desarrollo' },
  { slug: 'manuela-rios', badge: undefined },
] as const

const featuredProjects = computed(() =>
  FEATURED.map(({ slug, badge }) => ({
    ...projects.find((p) => p.slug === slug)!,
    badge,
  }))
)

const liveCount = computed(() => projects.filter((p) => p.demoUrl).length)
const openCount = computed(() => projects.filter((p) => p.repoUrl).length)

const filters = computed(() => {
  const techs = new Set<string>()
  projects.forEach((p) => p.techs.forEach((t) => techs.add(t)))
  const sorted = [...techs].sort()
  return ['Todos', ...sorted]
})

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') return projects
  return projects.filter((p) => p.techs.includes(activeFilter.value))
})
</script>

<style scoped>
.project-grid-move,
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.3s ease;
}
.project-grid-enter-from,
.project-grid-leave-to {
  opacity: 0;
  transform: scale(0.97) translateY(8px);
}
.project-grid-leave-active {
  position: absolute;
}
</style>
