<template>
  <p
    v-if="site.availability.open"
    class="inline-flex items-center gap-2 rounded-full border border-ok/40 bg-ok/10 font-semibold text-ok-text"
    :class="size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-1.5 text-[13px]'"
  >
    <span class="relative flex h-2 w-2 shrink-0" aria-hidden="true">
      <span
        v-if="pulse"
        class="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 motion-safe:animate-ping"
      />
      <span class="relative inline-flex h-2 w-2 rounded-full bg-ok" />
    </span>
    {{ site.availability.label }}
  </p>
</template>

<script setup lang="ts">
import { site } from '@/data/site'

/**
 * "Disponible para trabajar". Aparece en el hero, el perfil, contacto y el
 * pie; con `site.availability.open = false` desaparece de todos a la vez.
 */
withDefaults(defineProps<{ size?: 'sm' | 'md'; pulse?: boolean }>(), {
  size: 'md',
  pulse: false,
})
</script>
