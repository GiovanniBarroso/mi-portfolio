<template>
  <div class="mb-12 text-center" :data-aos="aos">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-900">
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="mt-2 text-zinc-400 dark:text-zinc-600 max-w-2xl mx-auto leading-relaxed"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  aos?: string
}

withDefaults(defineProps<Props>(), {
  aos: 'fade-up',
})
</script>
