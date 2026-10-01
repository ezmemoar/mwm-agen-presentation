---
layout: deck-dark
photo: nabawi
photoAlt: Masjid Nabawi, Madinah
---

<script setup lang="ts">
import { offices } from '../data/company'
</script>

<SlideHeading eyebrow="Jaringan Kantor" title="Selalu Dekat, di Setiap Kota" subtitle="Kami siap membantu jemaah dan mitra agen untuk berkonsultasi langsung dari berbagai daerah." index="02" class="mb-11" />

<OfficeRail :offices="offices" />
