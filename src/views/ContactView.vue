<script setup lang="ts">
import { ref } from 'vue'
import TopBar from '@/components/home/TopBar.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import BookingForm from '@/components/booking/BookingForm.vue'
import ThankYouModal from '@/components/booking/ThankYouModal.vue'
import { BRANCHES_DATA, MAIN_CONTACT } from '@/utils/const'

const thanksOpen = ref(false)
const thanksBranch = ref('')

function onBookingSuccess(chosen: string) {
  thanksBranch.value = chosen
  thanksOpen.value = true
}
</script>

<template>
  <div class="contact-page">
    <TopBar />
    <main class="contact-content page-container">
      <h1 class="contact-title">Contact Us</h1>
      <p class="contact-lead">
        Reach out to book an appointment, ask about services, or visit any of our Pune branches.
      </p>

      <div class="contact-grid">
        <section class="contact-card">
          <h2 class="card-heading">Get in touch</h2>
          <a :href="`tel:${MAIN_CONTACT.phoneTel}`" class="contact-link">{{ MAIN_CONTACT.phone }}</a>
          <a :href="`mailto:${MAIN_CONTACT.email}`" class="contact-link">{{ MAIN_CONTACT.email }}</a>
          <a
            :href="MAIN_CONTACT.whatsappUrl"
            class="contact-link whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
          <address class="contact-address">
            <strong>{{ MAIN_CONTACT.branchName }}</strong><br />
            <template v-for="(line, i) in MAIN_CONTACT.addressLines" :key="i">
              {{ line }}<br v-if="i < MAIN_CONTACT.addressLines.length - 1" />
            </template>
          </address>
        </section>

        <section class="contact-card">
          <h2 class="card-heading">Our branches</h2>
          <ul class="branch-list">
            <li v-for="branch in BRANCHES_DATA" :key="branch.name" class="branch-item">
              <strong>{{ branch.name }}</strong>
              <span v-if="branch.address" class="branch-address">{{ branch.address }}</span>
              <a
                v-if="branch.phoneTel"
                :href="`tel:${branch.phoneTel}`"
                class="branch-phone"
              >
                {{ branch.phone }}
              </a>
              <a
                :href="branch.googleMapsLink"
                class="branch-map-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on map
              </a>
            </li>
          </ul>
        </section>
      </div>

      <section class="booking-section">
        <h2 class="card-heading">Request Appointment</h2>
        <p class="booking-note">Fill in your details and we will confirm your slot shortly.</p>
        <BookingForm @success="onBookingSuccess" />
      </section>
    </main>
    <ThankYouModal
      :open="thanksOpen"
      :branch-name="thanksBranch"
      @close="thanksOpen = false"
    />
    <SiteFooter />
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: var(--hoh-bg);
  display: flex;
  flex-direction: column;
}

.contact-content {
  padding-block: var(--hoh-section-py);
  max-width: 52rem;
}

.contact-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 500;
  color: var(--hoh-secondary);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.contact-lead {
  font-size: clamp(1rem, 2.5vw, 1.12rem);
  color: var(--hoh-text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.contact-card {
  padding: 1.5rem;
  background: var(--hoh-surface);
  border-radius: var(--hoh-radius-lg);
  box-shadow: var(--hoh-shadow-sm);
}

.card-heading {
  font-family: var(--hoh-font-display);
  font-size: 1.35rem;
  font-weight: 500;
  margin: 0 0 1rem;
  color: var(--hoh-secondary);
}

.contact-link {
  display: block;
  color: var(--hoh-secondary);
  text-decoration: none;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.contact-link:hover {
  text-decoration: underline;
}

.contact-link.whatsapp {
  color: #128c7e;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-address {
  font-style: normal;
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--hoh-text-muted);
}

.branch-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.branch-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.95rem;
}

.branch-address {
  color: var(--hoh-text-muted);
  font-size: 0.88rem;
  line-height: 1.5;
}

.branch-phone {
  color: var(--hoh-secondary);
  text-decoration: none;
  font-size: 0.92rem;
}

.branch-phone:hover {
  text-decoration: underline;
}

.branch-map-link {
  font-size: 0.82rem;
  color: var(--hoh-text-muted);
}

.booking-section {
  padding: 1.75rem;
  background: var(--hoh-surface);
  border-radius: var(--hoh-radius-lg);
  box-shadow: var(--hoh-shadow-sm);
}

.booking-note {
  margin: -0.5rem 0 1.25rem;
  color: var(--hoh-text-muted);
  font-size: 0.95rem;
}
</style>
