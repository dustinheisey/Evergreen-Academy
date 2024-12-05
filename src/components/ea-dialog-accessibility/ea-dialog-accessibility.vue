<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore, useFontSizeStore, useZoomStore } from '@/stores/accessibility'
import { EaDialog, EaThemeSwitch, EaRangeInput } from 'components'

const themeStore = useThemeStore()
const fontSizeStore = useFontSizeStore()
const zoomStore = useZoomStore()

const rootElement = document.documentElement

const switchTheme = () => {
  themeStore.switchTheme()
  applyTheme()
}

const updateFontSize = (value: number) => {
  fontSizeStore.setFontSize(value)
  applyFontSize()
}

const updateZoom = (value: number) => {
  zoomStore.setZoom(value)
  applyZoom()
}

const applyTheme = () => {
  rootElement.setAttribute('data-theme', themeStore.theme)
}

const applyFontSize = () => {
  rootElement.style.setProperty('--font-size', fontSizeStore.fontSizeFormatted)
}

const applyZoom = () => {
  document.body.style.zoom = zoomStore.zoomFormatted
}

const applyAccessibility = () => {
  applyTheme()
  applyFontSize()
  applyZoom()
}

onMounted(applyAccessibility)
</script>

<template>
  <ea-dialog icon="accessibility" title="Accessibility Options">
    <div class="stack gap-xs inset-s align-start">
      <ea-theme-switch @switch-theme="switchTheme"></ea-theme-switch>
      <ea-range-input
        label="Adjust Base Font Size"
        min="12"
        max="24"
        :value="16"
        :output="fontSizeStore.fontSizeFormatted"
        @update-value="updateFontSize"
      ></ea-range-input>
      <ea-range-input
        label="Zoom View"
        min="75"
        max="150"
        :value="100"
        :output="zoomStore.zoomFormatted"
        @update-value="updateZoom"
      ></ea-range-input>
    </div>
  </ea-dialog>
</template>
