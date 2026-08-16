<template>
  <div class="app-loader" role="status" aria-live="polite" aria-busy="true">
    <div class="loader-inner">
      <img
        src="https://house-of-hair.s3.ap-south-1.amazonaws.com/homepage/hoh-logo.webp"
        alt="The House of Hair"
        class="loader-logo"
      />
      <div class="loader-spinner" aria-hidden="true" />
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

.loader-spinner {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid rgba(26, 26, 26, 0.12);
  border-top-color: var(--hoh-secondary, #1a1a1a);
  animation: spin 0.85s linear infinite;
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

@keyframes spin {
  to {
    transform: rotate(360deg);
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
