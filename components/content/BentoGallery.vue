<script setup lang="ts">
import type { BentoItem } from '../../data/gallery'

defineProps<{ items: BentoItem[] }>()
</script>

<template>
  <div class="bento">
    <template v-for="(item, i) in items" :key="i">
      <figure
        class="bento-tile"
        :class="[`bento-tile--${item.tile}`, item.arch && 'bento-tile--arch']"
      >
        <img :src="item.src" :alt="item.alt">
        <figcaption v-if="item.caption" class="bento-tile__caption">{{ item.caption }}</figcaption>
      </figure>
    </template>
  </div>
</template>
