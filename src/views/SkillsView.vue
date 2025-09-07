<template>
  <section
    class="py-20 border-b border-zinc-800/50 dark:border-zinc-200/40"
    aria-labelledby="skills-title"
  >
    <SectionTitle
      id="skills-title"
      title="Skills"
      subtitle="Tecnologías y herramientas que manejo"
    />

    <div class="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(levels, category, i) in skills"
        :key="category"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 350, delay: withStagger(i, 120).delay },
        }"
        class="card p-6 transition hover:scale-[1.02] hover:shadow-lg"
      >
        <h3 class="text-base font-semibold border-b border-zinc-200 dark:border-zinc-700 pb-2 mb-3">
          {{ category }}
        </h3>

        <div v-for="(group, level) in levels" :key="level" class="mb-3">
          <p class="text-xs font-medium text-zinc-400 dark:text-zinc-500 mb-1">
            {{ level }}
          </p>
          <div class="flex flex-wrap gap-2">
            <SkillBadge v-for="s in group" :key="s" :label="s as string" />
          </div>
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
import { withStagger } from '@/composables/motionPresets'

const seo = useSeo()
seo({
  title: 'Skills',
  description:
    'Tecnologías y herramientas: Vue, TypeScript, Tailwind, testing, CI/CD y mejores prácticas.',
})
</script>
