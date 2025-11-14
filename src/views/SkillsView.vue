<template>
  <section
    class="relative py-30 border-b border-zinc-800/50 dark:border-zinc-200/40 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-800 overflow-hidden"
    aria-labelledby="skills-title"
  >
    <!-- Gradiente decorativo inferior -->
    <div
      class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-500/20 via-transparent to-transparent pointer-events-none"
    ></div>

    <div class="container px-6 mx-auto max-w-6xl relative z-10">
      <SectionTitle
        id="skills-title"
        title="Skills"
        subtitle="Tecnologías y herramientas que uso en mi día a día"
        align="center"
      />

      <!-- Buscador -->
      <div class="mt-8 flex justify-center">
        <input
          v-model="query"
          type="search"
          placeholder="Buscar (ej. Supabase, Tailwind, Docker)…"
          class="w-full sm:w-2/3 lg:w-1/2 input"
        />
      </div>

      <!-- Grid de categorías -->
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="cat in filteredCategories" :key="cat.name" class="card p-6">
          <header
            class="flex items-center justify-between border-b border-zinc-800/50 dark:border-zinc-200/50 pb-3 mb-4"
          >
            <h3 class="text-lg font-semibold">{{ cat.name }}</h3>
            <span
              class="text-xs px-2 py-0.5 rounded-full border border-zinc-700/50 dark:border-zinc-400/60 text-zinc-400 dark:text-zinc-600"
            >
              {{ cat.items.length }} skills
            </span>
          </header>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="s in cat.items"
              :key="s"
              class="px-3 py-1 text-xs font-medium rounded-full border border-zinc-700/50 dark:border-zinc-400/50 bg-zinc-800/60 dark:bg-zinc-200/60 text-zinc-200 dark:text-zinc-800 hover:scale-105 transition"
            >
              {{ s }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import type { SkillCategory } from '@/types/portfolio'
import { skillCategories } from '@/data/skills'

const query = ref('')

const match = (s: string) => !query.value || s.toLowerCase().includes(query.value.toLowerCase())

const filteredCategories = computed<SkillCategory[]>(() =>
  skillCategories
    .map((c) => ({ ...c, items: c.items.filter(match) }))
    .filter((c) => c.items.length > 0)
)
</script>
