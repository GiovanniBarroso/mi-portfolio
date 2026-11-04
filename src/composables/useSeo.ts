import { useHead } from '@unhead/vue'
import { headTags, type PageSeo } from '@/config/seo'

/**
 * Cabeceras de la vista actual. La definición de cada página está en
 * `src/config/seo.ts`, la misma que usa el build para generar el HTML
 * estático de cada ruta: lo que ve un bot y lo que ve el navegador
 * coinciden siempre.
 */
export function useSeo(page: PageSeo): void {
  const { title, meta, link } = headTags(page)
  useHead({ title, meta, link })
}
