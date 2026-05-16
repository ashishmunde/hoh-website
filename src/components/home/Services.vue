<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { TOP_LEVEL_CARDS } from '@/data/servicesCatalog'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleServiceClick = (cardId: string) => {
  router.push({
    name: 'services',
    query: { card: cardId },
  })
}
</script>

<template>
  <section class="services-section">
    <div class="page-container">
      <SectionHeader
        title="Services"
        subtitle="What we offer"
      />
      <p class="services-intro">
        Hair, beauty, and makeup — explore our full menu of salon treatments.
      </p>
      <div class="services-grid">
        <button
          v-for="card in TOP_LEVEL_CARDS"
          :key="card.id"
          type="button"
          class="service-card card-elevated"
          @click="handleServiceClick(card.id)"
        >
          <div class="service-image-container">
            <img :src="card.image" :alt="card.name" class="service-image" />
            <div class="service-overlay">
              <h3 class="service-title">{{ card.name }}</h3>
              <span class="service-cta">Explore</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: var(--hoh-section-py) 0;
  background: var(--hoh-surface);
}

.services-intro {
  text-align: center;
  color: var(--hoh-text-muted);
  font-size: 1.05rem;
  margin: -1.5rem auto 2.5rem;
  max-width: 32rem;
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.service-card {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: var(--hoh-radius-lg);
  overflow: hidden;
  text-align: left;
}

.service-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--hoh-radius-lg);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--hoh-ease);
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 26, 26, 0.82) 0%,
    rgba(26, 26, 26, 0.2) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.75rem 1.25rem;
  color: white;
}

.service-title {
  font-family: var(--hoh-font-display);
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 0.65rem;
  letter-spacing: 0.02em;
}

.service-cta {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.45rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 100px;
  transition: all 0.25s var(--hoh-ease);
}

.service-card:hover .service-cta {
  background: white;
  color: var(--hoh-secondary);
  border-color: white;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
