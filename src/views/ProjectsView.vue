<template>
  <section
    class="py-30 border-b border-zinc-800/50 dark:border-zinc-200/40 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-800 transition-colors duration-300"
    aria-labelledby="projects-title"
  >
    <SectionTitle
      id="projects-title"
      title="Proyectos"
      subtitle="Trabajos destacados y prácticas técnicas"
    />

    <!-- Grid semántica + animación solo la 1ª vez que aparecen -->
    <ul
      v-motion
      :initial="fadeUp.initial"
      :visibleOnce="fadeUp.enter"
      class="container px-6 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      style="content-visibility: auto; contain-intrinsic-size: 520px"
    >
      <li v-for="(p, i) in projects" :key="p.slug">
        <ProjectCard v-bind="p" :delay="withStagger(i, 100).delay" />
      </li>
    </ul>

    <!-- CTA -->
    <div
      v-motion
      :initial="fadeUp.initial"
      :visibleOnce="{ ...fadeUp.enter, transition: { duration: 500, delay: 200 } }"
      class="container px-6 mt-16 text-center"
    >
      <p class="text-zinc-400 dark:text-zinc-600 mb-4">
        ¿Quieres ver más? Tengo repositorios con experimentos, pruebas técnicas y side projects.
      </p>
      <a
        href="https://github.com/GiovanniBarroso"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="inline-block px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition hover:scale-105 bg-brand-500 text-white hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500/60"
        aria-label="Abrir perfil de GitHub de Giovanni Barroso en una nueva pestaña"
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
import { withStagger, fadeUp } from '@/composables/motionPresets'

const seo = useSeo()
seo({
  title: 'Proyectos',
  description:
    'Giovanni Barroso — Proyectos destacados en desarrollo web: SPA, CI/CD, performance y accesibilidad.',
})
</script>
