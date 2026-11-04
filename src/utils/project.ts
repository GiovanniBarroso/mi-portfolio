import type { IconName } from '../components/common/icons'
import type { Project, ProjectStatus } from '../types/portfolio'
import { FEATURED_SLUGS, projects } from '../data/projects'
import { asset } from './asset'
import { techFamilies } from './tech'

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** Proyectos destacados en el orden de FEATURED_SLUGS. Los tests garantizan que existen. */
export const featuredProjects: Project[] = FEATURED_SLUGS.map(getProject).filter(
  (p): p is Project => Boolean(p)
)

export const isFeatured = (p: Project): boolean =>
  (FEATURED_SLUGS as readonly string[]).includes(p.slug)

export const projectPath = (p: Pick<Project, 'slug'>): string => `/projects/${p.slug}`
export const projectImage = (p: Pick<Project, 'image'>): string => asset(`resources/${p.image}`)
export const projectOgImage = (p: Pick<Project, 'slug'>): string => `/og/${p.slug}.jpg`

export function projectStatus(p: Project): ProjectStatus {
  if (p.status) return p.status
  if (p.demoUrl) return 'production'
  if (p.repoUrl) return 'open-source'
  return 'private'
}

type StatusMeta = { label: string; dot: string; icon?: IconName }

/** Etiqueta y color de cada estado. El color va en el punto, nunca en el texto. */
export const STATUS_META: Record<ProjectStatus, StatusMeta> = {
  production: { label: 'En producción', dot: 'bg-ok' },
  'open-source': { label: 'Código abierto', dot: 'bg-violet2' },
  private: { label: 'Privado', dot: 'bg-fg-subtle', icon: 'lock' },
  'not-deployed': { label: 'No desplegado', dot: 'bg-warn' },
}

/** Anterior y siguiente en el orden de la lista, con vuelta al principio. */
export function projectNeighbors(slug: string): { prev: Project; next: Project } | null {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1 || projects.length < 2) return null
  const n = projects.length
  return { prev: projects[(i - 1 + n) % n], next: projects[(i + 1) % n] }
}

/** Cuántos proyectos usan cada familia de tecnología. */
export function techUsage(): Map<string, number> {
  const counts = new Map<string, number>()
  for (const p of projects) {
    for (const t of techFamilies(p.techs)) counts.set(t, (counts.get(t) ?? 0) + 1)
  }
  return counts
}

export const projectsUsing = (family: string): Project[] =>
  projects.filter((p) => techFamilies(p.techs).includes(family))
