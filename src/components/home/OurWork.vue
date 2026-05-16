<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { WORK_GALLERY_CATEGORIES } from '@/utils/workGallery'
import { useRouter } from 'vue-router'

const router = useRouter()

const openGallery = (galleryQuery: string) => {
  router.push({ name: 'gallery', query: { category: galleryQuery } })
}
</script>

<template>
  <section class="our-work-section">
    <div class="page-container">
      <SectionHeader title="Our Work" subtitle="Portfolio" />
      <p class="work-intro">
        Real results from our salon — browse photo galleries by style and treatment.
      </p>
      <div class="work-grid">
        <button
          v-for="cat in WORK_GALLERY_CATEGORIES"
          :key="cat.id"
          type="button"
          class="work-card card-elevated"
          @click="openGallery(cat.galleryQuery)"
        >
          <div class="work-image-wrap">
            <img :src="cat.thumbnail" :alt="cat.name" class="work-image" />
            <div class="work-overlay">
              <h3 class="work-title">{{ cat.name }}</h3>
              <span class="work-count">{{ cat.images.length }} photos</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.our-work-section {
  padding: var(--hoh-section-py) 0;
  background: var(--hoh-surface);
}

.work-intro {
  text-align: center;
  color: var(--hoh-text-muted);
  font-size: 1.05rem;
  margin: -1.5rem auto 2.5rem;
  max-width: 32rem;
  line-height: 1.7;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.25rem;
}

.work-card {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: var(--hoh-radius-lg);
  overflow: hidden;
  text-align: left;
}

.work-image-wrap {
  position: relative;
  border-radius: var(--hoh-radius-lg);
  overflow: hidden;
  aspect-ratio: 1;
}

.work-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--hoh-ease);
}

.work-card:hover .work-image {
  transform: scale(1.05);
}

.work-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 26, 26, 0.78) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.35rem;
  gap: 0.35rem;
}

.work-title {
  font-family: var(--hoh-font-display);
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
  margin: 0;
}

.work-count {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 768px) {
  .work-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>
