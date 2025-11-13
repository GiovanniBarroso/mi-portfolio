import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/config/seo'

type SeoInput = {
  title?: string
  description?: string
  image?: string
}

export function useSeo() {
  return ({ title, description, image }: SeoInput) => {
    const route = useRoute()
    const canonical = new URL(route.fullPath || '/', SITE_URL).toString()
    const finalTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    const desc = description ?? DEFAULT_DESCRIPTION
    const img = image ?? DEFAULT_OG_IMAGE

    useHead({
      title: finalTitle,
      meta: [
        { name: 'description', content: desc },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: finalTitle },
        { property: 'og:description', content: desc },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: img },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: finalTitle },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: img },
      ],
      link: [
        { rel: 'canonical', href: canonical },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    })
  }
}
