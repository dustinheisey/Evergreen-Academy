<script setup lang="ts">
import { defineProps } from 'vue'
import type { Icons } from 'types'
import { EaIcon } from 'components'

// Props definition
const props = defineProps<{
  variant?: 'student' | 'award'
  icon?: Icons
  headline?: string
  subHeadline?: string
  years?: Array<string>
  year?: string
  team?: string
  activity?: string
  cardHref?: string
}>()
</script>

<template>
  <component
    :is="cardHref ? 'router-link' : 'article'"
    :to="cardHref"
    :class="['theme-' + variant, 'card', 'stack', 'gap-s', 'inset-m', 'align-center']"
  >
    <ea-icon class="award-icon" :name="icon" size="xl" variant="primary"></ea-icon>
    <h3 class="color-primary text-center split">{{ headline }}</h3>
    <section class="stack gap-2xs align-center">
      <p class="overline">Championships</p>
      <p class="cluster gap-2xs justify-center">
        <span v-for="(year, index) in years" :key="index" class="overline">
          {{ year }}
        </span>
      </p>
    </section>
  </component>
</template>

<style scoped lang="scss">
.award-icon {
  box-sizing: content-box;
  border-radius: var(--radius-l);
  padding: var(--space-m);
  border: 4px solid var(--color-on-primary);
}

.card {
  box-shadow: var(--shadow-s);
  border-radius: var(--radius-l);
  transition:
    box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;
  outline: 4px solid var(--color-surface);
  outline-offset: 5px;

  &:hover {
    box-shadow: var(--shadow-m);
  }
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
