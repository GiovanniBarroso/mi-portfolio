import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/config/seo'

type SeoInput = {
  title?: string
  description?: string
  image?: string
}

/**
 * Cabeceras por vista. El favicon y el manifest se declaran una sola vez
 * en App.vue; aquí sólo va lo que cambia de una página a otra.
 */
export function useSeo() {
  const route = useRoute()

  return ({ title, description, image }: SeoInput) => {
    const canonical = new URL(route.path || '/', SITE_URL).toString()
    const finalTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const desc = description ?? DEFAULT_DESCRIPTION
    const img = new URL(image ?? DEFAULT_OG_IMAGE, SITE_URL).toString()

    useHead({
      title: finalTitle,
      meta: [
        { name: 'description', content: desc },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_ES' },
        { property: 'og:title', content: finalTitle },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: img },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: finalTitle },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: img },
      ],
      link: [{ rel: 'canonical', href: canonical }],
    })
  }
}
