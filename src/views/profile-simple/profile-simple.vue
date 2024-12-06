<script setup lang="ts">
import { EaLayout, EaProfileText } from '@/components'
import type { Student } from '@/types'

const props = defineProps<Student>()
</script>

<template>
  <ea-layout>
    <section class="switcher center switch-phone gap-m">
      <div class="frame square fixed">
        <img :src="`/img/students/${slug}.jpg`" :alt="name" />
      </div>
      <ea-profile-text v-bind="props"></ea-profile-text>
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
section {
  inline-size: 100%;
  max-inline-size: var(--max-inline-size);
}

article {
  flex-grow: 3;
}
.frame {
  flex-grow: 2;
}
</style>
