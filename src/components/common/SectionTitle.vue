<template>
  <div
    v-motion
    class="mb-12 text-center"
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 500, easing: 'ease-out' } }"
  >
    <!-- Título -->
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-900">
      {{ title }}
    </h2>

    <!-- Línea decorativa -->
    <div
      class="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-600"
    ></div>

    <!-- Subtítulo -->
    <p
      v-if="subtitle"
      class="mt-4 text-zinc-400 dark:text-zinc-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>
