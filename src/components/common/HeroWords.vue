<script setup lang="ts">
import { useIndexCarousel } from '@/composables/useIndexCarousel'

const props = withDefaults(
  defineProps<{
    items: readonly string[]
    intervalMs?: number
    respectReducedMotion?: boolean
    force?: boolean
    srOnly?: boolean
  }>(),
  {
    intervalMs: 2200,
    respectReducedMotion: true,
    force: false,
    srOnly: true,
  }
)

const { current } = useIndexCarousel({
  length: props.items.length,
  intervalMs: props.intervalMs,
  respectReducedMotion: props.respectReducedMotion,
  force: props.force,
})
</script>

<!-- Contenedor visual del carrusel -->
<template>
  <span
    class="inline-flex items-center justify-center relative w-52 sm:w-64 h-8 overflow-hidden font-semibold text-brand-500 align-middle"
    aria-hidden="true"
  >
    <span
      v-for="(word, i) in items"
      :key="word"
      class="absolute inset-0 flex items-center justify-center transition-transform duration-700 will-change-transform"
      :style="{ transform: `translateY(${(i - current) * 100}%)` }"
    >
      {{ word }}
    </span>
  </span>
  <span v-if="srOnly" class="sr-only" aria-live="polite">{{ items[current] }}</span>
</template>
