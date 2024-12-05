<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { EaBtn } from 'components'

const router = useRouter()
</script>

<template>
  <ea-btn @click="() => router.back()" icon="back"> </ea-btn>
</template>
