<script setup lang="ts">
import { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_HOVER, SECONDARY_HOVER } from '@/utils/const'
import { ALL_GALLERY_IMAGES, GALLERY_IMAGES_BY_CATEGORY } from '@/utils/images'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push({ name: 'home' })
  }
}

// Get category from query parameter
const category = computed(() => route.query.category as string | undefined)

// Map service names to category keys
const categoryMap: Record<string, keyof typeof GALLERY_IMAGES_BY_CATEGORY> = {
  'Balayage': 'balayage',
  'Female Haircut': 'femaleHaircut',
  "Men's Haircut": 'mensHaircut',
  'Highlights': 'highlights',
  'Global': 'global',
  'Hair Treatment': 'hairTreatment',
  'Make-up and Hairstyle': 'makeupAndHairstyle',
}

// Get filtered images based on category
const galleryImages = computed(() => {
  if (category.value) {
    const categoryKey = categoryMap[category.value] || category.value as keyof typeof GALLERY_IMAGES_BY_CATEGORY
    return GALLERY_IMAGES_BY_CATEGORY[categoryKey] || ALL_GALLERY_IMAGES
  }
  return ALL_GALLERY_IMAGES
})

const hasImages = computed(() => galleryImages.value.length > 0)

// Gallery title based on category
const galleryTitle = computed(() => {
  if (category.value) {
    return category.value
  }
  return 'Gallery'
})
</script>

<template>
  <div class="gallery-page">
    <div class="gallery-container">
      <div class="gallery-header">
        <button @click="goBack" class="back-button">
          <span class="back-icon">←</span>
          <span class="back-text">Back</span>
        </button>
        <h1 class="gallery-title">{{ galleryTitle }}</h1>
      </div>
      
      <div v-if="hasImages" class="gallery-grid">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="gallery-item"
        >
          <img :src="image" :alt="`Gallery image ${index + 1}`" class="gallery-image" />
        </div>
      </div>
      
      <div v-else class="empty-gallery">
        <div class="empty-message">
          <h2>Gallery Coming Soon</h2>
          <p>Images will be displayed here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-page {
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 2rem 0;
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.gallery-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 3rem;
}

.back-button {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: v-bind(PRIMARY_COLOR);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background-color: v-bind(PRIMARY_HOVER);
  transform: translateX(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.back-icon {
  font-size: 1.2rem;
  font-weight: bold;
}

.back-text {
  font-size: 1rem;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: v-bind(SECONDARY_COLOR);
  text-align: center;
  flex: 1;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: white;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

.empty-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 4rem 2rem;
}

.empty-message {
  text-align: center;
  color: v-bind(SECONDARY_COLOR);
}

.empty-message h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: v-bind(PRIMARY_COLOR);
}

.empty-message p {
  font-size: 1.1rem;
  color: #666666;
}

/* Responsive design */
@media (max-width: 768px) {
  .gallery-container {
    padding: 0 1rem;
  }
  
  .gallery-header {
    margin-bottom: 2rem;
  }
  
  .gallery-title {
    font-size: 2rem;
  }
  
  .back-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .back-icon {
    font-size: 1rem;
  }
  
  .back-text {
    font-size: 0.9rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .gallery-image {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-title {
    font-size: 1.75rem;
  }
  
  .gallery-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .back-button {
    position: relative;
    left: auto;
  }
  
  .gallery-title {
    width: 100%;
    text-align: left;
  }
}
</style>
