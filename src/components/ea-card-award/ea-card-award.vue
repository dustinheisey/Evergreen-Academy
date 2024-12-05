<script setup lang="ts">
import type { Award } from '@/types'
import { EaIcon } from '@/components'

defineProps<Award>()
</script>

<template>
  <article
    :class="['theme-' + theme, 'card', 'card-award', 'stack', 'gap-s', 'inset-m', 'align-center']"
  >
    <ea-icon class="award-icon" :name="icon" size="xl" variant="primary"></ea-icon>
    <h3 class="color-primary text-center split">{{ name }}</h3>
    <section class="stack gap-2xs align-center">
      <p class="overline">Championships</p>
      <p class="cluster gap-2xs justify-center">
        <span v-for="(year, index) in years" :key="index" class="overline">
          {{ year }}
        </span>
      </p>
    </section>
  </article>
</template>

<style scoped lang="scss">
.award-icon {
  box-sizing: content-box;
  border-radius: var(--radius-l);
  padding: var(--space-m);
  border: 4px solid var(--color-on-primary);
}

img {
  inline-size: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.cluster {
  max-inline-size: 75%;
}

.cluster > span {
  color: var(--color-on-surface);
}

h3 {
  font-size: var(--font-size-l);
}
</style>
