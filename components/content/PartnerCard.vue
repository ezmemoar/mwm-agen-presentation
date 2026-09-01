<script setup lang="ts">
import { toRef } from 'vue'
import type { Partner } from '../../data/company'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = defineProps<{ partner: Partner, variant?: SlideVariant }>()
const { accent } = useTone(toRef(props, 'variant'))
</script>

<template>
  <div class="flex flex-col">
    <LogoPlate
      class="h-[6.6rem] w-full"
      :logo="partner.logo"
      :alt="`Logo ${partner.org}`"
      :mark="partner.mark"
      :variant="variant"
    />
    <p class="eyebrow mt-3.5" :class="accent">{{ partner.org }}</p>
    <p class="font-display mt-1.5 text-[1.02rem] leading-tight font-semibold">{{ partner.name }}</p>
  </div>
</template>
