<script setup lang="ts">
import { EaDialog, EaDarkModeToggle, EaRangeInput } from 'components'
</script>

<template>
  <ea-dialog icon="accessibility" title="Accessibility Options">
    <div class="stack gap-xs inset-s align-start">
      <ea-dark-mode-toggle></ea-dark-mode-toggle>
      <ea-range-input
        label="Adjust Base Font Size"
        min="12"
        max="32"
        value="16"
        unit="px"
      ></ea-range-input>
      <ea-range-input label="Zoom View" min="50" max="200" value="100" unit="%"></ea-range-input>
    </div>
  </ea-dialog>
</template>

<style scoped lang="scss"></style>
