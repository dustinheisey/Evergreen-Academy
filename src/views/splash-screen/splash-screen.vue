<script setup lang="ts">
import { EaBtn, EaDialogQrCode, EaDialogAccessibility } from 'components'
import Logo from '@assets/img/logo.svg'
// import VideoWebm from '@/assets/video/evergreen-academy.webm'
import VideoMp4 from '@/assets/video/evergreen-academy.mp4'
// TODO: layout arrangement
</script>

<template>
  <div class="bg-img">
    <video autoplay loop muted playsinline preload="auto">
      <!-- <source type="video/webm" :src="VideoWebm" /> -->
      <source type="video/mp4" :src="VideoMp4" />
      Your browser does not support the video tag.
    </video>
    <div class="filter" />
    <div class="cover">
      <header class="cluster justify-end">
        <ea-btn variant="icon" icon="search"></ea-btn>
      </header>
      <main class="main center center-intrinsic">
        <h1 class="cluster gap-xs justify-center">
          <Logo class="logo" />
          <span>Evergreen Academy</span>
        </h1>
      </main>
      <section class="cluster justify-between">
        <div class="cluster">
          <ea-btn variant="primary" icon="world" href="/groups">Groups</ea-btn>
          <ea-btn variant="primary" href="/students"> Students</ea-btn>
          <ea-btn variant="primary" href="/awards">Awards</ea-btn>
          <ea-btn variant="primary" href="/profile">Student Profile</ea-btn>
        </div>
        <div class="cluster">
          <ea-dialog-qr-code></ea-dialog-qr-code>
          <ea-dialog-accessibility></ea-dialog-accessibility>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  inline-size: 7rem;
  block-size: auto;
  vertical-align: middle;
}
video {
  object-fit: cover;
  block-size: 100%;
}

.filter {
  inline-size: 100%;
  block-size: 100%;
  border-radius: 0;
  background-color: hsl(from var(--color-primary-fixed) h s l / 0.4);
}

h1 {
  color: var(--color-on-primary-fixed);
}
</style>
