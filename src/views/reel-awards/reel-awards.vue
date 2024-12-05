<script setup lang="ts">
import type { Icons } from 'components'
import EaCardAward from '@/components/ea-card-award/ea-card-award.vue'
// TODO: award card template vue router dynamic groups, layout arrangement

type Award = {
  icon: Icons
  headline: string
  years: string[]
}
const {
  awards = [
    {
      icon: 'speaking',
      headline: 'Debate Leading Chapter',
      variant: 'primary',
      years: ['2000', '2004', '2009', '2011', '2016', '2020', '2023'],
    },
    {
      icon: 'environment',
      headline: 'Environmental Stewardship',
      variant: 'secondary',
      years: ['1998', '2001', '2005', '2010', '2014', '2018', '2022'],
    },
    {
      icon: 'trophy',
      headline: 'Athletic Achievement',
      variant: 'tertiary',
      years: ['1997', '2000', '2003', '2007', '2013', '2017', '2021'],
    },
    {
      icon: 'art',
      headline: 'Artistic Achievement',
      variant: 'primary',
      years: ['1996', '1999', '2002', '2008', '2012', '2019', '2024'],
    },
    {
      icon: 'writing',
      headline: 'Creative Writing',
      variant: 'secondary',
      years: ['1995', '1998', '2001', '2006', '2010', '2015', '2023'],
    },
  ],
} = defineProps<{
  awards: Array<Award>
}>()
</script>

<template>
  <section class="reel gap-l">
    <ea-card-award
      v-for="(award, index) in awards"
      :variant="award.variant"
      :key="index"
      :icon="award.icon"
      :headline="award.headline"
      :years="award.years"
    ></ea-card-award>
  </section>
</template>

<style scoped lang="scss">
.reel {
  padding-block: var(--space-l);
  padding-left: var(--space-xs); /* 4px for the offset + some buffer */
  scroll-padding-left: var(--space-xs); /* For snapping if scroll-snap is used */
}
</style>
