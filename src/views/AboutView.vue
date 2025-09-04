<template>
  <section class="container py-20" aria-labelledby="about-title">
    <SectionTitle title="Sobre mí" subtitle="Conoce un poco sobre mi experiencia y metodología" />

    <div class="mt-10 grid md:grid-cols-3 gap-8 items-start">
      <!-- Perfil -->
      <article
        v-motion
        :initial="slideInLeft.initial"
        :enter="slideInLeft.enter"
        class="card p-8 transition hover:scale-[1.02] hover:shadow-xl"
      >
        <img
          alt="Avatar de [Tu Nombre]"
          class="w-32 h-32 rounded-2xl object-cover mb-6 border-4 border-yellow-300"
        />
        <h3 id="about-title" class="text-3xl font-bold mb-2">[Tu Nombre]</h3>
        <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          Desarrollador web especializado en frontend y experiencia de usuario. Apasionado por
          interfaces limpias, performance y código mantenible.
        </p>
        <ul class="flex flex-wrap gap-2 mt-2">
          <li v-for="t in tags" :key="t" class="tag">{{ t }}</li>
        </ul>
      </article>

      <!-- Detalles y metodología -->
      <article
        v-motion
        :initial="slideInRight.initial"
        :enter="slideInRight.enter"
        class="md:col-span-2 card p-8 transition hover:scale-[1.01] hover:shadow-xl"
      >
        <h4 class="text-2xl font-semibold mb-3">Metodología</h4>
        <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Trabajo con componentes bien definidos, TypeScript para tipado estricto y Tailwind CSS
          para estilos eficientes. Priorizo accesibilidad, testing y arquitectura escalable.
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
              transition: { duration: 300, delay: withStagger(i, 80).delay },
            }"
            class="rounded-xl border border-zinc-200/60 dark:border-zinc-800 p-4 text-center"
          >
            <p class="text-3xl font-bold">{{ s.v }}</p>
            <p class="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {{ s.k }}
            </p>
          </div>
        </div>

        <h4 class="mt-8 text-2xl font-semibold">Logros destacados</h4>
        <ul class="mt-3 space-y-2">
          <li
            v-for="(a, i) in achievements"
            :key="i"
            v-motion
            class="flex items-start gap-3"
            :initial="{ opacity: 0, x: -8 }"
            :enter="{
              opacity: 1,
              x: 0,
              transition: { duration: 250, delay: withStagger(i, 70).delay },
            }"
          >
            <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-500"></span>
            <span class="text-zinc-700 dark:text-zinc-300">{{ a }}</span>
          </li>
        </ul>

        <h4 class="mt-8 text-2xl font-semibold">Tooling</h4>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="tool in tools"
            :key="tool"
            class="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800"
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
    'Conoce mi experiencia, metodología de trabajo y logros destacados en desarrollo web.',
})

const tags = ['Gandía', 'Remoto', 'Freelance']

const stats = [
  { k: 'Años exp.', v: '5+' },
  { k: 'Proyectos', v: '20+' },
  { k: 'Stack', v: 'Vue • TS • Tailwind' },
]

const achievements = [
  'SPA con autenticación JWT y pagos integrados.',
  'Integración CI/CD con despliegues automatizados.',
  'Diseño responsive y accesible siguiendo WCAG AA.',
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
