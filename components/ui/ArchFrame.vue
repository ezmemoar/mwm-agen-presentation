<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt: string
  /** The brass hairline that traces the arch, offset outward. */
  ring?: boolean
  glow?: boolean
}>(), {
  ring: true,
  glow: true,
})
</script>

<template>
  <figure class="arch">
    <div v-if="glow" class="arch__glow" aria-hidden="true" />
    <div v-if="ring" class="arch__ring" aria-hidden="true" />
    <img :src="src" :alt="alt" class="arch__img">
  </figure>
</template>
