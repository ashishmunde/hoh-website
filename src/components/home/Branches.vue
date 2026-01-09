<script setup lang="ts">
import { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_HOVER, SECONDARY_HOVER, BRANCHES_DATA } from '@/utils/const'

const branches = BRANCHES_DATA

const openGoogleMaps = (link: string) => {
  window.open(link, '_blank')
}
</script>

<template>
  <section class="branches-section">
    <div class="container">
      <h2 class="section-title">Branches</h2>
      <div class="branches-grid">
        <div
          v-for="branch in branches"
          :key="branch.name"
          class="branch-card"
        >
          <div class="branch-image-container">
            <img :src="branch.thumbnail" :alt="branch.name" class="branch-image" />
            <div class="branch-overlay">
              <div class="branch-content">
                <button 
                  @click.stop="openGoogleMaps(branch.googleMapsLink)" 
                  class="location-btn"
                >
                  <svg class="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                  <span class="location-text">Get Directions</span>
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <h3 class="branch-name">{{ branch.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.branches-section {
  padding: 4rem 0;
  background-color: #f8f8f8;
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

.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.branch-card {
  background: transparent;
  overflow: visible;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.branch-card:hover {
  transform: translateY(-8px);
}

.branch-image-container {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.branch-card:hover .branch-image-container {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.branch-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.branch-card:hover .branch-image {
  transform: scale(1.1);
}

.branch-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
  padding: 0;
  color: white;
  transition: all 0.4s ease;
}

.branch-content {
  padding: 2rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
}

.branch-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0 0 0;
  padding: 0;
  text-align: center;
  color: v-bind(SECONDARY_COLOR);
  letter-spacing: -0.02em;
}

.location-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  background-color: white;
  color: v-bind(SECONDARY_COLOR);
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: fit-content;
  align-self: center;
}

.location-btn:hover {
  background-color: v-bind(PRIMARY_COLOR);
  color: white;
  transform: translateX(4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.location-btn:active {
  transform: translateX(2px) scale(0.98);
}

.location-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.location-btn:hover .location-icon {
  transform: scale(1.1);
}

.arrow-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-left: auto;
  transition: transform 0.3s ease;
}

.location-btn:hover .arrow-icon {
  transform: translate(2px, -2px);
}

.location-text {
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
}

/* Responsive design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .branches-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .branch-image-container {
    height: 280px;
  }
  
  .branch-content {
    padding: 1.5rem 1.25rem 1.25rem;
  }
  
  .branch-name {
    font-size: 1.5rem;
  }
  
  .location-btn {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .branches-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .branch-image-container {
    height: 250px;
  }
  
  .branch-content {
    padding: 1.25rem 1rem 1rem;
    gap: 0.75rem;
  }
  
  .branch-name {
    font-size: 1.25rem;
  }

  .location-btn {
    padding: 0.65rem 0.9rem;
    font-size: 0.85rem;
    gap: 0.5rem;
  }
  
  .location-icon {
    width: 18px;
    height: 18px;
  }
  
  .arrow-icon {
    width: 14px;
    height: 14px;
  }
}
</style>
