<script setup lang="ts">
import type { Contact } from '../../data/company'

defineProps<{ contact: Contact }>()
</script>

<template>
  <span class="contact-pill">
    <span class="contact-pill__icon" :class="contact.icon" aria-hidden="true" />
    {{ contact.label }}
  </span>
</template>
