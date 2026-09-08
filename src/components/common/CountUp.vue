<template>
  <span ref="el" class="tabular-nums">{{ display }}</span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Anima un valor tipo "15+" o "20+" desde 0 cuando entra en viewport.
 * Con prefers-reduced-motion muestra el valor final directamente.
 */
const props = withDefaults(defineProps<{ value: string; durationMs?: number }>(), {
  durationMs: 1200,
})

const el = ref<HTMLElement | null>(null)
const current = ref(0)
const done = ref(false)

const parsed = computed(() => {
  const match = props.value.match(/^(\D*)(\d+)(.*)$/)
  if (!match) return null
  return { prefix: match[1], target: Number(match[2]), suffix: match[3] }
})

const display = computed(() => {
  if (!parsed.value || done.value) return props.value
  return `${parsed.value.prefix}${current.value}${parsed.value.suffix}`
})

let observer: IntersectionObserver | null = null
let rafId = 0

const animate = () => {
  const target = parsed.value!.target
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / props.durationMs, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    current.value = Math.round(eased * target)
    if (t < 1) rafId = requestAnimationFrame(tick)
    else done.value = true
  }
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!parsed.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    done.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        observer?.disconnect()
        animate()
      }
    },
    { threshold: 0.4 }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
  cancelAnimationFrame(rafId)
})
</script>
