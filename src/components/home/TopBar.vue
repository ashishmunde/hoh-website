<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { LOGO_IMAGE, PRIMARY_COLOR, SECONDARY_COLOR } from '@/utils/const'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
]

const socialMediaIcons = [
  {
    name: 'Instagram',
    icon: 'https://cdn.simpleicons.org/instagram/E4405F',
    link: 'https://instagram.com/yourpage',
  },
  {
    name: 'WhatsApp',
    icon: 'https://cdn.simpleicons.org/whatsapp/25D366',
    link: 'https://wa.me/yourphonenumber',
  },
  {
    name: 'YouTube',
    icon: 'https://cdn.simpleicons.org/youtube/FF0000',
    link: 'https://youtube.com/yourchannel',
  },
  {
    name: 'Facebook',
    icon: 'https://cdn.simpleicons.org/facebook/1877F2',
    link: 'https://facebook.com/yourpage',
  },
]

const locations = ['Karve Nagar', 'Paud Road', 'Aundh']

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(() => route.path, closeMenu)
</script>

<template>
  <div class="topbar">
    <div class="top-strip">
      <div class="top-strip-content">
        <div class="franchise-message">WE DON'T SELL FRANCHISE.</div>
        <div class="locations">
          <span class="location-text">{{ locations.join(' · ') }}</span>
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <div class="bottom-strip-content">
        <RouterLink to="/home" class="logo-section" aria-label="Go to home page" @click="closeMenu">
          <div class="logo-container">
            <img :src="LOGO_IMAGE" alt="The House of Hair" class="logo-image" />
          </div>
        </RouterLink>

        <nav class="desktop-nav" aria-label="Main navigation">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link"
          >
            {{ link.label }}
          </RouterLink>
        </nav>

        <div class="header-actions">
          <div class="contact-section">
            <div class="social-icons">
              <a
                v-for="social in socialMediaIcons"
                :key="social.name"
                :href="social.link"
                class="social-icon"
                :title="social.name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img :src="social.icon" :alt="social.name" class="social-icon-image" />
              </a>
            </div>
            <div class="contact-item">
              <span class="contact-icon" aria-hidden="true">✉️</span>
              <div class="contact-details">
                <span class="contact-label">EMAIL</span>
                <a href="mailto:info@houseofhair.in" class="contact-value">info@houseofhair.in</a>
              </div>
            </div>
            <div class="contact-item">
              <span class="contact-icon" aria-hidden="true">📞</span>
              <div class="contact-details">
                <span class="contact-label">CONTACT</span>
                <a href="tel:+919999999999" class="contact-value">+91 9999999999</a>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="menu-toggle"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            @click="toggleMenu"
          >
            <span class="menu-bar" :class="{ open: isMenuOpen }" />
            <span class="menu-bar" :class="{ open: isMenuOpen }" />
            <span class="menu-bar" :class="{ open: isMenuOpen }" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        class="mobile-nav"
        :class="{ open: isMenuOpen }"
        aria-label="Mobile navigation"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="mobile-nav-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <div class="mobile-contact">
          <div class="social-icons">
            <a
              v-for="social in socialMediaIcons"
              :key="`mobile-${social.name}`"
              :href="social.link"
              class="social-icon"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="social.icon" :alt="social.name" class="social-icon-image" />
            </a>
          </div>
          <a href="mailto:info@houseofhair.in" class="mobile-contact-link">info@houseofhair.in</a>
          <a href="tel:+919999999999" class="mobile-contact-link">+91 9999999999</a>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 200;
  box-shadow: var(--hoh-shadow-sm);
}

.top-strip {
  background-color: v-bind(SECONDARY_COLOR);
  color: rgba(255, 255, 255, 0.92);
  padding: 0.45rem 0;
}

.top-strip-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 0 clamp(1rem, 3vw, 2rem);
}

.franchise-message {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.location-text {
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  opacity: 0.9;
}

.bottom-strip {
  background: var(--hoh-surface);
  padding: 0.75rem 0 0;
  border-bottom: 1px solid var(--hoh-border);
}

.bottom-strip-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0 clamp(1rem, 3vw, 2rem) 0.75rem;
}

.logo-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  color: inherit;
}

.logo-section:hover,
.logo-section:focus,
.logo-section:focus-visible,
.logo-section:active,
.logo-section.router-link-active,
.logo-section.router-link-exact-active {
  background-color: transparent;
  color: inherit;
  outline: none;
}

.logo-container {
  width: clamp(160px, 28vw, 280px);
  height: clamp(36px, 6vw, 56px);
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left center;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  margin-left: auto;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hoh-secondary);
  text-decoration: none;
  transition: color 0.2s var(--hoh-ease);
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: v-bind(PRIMARY_COLOR);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-section {
  display: flex;
  align-items: center;
  gap: clamp(0.75rem, 2vw, 1.5rem);
}

.social-icons {
  display: flex;
  gap: 0.65rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.social-icon:hover {
  opacity: 0.75;
}

.social-icon-image {
  width: 100%;
  height: 100%;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.contact-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.contact-label {
  font-size: 0.62rem;
  color: v-bind(SECONDARY_COLOR);
  font-weight: 700;
  letter-spacing: 0.06em;
}

.contact-value {
  font-size: 0.78rem;
  color: var(--hoh-text-muted);
  text-decoration: none;
  white-space: nowrap;
}

.contact-value:hover {
  color: v-bind(PRIMARY_COLOR);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: 1px solid var(--hoh-border);
  border-radius: 8px;
  background: var(--hoh-surface);
  cursor: pointer;
  flex-shrink: 0;
}

.menu-bar {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--hoh-secondary);
  border-radius: 2px;
  transition: transform 0.25s var(--hoh-ease), opacity 0.25s var(--hoh-ease);
}

.menu-bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-bar.open:nth-child(2) {
  opacity: 0;
}

.menu-bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-nav {
  display: none;
  flex-direction: column;
  gap: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s var(--hoh-ease);
  border-top: 1px solid transparent;
}

.mobile-nav.open {
  max-height: 400px;
  border-top-color: var(--hoh-border);
}

.mobile-nav-link {
  display: block;
  padding: 0.9rem clamp(1rem, 3vw, 2rem);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hoh-secondary);
  text-decoration: none;
  border-bottom: 1px solid var(--hoh-border);
}

.mobile-nav-link:hover,
.mobile-nav-link.router-link-active {
  color: v-bind(PRIMARY_COLOR);
  background: var(--hoh-bg-alt);
}

.mobile-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 1rem clamp(1rem, 3vw, 2rem) 1.25rem;
}

.mobile-contact-link {
  font-size: 0.9rem;
  color: var(--hoh-text-muted);
  text-decoration: none;
}

.mobile-contact-link:hover {
  color: v-bind(PRIMARY_COLOR);
}

@media (max-width: 1024px) {
  .contact-item {
    display: none;
  }
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .contact-section {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: flex;
  }

  .bottom-strip-content {
    padding-bottom: 0.75rem;
  }

  .logo-container {
    width: clamp(140px, 42vw, 220px);
    height: clamp(32px, 9vw, 48px);
  }

  .top-strip-content {
    flex-direction: column;
    text-align: center;
    padding-block: 0.35rem;
  }

  .franchise-message,
  .location-text {
    font-size: 0.62rem;
    letter-spacing: 0.12em;
  }
}

@media (max-width: 480px) {
  .logo-container {
    width: min(200px, 58vw);
    height: 40px;
  }
}
</style>
