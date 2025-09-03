<template>
  <section class="relative hero-gradient text-white overflow-hidden">
    <!-- Fondos decorativos -->
    <div
      class="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
    ></div>
    <div
      class="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
    ></div>

    <div
      class="container min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center py-20"
    >
      <!-- Tag destacado -->
      <span
        class="tag bg-white/20 text-white border border-white/30 px-4 py-1 text-sm font-medium transition hover:bg-white/30 hover:scale-105"
        data-aos="zoom-in"
      >
        Disponible para colaborar
      </span>

      <!-- Título principal -->
      <h1
        class="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        data-aos="fade-up"
      >
        Hola, soy <span class="text-yellow-300">[Tu Nombre]</span>
      </h1>

      <!-- Subtítulo -->
      <p
        class="mt-4 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Desarrollador Web — Vue, TypeScript y Tailwind. Apasionado por crear
        interfaces limpias, rápidas y accesibles.
      </p>

      <!-- Botones CTA -->
      <div
        class="mt-8 flex flex-wrap items-center justify-center gap-3"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <RouterLink
          to="/projects"
          class="btn-primary px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition hover:scale-105"
        >
          Ver mis proyectos 🚀
        </RouterLink>
        <RouterLink
          to="/contact"
          class="btn-outline px-6 py-3 rounded-xl font-semibold border-white/60 text-white hover:bg-white/10 transform transition hover:scale-105"
        >
          Contactar
        </RouterLink>
      </div>

      <!-- Tags de tecnologías -->
      <div
        class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <span
          class="tag bg-white/15 text-white border border-white/20 px-3 py-1 rounded-full transition hover:bg-white/25 hover:scale-105"
          >Vue</span
        >
        <span
          class="tag bg-white/15 text-white border border-white/20 px-3 py-1 rounded-full transition hover:bg-white/25 hover:scale-105"
          >TypeScript</span
        >
        <span
          class="tag bg-white/15 text-white border border-white/20 px-3 py-1 rounded-full transition hover:bg-white/25 hover:scale-105"
          >Tailwind</span
        >
        <span
          class="tag bg-white/15 text-white border border-white/20 px-3 py-1 rounded-full transition hover:bg-white/25 hover:scale-105"
          >Python</span
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({ duration: 700, once: true, easing: "ease-out-cubic", offset: 80 });
});
</script>
