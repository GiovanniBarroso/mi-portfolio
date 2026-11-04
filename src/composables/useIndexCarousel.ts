import { ref, onMounted, onBeforeUnmount } from 'vue'
import { prefersReducedMotion } from '@/composables/motion'

/**
 * Índice que avanza solo cada `intervalMs`. Con movimiento reducido se
 * queda quieto en el primero, y se pausa mientras la pestaña está oculta
 * para no gastar CPU en algo que nadie ve.
 */
export function useIndexCarousel({
  length,
  intervalMs = 2200,
}: {
  length: number
  intervalMs?: number
}) {
  const current = ref(0)
  let timer: number | undefined

  const next = () => {
    current.value = (current.value + 1) % Math.max(length, 1)
  }

  const stop = () => {
    window.clearInterval(timer)
    timer = undefined
  }

  const start = () => {
    stop()
    if (length > 1 && !prefersReducedMotion) timer = window.setInterval(next, intervalMs)
  }

  const onVisibility = () => (document.hidden ? stop() : start())

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
