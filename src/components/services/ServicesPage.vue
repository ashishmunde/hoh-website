<script setup lang="ts">
import TopBar from '../home/TopBar.vue'
import MensHaircut from './MensHaircut.vue'
import FemaleHaircut from './FemaleHaircut.vue'
import MensHairColour from './MensHairColour.vue'
import Highlights from './Highlights.vue'
import MakeupArtist from './MakeupArtist.vue'
import Balayage from './Balayage.vue'
import HairTreatment from './HairTreatment.vue'
import { ref } from 'vue'
import { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_HOVER, SECONDARY_HOVER } from '@/utils/const'

const selectedService = ref<string | null>(null)

const services = [
  { id: 'mens-haircut', name: "Men's Haircut", component: MensHaircut },
  { id: 'female-haircut', name: 'Female Haircut', component: FemaleHaircut },
  { id: 'mens-hair-colour', name: "Men's Hair Colour", component: MensHairColour },
  { id: 'highlights', name: 'Highlights', component: Highlights },
  { id: 'makeup-artist', name: 'Makeup Artist', component: MakeupArtist },
  { id: 'balayage', name: 'Balayage', component: Balayage },
  { id: 'hair-treatment', name: 'Hair Treatment', component: HairTreatment }
]

const selectService = (serviceId: string) => {
  selectedService.value = serviceId
}

const getSelectedServiceComponent = () => {
  const service = services.find(s => s.id === selectedService.value)
  return service ? service.component : null
}
</script>

<template>
  <div class="services-page">
    <TopBar />
    
    <!-- Services Navigation Bar -->
    <div class="services-navbar">
      <div class="services-container">
        <button
          v-for="service in services"
          :key="service.id"
          @click="selectService(service.id)"
          :class="['service-nav-btn', { active: selectedService === service.id }]"
        >
          {{ service.name }}
        </button>
      </div>
    </div>

    <!-- Service Content Area -->
    <div class="service-content">
      <div v-if="selectedService" class="selected-service">
        <component :is="getSelectedServiceComponent()" />
      </div>
      <div v-else class="welcome-message">
        <h1>Welcome to Our Services</h1>
        <p>Select a service from the navigation bar above to view details, photos, and pricing.</p>
        <div class="services-grid">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="service-card"
            @click="selectService(service.id)"
          >
            <h3>{{ service.name }}</h3>
            <p>Click to view details</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.services-page {
  min-height: 100vh;
  background-color: #f8f8f8;
}

.services-navbar {
  background: white;
  border-bottom: 2px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  overflow-x: auto;
  gap: 0.5rem;
}

.service-nav-btn {
  padding: 1rem 1.5rem;
  border: none;
  background: transparent;
  color: v-bind(SECONDARY_COLOR);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
}

.service-nav-btn:hover {
  background: #f0f0f0;
  color: v-bind(SECONDARY_COLOR);
}

.service-nav-btn.active {
  background: v-bind(PRIMARY_COLOR);
  color: white;
  border-bottom-color: v-bind(PRIMARY_HOVER);
}

.service-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.selected-service {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.welcome-message {
  text-align: center;
  padding: 4rem 2rem;
}

.welcome-message h1 {
  font-size: 2.5rem;
  color: v-bind(SECONDARY_COLOR);
  margin-bottom: 1rem;
}

.welcome-message p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: v-bind(PRIMARY_COLOR);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-card h3 {
  font-size: 1.3rem;
  color: v-bind(SECONDARY_COLOR);
  margin-bottom: 1rem;
}

.service-card p {
  color: #666;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-container {
    padding: 0 1rem;
  }
  
  .service-nav-btn {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .service-content {
    padding: 1rem;
  }
  
  .welcome-message {
    padding: 2rem 1rem;
  }
  
  .welcome-message h1 {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .services-container {
    padding: 0 0.5rem;
  }
  
  .service-nav-btn {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
  
  .welcome-message h1 {
    font-size: 1.8rem;
  }
  
  .welcome-message p {
    font-size: 1rem;
  }
}
</style>
