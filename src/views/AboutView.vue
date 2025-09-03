<template>
  <section class="container py-20">
    <SectionTitle
      title="Sobre mí"
      subtitle="Conoce un poco sobre mi experiencia y metodología"
    />

    <div class="grid md:grid-cols-3 gap-8 items-start">
      <!-- Perfil -->
      <div
        class="card p-8 transform transition hover:scale-105 hover:shadow-xl"
        data-aos="fade-right"
      >
        <img
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="Avatar"
          class="w-32 h-32 rounded-2xl object-cover mb-6 border-4 border-yellow-300"
        />
        <h3 class="text-3xl font-bold mb-2">[Tu Nombre]</h3>
        <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          Desarrollador web especializado en frontend y experiencia de usuario.
          Apasionado por interfaces limpias, performance y código mantenible.
        </p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span class="tag">Gandía</span>
          <span class="tag">Remoto</span>
          <span class="tag">Freelance</span>
        </div>
      </div>

      <!-- Detalles y metodología -->
      <div
        class="md:col-span-2 card p-8 transform transition hover:scale-105 hover:shadow-xl"
        data-aos="fade-left"
      >
        <h4 class="text-2xl font-semibold mb-3">Metodología</h4>
        <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
          Trabajo con componentes bien definidos, TypeScript para tipado estricto
          y Tailwind CSS para estilos eficientes. Priorizo accesibilidad, testing
          y arquitectura escalable.
        </p>

        <h4 class="text-2xl font-semibold mb-3">Logros destacados</h4>
        <ul class="list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>SPA con autenticación JWT y pagos integrados.</li>
          <li>Integración CI/CD con despliegues automatizados.</li>
          <li>Diseño responsive y accesible siguiendo WCAG AA.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
</script>
