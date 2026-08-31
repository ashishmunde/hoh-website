<script setup lang="ts">
import { LOGO_IMAGE } from '@/utils/images'
</script>

<template>
  <div class="app-loader" role="status" aria-live="polite" aria-busy="true">
    <div class="loader-inner">
      <img :src="LOGO_IMAGE" alt="The House of Hair" class="loader-logo" />

      <!--
        Tabler Icons scissors (MIT) — compact 24×24 proportions
        https://github.com/tabler/tabler-icons
      -->
      <div class="scissors" aria-hidden="true">
        <svg
          class="scissors-svg"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g class="half half-a">
            <circle cx="6" cy="7" r="3" />
            <path d="M8.6 8.6 L19 19" />
          </g>
          <g class="half half-b">
            <circle cx="6" cy="17" r="3" />
            <path d="M8.6 15.4 L19 5" />
          </g>
        </svg>
      </div>

      <p class="loader-label">Loading</p>
    </div>
  </div>
</template>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(ellipse at 50% 28%, rgba(156, 153, 148, 0.12) 0%, transparent 52%),
    var(--hoh-bg, #faf9f7);
  animation: loader-fade-in 0.4s ease both;
}

.loader-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  text-align: center;
}

.loader-logo {
  width: min(200px, 55vw);
  height: auto;
  object-fit: contain;
  animation: logo-breathe 2.8s ease-in-out infinite;
}

.scissors {
  width: 48px;
  height: 48px;
  color: var(--hoh-secondary, #1a1a1a);
}

.scissors-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.scissors-svg circle,
.scissors-svg path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.half {
  transform-box: view-box;
  transform-origin: 12px 12px;
}

.half-a {
  animation: snip-a 1.2s ease-in-out infinite;
}

.half-b {
  animation: snip-b 1.2s ease-in-out infinite;
}

.loader-label {
  margin: 0;
  font-family: var(--hoh-font-body, system-ui, sans-serif);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--hoh-text-muted, #6b6b6b);
}

@keyframes snip-a {
  0%,
  100% {
    transform: rotate(-12deg);
  }
  50% {
    transform: rotate(8deg);
  }
}

@keyframes snip-b {
  0%,
  100% {
    transform: rotate(12deg);
  }
  50% {
    transform: rotate(-8deg);
  }
}

@keyframes logo-breathe {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.92;
    transform: scale(0.988);
  }
}

@keyframes loader-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
