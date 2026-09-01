<script setup lang="ts">
import { toRef } from 'vue'
import { priceDisclaimer } from '../../data/packages'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = defineProps<{ variant?: SlideVariant }>()
const { subtle } = useTone(toRef(props, 'variant'))
</script>

<template>
  <p class="max-w-md text-[0.65rem] leading-relaxed" :class="subtle">
    {{ priceDisclaimer }}
  </p>
</template>
