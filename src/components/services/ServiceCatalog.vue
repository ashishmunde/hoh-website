<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  SERVICE_DIVISIONS,
  TOP_LEVEL_CARDS,
  findCategory,
  findSubcategory,
  getSubcategoryCover,
  type TopLevelServiceCard,
} from '@/data/servicesCatalog'
import { getServiceThumbnail } from '@/utils/serviceThumbnails'
import { PRIMARY_COLOR, SECONDARY_COLOR, PRIMARY_HOVER } from '@/utils/const'

const route = useRoute()
const router = useRouter()

type ViewLevel = 'landing' | 'division' | 'category' | 'subcategory'

const divisionId = computed(() => route.query.division as string | undefined)
const categoryId = computed(() => route.query.category as string | undefined)
const subcategoryId = computed(() => route.query.subcategory as string | undefined)

const viewLevel = computed<ViewLevel>(() => {
  if (subcategoryId.value && categoryId.value && divisionId.value) return 'subcategory'
  if (categoryId.value && divisionId.value) return 'category'
  if (divisionId.value) return 'division'
  return 'landing'
})

const currentDivision = computed(() =>
  SERVICE_DIVISIONS.find((d) => d.id === divisionId.value),
)

const currentCategory = computed(() =>
  divisionId.value && categoryId.value
    ? findCategory(divisionId.value, categoryId.value)
    : undefined,
)

const currentSubcategory = computed(() =>
  divisionId.value && categoryId.value && subcategoryId.value
    ? findSubcategory(divisionId.value, categoryId.value, subcategoryId.value)
    : undefined,
)

const breadcrumbs = computed(() => {
  const crumbs: { label: string; query: Record<string, string> }[] = [
    { label: 'Services', query: {} },
  ]
  if (currentDivision.value) {
    crumbs.push({
      label: currentDivision.value.name,
      query: { division: currentDivision.value.id },
    })
  }
  if (currentCategory.value && divisionId.value) {
    crumbs.push({
      label: currentCategory.value.name,
      query: { division: divisionId.value, category: currentCategory.value.id },
    })
  }
  if (currentSubcategory.value && divisionId.value && categoryId.value) {
    crumbs.push({
      label: currentSubcategory.value.name,
      query: {
        division: divisionId.value,
        category: categoryId.value,
        subcategory: currentSubcategory.value.id,
      },
    })
  }
  return crumbs
})

const pageTitle = computed(() => {
  if (currentSubcategory.value) return currentSubcategory.value.name
  if (currentCategory.value) return currentCategory.value.name
  if (currentDivision.value) return currentDivision.value.name
  return 'Our Services'
})

const navigate = (query: Record<string, string>) => {
  router.push({ name: 'services', query })
}

const openCard = (card: TopLevelServiceCard) => {
  const query: Record<string, string> = {
    division: card.divisionId,
    category: card.categoryId,
  }
  if (card.subcategoryId) query.subcategory = card.subcategoryId
  navigate(query)
}

const openDivision = (id: 'hair' | 'beauty') => {
  navigate({ division: id })
}

const openCategory = (divId: string, catId: string) => {
  navigate({ division: divId, category: catId })
}

const openSubcategory = (divId: string, catId: string, subId: string) => {
  navigate({ division: divId, category: catId, subcategory: subId })
}

