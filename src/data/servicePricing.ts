/** Format rupee amount for display */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

/** Exact item prices (makeup + overrides) */
const ITEM_PRICES: Record<string, number> = {
  "Groom's Makeup": 5000,
  "Groom's Hairstyle": 2000,
  "Sider's Makeup": 3000,
  "Sider's Hairstyle": 1000,
  'Saree Draping': 2000,
}

/** Starting prices by subcategory — hair & beauty (waxing excluded) */
const SUBCATEGORY_STARTING_PRICES: Record<string, number> = {
  // Men's hair
  'mens-hair::haircut': 299,
  'mens-hair::hair-tattoo': 499,
  'mens-hair::beard': 199,
  'mens-hair::hair-color': 799,
  'mens-hair::hair-treatment': 899,
  'mens-hair::hair-scalp-nourishment': 999,
  // Female hair
  'female-hair::haircut': 499,
  'female-hair::fringe': 299,
  'female-hair::wash-styling': 399,
  'female-hair::hair-color': 1299,
  'female-hair::hair-treatment': 899,
  'female-hair::hair-scalp-nourishment': 999,
  // Beauty (no waxing)
  'beauty-services::manicure': 399,
  'beauty-services::pedicure': 499,
  'beauty-services::cleanup': 799,
  'beauty-services::facial': 999,
  'beauty-services::de-tan': 599,
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
