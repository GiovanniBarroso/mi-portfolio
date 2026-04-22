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
                <span class="text-xl" aria-hidden="true">{{ categoryIcon[cat.name] ?? '🔧' }}</span>
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

const categoryIcon: Record<string, string> = {
  Frontend: '🖥️',
  Backend: '⚙️',
  'Herramientas & DevOps': '🛠️',
  'Testing & Calidad': '🧪',
}

const filteredCategories = computed<SkillCategory[]>(() => {
  const q = query.value.toLowerCase()
  if (!q) return skillCategories
  return skillCategories
    .map((c) => ({ ...c, items: c.items.filter((s) => s.toLowerCase().includes(q)) }))
    .filter((c) => c.items.length > 0)
})

const totalSkills = computed(() => skillCategories.reduce((acc, c) => acc + c.items.length, 0))
</script>
