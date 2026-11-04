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
        transform: `translateY(${offset(i)}%)`,
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

/**
 * Posición de cada término: el actual en 0, el anterior sale por arriba y
 * los que esperan, debajo. Así el paso del último al primero también sube,
 * en vez de dar la vuelta en sentido contrario.
 */
const offset = (i: number) => {
  const n = props.items.length
  const d = (i - current.value + n) % n
  return d === 0 ? 0 : d === n - 1 ? -110 : 110
}

const { current } = useIndexCarousel({
  length: props.items.length,
  intervalMs: props.intervalMs,
  // Dos vueltas y se queda en la primera
  maxCycles: 2,
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
  /* Sin movimiento sólo se ve el primero: la caja se ajusta a él y la línea
     queda centrada bajo el titular */
  .words__item:not(:first-child),
  .words__sizer {
    display: none;
  }
}
</style>
