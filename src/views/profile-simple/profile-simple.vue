<script setup lang="ts">
import { EaLayout, EaProfileText } from '@/components'
import type { Student } from '@/types'

const props = defineProps<Student>()
</script>

<template>
  <ea-layout>
    <div class="stack justify-center">
      <section class="switcher switch-phone gap-m">
        <div class="frame square fixed">
          <img :src="`/img/students/${slug}.jpg`" :alt="name" />
        </div>
        <ea-profile-text v-bind="props"></ea-profile-text>
      </section>
    </div>
  </ea-layout>
</template>

<style>
.switcher {
  overflow-y: scroll;
}

article {
  flex-grow: 3;
}
img {
  flex-grow: 2;
}
</style>
