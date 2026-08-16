<script setup lang="ts">
import TopBar from '@/components/home/TopBar.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <div class="about-page">
    <TopBar />
    <main class="about-content page-container">
      <h1 class="about-title">About Us</h1>
      <p class="about-lead">
        At The House of Hair, we believe that great hair is more than just a style—it's a reflection
        of your confidence and personality. Our mission is to provide every client with a premium
        salon experience through expert consultation, personalized services, and exceptional
        customer care.
      </p>
      <p class="about-text">
        With a team of skilled and passionate professionals, we specialize in modern haircuts, hair
        coloring, balayage, highlights, hair spas, keratin and nanoplastia treatments, scalp care,
        and complete beauty and grooming services. We use high-quality products and the latest
        techniques to ensure healthy, beautiful, and long-lasting results.
      </p>
      <p class="about-text">
        Whether you're looking for a complete makeover, routine grooming, or advanced hair
        treatments, we take the time to understand your unique style and deliver results that suit
        your personality and lifestyle.
      </p>
      <p class="about-text">
        At The House of Hair, hygiene, comfort, and customer satisfaction are at the heart of
        everything we do. From the moment you walk in, you'll experience a warm, welcoming
        atmosphere where your beauty goals become our priority.
      </p>
      <p class="about-text">
        Visit any of our Pune branches and discover why thousands of happy clients trust The House
        of Hair for their hair and beauty needs. Because every visit isn't just an appointment—it's
        a step towards looking and feeling your absolute best.
      </p>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  background: var(--hoh-bg);
  display: flex;
  flex-direction: column;
}

.about-content {
  padding-block: var(--hoh-section-py);
  max-width: 42rem;
}

.about-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 500;
  color: var(--hoh-secondary);
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}

.about-lead {
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: var(--hoh-secondary);
  line-height: 1.7;
  margin-bottom: 1.15rem;
}

.about-text {
  font-size: clamp(0.95rem, 2.2vw, 1.05rem);
  color: var(--hoh-text-muted);
  line-height: 1.75;
  margin-bottom: 1.15rem;
}

.about-text:last-child {
  margin-bottom: 0;
}
</style>
