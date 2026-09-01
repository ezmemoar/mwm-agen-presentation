<script setup lang="ts">
import type { PackageSpec } from '../../data/packages'

/** Four facts, same four cells, same order — on all three package slides. */
defineProps<{ specs: PackageSpec[] }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-x-6">
    <div v-for="spec in specs" :key="spec.label" class="spec">
      <p class="spec__label flex items-center gap-1.5">
        <span class="spec__icon" :class="spec.icon" aria-hidden="true" />
        {{ spec.label }}
      </p>
      <p class="spec__value mt-1">{{ spec.value }}</p>
      <p class="mt-0.5 text-[0.68rem] opacity-60">{{ spec.note }}</p>
    </div>
  </div>
</template>
