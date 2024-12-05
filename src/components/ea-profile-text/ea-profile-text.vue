<script setup lang="ts">
import type { Student } from '@/types'

defineProps<Student>()
</script>

<template>
  <article class="prose">
    <h1 class="region-headline color-primary">{{ name }}</h1>
    <div class="cluster gap-xs">
      <div class="stack">
        <p class="overline">Year</p>
        <p class="color-primary">{{ year }}</p>
      </div>
      <div class="stack">
        <p class="overline">Activity</p>
        <p class="color-primary">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</p>
      </div>
      <div class="stack">
        <p class="overline">Team</p>
        <p class="color-primary">{{ team }}</p>
      </div>
    </div>
    <p>
      {{ intro }}
    </p>
    <p>
      {{ description }}
    </p>
  </article>
</template>

<style scoped lang="scss">
.overline {
  color: var(--color-on-surface);
}

p.color-primary {
  min-inline-size: unset;
}
</style>
