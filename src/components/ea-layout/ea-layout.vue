<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '@/assets/img/logo.png'
import { EaBtn, EaBackBtn, EaDialogQrCode, EaDialogAccessibility } from '@/components'

const showHeader = computed(() => !window.matchMedia('(max-width: 760px)').matches)
const mobile = computed(() => window.matchMedia('(max-width: 640px)').matches)
</script>

<template>
  <div class="cover gap-s inset-m">
    <header class="cluster justify-between header">
      <RouterLink to="/" class="cluster gap-xs">
        <img :src="Logo" class="logo" alt="Evergreen Academy" />
        <h2 class="color-primary" v-if="showHeader">Evergreen Academy</h2>
      </RouterLink>
      <ea-btn variant="icon" icon="search" label="Search" id="search_btn"></ea-btn>
    </header>
    <main class="center full">
      <slot></slot>
    </main>
    <section class="cluster justify-between btns">
      <ea-back-btn></ea-back-btn>
      <div class="cluster">
        <ea-dialog-qr-code v-if="!mobile"></ea-dialog-qr-code>
        <ea-dialog-accessibility></ea-dialog-accessibility>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.cover {
  block-size: 100%;
}
.logo {
  inline-size: 5rem;
  block-size: auto;
  vertical-align: middle;
}
h1 {
  line-height: 1;
  display: inline-block;
}

main {
  overflow-y: auto;
  max-block-size: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
</style>
