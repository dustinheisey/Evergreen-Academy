<script lang="ts" setup>
import { ref } from 'vue'
import EaBtn from '../ea-btn/ea-btn.vue'

const modal = ref<HTMLDialogElement | null>(null)

defineProps<{
  title: string
}>()

const showModal = (): void => {
  if (modal.value) {
    modal.value.showModal()
  }
}

const closeModal = (): void => {
  if (modal.value) {
    modal.value.close()
  }
}
</script>

<template>
  <ea-btn variant="icon" icon="accessibility" @click="showModal"></ea-btn>
  <dialog class="modal" @close="closeModal" ref="modal" data-modal>
    <div class="modal-header">
      <h2>{{ title }}</h2>
      <ea-btn variant="icon-subtle" icon="close" @click="closeModal" aria-label="Close"></ea-btn>
    </div>
    <div class="modal-body">
      <slot></slot>
    </div>
  </dialog>
</template>

<style scoped>
.modal {
  padding: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.25rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  margin-top: 1rem;
  font-size: 1rem;
}

.modal-footer {
  margin-top: 1rem;
  text-align: right;
}
</style>
