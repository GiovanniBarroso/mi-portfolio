<template>
  <main>
    <!-- ═══════════════════════════════════════════════════
         HERO — efecto lámpara + contenido centrado
    ═══════════════════════════════════════════════════ -->
    <LampHero>
      <!-- Badge disponible -->
      <div
        v-motion
        :initial="{ opacity: 0, y: -16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold"
      >
        <span class="relative flex h-2 w-2 shrink-0">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Disponible para trabajar
      </div>

      <!-- H1 — responsive sizes from 320px to 1440px -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="text-center text-[clamp(2.25rem,9vw,5rem)] sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]"
      >
        <span
          class="block text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-3"
        >
          Full-Stack Developer
        </span>
        <span class="text-zinc-900 dark:text-white">Hola, soy</span><br />
        <span
          class="bg-gradient-to-r from-brand-400 via-brand-500 to-purple-400 bg-clip-text text-transparent pb-2 inline-block"
        >
          Giovanni
        </span>
      </h1>

      <!-- Rotating tech -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
        class="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm sm:text-base text-zinc-500 dark:text-zinc-400"
      >
        <span>Especializado en</span>
        <HeroWords :items="heroWords" :force="true" :interval-ms="2200" />
      </p>

      <!-- Descripción -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 280 } }"
        class="mt-3 max-w-[36ch] sm:max-w-lg text-center text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed"
      >
        Construyo interfaces modernas, accesibles y de alto rendimiento desde Sevilla.
      </p>

      <!-- CTAs -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 360 } }"
        class="mt-8 flex flex-wrap gap-3 justify-center w-full max-w-xs sm:max-w-none"
      >
        <RouterLink
          to="/projects"
          class="btn px-6 sm:px-7 py-2.5 sm:py-3 text-sm shadow-lg shadow-brand-500/25 flex-1 sm:flex-none justify-center"
        >
          Ver proyectos
          <svg
            class="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
        <RouterLink
          to="/about"
          class="btn-outline px-6 sm:px-7 py-2.5 sm:py-3 text-sm flex-1 sm:flex-none justify-center"
        >
          Sobre mí
        </RouterLink>
      </div>

      <!-- Social links -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 500, delay: 460 } }"
        class="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
      >
        <a
          href="https://github.com/GiovanniBarroso"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition group"
        >
          <svg
            class="h-3.5 w-3.5 group-hover:scale-110 transition-transform shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
          GitHub
        </a>
        <span class="h-3 w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
        <a
          href="https://www.linkedin.com/in/giovanni-barroso"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-brand-500 dark:hover:text-brand-400 transition group"
        >
          <svg
            class="h-3.5 w-3.5 group-hover:scale-110 transition-transform shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
          LinkedIn
        </a>
        <span class="h-3 w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
        <a
          href="mailto:giovanni.baralv@gmail.com"
          class="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-brand-500 dark:hover:text-brand-400 transition group"
        >
          <svg
            class="h-3.5 w-3.5 group-hover:scale-110 transition-transform shrink-0"
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
          Email
        </a>
      </div>
    </LampHero>

    <!-- ═══════════════════════════════════════════════════
         STATS STRIP
    ═══════════════════════════════════════════════════ -->
    <section class="border-y border-zinc-100 dark:border-zinc-800/60" aria-label="Métricas">
      <div class="container px-6 py-10">
        <dl class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            v-for="(stat, i) in quickStats"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 14 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 350, delay: i * 70 } }"
            class="group relative overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-5 py-6 text-center hover:border-brand-500/30 dark:hover:border-brand-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/5"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-brand-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
            <!-- icon -->
            <div
              class="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500"
            >
              <svg
                v-if="i === 0"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <svg v-else-if="i === 1" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
              <svg
                v-else-if="i === 2"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path stroke-linecap="round" d="M12 6v6l4 2" />
              </svg>
              <svg
                v-else
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3" />
                <rect x="3" y="3" width="18" height="18" rx="2" stroke-width="2" />
              </svg>
            </div>
            <dt
              class="text-3xl sm:text-4xl font-extrabold text-brand-500 tabular-nums leading-none"
            >
              {{ stat.value }}
            </dt>
            <dd
              class="mt-2 text-[11px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-medium leading-snug"
            >
              {{ stat.label }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         PROYECTOS DESTACADOS
    ═══════════════════════════════════════════════════ -->
    <section class="section-base container px-6" aria-labelledby="featured-title">
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <p class="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
            Portafolio
          </p>
          <h2 id="featured-title" class="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Proyectos destacados
          </h2>
        </div>
        <RouterLink
          to="/projects"
          class="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-brand-500 transition shrink-0"
        >
          Ver todos
          <svg
            class="h-4 w-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [grid-auto-rows:1fr]">
        <li
          v-for="(p, i) in slicedProjects"
          :key="p.slug"
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450, delay: (i % 3) * 90 } }"
          class="flex"
        >
          <ProjectCard v-bind="p" class="h-full flex-1" />
        </li>
      </ul>
    </section>

    <!-- ═══════════════════════════════════════════════════
         TECH MARQUEE
    ═══════════════════════════════════════════════════ -->
    <section
      class="section-base border-t border-zinc-100 dark:border-zinc-800/60 overflow-hidden"
      aria-labelledby="stack-title"
    >
      <div class="container px-6 mb-10 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 450 } }"
        >
          <p class="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">Stack</p>
          <h2 id="stack-title" class="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Tecnologías que uso
          </h2>
        </div>
      </div>

      <div class="mask-fade-x overflow-hidden mb-3">
        <div class="flex gap-3 pause-on-hover animate-marquee-left w-max">
          <span
            v-for="tech in [...row1, ...row1]"
            :key="`a-${tech}`"
            class="tech-chip shrink-0 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-700 dark:text-zinc-300 select-none"
          >
            {{ tech }}
          </span>
        </div>
      </div>
      <div class="mask-fade-x overflow-hidden">
        <div class="flex gap-3 pause-on-hover animate-marquee-right w-max">
          <span
            v-for="tech in [...row2, ...row2]"
            :key="`b-${tech}`"
            class="tech-chip shrink-0 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-700 dark:text-zinc-300 select-none"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 400, delay: 200 } }"
        class="mt-10 text-center"
      >
        <RouterLink
          to="/skills"
          class="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-brand-500 transition"
        >
          Ver todas las skills
          <svg
            class="h-4 w-4 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════
         CTA FINAL
    ═══════════════════════════════════════════════════ -->
    <section class="section-base container px-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 550 } }"
        class="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-brand-500/8 via-transparent to-purple-500/8 px-8 py-16 text-center"
      >
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(14,165,233,0.07),transparent)]"
        />
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-0 opacity-30 dark:opacity-15"
          style="
            background-image: radial-gradient(circle, rgba(14, 165, 233, 0.2) 1px, transparent 1px);
            background-size: 24px 24px;
          "
        />
        <p class="relative text-xs font-semibold text-brand-500 uppercase tracking-widest mb-3">
          ¿Hablamos?
        </p>
        <h2 class="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Abierto a nuevos proyectos
        </h2>
        <p
          class="relative text-zinc-500 dark:text-zinc-400 max-w-md mx-auto mb-8 text-base leading-relaxed"
        >
          Si tienes un proyecto en mente o buscas un desarrollador, escríbeme. Te respondo en menos
          de 48h.
        </p>
        <RouterLink
          to="/contact"
          class="relative btn px-9 py-3.5 text-base shadow-xl shadow-brand-500/25"
        >
          Contactar
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import LampHero from '@/components/layout/LampHero.vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import HeroWords from '@/components/common/HeroWords.vue'
import { projects } from '@/data/projects'
import { heroWords } from '@/data/hero'
import { computed } from 'vue'

