/**
 * Normaliza nombres de tecnologías para poder compararlos entre proyectos
 * y skills: "Next.js 15" y "Next.js 16" son la misma familia, igual que
 * "Tailwind CSS v4" y "Tailwind CSS", o "Node.js (Express)" y "Node.js".
 */
const ALIASES: Record<string, string> = {
  tailwind: 'Tailwind CSS',
  tailwindcss: 'Tailwind CSS',
  'tailwind css': 'Tailwind CSS',
  vue: 'Vue',
  'vue.js': 'Vue',
  next: 'Next.js',
  nextjs: 'Next.js',
  node: 'Node.js',
  nodejs: 'Node.js',
  js: 'JavaScript',
  ts: 'TypeScript',
  postgres: 'PostgreSQL',
  'lint-staged': 'lint-staged',
}

export function techFamily(name: string): string {
  const base = name
    // "Node.js (Express)" → "Node.js"
    .replace(/\s*\(.*\)\s*$/, '')
    // "Next.js 16", "Tailwind CSS v4", "Laravel 10" → sin versión
    .replace(/\s+v?\d+(\.\d+)*$/i, '')
    .trim()
  return ALIASES[base.toLowerCase()] ?? base
}

/** Familias únicas de una lista de tecnologías, en su orden original. */
export function techFamilies(techs: readonly string[]): string[] {
  return [...new Set(techs.map(techFamily))]
}
