<template>
  <ul class="flex flex-wrap gap-1.5" :aria-label="label">
    <li v-for="t in leading" :key="t" class="tag tag-sm">{{ t }}</li>
    <!-- La última visible y el «+N» van juntas: si la fila no cabe, bajan
         las dos y el contador nunca se queda solo en otra línea -->
    <li v-if="last" class="flex gap-1.5">
      <span class="tag tag-sm">{{ last }}</span>
      <span v-if="hidden.length" class="tag tag-sm text-fg-subtle" :title="hidden.join(', ')">
        <span aria-hidden="true">+{{ hidden.length }}</span>
        <span class="sr-only">y {{ hidden.length }} más: {{ hidden.join(', ') }}</span>
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/** Tecnologías de un proyecto en una línea; el stack entero está en su ficha. */
const props = withDefaults(defineProps<{ techs: string[]; max?: number; label: string }>(), {
  max: 4,
})

const visible = computed(() => props.techs.slice(0, props.max))
const hidden = computed(() => props.techs.slice(props.max))
const leading = computed(() => visible.value.slice(0, -1))
const last = computed(() => visible.value.at(-1))
</script>
