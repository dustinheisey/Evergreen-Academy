<script setup lang="ts">
import type { Award } from 'types'
import EaCardAward from '@/components/ea-card-award/ea-card-award.vue'
import EaLayout from '@components/ea-layout/ea-layout.vue'

defineProps<{
  awards: Array<Award>
}>()
</script>

<template>
  <ea-layout>
    <div class="stack justify-center">
      <section class="reel center gap-l">
        <ea-card-award
          v-for="(award, index) in awards"
          :variant="award.variant"
          :key="index"
          :icon="award.icon"
          :headline="award.headline"
          :years="award.years"
        ></ea-card-award>
      </section>
    </div>
  </ea-layout>
</template>

<style scoped lang="scss">
.reel {
  padding-block: var(--space-l);
  padding-left: var(--space-xs);
  scroll-padding-left: var(--space-xs);
}

.stack {
  block-size: 100%;
}
</style>
