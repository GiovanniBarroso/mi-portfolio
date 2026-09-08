<template>
  <div class="fixed inset-x-0 top-0 z-nav px-4 pt-3 sm:px-6 pointer-events-none">
    <!-- Telón del menú móvil: cierra al tocar fuera y aísla el contenido -->
    <Transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 -z-10 bg-bg/60 backdrop-blur-sm md:hidden pointer-events-auto"
        @click="close"
      />
    </Transition>

    <nav
      aria-label="Navegación principal"
      class="pointer-events-auto mx-auto max-w-6xl rounded-2xl transition-[background-color,border-color,box-shadow] duration-300"
      :class="
        elevated || open
          ? 'border border-hair bg-surface/85 shadow-md backdrop-blur-xl'
          : 'border border-transparent bg-transparent'
      "
    >
      <div class="flex h-14 items-center justify-between gap-2 pl-3 pr-2 sm:pl-4 sm:pr-3">
        <!-- Marca -->
        <RouterLink
          to="/"
          class="group flex items-center gap-2.5 rounded-xl py-1 pr-2 text-sm font-bold tracking-tight"
          @click="close"
        >
          <span
            class="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-solid text-[13px] font-black text-accent-on transition-transform duration-200 group-hover:-rotate-6"
            aria-hidden="true"
          >
            G
          </span>
          <span class="hidden text-fg sm:inline">Giovanni Barroso</span>
          <span class="sr-only sm:hidden">Giovanni Barroso — inicio</span>
        </RouterLink>

        <!-- Enlaces de escritorio. A partir de md: por debajo no caben
             cinco secciones + controles sin apretujarse. -->
        <ul class="hidden items-center gap-1 md:flex">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              :aria-current="isActive(link.to) ? 'page' : undefined"
              class="relative block rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-200"
              :class="
                isActive(link.to)
                  ? 'text-accent-text'
                  : 'text-fg-muted hover:bg-surface-2 hover:text-fg'
              "
            >
              {{ link.label }}
              <span
                v-if="isActive(link.to)"
                aria-hidden="true"
                class="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-accent"
              />
            </RouterLink>
          </li>
        </ul>

        <div class="flex items-center gap-1">
          <!-- Enlace de contacto directo: la acción que de verdad importa -->
          <RouterLink to="/contact" class="btn btn-sm hidden lg:inline-flex"> Hablemos </RouterLink>

          <button
            type="button"
            class="grid h-11 w-11 place-items-center rounded-xl text-fg-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
            :aria-label="isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
            :aria-pressed="isDark"
            @click="onToggleTheme"
          >
            <Transition name="rotate-fade" mode="out-in">
              <AppIcon v-if="isDark" key="moon" name="moon" :size="5" />
              <AppIcon v-else key="sun" name="sun" :size="5" class="text-amber-500" />
            </Transition>
          </button>

          <button
            ref="burgerRef"
            type="button"
            class="grid h-11 w-11 place-items-center rounded-xl text-fg-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg md:hidden"
            :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
            :aria-expanded="open"
            aria-controls="mobile-menu"
            @click="toggle"
          >
            <AppIcon :name="open ? 'close' : 'menu'" :size="5" :stroke-width="2" />
          </button>
        </div>
      </div>

      <!-- Menú móvil -->
      <Transition name="nav-drop">
        <div v-if="open" id="mobile-menu" class="border-t border-hair md:hidden">
          <ul class="flex flex-col gap-0.5 p-2">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                :aria-current="isActive(link.to) ? 'page' : undefined"
                class="flex min-h-11 items-center justify-between rounded-xl px-3 text-sm font-medium transition-colors duration-200"
                :class="
                  isActive(link.to)
                    ? 'bg-accent/10 text-accent-text'
                    : 'text-fg-muted hover:bg-surface-2 hover:text-fg'
                "
                @click="close"
              >
                {{ link.label }}
                <AppIcon v-if="isActive(link.to)" name="arrow-right" :size="4" />
              </RouterLink>
            </li>
          </ul>
          <div class="p-2 pt-0">
            <RouterLink to="/contact" class="btn w-full" @click="close"> Hablemos </RouterLink>
          </div>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '@/components/common/AppIcon.vue'
import { toggleTheme, isDarkTheme } from '@/plugins/theme'
import { navLinks } from '@/data/navLinks'

defineOptions({ name: 'AppNavbar' })

const links = navLinks
const route = useRoute()
const burgerRef = ref<HTMLButtonElement | null>(null)
const open = ref(false)
const isDark = ref(false)
const elevated = ref(false)

const isActive = (path: string) => (path === '/' ? route.path === '/' : route.path.startsWith(path))

const close = () => (open.value = false)
const toggle = () => (open.value = !open.value)

const onToggleTheme = () => {
  toggleTheme()
  isDark.value = isDarkTheme()
}

const onScroll = () => {
  elevated.value = window.scrollY > 12
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && open.value) {
    close()
    burgerRef.value?.focus()
  }
}

// Cerrar al navegar (por ejemplo, con el botón atrás del navegador)
watch(() => route.fullPath, close)

// Bloquear el scroll de fondo mientras el menú ocupa la pantalla
watch(open, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  isDark.value = isDarkTheme()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
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

.nav-drop-enter-active,
.nav-drop-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.nav-drop-enter-from,
.nav-drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
