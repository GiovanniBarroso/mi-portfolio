<template>
  <main class="space-y-32">
    <!-- Hero -->
    <section
      class="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <!-- Fondo sutil animado -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-purple-600/10 dark:from-brand-500/20 dark:to-purple-600/20 animate-pulse"
      ></div>

      <div class="relative z-10">
        <h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Hola, soy <span class="text-brand-500">Giovanni</span>
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Desarrollador web —
          <span class="inline-block relative w-56 h-8 overflow-hidden font-semibold text-brand-500">
            <span
              v-for="(word, i) in words"
              :key="i"
              class="absolute inset-0 transition-transform duration-700"
              :style="{ transform: `translateY(${(i - current) * 100}%)` }"
            >
              {{ word }}
            </span>
          </span>
        </p>

        <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <RouterLink
            to="/projects"
            class="px-8 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition"
          >
            Ver proyectos
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-8 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Contáctame
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Highlights con proyectos -->
    <section class="container space-y-10 px-6">
      <h2 class="text-3xl font-bold text-center">Mis proyectos clave</h2>
      <div class="grid gap-6 sm:grid-cols-2">
        <div
          v-for="h in highlights"
          :key="h.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
          class="p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-md hover:shadow-xl transition"
        >
          <h3 class="text-xl font-semibold mb-2 text-brand-500">
            {{ h.title }}
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            {{ h.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Snippet de código estilo VSCode -->
    <section class="container px-6">
      <h2 class="text-3xl font-bold text-center mb-6">Vivo en el código</h2>
      <div class="rounded-xl overflow-hidden shadow-xl max-w-2xl mx-auto">
        <div class="flex items-center gap-2 px-4 py-2 bg-zinc-800">
          <span class="w-3 h-3 bg-red-500 rounded-full"></span>
          <span class="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span class="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <pre class="bg-zinc-900 text-zinc-100 text-sm p-6 overflow-x-auto"><code>
const giovanni = {
  rol: "Full-Stack Developer",
  proyectos: ["FastFix", "NanoBank", "AyMiCookie", "Pi-hole"],
  stack: ["Vue", "TypeScript", "Tailwind", "Spring Boot", "Laravel"],
  filosofia: "El código es poesía, la simplicidad es la clave ✨",
  ubicacion: "España 🇪🇸"
}
        </code></pre>
      </div>
    </section>

    <!-- Proyectos destacados -->
    <section class="container px-6">
      <h2 class="text-3xl font-bold mb-8 text-center">Proyectos recientes</h2>
      <div class="grid gap-8">
        <ProjectCard
          v-for="p in projects.slice(0, 2)"
          :key="p.title"
          v-bind="p"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        />
      </div>
      <div class="mt-6 text-center">
        <RouterLink to="/projects" class="text-brand-500 hover:underline font-medium">
          Ver todos los proyectos →
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import { projects } from '@/data/projects'

// Carousel dinámico de palabras
const words = [
  'Vue & TypeScript',
  'Tailwind CSS',
  'Laravel + Fortify',
  'Spring Boot',
  'Node.js + PNPM',
  'UX/UI',
]
const current = ref(0)
onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % words.length
  }, 2200)
})

// Highlights con proyectos reales
const highlights = [
  {
    title: '⚙️ FastFix (TFG)',
    description:
      'Plataforma integral de reparaciones y venta tecnológica, ERP Interno. Vue, Laravel, JWT, PayPal.',
  },
  {
    title: '💰 NanoBank',
    description:
      'Banca digital educativa con transferencias, test de idoneidad e inversiones, Bizum y consultas HTTP. Java + MySQL.',
  },
  {
    title: '🍪 AyMiCookie',
    description:
      'Proyecto empresarial con Laravel, Fortify, Axios, Bootstrap, Sass, MySql y modelo fiscal.',
  },
  {
    title: '🛡️ Pi-hole',
    description:
      'Configuración y despliegue de bloqueador de publicidad y marketplaces en Raspberry Pi.',
  },
]
</script>
