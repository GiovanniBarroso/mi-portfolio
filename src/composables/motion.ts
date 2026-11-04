/**
 * Preferencia de movimiento del sistema, leída una sola vez.
 * Las animaciones con CSS se cortan además en main.css; esto es para lo
 * que se decide en JS (scroll suave, contadores, transición de tema).
 */
export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true

/** Retardo de entrada escalonado para rejillas: se reinicia en cada fila. */
export const STAGGER_MS = 70
export const stagger = (index: number, cols = 3, step = STAGGER_MS): number => (index % cols) * step
