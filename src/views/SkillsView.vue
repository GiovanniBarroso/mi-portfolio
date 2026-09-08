<template>
  <div class="section-base" aria-labelledby="skills-title">
    <div class="container px-6 mx-auto max-w-6xl">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-12 text-center"
      >
        <p class="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
          Conocimientos
        </p>
        <h1 id="skills-title" class="text-3xl sm:text-5xl font-extrabold tracking-tight">Skills</h1>
        <div
          class="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
        />
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
          Tecnologías y herramientas que uso en mi día a día.
        </p>
      </div>

      <!-- Buscador -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 400, delay: 100 } }"
        class="mb-10 flex justify-center"
      >
        <div class="relative w-full sm:w-2/3 lg:w-1/2">
          <svg
            class="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            v-model="query"
            type="search"
            placeholder="Buscar skill (ej. Supabase, Docker, Vue…)"
            class="input pl-10"
            aria-label="Buscar skills"
          />
        </div>
      </div>

      <!-- Sin resultados -->
      <p
        v-if="!filteredCategories.length"
        class="py-16 text-center text-zinc-500 dark:text-zinc-400"
      >
        No se encontraron skills con "{{ query }}".
      </p>

      <!-- Grid de categorías -->
      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="(cat, ci) in filteredCategories"
          :key="cat.name"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: ci * 80 } }"
          class="card overflow-hidden hover:shadow-lg transition-all"
        >
          <!-- Accent bar top -->
          <div
            class="h-1 w-full rounded-t-2xl"
            :style="{
              background: categoryGradient[cat.name] ?? 'linear-gradient(90deg,#0ea5e9,#8b5cf6)',
            }"
          />

          <div class="p-6">
            <!-- Header -->
            <header
              class="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800"
            >
              <div class="flex items-center gap-2.5">
                <span
                  class="h-7 w-7 rounded-lg flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                  aria-hidden="true"
                >
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      :d="categoryIcon[cat.name] ?? defaultCategoryIcon"
                    />
                  </svg>
                </span>
                <h3 class="text-sm font-bold">{{ cat.name }}</h3>
              </div>
              <span
                class="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-semibold tabular-nums"
              >
                {{ cat.items.length }}
              </span>
            </header>

            <!-- Chips -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="s in cat.items"
                :key="s"
                class="px-3 py-1.5 text-[11px] font-medium rounded-lg border transition cursor-default"
                :class="
                  query && s.toLowerCase().includes(query.toLowerCase())
                    ? 'border-brand-500/60 bg-brand-500/8 text-brand-600 dark:text-brand-400'
                    : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:border-brand-500/40 hover:text-brand-500 dark:hover:border-brand-400/40 dark:hover:text-brand-400'
                "
              >
                {{ s }}
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Total -->
      <p
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1, transition: { duration: 400, delay: 300 } }"
        class="mt-10 text-center text-xs text-zinc-400 dark:text-zinc-600 font-medium"
      >
        {{ totalSkills }} tecnologías y herramientas en total
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { SkillCategory } from '@/types/portfolio'
import { skillCategories } from '@/data/skills'
import { useSeo } from '@/composables/useSeo'

const seo = useSeo()
seo({
  title: 'Skills',
  description:
    'Giovanni Barroso — Tecnologías y herramientas: Frontend, Backend, DevOps y Testing.',
})

const query = ref('')

const categoryGradient: Record<string, string> = {
  Frontend: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
  Backend: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  'Herramientas & DevOps': 'linear-gradient(90deg, #10b981, #34d399)',
  'Testing & Calidad': 'linear-gradient(90deg, #f97316, #fb923c)',
}

// path SVG (Heroicons outline, viewBox 24x24)
const categoryIcon: Record<string, string> = {
  Frontend:
    'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  Backend:
    'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  'Herramientas & DevOps':
    'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
  'Testing & Calidad':
    'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
}
const defaultCategoryIcon =
  'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'

const filteredCategories = computed<SkillCategory[]>(() => {
  const q = query.value.toLowerCase()
  if (!q) return skillCategories
  return skillCategories
    .map((c) => ({ ...c, items: c.items.filter((s) => s.toLowerCase().includes(q)) }))
    .filter((c) => c.items.length > 0)
})

const totalSkills = computed(() => skillCategories.reduce((acc, c) => acc + c.items.length, 0))
</script>
