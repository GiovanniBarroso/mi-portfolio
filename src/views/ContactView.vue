<template>
  <section
    class="py-20 border-b border-zinc-800/50 dark:border-zinc-200/40"
    aria-labelledby="contact-title"
  >
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
        <!-- Honeypot -->
        <input
          v-model="hp"
          type="text"
          class="hidden"
          aria-hidden="true"
          tabindex="-1"
          autocomplete="off"
        />

        <!-- Nombre -->
        <div>
          <label class="sr-only" for="name">Tu nombre</label>
          <input
            id="name"
            v-model.trim="name"
            type="text"
            placeholder="Tu nombre"
            class="input-field"
            :aria-invalid="(touched && !isValidName) || undefined"
            :aria-describedby="!isValidName ? 'err-name' : undefined"
            required
          />
          <p v-if="touched && !isValidName" id="err-name" class="text-sm text-red-500 mt-1">
            Escribe tu nombre (mínimo 2 caracteres).
          </p>
        </div>

        <!-- Email -->
        <div>
          <label class="sr-only" for="email">Tu correo</label>
          <input
            id="email"
            v-model.trim="email"
            type="email"
            placeholder="Tu correo"
            class="input-field"
            :aria-invalid="(touched && !isValidEmail) || undefined"
            :aria-describedby="!isValidEmail ? 'err-email' : undefined"
            required
          />
          <p v-if="touched && !isValidEmail" id="err-email" class="text-sm text-red-500 mt-1">
            Introduce un correo válido.
          </p>
        </div>

        <!-- Mensaje -->
        <div>
          <label class="sr-only" for="message">Tu mensaje</label>
          <textarea
            id="message"
            v-model.trim="message"
            placeholder="Tu mensaje"
            rows="5"
            class="input-field resize-none"
            :aria-invalid="(touched && !isValidMessage) || undefined"
            :aria-describedby="!isValidMessage ? 'err-message' : undefined"
            required
          ></textarea>
          <p v-if="touched && !isValidMessage" id="err-message" class="text-sm text-red-500 mt-1">
            Cuéntame un poco más (mínimo 10 caracteres).
          </p>
        </div>

        <!-- Info -->
        <p id="contact-help" class="text-xs text-zinc-400 dark:text-zinc-500">
          Respondo en 24–48h. También puedes escribirme por email o redes.
        </p>

        <!-- Botón -->
        <button
          type="submit"
          class="w-full flex items-center justify-center gap-2 rounded-xl font-semibold px-6 py-3 bg-brand-500 text-white hover:bg-brand-600 dark:bg-brand-600 dark:hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
          :disabled="submitting || !formOk"
        >
          <span
            v-if="submitting"
            class="animate-spin w-4 h-4 border-2 border-current border-r-transparent rounded-full"
          ></span>
          {{ submitting ? 'Preparando correo…' : 'Enviar mensaje' }}
        </button>

        <!-- Estado -->
        <p v-if="status === 'sent'" class="text-sm text-emerald-500 mt-2 transition">
          Abriendo tu cliente de correo… Si no se abre, envíame tu mensaje a
          <a class="link" :href="mailtoHref">{{ toEmail }}</a>
        </p>
        <p v-if="status === 'error'" class="text-sm text-red-500 mt-2 transition">
          Algo no fue bien. Escríbeme directamente a
          <a class="link" :href="mailtoHref">{{ toEmail }}</a>
        </p>
      </form>

      <!-- Redes -->
      <div
        v-motion
        :initial="{ opacity: 0, x: 24 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 400, delay: 120 } }"
        class="card p-8 transition hover:scale-[1.01] hover:shadow-xl"
      >
        <h3 class="text-2xl font-semibold mb-4">Redes y correo</h3>
        <p class="text-zinc-300 dark:text-zinc-700 mb-4">
          También puedes contactarme directamente:
        </p>
        <ul class="space-y-3">
          <li>
            <a class="link hover:underline" :href="mailtoHref">{{ toEmail }}</a>
          </li>
          <li>
            <a
              class="link hover:underline"
              href="https://github.com/GiovanniBarroso"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
          </li>
          <li>
            <a
              class="link hover:underline"
              href="https://www.linkedin.com/in/giovannibarroso"
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

/** Config */
const toEmail = 'giovanni.barroso.dev@gmail.com'
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
    window.location.href = mailtoHref.value
    status.value = 'sent'
  } catch (e) {
    status.value = 'error'
  } finally {
    submitting.value = false
  }
}
</script>
