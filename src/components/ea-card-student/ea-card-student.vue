<script setup lang="ts">
import type { Student } from '@/types'

const studentImages = import.meta.glob('@/assets/img/students/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const { slug } = defineProps<Student>()

const src = studentImages[`/src/assets/img/students/${slug}.jpg`] as string
</script>

<template>
  <router-link :to="`/profile/${slug}`" class="card">
    <div class="frame">
      <img :src :alt="name" />
    </div>
    <section class="student-info stack gap-0 inset-m align-center text-center">
      <h3 class="color-primary section-headline">{{ name }}</h3>
      <p class="cluster justify-center gap-2xs">
        <span class="overline">{{ team }}</span>
        <span class="badge badge-tertiary">{{ year }}</span>
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
