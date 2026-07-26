<script setup lang="ts">
import TopBar from '@/components/home/TopBar.vue'
import Gallery from '@/components/gallery/Gallery.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
</script>

<template>
  <div class="gallery-view">
    <TopBar />
    <Gallery />
    <SiteFooter />
  </div>
</template>

<style scoped>
.gallery-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
