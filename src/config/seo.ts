/**
 * SEO del sitio: una sola definición por página que usan dos consumidores.
 *
 * - En el navegador, `useSeo()` la vuelca en <head> con Unhead.
 * - En el build, el plugin de `build/seo.ts` genera un HTML por ruta con
 *   estas mismas etiquetas, el sitemap y robots.txt. Así LinkedIn, WhatsApp
 *   o X (que no ejecutan JavaScript) ven el título y la imagen correctos.
 *
 * Por eso este módulo y lo que importa usan rutas relativas y no tocan
 * `window`: también se ejecuta en Node.
 */
import type { Project } from '../types/portfolio'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { GITHUB_URL, LINKEDIN_URL } from '../data/social'
import { skillCategories } from '../data/skills'
import { projectOgImage, projectPath, projectStatus, STATUS_META } from '../utils/project'
import { techFamily } from '../utils/tech'

export const SITE_URL = site.url
export const SITE_NAME = site.name
export const SITE_TITLE = `${site.name} · ${site.role}`
export const DEFAULT_OG_IMAGE = '/og/default.jpg'
export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const
export const LOCALE = 'es_ES'

export type PageKind = 'website' | 'profile' | 'article'

export interface PageSeo {
  /** Ruta canónica sin barra final (salvo la raíz) */
  path: string
  /** Título corto de la página; se le añade el nombre del sitio */
  title?: string
  description: string
  image?: string
  imageAlt?: string
  kind?: PageKind
  noindex?: boolean
  /** Prioridad para el sitemap (0-1) */
  priority?: number
}

export const fullTitle = (title?: string): string =>
  title ? `${title} · ${SITE_NAME}` : SITE_TITLE
export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).toString()

export const PAGES = {
  home: {
    path: '/',
    description:
      'Giovanni Barroso, desarrollador full-stack en Sevilla. Productos web con Vue, React, TypeScript y Supabase: de la base de datos a una interfaz rápida y accesible.',
    kind: 'profile',
    priority: 1,
  },
  about: {
    path: '/about',
    title: 'Sobre mí',
    description:
      'Quién soy, cómo trabajo y con qué herramientas: desarrollo full-stack con TypeScript, Vue, React, NestJS y Supabase, con foco en accesibilidad y rendimiento.',
    kind: 'profile',
    priority: 0.8,
  },
  projects: {
    path: '/projects',
    title: 'Proyectos',
    description: `${projects.length} proyectos: una app de entreno en web y Android (iOS en camino), un e-commerce con Stripe en producción, una app de escritorio e infraestructura.`,
    priority: 0.9,
  },
  skills: {
    path: '/skills',
    title: 'Skills',
    description:
      'Tecnologías con las que trabajo, agrupadas por área y enlazadas a los proyectos donde las he usado: Vue, React, Next.js, Supabase, Stripe, Kotlin y más.',
    priority: 0.7,
  },
  contact: {
    path: '/contact',
    title: 'Contacto',
    description: `¿Un proyecto o una vacante? Escríbeme por email o LinkedIn y te respondo en ${site.responseTime}.`,
    priority: 0.7,
  },
  notFound: {
    path: '/404',
    title: 'Página no encontrada',
    description: 'Esta página no existe en el portfolio de Giovanni Barroso.',
    noindex: true,
  },
} satisfies Record<string, PageSeo>

export function projectSeo(p: Project): PageSeo {
  return {
    path: projectPath(p),
    title: p.title,
    description: p.summary,
    image: projectOgImage(p),
    imageAlt: `${p.title} — ${p.summary}`,
    kind: 'article',
    priority: 0.6,
  }
}

/** Todas las páginas indexables, en el orden del sitemap. */
export function indexablePages(): PageSeo[] {
  const { home, about, projects: list, skills, contact } = PAGES
  return [home, about, list, skills, contact, ...projects.map(projectSeo)]
}

