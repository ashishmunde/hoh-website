<script setup lang="ts">
import { ref } from 'vue'
import { BANNER_IMAGE, BANNER_IMAGE_MOBILE } from '@/utils/const'
import BookingForm from '@/components/booking/BookingForm.vue'
import BookingModal from '@/components/booking/BookingModal.vue'
import ThankYouModal from '@/components/booking/ThankYouModal.vue'
import Services from './Services.vue'
import TopBar from './TopBar.vue'
import Branches from './Branches.vue'
import OurWork from './OurWork.vue'
import LocalSeo from './LocalSeo.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

const bookingOpen = ref(false)
const thanksOpen = ref(false)
const thanksBranch = ref('')

function onBookingSuccess(chosen: string) {
  bookingOpen.value = false
  thanksBranch.value = chosen
  thanksOpen.value = true
}
</script>

<template>
  <div class="home-page">
    <TopBar />
    <section class="hero">
      <div class="hero-media">
        <picture>
          <source media="(max-width: 768px)" :srcset="BANNER_IMAGE_MOBILE" />
          <img
            :src="BANNER_IMAGE"
            alt="The House of Hair — best unisex salon and celebrity hairstylist in Pune"
            class="hero-image"
          />
        </picture>
        <div class="hero-overlay" />
        <button type="button" class="hero-book-btn" @click="bookingOpen = true">
          Book Now
        </button>
      </div>
      <div class="hero-content">
        <p class="hero-eyebrow">Pune · Unisex Salon · Celebrity Stylist</p>
        <h1 class="hero-title">The House of Hair</h1>
        <p class="hero-tagline">Best hair salon in Karve Nagar, Kothrud &amp; Aundh</p>
      </div>
      <aside class="hero-booking" aria-label="Book an appointment">
        <h2 class="hero-booking-title">Book an appointment</h2>
        <p class="hero-booking-note">Choose your branch and we will confirm your slot shortly.</p>
        <BookingForm compact @success="onBookingSuccess" />
      </aside>
    </section>
    <BookingModal
      :open="bookingOpen"
      @close="bookingOpen = false"
      @success="onBookingSuccess"
    />
    <ThankYouModal
      :open="thanksOpen"
      :branch-name="thanksBranch"
      @close="thanksOpen = false"
    />
    <Services />
    <Branches />
    <OurWork />
    <LocalSeo />
    <SiteFooter />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  background: var(--hoh-bg);
}

.hero {
  position: relative;
  width: 100%;
  background: var(--hoh-secondary);
}

.hero-media {
  position: relative;
  line-height: 0;
}

.hero picture {
  display: block;
  width: 100%;
}

.hero-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center top;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(26, 26, 26, 0.55) 0%,
    rgba(26, 26, 26, 0.15) 45%,
    rgba(26, 26, 26, 0.05) 100%
  );
}

.hero-content {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.hero-booking {
  position: absolute;
  top: 50%;
  right: clamp(1.25rem, 4.5vw, 4.5rem);
  transform: translateY(-50%);
  z-index: 2;
  width: min(22.5rem, 40%);
  max-height: calc(100% - 2rem);
  overflow: visible;
  padding: 1.35rem 1.25rem 1.25rem;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: var(--hoh-radius-lg);
  box-shadow: 0 12px 40px rgba(26, 26, 26, 0.18);
}

.hero-booking-title {
  font-family: var(--hoh-font-display);
  font-size: 1.55rem;
  font-weight: 500;
  color: var(--hoh-secondary);
  margin: 0 0 0.25rem;
}

.hero-booking-note {
  margin: 0 0 1rem;
  font-size: 0.82rem;
  line-height: 1.5;
  color: var(--hoh-text-muted);
}

.hero-book-btn {
  display: none;
}

@media (max-width: 768px) {
  .hero {
    background: var(--hoh-bg);
  }

  .hero-overlay {
    background: none;
  }

  .hero-booking {
    display: none;
  }

  .hero-book-btn {
    display: block;
    position: absolute;
    z-index: 2;
    right: 0.85rem;
    bottom: 1.1rem;
    padding: 0.75rem 1.35rem;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    color: var(--hoh-secondary);
    font-family: var(--hoh-font-body);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 10px 28px rgba(26, 26, 26, 0.18);
  }
}
</style>
