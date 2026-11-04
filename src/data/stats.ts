import type { Stat } from '../types/portfolio'
import { projects } from './projects'
import { skillCategories } from './skills'
import { projectStatus } from '../utils/project'

/**
 * Cifras del sitio. Las que se pueden contar se calculan a partir de los
 * datos: antes "9 proyectos" estaba escrito a mano en dos vistas y se
 * quedaba desfasado al añadir uno.
 */
const inProduction = projects.filter((p) => projectStatus(p) === 'production').length
const openSource = projects.filter((p) => p.repoUrl).length
const skillCount = skillCategories.reduce((n, c) => n + c.items.length, 0)

/** Años programando de forma continuada. Lo único que se edita a mano. */
export const YEARS_OF_PRACTICE = '2+'

export const stats: Stat[] = [
  { label: 'Proyectos', value: String(projects.length), icon: 'folder' },
  { label: 'En producción', value: String(inProduction), icon: 'rocket' },
  { label: 'Código abierto', value: String(openSource), icon: 'github' },
  { label: 'Años de práctica', value: YEARS_OF_PRACTICE, icon: 'clock' },
]

export const counts = { projects: projects.length, inProduction, openSource, skills: skillCount }
