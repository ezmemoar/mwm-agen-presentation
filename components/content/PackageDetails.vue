<script setup lang="ts">
import { computed } from 'vue'
import { findPackage, packageSpecs } from '../../data/packages'
import { useTone } from '../../composables/useTone'

const props = defineProps<{
  /** Key from `data/packages.ts`, e.g. `barokah-9`. */
  id: string
}>()

const pkg = computed(() => findPackage(props.id))
const specs = computed(() => packageSpecs(pkg.value))
const { muted, subtle, accent } = useTone()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h2 class="font-display text-[2.15rem] leading-none font-semibold -tracking-[0.025em]">
        {{ pkg.title }}
      </h2>
      <p class="mt-2 max-w-[46ch] text-[0.86rem] leading-relaxed" :class="muted">{{ pkg.lead }}</p>
    </div>

    <div class="flex items-end justify-between gap-6 border-t border-gold/45 pt-3">
      <PriceTag :price="pkg.price" />

      <div v-if="pkg.departures.length" class="text-right">
        <p class="eyebrow mb-1.5" :class="accent">Keberangkatan</p>
        <div class="flex flex-wrap justify-end gap-1.5">
          <UiChip v-for="date in pkg.departures" :key="date">{{ date }}</UiChip>
        </div>
      </div>
    </div>

    <PackageSpecs :specs="specs" />

    <div>
      <p class="eyebrow mb-1" :class="accent">Termasuk dalam paket</p>
      <PackageFeatureList :features="pkg.includes" :columns="pkg.includes.length > 2 ? 2 : 1" />
    </div>

    <div v-if="pkg.upgrades" class="grid grid-cols-2 gap-x-6">
      <div v-for="upgrade in pkg.upgrades" :key="upgrade.label" class="border-t border-gold/45 pt-2.5">
        <p class="text-[0.68rem] leading-snug" :class="subtle">{{ upgrade.label }}</p>
        <p class="font-display mt-0.5 text-[0.98rem] font-bold" :class="accent">{{ upgrade.price }}</p>
      </div>
    </div>

    <PriceDisclaimer />
  </div>
</template>
