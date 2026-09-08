<template>
  <div class="page shell" aria-labelledby="skills-title">
    <PageHeader
      eyebrow="Conocimientos"
      title="Skills"
      subtitle="Las tecnologías con las que trabajo de forma habitual, agrupadas por dónde encajan en un proyecto."
      as="h1"
      title-id="skills-title"
      class="mx-auto"
    />

    <!-- ── Buscador ── -->
    <div class="mx-auto mt-12 w-full max-w-md">
      <label for="skill-search" class="sr-only">Buscar entre las tecnologías</label>
      <div class="relative">
        <AppIcon
          name="search"
          :size="4"
          class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-fg-subtle"
        />
        <input
          id="skill-search"
          v-model.trim="query"
          type="search"
          placeholder="Buscar: Supabase, Docker, Vue…"
          autocomplete="off"
          class="input px-12"
          aria-describedby="skill-results"
        />
        <button
          v-if="query"
          type="button"
          class="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-fg-subtle transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
          aria-label="Borrar la búsqueda"
          @click="clear"
        >
          <AppIcon name="close" :size="4" :stroke-width="2" />
        </button>
      </div>

      <p id="skill-results" class="mt-3 text-center text-[13px] text-fg-muted" role="status">
        <template v-if="query">
          {{ matchCount }} {{ matchCount === 1 ? 'resultado' : 'resultados' }} para “{{ query }}”
        </template>
        <template v-else> {{ totalSkills }} tecnologías en {{ categories.length }} áreas </template>
      </p>
    </div>

    <!-- ── Categorías ── -->
    <div v-if="visibleCategories.length" class="mt-12 grid gap-5 md:grid-cols-2">
      <article
        v-for="(cat, ci) in visibleCategories"
        :key="cat.name"
        v-motion
        :initial="reveal.initial"
        :visible-once="staggered(ci, 2)"
        class="card overflow-hidden"
      >
        <div class="h-1 w-full" :style="{ background: cat.accent }" aria-hidden="true" />

        <div class="p-6">
          <header class="flex items-center justify-between gap-3 border-b border-hair pb-4">
            <h2 class="flex items-center gap-3 text-sm font-bold text-fg">
              <span
                class="grid h-9 w-9 place-items-center rounded-xl border border-hair bg-surface-2"
                :class="cat.tone"
              >
                <AppIcon :name="cat.icon" :size="5" />
              </span>
              {{ cat.name }}
            </h2>
            <span class="tag tabular-nums">{{ cat.items.length }}</span>
          </header>

          <ul class="mt-5 flex flex-wrap gap-2">
            <li
              v-for="s in cat.items"
              :key="s"
              class="rounded-lg border px-2.5 py-1.5 text-[12px] font-medium transition-colors duration-200"
              :class="
                isMatch(s)
                  ? 'border-accent bg-accent/10 text-accent-text'
                  : 'border-hair bg-surface-2 text-fg-muted'
              "
            >
              {{ s }}
            </li>
          </ul>
        </div>
      </article>
    </div>

    <!-- ── Sin resultados ── -->
    <div v-else class="card-muted mx-auto mt-12 max-w-md px-6 py-16 text-center">
      <AppIcon name="search" :size="8" :stroke-width="1.25" class="mx-auto text-fg-subtle" />
      <p class="mt-4 font-semibold text-fg">Sin coincidencias</p>
      <p class="mt-1 text-sm text-fg-muted">
        No encuentro nada para “{{ query }}”. Puede que lo llame de otra forma.
      </p>
      <button type="button" class="btn-outline btn-sm mt-6" @click="clear">
        Ver todas las skills
      </button>
    </div>

    <!-- ── Nota de cierre ── -->
    <p class="measure mx-auto mt-14 text-center text-[13px] leading-relaxed text-fg-subtle">
      Esta lista no es un examen: son las herramientas que he usado en proyectos reales. Si
      necesitas algo que no está aquí, casi siempre es cuestión de una semana.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { skillCategories } from '@/data/skills'
import { useSeo } from '@/composables/useSeo'
import { reveal, staggered } from '@/composables/motionPresets'
import type { IconName } from '@/components/common/icons'

const seo = useSeo()
seo({
  title: 'Skills',
  description:
    'Tecnologías de Giovanni Barroso: Vue, React, TypeScript, NestJS, Supabase, Docker, CI/CD y testing.',
})

const query = ref('')
const clear = () => (query.value = '')

/**
 * Icono y color por área. Sin esto son cuatro tarjetas idénticas en gris.
 * El tono se declara como par claro/oscuro: un único hex no puede tener
 * contraste suficiente sobre #f4f4f5 y sobre #18181b a la vez.
 */
const META: Record<string, { icon: IconName; accent: string; tone: string }> = {
  Frontend: {
    icon: 'sparkles',
    accent: 'linear-gradient(90deg,#0ea5e9,#38bdf8)',
    tone: 'text-sky-600 dark:text-sky-400',
  },
  Backend: {
    icon: 'server',
    accent: 'linear-gradient(90deg,#8b5cf6,#a78bfa)',
    tone: 'text-violet-600 dark:text-violet-400',
  },
  'Herramientas & DevOps': {
    icon: 'sliders',
    accent: 'linear-gradient(90deg,#10b981,#34d399)',
    tone: 'text-emerald-600 dark:text-emerald-400',
  },
  'Testing & Calidad': {
    icon: 'beaker',
    accent: 'linear-gradient(90deg,#f97316,#fb923c)',
    tone: 'text-orange-600 dark:text-orange-400',
  },
}

const DEFAULT_META = {
  icon: 'layers' as IconName,
  accent: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)',
  tone: 'text-accent-text',
}

const categories = computed(() =>
  skillCategories.map((c) => ({ ...c, ...(META[c.name] ?? DEFAULT_META) }))
)

const isMatch = (skill: string) =>
  query.value.length > 0 && skill.toLowerCase().includes(query.value.toLowerCase())

/**
 * Al buscar se filtran los elementos dentro de cada área y se ocultan las
 * áreas que quedan vacías, para que la rejilla no deje huecos.
 */
const visibleCategories = computed(() => {
  const q = query.value.toLowerCase()
  if (!q) return categories.value
  return categories.value
    .map((c) => ({ ...c, items: c.items.filter((s) => s.toLowerCase().includes(q)) }))
    .filter((c) => c.items.length > 0)
})

const matchCount = computed(() =>
  visibleCategories.value.reduce((acc, c) => acc + c.items.length, 0)
)
const totalSkills = computed(() => skillCategories.reduce((acc, c) => acc + c.items.length, 0))
</script>
