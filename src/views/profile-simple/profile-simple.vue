<script setup lang="ts">
import { EaLayout, EaProfileText } from 'components'

defineProps<{
  img: string
  name: string
  year: string
  activity: string
  team: string
  intro: string
  description: string
}>()
</script>

<template>
  <ea-layout>
    <div class="stack justify-center">
      <section class="switcher switch-phone gap-m">
        <div class="frame square fixed">
          <img :src="img" :alt="name" />
        </div>
        <ea-profile-text :name :year :activity :team :intro :description></ea-profile-text>
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
