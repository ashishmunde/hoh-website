<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { BRANCHES_DATA, LOGO_IMAGE, MAIN_CONTACT } from '@/utils/const'

const year = new Date().getFullYear()

const quickLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/yourpage',
    icon: 'https://cdn.simpleicons.org/instagram/ffffff',
  },
  {
    name: 'WhatsApp',
    href: MAIN_CONTACT.whatsappUrl,
    icon: 'https://cdn.simpleicons.org/whatsapp/ffffff',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/yourchannel',
    icon: 'https://cdn.simpleicons.org/youtube/ffffff',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/yourpage',
    icon: 'https://cdn.simpleicons.org/facebook/ffffff',
  },
]

const karveBranch = BRANCHES_DATA.find((b) => b.name === 'Karve Nagar')
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner page-container">
      <div class="footer-grid">
        <div class="footer-brand">
          <RouterLink to="/home" class="footer-logo-link">
            <img :src="LOGO_IMAGE" alt="The House of Hair" class="footer-logo" />
          </RouterLink>
          <p class="footer-tagline">
            Premium unisex salon in Pune — hair, beauty, and makeup crafted with care.
          </p>
          <div class="footer-social">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="social.icon" alt="" class="social-icon" />
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Explore</h3>
          <ul class="footer-list">
            <li v-for="link in quickLinks" :key="link.to">
              <RouterLink :to="link.to" class="footer-link">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-heading">Branches</h3>
          <ul class="footer-list">
            <li v-for="branch in BRANCHES_DATA" :key="branch.name">
              <a
                :href="branch.googleMapsLink"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ branch.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-col footer-contact">
          <h3 class="footer-heading">Main Branch</h3>
          <p class="contact-branch">{{ MAIN_CONTACT.branchName }}</p>
          <address class="contact-address">
            <template v-for="(line, i) in MAIN_CONTACT.addressLines" :key="i">
              {{ line }}<br v-if="i < MAIN_CONTACT.addressLines.length - 1" />
            </template>
          </address>
          <a :href="`tel:${MAIN_CONTACT.phoneTel}`" class="contact-row">
            {{ MAIN_CONTACT.phone }}
          </a>
          <a :href="`mailto:${MAIN_CONTACT.email}`" class="contact-row">
            {{ MAIN_CONTACT.email }}
          </a>
          <a
            v-if="karveBranch"
            :href="karveBranch.googleMapsLink"
            class="contact-directions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ year }} The House of Hair. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: auto;
  background: var(--hoh-secondary);
  color: rgba(255, 255, 255, 0.88);
  padding: clamp(3rem, 6vw, 4.5rem) 0 0;
}

.footer-inner {
  padding-bottom: 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.9fr 1.3fr;
  gap: 2.5rem 2rem;
  padding-bottom: 2.75rem;
}

.footer-logo-link {
  display: inline-block;
  margin-bottom: 1.15rem;
}

.footer-logo {
  height: 52px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.footer-tagline {
  margin: 0 0 1.35rem;
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  max-width: 22rem;
}

.footer-social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  transition: background 0.2s var(--hoh-ease), border-color 0.2s var(--hoh-ease);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.45);
}

.social-icon {
  width: 1rem;
  height: 1rem;
  object-fit: contain;
}

.footer-heading {
  font-family: var(--hoh-font-display);
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #fff;
  margin: 0 0 1rem;
}

.footer-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s var(--hoh-ease);
}

.footer-link:hover {
  color: #fff;
}

.contact-branch {
  margin: 0 0 0.65rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
}

.contact-address {
  font-style: normal;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
  margin: 0 0 1rem;
}

.contact-row {
  display: block;
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  transition: color 0.2s var(--hoh-ease);
}

.contact-row:hover {
  color: #fff;
}

.contact-directions {
  display: inline-block;
  margin-top: 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  padding-bottom: 0.15rem;
  transition: color 0.2s var(--hoh-ease), border-color 0.2s var(--hoh-ease);
}

.contact-directions:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.7);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1.25rem 0 1.5rem;
}

.copyright {
  margin: 0;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.55);
  text-align: center;
}

@media (max-width: 960px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.25rem 1.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-tagline {
    max-width: none;
  }
}
</style>
