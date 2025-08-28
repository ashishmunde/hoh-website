<script setup lang="ts">
import { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_HOVER, SECONDARY_HOVER } from '@/utils/const'

const serviceDetails = {
  title: "Makeup Artist",
  description: "Professional makeup services for special occasions and events",
  price: "Starting from ₹1999",
  duration: "60-120 minutes",
  photos: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552642084-9a408bb0d9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ]
}
</script>

<template>
  <div class="service-page">
    <div class="service-header">
      <h1>{{ serviceDetails.title }}</h1>
      <p class="service-description">{{ serviceDetails.description }}</p>
      <div class="service-info">
        <span class="price">{{ serviceDetails.price }}</span>
        <span class="duration">{{ serviceDetails.duration }}</span>
      </div>
    </div>
    
    <div class="photo-gallery">
      <div 
        v-for="(photo, index) in serviceDetails.photos" 
        :key="index"
        class="photo-item"
      >
        <img :src="photo" :alt="`${serviceDetails.title} - Photo ${index + 1}`" />
      </div>
    </div>
    
    <div class="service-actions">
      <button class="book-now-btn">Book Now</button>
      <button class="call-btn">Call for Appointment</button>
    </div>
  </div>
</template>

<style scoped>
.service-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-header {
  text-align: center;
  margin-bottom: 3rem;
}

.service-header h1 {
  font-size: 2.5rem;
  color: v-bind(SECONDARY_COLOR);
  margin-bottom: 1rem;
}

.service-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.service-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.price, .duration {
  background: #f8f8f8;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  color: v-bind(SECONDARY_COLOR);
}

.photo-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.photo-item {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.photo-item:hover {
  transform: translateY(-5px);
}

.photo-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.service-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.book-now-btn, .call-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-now-btn {
  background: v-bind(PRIMARY_COLOR);
  color: white;
}

.book-now-btn:hover {
  background: v-bind(PRIMARY_HOVER);
}

.call-btn {
  background: v-bind(SECONDARY_COLOR);
  color: white;
}

.call-btn:hover {
  background: v-bind(SECONDARY_HOVER);
}

@media (max-width: 768px) {
  .service-page {
    padding: 1rem;
  }
  
  .service-header h1 {
    font-size: 2rem;
  }
  
  .service-info {
    flex-direction: column;
    gap: 1rem;
  }
  
  .photo-gallery {
    grid-template-columns: 1fr;
  }
  
  .service-actions {
    flex-direction: column;
  }
}
</style>
