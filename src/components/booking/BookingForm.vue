<script setup lang="ts">
import { ref, computed } from 'vue'
import { BRANCHES_DATA } from '@/utils/const'
import { submitBooking } from '@/utils/submitBooking'

const props = defineProps<{
  initialBranch?: string
}>()

const emit = defineEmits<{
  success: []
  close: []
}>()

const branch = ref(props.initialBranch ?? '')
const name = ref('')
const phone = ref('')
const service = ref('')
const submitting = ref(false)
const feedback = ref<{ ok: boolean; message: string } | null>(null)

const canSubmit = computed(
  () => branch.value && name.value.trim() && phone.value.trim() && !submitting.value,
)

async function onSubmit() {
  if (!canSubmit.value) return
  submitting.value = true
  feedback.value = null

  const result = await submitBooking({
    branch: branch.value,
    name: name.value.trim(),
    phone: phone.value.trim(),
    service: service.value.trim() || undefined,
  })

  feedback.value = result
  submitting.value = false

  if (result.ok) {
    emit('success')
  }
}
</script>

<template>
  <form class="booking-form" @submit.prevent="onSubmit">
    <div class="form-grid">
      <label class="field">
        <span class="field-label">Branch *</span>
        <select v-model="branch" required class="field-input">
          <option value="" disabled>Select branch</option>
          <option v-for="b in BRANCHES_DATA" :key="b.name" :value="b.name">
            {{ b.name }}
          </option>
        </select>
      </label>

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

      <label class="field field-full">
        <span class="field-label">Service (optional)</span>
        <input
          v-model="service"
          type="text"
          class="field-input"
          placeholder="e.g. Haircut, Balayage, Makeup and Hairstyle"
        />
      </label>
    </div>

    <p v-if="feedback" class="feedback" :class="{ ok: feedback.ok, err: !feedback.ok }">
      {{ feedback.message }}
    </p>

    <div class="form-actions">
      <button type="button" class="btn-secondary" @click="emit('close')">Cancel</button>
      <button type="submit" class="btn-primary" :disabled="!canSubmit">
        {{ submitting ? 'Sending…' : 'Book appointment' }}
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
</style>
