<script setup lang="ts">
import { BANNER_IMAGE } from '@/utils/const'
import Services from './Services.vue'
import TopBar from './TopBar.vue'
import Branches from './Branches.vue'
import OurWork from './OurWork.vue'

</script>

<template>
  <div class="home-page">
    <TopBar />
    <div class="banner-section">
      <img :src="BANNER_IMAGE" alt="banner" class="banner-image" />
    </div>
    <Services />
    <Branches />
    <OurWork />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.banner-section {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  box-sizing: border-box;
}

.banner-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

</style>