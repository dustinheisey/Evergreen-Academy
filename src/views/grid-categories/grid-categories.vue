<script setup lang="ts">
import { EaCardCategory, EaLayout } from '@/components'
import type { Category } from '@/types'

defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <ea-layout>
    <section class="grid center grid-3 gap-m">
      <ea-card-category v-for="(category, index) in categories" :key="index" v-bind="category" />
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
section {
  inline-size: 100%;
  max-inline-size: var(--max-inline-size);
  padding-block: var(--space-2xs);
}
</style>
