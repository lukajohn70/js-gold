/** Shared scroll utility — use across all components */
export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/** Theme helpers */
export type Theme = 'light' | 'dark'

export function getStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem('jsgold-theme')
    if (stored === 'dark' || stored === 'light') return stored
  } catch {}
  return 'dark' // Default to cinematic dark studio theme
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem('jsgold-theme', theme)
  } catch {}
}
