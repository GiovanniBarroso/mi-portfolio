<template>
  <header
    v-motion
    :initial="reveal.initial"
    :enter="reveal.enter"
    :class="[
      'flex flex-col',
      align === 'center' ? 'items-center text-center' : 'items-start text-left',
    ]"
  >
    <p v-if="eyebrow" class="eyebrow">
      <span aria-hidden="true" class="h-px w-6 bg-current opacity-60" />
      {{ eyebrow }}
    </p>

    <component
      :is="as"
      :id="titleId"
      class="mt-4 font-bold tracking-tight text-fg"
      :class="as === 'h1' ? 'text-fluid-2xl' : 'text-fluid-xl'"
    >
      {{ title }}
    </component>

    <p
      v-if="subtitle"
      class="mt-4 measure text-fluid-base leading-relaxed text-fg-muted"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>

    <div v-if="$slots.default" class="mt-7 w-full">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
import { reveal } from '@/composables/motionPresets'

/**
 * Cabecera única para vistas y secciones.
 * Sustituye a los bloques eyebrow + h1 + barra degradada que estaban
 * copiados en las cinco vistas con medidas ligeramente distintas.
 */
withDefaults(
  defineProps<{
    title: string
    eyebrow?: string
    subtitle?: string
    /** `h1` para cabecera de página, `h2` para sección dentro de una página. */
    as?: 'h1' | 'h2'
    align?: 'center' | 'left'
    /** Necesario para enlazar con aria-labelledby de la sección. */
    titleId?: string
  }>(),
  { as: 'h2', align: 'center' }
)
</script>
