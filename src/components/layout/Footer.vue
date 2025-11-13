<template>
  <footer
    v-motion
    :initial="{ opacity: 0, y: 40 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 600, easing: 'ease-out' } }"
    class="mt-20 border-t border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-600 dark:text-zinc-400"
  >
    <div class="container grid gap-10 md:grid-cols-3 py-14">
      <!-- Descripción -->
      <div
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 100 } }"
        class="space-y-3 text-center md:text-left"
      >
        <h3 class="font-semibold text-zinc-900 dark:text-white tracking-wide uppercase text-xs">
          Sobre mí
        </h3>
        <p class="text-sm leading-relaxed opacity-80">
          Full-Stack Developer apasionado por crear interfaces limpias, rápidas y accesibles.
        </p>
      </div>

      <!-- Enlaces rápidos -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="text-center"
      >
        <h3
          class="font-semibold text-zinc-900 dark:text-white tracking-wide uppercase text-xs mb-4"
        >
          Enlaces
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink
              to="/"
              class="relative hover:text-brand-500 dark:hover:text-brand-400 transition after:block after:h-[1px] after:bg-current after:w-0 hover:after:w-full after:transition-all"
            >
              Inicio
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="relative hover:text-brand-500 dark:hover:text-brand-400 transition after:block after:h-[1px] after:bg-current after:w-0 hover:after:w-full after:transition-all"
            >
              Sobre mí
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/projects"
              class="relative hover:text-brand-500 dark:hover:text-brand-400 transition after:block after:h-[1px] after:bg-current after:w-0 hover:after:w-full after:transition-all"
            >
              Proyectos
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="relative hover:text-brand-500 dark:hover:text-brand-400 transition after:block after:h-[1px] after:bg-current after:w-0 hover:after:w-full after:transition-all"
            >
              Contacto
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 20 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }"
        class="text-center md:text-right space-y-4"
      >
        <h3 class="font-semibold text-zinc-900 dark:text-white tracking-wide uppercase text-xs">
          Conectemos
        </h3>

        <div class="flex justify-center md:justify-end gap-4 mt-2">
          <!-- GitHub -->
          <a
            href="https://github.com/GiovanniBarroso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition transform hover:scale-110 hover:rotate-3 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
          >
            <VIcon name="si-github" class="h-5 w-5" />
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/giovanni-barroso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition transform hover:scale-110 hover:rotate-3 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
          >
            <VIcon name="si-linkedin" class="h-5 w-5" />
          </a>

          <!-- Email -->
          <a
            href="mailto:giovanni.baralv@gmail.com"
            aria-label="Email"
            class="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition transform hover:scale-110 hover:rotate-3 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
          >
            <VIcon name="bi-envelope" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-zinc-200 dark:border-zinc-800 py-6">
      <p class="text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {{ year }} Giovanni Barroso • Hecho con
        <span class="font-semibold text-brand-500 dark:text-brand-400">
          TypeScript, Vue y Tailwind
        </span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppFooter' })
const year = new Date().getFullYear()
</script>
