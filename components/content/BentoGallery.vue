<script setup lang="ts">
import type { BentoItem } from '../../data/gallery'

defineProps<{ items: BentoItem[] }>()
</script>

<template>
  <div class="bento">
    <template v-for="(item, i) in items" :key="i">
      <div v-if="item.type === 'note'" class="bento-note" :class="item.span">
        <span class="font-display text-[1.7rem] leading-none font-semibold">{{ item.headline }}</span>
        <span class="mt-1.5 text-[0.68rem] leading-snug text-white/75">{{ item.body }}</span>
      </div>

      <figure v-else class="bento-tile" :class="[item.span, item.arch && 'bento-tile--arch']">
        <img :src="item.src" :alt="item.alt">
        <figcaption v-if="item.caption" class="bento-tile__caption">{{ item.caption }}</figcaption>
      </figure>
    </template>
  </div>
</template>
