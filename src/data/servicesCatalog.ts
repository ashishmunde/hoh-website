import {
  getCategoryMenuThumbnail,
  getHomeServiceCardThumbnail,
  getSubcategoryMenuThumbnail,
} from '@/utils/serviceThumbnails'

export interface ServiceSubcategory {
  id: string
  name: string
  items: string[]
}

export interface ServiceCategory {
  id: string
  name: string
  image: string
  subcategories: ServiceSubcategory[]
}

export interface ServiceDivision {
  id: 'hair' | 'beauty'
  name: string
  categories: ServiceCategory[]
}

/** Homepage entry points — matches PDF top level */
export interface HomeServiceCard {
  id: string
  name: string
  image: string
  query: Record<string, string>
}

const hairTreatmentItems = [
  'Cystine',
  'Nanoplastia/Hair Restoration',
  'Hair & Scalp Nourishment',
  'Hair Spa',
  'Head Massage ( Oil )',
  'Clear Dose',
]

function hairSub(
  _categoryId: string,
  id: string,
  name: string,
  items: string[],
): ServiceSubcategory {
  return { id, name, items }
}

function beautySub(
  _categoryId: string,
  id: string,
  name: string,
  items: string[],
): ServiceSubcategory {
  return { id, name, items }
}

/**
 * PDF layout (top level):
 * Hair Services | Beauty Services | Makeup
 */
export const HOME_SERVICE_CARDS: HomeServiceCard[] = [
  {
    id: 'hair',
    name: 'Hair Services',
    image: getHomeServiceCardThumbnail('hair'),
    query: { division: 'hair' },
  },
  {
    id: 'beauty',
    name: 'Beauty Services',
    image: getHomeServiceCardThumbnail('skin'),
    query: { division: 'beauty' },
  },
  {
    id: 'makeup',
    name: 'Makeup',
    image: getHomeServiceCardThumbnail('groom-makeup'),
    query: {
      division: 'beauty',
      category: 'beauty-services',
      subcategory: 'makeup',
    },
  },
]

/**
 * PDF catalog structure:
 *
 * Hair Services
 *   Men's Hair → Haircut, Hair Tattoo, Beard, Hair Color, Hair Treatment
 *   Female Hair → Haircut, Fringe, Wash & Styling, Hair Color, Hair Treatment
 *
 * Beauty Services
 *   Waxing, Manicure, Pedicure, Cleanup, Facial, Detan
 *   (Makeup is a separate top-level entry)
 */
