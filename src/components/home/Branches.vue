<script setup lang="ts">
import { ref } from 'vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import BookingModal from '@/components/booking/BookingModal.vue'
import { BRANCHES_DATA } from '@/utils/const'

const branches = BRANCHES_DATA
const bookingOpen = ref(false)
const selectedBranch = ref<string | undefined>()

const openBooking = (branchName: string) => {
  selectedBranch.value = branchName
  bookingOpen.value = true
}

const openDirections = (link: string) => {
  window.open(link, '_blank')
}
</script>

<template>
  <section class="branches-section">
    <div class="page-container">
      <SectionHeader title="Branches" subtitle="Book with us" />
      <p class="branches-intro">
        Tap a branch to book your appointment — choose your preferred location, date &amp; time.
      </p>
      <div class="branches-grid">
        <article v-for="branch in branches" :key="branch.name" class="branch-card">
          <button
            type="button"
            class="branch-image-container"
            @click="openBooking(branch.name)"
          >
            <img :src="branch.thumbnail" :alt="branch.name" class="branch-image" />
            <div class="branch-overlay">
              <div class="branch-content">
                <span class="book-btn">
                  <span class="btn-text">Book appointment</span>
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </button>
          <div class="branch-footer">
            <h3 class="branch-name">{{ branch.name }}</h3>
            <button type="button" class="location-link" @click="openDirections(branch.googleMapsLink)">
              Get directions
            </button>
          </div>
        </article>
      </div>
    </div>

    <BookingModal
      :open="bookingOpen"
      :initial-branch="selectedBranch"
      @close="bookingOpen = false"
    />
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

.arrow-icon {
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
