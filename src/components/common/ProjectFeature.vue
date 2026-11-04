<template>
  <!-- Proyecto destacado en formato ancho: captura grande, resumen,
       puntos clave y acciones. Alterna el lado de la imagen. -->
  <article
    class="card card-interactive group relative grid overflow-hidden lg:grid-cols-[1.15fr_1fr]"
    :class="reverse ? 'lg:[&>*:first-child]:order-2' : ''"
  >
    <div
      class="relative overflow-hidden border-b border-hair bg-surface-2 lg:border-b-0"
      :class="reverse ? 'lg:border-l' : 'lg:border-r'"
    >
      <img
        :src="projectImage(project)"
        alt=""
        width="1280"
        height="853"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        class="aspect-[3/2] h-full w-full object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
      />
      <StatusPill :project="project" class="absolute left-4 top-4" />
    </div>

    <div class="flex flex-col p-6 sm:p-8">
      <p class="text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
        <span class="text-accent-text">{{ String(index + 1).padStart(2, '0') }}</span>
        <span aria-hidden="true"> — </span>
        {{ project.type }}<template v-if="project.team"> · {{ project.team }}</template>
      </p>

      <h3 class="mt-3 text-fluid-lg font-bold tracking-tight text-fg">
        <RouterLink
          :to="projectPath(project)"
          class="transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-accent-text"
        >
          {{ project.title }}
        </RouterLink>
      </h3>

      <p class="mt-3 text-sm leading-relaxed text-fg-muted">{{ project.summary }}</p>

      <ul
        v-if="project.platforms"
        class="mt-4 flex flex-wrap gap-1.5"
        :aria-label="`Plataformas de ${project.title}`"
      >
        <li
          v-for="pl in project.platforms"
          :key="pl"
          class="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent-text"
        >
          {{ pl }}
        </li>
      </ul>

      <ul class="mt-5 space-y-2">
        <li
          v-for="h in project.highlights.slice(0, 3)"
          :key="h"
          class="flex items-start gap-2.5 text-[13px] leading-relaxed text-fg-muted"
        >
          <AppIcon name="check" :size="3.5" :stroke-width="2.5" class="mt-1 text-accent-text" />
          {{ h }}
        </li>
      </ul>

      <ul class="mt-6 flex flex-wrap gap-1.5" :aria-label="`Tecnologías de ${project.title}`">
        <li v-for="t in project.techs.slice(0, 6)" :key="t" class="tag tag-sm">{{ t }}</li>
        <li v-if="project.techs.length > 6" class="tag tag-sm text-fg-subtle">
          <span aria-hidden="true">+{{ project.techs.length - 6 }}</span>
          <span class="sr-only">y {{ project.techs.length - 6 }} más</span>
        </li>
      </ul>

      <div class="mt-auto flex flex-wrap items-center gap-2 pt-7">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm relative z-base"
        >
          <AppIcon name="external" :size="3.5" :stroke-width="2" />
          Ver demo
          <span class="sr-only">de {{ project.title }} (abre en una pestaña nueva)</span>
        </a>
        <a
          v-if="project.repoUrl"
          :href="project.repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline btn-sm relative z-base"
        >
          <AppIcon name="github" :size="3.5" />
          Código
          <span class="sr-only">de {{ project.title }} (abre en una pestaña nueva)</span>
        </a>
        <span
          class="ml-auto inline-flex items-center gap-1 text-[13px] font-medium text-fg-muted transition-colors duration-200 group-hover:text-accent-text"
          aria-hidden="true"
        >
          Caso completo
          <AppIcon
            name="arrow-right"
            :size="3.5"
            class="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import StatusPill from '@/components/common/StatusPill.vue'
import type { Project } from '@/types/portfolio'
import { projectImage, projectPath } from '@/utils/project'

withDefaults(
  defineProps<{ project: Project; index: number; reverse?: boolean; eager?: boolean }>(),
  { reverse: false, eager: false }
)
</script>
