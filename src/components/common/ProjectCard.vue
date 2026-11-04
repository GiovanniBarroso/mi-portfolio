<template>
  <article class="card card-interactive group relative flex h-full flex-col overflow-hidden">
    <!-- Miniatura. Ratio fijo + width/height reales: la rejilla no salta
         mientras cargan las imágenes. -->
    <div class="relative aspect-[16/10] shrink-0 overflow-hidden border-b border-hair bg-surface-2">
      <img
        :src="projectImage(project)"
        alt=""
        width="1280"
        height="853"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
      />
      <StatusPill :project="project" class="absolute left-3 top-3" />
    </div>

    <div class="flex flex-1 flex-col p-5">
      <p class="text-[11px] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
        {{ project.type }}<template v-if="project.team"> · {{ project.team }}</template>
      </p>

      <component :is="headingTag" class="mt-1.5 text-base font-semibold leading-snug text-fg">
        <!-- Enlace extendido: toda la tarjeta lleva al detalle mediante el
             ::after del título, sin anidar enlaces dentro de enlaces. -->
        <RouterLink
          :to="projectPath(project)"
          class="transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-accent-text"
        >
          {{ project.title }}
        </RouterLink>
      </component>

      <p class="mt-2 line-clamp-3 text-[13px] leading-relaxed text-fg-muted">
        {{ project.summary }}
      </p>

      <ul class="mb-5 mt-4 flex flex-wrap gap-1.5" :aria-label="`Tecnologías de ${project.title}`">
        <li v-for="t in visibleTechs" :key="t" class="tag tag-sm">{{ t }}</li>
        <li v-if="hidden.length" class="tag tag-sm text-fg-subtle" :title="hidden.join(', ')">
          <span aria-hidden="true">+{{ hidden.length }}</span>
          <span class="sr-only">y {{ hidden.length }} más: {{ hidden.join(', ') }}</span>
        </li>
      </ul>

      <!-- Acciones. z-base las deja por encima del enlace extendido. -->
      <div class="mt-auto flex items-center gap-2 border-t border-hair pt-4">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline btn-sm relative z-base"
        >
          <AppIcon name="external" :size="3.5" :stroke-width="2" />
          Demo
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
          Detalles
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
import { computed } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import StatusPill from '@/components/common/StatusPill.vue'
import type { Project } from '@/types/portfolio'
import { projectImage, projectPath } from '@/utils/project'

const props = withDefaults(
  defineProps<{
    project: Project
    /** Nivel del titular según dónde se pinte la tarjeta */
    headingTag?: 'h2' | 'h3'
  }>(),
  { headingTag: 'h3' }
)

const MAX_TECHS = 4
const visibleTechs = computed(() => props.project.techs.slice(0, MAX_TECHS))
const hidden = computed(() => props.project.techs.slice(MAX_TECHS))
</script>
