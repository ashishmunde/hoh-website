import {
  BALAYAGE_IMAGES,
  FEMALE_HAIRCUT_IMAGES,
  GLOBAL_IMAGES,
  HAIR_TREATMENT_IMAGES,
  HIGHLIGHTS_IMAGES,
  HOMEPAGE_IMAGES,
  MENS_HAIRCUT_IMAGES,
  MENS_HAIR_COLOR_IMAGES,
  MAKEUP_AND_HAIRSTYLE_IMAGES,
} from '@/utils/images'

/** Unique key: division:category:subcategory */
export function serviceImageKey(
  division: string,
  category: string,
  subcategory: string,
): string {
  return `${division}:${category}:${subcategory}`
}

/**
 * Maps each PDF service section to photo folders in /hoh.
 *
 * Folders → sections:
 * - Men_s Haircut → Men's Hair (haircut, hair tattoo, beard)
 * - Men_s Hair Color + Global + Highlights → Men's Hair (hair color)
 * - Hair Treatment → Men's & Female (hair treatment)
 * - Female haircut → Female Hair (haircut, fringe, wash & styling)
 * - Balayage + Global + Highlights → Female Hair (hair color)
 * - Makeup & Hairstyle → Beauty (makeup)
 * - Home Page Photos → mixed marketing (wash & styling extras)
 * - Branches → branch cards only (not service gallery)
 */
const SUBCATEGORY_IMAGES: Record<string, string[]> = {
  // Men's Hair
  [serviceImageKey('hair', 'mens-hair', 'haircut')]: MENS_HAIRCUT_IMAGES,
  [serviceImageKey('hair', 'mens-hair', 'hair-tattoo')]: MENS_HAIRCUT_IMAGES,
  [serviceImageKey('hair', 'mens-hair', 'beard')]: MENS_HAIRCUT_IMAGES,
  [serviceImageKey('hair', 'mens-hair', 'hair-color')]: [
    ...MENS_HAIR_COLOR_IMAGES,
    ...GLOBAL_IMAGES,
    ...HIGHLIGHTS_IMAGES,
  ],
  [serviceImageKey('hair', 'mens-hair', 'hair-treatment')]: HAIR_TREATMENT_IMAGES,

  // Female Hair
  [serviceImageKey('hair', 'female-hair', 'haircut')]: FEMALE_HAIRCUT_IMAGES,
  [serviceImageKey('hair', 'female-hair', 'fringe')]: FEMALE_HAIRCUT_IMAGES,
  [serviceImageKey('hair', 'female-hair', 'wash-styling')]: [
    ...FEMALE_HAIRCUT_IMAGES,
    ...HOMEPAGE_IMAGES,
  ],
  [serviceImageKey('hair', 'female-hair', 'hair-color')]: [
    ...BALAYAGE_IMAGES,
    ...GLOBAL_IMAGES,
    ...HIGHLIGHTS_IMAGES,
  ],
  [serviceImageKey('hair', 'female-hair', 'hair-treatment')]: HAIR_TREATMENT_IMAGES,

  // Beauty (no photo folders except makeup)
  [serviceImageKey('beauty', 'beauty-services', 'makeup')]: MAKEUP_AND_HAIRSTYLE_IMAGES,
}

export function getServiceImages(
  division: string,
  category: string,
  subcategory: string,
): string[] {
  return SUBCATEGORY_IMAGES[serviceImageKey(division, category, subcategory)] ?? []
}

export function getSubcategoryThumbnail(
  division: string,
  category: string,
  subcategory: string,
  fallback = '',
): string {
  const images = getServiceImages(division, category, subcategory)
  return images[0] ?? fallback
}

/** Portfolio entries for homepage "Our Work" — sections that have photos */
export const PORTFOLIO_SECTIONS = [
  {
    id: 'mens-haircut',
    name: "Men's Hair",
    division: 'hair',
    category: 'mens-hair',
    subcategory: 'haircut',
    image: MENS_HAIRCUT_IMAGES[0],
    imageCount: MENS_HAIRCUT_IMAGES.length,
  },
  {
    id: 'female-haircut',
    name: 'Female Hair',
    division: 'hair',
    category: 'female-hair',
    subcategory: 'haircut',
    image: FEMALE_HAIRCUT_IMAGES[0],
    imageCount: FEMALE_HAIRCUT_IMAGES.length,
  },
  {
    id: 'highlights',
    name: 'Highlights',
    division: 'hair',
    category: 'female-hair',
    subcategory: 'hair-color',
    image: HIGHLIGHTS_IMAGES[0],
    imageCount: HIGHLIGHTS_IMAGES.length,
  },
  {
    id: 'balayage',
    name: 'Balayage',
    division: 'hair',
    category: 'female-hair',
    subcategory: 'hair-color',
    image: BALAYAGE_IMAGES[0],
    imageCount: BALAYAGE_IMAGES.length,
  },
  {
    id: 'global',
    name: 'Global Color',
    division: 'hair',
    category: 'female-hair',
    subcategory: 'hair-color',
    image: GLOBAL_IMAGES[0],
    imageCount: GLOBAL_IMAGES.length,
  },
  {
    id: 'hair-treatment',
    name: 'Hair Treatment',
    division: 'hair',
    category: 'female-hair',
    subcategory: 'hair-treatment',
    image: HAIR_TREATMENT_IMAGES[0],
    imageCount: HAIR_TREATMENT_IMAGES.length,
  },
  {
    id: 'makeup',
    name: 'Make-up & Hairstyle',
    division: 'beauty',
    category: 'beauty-services',
    subcategory: 'makeup',
    image: MAKEUP_AND_HAIRSTYLE_IMAGES[0],
    imageCount: MAKEUP_AND_HAIRSTYLE_IMAGES.length,
  },
] as const
