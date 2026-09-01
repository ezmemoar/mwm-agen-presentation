---
layout: deck-cover
photo: pilgrims
photoAlt: Jemaah di Masjidil Haram, Makkah
---

<script setup lang="ts">
import { company, contacts } from '../data/company'
</script>

<UiChip v-reveal tone="primary">Mari Berjalan Bersama</UiChip>

<h2 v-reveal="1" class="font-display text-[3.4rem] leading-tight font-semibold">Mari Berjalan Bersama Kami</h2>

<p v-reveal="2" class="max-w-xl text-lg text-white/75">Kami terbuka untuk mitra agen baru di seluruh Indonesia. Yuk, ngobrol dulu — tidak ada paksaan, hanya kesempatan.</p>

<div v-reveal="3" class="mt-2 flex flex-wrap items-center justify-center gap-3">
  <ContactPill v-for="contact in contacts" :key="contact.label" :contact="contact" />
</div>

<p v-reveal="4" class="mt-4 text-xs tracking-wide text-white/40">{{ company.legalName }} · {{ company.tagline }} · {{ company.headOffice }}</p>
