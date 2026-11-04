import { describe, expect, it } from 'vitest'
import { htmlFileFor, renderHead, robotsTxt, sitemapXml } from '../seo'
import { PAGES, indexablePages } from '../../src/config/seo'

describe('plugin de páginas estáticas', () => {
  it('asigna un fichero HTML a cada ruta', () => {
    expect(htmlFileFor('/')).toBe('index.html')
    expect(htmlFileFor('/about')).toBe('about.html')
    expect(htmlFileFor('/projects/mybalance')).toBe('projects/mybalance.html')
  })

  it('escapa atributos y no deja cerrar el <script> del JSON-LD', () => {
    const html = renderHead({
      ...PAGES.about,
      description: 'Comillas " y <script>alert(1)</script> & más',
    })
    expect(html).toContain(
      'content="Comillas &quot; y &lt;script&gt;alert(1)&lt;/script&gt; &amp; más"'
    )
    const ld = html.slice(html.indexOf('application/ld+json'))
    expect(ld.indexOf('</script>')).toBe(ld.lastIndexOf('</script>'))
  })

  it('el sitemap lista todas las páginas indexables', () => {
    const xml = sitemapXml(indexablePages(), '2026-01-01')
    expect(xml.match(/<url>/g)).toHaveLength(indexablePages().length)
    expect(xml).toContain('<loc>https://giovannibarroso.com/projects/mybalance</loc>')
    expect(xml).not.toContain('/404')
  })

  it('robots.txt apunta al sitemap', () => {
    expect(robotsTxt()).toContain('Sitemap: https://giovannibarroso.com/sitemap.xml')
  })
})
