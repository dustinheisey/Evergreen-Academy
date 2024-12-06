<script setup lang="ts">
import type { Category } from '@/types'
import { RouterLink } from 'vue-router'

const categoryImages = import.meta.glob('@/assets/img/categories/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

const { slug } = defineProps<Category>()

const src = categoryImages[`/src/assets/img/categories/${slug}.png`] as string
</script>

<template>
  <router-link :to="awards ? '/awards' : `/students/${slug}`" class="card" :aria-label="name">
    <img :src :alt="name" />
  </router-link>
</template>

<style scoped lang="scss">
img {
  inline-size: 100%;
}
</style>
