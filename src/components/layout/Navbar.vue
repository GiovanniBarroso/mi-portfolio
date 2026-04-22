<template>
  <!-- Outer wrapper — full width fixed, provides padding for the pill -->
  <div class="fixed top-0 z-50 w-full px-4 sm:px-6 pt-3 pointer-events-none">
    <nav
      ref="navRef"
      class="pointer-events-auto max-w-6xl mx-auto rounded-2xl transition-all duration-300"
      :class="
        scrolled || open
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm shadow-zinc-900/5'
          : 'bg-transparent'
      "
    >
      <div class="flex h-12 items-center justify-between px-4 sm:px-5">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="flex items-center gap-2 font-extrabold text-sm tracking-tight hover:opacity-80 transition"
          @click="close"
        >
          <span
            class="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-brand-500 text-white text-xs font-black shrink-0"
          >
            G
          </span>
          <span class="hidden md:inline text-zinc-900 dark:text-zinc-100">Giovanni Barroso</span>
        </RouterLink>

        <!-- Desktop links (visible from sm) -->
        <ul class="hidden sm:flex items-center gap-0.5 text-xs sm:text-[13px] font-medium">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="relative px-3 py-1.5 rounded-lg transition-colors"
              :class="
                isActive(link.to)
                  ? 'text-brand-500 dark:text-brand-400'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70'
              "
            >
              {{ link.label }}
              <span
                v-if="isActive(link.to)"
                class="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-500 dark:bg-brand-400"
              />
            </RouterLink>
          </li>
        </ul>

        <!-- Right controls -->
        <div class="flex items-center gap-1">
          <!-- Theme toggle -->
          <button
            aria-label="Cambiar tema"
            class="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            @click="onToggleTheme"
          >
            <transition name="rotate-fade" mode="out-in">
              <svg
                v-if="isDark"
                key="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-[18px] w-[18px]"
                fill="currentColor"
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
                class="h-[18px] w-[18px] text-yellow-500"
                fill="currentColor"
              >
                <path
                  d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 14.32l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 4V1h-1v3h1zm0 19v-3h-1v3h1zm8-8h3v-1h-3v1zM1 12H4v-1H1v1zm15.24-7.16l1.42-1.42 1.79 1.8-1.41 1.41-1.8-1.79zM4.22 19.78l1.41 1.41 1.8-1.79-1.42-1.42-1.79 1.8zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"
                />
              </svg>
            </transition>
          </button>

          <!-- Mobile hamburger -->
          <button
            class="sm:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
            :aria-expanded="open"
            @click="toggle"
          >
            <svg
              v-if="!open"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile dropdown menu -->
      <transition name="nav-drop">
        <div v-if="open" class="sm:hidden border-t border-zinc-100 dark:border-zinc-800">
          <ul class="px-3 py-2.5 flex flex-col gap-0.5">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
                :class="
                  isActive(link.to)
                    ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                "
                @click="close"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { toggleTheme, isDarkTheme } from '@/plugins/theme'
import { navLinks } from '@/data/navLinks'

defineOptions({ name: 'AppNavbar' })

const links = navLinks
const route = useRoute()
const navRef = ref<HTMLElement | null>(null)
const open = ref(false)
const isDark = ref(false)
const scrolled = ref(false)

const isActive = (path: string) => route.path === path

const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

const onToggleTheme = () => {
  toggleTheme()
  isDark.value = isDarkTheme()
}

const onScroll = () => {
  scrolled.value = window.scrollY > 16
}

/* Push body down when dropdown opens at top — prevents content overlap */
watch([scrolled, open], ([s, o]) => {
  if (!s && o) {
    nextTick(() => {
      if (navRef.value) {
        const h = navRef.value.offsetHeight
        document.body.style.transition = 'padding-top 0.2s ease'
        document.body.style.paddingTop = `${h}px`
      }
    })
  } else {
    document.body.style.paddingTop = ''
  }
})

onMounted(() => {
  isDark.value = isDarkTheme()
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.paddingTop = ''
})
</script>

<style scoped>
.rotate-fade-enter-active,
.rotate-fade-leave-active {
  transition: all 0.2s ease;
}
.rotate-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}
.rotate-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

.nav-drop-enter-active {
  transition: all 0.2s ease-out;
}
.nav-drop-leave-active {
  transition: all 0.15s ease-in;
}
.nav-drop-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}
.nav-drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
