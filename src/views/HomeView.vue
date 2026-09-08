<template>
  <div>
    <!-- ══════════════════════════ HERO ══════════════════════════ -->
    <LampHero>
      <p
        v-motion
        :initial="fadeUp.initial"
        :enter="fadeUp.enter"
        class="hero-badge inline-flex items-center gap-2 rounded-full border border-ok/40 bg-ok/10 px-3.5 py-1.5 text-[13px] font-semibold text-ok-text"
      >
        <span class="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span class="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60" />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-ok" />
        </span>
        Disponible para trabajar
      </p>

      <p
        v-motion
        :initial="fadeUp.initial"
        :enter="{ ...fadeUp.enter, transition: { duration: 350, delay: 60 } }"
        class="hero-kicker mt-7 text-[11px] font-bold uppercase tracking-[0.22em] text-fg-subtle"
      >
        Desarrollador Full-Stack · Sevilla
      </p>

      <h1
        v-motion
        :initial="reveal.initial"
        :enter="{ ...reveal.enter, transition: { duration: 500, delay: 100 } }"
        class="hero-title mt-3 text-center text-fluid-3xl font-bold leading-[1.05] tracking-[-0.03em] text-fg"
      >
        Hola, soy
        <span class="relative whitespace-nowrap text-accent-text">
          Giovanni
          <!-- Subrayado dibujado a mano: da carácter sin recurrir a un
               degradado de texto, que pierde contraste en modo claro. -->
          <svg
            class="absolute -bottom-1 left-0 h-[0.35em] w-full text-accent"
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M1 8.5C22 3.5 47 2.5 99 6"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              opacity="0.55"
            />
          </svg>
        </span>
      </h1>

      <p
        v-motion
        :initial="fadeUp.initial"
        :enter="{ ...fadeUp.enter, transition: { duration: 350, delay: 180 } }"
        class="hero-words mt-7 flex flex-wrap items-baseline justify-center gap-x-2 text-fluid-base text-fg-muted"
      >
        <span>Especializado en</span>
        <HeroWords :items="heroWords" />
      </p>

      <p
        v-motion
        :initial="fadeUp.initial"
        :enter="{ ...fadeUp.enter, transition: { duration: 350, delay: 240 } }"
        class="hero-desc measure-tight mt-4 text-center text-fluid-sm leading-relaxed text-fg-muted"
      >
        Diseño y construyo productos web completos: de la base de datos a una interfaz rápida y
        accesible.
      </p>

      <div
        v-motion
        :initial="fadeUp.initial"
        :enter="{ ...fadeUp.enter, transition: { duration: 350, delay: 300 } }"
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

      <div
        v-motion
        :initial="fadeIn.initial"
        :enter="{ ...fadeIn.enter, transition: { duration: 350, delay: 380 } }"
        class="hero-social mt-8"
      >
        <SocialLinks variant="icons" />
      </div>
    </LampHero>

    <!-- ══════════════════════ MÉTRICAS ══════════════════════ -->
    <section class="border-y border-hair bg-bg-subtle" aria-labelledby="stats-title">
      <h2 id="stats-title" class="sr-only">Resumen en cifras</h2>
      <div class="shell py-10">
        <dl class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <div
            v-for="(stat, i) in quickStats"
            :key="stat.label"
            v-motion
            :initial="fadeUp.initial"
            :visible-once="staggered(i, 4)"
            class="card flex flex-col items-center gap-2 px-4 py-6 text-center"
          >
            <span
              class="order-1 grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent-text"
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
            <dd class="order-2 text-fluid-lg font-bold tabular-nums leading-none text-fg">
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
          subtitle="Tres productos que están en producción o listos para desplegarse."
          align="left"
          title-id="featured-title"
        />
        <RouterLink
          to="/projects"
          class="group inline-flex min-h-11 shrink-0 items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-accent-text"
        >
          Ver los {{ projects.length }}
          <AppIcon
            name="arrow-right"
            :size="4"
            class="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </RouterLink>
      </div>

      <ul class="grid gap-5 sm:grid-cols-3 lg:grid-cols-3">
        <li
          v-for="(p, i) in featured"
          :key="p.slug"
          v-motion
          :initial="reveal.initial"
          :visible-once="staggered(i, 3)"
        >
          <ProjectCard v-bind="p" />
        </li>
      </ul>
    </section>

    <!-- ═════════════════════ QUÉ APORTO ═════════════════════ -->
    <section class="section border-t border-hair bg-bg-subtle" aria-labelledby="services-title">
      <div class="shell">
        <PageHeader
          eyebrow="Cómo trabajo"
          title="De la idea al producto desplegado"
          subtitle="No entrego maquetas: entrego software funcionando, medido y mantenible."
          title-id="services-title"
          class="mx-auto"
        />

        <ul class="mt-14 grid gap-5 md:grid-cols-3">
          <li
            v-for="(s, i) in services"
            :key="s.title"
            v-motion
            :initial="reveal.initial"
            :visible-once="staggered(i, 3)"
            class="card group relative overflow-hidden p-7"
          >
            <span
              class="grid h-11 w-11 place-items-center rounded-xl border border-hair bg-surface-2 text-accent-text transition-colors duration-200 group-hover:border-accent group-hover:bg-accent/10"
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
                <AppIcon name="check" :size="3.5" :stroke-width="2.5" class="mt-1 text-accent" />
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
        <PageHeader eyebrow="Stack" title="Tecnologías que uso a diario" title-id="stack-title" />
      </div>

      <div class="mt-12 flex flex-col gap-3">
        <div v-for="(row, r) in techRows" :key="r" class="mask-fade-x overflow-hidden">
          <ul
            class="flex w-max gap-3 pause-on-hover"
            :class="r % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'"
            :aria-hidden="r > 0 ? 'true' : undefined"
          >
            <!-- La lista se duplica para que el bucle no tenga costura;
                 la clave incluye el índice porque los nombres se repiten. -->
            <li
              v-for="(tech, i) in [...row, ...row]"
              :key="`${r}-${i}-${tech}`"
              class="tech-chip shrink-0 select-none rounded-xl border border-hair bg-surface px-4 py-2.5 text-sm font-medium text-fg-muted"
            >
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>

      <div class="shell mt-12 text-center">
        <RouterLink to="/skills" class="btn-outline">
          Ver todas las skills
          <AppIcon name="arrow-right" :size="4" />
        </RouterLink>
      </div>
    </section>

    <!-- ════════════════════ LLAMADA FINAL ════════════════════ -->
    <section class="section pt-0 shell">
      <div
        v-motion
        :initial="reveal.initial"
        :visible-once="reveal.visibleOnce"
        class="relative overflow-hidden rounded-3xl border border-hair bg-surface px-6 py-16 text-center sm:px-12"
      >
        <div aria-hidden="true" class="dot-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,var(--accent-soft),transparent)]"
        />

        <div class="relative">
          <p class="eyebrow justify-center">
            <span aria-hidden="true" class="h-px w-6 bg-current opacity-60" />
            ¿Hablamos?
          </p>
          <h2 class="mt-4 text-fluid-xl font-bold tracking-tight text-fg">
            Abierto a nuevos proyectos
          </h2>
          <p class="measure mx-auto mt-4 text-fluid-sm leading-relaxed text-fg-muted">
            Si tienes un producto en mente o buscas a alguien que se encargue del front y del back,
            escríbeme. Respondo en menos de 48 horas.
          </p>
          <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <RouterLink to="/contact" class="btn btn-lg">
              <AppIcon name="mail" :size="4" />
              Escríbeme
            </RouterLink>
            <RouterLink to="/about" class="btn-outline btn-lg">Conóceme mejor</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LampHero from '@/components/layout/LampHero.vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import PageHeader from '@/components/common/PageHeader.vue'
