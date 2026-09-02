<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'
import BookingForm from './BookingForm.vue'

const props = defineProps<{
  open: boolean
  initialBranch?: string
}>()

const emit = defineEmits<{
  close: []
  success: [branch: string]
}>()

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) window.addEventListener('keydown', onKey)
    else window.removeEventListener('keydown', onKey)
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="open" class="modal-backdrop" @click.self="emit('close')">
        <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="booking-title">
          <button type="button" class="modal-close" aria-label="Close" @click="emit('close')">
            ×
          </button>
          <h2 id="booking-title" class="modal-title">Book an appointment</h2>
          <p class="modal-subtitle">Choose your branch and we will confirm your slot shortly.</p>
          <BookingForm
            :initial-branch="initialBranch"
            show-cancel
            @close="emit('close')"
            @success="(chosen) => emit('success', chosen)"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(26, 26, 26, 0.55);
  backdrop-filter: blur(4px);
}

.modal-panel {
  position: relative;
  width: min(560px, 100%);
  max-height: min(90vh, 720px);
  overflow-y: auto;
  padding: clamp(1.5rem, 4vw, 2rem);
  background: var(--hoh-surface);
  border-radius: var(--hoh-radius-lg);
  box-shadow: var(--hoh-shadow-lg);
}

.modal-close {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: var(--hoh-text-muted);
}

.modal-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(1.5rem, 4vw, 1.85rem);
  font-weight: 500;
  margin: 0 0 0.35rem;
  color: var(--hoh-secondary);
  padding-right: 2rem;
}

.modal-subtitle {
  margin: 0 0 1.25rem;
  color: var(--hoh-text-muted);
  font-size: 0.95rem;
  line-height: 1.55;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateY(12px) scale(0.98);
}
</style>
