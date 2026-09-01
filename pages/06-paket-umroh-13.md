---
layout: deck-light
---

<script setup lang="ts">
import { findPackage } from '../data/packages'

const pkg = findPackage('umroh-13')
</script>

<div class="mb-5 flex items-start justify-between">
  <UiChip v-reveal tone="primary">{{ pkg.badge }}</UiChip>
  <BigNumber value="06" />
</div>

<div class="grid grid-cols-[0.62fr_1fr] items-start gap-12">
  <PosterFrame v-reveal="1" class="mx-auto h-[28rem]" :src="pkg.brochure" :alt="pkg.brochureAlt" />
  <PackageDetails v-reveal="2" :id="pkg.id" />
</div>
