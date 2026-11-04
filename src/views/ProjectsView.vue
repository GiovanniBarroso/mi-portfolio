<template>
  <div class="page shell">
    <PageHeader
      eyebrow="Portafolio"
      title="Proyectos"
      subtitle="Productos en producción, proyectos académicos e infraestructura propia. Cada uno tiene su página con lo que hice y con qué."
      as="h1"
      title-id="projects-title"
    >
      <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <li v-for="s in summary" :key="s.label" class="flex items-center gap-2 text-sm">
          <span class="h-2 w-2 rounded-full" :class="s.dot" aria-hidden="true" />
          <span class="font-semibold tabular-nums text-fg">{{ s.value }}</span>
          <span class="text-fg-muted">{{ s.label }}</span>
        </li>
      </ul>
    </PageHeader>

    <!-- ── Filtros ── -->
    <section class="mt-16" aria-labelledby="filter-heading">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="filter-heading" class="label">Filtrar por tecnología</h2>
        <p class="text-sm text-fg-muted" role="status" aria-live="polite">
          <template v-if="activeFilter">
            {{ filtered.length }} {{ filtered.length === 1 ? 'proyecto usa' : 'proyectos usan' }}
            <strong class="font-semibold text-fg">{{ activeFilter }}</strong>
          </template>
          <template v-else>{{ projects.length }} proyectos</template>
        </p>
      </div>

      <!-- En móvil los filtros se desplazan en horizontal en vez de romper
           en cinco filas de píldoras. -->
      <div
        class="-mx-5 mt-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0"
      >
        <div
          class="flex w-max gap-2 sm:w-auto sm:flex-wrap"
          role="group"
          aria-labelledby="filter-heading"
        >
          <button
            v-for="f in filters"
            :key="f.label"
            type="button"
            class="chip"
            :aria-pressed="(activeFilter ?? ALL) === f.label"
            @click="setFilter(f.label === ALL ? null : f.label)"
          >
            {{ f.label }}
            <span class="tabular-nums opacity-60" aria-hidden="true">{{ f.count }}</span>
            <span class="sr-only">({{ f.count }} proyectos)</span>
          </button>
        </div>
      </div>
    </section>

    <!-- ── Sin filtro: destacados en grande + el resto en rejilla ── -->
    <template v-if="!activeFilter">
      <section class="mt-10" aria-labelledby="featured-heading">
        <h2 id="featured-heading" class="sr-only">Proyectos destacados</h2>
        <ul class="space-y-6">
          <li v-for="(p, i) in featuredProjects" :key="p.slug" v-reveal>
            <ProjectFeature :project="p" :index="i" :reverse="i % 2 === 1" :eager="i === 0" />
          </li>
        </ul>
      </section>

      <section class="mt-20" aria-labelledby="more-heading">
        <h2 id="more-heading" class="text-fluid-lg font-bold tracking-tight text-fg">
          Más proyectos
        </h2>
        <p class="mt-2 text-sm text-fg-muted">
          Aplicaciones de escritorio y web, analítica self-hosted e infraestructura propia.
        </p>
        <!-- flex en vez de grid: si la última fila queda incompleta, se centra -->
        <ul class="mt-8 flex flex-wrap justify-center gap-5">
          <li
            v-for="(p, i) in others"
            :key="p.slug"
            v-reveal="stagger(i)"
            class="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <ProjectCard :project="p" />
          </li>
        </ul>
      </section>
    </template>

    <!-- ── Con filtro: rejilla plana con todo lo que coincide ── -->
    <section v-else class="mt-10" aria-labelledby="results-heading">
      <h2 id="results-heading" class="sr-only">Proyectos con {{ activeFilter }}</h2>
      <TransitionGroup
        v-if="filtered.length"
        name="grid"
        tag="ul"
        class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li v-for="p in filtered" :key="p.slug">
          <ProjectCard :project="p" />
        </li>
      </TransitionGroup>

      <div v-else class="card-muted px-6 py-16 text-center">
        <AppIcon name="search" :size="8" class="mx-auto text-fg-subtle" :stroke-width="1.25" />
        <p class="mt-4 font-semibold text-fg">Nada por aquí</p>
        <p class="mt-1 text-sm text-fg-muted">
          Ningún proyecto publicado usa {{ activeFilter }} todavía.
        </p>
        <button type="button" class="btn-outline btn-sm mt-6" @click="setFilter(null)">
          Ver todos los proyectos
        </button>
      </div>
    </section>

    <!-- ── CTA GitHub ── -->
    <div
      v-reveal
      class="card-muted mt-20 flex flex-col items-center gap-5 px-6 py-12 text-center sm:px-10"
    >
      <AppIcon name="github" :size="8" class="text-fg-muted" />
      <div>
        <h2 class="text-fluid-lg font-bold tracking-tight text-fg">¿Quieres ver más?</h2>
        <p class="measure mx-auto mt-2 text-sm leading-relaxed text-fg-muted">
          En GitHub están los repositorios públicos, con experimentos, pruebas técnicas y el código
          de este mismo portfolio.
        </p>
      </div>
      <a :href="GITHUB_URL" target="_blank" rel="noopener noreferrer" class="btn">
        <AppIcon name="github" :size="4" />
        Ver perfil de GitHub
        <span class="sr-only">(abre en una pestaña nueva)</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectCard from '@/components/common/ProjectCard.vue'
