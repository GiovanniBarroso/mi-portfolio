/**
 * Tema claro / oscuro.
 *
 * Regla: `localStorage.theme` sólo existe si la persona ha pulsado el
 * interruptor. Mientras no lo haga se sigue la preferencia del sistema y
 * se reacciona a sus cambios en vivo. Antes se guardaba 'dark' en el primer
 * arranque, lo que dejaba muerto el listener del sistema para siempre.
 *
 * La clase se aplica además desde un script en línea en index.html, para
 * que la primera pintura ya salga con el tema correcto (sin parpadeo).
 */

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

const systemPrefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

function readStored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    // Modo privado o cookies bloqueadas: se cae a la preferencia del sistema
    return null
  }
}

function apply(theme: Theme): void {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('light', theme === 'light')
  root.style.colorScheme = theme
}

export function applyInitialTheme(): void {
  apply(readStored() ?? (systemPrefersDark() ? 'dark' : 'light'))
}

export function isDarkTheme(): boolean {
  return document.documentElement.classList.contains('dark')
}

export function toggleTheme(): void {
  const next: Theme = isDarkTheme() ? 'light' : 'dark'
  apply(next)
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Sin persistencia el tema dura la sesión; no es motivo para fallar
  }
}

export function setupSystemThemeListener(): void {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Una elección manual manda sobre el sistema
    if (readStored()) return
    apply(e.matches ? 'dark' : 'light')
  })
}
