/**
 * Coordina el scroll y el foco con la transición entre páginas.
 *
 * La transición es `out-in`: la página vieja se desvanece y sólo después
 * entra la nueva. Si el router hace scroll al confirmar la navegación, la
 * página vieja salta arriba antes de desaparecer. Aquí el scroll espera a
 * que la nueva página esté en el DOM.
 */
let pending: (() => void) | null = null

export function waitForPageEnter(timeoutMs = 450): Promise<void> {
  return new Promise((resolve) => {
    const done = () => {
      window.clearTimeout(timer)
      pending = null
      resolve()
    }
    const timer = window.setTimeout(done, timeoutMs)
    pending = done
  })
}

/** Lo llama App.vue en el hook `@enter` de la transición. */
export function notifyPageEnter(): void {
  pending?.()
}
