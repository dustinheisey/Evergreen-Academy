<script setup lang="ts">
import { EaLayout, EaProfileText } from '@/components'
import type { Student } from '@/types'

const studentImages = import.meta.glob('@/assets/img/students/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const props = defineProps<Student>()

const src = studentImages[`/src/assets/img/students/${props.slug}.jpg`] as string
</script>

<template>
  <ea-layout>
    <section class="switcher center switch-phone gap-m">
      <div class="frame square fixed">
        <img :src :alt="name" />
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