const FEATURED = [
  { slug: 'cosas-d-casa', badge: undefined },
  { slug: 'date-un-respiro', badge: 'En desarrollo' },
  { slug: 'manuela-rios', badge: undefined },
] as const

const slicedProjects = computed(() =>
  FEATURED.map(({ slug, badge }) => ({
    ...projects.find((p) => p.slug === slug)!,
    badge,
  }))
)

const quickStats = [
  { label: 'Proyectos reales', value: '5+' },
  { label: 'Repos públicos', value: '15+' },
  { label: 'Años de práctica', value: '2+' },
  { label: 'Tecnologías', value: '20+' },
]

const row1 = [
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
]

const row2 = [
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
]
</script>

<style scoped>
/* Shimmer + glow on tech chips — all screen sizes */
.tech-chip {
  position: relative;
  overflow: hidden;
  transition:
    border-color 0.25s,
    color 0.25s,
    box-shadow 0.25s;
}

.tech-chip:hover,
.tech-chip:active {
  border-color: rgba(14, 165, 233, 0.45);
  color: rgb(14, 165, 233);
  box-shadow:
    0 0 18px rgba(14, 165, 233, 0.13),
    inset 0 0 10px rgba(14, 165, 233, 0.07);
}

.tech-chip::after {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(
    108deg,
    transparent 35%,
    rgba(14, 165, 233, 0.18) 50%,
    rgba(255, 255, 255, 0.12) 54%,
    transparent 65%
  );
  background-size: 250% 100%;
  background-position: 200% center;
  pointer-events: none;
}

.tech-chip:hover::after,
.tech-chip:active::after {
  animation: chip-sweep 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes chip-sweep {
  from {
    background-position: 200% center;
  }
  to {
    background-position: -100% center;
  }
}
</style>
