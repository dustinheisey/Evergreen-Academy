<script setup lang="ts">
import { defineProps } from 'vue'

// Props definition
defineProps<{
  img: string
  name: string
  year: string
  team: string
  activity: string
  cardHref: string
}>()
</script>

<template>
  <component :is="cardHref ? 'router-link' : 'article'" :to="cardHref" class="card">
    <div class="frame">
      <img :src="img" :alt="name" />
    </div>
    <section class="student-info stack gap-0 inset-m align-center text-center">
      <h3 class="color-primary">{{ name }}</h3>
      <p class="overline cluster gap-2xs">
        <span>{{ year }}</span
        ><span>|</span><span>{{ team }}</span>
      </p>
    </section>
  </component>
</template>

<style scoped lang="scss">
.card {
  box-shadow: var(--shadow-s);
  border-radius: var(--radius-l);
  transition:
    box-shadow 0.2s ease-in-out,
    transform 0.2s ease-in-out;
}

img {
  inline-size: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.card:hover {
  box-shadow: var(--shadow-l);
  transform: translateY(-5px);
  cursor: pointer;
}
</style>
