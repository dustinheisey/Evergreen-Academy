<script setup lang="ts">
import EaIcon from '../ea-icon/ea-icon.vue'
import QRCode from '../../assets/img/qr-code.png'
import EaDialog from '../ea-dialog/ea-dialog.vue'
</script>

<template>
  <ea-dialog btnVariant="primary" icon="qr-code" btnLabel="QR Code" title="QR Code">
    <div class="stack gap-xs inset-m align-center">
      <ea-icon name="camera" size="xl"></ea-icon>
      <p class="caption space-xs">Scan with your Camera App to view the app on your phone.</p>
      <img :src="QRCode" alt="QR Code" />
    </div>
  </ea-dialog>
</template>

<style scoped lang="scss">
img {
  inline-size: 50%;
}
</style>
