<template>
  <section
    class="py-20 border-b border-zinc-800/50 dark:border-zinc-200/40 bg-zinc-950 text-zinc-100 dark:bg-white dark:text-zinc-800 transition-colors"
    aria-labelledby="contact-title"
  >
    <SectionTitle
      id="contact-title"
      title="Contacto"
      subtitle="Escríbeme por el canal que prefieras"
    />

    <div class="container mx-auto max-w-6xl px-6 mt-10">
      <div class="grid md:grid-cols-5 gap-8 items-start">
        <aside class="md:col-span-2">
          <div class="card p-6 md:sticky md:top-8">
            <h3 class="text-xl font-semibold">Datos directos</h3>
            <ul class="mt-4 space-y-4" role="list">
              <li class="flex items-center gap-3">
                <span class="text-2xl" aria-hidden="true">📧</span>
                <a :href="mailtoHref" class="font-medium hover:underline truncate">
                  {{ contact.email }}
                </a>
                <button
                  type="button"
                  class="ml-auto px-3 py-1.5 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                  :aria-label="copied.email ? 'Correo copiado' : 'Copiar correo'"
                  @click="copy(contact.email, 'email')"
                >
                  {{ copied.email ? 'Copiado' : 'Copiar' }}
                </button>
              </li>

              <li class="flex items-center gap-3 text-sm text-zinc-400 dark:text-zinc-600">
                <span class="text-lg" aria-hidden="true">⏱️</span>
                <span>Suelo responder en {{ contact.responseTime }}.</span>
              </li>
            </ul>

            <div class="mt-6">
              <a :href="mailtoHref" class="btn w-full text-center">Enviar email</a>
            </div>
          </div>
        </aside>

        <main class="md:col-span-3">
          <div class="grid sm:grid-cols-2 gap-6">
            <a
              v-for="link in contact.links"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="card p-5 flex items-center gap-4 hover:shadow-xl hover:-translate-y-0.5 transition"
              :aria-label="link.aria ?? link.label"
            >
              <span class="text-3xl" aria-hidden="true">{{ link.icon ?? '🔗' }}</span>
              <div class="min-w-0">
                <p class="font-medium leading-none">{{ link.label }}</p>
                <p class="mt-1 text-sm truncate text-zinc-400 dark:text-zinc-600">
                  {{ link.url }}
                </p>
              </div>
            </a>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
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
