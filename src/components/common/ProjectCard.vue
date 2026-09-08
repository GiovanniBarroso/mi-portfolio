<template>
  <article
    class="card group relative flex h-full flex-col overflow-hidden"
    :class="primaryUrl ? 'card-interactive' : ''"
  >
    <!-- Miniatura. Ratio fijo + width/height reales: la rejilla no salta
         mientras cargan las imágenes. -->
    <div class="relative aspect-[16/10] shrink-0 overflow-hidden bg-surface-2">
      <img
        v-if="image"
        :src="image"
        :alt="`Captura de ${title}`"
        width="640"
        height="400"
        loading="lazy"
        decoding="async"
        class="h-full w-full object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
      />
      <div v-else class="grid h-full w-full place-items-center text-fg-subtle">
        <AppIcon name="image" :size="8" :stroke-width="1.25" />
      </div>

      <!-- Velo inferior: separa la imagen del cuerpo sin una línea dura -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
      />

      <span
        class="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm"
        :class="status.class"
      >
        <span v-if="status.dot" class="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
        <AppIcon v-if="status.icon" :name="status.icon" :size="3" :stroke-width="2" />
        {{ status.label }}
      </span>
    </div>

    <!-- Cuerpo -->
    <div class="flex flex-1 flex-col p-5">
      <h3 class="text-base font-semibold leading-snug text-fg">
        <!-- Enlace extendido: toda la tarjeta es clicable mediante el
             ::after del título, sin anidar anclas ni duplicar destinos. -->
        <a
          v-if="primaryUrl"
          :href="primaryUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="after:absolute after:inset-0 after:content-[''] transition-colors duration-200 group-hover:text-accent-text"
        >
          {{ title }}
          <span class="sr-only">— abre {{ primaryLabel }} en una pestaña nueva</span>
        </a>
        <template v-else>{{ title }}</template>
      </h3>

      <p class="mt-2 line-clamp-3 text-[13px] leading-relaxed text-fg-muted">
        {{ description }}
      </p>

      <ul class="mb-5 mt-4 flex flex-wrap gap-1.5" :aria-label="`Tecnologías de ${title}`">
        <li v-for="t in visibleTechs" :key="t" class="tag !px-2 !py-0.5 !text-[11px]">
          {{ t }}
        </li>
        <li
          v-if="hiddenCount"
          class="tag !px-2 !py-0.5 !text-[11px] text-fg-subtle"
          :title="techs.slice(MAX_TECHS).join(', ')"
        >
          +{{ hiddenCount }}
        </li>
      </ul>

      <!-- Acciones. z-base las mantiene por encima del enlace extendido. -->
      <div class="relative z-base mt-auto flex items-center gap-2 border-t border-hair pt-4">
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-sm flex-1"
        >
          <AppIcon name="external" :size="3.5" :stroke-width="2" />
          Ver demo
          <span class="sr-only">de {{ title }}</span>
        </a>

        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline btn-sm"
          :class="demoUrl ? '' : 'flex-1'"
        >
          <AppIcon name="github" :size="4" />
          {{ demoUrl ? 'Código' : 'Ver código' }}
          <span class="sr-only">de {{ title }}</span>
        </a>

        <p
          v-if="!demoUrl && !repoUrl"
          class="inline-flex min-h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-dashed border-hair text-[13px] font-medium text-fg-subtle"
        >
          <AppIcon name="lock" :size="3.5" />
          Repositorio privado
        </p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import type { IconName } from '@/components/common/icons'

interface Props {
  slug?: string
  title: string
  description: string
  image?: string
  techs?: string[]
  demoUrl?: string | null
  repoUrl?: string | null
  /** Etiqueta manual que sustituye al estado calculado (ej. "No desplegado") */
  badge?: string
}

const props = withDefaults(defineProps<Props>(), {
  image: '',
  techs: () => [],
  demoUrl: null,
  repoUrl: null,
  badge: undefined,
})

const MAX_TECHS = 4

const visibleTechs = computed(() => props.techs.slice(0, MAX_TECHS))
const hiddenCount = computed(() => Math.max(0, props.techs.length - MAX_TECHS))

const primaryUrl = computed(() => props.demoUrl || props.repoUrl || null)
const primaryLabel = computed(() => (props.demoUrl ? 'la demo' : 'el repositorio'))

type Status = { label: string; class: string; dot?: boolean; icon?: IconName }

/**
 * Un solo estado por tarjeta. Antes había tres `span` con `v-if`
 * solapables que podían pintar dos insignias sobre la misma esquina.
 */
const status = computed<Status>(() => {
  if (props.badge) {
    return {
      label: props.badge,
      class: 'border-amber-500/40 bg-amber-500/15 text-warn-text',
      icon: 'clock',
    }
  }
  if (props.demoUrl) {
    return {
      label: 'En producción',
      class: 'border-ok/40 bg-ok/15 text-ok-text',
      dot: true,
    }
  }
  if (!props.repoUrl) {
    return {
      label: 'Privado',
      class: 'border-hair bg-surface/80 text-fg-muted',
      icon: 'lock',
    }
  }
  return {
    label: 'Open source',
    class: 'border-hair bg-surface/80 text-fg-muted',
    icon: 'code',
  }
})
</script>
