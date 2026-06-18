<script setup lang="ts">
import TopBar from '@/components/home/TopBar.vue'
</script>

<template>
  <div class="about-page">
    <TopBar />
    <main class="about-content page-container">
      <h1 class="about-title">About Us</h1>
      <p class="about-lead">
        The House of Hair is a premium unisex salon with locations in Karve Nagar, Paud Road, and Aundh, Pune.
      </p>
      <p class="about-text">
        We offer haircuts, colour, treatments, beauty services, and makeup — delivered by experienced stylists
        in a welcoming salon environment.
      </p>
    </main>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--hoh-bg);
}

.about-content {
  padding-block: var(--hoh-section-py);
  max-width: 42rem;
}

.about-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 500;
  color: var(--hoh-secondary);
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}

.about-lead {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: var(--hoh-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.about-text {
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  color: var(--hoh-text-muted);
  line-height: 1.75;
}
</style>
