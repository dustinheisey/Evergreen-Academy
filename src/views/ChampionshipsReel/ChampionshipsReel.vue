<script setup lang="ts">
import type { Icons } from '../../components/component-types.ts'
const {
  awards = [
    {
      icon: 'speaking',
      headline: 'Debate',
      years: [
        '1999',
        '2002',
        '2003',
        '2006',
        '2007',
        '2008',
        '2012',
        '2015',
        '2022',
        '2023',
        '2024',
      ],
    },
    {
      icon: 'environment',
      headline: 'Environmental Stewardship',
      years: [
        '1999',
        '2002',
        '2003',
        '2006',
        '2007',
        '2008',
        '2012',
        '2015',
        '2022',
        '2023',
        '2024',
      ],
    },
    {
      icon: 'trophy',
      headline: 'Athletic Achievement',
      years: [
        '1999',
        '2002',
        '2003',
        '2006',
        '2007',
        '2008',
        '2012',
        '2015',
        '2022',
        '2023',
        '2024',
      ],
    },
    {
      icon: 'art',
      headline: 'Artistic Achievement',
      years: [
        '1999',
        '2002',
        '2003',
        '2006',
        '2007',
        '2008',
        '2012',
        '2015',
        '2022',
        '2023',
        '2024',
      ],
    },
    {
      icon: 'writing',
      headline: 'Creative Writing',
      years: [
        '1999',
        '2002',
        '2003',
        '2006',
        '2007',
        '2008',
        '2012',
        '2015',
        '2022',
        '2023',
        '2024',
      ],
    },
  ],
} = defineProps<{
  awards: Array<{ icon: Icons; headline: string; years: string[] }>
}>()
</script>

<template>
  <Layout>
    <main class="reel">
      <ea-card
        v-for="(award, index) in awards"
        variant="award"
        :key="index"
        :icon="award.icon"
        :headline="award.headline"
        :years="award.years"
      />
    </main>
  </Layout>
</template>

<style scoped lang="scss"></style>
