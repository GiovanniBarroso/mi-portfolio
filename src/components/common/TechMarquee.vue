<template>
  <div class="relative">
    <!-- Para lectores de pantalla, la lista una sola vez y sin movimiento -->
    <ul class="sr-only">
      <li v-for="tech in uniqueTechs" :key="tech">{{ tech }}</li>
    </ul>

    <div class="flex flex-col gap-3" aria-hidden="true">
      <div v-for="(row, r) in rows" :key="r" class="marquee-track mask-fade-x overflow-hidden">
        <!-- La fila se duplica para que el bucle no tenga costura -->
        <div
          class="marquee flex w-max gap-3"
          :class="[
            r % 2 === 0 ? 'marquee--left' : 'marquee--right',
            animationsPaused && 'is-paused',
          ]"
        >
          <span
            v-for="(tech, i) in [...row, ...row]"
            :key="`${r}-${i}`"
            class="tech-chip shrink-0 select-none rounded-xl border border-hair bg-surface px-4 py-2.5 text-sm font-medium text-fg-muted"
            :class="i >= row.length && 'is-dup'"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- WCAG 2.2.2: todo movimiento de más de 5 s debe poder pararse -->
    <div v-if="!prefersReducedMotion" class="mt-5 flex justify-center">
      <button
        type="button"
        class="btn-ghost btn-sm"
        :aria-pressed="animationsPaused"
        @click="togglePause"
      >
        <AppIcon :name="animationsPaused ? 'play' : 'pause'" :size="3.5" :stroke-width="2" />
        {{ animationsPaused ? 'Reanudar animaciones' : 'Pausar animaciones' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { animationsPaused, prefersReducedMotion } from '@/composables/motion'

const props = defineProps<{ rows: readonly (readonly string[])[] }>()

const togglePause = () => (animationsPaused.value = !animationsPaused.value)
const uniqueTechs = computed(() => [...new Set(props.rows.flat())])
</script>

<style scoped>
.marquee {
  animation: marquee-left 48s linear infinite;
}
.marquee--right {
  animation-name: marquee-right;
}
.marquee:hover,
.marquee.is-paused {
  animation-play-state: paused;
}

.tech-chip {
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;
}
.tech-chip:hover {
  border-color: var(--accent);
  color: var(--accent-text);
  background: var(--accent-soft);
}

@keyframes marquee-left {
  to {
    transform: translateX(-50%);
  }
}
@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

/* Sin movimiento: las filas se convierten en una rejilla estática que envuelve */
@media (prefers-reduced-motion: reduce) {
  .marquee {
    animation: none;
    width: auto;
    flex-wrap: wrap;
    justify-content: center;
    padding-inline: 1.25rem;
  }
  .marquee-track {
    -webkit-mask-image: none;
    mask-image: none;
  }
  .is-dup {
    display: none;
  }
}
</style>
