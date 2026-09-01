<script setup lang="ts">
import { toRef } from 'vue'
import type { Office } from '../../data/company'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/**
 * The two offices as stops on one line rather than two cards: the network is a
 * route Jakarta → Sukabumi, and the rail says that where a pair of boxes cannot.
 */
const props = defineProps<{ offices: Office[], variant?: SlideVariant }>()
const { muted, subtle, accent } = useTone(toRef(props, 'variant'))
</script>

<template>
  <div class="rail grid grid-cols-2 gap-x-14">
    <div
      v-for="(office, i) in offices"
      :key="office.city"
      v-reveal="i + 1"
      class="rail-stop pr-6"
      :class="office.kind === 'Kantor Pusat' && 'rail-stop--filled'"
    >
      <p class="eyebrow" :class="accent">{{ office.kind }}</p>

      <h3 class="font-display mt-2 text-[2.4rem] leading-none font-semibold -tracking-[0.02em]">
        {{ office.city }}
      </h3>
      <p class="mt-1.5 text-[0.7rem] tracking-[0.16em] uppercase" :class="subtle">{{ office.region }}</p>

      <p class="mt-5 max-w-[30ch] text-[0.88rem] leading-relaxed" :class="muted">{{ office.address }}</p>

      <p v-if="office.phone" class="mt-5 flex items-center gap-2 text-[0.95rem] font-semibold">
        <span class="i-heroicons-phone text-gold" aria-hidden="true" />
        {{ office.phone }}
      </p>
      <p v-else-if="office.note" class="mt-5 flex items-start gap-2 text-[0.82rem]" :class="subtle">
        <span class="i-heroicons-map-pin mt-0.5 text-gold" aria-hidden="true" />
        {{ office.note }}
      </p>
    </div>
  </div>
</template>
