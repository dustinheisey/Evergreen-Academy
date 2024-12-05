<script setup lang="ts">
import { EaCardStudent, EaLayout } from '@/components'
import type { Student } from '@/types'
const { students } = defineProps<{
  students: Student[]
}>()
</script>

<template>
  <ea-layout>
    <div class="stack justify-center">
      <section class="grid grid-3 gap-m">
        <ea-card-student v-for="(student, index) in students" :key="index" v-bind="student" />
      </section>
    </div>
  </ea-layout>
</template>

<style scoped lang="scss">
.grid {
  padding-block: var(--space-2xs);
  overflow-y: scroll;
}
</style>
