<template>
  <div class="page shell shell-narrow" aria-labelledby="contact-title">
    <PageHeader
      eyebrow="Hablemos"
      title="Contacto"
      subtitle="¿Tienes un proyecto, una vacante o simplemente una duda técnica? Escríbeme y te respondo en menos de 48 horas."
      as="h1"
      title-id="contact-title"
      class="mx-auto"
    />

    <div class="mt-14 grid items-start gap-6 md:grid-cols-5">
      <!-- ══════════ Email directo ══════════ -->
      <section
        v-motion
        :initial="slideInLeft.initial"
        :enter="slideInLeft.enter"
        class="card space-y-6 p-6 md:col-span-2 md:sticky md:top-[calc(var(--nav-h)+1.5rem)]"
        aria-labelledby="email-title"
      >
        <div
          class="flex items-center gap-3 rounded-xl border border-ok/30 bg-ok/10 p-4 text-ok-text"
        >
          <span class="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60" />
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
          </span>
          <div>
            <p class="text-sm font-semibold">Disponible</p>
            <p class="text-xs opacity-90">Abierto a freelance y a empleo</p>
          </div>
        </div>

        <div>
          <h2
            id="email-title"
            class="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle"
          >
            Email directo
          </h2>
          <!-- La dirección se parte en vez de truncarse: un correo cortado
               con puntos suspensivos no se puede leer ni transcribir. -->
          <a
            :href="mailtoHref"
            class="mt-3 block break-all rounded-xl border border-hair bg-surface-2 px-3 py-2.5 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent-text"
          >
            {{ contact.email }}
          </a>
          <button
            type="button"
            class="btn-outline btn-sm mt-2 w-full"
            :class="copied.email ? '!border-ok !text-ok-text' : ''"
            @click="copy(contact.email, 'email')"
          >
            <AppIcon :name="copied.email ? 'check' : 'copy'" :size="3.5" :stroke-width="2" />
            {{ copied.email ? 'Copiado' : 'Copiar dirección' }}
          </button>
          <!-- El cambio de icono es visual; esto lo anuncia por voz -->
          <p class="sr-only" role="status" aria-live="polite">
            {{ copied.email ? 'Correo copiado al portapapeles' : '' }}
          </p>
        </div>

        <div class="flex items-center gap-3 border-t border-hair pt-5 text-sm text-fg-muted">
          <AppIcon name="clock" :size="4" />
          <span>
            Respuesta en
            <strong class="font-semibold text-fg">{{ contact.responseTime }}</strong>
          </span>
        </div>

        <a :href="mailtoHref" class="btn w-full">
          <AppIcon name="mail" :size="4" />
          Enviar email
        </a>
      </section>

      <!-- ══════════ Otros canales ══════════ -->
      <div
        v-motion
        :initial="slideInRight.initial"
        :enter="slideInRight.enter"
        class="space-y-4 md:col-span-3"
      >
        <h2 class="text-[11px] font-bold uppercase tracking-[0.14em] text-fg-subtle">
          También puedes encontrarme en
        </h2>

        <ul class="space-y-3">
          <li v-for="(link, i) in socialLinks" :key="link.label">
            <a
              v-motion
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              :initial="fadeUp.initial"
              :enter="{ ...fadeUp.enter, transition: { duration: 300, delay: 100 + i * 70 } }"
              class="card card-interactive group flex items-center gap-4 p-4"
            >
              <span
                class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-surface-2 text-fg-muted transition-colors duration-200 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent-text"
              >
                <AppIcon :name="link.icon" :size="5" />
              </span>
              <span class="min-w-0 flex-1">
                <span
                  class="block text-sm font-semibold text-fg transition-colors duration-200 group-hover:text-accent-text"
                >
                  {{ link.label }}
                </span>
                <span class="mt-0.5 block truncate text-xs text-fg-muted">{{ link.handle }}</span>
              </span>
              <AppIcon
                :name="link.external ? 'arrow-up-right' : 'arrow-right'"
                :size="4"
                class="text-fg-subtle transition-colors duration-200 group-hover:text-accent-text"
              />
              <span v-if="link.external" class="sr-only">(abre en una pestaña nueva)</span>
            </a>
          </li>
        </ul>

        <!-- Expectativas: qué pasa después de escribir -->
        <div class="card-muted p-6">
          <h3 class="flex items-center gap-2.5 text-sm font-semibold text-fg">
            <AppIcon name="chat" :size="4" class="text-accent-text" />
            Qué pasa cuando escribes
          </h3>
          <ol class="mt-4 space-y-3">
            <li v-for="(step, i) in expectations" :key="step" class="flex gap-3">
              <span
                class="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface text-[11px] font-bold tabular-nums text-fg-muted"
                aria-hidden="true"
              >
                {{ i + 1 }}
              </span>
              <span class="text-[13px] leading-relaxed text-fg-muted">{{ step }}</span>
            </li>
          </ol>
        </div>

        <p class="flex items-start gap-3 px-1 text-[13px] leading-relaxed text-fg-subtle">
          <AppIcon name="mail" :size="4" class="mt-0.5 shrink-0" />
          <span>
            <strong class="font-semibold text-fg-muted">Prefiero el email</strong> para propuestas
            serias: es más fácil mantener el hilo y adjuntar contexto que en una red social.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useSeo } from '@/composables/useSeo'
import { useClipboard } from '@/composables/useClipboard'
import { contactData as contact } from '@/data/contact'
import { socialLinks } from '@/data/social'
import { fadeUp, slideInLeft, slideInRight } from '@/composables/motionPresets'

const seo = useSeo()
seo({
  title: 'Contacto',
  description: 'Contacta con Giovanni Barroso por email, GitHub o LinkedIn. Respuesta en 24-48h.',
})

const mailtoHref = computed(
  () => `mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}`
)

const expectations = [
  'Te confirmo que lo he recibido en un plazo de 24 a 48 horas.',
  'Si encaja, te propongo una llamada corta para entender el alcance.',
  'Te mando una estimación honesta de tiempo, no una cifra inflada.',
]

const { copied, copy } = useClipboard()
</script>
