<script setup lang="ts">
import TopBar from '../home/TopBar.vue'
import ServiceCatalog from './ServiceCatalog.vue'
</script>

<template>
  <div class="services-page">
    <TopBar />
    <div class="services-content">
      <ServiceCatalog />
    </div>
  </div>
</template>

<style scoped>
.services-page {
  min-height: 100vh;
  background: var(--hoh-bg);
}

.services-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1.25rem, 3vw, 2rem);
}

@media (max-width: 480px) {
  .services-content {
    padding: 1rem 0.75rem 1.75rem;
  }
}
</style>
