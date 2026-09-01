<script setup lang="ts">
import { toRef } from 'vue'
import type { Credential } from '../../data/company'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = defineProps<{ credential: Credential, variant?: SlideVariant }>()
const { muted } = useTone(toRef(props, 'variant'))
</script>

<template>
  <div class="flex items-center gap-3">
    <LogoPlate
      class="h-14 w-[3.6rem] flex-shrink-0"
      :logo="credential.logo"
      :alt="`Logo ${credential.full}`"
      :mark="credential.mark"
      :variant="variant"
    />
    <div class="min-w-0">
      <p class="text-[0.74rem] leading-tight font-extrabold tracking-wide">{{ credential.mark }}</p>
      <p class="mt-0.5 text-[0.68rem] leading-tight" :class="muted">{{ credential.name }}</p>
    </div>
  </div>
</template>
