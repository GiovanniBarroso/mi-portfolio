<template>
  <footer class="border-t border-zinc-200 dark:border-zinc-800 py-8">
    <div class="container text-center">
      <p class="text-sm text-zinc-600 dark:text-zinc-400">
        © {{ new Date().getFullYear() }} Mi Portfolio • Hecho con Vue, TypeScript y Tailwind
      </p>
      <div class="mt-3 flex justify-center gap-4">
        <a class="link" href="https://github.com/tuusuario" target="_blank" rel="noreferrer"
          >GitHub</a
        >
        <a
          class="link"
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          rel="noreferrer"
          >LinkedIn</a
        >
        <a class="link" href="mailto:tuemail@example.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'AppFooter' })
</script>
