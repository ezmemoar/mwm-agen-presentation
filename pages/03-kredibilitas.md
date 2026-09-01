---
layout: deck-light
---

<script setup lang="ts">
import { partners } from '../data/company'
</script>

<SlideHeading eyebrow="Kredibilitas" title="Dipercaya oleh Berbagai Lembaga" subtitle="Sejumlah instansi dan lembaga keagamaan telah mempercayakan perjalanan ibadah jemaahnya bersama kami." index="03" class="mb-10" />

<div class="grid grid-cols-5 gap-6">
  <PartnerCard v-for="(partner, i) in partners" :key="partner.mark" v-reveal="i + 1" :partner="partner" />
</div>
