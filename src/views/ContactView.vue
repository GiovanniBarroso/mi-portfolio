<template>
  <div class="page shell shell-narrow">
    <PageHeader
      eyebrow="Hablemos"
      title="Contacto"
      :subtitle="`¿Tienes un proyecto, una vacante o una duda técnica? Escríbeme y te respondo en ${site.responseTime}.`"
      as="h1"
      title-id="contact-title"
    />

    <div class="mt-14 grid items-start gap-6 md:grid-cols-5">
      <!-- ══════════ Email directo ══════════ -->
      <section
        v-reveal
        class="card space-y-6 p-6 md:sticky md:top-[calc(var(--nav-h)+1.5rem)] md:col-span-2"
        aria-labelledby="email-title"
      >
        <div
          v-if="site.availability.open"
          class="flex items-center gap-3 rounded-xl border border-ok/30 bg-ok/10 p-4 text-ok-text"
        >
          <span class="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span
              class="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 motion-safe:animate-ping"
            />
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
          </span>
          <div>
            <p class="text-sm font-semibold">{{ site.availability.label }}</p>
            <p class="text-xs">{{ site.availability.detail }}</p>
          </div>
        </div>

        <div>
          <h2 id="email-title" class="label">Email directo</h2>
          <!-- La dirección se parte en vez de truncarse: un correo cortado
               con puntos suspensivos no se puede leer ni transcribir. -->
          <a
            :href="`mailto:${site.email}`"
            class="mt-3 block break-all rounded-xl border border-hair bg-surface-2 px-3 py-2.5 text-sm font-medium text-fg transition-colors duration-200 hover:border-accent hover:text-accent-text"
          >
            {{ site.email }}
          </a>
          <button
            type="button"
            class="btn-outline btn-sm mt-2 w-full"
            :class="copied.email && '!border-ok !text-ok-text'"
            @click="copy(site.email, 'email')"
          >
            <AppIcon :name="copied.email ? 'check' : 'copy'" :size="3.5" :stroke-width="2" />
            {{ copied.email ? 'Copiado' : failed.email ? 'No se pudo copiar' : 'Copiar dirección' }}
          </button>
          <!-- El cambio de icono es visual; esto lo anuncia por voz -->
          <p class="sr-only" role="status" aria-live="polite">
            {{
              copied.email
                ? 'Correo copiado al portapapeles'
                : failed.email
                  ? 'No se pudo copiar el correo'
                  : ''
            }}
          </p>
        </div>

        <ul class="space-y-3 border-t border-hair pt-5 text-sm text-fg-muted">
          <li class="flex items-center gap-3">
            <AppIcon name="clock" :size="4" />
            <span>
              Respuesta en <strong class="font-semibold text-fg">{{ site.responseTime }}</strong>
            </span>
          </li>
          <li class="flex items-center gap-3">
            <AppIcon name="location" :size="4" />
            <span>{{ site.city }} · {{ site.workMode.toLowerCase() }}</span>
          </li>
        </ul>

        <div>
          <h2 class="label">También en</h2>
          <ul class="mt-3 space-y-2">
            <li v-for="link in profiles" :key="link.label">
              <a
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex min-h-11 items-center gap-3 rounded-xl border border-hair px-3 transition-colors duration-200 hover:border-accent"
              >
                <AppIcon
                  :name="link.icon"
                  :size="4"
                  class="text-fg-muted group-hover:text-accent-text"
                />
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-semibold text-fg group-hover:text-accent-text">
                    {{ link.label }}
                  </span>
                  <span class="block truncate text-xs text-fg-muted">{{ link.handle }}</span>
                </span>
                <AppIcon name="arrow-up-right" :size="4" class="text-fg-subtle" />
                <span class="sr-only">(abre en una pestaña nueva)</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <!-- ══════════ Formulario ══════════ -->
      <div v-reveal="80" class="space-y-6 md:col-span-3">
        <section class="card p-6 sm:p-8" aria-labelledby="form-title">
          <h2 id="form-title" class="text-lg font-bold text-fg">Escríbeme</h2>
          <p class="mt-1.5 text-sm text-fg-muted">
            Rellena lo básico y se abrirá tu programa de correo con el mensaje preparado. Sin
            formularios que se pierden ni datos guardados en ningún servidor.
          </p>

          <form class="mt-6 space-y-5" novalidate @submit.prevent="submit">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="c-name" class="text-sm font-medium text-fg">Nombre</label>
                <input
                  id="c-name"
                  v-model.trim="form.name"
                  type="text"
                  autocomplete="name"
                  class="input mt-1.5"
                  :aria-invalid="errors.name ? 'true' : undefined"
                  :aria-describedby="errors.name ? 'c-name-error' : undefined"
                />
                <p
                  v-if="errors.name"
                  id="c-name-error"
                  class="mt-1.5 text-[13px] text-red-600 dark:text-red-400"
                >
                  {{ errors.name }}
                </p>
              </div>

              <div>
                <label for="c-reason" class="text-sm font-medium text-fg">Motivo</label>
                <select id="c-reason" v-model="form.reason" class="input mt-1.5">
                  <option v-for="r in REASONS" :key="r" :value="r">{{ r }}</option>
                </select>
              </div>
            </div>

            <div>
              <label for="c-message" class="text-sm font-medium text-fg">Mensaje</label>
              <textarea
                id="c-message"
                v-model.trim="form.message"
                rows="6"
                class="input mt-1.5"
                placeholder="Cuéntame el contexto: qué necesitas, plazos y cualquier enlace útil."
                :aria-invalid="errors.message ? 'true' : undefined"
                :aria-describedby="errors.message ? 'c-message-error' : 'c-message-hint'"
              />
              <p
                v-if="errors.message"
                id="c-message-error"
                class="mt-1.5 text-[13px] text-red-600 dark:text-red-400"
              >
                {{ errors.message }}
              </p>
              <p v-else id="c-message-hint" class="mt-1.5 text-[13px] text-fg-subtle">
                Mínimo {{ MIN_MESSAGE }} caracteres.
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="submit" class="btn">
                <AppIcon name="send" :size="4" />
                Preparar email
              </button>
              <p class="text-[13px] text-fg-subtle">
                ¿Prefieres otro programa? Copia la dirección de la izquierda.
              </p>
            </div>
          </form>
        </section>

        <!-- Expectativas: qué pasa después de escribir -->
        <section class="card-muted p-6" aria-labelledby="next-title">
          <h2 id="next-title" class="flex items-center gap-2.5 text-sm font-semibold text-fg">
            <AppIcon name="chat" :size="4" class="text-accent-text" />
            Qué pasa cuando escribes
          </h2>
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
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive } from 'vue'
import PageHeader from '@/components/common/PageHeader.vue'
import AppIcon from '@/components/common/AppIcon.vue'
import { useSeo } from '@/composables/useSeo'
import { useClipboard } from '@/composables/useClipboard'
import { vReveal } from '@/directives/reveal'
import { site } from '@/data/site'
import { socialLinks } from '@/data/social'
import { PAGES } from '@/config/seo'

