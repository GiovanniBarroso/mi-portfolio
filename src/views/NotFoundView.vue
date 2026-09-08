<template>
  <!-- Se descuenta el alto del navbar: con 100dvh completo la página
       arrastraba una barra de scroll de 68px sin contenido. -->
  <div
    class="flex min-h-[calc(100dvh-var(--nav-h))] flex-col items-center justify-center px-6 py-20 text-center"
  >
    <!-- La opacidad va en el hijo: @vueuse/motion anima `opacity` con
         estilos en línea y se comía cualquier opacity-* del mismo nodo,
         dejando el 404 en blanco sólido en vez de marca de agua. -->
    <div v-motion :initial="pop.initial" :enter="pop.enter" aria-hidden="true">
      <p
        class="select-none text-[clamp(6rem,26vw,12rem)] font-black leading-none tracking-tighter text-fg opacity-[0.07]"
      >
        404
      </p>
    </div>

    <div v-motion :initial="reveal.initial" :enter="reveal.enter" class="-mt-8 sm:-mt-12">
      <span
        class="grid h-14 w-14 place-items-center rounded-2xl border border-hair bg-surface text-accent-text shadow-md mx-auto"
      >
        <AppIcon name="compass" :size="6" />
      </span>

      <h1 class="mt-6 text-fluid-xl font-bold tracking-tight text-fg">Aquí no hay nada</h1>
      <p class="measure-tight mx-auto mt-3 text-fluid-sm leading-relaxed text-fg-muted">
        La página que buscas no existe o cambió de sitio. Desde aquí puedes volver al principio o ir
        directamente a los proyectos.
      </p>

      <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <RouterLink to="/" class="btn btn-lg">
          <AppIcon name="arrow-right" :size="4" />
          Ir al inicio
        </RouterLink>
        <RouterLink to="/projects" class="btn-outline btn-lg">Ver proyectos</RouterLink>
      </div>

      <nav class="mt-10" aria-label="Otras secciones">
        <ul class="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="inline-flex min-h-11 items-center rounded-lg px-3 text-[13px] font-medium text-fg-subtle transition-colors duration-200 hover:text-accent-text"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import { useSeo } from '@/composables/useSeo'
import { navLinks } from '@/data/navLinks'
import { pop, reveal } from '@/composables/motionPresets'

const seo = useSeo()
seo({
  title: '404 — Página no encontrada',
  description: 'Esta página no existe en el portfolio de Giovanni Barroso.',
})
</script>
