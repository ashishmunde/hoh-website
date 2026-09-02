<script setup lang="ts">
import { computed, watch, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { BRANCHES_DATA, MAIN_CONTACT } from '@/utils/const'

const props = defineProps<{
  open: boolean
  branchName?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const router = useRouter()

const branch = computed(() => {
  return BRANCHES_DATA.find((b) => b.name === props.branchName) ?? {
    name: MAIN_CONTACT.branchName,
    phone: MAIN_CONTACT.phone,
    phoneTel: MAIN_CONTACT.phoneTel,
  }
})

function goToServices() {
  emit('close')
  router.push({ name: 'services' })
}

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
    <Transition name="thanks">
      <div v-if="open" class="thanks-backdrop" @click.self="emit('close')">
        <div
          class="thanks-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="thanks-title"
        >
          <button type="button" class="thanks-close" aria-label="Close" @click="emit('close')">
            ×
          </button>
          <p class="thanks-eyebrow">{{ branch.name }}</p>
          <h2 id="thanks-title" class="thanks-title">Thank you</h2>
          <p class="thanks-lead">
            We have received your appointment request. Our team will get in touch with you shortly.
          </p>
          <p class="thanks-copy">
            In case of any questions, contact us at
            <a class="thanks-phone" :href="`tel:${branch.phoneTel}`">{{ branch.phone }}</a>.
          </p>
          <p class="thanks-copy">
            If you do not receive a callback in the next 30 minutes, feel free to reach us at the
            same number.
          </p>
          <div class="thanks-actions">
            <button type="button" class="thanks-done" @click="goToServices">View services</button>
            <button type="button" class="thanks-skip" @click="emit('close')">Done</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.thanks-backdrop {
  position: fixed;
  inset: 0;
  z-index: 5100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(26, 26, 26, 0.55);
  backdrop-filter: blur(4px);
}

.thanks-panel {
  position: relative;
  width: min(26rem, 100%);
  padding: clamp(1.75rem, 4vw, 2.25rem);
  background: var(--hoh-surface);
  border-radius: var(--hoh-radius-lg);
  box-shadow: var(--hoh-shadow-lg);
  text-align: center;
}

.thanks-close {
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

.thanks-eyebrow {
  margin: 0 0 0.35rem;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--hoh-text-muted);
}

.thanks-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(1.85rem, 5vw, 2.25rem);
  font-weight: 500;
  margin: 0 0 0.85rem;
  color: var(--hoh-secondary);
}

.thanks-lead,
.thanks-copy {
  margin: 0 0 0.85rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--hoh-text-muted);
}

.thanks-phone {
  display: inline-block;
  color: var(--hoh-secondary);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.thanks-phone:hover {
  text-decoration: underline;
}

.thanks-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  margin-top: 0.5rem;
}

.thanks-done {
  padding: 0.75rem 1.6rem;
  border: none;
  border-radius: 999px;
  background: var(--hoh-secondary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
}

.thanks-skip {
  padding: 0.2rem;
  border: none;
  background: none;
  color: var(--hoh-text-muted);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  cursor: pointer;
}

.thanks-skip:hover {
  color: var(--hoh-secondary);
}

.thanks-enter-active,
.thanks-leave-active {
  transition: opacity 0.25s ease;
}

.thanks-enter-active .thanks-panel,
.thanks-leave-active .thanks-panel {
  transition: transform 0.25s ease;
}

.thanks-enter-from,
.thanks-leave-to {
  opacity: 0;
}

.thanks-enter-from .thanks-panel,
.thanks-leave-to .thanks-panel {
  transform: translateY(12px) scale(0.98);
}
</style>
