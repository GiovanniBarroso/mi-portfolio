<template>
  <div
    v-motion
    class="mb-12"
    :class="[align === 'center' ? 'text-center' : 'text-left', $attrs.class]"
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 500, easing: 'ease-out' } }"
  >
    <slot name="label">
      <p v-if="label" class="text-sm font-medium text-brand-500 uppercase tracking-widest mb-2">
        {{ label }}
      </p>
    </slot>

    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
      {{ title }}
    </h2>

    <div
      class="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-600"
      :class="align === 'center' ? 'mx-auto' : ''"
    ></div>

    <p
      v-if="subtitle"
      class="mt-4 text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed text-base md:text-lg"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
interface Props {
  title: string
  subtitle?: string
  label?: string
  align?: 'center' | 'left'
}
withDefaults(defineProps<Props>(), { align: 'center' })
</script>
