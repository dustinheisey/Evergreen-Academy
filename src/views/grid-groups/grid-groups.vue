<script setup lang="ts">
import { EaCardGroup } from 'components'
import Athletes from '@assets/img/groups/athletes.png'
import Artists from '@assets/img/groups/artists.png'
import CommunityLeaders from '@assets/img/groups/community-leaders.png'
import EnvironmentalStewards from '@assets/img/groups/environmental-stewards.png'
import Scholars from '@assets/img/groups/scholars.png'
import Awards from '@assets/img/groups/awards.png'
// TODO: layout arrangement, vue router link card, image card template

const {
  groups = [
    {
      img: Athletes,
      group: 'Athletes',
    },
    {
      img: Artists,
      group: 'Artists',
    },
    {
      img: CommunityLeaders,
      group: 'Community Leaders',
    },
    {
      img: EnvironmentalStewards,
      group: 'Environmental Stewards',
    },
    {
      img: Scholars,
      group: 'Scholars',
    },
    {
      img: Awards,
      group: 'Awards',
    },
  ],
} = defineProps<{
  groups: [{ img: string; group: string }]
}>()
</script>

<template>
  <section class="grid center grid-3 gap-m">
    <ea-card-group
      v-for="(group, index) in groups"
      :key="index"
      :imageSrc="group.img"
      :headline="group.group"
    />
  </section>
</template>

<style scoped lang="scss">
.grid {
  max-inline-size: 1200px;
}
</style>
