<script setup lang="ts">
import { RouterLink } from 'vue-router'
import EaBtn from '../../components/ea-btn/ea-btn.vue'
import EaBtnGroup from '../../components/ea-btn-group/ea-btn-group.vue'
import EaDarkModeToggle from '../../components/ea-dark-mode-toggle/ea-dark-mode-toggle.vue'
import EaProfileText from '../../components/ea-profile-text/ea-profile-text.vue'
import EaDialogQrCode from '../../components/ea-dialog-qr-code/ea-dialog-qr-code.vue'
import EaDialogAccessibility from '../../components/ea-dialog-accessibility/ea-dialog-accessibility.vue'
import EaCard from '../../components/ea-card/ea-card.vue'
</script>

<template>
  <ea-dark-mode-toggle></ea-dark-mode-toggle>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <p>
    Qui ex ex est est et occaecat et occaecat nulla ex commodo. Reprehenderit non minim aute mollit
    deserunt laborum ex sit. Anim dolor dolor aute aliquip magna ad ullamco. Consequat amet
    reprehenderit exercitation consequat nulla velit culpa sint.
  </p>
  <p class="overline">Overline</p>
  <section class="cluster gap-m">
    <ea-btn icon="accessibility" variant="icon" />
    <ea-btn icon="back" variant="icon" />
    <ea-btn icon="close" variant="icon" />
    <ea-btn icon="down" variant="icon" />
    <ea-btn icon="menu" variant="icon" />
    <ea-btn icon="qr-code" variant="icon" />
    <ea-btn icon="search" variant="icon" />
    <ea-btn icon="world" variant="icon" />
  </section>
  <section class="cluster gap-m">
    <ea-btn variant="primary" icon="world">Explore</ea-btn>
    <ea-btn variant="icon" icon="search"></ea-btn>
    <ea-btn variant="icon" icon="accessibility"></ea-btn>
    <ea-btn variant="primary" icon="qr-code">QR Code</ea-btn>
    <ea-btn variant="icon" icon="menu"></ea-btn>
    <ea-btn variant="icon" icon="back"></ea-btn>
  </section>
  <ea-btn-group>
    <ea-btn variant="primary">Primary Action</ea-btn>
    <ea-btn variant="secondary">Secondary Action</ea-btn>
  </ea-btn-group>
  <ea-card
    body="Quis labore aliqua in ex. Ea excepteur eiusmod mollit dolore laborum. Sit incididunt dolore anim laboris esse cupidatat cupidatat occaecat sunt esse dolor sit. In pariatur magna sunt dolore nisi culpa sint magna adipisicing dolore anim."
  >
  </ea-card>
  <ea-profile-text
    name="John Doe"
    year="2024"
    sport="Basketball"
    team="Bulls"
    intro="Mike Senne is a 1982 graduate of Orange Lutheran.&nbsp; He played college baseball at the University of Arizona.&nbsp;&nbsp;"
    description="He became the first professional athlete in school history when he was drafted by the St. Louis Cardinals in the 14th round of the 1986 MLB Draft.  He spent three seasons with the Cardinals and 1 season with the Giants.  Senne was inducted into the Orange Lutheran Athletics Hall of Fame in 2015."
  />

  <section class="cluster">
    <ea-dialog-qr-code></ea-dialog-qr-code>
    <ea-dialog-accessibility></ea-dialog-accessibility>
  </section>

  <ea-card type="category" headline="Professional Athletes"></ea-card>
  <ea-card type="item" headline="Jason Martin"></ea-card>
  <ea-card
    type="trophy"
    headline="Baseball"
    subHeadline="League Championships"
    :years="[
      '1978',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
      '1979',
    ]"
  ></ea-card>
  <RouterLink to="/categories">Go to Home</RouterLink>
</template>

<style scoped lang="scss"></style>