import ProjectFeature from '@/components/common/ProjectFeature.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { projects } from '@/data/projects'
import { GITHUB_URL } from '@/data/social'
import { counts } from '@/data/stats'
import { featuredProjects, isFeatured, projectsUsing, techUsage } from '@/utils/project'
import { useSeo } from '@/composables/useSeo'
import { stagger } from '@/composables/motion'
import { vReveal } from '@/directives/reveal'
import { PAGES } from '@/config/seo'

useSeo(PAGES.projects)

const ALL = 'Todos'
const route = useRoute()
const router = useRouter()

/**
 * El filtro vive en la URL (`/projects?tech=Supabase`): se puede compartir,
 * sobrevive a recargar y las skills enlazan directamente a él.
 */
const activeFilter = computed<string | null>(() => {
  const tech = route.query.tech
  return typeof tech === 'string' && tech ? tech : null
})

function setFilter(tech: string | null) {
  router.replace({ query: tech ? { tech } : {} })
}

const summary = [
  { label: 'proyectos', value: counts.projects, dot: 'bg-accent' },
  { label: 'en producción', value: counts.inProduction, dot: 'bg-ok' },
  { label: 'con código abierto', value: counts.openSource, dot: 'bg-violet2' },
]

const others = projects.filter((p) => !isFeatured(p))

/**
 * Sólo se ofrecen como filtro las tecnologías presentes en 2+ proyectos:
 * filtrar por una usada una sola vez equivale a mostrar ese proyecto suelto.
 * Se agrupan por familia ("Next.js 15" y "Next.js 16" cuentan como Next.js).
 */
const filters = (() => {
  const shared = [...techUsage().entries()]
    .filter(([, n]) => n > 1)
    .sort(([a, na], [b, nb]) => nb - na || a.localeCompare(b, 'es'))
    .map(([label, count]) => ({ label, count }))
  return [{ label: ALL, count: projects.length }, ...shared]
})()

const filtered = computed(() => (activeFilter.value ? projectsUsing(activeFilter.value) : projects))
</script>

<style scoped>
/* Las que salen se ocultan de inmediato y las que quedan se reacomodan
   con `grid-move`. Sacarlas del flujo con position:absolute dentro de una
   rejilla las mandaba a la esquina del contenedor a mitad de animación. */
.grid-move,
.grid-enter-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.grid-leave-active {
  display: none;
}
.grid-enter-from {
  opacity: 0;
  transform: scale(0.97);
}
</style>
