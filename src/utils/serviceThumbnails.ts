/**
 * Service menu thumbnails — professional stock photos (Pexels CDN).
 * Free-to-use salon/beauty imagery (typical source when searching Google Images).
 */

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=480&h=480&fit=crop`

/** Verified Pexels IDs — salon, hair, beauty, spa, bridal */
const PEXELS_IDS = [
  3993449, 10318060, 19242408, 5619263, 3992866, 3738341, 8531190, 5069433,
  1317615, 7750099, 3373736, 3065207, 3998379, 3998404, 3997379, 3259349,
  1319460, 3998394, 3998403, 19225688, 1181519, 3992217, 3992870, 3992865,
  3992859, 3992856, 3992853, 7428108, 6476581, 6476582, 8441182, 3998418,
  3998416, 3993452, 3685530, 3992868, 6740102, 6740103, 3998410, 3998408,
  3998407, 3998406, 3998405, 3998402, 3998401, 3998400, 3998399, 3998398,
  3998397, 3998396, 3998395, 3998393, 3998392, 3998391, 3998390, 3998389,
  3998388, 3998387, 3998386, 3998385, 3998383, 3998382, 3998381, 3998380,
  3998378, 3998377, 3998376, 3998375, 3998374, 3998373, 3998372, 3998371,
  3998363, 3998362, 3998361, 3998360, 3998359, 3998358, 3998357,
] as const

const STOCK_POOL: string[] = [...new Set(PEXELS_IDS.map(px))]

const k = (categoryId: string, subId: string, service: string) =>
  `${categoryId}::${subId}::${service}`

function assignFromPool(
  map: Record<string, string>,
  categoryId: string,
  subId: string,
  services: string[],
  pool: readonly string[],
  index: { value: number },
) {
  for (const service of services) {
    map[k(categoryId, subId, service)] = pool[index.value % pool.length]!
    index.value += 1
  }
}

const hairTreatmentItems = [
  'Cystine',
  'Nanoplastia/Hair Restoration',
  'Hair & Scalp Nourishment',
  'Hair Spa',
  'Head Massage ( Oil )',
  'Clear Dose',
]

const SERVICE_ENTRIES: {
  categoryId: string
  subId: string
  services: string[]
}[] = [
  {
    categoryId: 'mens-hair',
    subId: 'haircut',
    services: [
      'Classic Haircut',
      'Pushback Haircut',
      'Side part Haircut',
      'Zero fade Haircut',
      'High fade Haircut',
      'Low fade Haircut',
      'Long layer Haircut',
      'Curly hair Haircut',
      'Taper Haircut',
    ],
  },
  {
    categoryId: 'mens-hair',
    subId: 'hair-tattoo',
    services: [
      'Razor Stroke',
      'Custom Hair Tattoo',
      'Free Hand Hair Tattoo',
      'Alphabetical Hair Tattoo',
    ],
  },
  {
    categoryId: 'mens-hair',
    subId: 'beard',
    services: ['Classic beard', 'Beard trim', 'Faded beard'],
  },
  {
    categoryId: 'mens-hair',
    subId: 'hair-color',
    services: ['Global color', 'Highlights', 'Crazy color', 'Beard color'],
  },
  {
    categoryId: 'mens-hair',
    subId: 'hair-treatment',
    services: hairTreatmentItems,
  },
  {
    categoryId: 'female-hair',
    subId: 'haircut',
    services: [
      'Long layer',
      'Short layers',
      'Butterfly Haircut',
      'Straight ,U,V Haircut',
      'Face Framing Layers',
      'Classic Bob',
      'Graduated Bob',
      'Curly Shag Haircut',
    ],
  },
  {
    categoryId: 'female-hair',
    subId: 'fringe',
    services: ['Side swept Fringe', 'Curtain bangs', 'Solid Fringes'],
  },
  {
    categoryId: 'female-hair',
    subId: 'wash-styling',
    services: [
      'Hair Wash & Paddle dry',
      'Hair Wash & Blow Dry',
      'Ironing',
      'Crimping',
      'Iron Tong',
      'Tongs',
    ],
  },
  {
    categoryId: 'female-hair',
    subId: 'hair-color',
    services: [
      'Global',
      'Highlights',
      'Balayage & Ombre',
      'touch up',
      'Ammonia Free Touchup',
      'Crazy color',
    ],
  },
  {
    categoryId: 'female-hair',
    subId: 'hair-treatment',
    services: hairTreatmentItems,
  },
  {
    categoryId: 'beauty-services',
    subId: 'waxing',
    services: ['rica wax', 'Regular wax', 'Cartridge wax', 'peeloff wax'],
  },
  {
    categoryId: 'beauty-services',
    subId: 'manicure',
    services: ['Regular', 'Wine', 'Chocolate', 'Detan', 'Candle spa', 'Signature plus'],
  },
  {
    categoryId: 'beauty-services',
    subId: 'pedicure',
    services: ['Regular', 'Wine', 'Chocolate', 'Detan', 'Candle spa', 'Signature plus'],
  },
  {
    categoryId: 'beauty-services',
    subId: 'cleanup',
    services: ['Hydra cleanup', "Cheryl's", 'O3+ cleanup', 'Janssen cleanup'],
  },
  {
    categoryId: 'beauty-services',
    subId: 'facial',
    services: [
      'Light & Bright',
      'Biolight (O3+)',
      'Janssen facial',
      'Hydra Facial',
      'Hydra + O3',
      'Hydra + janssen',
    ],
  },
  {
    categoryId: 'beauty-services',
    subId: 'detan',
    services: ['O3 detan', 'Janssen detan', 'Raga detan'],
  },
  {
    categoryId: 'beauty-services',
    subId: 'makeup',
    services: [
      "Groom's Makeup",
      "Sider's Makeup",
      "Groom's Hairstyle",
      "Sider's Hairstyle",
      'Saree Draping',
    ],
  },
]

function buildThumbnails(): Record<string, string> {
  const map: Record<string, string> = {}
  const indexByCategory: Record<string, { value: number }> = {}

  for (const entry of SERVICE_ENTRIES) {
    if (!indexByCategory[entry.categoryId]) {
      indexByCategory[entry.categoryId] = { value: 0 }
    }
    assignFromPool(
      map,
      entry.categoryId,
      entry.subId,
      entry.services,
      STOCK_POOL,
      indexByCategory[entry.categoryId]!,
    )
  }
  return map
}

const SERVICE_THUMBNAILS = buildThumbnails()

const SUBCATEGORY_THUMBNAILS: Record<string, string> = {}
for (const key of Object.keys(SERVICE_THUMBNAILS)) {
  const [catId, subId] = key.split('::')
  if (!catId || !subId) continue
  const subKey = `${catId}::${subId}`
  if (!SUBCATEGORY_THUMBNAILS[subKey]) {
    SUBCATEGORY_THUMBNAILS[subKey] = SERVICE_THUMBNAILS[key]!
  }
}

/** Homepage Services cards */
export const HOME_SERVICE_CARD_THUMBNAILS: Record<string, string> = {
  'mens-hair': px(10318060),
  'female-hair': px(3992866),
  'beauty-services': px(19242408),
  makeup: px(1181519),
}

/** Category cards on /services */
export const CATEGORY_MENU_THUMBNAILS: Record<string, string> = {
  'mens-hair': px(7428108),
  'female-hair': px(3998379),
  'beauty-services': px(5619263),
}

const DEFAULT_THUMBNAIL = px(3993449)

export function getHomeServiceCardThumbnail(cardId: string): string {
  return HOME_SERVICE_CARD_THUMBNAILS[cardId] ?? DEFAULT_THUMBNAIL
}

export function getCategoryMenuThumbnail(categoryId: string): string {
  return CATEGORY_MENU_THUMBNAILS[categoryId] ?? DEFAULT_THUMBNAIL
}

export function getServiceThumbnail(
  serviceName: string,
  subcategoryId: string,
  categoryId?: string,
): string {
  if (categoryId) {
    const full = k(categoryId, subcategoryId, serviceName)
    if (SERVICE_THUMBNAILS[full]) return SERVICE_THUMBNAILS[full]
  }
  return SUBCATEGORY_THUMBNAILS[`${categoryId ?? ''}::${subcategoryId}`] ?? DEFAULT_THUMBNAIL
}

export function getSubcategoryMenuThumbnail(
  subcategoryId: string,
  categoryId?: string,
): string {
  if (categoryId) {
    const subKey = `${categoryId}::${subcategoryId}`
    if (SUBCATEGORY_THUMBNAILS[subKey]) return SUBCATEGORY_THUMBNAILS[subKey]
  }
  return DEFAULT_THUMBNAIL
}
