<script setup lang="ts">
import { toRef } from 'vue'
import type { PackageFeature } from '../../data/packages'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = withDefaults(defineProps<{
  features: PackageFeature[]
  /** Two-up grid for the longer lists. */
  columns?: 1 | 2
  variant?: SlideVariant
}>(), {
  columns: 1,
})

const { pkgItem } = useTone(toRef(props, 'variant'))
</script>

<template>
  <ul :class="columns === 2 ? 'grid grid-cols-2 gap-x-6' : 'flex flex-col'">
    <li v-for="feature in features" :key="feature.text" :class="pkgItem">
      <span class="pkg-item__icon" :class="feature.icon" aria-hidden="true" />
      <span class="text-[0.82rem] leading-snug">{{ feature.text }}</span>
    </li>
  </ul>
</template>
