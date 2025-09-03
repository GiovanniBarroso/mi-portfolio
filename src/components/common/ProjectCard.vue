<template>
  <article class="card overflow-hidden" :data-aos="aos">
    <img v-if="image" class="w-full h-44 object-cover" :src="image" :alt="title" />
    <div class="p-5">
      <h3 class="text-xl font-bold">{{ title }}</h3>
      <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {{ description }}
      </p>
      <div class="mt-3 flex flex-wrap gap-2">
        <span v-for="t in tags" :key="t" class="tag">{{ t }}</span>
      </div>
      <div class="mt-5 flex gap-3">
        <a v-if="demo" :href="demo" target="_blank" rel="noreferrer" class="btn btn-primary"
          >Demo</a
        >
        <a v-if="repo" :href="repo" target="_blank" rel="noreferrer" class="btn btn-outline"
          >Código</a
        >
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
  aos?: string
}

const props = withDefaults(defineProps<Props>(), {
  image: '',
  tags: () => [],
  demo: '',
  repo: '',
  aos: 'fade-up',
})
</script>
