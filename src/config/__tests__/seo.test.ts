import { describe, expect, it } from 'vitest'
import { projects } from '@/data/projects'
import { PAGES, headTags, indexablePages, jsonLd, projectSeo } from '@/config/seo'

const meta = (page: Parameters<typeof headTags>[0], key: string) =>
  headTags(page).meta.find((m) => m.name === key || m.property === key)?.content

describe('SEO por página', () => {
  it('las rutas indexables son únicas e incluyen cada proyecto', () => {
    const paths = indexablePages().map((p) => p.path)
    expect(new Set(paths).size).toBe(paths.length)
    for (const p of projects) expect(paths).toContain(`/projects/${p.slug}`)
    expect(paths).not.toContain(PAGES.notFound.path)
  })

  it.each(indexablePages().map((p) => [p.path, p] as const))(
    '%s: título y descripción con longitud razonable',
    (_path, page) => {
      const { title } = headTags(page)
      expect(title.length).toBeLessThanOrEqual(65)
      expect(page.description.length).toBeGreaterThanOrEqual(50)
      expect(page.description.length).toBeLessThanOrEqual(170)
    }
  )

  it('el nombre del sitio aparece una sola vez en el título', () => {
    const { title } = headTags(PAGES.about)
    expect(title).toBe('Sobre mí · Giovanni Barroso')
    expect(headTags(PAGES.home).title).toBe('Giovanni Barroso · Desarrollador Full-Stack')
  })

  it('canonical, og:url e imagen son absolutos', () => {
    const tags = headTags(projectSeo(projects[0]))
    expect(tags.link).toEqual([
      { rel: 'canonical', href: `https://giovannibarroso.com/projects/${projects[0].slug}` },
    ])
    expect(meta(projectSeo(projects[0]), 'og:image')).toBe(
      `https://giovannibarroso.com/og/${projects[0].slug}.jpg`
    )
    expect(meta(PAGES.home, 'og:image')).toBe('https://giovannibarroso.com/og/default.jpg')
  })

  it('la 404 no se indexa ni declara canonical', () => {
    const tags = headTags(PAGES.notFound)
    expect(tags.link).toEqual([])
    expect(meta(PAGES.notFound, 'robots')).toBe('noindex, follow')
    expect(meta(PAGES.notFound, 'og:url')).toBeUndefined()
  })

  it('el JSON-LD de un proyecto incluye la obra y las migas', () => {
    const data = jsonLd(projectSeo(projects[0])) as { '@graph': { '@type': string }[] }
    const types = data['@graph'].map((n) => n['@type'])
    expect(types).toEqual(['Person', 'WebSite', 'CreativeWork', 'BreadcrumbList'])
  })
})
