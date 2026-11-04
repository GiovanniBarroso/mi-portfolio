<template>
  <Transition name="btt">
    <button
      v-if="visible"
      type="button"
      aria-label="Volver al principio de la página"
      data-print="hide"
      class="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] right-[calc(1.25rem+env(safe-area-inset-right))] z-float grid h-12 w-12 place-items-center rounded-full border border-hair bg-surface/90 text-fg-muted shadow-lg backdrop-blur-md transition-colors duration-200 hover:border-hair-strong hover:text-accent-text sm:bottom-[calc(2rem+env(safe-area-inset-bottom))] sm:right-[calc(2rem+env(safe-area-inset-right))]"
      @click="scrollToTop"
    >
      <!-- Anillo de progreso: además de subir, indica cuánto queda de página -->
      <svg class="absolute -inset-px h-12 w-12 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle
          cx="24"
          cy="24"
          r="23"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          class="text-accent"
          :stroke-dasharray="CIRCUMFERENCE"
          :stroke-dashoffset="CIRCUMFERENCE * (1 - progress)"
        />
      </svg>
      <AppIcon name="arrow-up" :size="4" :stroke-width="2.25" class="relative" />
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { prefersReducedMotion } from '@/composables/motion'

const CIRCUMFERENCE = 2 * Math.PI * 23

const visible = ref(false)
const progress = ref(0)
let ticking = false

const update = () => {
  const scrolled = window.scrollY
  const max = document.documentElement.scrollHeight - window.innerHeight
  visible.value = scrolled > 400
  progress.value = max > 0 ? Math.min(scrolled / max, 1) : 0
  ticking = false
}

// rAF: el scroll dispara muy seguido y el anillo se repinta en cada evento
const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  // El botón desaparece arriba: el foco pasa al contenido en vez de perderse
  document.getElementById('contenido')?.focus({ preventScroll: true })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<style scoped>
.btt-enter-active,
.btt-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.btt-enter-from,
.btt-leave-to {
  opacity: 0;
  transform: translateY(8px) scale(0.9);
}
</style>
