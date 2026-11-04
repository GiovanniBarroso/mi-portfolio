<template>
  <div class="flex min-h-dvh flex-col bg-bg font-sans text-fg">
    <a href="#contenido" class="skip-link" @click.prevent="skipToContent">Saltar al contenido</a>

    <Navbar />

    <!-- min-h: durante el cambio de página el pie no sube a ocupar el hueco -->
    <main id="contenido" ref="mainRef" class="min-h-dvh flex-1 pt-[var(--nav-h)]" tabindex="-1">
      <RouterView v-slot="{ Component, route }">
        <Transition name="route" mode="out-in" @enter="onPageEnter">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import BackToTop from '@/components/common/BackToTop.vue'
import { notifyPageEnter } from '@/router/pageTransition'

const mainRef = ref<HTMLElement | null>(null)

// La primera navegación (carga de la página) no debe mover el foco
let initialNavigation = true
useRouter().afterEach((_to, from) => {
  initialNavigation = from.matched.length === 0
})

/**
 * Tras navegar, el foco pasa al titular de la página nueva: un lector de
 * pantalla anuncia dónde está y quien navega con teclado no tiene que
 * volver a recorrer el navbar. En la carga inicial no se mueve nada.
 */
function onPageEnter(el: Element) {
  notifyPageEnter()
  if (initialNavigation) return
  const heading = el.querySelector<HTMLElement>('h1') ?? mainRef.value
  if (!heading) return
  if (heading !== mainRef.value) heading.setAttribute('tabindex', '-1')
  heading.focus({ preventScroll: true })
}

/** El enlace de salto no debe pasar por el router (cambiaría el hash de la URL). */
function skipToContent() {
  mainRef.value?.focus()
  mainRef.value?.scrollIntoView()
}
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
