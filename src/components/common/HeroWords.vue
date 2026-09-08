<template>
  <!-- El carrusel es puramente visual: se marca aria-hidden y debajo va
       la lista completa en texto para lectores de pantalla. Antes había
       un aria-live que reanunciaba una palabra cada 2,2 s sin parar. -->
  <span class="words" aria-hidden="true">
    <span
      v-for="(word, i) in items"
      :key="word"
      class="words__item"
      :style="{
        transform: `translateY(${(i - current) * 110}%)`,
        opacity: i === current ? 1 : 0,
      }"
    >
      {{ word }}
    </span>
    <!-- Copia invisible que fija el ancho al término más largo, para que
         el texto de al lado no se mueva al cambiar de palabra. -->
    <span class="words__sizer">{{ longest }}</span>
  </span>
  <span class="sr-only">{{ items.join(', ') }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useIndexCarousel } from '@/composables/useIndexCarousel'

const props = withDefaults(
  defineProps<{
    items: readonly string[]
    intervalMs?: number
  }>(),
  { intervalMs: 2400 }
)

const longest = computed(() =>
  props.items.reduce((a, b) => (b.length > a.length ? b : a), props.items[0] ?? '')
)

const { current } = useIndexCarousel({
  length: props.items.length,
  intervalMs: props.intervalMs,
})
</script>

<style scoped>
.words {
  position: relative;
  display: inline-grid;
  overflow: hidden;
  vertical-align: bottom;
  font-weight: 600;
  color: var(--accent-text);
  /* Alto de una línea con holgura para tildes y descendentes */
  line-height: 1.5;
}

.words__item {
  grid-area: 1 / 1;
  white-space: nowrap;
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.35s ease;
  will-change: transform;
}

.words__sizer {
  grid-area: 1 / 1;
  white-space: nowrap;
  visibility: hidden;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .words__item {
    transition: none;
  }
}
</style>
