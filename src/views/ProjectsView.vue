<template>
  <section
    class="py-20 border-b border-zinc-800/50 dark:border-zinc-200/40 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-800 transition-colors duration-300"
    aria-labelledby="projects-title"
  >
    <SectionTitle
      id="projects-title"
      title="Proyectos"
      subtitle="Trabajos destacados y prácticas técnicas"
    />

    <!-- Grid de proyectos -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600, easing: 'ease-out' } }"
      class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <ProjectCard
        v-for="(p, i) in projects"
        :key="p.slug"
        v-bind="p"
        :delay="withStagger(i, 120).delay"
        class="transition hover:scale-[1.02] hover:shadow-xl"
      />
    </div>

    <!-- CTA -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
      class="mt-16 text-center"
    >
      <p class="text-zinc-400 dark:text-zinc-600 mb-4">
        ¿Quieres ver más? Tengo repositorios con experimentos, pruebas técnicas y side projects.
      </p>
      <a
        href="https://github.com/GiovanniBarroso"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition hover:scale-105 bg-brand-500 text-white hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700"
      >
        Ver más en GitHub 🚀
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import { projects } from '@/data/projects'
import { useSeo } from '@/composables/useSeo'
import { withStagger } from '@/composables/motionPresets'

const seo = useSeo()
seo({
  title: 'Proyectos',
  description:
    'Giovanni Barroso — Proyectos destacados en desarrollo web: SPA, CI/CD, performance y accesibilidad.',
})
</script>
