<template>
  <footer
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 500, easing: 'ease-out' } }"
    class="border-t border-zinc-800 dark:border-zinc-200/40 bg-zinc-950 text-zinc-400 dark:bg-white dark:text-zinc-600 py-10 mt-20 transition-colors duration-300"
  >
    <div class="container text-center">
      <!-- Texto principal -->
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Giovanni Barroso • Hecho con
        <span class="font-semibold text-brand-400 dark:text-brand-600"
          >Vue, TypeScript y Tailwind</span
        >
      </p>

      <!-- Links -->
      <div class="mt-4 flex justify-center gap-6 text-sm font-medium">
        <a
          class="transition hover:text-brand-400 dark:hover:text-brand-600"
          href="https://github.com/GiovanniBarroso"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          class="transition hover:text-brand-400 dark:hover:text-brand-600"
          href="https://www.linkedin.com/in/giovannibarroso"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          class="transition hover:text-brand-400 dark:hover:text-brand-600"
          href="mailto:giovanni.barroso.dev@gmail.com"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppFooter' })
</script>
