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
    <section class="grid grid-2 gap-m center">
      <img :src="img" :alt="name" />
      <ea-profile-text :name :year :activity :team :intro :description></ea-profile-text>
    </section>
  </ea-layout>
</template>
