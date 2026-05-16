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
  background-color: #f8f8f8;
}

.services-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

@media (max-width: 768px) {
  .services-content {
    padding: 1.25rem 1rem 2rem;
  }
}
</style>
