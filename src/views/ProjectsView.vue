<template>
  <section class="container py-20">
    <SectionTitle title="Proyectos" subtitle="Trabajos destacados y prácticas técnicas" />

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard v-for="p in projects" :key="p.title" v-bind="p" aos="fade-up" />
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import { projects } from '@/data/projects'
import { useSeo } from '@/composables/useSeo'

const seo = useSeo()
seo({
  title: 'Proyectos',
  description:
    'Mira mis proyectos destacados y prácticas técnicas: SPA, CI/CD, performance y accesibilidad.',
})
</script>
