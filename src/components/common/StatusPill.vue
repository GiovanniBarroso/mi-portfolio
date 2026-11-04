<template>
  <span class="status-pill">
    <AppIcon v-if="meta.icon" :name="meta.icon" :size="3" :stroke-width="2" class="text-fg-muted" />
    <span v-else class="h-1.5 w-1.5 rounded-full" :class="meta.dot" aria-hidden="true" />
    {{ meta.label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import type { Project } from '@/types/portfolio'
import { projectStatus, STATUS_META } from '@/utils/project'

const props = defineProps<{ project: Project }>()
const meta = computed(() => STATUS_META[projectStatus(props.project)])
</script>
