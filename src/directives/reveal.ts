import type { Directive } from 'vue'
import { prefersReducedMotion } from '@/composables/motion'

/**
 * `v-reveal`: el elemento entra con un fundido y un leve desplazamiento la
 * primera vez que aparece en pantalla.
 *
 *   <li v-reveal="stagger(i)">   retardo en ms
 *   <p v-reveal.fade>            sólo fundido, sin desplazamiento
 *   <h1 v-reveal="false">        desactivada (contenido que no debe esperar)
 *
 * Sustituye a @vueuse/motion (~40 KB de JS) por un IntersectionObserver
 * compartido y una transición CSS. Al terminar se retiran las clases, así
 * el elemento recupera sus propias transiciones (hover de tarjetas, etc.).
 * Con movimiento reducido no hace nada: el contenido está visible desde el
 * principio.
 */
let observer: IntersectionObserver | null = null

function reveal(el: HTMLElement) {
  const delay = parseFloat(el.style.getPropertyValue('--reveal-delay')) || 0
  let timer = 0
  const done = () => {
    window.clearTimeout(timer)
    el.removeEventListener('transitionend', onEnd)
    el.classList.remove('reveal', 'reveal-fade', 'is-revealed')
    el.style.removeProperty('--reveal-delay')
  }
  // transitionend burbujea: sólo cuenta el del propio elemento
  const onEnd = (e: TransitionEvent) => {
    if (e.target === el && e.propertyName === 'opacity') done()
  }
  el.addEventListener('transitionend', onEnd)
  // Red de seguridad por si transitionend no llega (pestaña en segundo plano)
  timer = window.setTimeout(done, 1000 + delay)
  el.classList.add('is-revealed')
}

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer?.unobserve(entry.target)
        reveal(entry.target as HTMLElement)
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.01 }
  )
  return observer
}

export const vReveal: Directive<HTMLElement, number | false | undefined> = {
  mounted(el, { value, modifiers }) {
    if (value === false || prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      return
    }
    el.classList.add('reveal')
    if (modifiers.fade) el.classList.add('reveal-fade')
    if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
    getObserver().observe(el)
  },
  beforeUnmount(el) {
    observer?.unobserve(el)
  },
}
