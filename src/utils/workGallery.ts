import {
  BALAYAGE_IMAGES,
  FEMALE_HAIRCUT_IMAGES,
  GLOBAL_IMAGES,
  HAIR_TREATMENT_IMAGES,
  HIGHLIGHTS_IMAGES,
  MENS_HAIRCUT_IMAGES,
  MENS_HAIR_COLOR_IMAGES,
  MAKEUP_AND_HAIRSTYLE_IMAGES,
} from '@/utils/images'

/** Portfolio galleries for the homepage "Our Work" section (your uploaded photos). */
export const WORK_GALLERY_CATEGORIES = [
  {
    id: 'balayage',
    name: 'Balayage',
    galleryQuery: 'Balayage',
    thumbnail: BALAYAGE_IMAGES[16],
    images: BALAYAGE_IMAGES,
  },
  {
    id: 'highlights',
    name: 'Highlights',
    galleryQuery: 'Highlights',
    thumbnail: HIGHLIGHTS_IMAGES[0],
    images: HIGHLIGHTS_IMAGES,
  },
  {
    id: 'global',
    name: 'Global',
    galleryQuery: 'Global',
    thumbnail: GLOBAL_IMAGES[0],
    images: GLOBAL_IMAGES,
  },
  {
    id: 'hair-treatment',
    name: 'Hair Treatment',
    galleryQuery: 'Hair Treatment',
    thumbnail: HAIR_TREATMENT_IMAGES[0],
    images: HAIR_TREATMENT_IMAGES,
  },
  {
    id: 'female-haircut',
    name: 'Female Haircut',
    galleryQuery: 'Female Haircut',
    thumbnail: FEMALE_HAIRCUT_IMAGES[0],
    images: FEMALE_HAIRCUT_IMAGES,
  },
  {
    id: 'mens-haircut',
    name: 'Male Haircut',
    galleryQuery: 'Male Haircut',
    thumbnail: MENS_HAIRCUT_IMAGES[0],
    images: MENS_HAIRCUT_IMAGES,
  },
  {
    id: 'mens-hair-color',
    name: 'Male Hair Color',
    galleryQuery: 'Male Hair Color',
    thumbnail: MENS_HAIR_COLOR_IMAGES[0],
    images: MENS_HAIR_COLOR_IMAGES,
  },
  {
    id: 'makeup',
    name: 'Groom Makeup',
    galleryQuery: 'Groom Makeup',
    thumbnail: MAKEUP_AND_HAIRSTYLE_IMAGES[0],
    images: MAKEUP_AND_HAIRSTYLE_IMAGES,
  },
] as const
