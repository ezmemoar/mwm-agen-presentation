<script setup lang="ts">
/**
 * Brochure artwork. Unlike the photographs it is never cropped — the plate
 * carries the brass keyline instead, so the poster reads exactly as printed and
 * every package slide shows one at the same height.
 */
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div class="plate">
    <img :src="src" :alt="alt" class="plate__img">
  </div>
</template>
