<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  SERVICE_DIVISIONS,
  findCategory,
  findSubcategory,
  getBeautyMenuSubcategories,
  getSubcategoryCover,
  type ServiceSubcategory,
} from '@/data/servicesCatalog'
import { SERVICE_COVERS } from '@/utils/serviceThumbnails'
import { formatItemPrice } from '@/data/servicePricing'

const route = useRoute()
const router = useRouter()

type ViewLevel = 'landing' | 'division' | 'category' | 'subcategory' | 'beauty-menu'

const divisionId = computed(() => route.query.division as string | undefined)
const categoryId = computed(() => route.query.category as string | undefined)
const subcategoryId = computed(() => route.query.subcategory as string | undefined)

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

/**
 * Hair Services → Men's Hair / Female Hair
 * Beauty Services → Waxing, Manicure, Pedicure, Cleanup, Facial, Detan
 */
const viewLevel = computed<ViewLevel>(() => {
  if (subcategoryId.value && categoryId.value && divisionId.value) return 'subcategory'
  if (categoryId.value && divisionId.value) return 'category'
  if (divisionId.value === 'beauty') return 'beauty-menu'
  if (divisionId.value) return 'division'
  return 'landing'
})

const beautyMenuItems = computed(() => getBeautyMenuSubcategories())

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

  // Skip "Beauty Services" category crumb — beauty menu is the division itself
  if (
    currentCategory.value &&
    divisionId.value &&
    !(divisionId.value === 'beauty' && categoryId.value === 'beauty-services')
  ) {
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
  if (
    currentCategory.value &&
    !(divisionId.value === 'beauty' && categoryId.value === 'beauty-services')
  ) {
    return currentCategory.value.name
  }
  if (currentDivision.value) return currentDivision.value.name
  return 'Our Services'
})

const navigate = (query: Record<string, string>) => {
  router.push({ name: 'services', query })
}

const openDivision = (id: 'hair' | 'beauty') => {
  navigate({ division: id })
}

const openCategory = (divId: string, catId: string) => {
  navigate({ division: divId, category: catId })
}

const openBeautyItem = (sub: ServiceSubcategory) => {
  navigate({
    division: 'beauty',
    category: 'beauty-services',
    subcategory: sub.id,
  })
}

const openMakeup = () => {
  navigate({
    division: 'beauty',
    category: 'beauty-services',
    subcategory: 'makeup',
  })
}

const itemPrice = (subId: string, item: string) => {
  if (!categoryId.value) return null
  return formatItemPrice(categoryId.value, subId, item)
}

const subcategoryItemPrice = (item: string) => {
  if (!categoryId.value || !subcategoryId.value) return null
  return formatItemPrice(categoryId.value, subcategoryId.value, item)
}

/** Flat grouped list of every leaf service under Men's / Female Hair */
const categoryServiceGroups = computed(() => {
  if (!currentCategory.value) return []
  return currentCategory.value.subcategories.map((sub) => ({
    id: sub.id,
    name: sub.name,
    items: sub.items,
  }))
})
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

    <!-- Landing: Hair Services | Beauty Services | Makeup and Hairstyle -->
    <template v-if="viewLevel === 'landing'">
      <p class="catalog-subtitle">
        Browse our full service menu with indicative pricing.
      </p>
      <div class="cards-grid">
        <button
          type="button"
          class="category-card card-elevated"
          @click="openDivision('hair')"
        >
          <div class="category-card-image-wrap">
            <img
              :src="SERVICE_COVERS.femaleHairColor"
              alt="Hair Services"
              class="category-card-image"
            />
            <div class="category-card-overlay">
              <span class="category-card-name">Hair Services</span>
            </div>
          </div>
        </button>
        <button
          type="button"
          class="category-card card-elevated"
          @click="openDivision('beauty')"
        >
          <div class="category-card-image-wrap">
            <img
              :src="SERVICE_COVERS.facial"
              alt="Beauty Services"
              class="category-card-image"
            />
            <div class="category-card-overlay">
              <span class="category-card-name">Beauty Services</span>
            </div>
          </div>
        </button>
        <button
          type="button"
          class="category-card card-elevated"
          @click="openMakeup"
        >
          <div class="category-card-image-wrap">
            <img
              :src="SERVICE_COVERS.groomMakeup"
              alt="Makeup and Hairstyle"
              class="category-card-image"
            />
            <div class="category-card-overlay">
              <span class="category-card-name">Makeup and Hairstyle</span>
            </div>
          </div>
        </button>
      </div>
    </template>

    <!-- Hair Services → Men's Hair / Female Hair -->
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

    <!-- Beauty Services → Waxing, Manicure, Pedicure, Cleanup, Facial, Detan -->
    <template v-else-if="viewLevel === 'beauty-menu'">
      <p class="catalog-subtitle">Choose a service</p>
      <div class="cards-grid">
        <button
          v-for="sub in beautyMenuItems"
          :key="sub.id"
          type="button"
          class="category-card card-elevated"
          @click="openBeautyItem(sub)"
        >
          <div class="category-card-image-wrap">
            <img
              :src="getSubcategoryCover(sub, 'beauty-services')"
              :alt="sub.name"
              class="category-card-image"
            />
            <div class="category-card-overlay">
              <span class="category-card-name">{{ sub.name }}</span>
            </div>
          </div>
        </button>
      </div>
    </template>

    <!-- Men's / Female Hair: image left + all service names as a list -->
    <template v-else-if="viewLevel === 'category' && currentCategory">
      <div class="split-layout">
        <div class="split-image-wrap">
          <img
            :src="currentCategory.image"
            :alt="currentCategory.name"
            class="split-image"
          />
        </div>
        <div class="split-list-panel">
          <section
            v-for="group in categoryServiceGroups"
            :key="group.id"
            class="service-group"
          >
            <h2 class="service-group-title">
              <span class="service-group-label">{{ group.name }}</span>
            </h2>
            <ul class="service-name-list">
              <li v-for="item in group.items" :key="item" class="service-name-item">
                <span class="service-name-text">{{ item }}</span>
                <span v-if="itemPrice(group.id, item)" class="service-price">
                  {{ itemPrice(group.id, item) }}
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </template>

    <!-- Beauty / Makeup: image left + service names list (no per-item thumbnails) -->
    <template v-else-if="viewLevel === 'subcategory' && currentSubcategory">
      <div class="split-layout">
        <div class="split-image-wrap">
          <img
            :src="getSubcategoryCover(currentSubcategory, categoryId || '')"
            :alt="currentSubcategory.name"
            class="split-image"
          />
        </div>
        <div class="split-list-panel split-list-panel--flat">
          <ul class="service-name-list">
            <li
              v-for="item in currentSubcategory.items"
              :key="item"
              class="service-name-item"
            >
              <span class="service-name-text">{{ item }}</span>
              <span v-if="subcategoryItemPrice(item)" class="service-price">
                {{ subcategoryItemPrice(item) }}
              </span>
            </li>
          </ul>
        </div>
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

