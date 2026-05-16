<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { PRIMARY_COLOR, SECONDARY_COLOR, BRANCHES_DATA } from '@/utils/const'

const branches = BRANCHES_DATA

const openGoogleMaps = (link: string) => {
  window.open(link, '_blank')
}
</script>

<template>
  <section class="branches-section">
    <div class="page-container">
      <SectionHeader title="Branches" subtitle="Visit us" />
      <div class="branches-grid">
        <div
          v-for="branch in branches"
          :key="branch.name"
          class="branch-card card-elevated"
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
  padding: var(--hoh-section-py) 0;
  background: var(--hoh-bg-alt);
  width: 100%;
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
  position: relative;
}

.branch-image-container {
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
  border-radius: var(--hoh-radius-lg);
}

.branch-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.branch-card:hover .branch-image {
  transform: scale(1.06);
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
  font-family: var(--hoh-font-display);
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0 0;
  text-align: center;
  color: var(--hoh-secondary);
  letter-spacing: 0.02em;
}

.location-btn {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.15rem;
  background: var(--hoh-surface);
  color: var(--hoh-secondary);
  border: none;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s var(--hoh-ease);
  box-shadow: var(--hoh-shadow-sm);
  width: fit-content;
  align-self: center;
}

.location-btn:hover {
  background: var(--hoh-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--hoh-shadow-md);
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
