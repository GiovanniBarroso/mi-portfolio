<template>
  <span
    class="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 hover:scale-105"
    :class="variantClass"
    :data-aos="aos"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  label: string
  aos?: string
  variant?: 'avanzado' | 'intermedio' | 'basico'
}
const props = withDefaults(defineProps<Props>(), { aos: 'zoom-in', variant: 'intermedio' })

const variantClass = computed(() => {
  switch (props.variant) {
    case 'avanzado':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-600 dark:text-emerald-700 dark:bg-emerald-100/80 dark:border-emerald-300'
    case 'basico':
      return 'bg-zinc-800 text-zinc-200 border-zinc-700 dark:bg-zinc-200 dark:text-zinc-800 dark:border-zinc-300'
    default:
      return 'bg-blue-500/15 text-blue-300 border-blue-600 dark:text-blue-700 dark:bg-blue-100/80 dark:border-blue-300'
  }
})
</script>
