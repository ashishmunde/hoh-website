<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { MAIN_CONTACT } from '@/utils/const'
</script>

<template>
  <section class="local-seo" aria-label="Salon locations in Pune">
    <div class="page-container">
      <SectionHeader
        title="Salon near you in Pune"
        subtitle="Locations"
      />
      <div class="seo-copy">
        <p>
          Looking for a <strong>hairstylist near me</strong>, a trusted
          <strong>salon near me</strong>, or a <strong>celebrity stylist</strong> in Pune?
          <strong>The House of Hair</strong> is a premium unisex salon known for celebrity-level
          haircuts, colour, balayage, treatments, beauty services, and makeup.
        </p>
        <p>
          Visit our salons in <strong>Karve Nagar</strong>, <strong>Kothrud</strong> (Paud Road),
          and <strong>Aundh</strong> — convenient if you are searching for
          <strong>salons in Kothrud</strong>, <strong>salons in Aundh</strong>, or the best
          <strong>hair salon in Karve Nagar</strong>.
        </p>
      </div>

      <div class="location-grid">
        <article class="location-card">
          <h3>Salon in Karve Nagar</h3>
          <p>
            Main branch — Shop no. 86, Girija Shankar Vihar, Potnis Parisar, opp. Durga Cafe,
            Karve Nagar, Pune 411052.
          </p>
          <a :href="`tel:${MAIN_CONTACT.phoneTel}`" class="location-link">
            {{ MAIN_CONTACT.phone }}
          </a>
        </article>
        <article class="location-card">
          <h3>Salon in Kothrud</h3>
          <p>
            Serving Kothrud &amp; Paud Road — ideal when you search for salons in Kothrud,
            hair salon Kothrud, or a unisex stylist nearby.
          </p>
        </article>
        <article class="location-card">
          <h3>Salon in Aundh</h3>
          <p>
            Aundh salon near Gold’s Gym — book for hair colour, cuts, and beauty when you need
            salons in Aundh or a hairstylist in Aundh.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.local-seo {
  padding: var(--hoh-section-py) 0;
  background: var(--hoh-bg-alt);
}

.seo-copy {
  max-width: 46rem;
  margin: -1rem auto 2.5rem;
  text-align: center;
  color: var(--hoh-text-muted);
  font-size: 1.05rem;
  line-height: 1.75;
}

.seo-copy p {
  margin: 0 0 1rem;
}

.seo-copy strong {
  color: var(--hoh-secondary);
  font-weight: 600;
}

.location-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.location-card {
  background: var(--hoh-surface);
  border: 1px solid var(--hoh-border);
  border-radius: var(--hoh-radius-lg);
  padding: 1.5rem 1.35rem;
}

.location-card h3 {
  font-family: var(--hoh-font-display);
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--hoh-secondary);
  margin: 0 0 0.65rem;
}

.location-card p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--hoh-text-muted);
}

.location-link {
  display: inline-block;
  margin-top: 0.85rem;
  color: var(--hoh-secondary);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
}

.location-link:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .location-grid {
    grid-template-columns: 1fr;
  }

  .seo-copy {
    font-size: 0.98rem;
    margin-bottom: 2rem;
    text-align: left;
  }
}
</style>
