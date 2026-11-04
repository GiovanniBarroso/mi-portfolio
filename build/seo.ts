/**
 * Plugin de Vite que da a cada ruta su propio HTML.
 *
 * El sitio es una SPA servida por GitHub Pages, que no reescribe rutas:
 * sin esto, abrir /projects directamente devolvía un 404 de GitHub, y los
 * bots que no ejecutan JavaScript (LinkedIn, WhatsApp, X) veían siempre el
 * título y la imagen de la portada.
 *
 * Durante el build:
 * - Inyecta en index.html las etiquetas de la portada (también en dev).
 * - Emite `about.html`, `projects.html`, `projects/<slug>.html`… con su
 *   título, descripción, canonical, Open Graph y JSON-LD. GitHub Pages
 *   sirve `/about` desde `about.html`.
 * - Emite `404.html` (la SPA resuelve la ruta y muestra la vista 404).
 * - Emite `sitemap.xml` y `robots.txt`.
 * - Añade una Content-Security-Policy con el hash del script en línea.
 *
 * La definición de cada página vive en `src/config/seo.ts`, la misma que
 * usa `useSeo()` en el navegador.
 */
import { createHash } from 'node:crypto'
import type { Plugin } from 'vite'
import {
  PAGES,
  SITE_URL,
  absoluteUrl,
  headTags,
  indexablePages,
  jsonLd,
  type PageSeo,
} from '../src/config/seo'

const START = '<!-- seo:start -->'
const END = '<!-- seo:end -->'

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

/** JSON dentro de <script>: `<` escapado para que nada pueda cerrar la etiqueta. */
const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c')

export function renderHead(page: PageSeo): string {
  const { title, meta, link } = headTags(page)
  const lines = [
    `<title>${escapeText(title)}</title>`,
    ...meta.map((m) =>
      m.name
        ? `<meta name="${m.name}" content="${escapeAttr(m.content)}" />`
        : `<meta property="${m.property}" content="${escapeAttr(m.content)}" />`
    ),
    ...link.map((l) => `<link rel="${l.rel}" href="${escapeAttr(l.href)}" />`),
    `<script type="application/ld+json">${safeJson(jsonLd(page))}</script>`,
  ]
  return `${START}\n    ${lines.join('\n    ')}\n    ${END}`
}

function replaceHead(html: string, page: PageSeo): string {
  const start = html.indexOf(START)
  const end = html.indexOf(END)
  if (start === -1 || end === -1) {
    throw new Error(`[seo] index.html necesita los marcadores ${START} y ${END}`)
  }
  return html.slice(0, start) + renderHead(page) + html.slice(end + END.length)
}

/** Fichero de salida de una ruta: `/projects/x` → `projects/x.html`. */
export const htmlFileFor = (path: string) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`)

/**
 * CSP. Los scripts en línea (el que aplica el tema antes de pintar) se
 * permiten por hash; `style-src 'unsafe-inline'` es necesario porque Vue
 * escribe estilos en línea en transiciones y `:style`.
 */
function withCsp(html: string): string {
  const hashes = [
    ...html.matchAll(
      /<script(?![^>]*\bsrc=)(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g
    ),
  ].map(([, body]) => `'sha256-${createHash('sha256').update(body).digest('base64')}'`)
  const policy = [
    "default-src 'self'",
    `script-src 'self' ${hashes.join(' ')}`.trim(),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "manifest-src 'self'",
    "worker-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests',
  ].join('; ')
  return html.replace(
    '<meta charset="UTF-8" />',
    `<meta charset="UTF-8" />\n    <meta http-equiv="Content-Security-Policy" content="${policy}" />`
  )
}

export function sitemapXml(pages: PageSeo[], lastmod: string): string {
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${absoluteUrl(p.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n` +
        `    <priority>${(p.priority ?? 0.5).toFixed(1)}</priority>\n  </url>`
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export const robotsTxt = () => `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`

export function seoPages(): Plugin {
  return {
    name: 'portfolio:seo-pages',
    enforce: 'post',

    transformIndexHtml: {
      order: 'pre',
      handler: (html) => replaceHead(html, PAGES.home),
    },

    generateBundle(_options, bundle) {
      const index = bundle['index.html']
      if (!index || index.type !== 'asset') return
      const template = String(index.source)

      const emit = (fileName: string, source: string) =>
        this.emitFile({ type: 'asset', fileName, source })

      for (const page of indexablePages()) {
        if (page.path === '/') continue
        emit(htmlFileFor(page.path), withCsp(replaceHead(template, page)))
      }
      // Cobertura por si GitHub Pages resolviera /projects como directorio
      // (existe projects/) antes que como projects.html.
      emit('projects/index.html', withCsp(replaceHead(template, PAGES.projects)))
      emit('404.html', withCsp(replaceHead(template, PAGES.notFound)))

      index.source = withCsp(template)

      const lastmod = new Date().toISOString().slice(0, 10)
      emit('sitemap.xml', sitemapXml(indexablePages(), lastmod))
      emit('robots.txt', robotsTxt())
    },
  }
}
