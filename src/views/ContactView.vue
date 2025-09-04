<template>
  <section class="container py-20" aria-labelledby="contact-title">
    <SectionTitle
      id="contact-title"
      title="Contacto"
      subtitle="¿Tienes una idea o proyecto? ¡Conversemos!"
    />

    <div class="grid md:grid-cols-2 gap-10 mt-10">
      <!-- Formulario -->
      <form
        v-motion
        :initial="{ opacity: 0, x: -24 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 400 } }"
        class="card p-8 grid gap-4 transition hover:scale-[1.01] hover:shadow-xl"
        novalidate
        aria-describedby="contact-help"
        @submit.prevent="onSubmit"
      >
        <!-- anti-bot honeypot -->
        <input
          v-model="hp"
          type="text"
          class="hidden"
          aria-hidden="true"
          tabindex="-1"
          autocomplete="off"
        />

        <label class="sr-only" for="name">Tu nombre</label>
        <input
          id="name"
          v-model.trim="name"
          type="text"
          placeholder="Tu nombre"
          class="input-field"
          :aria-invalid="!isValidName || undefined"
          :aria-describedby="!isValidName ? 'err-name' : undefined"
          required
        />
        <p v-if="touched && !isValidName" id="err-name" class="text-sm text-red-600">
          Escribe tu nombre (mínimo 2 caracteres).
        </p>

        <label class="sr-only" for="email">Tu correo</label>
        <input
          id="email"
          v-model.trim="email"
          type="email"
          placeholder="Tu correo"
          class="input-field"
          :aria-invalid="!isValidEmail || undefined"
          :aria-describedby="!isValidEmail ? 'err-email' : undefined"
          required
        />
        <p v-if="touched && !isValidEmail" id="err-email" class="text-sm text-red-600">
          Introduce un correo válido.
        </p>

        <label class="sr-only" for="message">Tu mensaje</label>
        <textarea
          id="message"
          v-model.trim="message"
          placeholder="Tu mensaje"
          rows="5"
          class="input-field"
          :aria-invalid="!isValidMessage || undefined"
          :aria-describedby="!isValidMessage ? 'err-message' : undefined"
          required
        ></textarea>
        <p v-if="touched && !isValidMessage" id="err-message" class="text-sm text-red-600">
          Cuéntame un poco más (mínimo 10 caracteres).
        </p>

        <p id="contact-help" class="text-xs text-zinc-500 dark:text-zinc-400">
          Respondo en 24–48h. También puedes escribirme por email o redes.
        </p>

        <button
          type="submit"
          class="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
          :disabled="submitting || !formOk"
        >
          {{ submitting ? 'Preparando correo…' : 'Enviar mensaje' }}
        </button>

        <p v-if="status === 'sent'" class="text-sm text-emerald-600">
          Abriendo tu cliente de correo… si no se abre, envíame tu mensaje a
          <a class="link" :href="mailtoHref">{{ toEmail }}</a>
        </p>
        <p v-if="status === 'error'" class="text-sm text-red-600">
          Algo no fue lekker. Puedes escribirme directamente a
          <a class="link" :href="mailtoHref">{{ toEmail }}</a>
        </p>
      </form>

      <!-- Redes y contacto alternativo -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 24 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 400, delay: 120 } }"
        class="card p-8 transition hover:scale-[1.01] hover:shadow-xl"
      >
        <h3 class="text-2xl font-semibold mb-4">Redes y correo</h3>
        <p class="text-zinc-700 dark:text-zinc-300 mb-4">
          También puedes contactarme por mis redes:
        </p>
        <ul class="space-y-3">
          <li>
            <a class="link hover:underline" :href="mailtoHref">{{ toEmail }}</a>
          </li>
          <li>
            <a
              class="link hover:underline"
              href="https://github.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
          </li>
          <li>
            <a
              class="link hover:underline"
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              >LinkedIn</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useSeo } from '@/composables/useSeo'

const seo = useSeo()
seo({
  title: 'Contacto',
  description:
    '¿Tienes una idea o proyecto? Escríbeme para colaborar en tu próximo desarrollo web.',
})

/** Config editable */
const toEmail = 'tuemail@example.com'
const subjectBase = 'Contacto desde el portfolio'

/** State */
const name = ref('')
const email = ref('')
const message = ref('')
const hp = ref('') // honeypot
const touched = ref(false)
const submitting = ref(false)
const status = ref<'idle' | 'sent' | 'error'>('idle')

/** Validación */
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isValidName = computed(() => name.value.length >= 2)
const isValidEmail = computed(() => emailRe.test(email.value))
const isValidMessage = computed(() => message.value.length >= 10)
const formOk = computed(() => isValidName.value && isValidEmail.value && isValidMessage.value)

/** Mailto helper */
const mailtoHref = computed(() => {
  const subject = encodeURIComponent(subjectBase)
  const body = encodeURIComponent(
    `Nombre: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
  )
  return `mailto:${toEmail}?subject=${subject}&body=${body}`
})

async function onSubmit() {
  touched.value = true
  status.value = 'idle'
  if (hp.value) return // bot
  if (!formOk.value) return

  try {
    submitting.value = true
    // Redirección mailto (cliente de correo del usuario)
    window.location.href = mailtoHref.value
    status.value = 'sent'
  } catch (e) {
    status.value = 'error'
  } finally {
    submitting.value = false
  }
}
</script>
