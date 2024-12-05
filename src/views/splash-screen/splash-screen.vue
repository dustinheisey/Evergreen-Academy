<script setup lang="ts">
import { EaBtn, EaDialogQrCode, EaDialogAccessibility } from 'components'
// TODO: layout arrangement
</script>

<template>
  <section class="cluster">
    <ea-dialog-qr-code></ea-dialog-qr-code>
    <ea-dialog-accessibility></ea-dialog-accessibility>
    <ea-btn variant="primary" icon="world" href="/groups">Groups</ea-btn>
    <ea-btn variant="primary" icon="world" href="/students">Students</ea-btn>
  </section>
</template>

<style scoped lang="scss"></style>
