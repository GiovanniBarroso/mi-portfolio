<template>
  <div class="flex min-h-dvh flex-col bg-bg font-sans text-fg">
    <a href="#contenido" class="skip-link">Saltar al contenido</a>

    <Navbar />

    <main id="contenido" class="flex-1 pt-[var(--nav-h)]" tabindex="-1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="route" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import { useHead } from '@unhead/vue'
import { SITE_NAME, SITE_URL } from '@/config/seo'
import { socialLinks } from '@/data/social'

const BASE = import.meta.env.BASE_URL

// Datos estructurados: es lo que permite a Google mostrar el panel de
// persona con los perfiles asociados en vez de un resultado de texto suelto.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Giovanni Barroso',
  url: SITE_URL,
  jobTitle: 'Desarrollador Full-Stack',
  address: { '@type': 'PostalAddress', addressLocality: 'Sevilla', addressCountry: 'ES' },
  sameAs: socialLinks.filter((l) => l.external).map((l) => l.href),
  knowsAbout: ['Vue.js', 'React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Accesibilidad'],
}

useHead({
  titleTemplate: (sub?: string) => (sub ? `${sub} | ${SITE_NAME}` : SITE_NAME),
  htmlAttrs: { lang: 'es' },
  link: [
    { rel: 'icon', href: `${BASE}favicon.ico` },
    { rel: 'apple-touch-icon', href: `${BASE}apple-touch-icon.png` },
    { rel: 'manifest', href: `${BASE}manifest.webmanifest` },
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) }],
})
</script>

<style>
/* Transición entre rutas. Muy corta a propósito: una página que tarda
   en aparecer se percibe como lenta, no como elegante. */
.route-enter-active,
.route-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.route-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .route-enter-active,
  .route-leave-active {
    transition: none;
  }
  .route-enter-from,
  .route-leave-to {
    opacity: 1;
    transform: none;
  }
}
</style>
