---
layout: deck-light
---

<script setup lang="ts">
import { credentials, stats } from '../data/company'
import { photos } from '../data/images'
</script>

<!-- A blank line inside an HTML block ends it for markdown-it and the indented
     continuation becomes a code fence, so each block below stays contiguous. -->

<SlideHeading eyebrow="Tentang Kami" title="Perjalanan yang Sudah Kami Tempuh Bersama Jemaah" index="01" class="mb-6" />

<div class="grid grid-cols-[1fr_0.58fr] items-start gap-12">
  <div>
    <p v-reveal="1" class="mb-6 max-w-[54ch] text-[0.95rem] leading-relaxed text-ink-600">
      Kami adalah travel umroh berizin <strong class="text-ink">PPIU</strong> (Penyelenggara
      Perjalanan Ibadah Umrah) resmi, yang telah berpengalaman menjadi biro perjalanan
      wisata, umroh, dan haji bagi ribuan keluarga di seluruh Indonesia.
    </p>
    <div v-reveal="2" class="grid grid-cols-2 gap-x-8 gap-y-6">
      <StatCounter v-for="stat in stats" :key="stat.label" v-bind="stat" />
    </div>
  </div>
  <ArchFrame v-reveal="2" class="h-[21rem] w-full" :src="photos.kaaba" alt="Kakbah, Masjidil Haram, Makkah" />
</div>

<div v-reveal="3" class="mt-7">
  <p class="eyebrow mb-3 flex items-center gap-2.5 text-gold-600">
    <span class="gold-rule inline-block w-7" aria-hidden="true"></span>
    Terdaftar &amp; diawasi oleh
  </p>
  <div class="grid grid-cols-4 gap-5">
    <CredentialBadge v-for="item in credentials" :key="item.mark" :credential="item" />
  </div>
</div>
