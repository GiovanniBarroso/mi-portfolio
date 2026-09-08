<template>
  <div class="page shell" aria-labelledby="projects-title">
    <PageHeader
      eyebrow="Portafolio"
      title="Proyectos"
      subtitle="Productos en producción, proyectos académicos y experimentos de infraestructura. Cada tarjeta enlaza a la demo o al repositorio."
      as="h1"
      title-id="projects-title"
      class="mx-auto"
    >
      <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <li v-for="s in summary" :key="s.label" class="flex items-center gap-2 text-sm">
          <span class="h-2 w-2 rounded-full" :class="s.dot" aria-hidden="true" />
          <span class="font-semibold tabular-nums text-fg">{{ s.value }}</span>
          <span class="text-fg-muted">{{ s.label }}</span>
        </li>
      </ul>
    </PageHeader>

    <!-- ── Destacados ── -->
    <section class="mt-16" aria-labelledby="featured-heading">
      <h2
        id="featured-heading"
        class="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle"
      >
        Destacados
      </h2>
      <ul class="mt-5 grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
        <li
          v-for="(p, i) in featured"
          :key="p.slug"
          v-motion
          :initial="reveal.initial"
          :visible-once="staggered(i, 3)"
        >
          <ProjectCard v-bind="p" />
        </li>
      </ul>
    </section>

    <!-- ── Todos + filtros ── -->
    <section class="mt-20" aria-labelledby="all-heading">
      <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="all-heading"
          class="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle"
        >
          Todos los proyectos
        </h2>
        <p class="text-sm text-fg-muted" role="status" aria-live="polite">
          {{ filtered.length }}
          {{ filtered.length === 1 ? 'proyecto' : 'proyectos' }}
          <template v-if="activeFilter !== ALL">con {{ activeFilter }}</template>
        </p>
      </div>

      <!-- Filtros. En móvil se desplazan en horizontal en vez de romper
           en cinco filas de píldoras. -->
      <div class="-mx-5 mt-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
        <div
          class="flex w-max gap-2 sm:w-auto sm:flex-wrap"
          role="group"
          aria-label="Filtrar proyectos por tecnología"
        >
          <button
            v-for="f in filters"
            :key="f.label"
            type="button"
            class="chip"
            :aria-pressed="activeFilter === f.label"
            @click="activeFilter = f.label"
          >
            {{ f.label }}
            <span class="tabular-nums opacity-60">{{ f.count }}</span>
          </button>
        </div>
      </div>

      <TransitionGroup name="grid" tag="ul" class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="p in filtered" :key="p.slug">
          <ProjectCard v-bind="p" />
        </li>
      </TransitionGroup>

      <div v-if="!filtered.length" class="card-muted mt-8 px-6 py-16 text-center">
        <AppIcon name="search" :size="8" class="mx-auto text-fg-subtle" :stroke-width="1.25" />
        <p class="mt-4 font-semibold text-fg">Nada por aquí</p>
        <p class="mt-1 text-sm text-fg-muted">No hay proyectos que usen {{ activeFilter }}.</p>
        <button type="button" class="btn-outline btn-sm mt-6" @click="activeFilter = ALL">
          Ver todos los proyectos
        </button>
      </div>
    </section>

    <!-- ── CTA GitHub ── -->
    <div
      v-motion
      :initial="reveal.initial"
      :visible-once="reveal.visibleOnce"
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
      <a
        href="https://github.com/GiovanniBarroso"
        target="_blank"
        rel="noopener noreferrer"
        class="btn"
      >
        <AppIcon name="github" :size="4" />
        Ver perfil de GitHub
        <span class="sr-only">(abre en una pestaña nueva)</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { projects, FEATURED_SLUGS } from '@/data/projects'
import { useSeo } from '@/composables/useSeo'
import { reveal, staggered } from '@/composables/motionPresets'

const seo = useSeo()
seo({
  title: 'Proyectos',
  description:
    'Proyectos de Giovanni Barroso: e-commerce con Stripe, dashboards con Supabase, APIs en NestJS y despliegue continuo.',
})

const ALL = 'Todos'
const activeFilter = ref(ALL)

const featured = computed(() =>
  FEATURED_SLUGS.map(({ slug, badge }) => {
    const project = projects.find((p) => p.slug === slug)!
    return badge ? { ...project, badge } : project
  })
)

const summary = computed(() => [
  { label: 'proyectos', value: projects.length, dot: 'bg-accent' },
  { label: 'en producción', value: projects.filter((p) => p.demoUrl).length, dot: 'bg-ok' },
  { label: 'open source', value: projects.filter((p) => p.repoUrl).length, dot: 'bg-violet2' },
])

/**
 * Sólo se ofrecen como filtro las tecnologías presentes en 2+ proyectos:
 * filtrar por una usada una sola vez equivale a mostrar ese proyecto suelto.
 */
const filters = computed(() => {
  const counts = new Map<string, number>()
  projects.forEach((p) => p.techs.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
  const shared = [...counts.entries()]
    .filter(([, n]) => n > 1)
    .sort(([a, na], [b, nb]) => nb - na || a.localeCompare(b))
    .map(([label, count]) => ({ label, count }))
  return [{ label: ALL, count: projects.length }, ...shared]
})

const filtered = computed(() =>
  activeFilter.value === ALL
    ? projects
    : projects.filter((p) => p.techs.includes(activeFilter.value))
)
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

@media (prefers-reduced-motion: reduce) {
  .grid-move,
  .grid-enter-active,
  .grid-leave-active {
    transition: none;
  }
}
</style>