useSeo(PAGES.contact)

const profiles = socialLinks.filter((l) => l.external)

const REASONS = ['Oferta de empleo', 'Proyecto freelance', 'Colaboración', 'Otro'] as const
const MIN_MESSAGE = 20

const form = reactive({ name: '', reason: REASONS[0] as string, message: '' })
const errors = reactive<{ name?: string; message?: string }>({})

/**
 * Sin backend: el formulario compone un mailto con asunto y cuerpo y lo
 * abre en el cliente de correo. Valida antes para no abrir un email vacío.
 */
async function submit(e: Event) {
  errors.name = form.name ? undefined : 'Dime cómo te llamas.'
  errors.message =
    form.message.length >= MIN_MESSAGE
      ? undefined
      : `Cuéntame un poco más (mínimo ${MIN_MESSAGE} caracteres).`

  if (errors.name || errors.message) {
    await nextTick()
    const firstInvalid = (e.target as HTMLFormElement).querySelector<HTMLElement>(
      '[aria-invalid="true"]'
    )
    firstInvalid?.focus()
    return
  }

  const subject = `${form.reason} — ${form.name}`
  const body = `${form.message}\n\n— ${form.name}`
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const expectations = [
  `Te confirmo que lo he recibido en un plazo de ${site.responseTime}.`,
  'Si encaja, te propongo una llamada corta para entender el alcance.',
  'Te mando una estimación honesta de tiempo, no una cifra inflada.',
]

const { copied, failed, copy } = useClipboard()
</script>
