<template>
  <!-- Marco de navegador decorativo para las capturas: da contexto
       ("esto es una web") y unifica capturas de proporciones distintas. -->
  <figure class="overflow-hidden rounded-2xl border border-hair bg-surface-2 shadow-lg">
    <div
      class="flex h-9 items-center gap-3 border-b border-hair bg-surface px-3.5"
      aria-hidden="true"
    >
      <span class="flex gap-1.5">
        <span class="h-2.5 w-2.5 rounded-full bg-hair-strong" />
        <span class="h-2.5 w-2.5 rounded-full bg-hair-strong" />
        <span class="h-2.5 w-2.5 rounded-full bg-hair-strong" />
      </span>
      <span
        v-if="host"
        class="mx-auto flex h-5 max-w-[60%] items-center gap-1.5 truncate rounded-md bg-surface-2 px-2.5 text-[11px] text-fg-subtle"
      >
        <AppIcon name="lock" :size="3" />
        {{ host }}
      </span>
    </div>
    <img
      :src="src"
      :alt="alt"
      width="1280"
      height="853"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
      decoding="async"
      class="block aspect-[3/2] w-full object-cover object-top"
    />
    <figcaption v-if="$slots.default" class="sr-only"><slot /></figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'

const props = defineProps<{ src: string; alt: string; url?: string | null; eager?: boolean }>()

const host = computed(() => {
  if (!props.url) return ''
  try {
    return new URL(props.url).host
  } catch {
    return ''
  }
})
</script>
