---
layout: deck-dark
photo: haram
photoAlt: Masjidil Haram, Makkah
---

<script setup lang="ts">
import { agentBenefits } from '../data/company'
</script>

<SlideHeading eyebrow="Kemitraan" title="Dua Hal yang Anda Dapat" subtitle="Bergabung bersama kami itu ringan — Anda cukup menawarkan, sisanya biar kami yang urus." index="08" class="mb-8" />

<div>
  <BenefitRow v-for="(benefit, i) in agentBenefits" :key="benefit.step" v-reveal="i + 1" :benefit="benefit" />
</div>
