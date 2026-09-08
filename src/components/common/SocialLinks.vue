<template>
  <ul
    class="flex flex-wrap items-center"
    :class="variant === 'icons' ? 'gap-2' : 'gap-x-1 gap-y-2'"
  >
    <li v-for="link in socialLinks" :key="link.label">
      <a
        :href="link.href"
        :target="link.external ? '_blank' : undefined"
        :rel="link.external ? 'noopener noreferrer' : undefined"
        :aria-label="`${link.label}${link.external ? ' (abre en una pestaña nueva)' : ''}`"
        :class="
          variant === 'icons'
            ? 'grid h-11 w-11 place-items-center rounded-xl border border-hair bg-surface-2 text-fg-muted transition-colors duration-200 hover:border-accent hover:bg-accent/10 hover:text-accent-text'
            : 'inline-flex min-h-11 items-center gap-2 rounded-lg px-2.5 text-[13px] font-medium text-fg-muted transition-colors duration-200 hover:text-accent-text'
        "
      >
        <AppIcon :name="link.icon" :size="variant === 'icons' ? 5 : 4" />
        <span v-if="variant === 'inline'">{{ link.label }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import { socialLinks } from '@/data/social'

withDefaults(defineProps<{ variant?: 'icons' | 'inline' }>(), { variant: 'icons' })
</script>
