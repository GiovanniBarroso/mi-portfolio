<template>
  <footer class="mt-auto border-t border-hair bg-bg-subtle">
    <div class="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
      <!-- Marca -->
      <div>
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2.5 text-sm font-bold tracking-tight"
        >
          <span
            class="grid h-8 w-8 place-items-center rounded-lg bg-accent-solid text-[13px] font-black text-accent-on"
            aria-hidden="true"
          >
            G
          </span>
          <span class="text-fg">Giovanni Barroso</span>
        </RouterLink>

        <p class="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
          Desarrollador full-stack en Sevilla. Construyo interfaces limpias, rápidas y accesibles.
        </p>

        <p class="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-ok-text">
          <span class="relative flex h-2 w-2" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-ok" />
          </span>
          Disponible para trabajar
        </p>
      </div>

      <!-- Navegación -->
      <nav aria-label="Pie de página">
        <h2 class="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle">Navegación</h2>
        <ul class="mt-4 space-y-1">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="inline-flex min-h-11 items-center text-sm text-fg-muted transition-colors duration-200 hover:text-accent-text"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Contacto -->
      <div>
        <h2 class="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle">Conectemos</h2>
        <ul class="mt-4 space-y-1">
          <li v-for="link in socialLinks" :key="link.label">
            <a
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="group inline-flex min-h-11 items-center gap-2.5 text-sm text-fg-muted transition-colors duration-200 hover:text-accent-text"
            >
              <AppIcon :name="link.icon" :size="4" />
              {{ link.label }}
              <AppIcon
                v-if="link.external"
                name="arrow-up-right"
                :size="3.5"
                class="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
              <span v-if="link.external" class="sr-only">(abre en una pestaña nueva)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-hair">
      <div
        class="shell flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left"
      >
        <p class="text-xs text-fg-subtle">
          © {{ year }} Giovanni Barroso — Vue 3, TypeScript y Tailwind CSS.
        </p>
        <a
          :href="REPO_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center gap-1.5 text-xs font-medium text-fg-subtle transition-colors duration-200 hover:text-accent-text"
        >
          <AppIcon name="code" :size="3.5" />
          Código de este sitio
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import { navLinks } from '@/data/navLinks'
import { socialLinks } from '@/data/social'

defineOptions({ name: 'AppFooter' })

const REPO_URL = 'https://github.com/GiovanniBarroso/mi-portfolio'
const year = new Date().getFullYear()
</script>
