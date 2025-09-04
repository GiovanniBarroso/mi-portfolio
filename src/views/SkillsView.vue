<template>
  <section class="container py-20">
    <SectionTitle title="Skills" subtitle="Tecnologías y herramientas que manejo" />

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(group, category) in skills"
        :key="category"
        v-motion
        class="card p-6"
        :initial="{ opacity: 0, y: 12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1400 } }"
      >
        <h3 class="text-base font-semibold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}
        </h3>
        <div class="flex flex-wrap gap-2">
          <SkillBadge v-for="s in group" :key="s" :label="s as string" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import SkillBadge from '@/components/common/SkillBadge.vue'
import { skills } from '@/data/skills'
import { useSeo } from '@/composables/useSeo'

const seo = useSeo()
seo({
  title: 'Skills',
  description:
    'Tecnologías y herramientas: Vue, TypeScript, Tailwind, testing, CI/CD y mejores prácticas.',
})
</script>

<style scoped>
.card {
  @apply rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-black/30;
}
</style>
