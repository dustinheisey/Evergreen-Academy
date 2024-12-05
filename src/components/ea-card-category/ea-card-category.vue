<script setup lang="ts">
import type { Category } from '@/types'
import { RouterLink } from 'vue-router'

defineProps<Category>()
</script>

<template>
  <router-link :to="awards ? '/awards' : `/students/${slug}`" class="card" :aria-label="name">
    <img :src="`/img/categories/${slug}.png`" :alt="name" />
  </router-link>
</template>

<style scoped lang="scss">
img {
  inline-size: 100%;
}
</style>
