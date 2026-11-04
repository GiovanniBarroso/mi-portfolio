import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { animationsPaused, prefersReducedMotion } from '@/composables/motion'

/**
 * Índice que avanza solo cada `intervalMs`.
 *
 * - Con movimiento reducido se queda quieto en el primero.
 * - Tras `maxCycles` vueltas se detiene en el primero: es un adorno, no tiene
 *   por qué moverse mientras alguien lee el resto de la página.
 * - Se para con «Pausar animaciones» y mientras la pestaña está oculta.
 */
export function useIndexCarousel({
  length,
  intervalMs = 2200,
  maxCycles = Infinity,
}: {
  length: number
  intervalMs?: number
  maxCycles?: number
}) {
  const current = ref(0)
  let timer: number | undefined
  let steps = 0
  const maxSteps = maxCycles * length

  const stop = () => {
    window.clearInterval(timer)
    timer = undefined
  }

  const next = () => {
    steps++
    current.value = (current.value + 1) % Math.max(length, 1)
    if (steps >= maxSteps) stop()
  }

  const start = () => {
    stop()
    if (length < 2 || prefersReducedMotion || animationsPaused.value || steps >= maxSteps) return
    timer = window.setInterval(next, intervalMs)
  }

  const onVisibility = () => (document.hidden ? stop() : start())

  watch(animationsPaused, (paused) => (paused ? stop() : start()))

  onMounted(() => {
    start()
    document.addEventListener('visibilitychange', onVisibility)
  })

  onBeforeUnmount(() => {
    stop()
    document.removeEventListener('visibilitychange', onVisibility)
  })

  return { current }
}
