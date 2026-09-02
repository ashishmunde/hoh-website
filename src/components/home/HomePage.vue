<script setup lang="ts">
import { BANNER_IMAGE, BANNER_IMAGE_MOBILE } from '@/utils/const'
import Services from './Services.vue'
import TopBar from './TopBar.vue'
import Branches from './Branches.vue'
import OurWork from './OurWork.vue'
import LocalSeo from './LocalSeo.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <div class="home-page">
    <TopBar />
    <section class="hero">
      <picture>
        <source media="(max-width: 768px)" :srcset="BANNER_IMAGE_MOBILE" />
        <img
          :src="BANNER_IMAGE"
          alt="The House of Hair — best unisex salon and celebrity hairstylist in Pune"
          class="hero-image"
        />
      </picture>
      <div class="hero-overlay" />
      <div class="hero-content">
        <p class="hero-eyebrow">Pune · Unisex Salon · Celebrity Stylist</p>
        <h1 class="hero-title">The House of Hair</h1>
        <p class="hero-tagline">Best hair salon in Karve Nagar, Kothrud &amp; Aundh</p>
      </div>
    </section>
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
  max-height: min(72vh, 640px);
  overflow: hidden;
  background: var(--hoh-secondary);
}

.hero picture {
  display: block;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: min(72vh, 640px);
  object-fit: cover;
  object-position: center center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 26, 26, 0.55) 0%,
    rgba(26, 26, 26, 0.15) 45%,
    rgba(26, 26, 26, 0.05) 100%
  );
}

.hero-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: clamp(2rem, 6vw, 4rem) 1.25rem;
  text-align: center;
  color: white;
}

.hero-eyebrow {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  opacity: 0.9;
  margin-bottom: 0.75rem;
}

.hero-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.1;
  margin: 0 0 0.5rem;
}

.hero-tagline {
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  font-weight: 400;
  opacity: 0.88;
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .hero {
    height: min(50vh, 420px);
    max-height: min(50vh, 420px);
  }

  .hero picture,
  .hero-image {
    width: 100%;
    height: 100%;
    max-height: min(50vh, 420px);
  }

  .hero-image {
    display: block;
    object-fit: contain;
    object-position: center center;
  }

  /* Mobile banner includes its own title; keep the heading in the DOM for SEO. */
  .hero-overlay {
    background: none;
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
}

@media (max-width: 480px) {
  .hero,
  .hero picture,
  .hero-image {
    height: min(45vh, 360px);
    max-height: min(45vh, 360px);
  }
}
</style>
