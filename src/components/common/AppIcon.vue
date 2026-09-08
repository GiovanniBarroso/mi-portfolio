<template>
  <svg
    class="shrink-0"
    :class="sizeClass"
    viewBox="0 0 24 24"
    :fill="brand ? 'currentColor' : 'none'"
    :stroke="brand ? undefined : 'currentColor'"
    :stroke-width="brand ? undefined : strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    :aria-hidden="label ? undefined : 'true'"
    :role="label ? 'img' : undefined"
  >
    <title v-if="label">{{ label }}</title>
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BRAND_ICONS, OUTLINE_ICONS, isBrandIcon, type IconName } from './icons'

const props = withDefaults(
  defineProps<{
    name: IconName
    /** Escala Tailwind: 3 = 12px, 4 = 16px, 5 = 20px, 6 = 24px */
    size?: 3 | 3.5 | 4 | 5 | 6 | 7 | 8
    strokeWidth?: number
    /** Si se pasa, el icono deja de ser decorativo y se anuncia. */
    label?: string
  }>(),
  { size: 4, strokeWidth: 1.75, label: undefined }
)

const SIZE_CLASSES: Record<string, string> = {
  '3': 'h-3 w-3',
  '3.5': 'h-3.5 w-3.5',
  '4': 'h-4 w-4',
  '5': 'h-5 w-5',
  '6': 'h-6 w-6',
  '7': 'h-7 w-7',
  '8': 'h-8 w-8',
}

const brand = computed(() => isBrandIcon(props.name))
const sizeClass = computed(() => SIZE_CLASSES[String(props.size)] ?? 'h-4 w-4')
const paths = computed<readonly string[]>(() =>
  isBrandIcon(props.name)
    ? [BRAND_ICONS[props.name]]
    : OUTLINE_ICONS[props.name as keyof typeof OUTLINE_ICONS]
)
</script>
