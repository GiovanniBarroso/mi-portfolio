<template>
  <div class="section-base" aria-labelledby="about-title">
    <div class="container mx-auto max-w-6xl px-6">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-16 text-center"
      >
        <p class="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
          Mi historia
        </p>
        <h1 id="about-title" class="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Sobre mí
        </h1>
        <div
          class="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
        />
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base leading-relaxed">
          Desarrollador fullstack con pasión por las interfaces limpias y el código que escala.
        </p>
      </div>

      <!-- Grid principal: sidebar + contenido -->
      <div class="grid md:grid-cols-3 gap-8 items-start">
        <!-- ── Sidebar de perfil ─────────────────────────── -->
        <aside
          v-motion
          :initial="slideInLeft.initial"
          :enter="slideInLeft.enter"
          class="md:sticky md:top-24"
          aria-label="Perfil de Giovanni Barroso"
        >
          <div class="card p-8 hover:shadow-xl transition-all">
            <!-- Avatar -->
            <div class="mb-5">
              <img
                :src="about.profileImage"
                alt="Foto de Giovanni Barroso"
                class="w-28 h-28 rounded-2xl object-cover border-2 border-brand-500/30 shadow-lg shadow-brand-500/10"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2 class="text-xl font-bold mb-1">Giovanni Barroso</h2>
            <div class="flex items-center flex-wrap gap-2 mb-4">
              <p
                class="text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider"
              >
                Full-Stack Developer
              </p>
              <span
                class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-[10px] font-semibold"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
                Disponible
              </span>
            </div>

            <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
              Especializado en
              <strong class="text-zinc-800 dark:text-zinc-200">Vue, React, TypeScript</strong> y
              <strong class="text-zinc-800 dark:text-zinc-200">Tailwind CSS</strong>. Construyo
              interfaces modernas, accesibles y con alto rendimiento.
            </p>

            <div class="flex flex-wrap gap-1.5 mb-5">
              <span v-for="t in about.tags" :key="t" class="tag text-[11px]">{{ t }}</span>
            </div>

            <address class="not-italic space-y-2 text-xs">
              <a
                class="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-brand-500 transition"
                href="mailto:giovanni.baralv@gmail.com"
              >
                <svg
                  class="h-3.5 w-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                giovanni.baralv@gmail.com
              </a>
              <span class="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                <svg
                  class="h-3.5 w-3.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Sevilla, España
              </span>
            </address>

            <div class="mt-6 flex flex-col gap-2">
              <RouterLink to="/contact" class="btn w-full justify-center text-xs py-2.5">
                Contactar
              </RouterLink>
              <a
                href="https://github.com/GiovanniBarroso"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-outline w-full justify-center text-xs py-2.5"
              >
                Ver GitHub
              </a>
            </div>
          </div>
        </aside>

        <!-- ── Contenido principal ───────────────────────── -->
        <div
          v-motion
          :initial="slideInRight.initial"
          :enter="slideInRight.enter"
          class="md:col-span-2 space-y-6"
        >
          <!-- Quién soy -->
          <div class="card p-7">
            <h3 class="text-lg font-bold mb-3 flex items-center gap-2.5">
              <span
                class="h-5 w-1 rounded-full bg-gradient-to-b from-brand-500 to-purple-500 shrink-0"
              ></span>
              Quién soy
            </h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Soy un desarrollador fullstack apasionado por construir productos digitales completos,
              desde la base de datos hasta la interfaz. Me especializo en el ecosistema
              <strong class="text-zinc-800 dark:text-zinc-200">TypeScript</strong>, usando
              <strong class="text-zinc-800 dark:text-zinc-200">Vue 3</strong> y
              <strong class="text-zinc-800 dark:text-zinc-200">React</strong> en el frontend, y
              <strong class="text-zinc-800 dark:text-zinc-200">NestJS / Supabase</strong> en el
              backend.
            </p>
            <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Priorizo la accesibilidad, el rendimiento y el código mantenible. Automatizo pipelines
              con GitHub Actions, uso Husky para guardar la calidad en cada commit y despliego en
              Vercel con CI/CD.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid sm:grid-cols-3 gap-4" aria-label="Métricas">
            <div
              v-for="(s, i) in about.stats"
              :key="s.label"
              v-motion
              :initial="{ opacity: 0, y: 12 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { duration: 350, delay: withStagger(i, 90).delay },
              }"
              class="card p-5 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <p class="text-3xl font-extrabold text-brand-500 tabular-nums">{{ s.value }}</p>
              <p
                class="mt-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
              >
                {{ s.label }}
              </p>
            </div>
          </div>

          <!-- Cómo trabajo (proceso) -->
          <div class="card p-7">
            <h3 class="text-lg font-bold mb-5 flex items-center gap-2.5">
              <span
                class="h-5 w-1 rounded-full bg-gradient-to-b from-brand-500 to-purple-500 shrink-0"
              ></span>
              Cómo trabajo
            </h3>
            <div class="grid sm:grid-cols-2 gap-3">
              <div
                v-for="(step, i) in process"
                :key="step.title"
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 300, delay: i * 70 },
                }"
                class="process-step"
              >
                <div class="flex items-center gap-3">
                  <span
                    class="shrink-0 h-8 w-8 rounded-xl flex items-center justify-center text-sm font-black"
                    :class="step.color"
                  >
                    {{ step.icon }}
                  </span>
                  <h4 class="text-sm font-bold">{{ step.title }}</h4>
                </div>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Proyectos destacados -->
          <div class="card p-7">
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2.5">
              <span
                class="h-5 w-1 rounded-full bg-gradient-to-b from-brand-500 to-purple-500 shrink-0"
              ></span>
              Proyectos clave
            </h3>
            <ul class="space-y-2.5" role="list">
              <li
                v-for="(a, i) in about.achievements"
                :key="i"
                v-motion
                :initial="{ opacity: 0, x: -10 }"
                :enter="{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 280, delay: withStagger(i, 80).delay },
                }"
                class="flex items-start gap-3"
              >
                <span
                  class="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-400 to-purple-500"
                ></span>
                <span class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{{
                  a
                }}</span>
              </li>
            </ul>
          </div>

          <!-- Tooling -->
          <div class="card p-7">
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2.5">
              <span
                class="h-5 w-1 rounded-full bg-gradient-to-b from-brand-500 to-purple-500 shrink-0"
              ></span>
              Tooling
            </h3>
            <div class="flex flex-wrap gap-2" aria-label="Herramientas">
              <span
                v-for="(tool, i) in about.tools"
                :key="tool"
                v-motion
                :initial="{ opacity: 0, scale: 0.88 }"
                :enter="{ opacity: 1, scale: 1, transition: { duration: 220, delay: i * 25 } }"
                class="px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:border-brand-500/50 hover:text-brand-500 dark:hover:border-brand-400/50 dark:hover:text-brand-400 transition cursor-default"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo'
import { slideInLeft, slideInRight, withStagger } from '@/composables/motionPresets'
import { aboutData as about } from '@/data/about'

const seo = useSeo()
seo({
  title: 'Sobre mí',
  description:
    'Giovanni Barroso — Desarrollador fullstack (Vue, React, TypeScript, Tailwind). Metodología, proyectos y herramientas.',
})

const process = [
  {
    icon: '🔍',
    title: 'Análisis',
    desc: 'Entiendo el problema, el contexto y los requisitos antes de escribir una línea.',
    color: 'bg-brand-500/10 text-brand-500',
  },
  {
    icon: '🏗️',
    title: 'Arquitectura',
    desc: 'Diseño la estructura de componentes, rutas y estado con tipado estricto.',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: '⚡',
    title: 'Implementación',
    desc: 'Código limpio, accesible y con CI/CD desde el primer commit.',
    color: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    icon: '🚀',
    title: 'Despliegue',
    desc: 'Vercel, GitHub Actions y monitorización con Umami Analytics.',
    color: 'bg-orange-500/10 text-orange-500',
  },
]
</script>
