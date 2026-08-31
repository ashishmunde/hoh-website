<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  PAGE_SEO,
  applyPageSeo,
  buildLocalBusinessJsonLd,
  injectJsonLd,
} from '@/utils/seo'
import { BRANCHES_DATA, MAIN_CONTACT } from '@/utils/const'
import AppLoader from '@/components/ui/AppLoader.vue'
import WhatsAppFab from '@/components/ui/WhatsAppFab.vue'
import { getAllSiteImageUrls, preloadImages } from '@/utils/preloadImages'

const route = useRoute()
const isReady = ref(false)

const MIN_SPLASH_MS = 700
const MAX_WAIT_MS = 20000

const LOCAL_BRANCHES = [
  {
    name: 'Karve Nagar',
    streetAddress: 'Shop no. 86, Girija Shankar Vihar, Potnis Parisar, opp. Durga Cafe',
    addressLocality: 'Karve Nagar, Pune',
    postalCode: '411052',
    telephone: MAIN_CONTACT.phoneTel,
    latitude: 18.4967942,
    longitude: 73.8225172,
    url: BRANCHES_DATA[0]!.googleMapsLink,
    image: BRANCHES_DATA[0]!.thumbnail,
  },
  {
    name: 'Aundh',
    streetAddress: "Saraja Lane, Opposite Gold's Gym",
    addressLocality: 'Aundh, Pune',
    postalCode: '411007',
    telephone: '+918010535615',
    latitude: 18.5532629,
    longitude: 73.80747,
    url: BRANCHES_DATA[1]!.googleMapsLink,
    image: BRANCHES_DATA[1]!.thumbnail,
  },
  {
    name: 'Kothrud',
    streetAddress: 'Paud Road',
    addressLocality: 'Kothrud, Pune',
    postalCode: '411038',
    telephone: MAIN_CONTACT.phoneTel,
    latitude: 18.5082763,
    longitude: 73.8223092,
    url: BRANCHES_DATA[2]!.googleMapsLink,
    image: BRANCHES_DATA[2]!.thumbnail,
  },
]

function syncSeo() {
  const key = String(route.name ?? 'home')
  const seo = PAGE_SEO[key] ?? PAGE_SEO.home
  if (seo) applyPageSeo(seo)
}

onMounted(async () => {
  injectJsonLd('hoh-local-business-ld', buildLocalBusinessJsonLd(LOCAL_BRANCHES))
  syncSeo()

  const started = Date.now()
  const urls = getAllSiteImageUrls()

  await Promise.race([
    preloadImages(urls),
    new Promise<void>((resolve) => setTimeout(resolve, MAX_WAIT_MS)),
  ])

  const elapsed = Date.now() - started
  if (elapsed < MIN_SPLASH_MS) {
    await new Promise((resolve) => setTimeout(resolve, MIN_SPLASH_MS - elapsed))
  }
  isReady.value = true
})

watch(() => route.fullPath, syncSeo)
</script>

<template>
  <Transition name="splash">
    <AppLoader v-if="!isReady" />
  </Transition>
  <div v-show="isReady" class="app-shell">
    <router-view />
    <WhatsAppFab />
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
}

.splash-leave-active {
  transition: opacity 0.45s var(--hoh-ease, ease);
}

.splash-leave-to {
  opacity: 0;
  pointer-events: none;
}
</style>