watch(
  () => route.query.card,
  (card) => {
    if (typeof card === 'string' && !divisionId.value) {
      const match = TOP_LEVEL_CARDS.find((c) => c.id === card)
      if (match) openCard(match)
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="service-catalog">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <template v-for="(crumb, index) in breadcrumbs" :key="crumb.label">
        <button
          type="button"
          class="breadcrumb-btn"
          :class="{ active: index === breadcrumbs.length - 1 }"
          @click="navigate(crumb.query)"
        >
          {{ crumb.label }}
        </button>
        <span v-if="index < breadcrumbs.length - 1" class="breadcrumb-sep">/</span>
      </template>
    </nav>

    <h1 class="catalog-title">{{ pageTitle }}</h1>

    <!-- Landing -->
    <template v-if="viewLevel === 'landing'">
      <p class="catalog-subtitle">
        Browse our full service menu — prices available at the salon.
      </p>

      <div class="division-row">
        <button type="button" class="division-card" @click="openDivision('hair')">
          <span class="division-label">Hair Services</span>
          <span class="division-hint">Men's &amp; Women's Hair</span>
        </button>
        <button type="button" class="division-card" @click="openDivision('beauty')">
          <span class="division-label">Beauty Services</span>
          <span class="division-hint">Waxing, Nails, Facials &amp; Makeup</span>
        </button>
      </div>

      <h2 class="section-heading">Browse by category</h2>
      <div class="cards-grid">
        <button
          v-for="card in TOP_LEVEL_CARDS"
          :key="card.id"
          type="button"
          class="category-card card-elevated"
          @click="openCard(card)"
        >
          <div class="category-card-image-wrap">
            <img :src="card.image" :alt="card.name" class="category-card-image" />
            <div class="category-card-overlay">
              <span class="category-card-name">{{ card.name }}</span>
            </div>
          </div>
        </button>
      </div>
    </template>

    <!-- Division: Men's Hair / Female Hair / Beauty -->
    <template v-else-if="viewLevel === 'division' && currentDivision">
      <p class="catalog-subtitle">Select a service category</p>
      <div class="cards-grid">
        <button
          v-for="cat in currentDivision.categories"
          :key="cat.id"
          type="button"
          class="category-card card-elevated"
          @click="openCategory(currentDivision.id, cat.id)"
        >
          <div class="category-card-image-wrap">
            <img :src="cat.image" :alt="cat.name" class="category-card-image" />
            <div class="category-card-overlay">
              <span class="category-card-name">{{ cat.name }}</span>
            </div>
          </div>
        </button>
      </div>
    </template>

    <!-- Category: subcategory cards (PDF drill-down) -->
    <template v-else-if="viewLevel === 'category' && currentCategory && divisionId">
      <p class="catalog-subtitle">Choose a service type</p>
      <div class="cards-grid">
        <button
          v-for="sub in currentCategory.subcategories"
          :key="sub.id"
          type="button"
          class="category-card card-elevated"
          @click="openSubcategory(divisionId, currentCategory.id, sub.id)"
        >
          <div class="category-card-image-wrap">
            <img
              :src="getSubcategoryCover(sub, currentCategory.id)"
              :alt="sub.name"
              class="category-card-image"
            />
            <div class="category-card-overlay">
              <span class="category-card-name">{{ sub.name }}</span>
              <span class="photo-count">{{ sub.items.length }} services</span>
            </div>
          </div>
        </button>
      </div>
    </template>

    <!-- Subcategory: full service list with thumbnails -->
    <template v-else-if="viewLevel === 'subcategory' && currentSubcategory">
      <p class="catalog-subtitle">
        {{ currentSubcategory.items.length }} services in this category
      </p>

      <ul class="service-items-grid">
        <li
          v-for="item in currentSubcategory.items"
          :key="item"
          class="service-item-card"
        >
          <div class="service-thumb-wrap">
            <img
              :src="getServiceThumbnail(item, currentSubcategory.id, categoryId)"
              :alt="item"
              class="service-thumb"
              loading="lazy"
            />
          </div>
          <span class="service-item-name">{{ item }}</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.service-catalog {
  width: 100%;
}

.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
}

.breadcrumb-btn {
  background: none;
  border: none;
  padding: 0;
  color: var(--hoh-text-muted);
  cursor: pointer;
  font-size: inherit;
  transition: color 0.2s var(--hoh-ease);
}

.breadcrumb-btn:hover:not(.active) {
  color: var(--hoh-secondary);
  text-decoration: underline;
}

.breadcrumb-btn.active {
  color: var(--hoh-secondary);
  font-weight: 600;
  cursor: default;
}

.breadcrumb-sep {
  color: var(--hoh-border);
}

.catalog-title {
  font-family: var(--hoh-font-display);
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 500;
  color: var(--hoh-secondary);
  margin: 0 0 0.5rem;
  letter-spacing: 0.02em;
}

.catalog-subtitle {
  color: var(--hoh-text-muted);
  font-size: 1.05rem;
  margin: 0 0 2rem;
  line-height: 1.65;
}

.section-heading {
  font-family: var(--hoh-font-display);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--hoh-secondary);
  margin: 2.5rem 0 1.25rem;
}

.division-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-bottom: 0.5rem;
}

.division-card {
  text-align: left;
  padding: 1.75rem 1.5rem;
  border: 1px solid var(--hoh-border);
  border-radius: var(--hoh-radius-lg);
  background: var(--hoh-surface);
  cursor: pointer;
  transition: all 0.25s var(--hoh-ease);
}

.division-card:hover {
  border-color: v-bind(PRIMARY_COLOR);
  box-shadow: var(--hoh-shadow-md);
  transform: translateY(-2px);
}

.division-label {
  display: block;
  font-family: var(--hoh-font-display);
  font-size: 1.35rem;
  font-weight: 500;
  color: var(--hoh-secondary);
  margin-bottom: 0.35rem;
}

.division-hint {
  display: block;
  font-size: 0.9rem;
  color: var(--hoh-text-muted);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

.category-card {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: var(--hoh-radius-lg);
  overflow: hidden;
  text-align: left;
}

.category-card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--hoh-radius-lg);
}

.category-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--hoh-ease);
}

.category-card:hover .category-card-image {
  transform: scale(1.05);
}

.category-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 26, 26, 0.8) 0%, transparent 55%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.35rem 1rem;
  gap: 0.35rem;
}

.category-card-name {
  font-family: var(--hoh-font-display);
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.03em;
}

.photo-count {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}

.photo-count.muted {
  opacity: 0.7;
}

.service-items-grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
}

.service-item-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
}

.service-thumb-wrap {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--hoh-radius-lg);
  overflow: hidden;
  background: var(--hoh-surface);
  border: 1px solid var(--hoh-border);
  box-shadow: var(--hoh-shadow-sm);
}

.service-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s var(--hoh-ease);
}

.service-item-card:hover .service-thumb {
  transform: scale(1.04);
}

.service-item-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--hoh-secondary);
  line-height: 1.35;
  padding: 0 0.25rem;
}

@media (max-width: 768px) {
  .cards-grid,
  .service-items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cards-grid,
  .service-items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
