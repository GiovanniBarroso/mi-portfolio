<template>
  <div
    class="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100"
  >
    <Navbar />
    <main class="flex-1 pt-20">
      <!-- margen por navbar fijo -->
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>
