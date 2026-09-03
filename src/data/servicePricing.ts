/** Format rupee amount for display */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

/** Exact item prices (makeup + overrides) */
const ITEM_PRICES: Record<string, number> = {
  // Makeup & Hairstyle
  "Groom's Makeup": 5000,
  "Groom's Hairstyle": 2000,
  "Sider's Makeup": 3000,
  "Sider's Hairstyle": 1000,
  'Saree Draping': 2000,

  // Men's Haircut (by expert without wash is lowest; Shubham is 1200)
  'Classic Haircut': 400,
  'Pushback Haircut': 400,
  'Side part Haircut': 400,
  'Zero fade Haircut': 400,
  'High fade Haircut': 400,
  'Low fade Haircut': 400,
  'Long layer Haircut': 400,
  'Curly hair Haircut': 400,
  'Taper Haircut': 400,

  // Men's Beard
  'Classic beard': 300,
  'Beard trim': 300,
  'Faded beard': 300,

  // Men's Hair Color
  'Global color': 1000,
  'Highlights': 1700,
  'Crazy color': 2300,
  'Beard color': 500,

  // Men's Hair Treatment
  'Cystine': 2000,
  'Nanoplastia/Hair Restoration': 2500,
  'Hair Spa': 1000,
  'Head Massage ( Oil )': 400,
  'Clear Dose': 1000,

  // Men's Hair & Scalp Nourishment
  'Hair & Scalp Nourishment': 1000,

  // Female Haircut
  'Long layer': 700,
  'Short layers': 700,
  'Butterfly Haircut': 700,
  'Face Framing Layers': 700,
  'Classic Bob': 700,
  'Graduated Bob': 700,
  'Curly Shag Haircut': 700,

  // Female Fringe
  'Side swept Fringe': 300,
  'Curtain bangs': 300,
  'Solid Fringes': 300,

  // Female Wash & Styling
  'Hair Wash & Paddle dry': 400,
  'Hair Wash & Blow Dry': 700,
  'Ironing': 700,
  'Crimping': 1200,
  'Iron Tong': 700,
  'Tongs': 700,

  // Female Hair Color
  'Global': 4000,
  'Balayage & Ombre': 6000,
  'Touch up': 1400,
  'Ammonia Free Touchup': 1600,

  // Manicure (pedicure prices are higher — handled via subcategory starting price)
  'Regular': 700,
  'Wine': 950,
  'Chocolate': 950,
  'De-tan': 1200,
  'Candle Spa': 1500,
  'Signature Plus': 1700,

  // Cleanup
  'Hydra Cleanup': 1800,
  "Cheryl's": 1000,
  'O3+ Cleanup': 2000,
  'Janssen Cleanup': 2200,

  // Facial
  'Light & Bright': 2800,
  'Biolight (O3+)': 3200,
  'Janssen Facial': 4500,
  'Hydra Facial': 2500,
  'Hydra + O3': 5500,
  'Hydra + Janssen': 6500,

  // De-tan
  'O3 De-tan': 1000,
  'Janssen De-tan': 1200,
  'Raga De-tan': 700,
}

/** Starting prices by subcategory — hair & beauty (waxing excluded) */
const SUBCATEGORY_STARTING_PRICES: Record<string, number> = {
  // Men's hair — lowest price in each subcategory
  'mens-hair::haircut': 400,
  'mens-hair::hair-tattoo': 400,
  'mens-hair::beard': 300,
  'mens-hair::hair-color': 500,
  'mens-hair::hair-treatment': 400,
  'mens-hair::hair-scalp-nourishment': 1000,
  // Female hair — lowest price in each subcategory
  'female-hair::haircut': 700,
  'female-hair::fringe': 300,
  'female-hair::wash-styling': 400,
  'female-hair::hair-color': 1400,
  'female-hair::hair-treatment': 1000,
  'female-hair::hair-scalp-nourishment': 1400,
  // Beauty (no waxing) — lowest price in each subcategory
  'beauty-services::manicure': 700,
  'beauty-services::pedicure': 850,
  'beauty-services::cleanup': 1000,
  'beauty-services::facial': 2300,
  'beauty-services::de-tan': 700,
  'beauty-services::makeup': 1000,
}

const NO_PRICE_SUBCATEGORIES = new Set(['waxing'])

function subKey(categoryId: string, subcategoryId: string): string {
  return `${categoryId}::${subcategoryId}`
}

export function shouldShowPricing(categoryId: string, subcategoryId: string): boolean {
  return !NO_PRICE_SUBCATEGORIES.has(subcategoryId)
}

export function getItemPrice(
  categoryId: string,
  subcategoryId: string,
  itemName: string,
): number | null {
  if (!shouldShowPricing(categoryId, subcategoryId)) return null
  if (ITEM_PRICES[itemName] != null) return ITEM_PRICES[itemName]
  return SUBCATEGORY_STARTING_PRICES[subKey(categoryId, subcategoryId)] ?? null
}

export function formatItemPrice(
  categoryId: string,
  subcategoryId: string,
  itemName: string,
): string | null {
  const price = getItemPrice(categoryId, subcategoryId, itemName)
  if (price == null) return null
  if (ITEM_PRICES[itemName] != null) return formatPrice(price)
  return `From ${formatPrice(price)}`
}

export function formatSubcategoryStartingPrice(
  categoryId: string,
  subcategoryId: string,
): string | null {
  if (!shouldShowPricing(categoryId, subcategoryId)) return null
  const price = SUBCATEGORY_STARTING_PRICES[subKey(categoryId, subcategoryId)]
  if (price == null) return null
  return `From ${formatPrice(price)}`
}
