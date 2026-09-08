/**
 * Tokens de movimiento del portfolio.
 *
 * Dos reglas:
 * 1. Duraciones acotadas — 200ms micro-interacción, 400-500ms entrada.
 *    Antes había valores sueltos entre 220 y 700ms y se notaba el desorden.
 * 2. Con `prefers-reduced-motion` los presets se vuelven inertes:
 *    el estado inicial pasa a ser el final, así el contenido nunca
 *    aparece a media opacidad ni desplazado. @vueuse/motion anima con JS,
 *    de modo que el corte en CSS no basta y hay que neutralizarlo aquí.
 */

export const DURATION = {
  fast: 200,
  base: 350,
  slow: 500,
} as const

export const STAGGER = 70

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true

type Variant = Record<string, unknown>

/** Devuelve un preset inerte si el usuario pidió menos movimiento. */
function preset(initial: Variant, enter: Variant) {
  if (reduced) {
    const still = { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0 } }
    return { initial: still, enter: still, visibleOnce: still }
  }
  return { initial, enter, visibleOnce: enter }
}

export const reveal = preset(
  { opacity: 0, y: 18 },
  { opacity: 1, y: 0, transition: { duration: DURATION.slow } }
)

export const fadeUp = preset(
  { opacity: 0, y: 14 },
  { opacity: 1, y: 0, transition: { duration: DURATION.base } }
)

export const fadeIn = preset(
  { opacity: 0 },
  { opacity: 1, transition: { duration: DURATION.base } }
)

export const pop = preset(
  { opacity: 0, scale: 0.96 },
  { opacity: 1, scale: 1, transition: { duration: DURATION.fast } }
)

export const slideInLeft = preset(
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, transition: { duration: DURATION.slow } }
)

export const slideInRight = preset(
  { opacity: 0, x: 20 },
  { opacity: 1, x: 0, transition: { duration: DURATION.slow } }
)

export const routeFade = preset(
  { opacity: 0, y: 8 },
  { opacity: 1, y: 0, transition: { duration: DURATION.fast } }
)

/**
 * Variante de entrada escalonada para listas.
 * `cols` limita el retardo al ancho de la rejilla: en una grid de 3
 * columnas el cuarto elemento vuelve a empezar en 0 y la cascada se lee
 * en diagonal en vez de acumular casi un segundo al final de la lista.
 */
export function staggered(index: number, cols = 3, base = STAGGER) {
  if (reduced) return reveal.visibleOnce
  return {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, delay: (index % cols) * base },
  }
}

/** Retardo simple, para secuencias cortas que no son una rejilla. */
export function withStagger(index: number, base = STAGGER) {
  return { delay: reduced ? 0 : index * base }
}

export const prefersReducedMotion = reduced
