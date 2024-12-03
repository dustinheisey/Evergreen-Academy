<script setup lang="ts">
defineProps<{
  name: string
  year: string
  sport: string
  team: string
  intro: string
  description: string
}>()
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
        <p class="overline">Sport</p>
        <p class="color-primary">{{ sport }}</p>
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
