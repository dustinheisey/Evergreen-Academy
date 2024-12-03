<script setup lang="ts">
import EaIcon from '../ea-icon/ea-icon.vue'
import type { Icons } from '../component-types.ts'

const {
  variant = 'primary',
  icon,
  size = 'm',
} = defineProps<{
  variant?: 'primary' | 'secondary' | 'tertiary' | 'icon'
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
  border-radius: var(--radius-m);
}

.btn-icon {
  background: var(--color-surface-container-high);
  border-color: var(--color-surface-container-high);
  color: var(--color-on-surface);
  padding: var(--space-xs);
}
</style>
