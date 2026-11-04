<template>
  <div class="page shell">
    <PageHeader
      eyebrow="Conocimientos"
      title="Skills"
      subtitle="Las tecnologías con las que trabajo, agrupadas por dónde encajan en un proyecto. Las marcadas enlazan a los proyectos donde las he usado."
      as="h1"
      title-id="skills-title"
    />

    <!-- ── Buscador ── -->
    <div class="mx-auto mt-12 w-full max-w-md" role="search">
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
          spellcheck="false"
          enterkeyhint="search"
          class="input px-12 [&::-webkit-search-cancel-button]:hidden"
          aria-describedby="skill-results"
          @keydown.esc="clear"
        />
        <button
          v-if="query"
          type="button"
          class="absolute right-1.5 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-lg text-fg-subtle transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
          aria-label="Borrar la búsqueda"
          @click="clear"
        >
          <AppIcon name="close" :size="4" :stroke-width="2" />
        </button>
      </div>

      <p
        id="skill-results"
        class="mt-3 text-center text-[13px] text-fg-muted"
        role="status"
        aria-live="polite"
      >
        <template v-if="query">
          {{ matchCount }} {{ matchCount === 1 ? 'resultado' : 'resultados' }} para «{{ query }}»
        </template>
        <template v-else>
          {{ totalSkills }} tecnologías en {{ skillCategories.length }} áreas ·
          {{ provenCount }} usadas en proyectos de este portfolio
        </template>
      </p>
    </div>

    <!-- ── Leyenda ── -->
    <p
      class="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-fg-subtle"
    >
      <span class="inline-flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        Usada en proyectos (número de proyectos)
      </span>
      <span class="inline-flex items-center gap-2">
        <span class="h-2 w-2 rounded-full border border-hair-strong" aria-hidden="true" />
        Experiencia fuera de este portfolio
      </span>
    </p>

    <!-- ── Categorías ── -->
    <div v-if="visibleCategories.length" class="mt-10 grid gap-5 md:grid-cols-2">
      <section
        v-for="(cat, ci) in visibleCategories"
        :key="cat.id"
        v-reveal="stagger(ci, 2)"
        class="card overflow-hidden"
        :class="lastOdd(ci) && 'md:col-span-2'"
        :aria-labelledby="`cat-${cat.id}`"
      >
        <div class="h-1 w-full" :class="TONES[cat.id].bar" aria-hidden="true" />

        <div class="p-6">
          <header class="flex items-center justify-between gap-3 border-b border-hair pb-4">
            <h2 :id="`cat-${cat.id}`" class="flex items-center gap-3 text-sm font-bold text-fg">
              <span
                class="grid h-9 w-9 place-items-center rounded-xl border border-hair bg-surface-2"
                :class="TONES[cat.id].icon"
                aria-hidden="true"
              >
                <AppIcon :name="cat.icon" :size="5" />
              </span>
              {{ cat.name }}
            </h2>
            <span class="tag tabular-nums" :aria-label="`${cat.items.length} tecnologías`">
              {{ cat.items.length }}
            </span>
          </header>

          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="s in cat.items" :key="s">
              <RouterLink
                v-if="usage(s)"
                :to="{ path: '/projects', query: { tech: techFamily(s) } }"
                class="skill skill--proven"
                :class="isMatch(s) && 'skill--match'"
                :title="`Ver ${usage(s)} ${usage(s) === 1 ? 'proyecto' : 'proyectos'} con ${techFamily(s)}`"
              >
                {{ s }}
                <span class="skill__count" aria-hidden="true">{{ usage(s) }}</span>
                <span class="sr-only">
                  , usada en {{ usage(s) }} {{ usage(s) === 1 ? 'proyecto' : 'proyectos' }}
                </span>
              </RouterLink>
              <span v-else class="skill" :class="isMatch(s) && 'skill--match'">{{ s }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <!-- ── Sin resultados ── -->
    <div v-else class="card-muted mx-auto mt-12 max-w-md px-6 py-16 text-center">
      <AppIcon name="search" :size="8" :stroke-width="1.25" class="mx-auto text-fg-subtle" />
      <p class="mt-4 font-semibold text-fg">Sin coincidencias</p>
      <p class="mt-1 text-sm text-fg-muted">
        No encuentro nada para «{{ query }}». Puede que lo llame de otra forma.
      </p>
      <button type="button" class="btn-outline btn-sm mt-6" @click="clear">
        Ver todas las skills
      </button>
    </div>

    <!-- ── Nota de cierre ── -->
    <p class="measure mx-auto mt-14 text-center text-[13px] leading-relaxed text-fg-subtle">
      Esta lista no es un examen: son herramientas que he usado de verdad. Si necesitas algo que no
      está aquí, aprenderlo es parte del trabajo.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { skillCategories } from '@/data/skills'
import type { SkillCategoryId } from '@/types/portfolio'
import { techUsage } from '@/utils/project'
import { techFamily } from '@/utils/tech'
import { useSeo } from '@/composables/useSeo'
import { stagger } from '@/composables/motion'
import { vReveal } from '@/directives/reveal'
import { PAGES } from '@/config/seo'

useSeo(PAGES.skills)

const query = ref('')
const clear = () => (query.value = '')

/**
 * Color por área, como par claro/oscuro: un único hex no puede tener
 * contraste suficiente sobre #f4f4f5 y sobre #18181b a la vez.
 * Tipado por id: si se añade un área, TypeScript exige su color.
 */
const TONES: Record<SkillCategoryId, { bar: string; icon: string }> = {
  frontend: {
    bar: 'bg-gradient-to-r from-sky-500 to-sky-400',
    icon: 'text-sky-600 dark:text-sky-400',
  },
  backend: {
    bar: 'bg-gradient-to-r from-violet-500 to-violet-400',
    icon: 'text-violet-600 dark:text-violet-400',
  },
  mobile: {
    bar: 'bg-gradient-to-r from-rose-500 to-rose-400',
    icon: 'text-rose-600 dark:text-rose-400',
  },
  devops: {
    bar: 'bg-gradient-to-r from-emerald-500 to-emerald-400',
    icon: 'text-emerald-600 dark:text-emerald-400',
  },
  testing: {
    bar: 'bg-gradient-to-r from-orange-500 to-orange-400',
    icon: 'text-orange-600 dark:text-orange-400',
  },
}

const usageMap = techUsage()
const usage = (skill: string) => usageMap.get(techFamily(skill)) ?? 0

const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
const isMatch = (skill: string) =>
  query.value.length > 0 && normalize(skill).includes(normalize(query.value))

/**
 * Al buscar se filtran los elementos dentro de cada área y se ocultan las
 * áreas que quedan vacías, para que la rejilla no deje huecos.
 */
const visibleCategories = computed(() => {
  if (!query.value) return skillCategories
  return skillCategories
    .map((c) => ({ ...c, items: c.items.filter(isMatch) }))
    .filter((c) => c.items.length > 0)
})

const matchCount = computed(() =>
  visibleCategories.value.reduce((acc, c) => acc + c.items.length, 0)
)
/** Con un número impar de áreas, la última ocupa el ancho entero */
const lastOdd = (i: number) =>
  visibleCategories.value.length % 2 === 1 && i === visibleCategories.value.length - 1

const allSkills = skillCategories.flatMap((c) => c.items)
const totalSkills = allSkills.length
const provenCount = allSkills.filter((s) => usage(s) > 0).length
</script>

<style scoped>
.skill {
  display: inline-flex;
  min-height: 2rem;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: var(--surface-2);
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--fg-muted);
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;
}
.skill--proven {
  border-color: color-mix(in oklab, var(--accent) 35%, var(--border));
  color: var(--fg);
}
.skill--proven:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent-text);
}
.skill__count {
  display: inline-grid;
  min-width: 1.125rem;
  height: 1.125rem;
  place-items: center;
  border-radius: 999px;
  background: var(--accent-soft);
  padding-inline: 0.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--accent-text);
  font-variant-numeric: tabular-nums;
}
.skill--match {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--accent-text);
}
</style>
