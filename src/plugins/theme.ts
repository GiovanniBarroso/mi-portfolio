export function applyInitialTheme(): void {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const theme = stored ?? (prefersDark ? 'dark' : 'light')
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
