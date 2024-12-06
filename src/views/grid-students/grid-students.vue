<script setup lang="ts">
import { EaCardStudent, EaLayout } from '@/components'
import type { Student } from '@/types'
const { students } = defineProps<{
  students: Student[]
}>()
</script>

<template>
  <ea-layout>
    <section class="grid center grid-3 gap-m">
      <ea-card-student v-for="(student, index) in students" :key="index" v-bind="student" />
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
section {
  inline-size: 100%;
  max-inline-size: var(--max-inline-size);
  padding-block: var(--space-2xs);
}

.grid {
  grid-template-columns: repeat(
    auto-fit,
    minmax(max(var(--min-inline-size, 10rem), (100% - 2 * var(--grid-gap)) / 3), 1fr)
  );
}
</style>
