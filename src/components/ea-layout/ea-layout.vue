<script setup lang="ts">
import Logo from '../../assets/img/logo.svg'
</script>

<template>
  <header class="inset-xl">
    <a href="/" class="cluster gap-xs">
      <Logo class="logo" />
      <h2 class="color-primary">Evergreen Academy</h2>
    </a>
  </header>
  <main><slot></slot></main>
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