/* ─────────────────────────── Etiquetas ─────────────────────────── */

export type MetaTag = { name?: string; property?: string; content: string }
export type LinkTag = { rel: string; href: string }

export interface HeadTags {
  title: string
  meta: MetaTag[]
  link: LinkTag[]
}

/** Etiquetas de <head> de una página. Las comparten Unhead y el build. */
export function headTags(page: PageSeo): HeadTags {
  const title = fullTitle(page.title)
  const url = absoluteUrl(page.path)
  const image = absoluteUrl(page.image ?? DEFAULT_OG_IMAGE)
  const imageAlt = page.imageAlt ?? `${site.name}, ${site.role.toLowerCase()} en ${site.city}`

  const meta: MetaTag[] = [
    { name: 'description', content: page.description },
    { name: 'robots', content: page.noindex ? 'noindex, follow' : 'index, follow' },
    {
      property: 'og:type',
      content: page.kind === 'article' ? 'article' : (page.kind ?? 'website'),
    },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:locale', content: LOCALE },
    { property: 'og:title', content: title },
    { property: 'og:description', content: page.description },
    { property: 'og:url', content: url },
    { property: 'og:image', content: image },
    { property: 'og:image:type', content: image.endsWith('.png') ? 'image/png' : 'image/jpeg' },
    { property: 'og:image:width', content: String(OG_IMAGE_SIZE.width) },
    { property: 'og:image:height', content: String(OG_IMAGE_SIZE.height) },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: page.description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:image:alt', content: imageAlt },
  ]

  if (page.kind === 'profile') {
    const [first, ...rest] = site.name.split(' ')
    meta.push(
      { property: 'profile:first_name', content: first },
      { property: 'profile:last_name', content: rest.join(' ') }
    )
  }

  // Una página que no se indexa no declara URL canónica
  const link: LinkTag[] = page.noindex ? [] : [{ rel: 'canonical', href: url }]
  return { title, meta: page.noindex ? meta.filter((m) => m.property !== 'og:url') : meta, link }
}

/* ──────────────────────── Datos estructurados ──────────────────────── */

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.name,
    url: SITE_URL,
    image: absoluteUrl('/profile.jpg'),
    email: `mailto:${site.email}`,
    jobTitle: site.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressCountry: 'ES',
    },
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    knowsAbout: [...new Set(skillCategories.flatMap((c) => c.items.map(techFamily)))].slice(0, 20),
  }
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_TITLE,
    inLanguage: 'es-ES',
    author: { '@id': PERSON_ID },
  }
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  }
}

/** JSON-LD de una página: persona y sitio siempre, más lo propio de cada ruta. */
export function jsonLd(page: PageSeo): object {
  const graph: object[] = [personSchema(), websiteSchema()]
  const url = absoluteUrl(page.path)

  if (page.path === '/' || page.path === '/about') {
    graph.push({
      '@type': 'ProfilePage',
      '@id': `${url}#page`,
      url,
      name: fullTitle(page.title),
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PERSON_ID },
    })
  }

  if (page.path === '/projects') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${url}#page`,
      url,
      name: fullTitle(page.title),
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: absoluteUrl(projectPath(p)),
          name: p.title,
        })),
      },
    })
  }

  const project = projects.find((p) => projectPath(p) === page.path)
  if (project) {
    graph.push(
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        url,
        name: project.title,
        description: project.summary,
        genre: project.type,
        image: absoluteUrl(page.image ?? DEFAULT_OG_IMAGE),
        creator: { '@id': PERSON_ID },
        keywords: project.techs.join(', '),
        creativeWorkStatus: STATUS_META[projectStatus(project)].label,
        sameAs: [project.demoUrl, project.repoUrl].filter(Boolean),
      },
      breadcrumb([
        { name: 'Inicio', path: '/' },
        { name: 'Proyectos', path: '/projects' },
        { name: project.title, path: page.path },
      ])
    )
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
