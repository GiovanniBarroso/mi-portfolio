<template>
  <div
    v-reveal
    class="relative overflow-hidden rounded-3xl border border-hair bg-surface px-6 py-16 text-center sm:px-12"
  >
    <div aria-hidden="true" class="dot-grid pointer-events-none absolute inset-0 opacity-40" />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,var(--accent-soft),transparent)]"
    />

    <div class="relative">
      <p class="eyebrow justify-center">
        <span aria-hidden="true" class="h-px w-6 bg-current opacity-60" />
        {{ eyebrow }}
      </p>
      <h2 :id="titleId" class="mt-4 text-fluid-xl font-bold tracking-tight text-fg">
        {{ title }}
      </h2>
      <p class="measure mx-auto mt-4 text-fluid-sm leading-relaxed text-fg-muted">
        <slot>
          Si tienes un producto en mente o buscas a alguien que se encargue del front y del back,
          escríbeme. Respondo en {{ site.responseTime }}.
        </slot>
      </p>
      <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <RouterLink to="/contact" class="btn btn-lg">
          <AppIcon name="mail" :size="4" />
          Escríbeme
        </RouterLink>
        <RouterLink v-if="secondary" :to="secondary.to" class="btn-outline btn-lg">
          {{ secondary.label }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import { site } from '@/data/site'
import { vReveal } from '@/directives/reveal'

/** Bloque de llamada a la acción que cierra Home, About y cada proyecto. */
withDefaults(
  defineProps<{
    title?: string
    eyebrow?: string
    titleId?: string
    secondary?: { to: string; label: string } | null
  }>(),
  {
    title: 'Abierto a nuevos proyectos',
    eyebrow: '¿Hablamos?',
    titleId: undefined,
    secondary: () => ({ to: '/about', label: 'Conóceme mejor' }),
  }
)
</script>
