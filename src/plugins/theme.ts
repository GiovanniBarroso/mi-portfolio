import { readonly, ref } from 'vue'
import { prefersReducedMotion } from '@/composables/motion'

/**
 * Tema claro / oscuro.
 *
 * Regla: `localStorage.theme` sólo existe si la persona ha pulsado el
 * interruptor. Mientras no lo haga se sigue la preferencia del sistema y
 * se reacciona a sus cambios en vivo.
 *
 * La clase se aplica primero desde un script en línea en index.html, para
 * que la primera pintura ya salga con el tema correcto (sin parpadeo).
 * Aquí se mantiene un `ref` con el tema activo, de modo que cualquier
 * componente (el botón del navbar) se entera también cuando cambia el
 * sistema, no sólo cuando se pulsa el botón.
 */

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const THEME_COLOR: Record<Theme, string> = { light: '#ffffff', dark: '#09090b' }

const media = () => window.matchMedia('(prefers-color-scheme: dark)')
const systemTheme = (): Theme => (media().matches ? 'dark' : 'light')

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    // Modo privado o almacenamiento bloqueado: se cae a la preferencia del sistema
    return null
  }
}

const current = ref<Theme>('light')

function apply(theme: Theme): void {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
  root.style.colorScheme = theme
  // La barra del navegador sigue al tema elegido, no sólo al del sistema
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((m) => (m.content = THEME_COLOR[theme]))
  current.value = theme
}

/** Sincroniza el estado con lo que ya aplicó index.html y escucha al sistema. */
export function initTheme(): void {
  apply(readStored() ?? systemTheme())
  media().addEventListener('change', (e) => {
    // Una elección manual manda sobre el sistema
    if (readStored()) return
    apply(e.matches ? 'dark' : 'light')
  })
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> }
}

/**
 * Cambia de tema. Si el navegador soporta View Transitions, el tema nuevo
 * se revela en círculo desde el punto pulsado; si no, cambia sin más.
 */
export function toggleTheme(origin?: { x: number; y: number }): void {
  const next: Theme = current.value === 'dark' ? 'light' : 'dark'
  const commit = () => {
    apply(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Sin persistencia el tema dura la sesión; no es motivo para fallar
    }
  }

  const doc = document as ViewTransitionDoc
  if (!doc.startViewTransition || prefersReducedMotion) return commit()

  // Durante la captura del tema nuevo no debe haber transiciones de color a
  // medio camino: dentro del círculo se veía un gris lavado y texto fantasma
  const root = document.documentElement
  root.classList.add('theme-switching')
  const transition = doc.startViewTransition(commit)
  transition.finished.finally(() => root.classList.remove('theme-switching'))
  const x = origin?.x ?? window.innerWidth - 40
  const y = origin?.y ?? 40
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
  transition.ready
    .then(() =>
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: 480,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    )
    .catch(() => {
      // Transición abortada (otra navegación, pestaña oculta): el tema ya está aplicado
    })
}

export function useTheme() {
  return { theme: readonly(current), toggleTheme }
}
