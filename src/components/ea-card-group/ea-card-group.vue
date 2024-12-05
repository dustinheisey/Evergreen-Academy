<script setup lang="ts">
import { defineProps } from 'vue'

// Props definition
const props = defineProps<{
  variant?: 'student' | 'award'
  imageSrc?: string
  imageAlt?: string
  headline?: string
  subHeadline?: string
  years?: Array<string>
  year?: string
  team?: string
  activity?: string
  cardHref?: string
}>()
</script>

<template>
  <component :is="cardHref ? 'router-link' : 'article'" :to="cardHref" class="card">
    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
  </component>
</template>

<style scoped lang="scss">
.card {
  box-shadow: var(--shadow-m);
  border-radius: var(--radius-l);
  position: relative;
  display: inline-block;
  box-shadow: var(--shadow-m);
  border-radius: var(--radius-l);
  overflow: hidden;
  transition:
    box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  &:hover {
    box-shadow: var(--shadow-l);
  }
}

img {
  inline-size: 100%;
}

.card:hover {
  box-shadow: var(--shadow-l);
  transform: translateY(-5px);
  cursor: pointer;
}
</style>
