<script setup lang="ts">
import type { Student } from '@/types'

defineProps<Student>()
</script>

<template>
  <router-link :to="`/profile/${slug}`" class="card">
    <div class="frame">
      <img :src="`/img/students/${slug}.jpg`" :alt="name" />
    </div>
    <section class="student-info stack gap-0 inset-m align-center text-center">
      <h3 class="color-primary">{{ name }}</h3>
      <p class="overline inline gap-2xs">
        <span>{{ year }}</span>
        <span>|</span><span>{{ team }}</span>
      </p>
    </section>
  </router-link>
</template>

<style scoped lang="scss">
.inline {
  display: inline-flex;
  flex-wrap: nowrap;
}
.inline > span {
  inline-size: max-content;
}
img {
  inline-size: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
