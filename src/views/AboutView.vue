<template>
  <section
    class="py-30 border-b border-zinc-800/50 dark:border-zinc-200/40 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-800 transition-colors"
    aria-labelledby="about-title"
  >
    <SectionTitle
      id="about-title"
      title="Sobre mí"
      subtitle="Conoce un poco sobre mi enfoque, proyectos y herramientas"
    />

    <div class="container mx-auto max-w-6xl px-6 mt-10">
      <div class="grid md:grid-cols-3 gap-8 items-start">
        <!-- Perfil -->
        <article
          v-motion
          :initial="slideInLeft.initial"
          :enter="slideInLeft.enter"
          class="card p-8 hover:shadow-xl hover:-translate-y-0.5"
          aria-label="Perfil de Giovanni Barroso"
        >
          <img
            :src="about.profileImage"
            alt="Foto de Giovanni Barroso"
            class="w-50 h-50 rounded-2xl object-cover mb-6 border-4 border-brand-500 shadow-lg"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
          <h3 class="text-3xl font-bold mb-2">Giovanni Barroso</h3>

          <p class="text-zinc-300 dark:text-zinc-700 leading-relaxed mb-4">
            Desarrollador <strong>fullstack</strong> especializado en
            <strong>Vue, React, TypeScript y Tailwind CSS</strong>. Me centro en construir
            interfaces modernas, accesibles y con alto rendimiento. Me gusta optimizar arquitectura
            y automatizar procesos para proyectos mantenibles y profesionales.
          </p>

          <ul class="flex flex-wrap gap-2 mt-2" role="list" aria-label="Etiquetas de perfil">
            <li v-for="t in about.tags" :key="t" class="tag">{{ t }}</li>
          </ul>

          <address class="not-italic mt-4 text-sm text-zinc-400 dark:text-zinc-600">
            (Sevilla) ·
            <a class="underline hover:no-underline" href="mailto:giovanni.baralv@gmail.com">
              giovanni.baralv@gmail.com
            </a>
          </address>
        </article>

        <!-- Detalles y metodología -->
        <article
          v-motion
          :initial="slideInRight.initial"
          :enter="slideInRight.enter"
          class="md:col-span-2 card p-8 hover:shadow-xl hover:-translate-y-0.5"
        >
          <h4 class="text-2xl font-semibold mb-3">Metodología</h4>
          <p class="text-zinc-300 dark:text-zinc-700 leading-relaxed">
            Trabajo con <strong>componentes bien definidos</strong>, tipado estricto con TypeScript
            y utilidades Tailwind. Priorizo accesibilidad, calidad de código y una arquitectura
            escalable que facilite el mantenimiento a largo plazo.
          </p>

          <!-- Stats -->
          <div class="grid sm:grid-cols-3 gap-4 mt-6" aria-label="Métricas">
            <div
              v-for="(s, i) in about.stats"
              :key="s.box"
              v-motion
              :initial="{ opacity: 0, y: 10 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 350, delay: withStagger(i, 90).delay },
              }"
              class="rounded-xl border border-zinc-800/50 dark:border-zinc-200/50 p-4 text-center transition bg-zinc-950/40 dark:bg-white/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <p class="text-3xl font-bold text-brand-400 dark:text-brand-600">{{ s.value }}</p>
              <p class="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                {{ s.box }}
              </p>
            </div>
          </div>

          <!-- Achievements -->
          <h4 class="mt-8 text-2xl font-semibold">Proyectos destacados</h4>
          <ul class="mt-3 space-y-2" role="list">
            <li
              v-for="(a, i) in about.achievements"
              :key="i"
              v-motion
              :initial="{ opacity: 0, x: -8 }"
              :enter="{
                opacity: 1,
                x: 0,
                transition: { duration: 280, delay: withStagger(i, 80).delay },
              }"
              class="flex items-start gap-3"
            >
              <span
                class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-400 to-purple-500"
              ></span>
              <span class="text-zinc-300 dark:text-zinc-700">{{ a }}</span>
            </li>
          </ul>

          <!-- Tooling -->
          <h4 class="mt-8 text-2xl font-semibold">Tooling</h4>
          <div class="mt-3 flex flex-wrap gap-2" aria-label="Herramientas">
            <span
              v-for="tool in about.tools"
              :key="tool"
              class="px-3 py-1 text-xs rounded-full transition hover:scale-105 bg-zinc-800 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800"
            >
              {{ tool }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useSeo } from '@/composables/useSeo'
import { slideInLeft, slideInRight, withStagger } from '@/composables/motionPresets'
import { aboutData as about } from '@/data/about'

const seo = useSeo()
seo({
  title: 'Sobre mí',
  description:
    'Giovanni Barroso — Desarrollador fullstack (Vue, React, TypeScript, Tailwind). Metodología, proyectos y herramientas.',
})
</script>
