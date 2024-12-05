<script setup lang="ts">
import { EaLayout, EaProfileText } from 'components'
import JordanSmith from '@assets/img/students/jordan-smith.jpg'
// TODO: vue router dynamic pages layout arrangement
const {
  text = {
    name: 'Jordan Smith',
    year: '2024',
    activity: 'Sports',
    team: 'Varsity Soccer',
    intro: 'Jordan is the captain of the Varsity Soccer Team.',
    description:
      'As captain, Jordan led the team to the state championships in 2024, showcasing exceptional leadership both on and off the field. Known for their agility and strategic gameplay, Jordan has become a role model for younger players, inspiring teamwork and determination across the team.',
  },
} = defineProps<{
  text: {
    name: string
    year: string
    activity: string
    team: string
    intro: string
    description: string
  }
}>()
</script>

<template>
  <ea-layout>
    <section class="grid grid-2 gap-m center">
      <img :src="JordanSmith" alt="Jordan Smith" />
      <ea-profile-text v-bind="text"></ea-profile-text>
    </section>
  </ea-layout>
</template>

<style scoped lang="scss">
section {
  max-inline-size: 1200px;
}
</style>
