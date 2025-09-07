<template>
  <nav
    class="fixed top-0 z-50 w-full bg-zinc-950/70 dark:bg-white/80 backdrop-blur border-b border-zinc-800 dark:border-zinc-200"
  >
    <div class="container flex h-16 items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2 font-extrabold text-xl">
        <span
          class="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-brand-500 to-purple-600"
        ></span>
        <span class="text-zinc-900 dark:text-white">Giovanni Barroso</span>
      </RouterLink>

      <!-- Desktop menu -->
      <ul class="hidden md:flex items-center gap-6 font-medium">
        <li><RouterLink class="hover:text-brand-600" to="/">Inicio</RouterLink></li>
        <li><RouterLink class="hover:text-brand-600" to="/about">Sobre mí</RouterLink></li>
        <li><RouterLink class="hover:text-brand-600" to="/projects">Proyectos</RouterLink></li>
        <li><RouterLink class="hover:text-brand-600" to="/skills">Skills</RouterLink></li>
        <li><RouterLink class="hover:text-brand-600" to="/contact">Contacto</RouterLink></li>
      </ul>

      <!-- Right side: Theme toggle + Mobile button -->
      <div class="flex items-center gap-2">
        <!-- Dark/Light toggle -->
        <button
          aria-label="Cambiar tema"
          class="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          @click="onToggleTheme"
        >
          <transition name="rotate-fade" mode="out-in">
            <svg
              v-if="isDark"
              key="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5 w-5 fill-current"
            >
              <path
                d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 0 1 11.11 4.4a1 1 0 0 0-1.25-1.25A10 10 0 1 0 22 14.69a1 1 0 0 0-.36-1.69Z"
              />
            </svg>
            <svg
              v-else
              key="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5 w-5 fill-current"
            >
              <path
                d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 14.32l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 4V1h-1v3h1zm0 19v-3h-1v3h1zm8-8h3v-1h-3v1zM1 12H4v-1H1v1zm15.24-7.16l1.42-1.42 1.79 1.8-1.41 1.41-1.8-1.79zM4.22 19.78l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"
              />
            </svg>
          </transition>
        </button>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Abrir menú"
          @click="toggle"
        >
          <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div
        v-if="open"
        class="md:hidden border-t border-zinc-200 dark:border-zinc-800 transition-colors"
      >
        <ul class="container py-4 flex flex-col gap-3 font-medium">
          <li><RouterLink to="/" @click="close">Inicio</RouterLink></li>
          <li><RouterLink to="/about" @click="close">Sobre mí</RouterLink></li>
          <li><RouterLink to="/projects" @click="close">Proyectos</RouterLink></li>
          <li><RouterLink to="/skills" @click="close">Skills</RouterLink></li>
          <li><RouterLink to="/contact" @click="close">Contacto</RouterLink></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toggleTheme, applyInitialTheme, isDarkTheme } from '@/plugins/theme'

defineOptions({ name: 'AppNavbar' })

const open = ref(false)
const isDark = ref(false)

const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

const onToggleTheme = () => {
  toggleTheme()
  isDark.value = isDarkTheme()
}

onMounted(() => {
  applyInitialTheme()
  isDark.value = isDarkTheme()

  // Reaccionar si el sistema cambia
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    applyInitialTheme()
    isDark.value = isDarkTheme()
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animación del icono sol/luna */
.rotate-fade-enter-active,
.rotate-fade-leave-active {
  transition: all 0.3s ease;
}
.rotate-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}
.rotate-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>
