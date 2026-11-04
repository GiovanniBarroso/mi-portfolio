<template>
  <div class="page shell">
    <PageHeader
      eyebrow="Mi historia"
      title="Sobre mí"
      subtitle="Desarrollador full-stack con debilidad por las interfaces limpias y el código que se puede mantener seis meses después."
      as="h1"
      title-id="about-title"
    />

    <div class="mt-16 grid items-start gap-8 lg:grid-cols-[20rem_1fr]">
      <!-- ══════════════ Ficha de perfil ══════════════ -->
      <aside
        v-reveal
        class="card overflow-hidden lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)]"
        aria-labelledby="profile-name"
      >
        <div class="relative">
          <div aria-hidden="true" class="dot-grid h-24 w-full bg-surface-2" />
          <img
            :src="asset('profile.jpg')"
            alt="Retrato de Giovanni Barroso sonriendo, al aire libre"
            width="512"
            height="512"
            decoding="async"
            fetchpriority="high"
            class="absolute -bottom-12 left-6 h-28 w-28 rounded-2xl border-4 border-surface object-cover shadow-lg"
          />
        </div>

        <div class="p-6 pt-16">
          <h2 id="profile-name" class="text-lg font-bold tracking-tight text-fg">
            {{ site.name }}
          </h2>
          <p class="mt-1 text-[13px] font-medium text-fg-muted">{{ site.role }}</p>

          <AvailabilityBadge size="sm" class="mt-4" />

          <p class="mt-5 text-sm leading-relaxed text-fg-muted">
            Especializado en
            <strong class="font-semibold text-fg">Vue, React y TypeScript</strong>. Construyo
            interfaces modernas, accesibles y con buen rendimiento, y el backend que las sostiene.
          </p>

          <ul class="mt-5 flex flex-wrap gap-1.5" aria-label="Enfoque">
            <li v-for="t in about.tags" :key="t" class="tag">{{ t }}</li>
          </ul>

          <address class="mt-6 space-y-1 not-italic">
            <a
              :href="`mailto:${site.email}`"
              class="flex min-h-11 items-center gap-2.5 text-[13px] text-fg-muted transition-colors duration-200 hover:text-accent-text"
            >
              <AppIcon name="mail" :size="4" />
              <span class="truncate">{{ site.email }}</span>
            </a>
            <p class="flex min-h-11 items-center gap-2.5 text-[13px] text-fg-muted">
              <AppIcon name="location" :size="4" />
              {{ site.city }}, {{ site.country }}
            </p>
            <p class="flex min-h-11 items-center gap-2.5 text-[13px] text-fg-muted">
              <AppIcon name="briefcase" :size="4" />
              {{ site.workMode }}
            </p>
          </address>

          <div class="mt-6 flex flex-col gap-2">
            <RouterLink to="/contact" class="btn w-full">Contactar</RouterLink>
            <a
              :href="LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline w-full"
            >
              <AppIcon name="linkedin" :size="4" />
              LinkedIn
              <span class="sr-only">(abre en una pestaña nueva)</span>
            </a>
            <a
              :href="GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline w-full"
            >
              <AppIcon name="github" :size="4" />
              GitHub
              <span class="sr-only">(abre en una pestaña nueva)</span>
            </a>
          </div>
        </div>
      </aside>

      <!-- ══════════════ Contenido ══════════════ -->
      <div class="space-y-6">
        <!-- Quién soy -->
        <section v-reveal="80" class="card p-7" aria-labelledby="who-title">
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
              <strong class="font-semibold text-fg">NestJS o Supabase</strong> en el backend y,
              cuando el producto lo pide, apps nativas con
              <strong class="font-semibold text-fg">Kotlin y SwiftUI</strong>.
            </p>
            <p>
              Priorizo tres cosas por ese orden: que funcione, que sea accesible y que la siguiente
              persona pueda tocarlo sin miedo. Automatizo lo repetitivo con GitHub Actions, protejo
              cada commit con Husky y despliego con CI/CD.
            </p>
          </div>
        </section>

        <!-- Cifras -->
        <dl class="grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Cifras">
          <div
            v-for="(s, i) in stats"
            :key="s.label"
            v-reveal="stagger(i, 4)"
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
        <section v-reveal class="card p-7" aria-labelledby="process-title">
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
        <section v-reveal class="card p-7" aria-labelledby="key-title">
          <h2 id="key-title" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            Lo que he construido
          </h2>
          <ul class="mt-5 space-y-3">
            <li v-for="a in about.achievements" :key="a" class="flex items-start gap-3">
              <AppIcon
                name="check"
                :size="4"
                :stroke-width="2.5"
                class="mt-1 shrink-0 text-accent-text"
              />
              <span class="text-sm leading-relaxed text-fg-muted">{{ a }}</span>
            </li>
          </ul>
        </section>

        <!-- Herramientas -->
        <section v-reveal class="card p-7" aria-labelledby="tools-title">
          <h2 id="tools-title" class="flex items-center gap-3 text-lg font-bold text-fg">
            <span class="h-5 w-1 rounded-full bg-accent" aria-hidden="true" />
            Caja de herramientas
          </h2>
          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="tool in about.tools" :key="tool" class="tag">{{ tool }}</li>
          </ul>
          <RouterLink
            to="/skills"
            class="group mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent-text"
          >
            Ver todas las skills y dónde las he usado
            <AppIcon
              name="arrow-right"
              :size="4"
              class="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
            />
          </RouterLink>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import AvailabilityBadge from '@/components/common/AvailabilityBadge.vue'
import { useSeo } from '@/composables/useSeo'
import { stagger } from '@/composables/motion'
import { vReveal } from '@/directives/reveal'
import { aboutData as about } from '@/data/about'
import { site } from '@/data/site'
import { GITHUB_URL, LINKEDIN_URL } from '@/data/social'
import { stats } from '@/data/stats'
import { asset } from '@/utils/asset'
import { PAGES } from '@/config/seo'
import type { IconName } from '@/components/common/icons'

useSeo(PAGES.about)

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
