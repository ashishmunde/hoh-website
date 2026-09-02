<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { LOGO_IMAGE, MAIN_CONTACT } from '@/utils/const'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(() => route.path, closeMenu)
</script>

<template>
  <header class="site-header">
    <div class="header-inner page-container">
      <RouterLink to="/home" class="logo-link" aria-label="Go to home page" @click="closeMenu">
        <img :src="LOGO_IMAGE" alt="The House of Hair" class="logo-image" />
      </RouterLink>

      <div class="header-end">
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

        <a
          :href="MAIN_CONTACT.whatsappUrl"
          class="cta-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book / WhatsApp
        </a>

        <button
          type="button"
          class="menu-toggle"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMenu"
        >
          <svg
            class="menu-icon"
            :class="{ open: isMenuOpen }"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      id="mobile-nav"
      class="mobile-nav"
      :class="{ open: isMenuOpen }"
      aria-label="Mobile navigation"
    >
      <div class="mobile-nav-inner page-container">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="mobile-nav-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <a
          :href="MAIN_CONTACT.whatsappUrl"
          class="mobile-cta"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          Book / WhatsApp
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 200;
  background: rgba(250, 249, 247, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--hoh-border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 4.25rem;
  padding-block: 0.65rem;
}

.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}

.logo-link:hover,
.logo-link:focus,
.logo-link:focus-visible,
.logo-link.router-link-active {
  background: transparent;
  outline: none;
}

.logo-image {
  height: 2.75rem;
  width: auto;
  max-width: 11rem;
  object-fit: contain;
  object-position: left center;
}

.header-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem 1rem;
  margin-left: auto;
  flex: 1;
  min-width: 0;
}

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.15rem;
}

.nav-link {
  padding: 0.5rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hoh-text-muted);
  text-decoration: none;
  border-radius: 999px;
  transition: color 0.2s var(--hoh-ease), background 0.2s var(--hoh-ease);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--hoh-secondary);
  background: rgba(26, 26, 26, 0.04);
}

.nav-link.router-link-active {
  color: var(--hoh-secondary);
  background: rgba(26, 26, 26, 0.06);
}

.cta-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: var(--hoh-secondary);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s var(--hoh-ease);
}

.cta-link:hover {
  background: #333;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--hoh-secondary);
  cursor: pointer;
}

.menu-icon {
  width: 1.7rem;
  height: 1.7rem;
  display: block;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.25;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.25s var(--hoh-ease);
}

.menu-icon.open {
  transform: rotate(180deg);
}

.mobile-nav {
  display: none;
  max-height: 0;
  overflow: hidden;
  border-top: 1px solid transparent;
  transition: max-height 0.35s var(--hoh-ease);
}

.mobile-nav.open {
  max-height: 28rem;
  border-top-color: var(--hoh-border);
}

.mobile-nav-inner {
  display: flex;
  flex-direction: column;
  padding-block: 0.5rem 1.25rem;
  gap: 0.15rem;
}

.mobile-nav-link {
  display: block;
  padding: 0.85rem 0;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hoh-secondary);
  text-decoration: none;
  border-bottom: 1px solid var(--hoh-border);
}

.mobile-nav-link.router-link-active {
  color: var(--hoh-primary);
}

.mobile-cta {
  display: inline-flex;
  align-self: flex-start;
  margin-top: 0.85rem;
  padding: 0.7rem 1.15rem;
  border-radius: 999px;
  background: var(--hoh-secondary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
}

@media (max-width: 768px) {
  .desktop-nav,
  .cta-link {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }

  .header-inner {
    min-height: 3.75rem;
  }

  .header-end {
    flex: 0;
    gap: 0;
  }

  .logo-image {
    height: 2.35rem;
    max-width: 9.5rem;
  }
}
</style>
