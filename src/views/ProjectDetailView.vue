<template>
  <article class="page shell" aria-labelledby="project-title">
    <!-- Migas: de dónde viene la página y cómo volver -->
    <nav aria-label="Migas de pan" class="text-[13px]">
      <ol class="flex flex-wrap items-center gap-1.5 text-fg-subtle">
        <li>
          <RouterLink to="/" class="transition-colors duration-200 hover:text-accent-text"
            >Inicio</RouterLink
          >
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <RouterLink to="/projects" class="transition-colors duration-200 hover:text-accent-text"
            >Proyectos</RouterLink
          >
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" class="font-medium text-fg-muted">{{ project.title }}</li>
      </ol>
    </nav>

    <!-- ── Cabecera ── -->
    <header v-reveal class="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <div class="flex flex-wrap items-center gap-2">
          <StatusPill :project="project" class="!shadow-none" />
          <span class="tag">{{ project.type }}</span>
          <span v-if="project.team" class="tag">
            <AppIcon name="users" :size="3.5" class="mr-1.5" />
            {{ project.team }}
          </span>
        </div>
        <h1 id="project-title" class="mt-5 text-fluid-2xl font-bold tracking-tight text-fg">
          {{ project.title }}
        </h1>
        <p class="measure mt-4 text-fluid-base leading-relaxed text-fg-muted">
          {{ project.summary }}
        </p>
      </div>

      <div class="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
        >
          <AppIcon name="external" :size="4" :stroke-width="2" />
          Ver demo
          <span class="sr-only">(abre en una pestaña nueva)</span>
        </a>
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          :class="project.demoUrl ? 'btn-outline' : 'btn'"
        >
          <AppIcon name="github" :size="4" />
          Ver código
          <span class="sr-only">(abre en una pestaña nueva)</span>
        </a>
      </div>
    </header>

    <!-- ── Captura ── -->
    <div v-reveal.fade="80" class="mt-10">
      <BrowserFrame
        :src="projectImage(project)"
        :alt="`Captura de ${project.title}`"
        :url="project.demoUrl"
        eager
      />
    </div>

    <!-- ── Cuerpo ── -->
    <div class="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_20rem]">
      <div class="space-y-12">
        <section aria-labelledby="about-project">
          <h2 id="about-project" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            El proyecto
          </h2>
          <p class="prose-body measure mt-4">{{ project.description }}</p>
        </section>

        <section aria-labelledby="highlights">
          <h2 id="highlights" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            {{ project.team ? 'Qué construimos' : 'Qué construí' }}
          </h2>
          <ol class="mt-6 divide-y divide-hair border-y border-hair">
            <li
              v-for="(h, i) in project.highlights"
              :key="h"
              v-reveal="i * 50"
              class="flex gap-5 py-4"
            >
              <span
                class="w-6 shrink-0 pt-px text-[13px] font-semibold tabular-nums text-accent-text"
                aria-hidden="true"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="text-[15px] leading-relaxed text-fg-muted">{{ h }}</span>
            </li>
          </ol>
        </section>
      </div>

      <!-- Ficha lateral -->
      <aside class="card p-6 lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)]" aria-label="Ficha">
        <h2 class="label">Stack</h2>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          <li v-for="t in project.techs" :key="t">
            <RouterLink
              v-if="filterable.has(techFamily(t))"
              :to="{ path: '/projects', query: { tech: techFamily(t) } }"
              class="tag transition-colors duration-200 hover:border-accent hover:text-accent-text"
              :title="`Ver proyectos con ${techFamily(t)}`"
            >
              {{ t }}
            </RouterLink>
            <span v-else class="tag">{{ t }}</span>
          </li>
        </ul>

        <dl class="mt-6 space-y-3 border-t border-hair pt-5 text-sm">
          <div class="flex justify-between gap-4">
            <dt class="text-fg-subtle">Tipo</dt>
            <dd class="text-right font-medium text-fg">{{ project.type }}</dd>
          </div>
          <div class="flex justify-between gap-4">
            <dt class="text-fg-subtle">Estado</dt>
            <dd class="text-right font-medium text-fg">{{ statusLabel }}</dd>
          </div>
          <div v-if="project.platforms" class="flex justify-between gap-4">
            <dt class="text-fg-subtle">Plataformas</dt>
            <dd class="text-right font-medium text-fg">{{ project.platforms.join(' · ') }}</dd>
          </div>
          <div class="flex justify-between gap-4">
            <dt class="text-fg-subtle">Equipo</dt>
            <dd class="text-right font-medium text-fg">{{ project.team ?? 'Individual' }}</dd>
          </div>
          <div v-if="project.demoUrl" class="flex justify-between gap-4">
            <dt class="text-fg-subtle">Web</dt>
            <dd class="min-w-0 text-right">
              <a
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block truncate font-medium text-accent-text hover:underline"
              >
                {{ host(project.demoUrl) }}
                <span class="sr-only">(abre en una pestaña nueva)</span>
              </a>
            </dd>
          </div>
          <div v-if="!project.repoUrl" class="flex justify-between gap-4">
            <dt class="text-fg-subtle">Código</dt>
            <dd class="inline-flex items-center gap-1.5 text-right font-medium text-fg">
              <AppIcon name="lock" :size="3.5" class="text-fg-subtle" />
              Privado
            </dd>
          </div>
        </dl>
      </aside>
    </div>

    <!-- ── Anterior / siguiente ── -->
    <nav v-if="neighbors" aria-label="Otros proyectos" class="mt-20 grid gap-4 sm:grid-cols-2">
      <RouterLink
        :to="projectPath(neighbors.prev)"
        class="card card-interactive group flex flex-col gap-1 p-5"
      >
        <span class="inline-flex items-center gap-1.5 text-[12px] font-medium text-fg-subtle">
          <AppIcon
            name="arrow-left"
            :size="3.5"
            class="transition-transform duration-200 motion-safe:group-hover:-translate-x-0.5"
          />
          Anterior
        </span>
        <span class="font-semibold text-fg transition-colors group-hover:text-accent-text">
          {{ neighbors.prev.title }}
        </span>
      </RouterLink>
      <RouterLink
        :to="projectPath(neighbors.next)"
        class="card card-interactive group flex flex-col items-end gap-1 p-5 text-right"
      >
        <span class="inline-flex items-center gap-1.5 text-[12px] font-medium text-fg-subtle">
          Siguiente
          <AppIcon
            name="arrow-right"
            :size="3.5"
            class="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
          />
        </span>
        <span class="font-semibold text-fg transition-colors group-hover:text-accent-text">
          {{ neighbors.next.title }}
        </span>
      </RouterLink>
    </nav>

    <div class="mt-16">
      <CtaPanel
        title="¿Tienes algo parecido en mente?"
        eyebrow="Siguiente paso"
        :secondary="{ to: '/projects', label: 'Ver todos los proyectos' }"
      >
        Cuéntame qué necesitas y te digo cómo lo plantearía. Respondo en {{ site.responseTime }}.
      </CtaPanel>
    </div>
  </article>
</template>

<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import BrowserFrame from '@/components/common/BrowserFrame.vue'
import CtaPanel from '@/components/common/CtaPanel.vue'
import StatusPill from '@/components/common/StatusPill.vue'
import type { Project } from '@/types/portfolio'
import { site } from '@/data/site'
import {
  getProject,
  projectImage,
  projectNeighbors,
  projectPath,
  projectStatus,
  STATUS_META,
  techUsage,
} from '@/utils/project'
import { techFamily } from '@/utils/tech'
import { useSeo } from '@/composables/useSeo'
import { vReveal } from '@/directives/reveal'
import { projectSeo } from '@/config/seo'

const props = defineProps<{ slug: string }>()

// El guard del router garantiza que el slug existe; la vista se vuelve a
// crear al cambiar de proyecto (la clave de RouterView es la ruta).
const project = getProject(props.slug) as Project
const neighbors = projectNeighbors(project.slug)
const statusLabel = STATUS_META[projectStatus(project)].label

/** Sólo enlazan al filtro las tecnologías que comparten 2+ proyectos */
const filterable = new Set([...techUsage()].filter(([, n]) => n > 1).map(([t]) => t))

const host = (url: string) => {
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

useSeo(projectSeo(project))
</script>