export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'hair',
    name: 'Hair Services',
    categories: [
      {
        id: 'mens-hair',
        name: "Men's Hair",
        image: getCategoryMenuThumbnail('mens-hair'),
        subcategories: [
          hairSub('mens-hair', 'haircut', 'Haircut', [
            'Classic Haircut',
            'Pushback Haircut',
            'Side part Haircut',
            'Zero fade Haircut',
            'High fade Haircut',
            'Low fade Haircut',
            'Long layer Haircut',
            'Curly hair Haircut',
            'Taper Haircut',
          ]),
          hairSub('mens-hair', 'hair-tattoo', 'Hair Tattoo', [
            'Razor Stroke',
            'Custom Hair Tattoo',
            'Free Hand Hair Tattoo',
            'Alphabetical Hair Tattoo',
          ]),
          hairSub('mens-hair', 'beard', 'Beard', [
            'Classic beard',
            'Beard trim',
            'Faded beard',
          ]),
          hairSub('mens-hair', 'hair-color', 'Hair Color', [
            'Global color',
            'Highlights',
            'Crazy color',
            'Beard color',
          ]),
          hairSub('mens-hair', 'hair-treatment', 'Hair Treatment', hairTreatmentItems),
        ],
      },
      {
        id: 'female-hair',
        name: 'Female Hair',
        image: getCategoryMenuThumbnail('female-hair'),
        subcategories: [
          hairSub('female-hair', 'haircut', 'Haircut', [
            'Long layer',
            'Short layers',
            'Butterfly Haircut',
            'Face Framing Layers',
            'Classic Bob',
            'Graduated Bob',
            'Curly Shag Haircut',
          ]),
          hairSub('female-hair', 'fringe', 'Fringe', [
            'Side swept Fringe',
            'Curtain bangs',
            'Solid Fringes',
          ]),
          hairSub('female-hair', 'wash-styling', 'Wash & Styling', [
            'Hair Wash & Paddle dry',
            'Hair Wash & Blow Dry',
            'Ironing',
            'Crimping',
            'Iron Tong',
            'Tongs',
          ]),
          hairSub('female-hair', 'hair-color', 'Hair Color', [
            'Global',
            'Highlights',
            'Balayage & Ombre',
            'Touch up',
            'Ammonia Free Touchup',
            'Crazy color',
          ]),
          hairSub('female-hair', 'hair-treatment', 'Hair Treatment', hairTreatmentItems),
        ],
      },
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty Services',
    categories: [
      {
        id: 'beauty-services',
        name: 'Beauty Services',
        image: getCategoryMenuThumbnail('beauty-services'),
        subcategories: [
          beautySub('beauty-services', 'waxing', 'Waxing', [
            'Rica Wax',
            'Regular Wax',
            'Cartridge Wax',
            'Peeloff Wax',
          ]),
          beautySub('beauty-services', 'manicure', 'Manicure', [
            'Regular',
            'Wine',
            'Chocolate',
            'De-tan',
            'Candle Spa',
            'Signature Plus',
          ]),
          beautySub('beauty-services', 'pedicure', 'Pedicure', [
            'Regular',
            'Wine',
            'Chocolate',
            'De-tan',
            'Candle Spa',
            'Signature Plus',
          ]),
          beautySub('beauty-services', 'cleanup', 'Cleanup', [
            'Hydra Cleanup',
            "Cheryl's",
            'O3+ Cleanup',
            'Janssen Cleanup',
          ]),
          beautySub('beauty-services', 'facial', 'Facial', [
            'Light & Bright',
            'Biolight (O3+)',
            'Janssen Facial',
            'Hydra Facial',
            'Hydra + O3',
            'Hydra + Janssen',
          ]),
          beautySub('beauty-services', 'de-tan', 'De-tan', [
            'O3 De-tan',
            'Janssen De-tan',
            'Raga De-tan',
          ]),
          beautySub('beauty-services', 'makeup', 'Makeup', [
            "Groom's Makeup",
            "Sider's Makeup",
            "Groom's Hairstyle",
            "Sider's Hairstyle",
            'Saree Draping',
          ]),
        ],
      },
    ],
  },
]

/** Beauty Services tiles in PDF order (Makeup has its own top-level entry) */
export const BEAUTY_MENU_SUBCATEGORY_IDS = [
  'waxing',
  'manicure',
  'pedicure',
  'cleanup',
  'facial',
  'de-tan',
] as const

export function findCategory(
  divisionId: string,
  categoryId: string,
): ServiceCategory | undefined {
  const division = SERVICE_DIVISIONS.find((d) => d.id === divisionId)
  return division?.categories.find((c) => c.id === categoryId)
}

export function findSubcategory(
  divisionId: string,
  categoryId: string,
  subcategoryId: string,
): ServiceSubcategory | undefined {
  const category = findCategory(divisionId, categoryId)
  return category?.subcategories.find((s) => s.id === subcategoryId)
}

export function getSubcategoryCover(
  subcategory: ServiceSubcategory,
  categoryId: string,
): string {
  return getSubcategoryMenuThumbnail(subcategory.id, categoryId)
}

export function getBeautyMenuSubcategories(): ServiceSubcategory[] {
  const beauty = findCategory('beauty', 'beauty-services')
  if (!beauty) return []
  const order = BEAUTY_MENU_SUBCATEGORY_IDS as readonly string[]
  return order
    .map((id) => beauty.subcategories.find((s) => s.id === id))
    .filter((s): s is ServiceSubcategory => Boolean(s))
}
