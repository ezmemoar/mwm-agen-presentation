---
# https://sli.dev/guide/syntax
theme: default
title: PT Mitra Wisata Mandiri — Company Profile & Kemitraan Agen
info: |
  ## PT Mitra Wisata Mandiri
  Company profile & penawaran kemitraan agen untuk travel umroh dan haji plus
  berizin PPIU.
author: PT Mitra Wisata Mandiri
lang: id
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Plus Jakarta Sans
  serif: Fraunces
  weights: '400,500,600,700,800'
transition: fade
mdc: true
drawings:
  persist: false
layout: deck-cover
photo: kaabaAerial
photoAlt: Kakbah dan pelataran Masjidil Haram dilihat dari atas
hint: true
---

<!--
  Slide 00 — Cover.
  Slide bodies live in `pages/`; this file only carries the deck config and the
  opening slide. Copy lives in `data/`, presentation in `components/`.
-->

<p v-reveal class="eyebrow flex items-center gap-3 text-gold-300">
  <span class="gold-rule inline-block w-8 rotate-180" aria-hidden="true"></span>
  Company Profile · Kemitraan Agen
  <span class="gold-rule inline-block w-8" aria-hidden="true"></span>
</p>

<h1 v-reveal="1" class="font-display text-[4.4rem] leading-[1.0] font-semibold -tracking-[0.03em]">
  PT Mitra Wisata<br>Mandiri
</h1>

<p v-reveal="2" class="max-w-[36ch] text-[1.05rem] leading-relaxed text-white/75">
  Mitra ibadah Anda menuju Baitullah — **melayani** perjalanan umroh dan haji plus
  dengan sepenuh hati, sejak <span class="font-semibold text-gold-200">12 tahun</span> lalu.
</p>

<p v-reveal="3" class="eyebrow mt-1 text-white/40">
  Disusun untuk calon mitra agen di seluruh Indonesia
</p>

---
src: ./pages/01-tentang-kami.md
---

---
src: ./pages/02-jaringan-kantor.md
---

---
src: ./pages/03-kredibilitas.md
---

---
src: ./pages/04-dokumentasi.md
---

---
src: ./pages/05-paket-barokah-9.md
---

---
src: ./pages/06-paket-umroh-13.md
---

---
src: ./pages/07-paket-barokah-9-waris.md
---

---
src: ./pages/08-kemitraan-agen.md
---

---
src: ./pages/09-penutup.md
---
