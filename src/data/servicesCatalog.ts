import type { GALLERY_IMAGES_BY_CATEGORY } from '@/utils/images'
import {
  BALAYAGE_IMAGES,
  FEMALE_HAIRCUT_IMAGES,
  MENS_HAIRCUT_IMAGES,
  HIGHLIGHTS_IMAGES,
  GLOBAL_IMAGES,
  HAIR_TREATMENT_IMAGES,
  MAKEUP_AND_HAIRSTYLE_IMAGES,
  HOMEPAGE_IMAGES,
} from '@/utils/images'

export type GalleryCategoryKey = keyof typeof GALLERY_IMAGES_BY_CATEGORY

export interface ServiceSubcategory {
  id: string
  name: string
  items: string[]
  galleryKey?: GalleryCategoryKey
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

/** Top-level cards shown on homepage and services landing */
export interface TopLevelServiceCard {
  id: string
  name: string
  divisionId: 'hair' | 'beauty'
  categoryId: string
  /** Deep-link to a subcategory (e.g. Makeup under Beauty Services) */
  subcategoryId?: string
  image: string
}

const hairTreatmentItems = [
  'Cystine',
  'Nanoplastia/Hair Restoration',
  'Hair & Scalp Nourishment',
  'Hair Spa',
  'Head Massage ( Oil )',
  'Clear Dose',
]

export const TOP_LEVEL_CARDS: TopLevelServiceCard[] = [
  {
    id: 'mens-hair',
    name: "Men's Hair",
    divisionId: 'hair',
    categoryId: 'mens-hair',
    image: MENS_HAIRCUT_IMAGES[0],
  },
  {
    id: 'female-hair',
    name: 'Female Hair',
    divisionId: 'hair',
    categoryId: 'female-hair',
    image: FEMALE_HAIRCUT_IMAGES[0],
  },
  {
    id: 'beauty-services',
    name: 'Beauty Services',
    divisionId: 'beauty',
    categoryId: 'beauty-services',
    image: HOMEPAGE_IMAGES[0],
  },
  {
    id: 'makeup',
    name: 'Makeup',
    divisionId: 'beauty',
    categoryId: 'beauty-services',
    subcategoryId: 'makeup',
    image: MAKEUP_AND_HAIRSTYLE_IMAGES[0],
  },
]

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'hair',
    name: 'Hair Services',
    categories: [
      {
        id: 'mens-hair',
        name: "Men's Hair",
        image: MENS_HAIRCUT_IMAGES[0],
        subcategories: [
          {
            id: 'haircut',
            name: 'Haircut',
            galleryKey: 'mensHaircut',
            items: [
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
            id: 'hair-tattoo',
            name: 'Hair Tattoo',
            galleryKey: 'mensHaircut',
            items: [
              'Razor Stroke',
              'Custom Hair Tattoo',
              'Free Hand Hair Tattoo',
              'Alphabetical Hair Tattoo',
            ],
          },
          {
            id: 'beard',
            name: 'Beard',
            galleryKey: 'mensHaircut',
            items: ['Classic beard', 'Beard trim', 'Faded beard'],
          },
          {
            id: 'hair-color',
            name: 'Hair Color',
            galleryKey: 'highlights',
            items: [
              'Global color',
              'Highlights',
              'Crazy color',
              'Beard color',
            ],
          },
          {
            id: 'hair-treatment',
            name: 'Hair Treatment',
            galleryKey: 'hairTreatment',
            items: hairTreatmentItems,
          },
        ],
      },
      {
        id: 'female-hair',
        name: 'Female Hair',
        image: FEMALE_HAIRCUT_IMAGES[0],
        subcategories: [
          {
            id: 'haircut',
            name: 'Haircut',
            galleryKey: 'femaleHaircut',
            items: [
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
            id: 'fringe',
            name: 'Fringe',
            galleryKey: 'femaleHaircut',
            items: [
              'Side swept Fringe',
              'Curtain bangs',
              'Solid Fringes',
            ],
          },
          {
            id: 'wash-styling',
            name: 'Wash & Styling',
            galleryKey: 'femaleHaircut',
            items: [
              'Hair Wash & Paddle dry',
              'Hair Wash & Blow Dry',
              'Ironing',
              'Crimping',
              'Iron Tong',
              'Tongs',
            ],
          },
          {
            id: 'hair-color',
            name: 'Hair Color',
            galleryKey: 'balayage',
            items: [
              'Global',
              'Highlights',
              'Balayage & Ombre',
              'touch up',
              'Ammonia Free Touchup',
              'Crazy color',
            ],
          },
          {
            id: 'hair-treatment',
            name: 'Hair Treatment',
            galleryKey: 'hairTreatment',
            items: hairTreatmentItems,
          },
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
        image: HOMEPAGE_IMAGES[0],
        subcategories: [
          {
            id: 'waxing',
            name: 'Waxing',
            items: ['rica wax', 'Regular wax', 'Cartridge wax', 'peeloff wax'],
          },
          {
            id: 'manicure',
            name: 'Manicure',
            items: [
              'Regular',
              'Wine',
              'Chocolate',
              'Detan',
              'Candle spa',
              'Signature plus',
            ],
          },
          {
            id: 'pedicure',
            name: 'Pedicure',
            items: [
              'Regular',
              'Wine',
              'Chocolate',
              'Detan',
              'Candle spa',
              'Signature plus',
            ],
          },
          {
            id: 'cleanup',
            name: 'Cleanup',
            items: [
              'Hydra cleanup',
              "Cheryl's",
              'O3+ cleanup',
              'Janssen cleanup',
            ],
          },
          {
            id: 'facial',
            name: 'Facial',
            items: [
              'Light & Bright',
              'Biolight (O3+)',
              'Janssen facial',
              'Hydra Facial',
              'Hydra + O3',
              'Hydra + janssen',
            ],
          },
          {
            id: 'detan',
            name: 'Detan',
            items: ['O3 detan', 'Janssen detan', 'Raga detan'],
          },
          {
            id: 'makeup',
            name: 'Makeup',
            galleryKey: 'makeupAndHairstyle',
            items: [
              "Groom's Makeup",
              "Sider's Makeup",
              "Groom's Hairstyle",
              "Sider's Hairstyle",
              'Saree Draping',
            ],
          },
        ],
      },
    ],
  },
]

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

export function getCardById(cardId: string): TopLevelServiceCard | undefined {
  return TOP_LEVEL_CARDS.find((c) => c.id === cardId)
}

/** Map legacy gallery category names for Our Work section */
export const GALLERY_CATEGORY_LABELS: Record<GalleryCategoryKey, string> = {
  balayage: 'Balayage',
  femaleHaircut: 'Female Haircut',
  global: 'Global',
  hairTreatment: 'Hair Treatment',
  highlights: 'Highlights',
  homepage: 'Homepage',
  mensHaircut: "Men's Haircut",
  makeupAndHairstyle: 'Make-up and Hairstyle',
}
