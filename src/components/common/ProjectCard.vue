<template>
  <article
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: { duration: 400, delay },
    }"
    class="card overflow-hidden flex flex-col group transition hover:shadow-2xl hover:scale-[1.02] bg-zinc-900 text-zinc-100 dark:bg-white dark:text-zinc-900"
    :aria-label="`Proyecto: ${title}`"
  >
    <!-- Imagen -->
    <div class="relative w-full h-44 overflow-hidden">
      <img
        v-if="image"
        class="w-full h-full object-cover transform transition duration-500 ease-out group-hover:scale-110"
        :src="image"
        :alt="title"
      />

      <!-- Overlay con acciones -->
      <div
        class="absolute inset-0 bg-black/60 dark:bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
      >
        <a
          v-if="demo"
          :href="demo"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 rounded-lg bg-white text-sm font-medium text-zinc-900 shadow hover:bg-zinc-100 transition"
          :aria-label="`Ver demo de ${title}`"
        >
          Demo
        </a>
        <a
          v-if="repo"
          :href="repo"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2 rounded-lg bg-brand-500 text-sm font-medium text-white shadow hover:bg-brand-600 transition"
          :aria-label="`Ver código fuente de ${title}`"
        >
          Código
        </a>
      </div>
    </div>

    <!-- Contenido -->
    <div class="p-5 flex-1 flex flex-col">
      <h3
        class="text-lg font-bold mb-2 group-hover:text-brand-400 dark:group-hover:text-brand-600 transition-colors duration-300"
      >
        {{ title }}
      </h3>
      <p class="text-sm text-zinc-400 dark:text-zinc-600 flex-1 leading-relaxed">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="mt-3 flex flex-wrap gap-2">
        <span
          v-for="t in tags"
          :key="t"
          class="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 dark:bg-zinc-200 dark:text-zinc-800 dark:border-zinc-300 transition hover:scale-105"
        >
          {{ t }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  image?: string
  tags?: string[]
  demo?: string
  repo?: string
  delay?: number
}

withDefaults(defineProps<Props>(), {
  image: '',
  tags: () => [],
  demo: '',
  repo: '',
  delay: 0,
})
</script>
