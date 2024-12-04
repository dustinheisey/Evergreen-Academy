<script setup lang="ts">
import EaCard from '../../components/ea-card/ea-card.vue'
import Athletes from '../../assets/img/athletes.png'
import Artists from '../../assets/img/artists.png'
import CommunityLeaders from '../../assets/img/community-leaders.png'
import EnvironmentalStewards from '../../assets/img/environmental-stewards.png'
import Scholars from '../../assets/img/scholars.png'
import Awards from '../../assets/img/awards.png'

const {
  categories = [
    {
      img: Athletes,
      category: 'Athletes',
    },
    {
      img: Artists,
      category: 'Artists',
    },
    {
      img: CommunityLeaders,
      category: 'Community Leaders',
    },
    {
      img: EnvironmentalStewards,
      category: 'Environmental Stewards',
    },
    {
      img: Scholars,
      category: 'Scholars',
    },
    {
      img: Awards,
      category: 'Awards',
    },
  ],
} = defineProps<{
  categories: [{ img: string; category: string }]
}>()
</script>

<template>
  <Layout>
    <section class="grid center grid-3">
      <ea-card
        v-for="(category, index) in categories"
        variant="category"
        :key="index"
        :imageSrc="category.img"
        :headline="category.category"
      />
    </section>
  </Layout>
</template>

<style scoped lang="scss">
.grid {
  place-items: center;
}
</style>
