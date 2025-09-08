<template>
  <span
    class="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 dark:bg-zinc-200 dark:text-zinc-800 dark:border-zinc-300 transition-all duration-300 hover:scale-105 hover:border-brand-500"
    :data-aos="aos"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  label: string
  aos?: string
}
withDefaults(defineProps<Props>(), { aos: 'zoom-in' })
</script>
