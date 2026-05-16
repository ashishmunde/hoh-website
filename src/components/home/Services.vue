<script setup lang="ts">
import { SECONDARY_COLOR } from '@/utils/const'
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
    <div class="container">
      <h2 class="services-title">Services</h2>
      <p class="services-intro">
        Hair, beauty, and makeup — browse our full menu of salon services.
      </p>
      <div class="services-grid">
        <button
          v-for="card in TOP_LEVEL_CARDS"
          :key="card.id"
          type="button"
          class="service-card"
          @click="handleServiceClick(card.id)"
        >
          <div class="service-image-container">
            <img :src="card.image" :alt="card.name" class="service-image" />
            <div class="service-overlay">
              <h3 class="service-title">{{ card.name }}</h3>
              <span class="know-more-btn">View services</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 4rem 0;
  background-color: #ffffff;
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.services-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: v-bind(SECONDARY_COLOR);
  margin-bottom: 0.75rem;
  text-align: center;
}

.services-intro {
  text-align: center;
  color: #666;
  font-size: 1.05rem;
  margin: 0 auto 2.5rem;
  max-width: 520px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.service-card {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.service-image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.service-card:hover .service-image {
  transform: scale(1.06);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 55%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
}

.service-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  text-align: center;
}

.know-more-btn {
  display: inline-block;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

.service-card:hover .know-more-btn {
  background: white;
  color: v-bind(SECONDARY_COLOR);
}

@media (max-width: 768px) {
  .services-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
