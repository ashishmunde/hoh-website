import {
  getCategoryMenuThumbnail,
  getHomeServiceCardThumbnail,
  getSubcategoryMenuThumbnail,
} from '@/utils/serviceThumbnails'

export interface ServiceItemGroup {
  name: string
  items: string[]
}

export interface ServiceSubcategory {
  id: string
  name: string
  items: string[]
  groups?: ServiceItemGroup[]
  notes?: string[]
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
  notes?: string[],
): ServiceSubcategory {
  return { id, name, items, notes }
}

function beautySub(
  _categoryId: string,
  id: string,
  name: string,
  items: string[],
  notes?: string[],
): ServiceSubcategory {
  return { id, name, items, notes }
}

function beautyGrouped(
  id: string,
  name: string,
  groups: ServiceItemGroup[],
  notes?: string[],
): ServiceSubcategory {
  return {
    id,
    name,
    items: groups.flatMap((group) => group.items),
    groups,
    notes,
  }
}

const MENS_GENERAL_NOTES = [
  '*Long hair of male would be charged according to female prices.',
  '*Technical services done by Style Director will be +20% of actual cost.',
]

const MENS_TECHNICAL_NOTES = [
  '*Price may vary according to length & density.',
  '*Long hair of male would be charged according to female prices.',
  '*Technical services done by Style Director will be +20% of actual cost.',
]

const WOMENS_WASH_NOTES = [
  '*If oil is applied, ₹100 extra will be charged with the wash amount.',
  '*Extra 20% will be charged for Sulphate & paraben free shampoo & conditioner.',
  '*Hair length below mid-back will be charged extra for blowdry / wash & blowdry / wash & dry / tongs / ironing / crimping.',
]

const WOMENS_COLOR_NOTES = [
  '*Technical services done by Style Director will be +20% of actual cost.',
  '*Price may vary according to length & density.',
  '*Extra 20% will be charged for Sulphate & paraben free shampoo & conditioner.',
]

const WOMENS_SCALP_NOTES = [
  '*If oil is applied, ₹100 extra will be charged with the wash amount.',
  '*Extra 20% will be charged for Sulphate & paraben free shampoo & conditioner.',
]

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
          hairSub(
            'mens-hair',
            'hair-scalp-nourishment',
            'Hair & Scalp Nourishment',
            [
              'Hairspa Loreal',
              'Hairspa Schwarzkopf',
              'Head Massage (20Mins)',
              'Head Massage with Wash',
              'Clear Dose',
            ],
            MENS_GENERAL_NOTES,
          ),
          hairSub('mens-hair', 'hair-color', 'Color', [
            'Global Color',
            'Ammonia Free Global Color',
            'Hi-Lights',
            'Crazy Color (Blue, Green, Ash)',
            'Beard Color',
          ]),
          hairSub(
            'mens-hair',
            'texture-services',
            'Texture Services',
            ['Cysteine', 'Hair Restoration'],
            MENS_TECHNICAL_NOTES,
          ),
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
          hairSub(
            'female-hair',
            'wash-styling',
            'Wash & Styling',
            [
              'Hairwash & Paddle Dry (If oil is applied ₹100 extra)',
              'Blowdry (In-turn, Out-turn, Straight)',
              'Blow Dry with Shampoo & Conditioner',
              'Ironing',
              'Crimping',
              'Iron Tong',
              'Tong',
            ],
            WOMENS_WASH_NOTES,
          ),
          hairSub(
            'female-hair',
            'hair-color',
            'Color',
            [
              'Ammonia-Free Touch Up',
              'Touch Up',
              'Ammonia-Free Global Color',
              'Global Color',
              'Hi-Lights & Babylight',
              'Balayage & Ombre',
              'Per Streaks',
              'Crazy Color',
            ],
            WOMENS_COLOR_NOTES,
          ),
          hairSub(
            'female-hair',
            'texture-services',
            'Texture Services',
            ['Cysteine Treatment', 'Hair Restoration'],
          ),
          hairSub(
            'female-hair',
            'hair-scalp-nourishment',
            'Hair & Scalp Nourishment',
            [
              'Hairspa Loreal',
              'Hairspa Schwarzkopf',
              'Hairspa Naturica',
              'Head Massage (20Mins)',
              'Head Massage with Wash',
              'Clear Dose',
            ],
            WOMENS_SCALP_NOTES,
          ),
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
          beautyGrouped('waxing', 'Waxing', [
            {
              name: 'Rica Wax',
              items: [
                'Upper Lip',
                'Chin',
                'Face',
                'Side Lock',
                'Under Arms',
                'Full Arms',
                'Half Arms',
                'Full Legs',
                'Half Legs',
                'Full Back',
                'Half Back',
                'Full Front',
                'Half Front',
                'Stomach',
                'Behind',
                'Bikini Line',
                'Buttocks',
                'Brazilian',
                'Full Body',
              ],
            },
            {
              name: 'Reg. Wax',
              items: [
                'Upper Lip',
                'Chin',
                'Face',
                'Jawline',
                'Side Lock',
                'Under Arms',
                'Full Arms',
                'Half Arms',
                'Full Legs',
                'Half Legs',
                'Full Back',
                'Half Back',
                'Full Front',
                'Half Front',
                'Stomach',
                'Behind',
                'Buttocks',
                'Bikini Line',
                'Brazilian',
                'Full Body',
              ],
            },
            {
              name: 'Cartridge Wax',
              items: [
                'Under Arms',
                'Full Arms',
                'Half Arms',
                'Full Legs',
                'Half Legs',
                'Full Back',
                'Half Back',
                'Half Front',
                'Full Front',
                'Stomach',
                'Full Body',
              ],
            },
            {
              name: 'Peeloff Wax',
              items: [
                'Upper Lip',
                'Fore Head',
                'Chin',
                'Side Lock',
                'Neck',
                'Under Arms',
                'Ear',
                'Nose',
                'Full Face',
                'Brazilian',
              ],
            },
          ]),
          beautySub('beauty-services', 'basic-skin-care', 'Basic Skin Care', [
            'Upper Lip',
            'Chin',
            'Forehead',
            'Jawline',
            'Eyebrow',
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
          beautyGrouped('de-tan', 'De-Tan', [
            {
              name: 'O3+',
              items: [
                'Face',
                'Face, Neck & Blouse Line',
                'Full Arms',
                'Half Arms',
                'Full Back',
                'Half Back',
                'Full Legs',
                'Half Legs',
                'Under Arms',
                'Body',
              ],
            },
            {
              name: 'Janssen',
              items: [
                'Face',
                'Face, Neck & Blouse Line',
                'Full Arms',
                'Half Arms',
                'Full Back',
                'Under Arms',
              ],
            },
            {
              name: 'Raaga',
              items: [
                'Face',
                'Face, Neck & Blouse Line',
                'Full Arms',
                'Half Arms',
                'Full Back',
                'Half Back',
                'Full Legs',
                'Half Legs',
                'Under Arms',
                'Body',
              ],
            },
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

/** Short service lists — keep the cover photo matched to the list height */
export const COMPACT_SPLIT_SUBCATEGORIES = new Set([
  'basic-skin-care',
  'manicure',
  'pedicure',
  'hands-feet',
  'cleanup',
  'facial',
  'spa',
  'massage',
])

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
