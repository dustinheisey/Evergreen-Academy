<script setup lang="ts">
import { EaCardStudent, EaLayout } from 'components'
import { Students } from 'types'
const { students } = defineProps<{
  students: Array<Students>
}>()
</script>

<template>
  <ea-layout>
    <div class="stack justify-center">
      <section class="grid grid-3 gap-m">
        <ea-card-student
          v-bind="student"
          v-for="(student, index) in students"
          :key="index"
          :cardHref="`/profile/${student.name.toLowerCase().replace(/\s+/g, '-')}`"
        />
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
