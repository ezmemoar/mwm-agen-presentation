---
layout: deck-dark
---

<script setup lang="ts">
import { galleryItems } from '../data/gallery'
</script>

<SlideHeading eyebrow="Dokumentasi" title="Momen Perjalanan Jemaah Kami" subtitle="Sebagian dokumentasi jemaah selama beribadah di Tanah Suci bersama kami." index="04" class="mb-7" />

<BentoGallery v-reveal="1" :items="galleryItems" />
