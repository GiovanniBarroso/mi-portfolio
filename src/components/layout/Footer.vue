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
          <a
            href="https://github.com/GiovanniBarroso"
            target="_blank"
            aria-label="GitHub"
            class="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition transform hover:scale-110 hover:rotate-3 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
          >
            <!-- GitHub Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.6.3-1.1.6-1.3-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 013 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .3.3.7.9.7 1.9v2.8c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/giovanni-barroso"
            target="_blank"
            aria-label="LinkedIn"
            class="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition transform hover:scale-110 hover:rotate-3 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
          >
            <!-- LinkedIn Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.77 0 5-2.24 5-5v-14c0-2.76-2.23-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.97 0-1.75-.78-1.75-1.75S5.53 4 6.5 4s1.75.78 1.75 1.75S7.47 7.5 6.5 7.5zM20 19h-3v-5.6c0-1.3-.02-3-1.84-3-1.85 0-2.13 1.44-2.13 2.92V19h-3v-10h2.9v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.72V19z"
              />
            </svg>
          </a>
          <a
            href="mailto:giovanni.barroso.dev@gmail.com"
            aria-label="Email"
            class="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 transition transform hover:scale-110 hover:rotate-3 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600"
          >
            <!-- Email Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 13.065l-11.64-7.065h23.28l-11.64 7.065zm0 2.935l12-7.285v11.285c0 .553-.447 1-1 1H1c-.553 0-1-.447-1-1V8.715l12 7.285z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom note -->
    <div class="border-t border-zinc-200 dark:border-zinc-800 py-6">
      <p class="text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {{ new Date().getFullYear() }} Giovanni Barroso • Hecho con
        <span class="font-semibold text-brand-500 dark:text-brand-400"
          >Vue, TypeScript y Tailwind</span
        >
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppFooter' })
</script>
