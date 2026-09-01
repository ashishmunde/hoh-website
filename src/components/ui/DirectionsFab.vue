<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { BRANCHES_DATA } from '@/utils/const'

const open = ref(false)
const root = ref<HTMLElement | null>(null)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}

function onPointerDown(event: PointerEvent) {
  if (!open.value) return
  const target = event.target as Node | null
  if (root.value && target && !root.value.contains(target)) close()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('pointerdown', onPointerDown)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', onPointerDown)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div ref="root" class="directions-wrap">
    <Transition name="branch-pop">
      <div
        v-if="open"
        id="directions-menu"
        class="branch-list"
        role="menu"
        aria-label="Choose a branch"
      >
        <a
          v-for="(branch, index) in BRANCHES_DATA"
          :key="branch.name"
          :href="branch.googleMapsLink"
          class="branch-btn"
          :style="{ '--i': index }"
          role="menuitem"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Get directions to ${branch.name}`"
          @click="close"
        >
          <svg class="branch-pin" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>
          <span>{{ branch.name }}</span>
        </a>
      </div>
    </Transition>

    <button
      type="button"
      class="directions-fab"
      :class="{ open }"
      :aria-expanded="open"
      aria-haspopup="true"
      aria-controls="directions-menu"
      aria-label="Get directions to a branch"
      @click="toggle"
    >
      <svg v-if="!open" viewBox="0 0 24 24" class="pin-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
        />
      </svg>
      <svg v-else viewBox="0 0 24 24" class="pin-icon" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="2.2"
          stroke-linecap="round"
          d="M6 6l12 12M18 6L6 18"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.directions-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: visible;
}

.directions-fab {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--hoh-secondary);
  color: #fff;
  box-shadow: 0 4px 20px rgba(26, 26, 26, 0.35);
  cursor: pointer;
  transition:
    transform 0.2s var(--hoh-ease),
    box-shadow 0.2s var(--hoh-ease),
    background 0.2s var(--hoh-ease);
}

.directions-fab:hover {
  transform: scale(1.06);
  background: #000;
  box-shadow: 0 6px 24px rgba(26, 26, 26, 0.45);
}

.directions-fab.open {
  background: #000;
  box-shadow: 0 6px 24px rgba(26, 26, 26, 0.45);
}

.pin-icon {
  width: 1.45rem;
  height: 1.45rem;
}

.branch-list {
  position: absolute;
  right: 0;
  bottom: calc(100% + 0.85rem);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.65rem;
  z-index: 1;
}

.branch-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.75rem;
  padding: 0 1rem 0 0.85rem;
  border-radius: 999px;
  background: var(--hoh-secondary);
  color: #fff;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(26, 26, 26, 0.28);
  transition:
    transform 0.2s var(--hoh-ease),
    background 0.2s var(--hoh-ease);
}

.branch-btn:hover {
  background: #000;
  transform: translateX(-2px);
}

.branch-pin {
  width: 1.05rem;
  height: 1.05rem;
  flex-shrink: 0;
}

.branch-pop-enter-active,
.branch-pop-leave-active {
  transition:
    opacity 0.2s var(--hoh-ease),
    transform 0.2s var(--hoh-ease);
}

.branch-pop-enter-active .branch-btn,
.branch-pop-leave-active .branch-btn {
  transition:
    opacity 0.2s var(--hoh-ease),
    transform 0.2s var(--hoh-ease);
  transition-delay: calc(var(--i) * 40ms);
}

.branch-pop-enter-from,
.branch-pop-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.branch-pop-enter-from .branch-btn,
.branch-pop-leave-to .branch-btn {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 480px) {
  .directions-fab {
    width: 3rem;
    height: 3rem;
  }

  .branch-btn {
    height: 2.55rem;
    font-size: 0.78rem;
  }
}
</style>
