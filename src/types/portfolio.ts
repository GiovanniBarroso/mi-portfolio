import type { IconName } from '@/components/common/icons'

/**
 * Tipos del contenido del portfolio. Todo lo que se pinta sale de
 * `src/data/` y se valida con estos tipos (y con los tests de
 * `src/data/__tests__`), así una errata en los datos rompe el build en
 * vez de romper la página en producción.
 */

/** Estado público de un proyecto. Se deriva de sus enlaces salvo excepción. */
export type ProjectStatus = 'production' | 'open-source' | 'private' | 'not-deployed'

export interface Project {
  /** Identificador estable: forma la URL `/projects/<slug>` */
  slug: string
  title: string
  /** Qué es, en dos o tres palabras: "E-commerce", "Proyecto de Fin de Grado"… */
  type: string
  /** Una frase (≤ 120 caracteres). Tarjetas, meta description y Open Graph. */
  summary: string
  /** Párrafo completo para la página de detalle */
  description: string
  /** Puntos concretos de lo que se construyó, para la página de detalle */
  highlights: string[]
  techs: string[]
  /** Nombre del fichero en public/resources (captura 3:2, 1280×853) */
  image: string
  demoUrl?: string | null
  repoUrl?: string | null
  /** Equipo, si no fue un trabajo individual: "Equipo de 3" */
  team?: string
  /** Dónde funciona, si es más de un sitio: "Web (PWA)", "Android"… */
  platforms?: string[]
  /** Fuerza un estado que no se deduce de los enlaces */
  status?: ProjectStatus
}

export type Stat = { label: string; value: string; icon: IconName }

export interface AboutData {
  tags: string[]
  achievements: string[]
  tools: string[]
}

export type SkillCategoryId = 'frontend' | 'backend' | 'mobile' | 'devops' | 'testing'

export interface SkillCategory {
  id: SkillCategoryId
  name: string
  icon: IconName
  items: string[]
}
