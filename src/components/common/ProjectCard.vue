<template>
  <article
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay } }"
    class="overflow-hidden flex flex-col group transition rounded-2xl border hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer bg-zinc-950 text-zinc-100 border-zinc-800 dark:bg-white dark:text-zinc-900 dark:border-zinc-200"
    :aria-label="`Proyecto: ${title}`"
    @click="toggleOverlay"
  >
    <!-- Imagen -->
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

      <!-- Overlay -->
      <div
        v-if="demoUrl || repoUrl"
        class="absolute inset-0 flex items-center justify-center bg-black/70 dark:bg-white/80 transition-opacity duration-300"
        :class="mobileOverlayOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        @click.self="closeOverlay"
      >
        <div class="flex flex-wrap gap-3">
          <a
            v-if="demoUrl"
            :href="demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg bg-white text-xs font-semibold text-zinc-900 shadow text-center"
            @click.stop
          >
            Demo
          </a>
          <a
            v-if="repoUrl"
            :href="repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2 rounded-lg bg-brand-500 text-xs font-semibold text-white shadow text-center"
            @click.stop
          >
            Código
          </a>
        </div>
      </div>
    </div>

    <!-- Contenido -->
    <div class="p-5 flex-1 flex flex-col">
      <h3
        class="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-brand-400 dark:group-hover:text-brand-600"
      >
        {{ title }}
      </h3>

      <p class="text-sm leading-relaxed flex-1 text-zinc-300 dark:text-zinc-600">
        {{ description }}
      </p>

      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="t in techs"
          :key="t"
          class="px-2 py-1 text-xs rounded-full transition hover:scale-105 border bg-zinc-800 text-zinc-100 border-zinc-700 dark:bg-zinc-100 dark:text-zinc-800 dark:border-zinc-300"
        >
          {{ t }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const mobileOverlayOpen = ref(false)

const toggleOverlay = () => {
  mobileOverlayOpen.value = !mobileOverlayOpen.value
}

const closeOverlay = () => {
  mobileOverlayOpen.value = false
}
</script>
