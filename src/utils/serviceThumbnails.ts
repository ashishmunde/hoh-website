/**
 * Service menu thumbnails — covers from the S3 `services/` folder.
 */

const SERVICES_BASE = 'https://house-of-hair.s3.ap-south-1.amazonaws.com/services'

/** Build a services/ URL; spaces → +, other chars percent-encoded (e.g. & → %26). */
export function serviceThumbnailUrl(filename: string): string {
  return `${SERVICES_BASE}/${encodeURIComponent(filename).replace(/%20/g, '+')}`
}

export const SERVICE_COVERS = {
  beard: serviceThumbnailUrl('Beard.png'),
  cleanup: serviceThumbnailUrl('Clean Up.png'),
  de_tan: serviceThumbnailUrl('D-tan.png'),
  facial: serviceThumbnailUrl('Facial & Mask.png'),
  waxing: serviceThumbnailUrl('Waxing.png'),
  manicure: serviceThumbnailUrl('Manicure.png'),
  pedicure: serviceThumbnailUrl('Pedicure.png'),
  femaleScalpNourishment: serviceThumbnailUrl('Female hair and scalp Nourishment.png'),
  femaleHairColor: serviceThumbnailUrl('Female Hair Color.png'),
  femaleHairTreatment: serviceThumbnailUrl('Female Hair Treatment.png'),
  femaleHaircut: serviceThumbnailUrl('Female Haircut.png'),
  femaleWashStyling: serviceThumbnailUrl('Female Wash and styling.png'),
  mensHaircut: serviceThumbnailUrl('Mens_service.jpeg'),
  womensHair: serviceThumbnailUrl('Women_Hair_Service.jpeg'),
  maleHairColor: serviceThumbnailUrl('Mens Hair Color.png'),
  groomMakeup: serviceThumbnailUrl('groom makeup thumbnail cover.jpg'),
} as const

const DEFAULT_THUMBNAIL = SERVICE_COVERS.femaleHaircut

/** Homepage service cards (Hair / Beauty / Makeup and Hairstyle) */
export const HOME_SERVICE_CARD_THUMBNAILS: Record<string, string> = {
  hair: SERVICE_COVERS.femaleHairColor,
  skin: SERVICE_COVERS.facial,
  'groom-makeup': SERVICE_COVERS.groomMakeup,
}

/** Category cards: Male Hair / Female Hair / Beauty Services */
export const CATEGORY_MENU_THUMBNAILS: Record<string, string> = {
  'mens-hair': SERVICE_COVERS.mensHaircut,
  'female-hair': SERVICE_COVERS.womensHair,
  'beauty-services': SERVICE_COVERS.facial,
}

/** Subcategory covers */
const SUBCATEGORY_THUMBNAILS: Record<string, string> = {
  // Male Hair
  'mens-hair::haircut': SERVICE_COVERS.mensHaircut,
  'mens-hair::hair-tattoo': SERVICE_COVERS.mensHaircut,
  'mens-hair::beard': SERVICE_COVERS.beard,
  'mens-hair::hair-color': SERVICE_COVERS.maleHairColor,
  'mens-hair::hair-treatment': SERVICE_COVERS.femaleHairTreatment,
  'mens-hair::hair-scalp-nourishment': SERVICE_COVERS.femaleScalpNourishment,

  // Female Hair
  'female-hair::haircut': SERVICE_COVERS.femaleHaircut,
  'female-hair::fringe': SERVICE_COVERS.femaleHaircut,
  'female-hair::wash-styling': SERVICE_COVERS.femaleWashStyling,
  'female-hair::hair-color': SERVICE_COVERS.femaleHairColor,
  'female-hair::hair-treatment': SERVICE_COVERS.femaleHairTreatment,
  'female-hair::hair-scalp-nourishment': SERVICE_COVERS.femaleScalpNourishment,

  // Beauty Services — dedicated covers from S3 services/
  'beauty-services::facial': SERVICE_COVERS.facial,
  'beauty-services::cleanup': SERVICE_COVERS.cleanup,
  'beauty-services::de-tan': SERVICE_COVERS.de_tan,
  'beauty-services::waxing': SERVICE_COVERS.waxing,
  'beauty-services::manicure': SERVICE_COVERS.manicure,
  'beauty-services::pedicure': SERVICE_COVERS.pedicure,
  'beauty-services::makeup': SERVICE_COVERS.groomMakeup,
}

/** Specific line-item overrides */
const SERVICE_ITEM_THUMBNAILS: Record<string, string> = {
  "beauty-services::makeup::Groom's Makeup": SERVICE_COVERS.groomMakeup,
}

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
    const itemKey = `${categoryId}::${subcategoryId}::${serviceName}`
    if (SERVICE_ITEM_THUMBNAILS[itemKey]) return SERVICE_ITEM_THUMBNAILS[itemKey]
    const subKey = `${categoryId}::${subcategoryId}`
    if (SUBCATEGORY_THUMBNAILS[subKey]) return SUBCATEGORY_THUMBNAILS[subKey]
  }
  return DEFAULT_THUMBNAIL
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
