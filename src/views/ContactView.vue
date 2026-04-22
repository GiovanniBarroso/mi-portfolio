<template>
  <div class="section-base" aria-labelledby="contact-title">
    <div class="container mx-auto max-w-5xl px-6">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="mb-14 text-center"
      >
        <p class="text-sm font-medium text-brand-500 uppercase tracking-widest mb-2">Hablemos</p>
        <h1 id="contact-title" class="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Contacto
        </h1>
        <div
          class="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
        />
        <p class="mt-4 text-zinc-500 dark:text-zinc-400 max-w-md mx-auto text-base leading-relaxed">
          ¿Tienes un proyecto o quieres hablar? Escríbeme y te respondo en menos de 48h.
        </p>
      </div>

      <div class="grid md:grid-cols-5 gap-8 items-start">
        <!-- ─ Columna de datos de contacto ─ -->
        <aside
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 100 } }"
          class="md:col-span-2"
        >
          <div class="card p-7 md:sticky md:top-24 space-y-6">
            <!-- Disponibilidad -->
            <div
              class="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
            >
              <span class="relative flex h-2.5 w-2.5 shrink-0">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                ></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  Disponible
                </p>
                <p class="text-xs text-emerald-600/70 dark:text-emerald-400/70">
                  Abierto a proyectos freelance y empleo
                </p>
              </div>
            </div>

            <!-- Email -->
            <div>
              <h3
                class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-3"
              >
                Email directo
              </h3>
              <div class="flex items-center gap-3">
                <a
                  :href="mailtoHref"
                  class="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-brand-500 transition truncate flex-1"
                >
                  {{ contact.email }}
                </a>
                <button
                  type="button"
                  class="shrink-0 px-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition font-medium"
                  :aria-label="copied.email ? 'Correo copiado' : 'Copiar correo'"
                  @click="copy(contact.email, 'email')"
                >
                  <span v-if="copied.email" class="text-emerald-500">✓ Copiado</span>
                  <span v-else>Copiar</span>
                </button>
              </div>
            </div>

            <!-- Tiempo de respuesta -->
            <div
              class="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800 pt-4"
            >
              <svg
                class="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span
                >Respondo en
                <strong class="text-zinc-700 dark:text-zinc-300">{{
                  contact.responseTime
                }}</strong></span
              >
            </div>

            <!-- CTA email -->
            <a :href="mailtoHref" class="btn w-full justify-center">
              <svg
                class="h-4 w-4"
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
              Enviar email
            </a>
          </div>
        </aside>

        <!-- ─ Links sociales ─ -->
        <main
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 150 } }"
          class="md:col-span-3 space-y-4"
        >
          <h3
            class="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-5"
          >
            También puedes encontrarme en
          </h3>

          <a
            v-for="(link, i) in contact.links"
            :key="link.label"
            v-motion
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :initial="{ opacity: 0, y: 12 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 350, delay: 200 + i * 80 } }"
            class="card p-5 flex items-center gap-4 hover:shadow-xl hover:-translate-y-0.5 hover:border-brand-500/30 transition-all group"
            :aria-label="link.aria ?? link.label"
          >
            <div
              class="h-11 w-11 rounded-xl flex items-center justify-center text-xl shrink-0 bg-zinc-100 dark:bg-zinc-800 group-hover:bg-brand-500/10 transition"
            >
              {{ link.icon ?? '🔗' }}
            </div>
            <div class="min-w-0 flex-1">
              <p
                class="font-semibold text-sm group-hover:text-brand-500 dark:group-hover:text-brand-400 transition"
              >
                {{ link.label }}
              </p>
              <p class="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400 truncate">{{ link.url }}</p>
            </div>
            <svg
              class="h-4 w-4 shrink-0 text-zinc-400 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <!-- Bloque "prefiero email" -->
          <div class="card p-5 bg-zinc-50/50 dark:bg-zinc-900/50">
            <p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              💬 <strong class="text-zinc-700 dark:text-zinc-300">Prefiero el email</strong> para
              proyectos serios — más fácil llevar un hilo de conversación y adjuntar contexto.
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSeo } from '@/composables/useSeo'
import { useClipboard } from '@/composables/useClipboard'
import { contactData as contact } from '@/data/contact'

const seo = useSeo()
seo({
  title: 'Contacto',
  description: 'Contacta con Giovanni Barroso por email, GitHub o LinkedIn.',
})

const mailtoHref = computed(
  () => `mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}`
)

const { copied, copy } = useClipboard()
</script>
