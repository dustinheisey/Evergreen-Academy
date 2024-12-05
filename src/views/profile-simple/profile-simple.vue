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
      <section class="grid grid-2 gap-m">
        <img :src="img" :alt="name" />
        <ea-profile-text :name :year :activity :team :intro :description></ea-profile-text>
      </section>
    </div>
  </ea-layout>
</template>

<style>
.stack {
  block-size: 100%;
}
</style>
