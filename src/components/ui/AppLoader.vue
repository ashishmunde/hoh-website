<template>
  <div class="app-loader" role="status" aria-live="polite" aria-busy="true">
    <div class="loader-inner">
      <img
        src="https://house-of-hair.s3.ap-south-1.amazonaws.com/homepage/hoh-logo.webp"
        alt="The House of Hair"
        class="loader-logo"
      />
      <div class="scissors-loader" aria-hidden="true">
        <svg class="scissors-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="44" r="5" stroke="currentColor" stroke-width="2" />
          <circle cx="14" cy="20" r="5" stroke="currentColor" stroke-width="2" />
          <path
            class="blade blade-top"
            d="M19 20 L52 8 L58 14 L25 26 Z"
            fill="currentColor"
          />
          <path
            class="blade blade-bottom"
            d="M19 44 L52 56 L58 50 L25 38 Z"
            fill="currentColor"
          />
          <path d="M14 25 L14 39" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
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
    radial-gradient(ellipse at 50% 30%, rgba(156, 153, 148, 0.12) 0%, transparent 55%),
    var(--hoh-bg, #faf9f7);
  animation: loader-fade-in 0.35s var(--hoh-ease, ease) both;
}

.loader-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem;
  text-align: center;
}

.loader-logo {
  width: min(200px, 55vw);
  height: auto;
  object-fit: contain;
  animation: logo-breathe 2.4s ease-in-out infinite;
}

.scissors-loader {
  color: var(--hoh-secondary, #1a1a1a);
  width: 52px;
  height: 52px;
}

.scissors-svg {
  width: 100%;
  height: 100%;
  transform-origin: 14px 32px;
}

.blade-top {
  transform-origin: 19px 23px;
  animation: snip-top 0.9s ease-in-out infinite;
}

.blade-bottom {
  transform-origin: 19px 41px;
  animation: snip-bottom 0.9s ease-in-out infinite;
}

.loader-label {
  margin: 0;
  font-family: var(--hoh-font-body, system-ui, sans-serif);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--hoh-text-muted, #6b6b6b);
}

@keyframes snip-top {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-18deg);
  }
}

@keyframes snip-bottom {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(18deg);
  }
}

@keyframes logo-breathe {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.88;
    transform: scale(0.98);
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
