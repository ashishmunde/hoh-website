<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <header class="section-header">
    <p v-if="subtitle" class="section-eyebrow">{{ subtitle }}</p>
    <h2 class="section-title">{{ title }}</h2>
    <div class="section-divider" aria-hidden="true" />
  </header>
</template>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
}

.section-eyebrow {
  font-family: var(--hoh-font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--hoh-primary);
  margin: 0 0 0.65rem;
}

.section-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 500;
  color: var(--hoh-secondary);
  letter-spacing: 0.02em;
  line-height: 1.15;
  margin: 0;
}

.section-divider {
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--hoh-primary), transparent);
  margin: 1.25rem auto 0;
}
</style>
