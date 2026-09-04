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
      <aside class="hero-booking" aria-label="Request Appointment">
        <h2 class="hero-booking-title">Request Appointment</h2>
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
  container-type: inline-size;
  container-name: hero;
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
  --hero-widget-pad: clamp(0.7rem, 2.4cqi, 1.6rem);
  --hero-widget-gap: clamp(0.45rem, 1.8cqi, 1rem);
  position: absolute;
  top: 50%;
  right: clamp(0.85rem, 3.2cqi, 4.5rem);
  transform: translateY(-50%);
  z-index: 2;
  width: 32cqi;
  min-width: 16rem;
  max-width: 36cqi;
  max-height: calc(100% - clamp(1.25rem, 4cqi, 2.5rem));
  overflow: visible;
  padding: var(--hero-widget-pad);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: clamp(12px, 1.2cqi, var(--hoh-radius-lg));
  box-shadow: 0 12px 40px rgba(26, 26, 26, 0.18);
}

.hero-booking-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(1.15rem, 2.7cqi, 1.85rem);
  font-weight: 500;
  color: var(--hoh-secondary);
  margin: 0 0 0.2rem;
}

.hero-booking-note {
  margin: 0 0 var(--hero-widget-gap);
  font-size: clamp(0.72rem, 1.45cqi, 0.9rem);
  line-height: 1.45;
  color: var(--hoh-text-muted);
}

.hero-booking :deep(.compact) {
  gap: var(--hero-widget-gap);
}

.hero-booking :deep(.compact .form-grid) {
  gap: clamp(0.4rem, 1.5cqi, 0.85rem);
}

.hero-booking :deep(.compact .field) {
  gap: clamp(0.2rem, 0.7cqi, 0.4rem);
}

.hero-booking :deep(.compact .field-label) {
  font-size: clamp(0.58rem, 1.15cqi, 0.75rem);
}

.hero-booking :deep(.compact .field-input) {
  padding: clamp(0.42rem, 1.15cqi, 0.7rem) clamp(0.55rem, 1.4cqi, 0.85rem);
  font-size: clamp(0.8rem, 1.5cqi, 1rem);
}

.hero-booking :deep(.compact .btn-primary) {
  padding: clamp(0.5rem, 1.3cqi, 0.85rem) 1.15rem;
  font-size: clamp(0.68rem, 1.25cqi, 0.82rem);
}

.hero-book-btn {
  display: none;
}

@media (min-width: 769px) and (max-width: 960px) {
  .hero-booking-note {
    display: none;
  }
}

@media (min-width: 769px) and (max-height: 820px) {
  .hero-booking-note {
    display: none;
  }

  .hero-booking {
    --hero-widget-pad: 0.75rem;
    --hero-widget-gap: 0.45rem;
  }
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