import HeroWords from '@/components/common/HeroWords.vue'
import CountUp from '@/components/common/CountUp.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'
import { projects, FEATURED_SLUGS } from '@/data/projects'
import { heroWords } from '@/data/hero'
import { useSeo } from '@/composables/useSeo'
import { fadeIn, fadeUp, reveal, staggered } from '@/composables/motionPresets'
import type { IconName } from '@/components/common/icons'

const seo = useSeo()
seo({
  description:
    'Giovanni Barroso — desarrollador full-stack en Sevilla. Vue, React, TypeScript y Node. Interfaces limpias, rápidas y accesibles.',
})

const featured = computed(() =>
  FEATURED_SLUGS.map(({ slug, badge }) => {
    const project = projects.find((p) => p.slug === slug)!
    return badge ? { ...project, badge } : project
  })
)

const quickStats: { label: string; value: string; icon: IconName }[] = [
  { label: 'Proyectos reales', value: '9', icon: 'folder' },
  { label: 'Repos públicos', value: '12', icon: 'github' },
  { label: 'Años de práctica', value: '2+', icon: 'clock' },
  { label: 'Tecnologías', value: '20+', icon: 'layers' },
]

const services: { title: string; desc: string; icon: IconName; points: string[] }[] = [
  {
    title: 'Interfaz de producto',
    desc: 'Front-end tipado, accesible y rápido, no una plantilla adaptada.',
    icon: 'sparkles',
    points: ['Vue 3 y React 19 con TypeScript', 'Diseño responsive real', 'WCAG AA y teclado'],
  },
  {
    title: 'Backend y datos',
    desc: 'APIs y modelos de datos pensados para crecer sin reescribirse.',
    icon: 'server',
    points: ['NestJS, Prisma y Supabase', 'PostgreSQL y autenticación', 'Pagos y webhooks'],
  },
  {
    title: 'Entrega y calidad',
    desc: 'Lo que construyo llega a producción con red de seguridad.',
    icon: 'shield',
    points: ['CI/CD en GitHub Actions', 'Tests sobre rutas críticas', 'Métricas y Lighthouse'],
  },
]

const techRows = [
  [
    'Vue 3',
    'React 19',
    'Next.js 15',
    'TypeScript',
    'Tailwind CSS v4',
    'Vite 7',
    'Supabase',
    'PostgreSQL',
    'NestJS',
    'Prisma',
  ],
  [
    'Docker',
    'GitHub Actions',
    'Vercel',
    'PWA',
    'Pinia',
    'Vue Router',
    'ESLint',
    'Prettier',
    'Husky',
    'Laravel 10',
    'Node.js',
    'Umami Analytics',
  ],
]
</script>

<style scoped>
.tech-chip {
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;
}
.tech-chip:hover {
  border-color: var(--accent);
  color: var(--accent-text);
  background: var(--accent-soft);
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
