export function applyInitialTheme(): void {
  const stored = localStorage.getItem('theme')
  let theme: string

  if (stored) {
    theme = stored
  } else {
    theme = 'dark'
    localStorage.setItem('theme', theme)
  }

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
}

export function toggleTheme(): void {
  const html = document.documentElement
  const next = html.classList.contains('dark') ? 'light' : 'dark'
  html.classList.remove('light', 'dark')
  html.classList.add(next)
  localStorage.setItem('theme', next)
}

export function isDarkTheme(): boolean {
  return document.documentElement.classList.contains('dark')
}

// OPCIONAL: Escucha cambios en la preferencia del sistema
export function setupSystemThemeListener(): void {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  mediaQuery.addEventListener('change', (e) => {
    // Solo cambia automáticamente si no hay preferencia guardada manualmente
    const hasManualPreference = localStorage.getItem('theme')
    if (!hasManualPreference) {
      const theme = e.matches ? 'dark' : 'light'
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
      localStorage.setItem('theme', theme)
    }
  })
}
