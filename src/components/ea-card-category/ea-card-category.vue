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
  <component
    :is="cardHref ? 'router-link' : 'article'"
    :to="cardHref"
    class="card"
    :aria-label="headline"
  >
    <img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" />
  </component>
</template>

<style scoped lang="scss">
img {
  inline-size: 100%;
}
</style>
