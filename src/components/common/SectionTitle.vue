<template>
  <div class="mb-8 text-center" :data-aos="aos">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
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
