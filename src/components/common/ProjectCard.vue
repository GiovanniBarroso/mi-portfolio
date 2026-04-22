<template>
  <article
    ref="cardRef"
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay } }"
    class="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 will-change-transform cursor-pointer"
    :style="tiltStyle"
    :aria-label="`Proyecto: ${title}`"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Shimmer highlight on hover -->
    <div
      class="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      :style="shimmerStyle"
      aria-hidden="true"
    />

    <!-- Image — click navigates to demo or repo -->
    <a
      v-if="primaryUrl"
      :href="primaryUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="relative block w-full aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0"
      tabindex="-1"
      @click.stop
    >
      <img
        v-if="image"
        class="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-105"
        :src="image"
        :alt="title"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <svg
          class="h-10 w-10 text-zinc-300 dark:text-zinc-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      <!-- Private badge -->
      <span
        v-if="!demoUrl && !repoUrl && !badge"
        class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-zinc-900/70 text-zinc-300 text-[10px] font-semibold backdrop-blur-sm"
      >
        Privado
      </span>

      <!-- Live badge if has demo -->
      <span
        v-if="demoUrl && !badge"
        class="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold backdrop-blur-sm"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
        Live
      </span>

      <!-- Custom badge (overrides Live/Privado) -->
      <span
        v-if="badge"
        class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[10px] font-semibold backdrop-blur-sm"
      >
        {{ badge }}
      </span>
    </a>

    <!-- Image fallback: no link -->
    <div
      v-if="!primaryUrl"
      class="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0"
    >
      <img
        v-if="image"
        class="w-full h-full object-cover"
        :src="image"
        :alt="title"
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <svg
          class="h-10 w-10 text-zinc-300 dark:text-zinc-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <!-- Private badge -->
      <span
        v-if="!demoUrl && !repoUrl && !badge"
        class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-zinc-900/70 text-zinc-300 text-[10px] font-semibold backdrop-blur-sm"
      >
        Privado
      </span>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-5">
      <h3
        class="text-sm font-bold mb-2 leading-snug group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors"
      >
        {{ title }}
      </h3>

      <p class="text-xs leading-relaxed flex-1 text-zinc-500 dark:text-zinc-400 line-clamp-3 mb-4">
        {{ description }}
      </p>

      <!-- Tech tags -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="t in techs.slice(0, 5)"
          :key="t"
          class="px-2 py-0.5 text-[10px] rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 font-medium"
        >
          {{ t }}
        </span>
        <span
          v-if="techs.length > 5"
          class="px-2 py-0.5 text-[10px] rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-500 font-medium"
        >
          +{{ techs.length - 5 }}
        </span>
      </div>

      <!-- Action row — always visible -->
      <div
        class="flex items-center gap-2 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800"
      >
        <a
          v-if="demoUrl"
          :href="demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-500 text-white text-xs font-semibold hover:bg-brand-600 transition-colors"
          @click.stop
        >
          <svg
            class="h-3 w-3 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Demo
        </a>
        <a
          v-if="repoUrl"
          :href="repoUrl"
          target="_blank"
          rel="noopener noreferrer"
          :class="demoUrl ? 'flex-none px-3' : 'flex-1 px-3'"
          class="inline-flex items-center justify-center gap-1.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold hover:border-brand-500/50 hover:text-brand-500 dark:hover:border-brand-400/50 dark:hover:text-brand-400 transition-colors"
          @click.stop
        >
          <svg
            class="h-3.5 w-3.5 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          {{ demoUrl ? 'Código' : 'Ver código' }}
        </a>
        <span
          v-if="!demoUrl && !repoUrl"
          class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-zinc-100 dark:border-zinc-800 text-zinc-400 dark:text-zinc-600 text-xs font-medium cursor-default"
        >
          <svg
            class="h-3 w-3 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Privado
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  slug?: string
  title: string
  description: string
  image?: string
  techs?: string[]
  demoUrl?: string | null
  repoUrl?: string | null
  badge?: string
  delay?: number
}

const props = withDefaults(defineProps<Props>(), {
  image: '',
  techs: () => [],
  demoUrl: null,
  repoUrl: null,
  badge: undefined,
  delay: 0,
})

const primaryUrl = computed(() => props.demoUrl || props.repoUrl || null)

const cardRef = ref<HTMLElement | null>(null)
const tiltX = ref(0)
const tiltY = ref(0)
const mouseX = ref(0.5)
const mouseY = ref(0.5)
const isHovering = ref(false)

const tiltStyle = computed(() => ({
  transform: `perspective(900px) rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg) translateZ(0)`,
  transition: isHovering.value ? 'transform 0.08s ease-out' : 'transform 0.4s ease-out',
  boxShadow: isHovering.value
    ? `${-tiltY.value * 2}px ${tiltX.value * 2}px 30px rgba(0,0,0,0.14), 0 8px 32px rgba(0,0,0,0.07)`
    : '0 1px 3px rgba(0,0,0,0.06)',
}))

const shimmerStyle = computed(() => ({
  background: `radial-gradient(circle at ${mouseX.value * 100}% ${mouseY.value * 100}%, rgba(255,255,255,0.1) 0%, transparent 55%)`,
}))

const onMouseMove = (e: MouseEvent) => {
  if (window.innerWidth < 768 || !cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  tiltX.value = -y * 6
  tiltY.value = x * 6
  mouseX.value = (e.clientX - rect.left) / rect.width
  mouseY.value = (e.clientY - rect.top) / rect.height
  isHovering.value = true
}

const onMouseLeave = () => {
  tiltX.value = 0
  tiltY.value = 0
  isHovering.value = false
}
</script>
