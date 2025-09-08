<template>
  <section
    class="py-20 border-b border-zinc-800/50 dark:border-zinc-200/40 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-800 transition-colors duration-300"
    aria-labelledby="about-title"
  >
    <SectionTitle
      id="about-title"
      title="Sobre mí"
      subtitle="Conoce un poco sobre mi experiencia y metodología"
    />

    <div class="mt-10 grid md:grid-cols-3 gap-8 items-start">
      <!-- Perfil -->
      <article
        v-motion
        :initial="slideInLeft.initial"
        :enter="slideInLeft.enter"
        class="card p-8 transition hover:scale-[1.02] hover:shadow-xl bg-zinc-900/60 dark:bg-zinc-100/60"
      >
        <img
          alt="Foto de Giovanni Barroso"
          class="w-32 h-32 rounded-2xl object-cover mb-6 border-4 border-brand-500 shadow-lg"
        />
        <h3 class="text-3xl font-bold mb-2">Giovanni Barroso</h3>
        <p class="text-zinc-300 dark:text-zinc-700 leading-relaxed mb-4">
          Desarrollador web frontend especializado en
          <strong>Vue, TypeScript y Tailwind</strong>. Me apasiona diseñar interfaces limpias,
          rápidas y accesibles, cuidando la experiencia de usuario y manteniendo un código claro y
          escalable.
        </p>
        <ul class="flex flex-wrap gap-2 mt-2" role="list">
          <li
            v-for="t in tags"
            :key="t"
            class="tag bg-brand-500/10 text-brand-400 dark:bg-brand-600/10 dark:text-brand-600"
          >
            {{ t }}
          </li>
        </ul>
      </article>

      <!-- Detalles y metodología -->
      <article
        v-motion
        :initial="slideInRight.initial"
        :enter="slideInRight.enter"
        class="md:col-span-2 card p-8 transition hover:scale-[1.01] hover:shadow-xl bg-zinc-900/60 dark:bg-zinc-100/60"
      >
        <h4 class="text-2xl font-semibold mb-3">Metodología</h4>
        <p class="text-zinc-300 dark:text-zinc-700 leading-relaxed">
          Trabajo con <strong>componentes bien definidos</strong>, tipado estricto con TypeScript y
          estilos utilitarios con Tailwind CSS. Priorizo accesibilidad, testing y una arquitectura
          escalable que facilite el mantenimiento a largo plazo.
        </p>

        <!-- Stats -->
        <div class="grid sm:grid-cols-3 gap-4 mt-6">
          <div
            v-for="(s, i) in stats"
            :key="s.k"
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 350, delay: withStagger(i, 90).delay },
            }"
            class="rounded-xl border border-zinc-700 dark:border-zinc-300 p-4 text-center transition hover:scale-[1.03] hover:shadow-md bg-zinc-950/40 dark:bg-white/40"
          >
            <p class="text-3xl font-bold text-brand-400 dark:text-brand-600">{{ s.v }}</p>
            <p class="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
              {{ s.k }}
            </p>
          </div>
        </div>

        <!-- Achievements -->
        <h4 class="mt-8 text-2xl font-semibold">Logros destacados</h4>
        <ul class="mt-3 space-y-2" role="list">
          <li
            v-for="(a, i) in achievements"
            :key="i"
            v-motion
            class="flex items-start gap-3"
            :initial="{ opacity: 0, x: -8 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: { duration: 280, delay: withStagger(i, 80).delay },
            }"
          >
            <span
              class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-400 to-purple-500"
            ></span>
            <span class="text-zinc-300 dark:text-zinc-700">{{ a }}</span>
          </li>
        </ul>

        <!-- Tools -->
        <h4 class="mt-8 text-2xl font-semibold">Tooling</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tool in tools"
            :key="tool"
            class="px-3 py-1 text-xs rounded-full transition hover:scale-105 bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800"
          >
            {{ tool }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useSeo } from '@/composables/useSeo'
import { slideInLeft, slideInRight, withStagger } from '@/composables/motionPresets'

const seo = useSeo()
seo({
  title: 'Sobre mí',
  description:
    'Giovanni Barroso — Desarrollador frontend especializado en Vue, TypeScript y Tailwind. Conoce mi experiencia, metodología y logros destacados.',
})

const tags = ['Gandía', 'Remoto', 'Freelance']

const stats = [
  { k: 'Años exp.', v: '5+' },
  { k: 'Proyectos', v: '20+' },
  { k: 'Stack', v: 'Vue • TS • Tailwind' },
]

const achievements = [
  'Desarrollo de SPA con autenticación JWT y pagos integrados.',
  'Integración de pipelines CI/CD con despliegues automatizados.',
  'Diseño responsive y accesible cumpliendo con estándares WCAG AA.',
]

const tools = [
  'Vue',
  'TypeScript',
  'Tailwind',
  'Pinia',
  'Vite',
  'Vitest',
  'ESLint',
  'Prettier',
  'Husky',
  'PWA',
]
</script>
