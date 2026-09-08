<template>
  <div class="page shell" aria-labelledby="about-title">
    <PageHeader
      eyebrow="Mi historia"
      title="Sobre mí"
      subtitle="Desarrollador full-stack con debilidad por las interfaces limpias y el código que se puede mantener seis meses después."
      as="h1"
      title-id="about-title"
      class="mx-auto"
    />

    <div class="mt-16 grid items-start gap-8 lg:grid-cols-[20rem_1fr]">
      <!-- ══════════════ Ficha de perfil ══════════════ -->
      <aside
        v-motion
        :initial="slideInLeft.initial"
        :enter="slideInLeft.enter"
        class="card overflow-hidden lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)]"
        aria-label="Perfil"
      >
        <div class="relative">
          <div aria-hidden="true" class="dot-grid h-20 w-full bg-surface-2 opacity-60" />
          <img
            :src="about.profileImage"
            alt="Retrato de Giovanni Barroso"
            width="112"
            height="112"
            loading="lazy"
            decoding="async"
            class="absolute -bottom-10 left-6 h-24 w-24 rounded-2xl border-4 border-surface object-cover shadow-lg"
          />
        </div>

        <div class="p-6 pt-14">
          <h2 class="text-lg font-bold tracking-tight text-fg">Giovanni Barroso</h2>
          <p class="mt-1 text-[13px] font-medium text-fg-muted">Desarrollador Full-Stack</p>

          <p
            class="mt-4 inline-flex items-center gap-2 rounded-full border border-ok/40 bg-ok/10 px-2.5 py-1 text-[11px] font-semibold text-ok-text"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
            Disponible para trabajar
          </p>

          <p class="mt-5 text-sm leading-relaxed text-fg-muted">
            Especializado en
            <strong class="font-semibold text-fg">Vue, React y TypeScript</strong>. Construyo
            interfaces modernas, accesibles y con buen rendimiento.
          </p>

          <ul class="mt-5 flex flex-wrap gap-1.5">
            <li v-for="t in about.tags" :key="t" class="tag">{{ t }}</li>
          </ul>

          <address class="mt-6 space-y-1 not-italic">
            <a
              :href="`mailto:${EMAIL}`"
              class="flex min-h-11 items-center gap-2.5 text-[13px] text-fg-muted transition-colors duration-200 hover:text-accent-text"
            >
              <AppIcon name="mail" :size="4" />
              <span class="truncate">{{ EMAIL }}</span>
            </a>
            <p class="flex min-h-11 items-center gap-2.5 text-[13px] text-fg-muted">
              <AppIcon name="location" :size="4" />
              Sevilla, España
            </p>
            <p class="flex min-h-11 items-center gap-2.5 text-[13px] text-fg-muted">
              <AppIcon name="clock" :size="4" />
              Remoto o híbrido
            </p>
          </address>

          <div class="mt-6 flex flex-col gap-2">
            <RouterLink to="/contact" class="btn w-full">Contactar</RouterLink>
            <a
              href="https://github.com/GiovanniBarroso"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline w-full"
            >
              <AppIcon name="github" :size="4" />
              Ver GitHub
            </a>
          </div>
        </div>
      </aside>

      <!-- ══════════════ Contenido ══════════════ -->
      <div class="space-y-6">
        <!-- Quién soy -->
        <section
          v-motion
          :initial="reveal.initial"
          :enter="reveal.enter"
          class="card p-7"
          aria-labelledby="who-title"
        >
          <h2 id="who-title" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            Quién soy
          </h2>
          <div class="mt-4 space-y-3 text-sm leading-relaxed text-fg-muted">
            <p>
              Desarrollador full-stack. Me interesa el producto completo: la base de datos, la API
              y, sobre todo, la interfaz con la que alguien va a convivir. Trabajo el ecosistema
              <strong class="font-semibold text-fg">TypeScript</strong>, con
              <strong class="font-semibold text-fg">Vue 3</strong> y
              <strong class="font-semibold text-fg">React</strong> en el frontend y
              <strong class="font-semibold text-fg">NestJS o Supabase</strong> en el backend.
            </p>
            <p>
              Priorizo tres cosas por ese orden: que funcione, que sea accesible y que la siguiente
              persona pueda tocarlo sin miedo. Automatizo lo repetitivo con GitHub Actions, protejo
              cada commit con Husky y despliego con CI/CD.
            </p>
          </div>
        </section>

        <!-- Cifras -->
        <dl class="grid gap-4 sm:grid-cols-3" aria-label="Cifras">
          <div
            v-for="(s, i) in about.stats"
            :key="s.label"
            v-motion
            :initial="fadeUp.initial"
            :visible-once="staggered(i, 3)"
            class="card flex flex-col gap-1 p-5"
          >
            <dt class="order-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-fg-subtle">
              {{ s.label }}
            </dt>
            <dd class="order-1 text-fluid-lg font-bold tabular-nums leading-tight text-fg">
              {{ s.value }}
            </dd>
          </div>
        </dl>

        <!-- Proceso, como línea de tiempo numerada -->
        <section
          v-motion
          :initial="reveal.initial"
          :visible-once="reveal.visibleOnce"
          class="card p-7"
          aria-labelledby="process-title"
        >
          <h2 id="process-title" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            Cómo trabajo
          </h2>

          <ol class="mt-6 space-y-0">
            <li
              v-for="(step, i) in process"
              :key="step.title"
              class="relative flex gap-4 pb-7 last:pb-0"
            >
              <!-- Hilo que une los pasos; se corta en el último -->
              <span
                v-if="i < process.length - 1"
                aria-hidden="true"
                class="absolute left-[1.375rem] top-11 bottom-0 w-px bg-hair"
              />
              <span
                class="relative z-base grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-surface-2 text-accent-text"
              >
                <AppIcon :name="step.icon" :size="5" />
              </span>
              <div class="pt-1.5">
                <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle">
                  Paso {{ i + 1 }}
                </p>
                <h3 class="mt-1 text-sm font-semibold text-fg">{{ step.title }}</h3>
                <p class="mt-1.5 text-[13px] leading-relaxed text-fg-muted">{{ step.desc }}</p>
              </div>
            </li>
          </ol>
        </section>

        <!-- Logros -->
        <section
          v-motion
          :initial="reveal.initial"
          :visible-once="reveal.visibleOnce"
          class="card p-7"
          aria-labelledby="key-title"
        >
          <h2 id="key-title" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            Proyectos clave
          </h2>
          <ul class="mt-5 space-y-3">
            <li v-for="a in about.achievements" :key="a" class="flex items-start gap-3">
              <AppIcon
                name="check"
                :size="4"
                :stroke-width="2.5"
                class="mt-1 shrink-0 text-accent"
              />
              <span class="text-sm leading-relaxed text-fg-muted">{{ a }}</span>
            </li>
          </ul>
        </section>

        <!-- Herramientas -->
        <section
          v-motion
          :initial="reveal.initial"
          :visible-once="reveal.visibleOnce"
          class="card p-7"
          aria-labelledby="tools-title"
        >
          <h2 id="tools-title" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            Caja de herramientas
          </h2>
          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="tool in about.tools" :key="tool" class="tag">{{ tool }}</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useSeo } from '@/composables/useSeo'
