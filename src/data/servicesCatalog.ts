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
 * Rate card layout (top level):
 * Hair Services | Beauty Services | Makeup and Hairstyle
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
    name: 'Makeup and Hairstyle',
    image: getHomeServiceCardThumbnail('groom-makeup'),
    query: {
      division: 'beauty',
      category: 'beauty-services',
      subcategory: 'makeup',
    },
  },
]

/**
 * Catalog mirrors the rate card sections and service names.
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
            'Haircut by Shubham (Style Director)',
            'Haircut by Expert with Wash',
            'Haircut by Expert without Wash',
            'Kids (0-7)',
            'Hairwash',
            'Styling',
          ]),
          hairSub('mens-hair', 'beard', 'Beard', ['Beard']),
          hairSub('mens-hair', 'hair-color', 'Color', [
            'Global Color',
            'Ammonia Free Global Color',
            'Hi-Lights',
            'Crazy Color (Blue, Green, Ash)',
            'Beard Color',
          ]),
          hairSub('mens-hair', 'texture-services', 'Texture Services', [
            'Cysteine',
            'Hair Restoration',
          ]),
          hairSub('mens-hair', 'hair-scalp-nourishment', 'Hair & Scalp Nourishment', [
            'Hairspa Loreal',
            'Hairspa Schwarzkopf',
            'Head Massage (20Mins)',
            'Head Massage with Wash',
            'Clear Dose',
          ]),
        ],
      },
      {
        id: 'female-hair',
        name: "Women's Hair",
        image: getCategoryMenuThumbnail('female-hair'),
        subcategories: [
          hairSub('female-hair', 'haircut', 'Haircut', [
            'Haircut by Shubham (Style Director)',
            'Haircut by Expert with Wash',
            'Haircut by Expert without Wash',
            'Kids (0-7)',
          ]),
          hairSub('female-hair', 'fringe', 'Fringe', ['Fringe']),
          hairSub('female-hair', 'wash-styling', 'Wash & Styling', [
            'Hairwash & Paddle Dry',
            'Blowdry (In-turn, Out-turn, Straight)',
            'Blow Dry with Shampoo & Conditioner',
            'Ironing',
            'Crimping',
            'Iron Tong',
            'Tong',
          ]),
          hairSub('female-hair', 'hair-color', 'Color', [
            'Ammonia-Free Touch Up',
            'Touch Up',
            'Ammonia-Free Global Color',
            'Global Color',
            'Hi-Lights & Babylight',
            'Balayage & Ombre',
            'Per Streaks',
            'Crazy Color',
          ]),
          hairSub('female-hair', 'texture-services', 'Texture Services', [
            'Cysteine Treatment',
            'Hair Restoration',
          ]),
          hairSub('female-hair', 'hair-scalp-nourishment', 'Hair & Scalp Nourishment', [
            'Hairspa Loreal',
            'Hairspa Schwarzkopf',
            'Hairspa Naturica',
            'Head Massage (20Mins)',
            'Head Massage with Wash',
            'Clear Dose',
          ]),
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
            'Rica Wax — Upper Lip',
            'Rica Wax — Chin',
            'Rica Wax — Face',
            'Rica Wax — Side Lock',
            'Rica Wax — Under Arms',
            'Rica Wax — Full Arms',
            'Rica Wax — Half Arms',
            'Rica Wax — Full Legs',
            'Rica Wax — Half Legs',
            'Rica Wax — Full Back',
            'Rica Wax — Half Back',
            'Rica Wax — Full Front',
            'Rica Wax — Half Front',
            'Rica Wax — Stomach',
            'Rica Wax — Behind',
            'Rica Wax — Bikini Line',
            'Rica Wax — Buttocks',
            'Rica Wax — Brazilian',
            'Rica Wax — Full Body',
            'Reg. Wax — Upper Lip',
            'Reg. Wax — Chin',
            'Reg. Wax — Face',
            'Reg. Wax — Jawline',
            'Reg. Wax — Side Lock',
            'Reg. Wax — Under Arms',
            'Reg. Wax — Full Arms',
            'Reg. Wax — Half Arms',
            'Reg. Wax — Full Legs',
            'Reg. Wax — Half Legs',
            'Reg. Wax — Full Back',
            'Reg. Wax — Half Back',
            'Reg. Wax — Full Front',
            'Reg. Wax — Half Front',
            'Reg. Wax — Stomach',
            'Reg. Wax — Behind',
            'Reg. Wax — Buttocks',
            'Reg. Wax — Bikini Line',
            'Reg. Wax — Brazilian',
            'Reg. Wax — Full Body',
            'Cartridge Wax — Under Arms',
            'Cartridge Wax — Full Arms',
            'Cartridge Wax — Half Arms',
            'Cartridge Wax — Full Legs',
            'Cartridge Wax — Half Legs',
            'Cartridge Wax — Full Back',
            'Cartridge Wax — Half Back',
            'Cartridge Wax — Half Front',
            'Cartridge Wax — Full Front',
            'Cartridge Wax — Stomach',
            'Cartridge Wax — Full Body',
            'Peeloff Wax — Upper Lip',
            'Peeloff Wax — Fore Head',
            'Peeloff Wax — Chin',
            'Peeloff Wax — Side Lock',
            'Peeloff Wax — Neck',
            'Peeloff Wax — Under Arms',
            'Peeloff Wax — Brazilian',
            'Peeloff Wax — Ear',
            'Peeloff Wax — Nose',
            'Peeloff Wax — Full Face',
          ]),
          beautySub('beauty-services', 'basic-skin-care', 'Basic Skin Care', [
            'Eyebrow',
            'Upper Lip',
            'Chin',
            'Forehead',
            'Jawline',
            'Face',
          ]),
          beautySub('beauty-services', 'manicure', 'Manicure', [
            'Regular',
            'Wine',
            'Chocolate',
            'D-Tan',
            'Candle Spa',
            'Signature +',
          ]),
          beautySub('beauty-services', 'pedicure', 'Pedicure', [
            'Regular',
            'Wine',
            'Chocolate',
            'D-Tan',
            'Candle Spa',
            'Signature +',
            'Heel Peel',
          ]),
          beautySub('beauty-services', 'hands-feet', 'Hands & Feet', [
            'Cut & File',
            'Cut File & Polish',
            'Nail Cut & File + Nail Polish (French)',
            'Reflexology',
          ]),
          beautySub('beauty-services', 'cleanup', 'Clean Up', [
            'Matte Effect Fruit Cleansing for Combination to Oily Skin',
            'Deep Cleansing for Acne Prone Skin',
            'Lotus Pearl Glow',
            'Hydra Cleanup',
            'O3+ Clean Up',
            'Janssen Clean Up',
          ]),
          beautySub('beauty-services', 'facial', 'Facial & Masks', [
            'Young Blush',
            'Age Defence',
            'Hydra Facial',
            'Pearl Glow',
            'Light & Bright',
            'Biolight (O3+)',
            'Janssen Facial',
            'Hydra + O3',
            'Hydra + Janssen',
          ]),
          beautySub('beauty-services', 'de-tan', 'De-Tan', [
            'O3+ — Face',
            'O3+ — Face, Neck & Blouse Line',
            'O3+ — Full Arms',
            'O3+ — Half Arms',
            'O3+ — Full Back',
            'O3+ — Half Back',
            'O3+ — Full Legs',
            'O3+ — Half Legs',
            'O3+ — Under Arms',
            'O3+ — Body',
            'Janssen — Face',
            'Janssen — Face, Neck & Blouse Line',
            'Janssen — Full Arms',
            'Janssen — Half Arms',
            'Janssen — Full Back',
            'Janssen — Under Arms',
            'Raaga — Face',
            'Raaga — Face, Neck & Blouse Line',
            'Raaga — Full Arms',
            'Raaga — Half Arms',
            'Raaga — Full Back',
            'Raaga — Half Back',
            'Raaga — Full Legs',
            'Raaga — Half Legs',
            'Raaga — Under Arms',
            'Raaga — Body',
          ]),
          beautySub('beauty-services', 'spa', 'Spa Services', [
            'Sparkling Back Exfoliation + Massage + Wrap',
            'Full Body Exfoliation + Massage + Wrap',
            'Full Body Exfoliation with Scrub Cream',
            'Full Body Exfoliation with Sugar Peel',
            'Sparkling Hands Exfoliation + Massage + Wrap',
            'Sparkling Legs Exfoliation + Massage + Wrap',
          ]),
          beautySub('beauty-services', 'massage', 'Massage', [
            'Back Massage (with Massage Balm / Essential Oil)',
            'Body Massage',
          ]),
          beautySub('beauty-services', 'makeup', 'Makeup and Hairstyle', [
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

/** Beauty Services tiles (Makeup has its own top-level entry) */
export const BEAUTY_MENU_SUBCATEGORY_IDS = [
  'waxing',
  'basic-skin-care',
  'manicure',
  'pedicure',
  'hands-feet',
  'cleanup',
  'facial',
  'de-tan',
  'spa',
  'massage',
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
