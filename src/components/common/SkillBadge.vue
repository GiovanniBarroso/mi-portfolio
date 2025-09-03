<template>
  <span class="tag" :data-aos="aos">{{ label }}</span>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  aos?: string;
}
withDefaults(defineProps<Props>(), { aos: "zoom-in" });
</script>