import { fadeUp, reveal, slideInLeft, staggered } from '@/composables/motionPresets'
import { aboutData as about } from '@/data/about'
import { EMAIL } from '@/data/social'
import type { IconName } from '@/components/common/icons'

const seo = useSeo()
seo({
  title: 'Sobre mí',
  description:
    'Giovanni Barroso — desarrollador full-stack (Vue, React, TypeScript, NestJS). Metodología de trabajo, proyectos y herramientas.',
})

const process: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'search',
    title: 'Entender el problema',
    desc: 'Contexto, usuarios y restricciones antes de escribir una sola línea. Casi siempre el requisito escrito no es el problema real.',
  },
  {
    icon: 'grid',
    title: 'Diseñar la estructura',
    desc: 'Modelo de datos, rutas, componentes y estado, con tipado estricto desde el principio para que el compilador atrape lo que yo no.',
  },
  {
    icon: 'bolt',
    title: 'Implementar',
    desc: 'Código legible y accesible, integración continua desde el primer commit y revisiones pequeñas en vez de un pull request gigante.',
  },
  {
    icon: 'rocket',
    title: 'Desplegar y medir',
    desc: 'Vercel, GitHub Actions y analítica sin cookies. Un despliegue que nadie mide es una suposición, no un resultado.',
  },
]
</script>
