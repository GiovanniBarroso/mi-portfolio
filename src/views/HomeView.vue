<template>
  <div>
    <!-- ══════════════════════════ HERO ══════════════════════════ -->
    <LampHero>
      <div v-reveal class="hero-badge">
        <AvailabilityBadge pulse />
      </div>

      <p
        v-reveal="60"
        class="hero-kicker mt-7 text-[11px] font-bold uppercase tracking-[0.22em] text-fg-subtle"
      >
        {{ site.role }} · {{ site.city }}
      </p>

      <!-- El titular y la descripción se pintan sin esperar a ninguna
           animación: son el contenido principal (LCP) de la portada. -->
      <h1
        class="hero-title mt-3 text-center text-fluid-3xl font-bold leading-[1.05] tracking-[-0.03em] text-fg"
      >
        Hola, soy
        <span class="relative whitespace-nowrap text-accent-text">
          {{ site.firstName }}
          <!-- Subrayado dibujado a mano: da carácter sin recurrir a un
               degradado de texto, que pierde contraste en modo claro. -->
          <svg
            class="absolute -bottom-1 left-0 h-[0.35em] w-full text-accent"
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              class="hero-underline"
              d="M1 8.5C22 3.5 47 2.5 99 6"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              opacity="0.55"
              pathLength="1"
            />
          </svg>
        </span>
      </h1>

      <p
        v-reveal="180"
        class="hero-words mt-7 flex flex-wrap items-baseline justify-center gap-x-2 text-fluid-base text-fg-muted"
      >
        <span>Especializado en</span>
        <HeroWords :items="heroWords" />
      </p>

      <p
        class="hero-desc measure-tight mt-4 text-center text-fluid-sm leading-relaxed text-fg-muted"
      >
        Diseño y construyo productos completos, de la base de datos a una interfaz rápida y
        accesible, en la web y en el móvil. Ya&nbsp;hay&nbsp;{{ counts.inProduction }}&nbsp;en
        producción.
      </p>

      <div
        v-reveal="300"
        class="hero-cta mt-9 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
      >
        <RouterLink to="/projects" class="btn btn-lg">
          Ver proyectos
          <AppIcon name="arrow-right" :size="4" :stroke-width="2.25" />
        </RouterLink>
        <RouterLink to="/contact" class="btn-outline btn-lg">
          <AppIcon name="mail" :size="4" />
          Contactar
        </RouterLink>
      </div>

      <div v-reveal.fade="380" class="hero-social mt-8">
        <SocialLinks variant="icons" />
      </div>
    </LampHero>

    <!-- ══════════════════════ MÉTRICAS ══════════════════════ -->
    <section class="border-y border-hair bg-bg-subtle" aria-labelledby="stats-title">
      <h2 id="stats-title" class="sr-only">Resumen en cifras</h2>
      <div class="shell py-10">
        <dl class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            v-reveal="stagger(i, 4)"
            class="card flex flex-col items-center gap-2 px-4 py-6 text-center"
          >
            <span
              class="order-1 grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent-text"
              aria-hidden="true"
            >
              <AppIcon :name="stat.icon" :size="4" />
            </span>
            <!-- dt antes que dd en el DOM (lo exige la lista de definición);
                 el orden visual se invierte con `order` para que la cifra
                 quede arriba y la etiqueta debajo. -->
            <dt
              class="order-3 text-[11px] font-semibold uppercase leading-snug tracking-[0.1em] text-fg-subtle"
            >
              {{ stat.label }}
            </dt>
            <dd class="order-2 text-fluid-lg font-bold leading-none text-fg">
              <CountUp :value="stat.value" />
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ══════════════════ PROYECTOS DESTACADOS ══════════════════ -->
    <section class="section shell" aria-labelledby="featured-title">
      <div class="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <PageHeader
          eyebrow="Portafolio"
          title="Proyectos destacados"
          subtitle="Dos productos en producción y un proyecto de fin de grado hecho en equipo."
          align="left"
          title-id="featured-title"
        />
        <RouterLink
          to="/projects"
          class="group inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-accent-text"
        >
          Ver los {{ counts.projects }} proyectos
          <AppIcon
            name="arrow-right"
            :size="4"
            class="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
          />
        </RouterLink>
      </div>

      <ul class="space-y-6">
        <li v-for="(p, i) in featuredProjects" :key="p.slug" v-reveal>
          <ProjectFeature :project="p" :index="i" :reverse="i % 2 === 1" />
        </li>
      </ul>
    </section>

    <!-- ═════════════════════ QUÉ APORTO ═════════════════════ -->
    <section class="section border-t border-hair bg-bg-subtle" aria-labelledby="services-title">
      <div class="shell">
        <PageHeader
          eyebrow="Qué aporto"
          title="De la idea al producto desplegado"
          subtitle="No entrego maquetas: entrego software funcionando, medido y fácil de mantener."
          title-id="services-title"
        />

        <ul class="mt-14 grid gap-5 md:grid-cols-3">
          <li
            v-for="(s, i) in services"
            :key="s.title"
            v-reveal="stagger(i)"
            class="card group relative overflow-hidden p-7"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-xl border border-hair bg-surface-2 text-accent-text transition-colors duration-200 group-hover:border-accent group-hover:bg-accent/10"
              aria-hidden="true"
            >
              <AppIcon :name="s.icon" :size="5" />
            </span>
            <h3 class="mt-5 text-base font-semibold text-fg">{{ s.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-fg-muted">{{ s.desc }}</p>
            <ul class="mt-5 space-y-2">
              <li
                v-for="point in s.points"
                :key="point"
                class="flex items-start gap-2 text-[13px] text-fg-muted"
              >
                <AppIcon
                  name="check"
                  :size="3.5"
                  :stroke-width="2.5"
                  class="mt-1 text-accent-text"
                />
                {{ point }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

    <!-- ═══════════════════════ STACK ═══════════════════════ -->
    <section class="section overflow-hidden" aria-labelledby="stack-title">
      <div class="shell">
        <PageHeader
          eyebrow="Stack"
          title="Tecnologías que uso a diario"
          subtitle="Las que más uso. En Skills está cada una, con los proyectos donde aparece."
          title-id="stack-title"
        />
      </div>

      <TechMarquee :rows="techRows" class="mt-12" />

      <div class="shell mt-8 text-center">
        <RouterLink to="/skills" class="btn-outline">
          Ver todas las skills
          <AppIcon name="arrow-right" :size="4" />
        </RouterLink>
      </div>
    </section>

    <!-- ════════════════════ LLAMADA FINAL ════════════════════ -->
    <section class="section shell pt-0" aria-labelledby="cta-title">
      <CtaPanel title-id="cta-title" />
    </section>
  </div>
</template>

<script setup lang="ts">
import LampHero from '@/components/layout/LampHero.vue'
import ProjectFeature from '@/components/common/ProjectFeature.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import HeroWords from '@/components/common/HeroWords.vue'
import CountUp from '@/components/common/CountUp.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'
import AvailabilityBadge from '@/components/common/AvailabilityBadge.vue'
import TechMarquee from '@/components/common/TechMarquee.vue'
import CtaPanel from '@/components/common/CtaPanel.vue'
import { heroWords } from '@/data/hero'
import { site } from '@/data/site'
import { counts, stats } from '@/data/stats'
import { featuredProjects } from '@/utils/project'
import { useSeo } from '@/composables/useSeo'
import { stagger } from '@/composables/motion'
import { vReveal } from '@/directives/reveal'
import { PAGES } from '@/config/seo'
import type { IconName } from '@/components/common/icons'

useSeo(PAGES.home)

const services: { title: string; desc: string; icon: IconName; points: string[] }[] = [
  {
    title: 'Interfaz de producto',
    desc: 'Front-end tipado, accesible y rápido, no una plantilla adaptada.',
    icon: 'sparkles',
    points: ['Vue 3 y React 19 con TypeScript', 'Diseño responsive de verdad', 'WCAG AA y teclado'],
  },
  {
    title: 'Backend y datos',
    desc: 'APIs y modelos de datos pensados para crecer sin reescribirse.',
    icon: 'server',
    points: [
      'NestJS, Prisma y Supabase',
      'PostgreSQL y autenticación',
      'Pagos con Stripe y webhooks',
    ],
  },
  {
    title: 'Entrega y calidad',
    desc: 'Lo que construyo llega a producción con red de seguridad.',
    icon: 'shield',
    points: [
      'CI/CD en GitHub Actions',
      'Tests sobre rutas críticas',
      'Monitorización y Lighthouse',
    ],
  },
]

const techRows = [
  [
    'TypeScript',
    'Vue 3',
    'React 19',
    'Next.js',
    'Tailwind CSS',
    'Vite',
    'Supabase',
    'PostgreSQL',
    'NestJS',
    'Prisma',
    'Stripe',
  ],
  [
    'Docker',
    'GitHub Actions',
    'Vercel',
    'PWA',
    'Pinia',
    'Kotlin',
    'SwiftUI',
    'Vitest',
    'ESLint',
    'Sentry',
    'Laravel',
    'Node.js',
    'Umami',
  ],
] as const
</script>

<style scoped>
/* El subrayado del nombre se dibuja al cargar */
.hero-underline {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: draw 0.9s 0.5s var(--ease-out) both;
}
@keyframes draw {
  from {
    stroke-dashoffset: 1;
  }
}

/*
 * Móvil apaisado. El titular y los huecos del hero se miden en vw, y en
 * apaisado el ancho es grande mientras el alto se queda en ~375px: el
 * resultado era un h1 enorme que empujaba los botones fuera de pantalla.
 * Aquí la escala pasa a depender de la altura, que es la dimensión escasa.
 */
@media (max-height: 32rem) {
  .hero-title {
    font-size: clamp(1.75rem, 8.5vh, 2.75rem);
    margin-top: 0.5rem;
  }
  .hero-kicker {
    margin-top: 1rem;
  }
  .hero-words {
    margin-top: 1rem;
    font-size: 0.9375rem;
  }
  .hero-desc {
    margin-top: 0.5rem;
  }
  .hero-cta {
    margin-top: 1.25rem;
  }
  .hero-social {
    margin-top: 1rem;
  }
}
</style>
