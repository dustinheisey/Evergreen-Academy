<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const {
  name,
  size = 'm',
  color = 'primary',
} = defineProps<{
  name: 'accessibility' | 'back' | 'qr-code' | 'close' | 'down' | 'search' | 'menu' | 'world'
  size?: 's' | 'm' | 'l' | 'xl'
  color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface'
}>()

const icon = defineAsyncComponent(() => import(`../../assets/icons/${name}.svg`))
</script>

<template>
  <component :is="icon" :class="['icon', 'icon-' + color, 'icon-' + size]" />
</template>

<style scoped lang="scss">
.icon {
  display: inline-block;
  color: inherit;
  inline-size: var(--size, 2rem);
  block-size: var(--size, 2rem);
  line-height: 1;
  flex-shrink: 0;
  max-width: initial;
}
.icon use {
  fill: currentColor;
}
.icon-primary {
  color: var(--color-primary);
}
.icon-secondary {
  color: var(--color-secondary);
}
.icon-tertiary {
  color: var(--color-tertiary);
}
.icon-error {
  color: var(--color-error);
}
.icon-surface {
  color: var(--color-on-surface);
}
.icon-s {
  --size: 1.5rem;
}
.icon-m {
  --size: 2rem;
}
.icon-l {
  --size: 3rem;
}
.icon-xl {
  --size: 4rem;
}
</style>