.split-layout {
  display: grid;
  grid-template-columns: minmax(240px, 0.85fr) minmax(300px, 1.15fr);
  gap: 3rem;
  align-items: start;
  margin-top: 0.5rem;
}

.split-image-wrap {
  position: sticky;
  top: 1.5rem;
  border-radius: var(--hoh-radius-lg);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: var(--hoh-surface);
  box-shadow: var(--hoh-shadow-md);
}

.split-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.split-list-panel {
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding: 0.15rem 0 1rem;
  min-width: 0;
}

.split-list-panel--flat {
  gap: 0;
}

.service-group {
  padding-bottom: 0.25rem;
}

.service-group + .service-group {
  border-top: 1px solid var(--hoh-border);
  padding-top: 2.25rem;
}

.service-group-title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 0 1rem;
  padding-bottom: 0.65rem;
  border-bottom: 2px solid var(--hoh-secondary);
}

.service-group-label {
  font-family: var(--hoh-font-display);
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--hoh-secondary);
  letter-spacing: 0.03em;
  line-height: 1.2;
}

.service-group-count {
  flex-shrink: 0;
  font-family: var(--hoh-font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--hoh-text-muted);
}

.service-name-list {
  list-style: none;
  margin: 0;
  padding: 0 0 0 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: 2px solid color-mix(in srgb, var(--hoh-border) 80%, transparent);
}

.split-list-panel--flat .service-name-list {
  padding-left: 0;
  border-left: none;
}

.service-name-item {
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  font-family: var(--hoh-font-body);
  font-size: 1.02rem;
  font-weight: 400;
  color: var(--hoh-text);
  line-height: 1.5;
  padding: 0.7rem 0 0.7rem 1rem;
  border-bottom: 1px solid color-mix(in srgb, var(--hoh-border) 70%, transparent);
}

.service-name-text {
  flex: 1;
  min-width: 0;
}

.service-price {
  flex-shrink: 0;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--hoh-secondary);
  white-space: nowrap;
}

.service-name-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.4rem;
  height: 1px;
  background: var(--hoh-border);
  transform: translateY(-50%);
}

.split-list-panel--flat .service-name-item {
  padding-left: 0;
  font-size: 1.08rem;
}

.split-list-panel--flat .service-name-item::before {
  display: none;
}

.service-name-item:last-child {
  border-bottom: none;
  padding-bottom: 0.15rem;
}

@media (max-width: 768px) {
  .catalog-subtitle {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  .category-card-name {
    font-size: 1.1rem;
  }

  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .split-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .split-image-wrap {
    position: static;
    max-width: 280px;
    margin: 0 auto;
    aspect-ratio: 4 / 5;
  }

  .split-list-panel {
    gap: 1.85rem;
  }

  .service-group + .service-group {
    padding-top: 1.85rem;
  }

  .service-group-label {
    font-size: 1.3rem;
  }

  .service-name-list {
    padding-left: 0.9rem;
  }

  .service-name-item {
    font-size: 0.98rem;
    padding: 0.6rem 0 0.6rem 0.85rem;
  }
}

@media (max-width: 480px) {
  .breadcrumbs {
    font-size: 0.82rem;
  }

  .catalog-subtitle {
    font-size: 0.9rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .service-group-label {
    font-size: 1.2rem;
  }

  .service-name-item {
    font-size: 0.95rem;
  }
}
</style>
