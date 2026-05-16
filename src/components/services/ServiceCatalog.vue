<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  SERVICE_DIVISIONS,
  TOP_LEVEL_CARDS,
  findCategory,
  findSubcategory,
  GALLERY_CATEGORY_LABELS,
  type TopLevelServiceCard,
} from '@/data/servicesCatalog'
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

const viewGallery = () => {
  const key = currentSubcategory.value?.galleryKey
  if (!key) return
  router.push({
    name: 'gallery',
    query: { category: GALLERY_CATEGORY_LABELS[key] },
  })
}

const hasGallery = computed(() => Boolean(currentSubcategory.value?.galleryKey))

// Sync initial card from ?card= query (homepage links)
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

    <!-- Landing: division + top cards -->
    <template v-if="viewLevel === 'landing'">
      <p class="catalog-subtitle">
        Explore our hair and beauty services. Select a category to view all options.
      </p>

      <div class="division-row">
        <button type="button" class="division-card" @click="openDivision('hair')">
          <span class="division-label">Hair Services</span>
          <span class="division-hint">Men's &amp; Women's Hair</span>
        </button>
        <button type="button" class="division-card" @click="openDivision('beauty')">
          <span class="division-label">Beauty Services</span>
          <span class="division-hint">Waxing, Nails, Facials &amp; more</span>
        </button>
      </div>

      <h2 class="section-heading">Browse by category</h2>
      <div class="cards-grid">
        <button
          v-for="card in TOP_LEVEL_CARDS"
          :key="card.id"
          type="button"
          class="category-card"
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

    <!-- Division: category cards with images -->
    <template v-else-if="viewLevel === 'division' && currentDivision">
      <p class="catalog-subtitle">Select a service category</p>
      <div class="cards-grid">
        <button
          v-for="cat in currentDivision.categories"
          :key="cat.id"
          type="button"
          class="category-card"
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

    <!-- Category: subcategory list -->
    <template v-else-if="viewLevel === 'category' && currentCategory && divisionId">
      <p class="catalog-subtitle">Choose a service type</p>
      <ul class="subcategory-list">
        <li v-for="sub in currentCategory.subcategories" :key="sub.id">
          <button
            type="button"
            class="subcategory-btn"
            @click="openSubcategory(divisionId, currentCategory.id, sub.id)"
          >
            <span>{{ sub.name }}</span>
            <span class="chevron">›</span>
          </button>
        </li>
      </ul>
    </template>

    <!-- Subcategory: individual services -->
    <template v-else-if="viewLevel === 'subcategory' && currentSubcategory">
      <p class="catalog-subtitle">
        {{ currentSubcategory.items.length }} services available
      </p>
      <ul class="service-items-list">
        <li v-for="item in currentSubcategory.items" :key="item" class="service-item">
          {{ item }}
        </li>
      </ul>
      <div v-if="hasGallery" class="catalog-actions">
        <button type="button" class="gallery-btn" @click="viewGallery">
          View gallery photos
        </button>
      </div>
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
  color: #666;
  cursor: pointer;
  font-size: inherit;
  transition: color 0.2s ease;
}

.breadcrumb-btn:hover:not(.active) {
  color: v-bind(SECONDARY_COLOR);
  text-decoration: underline;
}

.breadcrumb-btn.active {
  color: v-bind(SECONDARY_COLOR);
  font-weight: 600;
  cursor: default;
}

.breadcrumb-sep {
  color: #bbb;
}

.catalog-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: v-bind(SECONDARY_COLOR);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.catalog-subtitle {
  color: #666;
  font-size: 1.05rem;
  margin: 0 0 2rem;
}

.section-heading {
  font-size: 1.35rem;
  font-weight: 600;
  color: v-bind(SECONDARY_COLOR);
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
  border: 2px solid #e8e8e8;
  border-radius: 14px;
  background: white;
  cursor: pointer;
  transition: all 0.25s ease;
}

.division-card:hover {
  border-color: v-bind(PRIMARY_COLOR);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.division-label {
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  color: v-bind(SECONDARY_COLOR);
  margin-bottom: 0.35rem;
}

.division-hint {
  display: block;
  font-size: 0.9rem;
  color: #777;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.category-card {
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.category-card-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.category-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.category-card:hover .category-card-image {
  transform: scale(1.06);
}

.category-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 55%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1.5rem;
}

.category-card-name {
  color: white;
  font-size: 1.35rem;
  font-weight: 700;
  text-align: center;
}

.subcategory-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 640px;
}

.subcategory-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.15rem 1.35rem;
  background: white;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 1.05rem;
  font-weight: 600;
  color: v-bind(SECONDARY_COLOR);
  cursor: pointer;
  transition: all 0.2s ease;
}

.subcategory-btn:hover {
  border-color: v-bind(PRIMARY_COLOR);
  background: #fafafa;
}

.chevron {
  font-size: 1.5rem;
  color: v-bind(PRIMARY_COLOR);
  line-height: 1;
}

.service-items-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.65rem;
}

.service-item {
  padding: 0.9rem 1.1rem;
  background: white;
  border-radius: 10px;
  border: 1px solid #eee;
  font-size: 0.98rem;
  color: v-bind(SECONDARY_COLOR);
  font-weight: 500;
}

.catalog-actions {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.gallery-btn {
  padding: 0.85rem 1.75rem;
  background: v-bind(PRIMARY_COLOR);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.gallery-btn:hover {
  background: v-bind(PRIMARY_HOVER);
}

@media (max-width: 768px) {
  .catalog-title {
    font-size: 1.85rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .service-items-list {
    grid-template-columns: 1fr;
  }
}
</style>
