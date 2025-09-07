<template>
  <footer class="border-t border-zinc-800 dark:border-zinc-200 py-8 transition-colors mt-20">
    <div class="container text-center">
      <p class="text-sm text-zinc-500 dark:text-zinc-500">
        © {{ new Date().getFullYear() }} Giovanni Barroso • Hecho con
        <span class="text-brand-400 dark:text-brand-600">Vue, TypeScript y Tailwind</span>
      </p>
      <div class="mt-3 flex justify-center gap-4">
        <a
          class="link hover:underline"
          href="https://github.com/GiovanniBarroso"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          class="link hover:underline"
          href="https://www.linkedin.com/in/giovannibarroso"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a class="link hover:underline" href="mailto:giovanni.barroso.dev@gmail.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppFooter' })
</script>
