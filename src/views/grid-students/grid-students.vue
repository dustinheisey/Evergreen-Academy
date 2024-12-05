<script setup lang="ts">
import { EaCardStudent, EaLayout } from 'components'
import { Students } from 'types'
const { students } = defineProps<{
  students: Array<Students>
}>()
</script>

<template>
  <ea-layout>
    <section class="grid center grid-3 gap-m">
      <ea-card-student
        v-bind="student"
        v-for="(student, index) in students"
        :key="index"
        :cardHref="`/profile/${student.name.toLowerCase().replace(/\s+/g, '-')}`"
      />
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
.grid {
  padding-block: var(--space-2xs);
}
</style>
