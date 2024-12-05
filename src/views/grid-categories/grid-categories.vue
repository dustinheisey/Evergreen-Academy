<script setup lang="ts">
import { EaCardCategory, EaLayout } from 'components'
import { Category } from 'types'

defineProps<{
  categories: Array<Category>
}>()
</script>

<template>
  <ea-layout>
    <section class="grid center grid-3 gap-m">
      <ea-card-category
        v-for="(category, index) in categories"
        :key="index"
        :imageSrc="category.img"
        :headline="category.name"
        :cardHref="
          category.variant === 'awards'
            ? `/awards`
            : `/students/${category.name.toLowerCase().replace(/\s+/g, '-')}`
        "
      />
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
.grid {
  padding-block: var(--space-2xs);
}
</style>
