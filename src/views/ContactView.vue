<template>
  <section class="container py-20">
    <SectionTitle
      title="Contacto"
      subtitle="¿Tienes una idea o proyecto? ¡Conversemos!"
    />

    <div class="grid md:grid-cols-2 gap-10">
      <!-- Formulario -->
      <form
        @submit.prevent="submit"
        class="card p-8 grid gap-4 transform transition hover:scale-105 hover:shadow-xl"
        data-aos="fade-right"
      >
        <input
          v-model="name"
          type="text"
          placeholder="Tu nombre"
          class="input-field"
          required
        />
        <input
          v-model="email"
          type="email"
          placeholder="Tu correo"
          class="input-field"
          required
        />
        <textarea
          v-model="message"
          placeholder="Tu mensaje"
          rows="5"
          class="input-field"
          required
        ></textarea>
        <button type="submit" class="btn-primary w-full">Enviar mensaje</button>
      </form>

      <!-- Redes y contacto alternativo -->
      <div
        class="card p-8 transform transition hover:scale-105 hover:shadow-xl"
        data-aos="fade-left"
      >
        <h3 class="text-2xl font-semibold mb-4">Redes y correo</h3>
        <p class="text-zinc-700 dark:text-zinc-300 mb-4">
          También puedes contactarme por mis redes:
        </p>
        <ul class="space-y-3">
          <li>
            <a class="link hover:underline" href="mailto:tuemail@example.com"
              >tuemail@example.com</a
            >
          </li>
          <li>
            <a
              class="link hover:underline"
              href="https://github.com/tuusuario"
              target="_blank"
              >GitHub</a
            >
          </li>
          <li>
            <a
              class="link hover:underline"
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              >LinkedIn</a
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "@/components/common/SectionTitle.vue";

const name = ref("");
const email = ref("");
const message = ref("");

function submit() {
  const subject = encodeURIComponent("Contacto desde el portfolio");
  const body = encodeURIComponent(
    `Nombre: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
  );
  window.location.href = `mailto:tuemail@example.com?subject=${subject}&body=${body}`;
}
</script>
