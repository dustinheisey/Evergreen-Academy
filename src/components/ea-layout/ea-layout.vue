<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Logo from '@assets/img/logo.svg'
import { EaBtn, EaBackBtn, EaDialogQrCode, EaDialogAccessibility } from 'components'
</script>

<template>
  <div class="cover gap-s inset-s">
    <header class="cluster justify-between header inset-0">
      <RouterLink to="/" class="cluster gap-xs">
        <Logo class="logo" />
        <h2 class="color-primary">Evergreen Academy</h2>
      </RouterLink>
      <ea-btn variant="icon" icon="search"></ea-btn>
    </header>
    <main>
      <slot></slot>
    </main>
    <section class="cluster justify-between btns">
      <ea-back-btn></ea-back-btn>
      <div class="cluster">
        <ea-dialog-qr-code></ea-dialog-qr-code>
        <ea-dialog-accessibility></ea-dialog-accessibility>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  block-size: 100vh;
}
.logo {
  inline-size: 7rem;
  block-size: auto;
  vertical-align: middle;
}
h1 {
  line-height: 1;
  display: inline-block;
}

main {
  overflow-y: scroll;
  max-block-size: 100vh;
  flex-grow: 1;
}
</style>
