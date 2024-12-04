<script setup lang="ts">
import EaIcon from '../ea-icon/ea-icon.vue'
import type { Icons } from '../component-types.ts'

const {
  variant = 'primary',
  icon,
  size = 'm',
} = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'icon-subtle'
  icon?: Icons
  size?: 's' | 'm' | 'l'
}>()
</script>

<template>
  <button :class="['btn', 'btn-' + variant, 'gap-xs']">
    <ea-icon v-if="icon" :name="icon" :size="size" />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  border-radius: var(--radius-s);
  padding: var(--space-xs) var(--space-s);
}

.btn-icon {
  background: var(--color-surface-container-high);
  border-color: var(--color-surface-container-high);
  color: var(--color-on-surface);
  padding: var(--space-xs);
}

.btn-icon-subtle {
  background: transparent;
  border-color: transparent;
  color: var(--color-on-surface);
  padding: var(--space-2xs);
  box-shadow: none;

  &:hover {
    background: var(--color-surface-container);
    border-color: var(--color-surface-container);
    box-shadow: none;
    transform: none;
  }
}
</style>
