<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { BRANCHES_DATA } from '@/utils/const'

const branches = BRANCHES_DATA

const openDirections = (link: string) => {
  window.open(link, '_blank')
}
</script>

<template>
  <section class="branches-section">
    <div class="page-container">
      <SectionHeader title="Branches" subtitle="Call us" />
      <p class="branches-intro">
        Tap a branch to call that location — we&apos;ll help you book your appointment.
      </p>
      <div class="branches-grid">
        <article v-for="branch in branches" :key="branch.name" class="branch-card">
          <a
            v-if="branch.phoneTel"
            class="branch-image-container"
            :href="`tel:${branch.phoneTel}`"
            :aria-label="`Call ${branch.name} at ${branch.phone}`"
          >
            <img :src="branch.thumbnail" :alt="branch.name" class="branch-image" />
            <div class="branch-overlay">
              <div class="branch-content">
                <span class="book-btn">
                  <span class="btn-text">Call us</span>
                  <svg class="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.25a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </a>
          <div class="branch-footer">
            <h3 class="branch-name">{{ branch.name }}</h3>
            <button type="button" class="location-link" @click="openDirections(branch.googleMapsLink)">
              Get directions
            </button>
          </div>
        </article>
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

.branches-intro {
  text-align: center;
  color: var(--hoh-text-muted);
  font-size: 1rem;
  margin: -1rem auto 2rem;
  max-width: 32rem;
  line-height: 1.65;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
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
  padding: 0;
  border: none;
  cursor: pointer;
  display: block;
  background: none;
  text-decoration: none;
  color: inherit;
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
}

.branch-content {
  padding: 2rem 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
}

.branch-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;
}

.branch-name {
  font-family: var(--hoh-font-display);
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
  color: var(--hoh-secondary);
  letter-spacing: 0.02em;
}

.location-link {
  background: none;
  border: none;
  padding: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hoh-text-muted);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.location-link:hover {
  color: var(--hoh-secondary);
}

.book-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 1.15rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--hoh-primary);
  color: white;
  box-shadow: var(--hoh-shadow-sm);
}

.branch-image-container:hover .book-btn {
  background: var(--hoh-secondary);
  transform: translateY(-2px);
}

.phone-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.btn-text {
  font-size: 0.85rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .branches-grid {
    gap: 1.5rem;
  }

  .branch-image-container {
    height: 280px;
  }

  .branch-content {
    padding: 1.5rem 1rem 1.25rem;
  }

  .branch-name {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .branches-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .branch-image-container {
    height: 240px;
  }

  .branch-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
