<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { BRANCHES_DATA } from '@/utils/const'
import { submitBooking } from '@/utils/submitBooking'

const props = defineProps<{
  initialBranch?: string
  showCancel?: boolean
  compact?: boolean
}>()

const emit = defineEmits<{
  success: [branch: string]
  close: []
}>()

const branch = ref(props.initialBranch ?? '')
const name = ref('')
const phone = ref('')
const submitting = ref(false)
const feedback = ref<{ ok: boolean; message: string } | null>(null)
const branchOpen = ref(false)
const branchWrap = ref<HTMLElement | null>(null)

const canSubmit = computed(
  () => branch.value && name.value.trim() && phone.value.trim() && !submitting.value,
)

function toggleBranch() {
  branchOpen.value = !branchOpen.value
}

function selectBranch(value: string) {
  branch.value = value
  branchOpen.value = false
}

function onDocPointer(event: Event) {
  if (!branchWrap.value?.contains(event.target as Node)) {
    branchOpen.value = false
  }
}

async function onSubmit() {
  if (!canSubmit.value) return
  submitting.value = true
  feedback.value = null
  branchOpen.value = false

  const result = await submitBooking({
    branch: branch.value,
    name: name.value.trim(),
    phone: phone.value.trim(),
  })

  feedback.value = result
  submitting.value = false

  if (result.ok) {
    const chosen = branch.value
    name.value = ''
    phone.value = ''
    emit('success', chosen)
  }
}

onMounted(() => document.addEventListener('pointerdown', onDocPointer))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocPointer))
</script>

<template>
  <form class="booking-form" :class="{ compact }" @submit.prevent="onSubmit">
    <div class="form-grid">
      <div class="field">
        <span id="branch-label" class="field-label">Branch *</span>
        <div ref="branchWrap" class="select-wrap" :class="{ open: branchOpen }">
          <button
            type="button"
            class="field-input select-trigger"
            aria-labelledby="branch-label"
            :aria-expanded="branchOpen"
            aria-haspopup="listbox"
            @click="toggleBranch"
            @keydown.escape="branchOpen = false"
          >
            <span class="select-value" :class="{ placeholder: !branch }">
              {{ branch || 'Select branch' }}
            </span>
            <svg class="select-chevron" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <ul
            v-if="branchOpen"
            class="select-menu"
            role="listbox"
            aria-labelledby="branch-label"
            @click.stop
          >
            <li
              v-for="b in BRANCHES_DATA"
              :key="b.name"
              role="option"
              class="select-option"
              :aria-selected="branch === b.name"
              :class="{ selected: branch === b.name }"
              @click="selectBranch(b.name)"
            >
              <span>{{ b.name }}</span>
              <span v-if="branch === b.name" class="select-check" aria-hidden="true">✓</span>
            </li>
          </ul>
        </div>
      </div>

      <label class="field">
        <span class="field-label">Full name *</span>
        <input v-model="name" type="text" required class="field-input" placeholder="Your name" />
      </label>

      <label class="field field-full">
        <span class="field-label">Contact number *</span>
        <input
          v-model="phone"
          type="tel"
          required
          class="field-input"
          placeholder="+91 ..."
          inputmode="tel"
        />
      </label>
    </div>

    <p v-if="feedback && !feedback.ok" class="feedback err">
      {{ feedback.message }}
    </p>

    <div class="form-actions">
      <button v-if="showCancel" type="button" class="btn-secondary" @click="emit('close')">
        Cancel
      </button>
      <button type="submit" class="btn-primary" :disabled="!canSubmit">
        {{ submitting ? 'Sending…' : 'Request Now' }}
      </button>
    </div>
  </form>
</template>

<style scoped>
.booking-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field-full {
  grid-column: 1 / -1;
}

.field-label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hoh-text-muted);
}

.field-input {
  width: 100%;
  padding: 0.7rem 0.85rem;
  border: 1px solid var(--hoh-border);
  border-radius: var(--hoh-radius);
  font-family: var(--hoh-font-body);
  font-size: 0.95rem;
  background: var(--hoh-surface);
  color: var(--hoh-secondary);
}

.field-input:focus {
  outline: 2px solid color-mix(in srgb, var(--hoh-secondary) 25%, transparent);
  border-color: var(--hoh-secondary);
}

.select-wrap {
  position: relative;
}

.select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  cursor: pointer;
  text-align: left;
  appearance: none;
  font: inherit;
}

.select-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-value.placeholder {
  color: #9a9792;
}

.select-chevron {
  width: 1.05rem;
  height: 1.05rem;
  flex-shrink: 0;
  color: var(--hoh-text-muted);
  transition: transform 0.2s var(--hoh-ease);
}

.select-wrap.open .select-chevron {
  transform: rotate(180deg);
}

.select-wrap.open .select-trigger {
  border-color: var(--hoh-secondary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--hoh-secondary) 12%, transparent);
}

.select-menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 8;
  margin: 0;
  padding: 0.35rem;
  list-style: none;
  background: #fff;
  border: 1px solid var(--hoh-border);
  border-radius: var(--hoh-radius);
  box-shadow: 0 14px 36px rgba(26, 26, 26, 0.14);
}

.select-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.7rem 0.85rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.92rem;
  color: var(--hoh-secondary);
  transition: background 0.15s var(--hoh-ease);
}

.select-option:hover {
  background: var(--hoh-bg-alt);
}

.select-option.selected {
  background: var(--hoh-bg-alt);
  font-weight: 600;
}

.select-check {
  color: var(--hoh-secondary);
  font-size: 0.85rem;
}

.feedback {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  padding: 0.75rem 1rem;
  border-radius: var(--hoh-radius);
}

.feedback.ok {
  background: #ecfdf3;
  color: #166534;
}

.feedback.err {
  background: #fef2f2;
  color: #991b1b;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: background 0.2s var(--hoh-ease);
}

.btn-primary {
  background: var(--hoh-secondary);
  color: #fff;
}

.btn-primary:hover:not(:disabled) {
  background: #333;
}

.btn-primary:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.btn-secondary {
  background: transparent;
  color: var(--hoh-secondary);
  border: 1px solid var(--hoh-border);
}

@media (max-width: 560px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

.compact .form-grid {
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

.compact {
  gap: 0.9rem;
}

.compact .field-input {
  padding: 0.6rem 0.75rem;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.9);
}

.compact .form-actions {
  justify-content: stretch;
}

.compact .btn-primary {
  width: 100%;
}

@media (max-width: 768px) {
  .compact {
    gap: 0.55rem;
  }

  .compact .form-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.45rem 0.55rem;
  }

  .compact .field-full {
    grid-column: auto;
  }

  .compact .field {
    gap: 0.18rem;
  }

  .compact .field-label {
    font-size: 0.6rem;
    letter-spacing: 0.06em;
  }

  .compact .field-input {
    padding: 0.42rem 0.55rem;
    font-size: 0.8rem;
    border-radius: 10px;
  }

  .compact .select-option {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
  }

  .compact .btn-primary {
    padding: 0.55rem 1rem;
    font-size: 0.68rem;
  }

  .compact .feedback {
    font-size: 0.75rem;
    padding: 0.5rem 0.7rem;
  }
}
</style>
