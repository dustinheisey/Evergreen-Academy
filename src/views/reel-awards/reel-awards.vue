<script setup lang="ts">
import type { Award } from '@/types'
import { EaCardAward, EaLayout } from '@/components'

defineProps<{
  awards: Array<Award>
}>()
</script>

<template>
  <ea-layout>
    <section class="reel center gap-l">
      <ea-card-award v-for="(award, index) in awards" v-bind="award" :key="index"></ea-card-award>
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
.stack {
  inline-size: 100%;
  max-inline-size: var(--max-inline-size);
}
.reel {
  padding-block: var(--space-l);
  padding-left: var(--space-xs);
  scroll-padding-left: var(--space-xs);
}
</style>
