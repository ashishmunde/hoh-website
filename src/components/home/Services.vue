<script setup lang="ts">
import { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_HOVER, SECONDARY_HOVER } from '@/utils/const'
import {
  BALAYAGE_IMAGES,
  FEMALE_HAIRCUT_IMAGES,
  MENS_HAIRCUT_IMAGES,
  HIGHLIGHTS_IMAGES,
  GLOBAL_IMAGES,
  HAIR_TREATMENT_IMAGES,
  MAKEUP_AND_HAIRSTYLE_IMAGES,
} from '@/utils/images'
import { useRouter } from 'vue-router'

interface Service {
  id: number
  title: string
  image: string
  description: string
}

const router = useRouter()

const services: Service[] = [
  {
    id: 1,
    title: "Balayage",
    image: BALAYAGE_IMAGES[0],
    description: "Professional balayage hair coloring"
  },
  {
    id: 2,
    title: "Female Haircut",
    image: FEMALE_HAIRCUT_IMAGES[0],
    description: "Expert female haircut and styling"
  },
  {
    id: 3,
    title: "Men's Haircut",
    image: MENS_HAIRCUT_IMAGES[0],
    description: "Professional men's haircut services"
  },
  {
    id: 4,
    title: "Highlights",
    image: HIGHLIGHTS_IMAGES[0],
    description: "Hair highlighting and color services"
  },
  {
    id: 5,
    title: "Global",
    image: GLOBAL_IMAGES[0],
    description: "Comprehensive hair services"
  },
  {
    id: 6,
    title: "Hair Treatment",
    image: HAIR_TREATMENT_IMAGES[0],
    description: "Hair care and treatment services"
  },
  {
    id: 7,
    title: "Make-up and Hairstyle",
    image: MAKEUP_AND_HAIRSTYLE_IMAGES[0],
    description: "Professional makeup and hairstyling"
  }
]

const handleServiceClick = (service: Service) => {
  router.push({
    name: 'gallery',
    query: { category: service.title }
  })
}
</script>

<template>
  <section class="services-section">
    <div class="container">
      <h2 class="services-title">Services</h2>
      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card"
          @click="handleServiceClick(service)"
        >
          <div class="service-image-container">
            <img :src="service.image" :alt="service.title" class="service-image" />
            <div class="service-overlay">
              <h3 class="service-title">{{ service.title }}</h3>
              <button class="know-more-btn">Know More</button>
            </div>
          </div>
        </div>
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
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.services-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: v-bind(SECONDARY_COLOR);
  margin-bottom: 3rem;
  text-align: center;
}

.services-grid {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1rem 0 2rem 0;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  /* Hide scrollbar for webkit browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

/* Hide scrollbar for webkit browsers */
.services-grid::-webkit-scrollbar {
  display: none;
}

.service-card {
  flex: 0 0 350px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin: 0.5rem 0;
  scroll-snap-align: start;
}

.service-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  border-radius: 12px;
  transition: transform 0.3s ease;
  transform-origin: center;
  z-index: -1;
}

.service-card:hover::before {
  transform: scale(1.05);
}

.service-image-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  transform-origin: center;
}

.service-card:hover .service-image-container {
  transform: scale(1.05);
}

.service-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

.service-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 2rem 1.5rem 1.5rem;
  color: white;
  transition: all 0.3s ease;
}

.service-card:hover .service-overlay {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
}

.service-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-align: center;
}

.know-more-btn {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
}

.know-more-btn:hover {
  background: white;
  color: v-bind(SECONDARY_COLOR);
  transform: scale(1.05);
}

/* Responsive design */
@media (max-width: 768px) {
  .services-grid {
    gap: 1rem;
    padding: 0.5rem 0 1.5rem 0;
  }
  
  .service-card {
    flex: 0 0 300px;
    margin: 0.25rem 0;
  }
  
  .service-image {
    height: 250px;
  }
  
  .services-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
