<script setup lang="ts">
import DirectionsFab from './DirectionsFab.vue'
import WhatsAppFab from './WhatsAppFab.vue'
</script>

<template>
  <div class="fab-stack">
    <DirectionsFab />
    <WhatsAppFab />
  </div>
</template>

<style scoped>
.fab-stack {
  position: fixed;
  right: max(1.25rem, env(safe-area-inset-right));
  bottom: max(1.25rem, env(safe-area-inset-bottom));
  z-index: 4000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  overflow: visible;
}

@media (max-width: 480px) {
  .fab-stack {
    right: max(1rem, env(safe-area-inset-right));
    bottom: max(1rem, env(safe-area-inset-bottom));
    gap: 0.65rem;
  }
}
</style>
