<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '@assets/img/logo.svg'
import { EaBackBtn } from 'components'

const route = useRoute()

const isHome = computed(() => route.name === 'home')
</script>

<template>
  <header class="inset-xl">
    <a href="/" class="cluster gap-xs">
      <Logo class="logo" />
      <h2 class="color-primary">Evergreen Academy</h2>
      <ea-back-btn v-if="!isHome"></ea-back-btn>
    </a>
  </header>
  <main class="stack gap-m inset-xl">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.logo {
  inline-size: 7rem;
  block-size: auto;
  vertical-align: middle;
}
h1 {
  line-height: 1;
  display: inline-block;
}
</style>
