<template>
  <section class="container py-20" aria-labelledby="projects-title">
    <SectionTitle
      id="projects-title"
      title="Proyectos"
      subtitle="Trabajos destacados y prácticas técnicas"
    />

    <div class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        v-for="(p, i) in projects"
        :key="p.slug"
        v-bind="p"
        :delay="withStagger(i, 120).delay"
      />
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <p class="text-zinc-600 dark:text-zinc-400 mb-4">
        ¿Quieres ver más? Tengo repositorios con experimentos, pruebas técnicas y side projects.
      </p>
      <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" class="btn">
        Ver más en GitHub
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
    'Mira mis proyectos destacados y prácticas técnicas: SPA, CI/CD, performance y accesibilidad.',
})
</script>
