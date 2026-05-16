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

export interface TopLevelServiceCard {
  id: string
  name: string
  divisionId: 'hair' | 'beauty'
  categoryId: string
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

function hairSub(
  categoryId: string,
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

export const TOP_LEVEL_CARDS: TopLevelServiceCard[] = [
  {
    id: 'mens-hair',
    name: "Men's Hair",
    divisionId: 'hair',
    categoryId: 'mens-hair',
    image: getHomeServiceCardThumbnail('mens-hair'),
  },
  {
    id: 'female-hair',
    name: 'Female Hair',
    divisionId: 'hair',
    categoryId: 'female-hair',
    image: getHomeServiceCardThumbnail('female-hair'),
  },
  {
    id: 'beauty-services',
    name: 'Beauty Services',
    divisionId: 'beauty',
    categoryId: 'beauty-services',
    image: getHomeServiceCardThumbnail('beauty-services'),
  },
  {
    id: 'makeup',
    name: 'Makeup',
    divisionId: 'beauty',
    categoryId: 'beauty-services',
    subcategoryId: 'makeup',
    image: getHomeServiceCardThumbnail('makeup'),
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
            'Straight ,U,V Haircut',
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
            'touch up',
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
            'rica wax',
            'Regular wax',
            'Cartridge wax',
            'peeloff wax',
          ]),
          beautySub('beauty-services', 'manicure', 'Manicure', [
            'Regular',
            'Wine',
            'Chocolate',
            'Detan',
            'Candle spa',
            'Signature plus',
          ]),
          beautySub('beauty-services', 'pedicure', 'Pedicure', [
            'Regular',
            'Wine',
            'Chocolate',
            'Detan',
            'Candle spa',
            'Signature plus',
          ]),
          beautySub('beauty-services', 'cleanup', 'Cleanup', [
            'Hydra cleanup',
            "Cheryl's",
            'O3+ cleanup',
            'Janssen cleanup',
          ]),
          beautySub('beauty-services', 'facial', 'Facial', [
            'Light & Bright',
            'Biolight (O3+)',
            'Janssen facial',
            'Hydra Facial',
            'Hydra + O3',
            'Hydra + janssen',
          ]),
          beautySub('beauty-services', 'detan', 'Detan', [
            'O3 detan',
            'Janssen detan',
            'Raga detan',
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

export function getSubcategoryCover(
  subcategory: ServiceSubcategory,
  categoryId: string,
): string {
  return getSubcategoryMenuThumbnail(subcategory.id, categoryId)
}
