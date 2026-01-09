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
  name: string
  thumbnail: string
  images: string[]
}

const router = useRouter()

const services: Service[] = [
  {
    name: 'Balayage',
    thumbnail: BALAYAGE_IMAGES[0],
    images: BALAYAGE_IMAGES,
  },
  {
    name: 'Female Haircut',
    thumbnail: FEMALE_HAIRCUT_IMAGES[0],
    images: FEMALE_HAIRCUT_IMAGES,
  },
  {
    name: "Men's Haircut",
    thumbnail: MENS_HAIRCUT_IMAGES[0],
    images: MENS_HAIRCUT_IMAGES,
  },
  {
    name: 'Highlights',
    thumbnail: HIGHLIGHTS_IMAGES[0],
    images: HIGHLIGHTS_IMAGES,
  },
  {
    name: 'Global',
    thumbnail: GLOBAL_IMAGES[0],
    images: GLOBAL_IMAGES,
  },
  {
    name: 'Hair Treatment',
    thumbnail: HAIR_TREATMENT_IMAGES[0],
    images: HAIR_TREATMENT_IMAGES,
  },
  {
    name: 'Make-up and Hairstyle',
    thumbnail: MAKEUP_AND_HAIRSTYLE_IMAGES[0],
    images: MAKEUP_AND_HAIRSTYLE_IMAGES,
  },
]

const handleServiceClick = (service: Service) => {
  router.push({
    name: 'gallery',
    query: { category: service.name }
  })
}
</script>

<template>
  <section class="our-work-section">
    <div class="container">
      <h2 class="section-title">Our Work</h2>
      <div class="services-grid">
        <div
          v-for="service in services"
          :key="service.name"
          class="service-card"
          @click="handleServiceClick(service)"
        >
          <div class="service-image-container">
            <img :src="service.thumbnail" :alt="service.name" class="service-image" />
            <div class="service-overlay">
              <h3 class="service-title">{{ service.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.our-work-section {
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

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: v-bind(SECONDARY_COLOR);
  margin-bottom: 3rem;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.service-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
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
  transform: scale(1.02);
}

.service-image {
  width: 100%;
  height: 350px;
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
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .service-image {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .service-image {
    height: 250px;
  }
}
</style>
