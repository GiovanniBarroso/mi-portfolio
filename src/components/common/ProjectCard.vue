<template>
  <article
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay } }"
    :class="[
      'overflow-hidden flex flex-col group transition rounded-2xl border hover:shadow-2xl hover:-translate-y-0.5',
      isDark
        ? 'bg-white text-zinc-900 border-zinc-200'
        : 'bg-zinc-950 text-zinc-100 border-zinc-800',
    ]"
    :aria-label="`Proyecto: ${title}`"
  >
    <div class="relative w-full aspect-[16/9] overflow-hidden">
      <img
        v-if="image"
        class="w-full h-full object-cover transform transition duration-500 ease-out group-hover:scale-110"
        :src="image"
        :alt="title"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
        :class="isDark ? 'bg-white/70' : 'bg-black/60'"
      >
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 rounded-lg bg-white text-sm font-medium text-zinc-900 shadow hover:bg-zinc-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
        >
          Demo
        </a>
        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 rounded-lg bg-brand-500 text-sm font-medium text-white shadow hover:bg-brand-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
        >
          Código
        </a>
      </div>
    </div>

    <div class="p-5 flex-1 flex flex-col">
      <h3
        class="text-lg font-bold mb-2 transition-colors duration-300"
        :class="isDark ? 'group-hover:text-brand-600' : 'group-hover:text-brand-400'"
      >
        {{ title }}
      </h3>
      <p class="text-sm leading-relaxed flex-1" :class="isDark ? 'text-zinc-600' : 'text-zinc-300'">
        {{ description }}
      </p>

      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="t in techs"
          :key="t"
          class="px-2 py-1 text-xs rounded-full transition hover:scale-105 border"
          :class="
            isDark
              ? 'bg-zinc-100 text-zinc-800 border-zinc-300'
              : 'bg-zinc-800 text-zinc-100 border-zinc-700'
          "
        >
          {{ t }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'

interface Props {
  slug?: string
  title: string
  description: string
  image?: string
  techs?: string[]
  demoUrl?: string | null
  repoUrl?: string | null
  delay?: number
}
withDefaults(defineProps<Props>(), {
  image: '',
  techs: () => [],
  demoUrl: null,
  repoUrl: null,
  delay: 0,
})

const isDark = useDark()
</script>
