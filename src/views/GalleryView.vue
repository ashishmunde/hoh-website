<script setup lang="ts">
import TopBar from '@/components/home/TopBar.vue'
import Gallery from '@/components/gallery/Gallery.vue'
</script>

<template>
  <div class="gallery-view">
    <TopBar />
    <Gallery />
  </div>
</template>

<style scoped>
.gallery-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
</style>
