/** Format rupee amount for display */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

function itemKey(categoryId: string, subcategoryId: string, itemName: string): string {
  return `${categoryId}::${subcategoryId}::${itemName}`
}

function subKey(categoryId: string, subcategoryId: string): string {
  return `${categoryId}::${subcategoryId}`
}

/**
 * Exact rates from the rate card, keyed by category::subcategory::item.
 * Names match servicesCatalog.ts.
 */
const ITEM_PRICES: Record<string, number> = {
  // —— Men's Hair ——
  [itemKey('mens-hair', 'haircut', 'Haircut by Shubham (Style Director)')]: 1200,
  [itemKey('mens-hair', 'haircut', 'Haircut by Expert with Wash')]: 500,
  [itemKey('mens-hair', 'haircut', 'Haircut by Expert without Wash')]: 400,
  [itemKey('mens-hair', 'haircut', 'Kids (0-7)')]: 400,
  [itemKey('mens-hair', 'haircut', 'Hairwash')]: 200,
  [itemKey('mens-hair', 'haircut', 'Styling')]: 200,

  [itemKey('mens-hair', 'beard', 'Beard')]: 300,

  [itemKey('mens-hair', 'hair-color', 'Global Color')]: 1000,
  [itemKey('mens-hair', 'hair-color', 'Ammonia Free Global Color')]: 1200,
  [itemKey('mens-hair', 'hair-color', 'Hi-Lights')]: 1700,
  [itemKey('mens-hair', 'hair-color', 'Crazy Color (Blue, Green, Ash)')]: 2300,
  [itemKey('mens-hair', 'hair-color', 'Beard Color')]: 500,

  [itemKey('mens-hair', 'texture-services', 'Cysteine')]: 2000,
  [itemKey('mens-hair', 'texture-services', 'Hair Restoration')]: 2500,

  [itemKey('mens-hair', 'hair-scalp-nourishment', 'Hairspa Loreal')]: 1000,
  [itemKey('mens-hair', 'hair-scalp-nourishment', 'Hairspa Schwarzkopf')]: 1200,
  [itemKey('mens-hair', 'hair-scalp-nourishment', 'Head Massage (20Mins)')]: 400,
  [itemKey('mens-hair', 'hair-scalp-nourishment', 'Head Massage with Wash')]: 500,
  [itemKey('mens-hair', 'hair-scalp-nourishment', 'Clear Dose')]: 1000,

  // —— Women's Hair ——
  [itemKey('female-hair', 'haircut', 'Haircut by Shubham (Style Director)')]: 1800,
  [itemKey('female-hair', 'haircut', 'Haircut by Expert with Wash')]: 900,
  [itemKey('female-hair', 'haircut', 'Haircut by Expert without Wash')]: 700,
  [itemKey('female-hair', 'haircut', 'Kids (0-7)')]: 600,

  [itemKey('female-hair', 'fringe', 'Fringe')]: 300,

  [itemKey('female-hair', 'wash-styling', 'Hairwash & Paddle Dry')]: 400,
  [itemKey('female-hair', 'wash-styling', 'Blowdry (In-turn, Out-turn, Straight)')]: 400,
  [itemKey('female-hair', 'wash-styling', 'Blow Dry with Shampoo & Conditioner')]: 700,
  [itemKey('female-hair', 'wash-styling', 'Ironing')]: 700,
  [itemKey('female-hair', 'wash-styling', 'Crimping')]: 1200,
  [itemKey('female-hair', 'wash-styling', 'Iron Tong')]: 700,
  [itemKey('female-hair', 'wash-styling', 'Tong')]: 700,

  [itemKey('female-hair', 'hair-color', 'Ammonia-Free Touch Up')]: 1600,
  [itemKey('female-hair', 'hair-color', 'Touch Up')]: 1400,
  [itemKey('female-hair', 'hair-color', 'Ammonia-Free Global Color')]: 4500,
  [itemKey('female-hair', 'hair-color', 'Global Color')]: 4000,
  [itemKey('female-hair', 'hair-color', 'Hi-Lights & Babylight')]: 5000,
  [itemKey('female-hair', 'hair-color', 'Balayage & Ombre')]: 6000,
  [itemKey('female-hair', 'hair-color', 'Per Streaks')]: 500,
  [itemKey('female-hair', 'hair-color', 'Crazy Color')]: 700,

  [itemKey('female-hair', 'texture-services', 'Cysteine Treatment')]: 6000,
  [itemKey('female-hair', 'texture-services', 'Hair Restoration')]: 6500,

  [itemKey('female-hair', 'hair-scalp-nourishment', 'Hairspa Loreal')]: 1400,
  [itemKey('female-hair', 'hair-scalp-nourishment', 'Hairspa Schwarzkopf')]: 1800,
  [itemKey('female-hair', 'hair-scalp-nourishment', 'Hairspa Naturica')]: 2500,
  [itemKey('female-hair', 'hair-scalp-nourishment', 'Head Massage (20Mins)')]: 600,
  [itemKey('female-hair', 'hair-scalp-nourishment', 'Head Massage with Wash')]: 900,
  [itemKey('female-hair', 'hair-scalp-nourishment', 'Clear Dose')]: 1000,

  // —— Waxing ——
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Upper Lip')]: 130,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Chin')]: 130,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Face')]: 450,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Side Lock')]: 200,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Under Arms')]: 250,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Full Arms')]: 500,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Half Arms')]: 400,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Full Legs')]: 850,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Half Legs')]: 550,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Full Back')]: 650,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Half Back')]: 450,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Full Front')]: 650,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Half Front')]: 450,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Stomach')]: 500,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Behind')]: 700,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Bikini Line')]: 800,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Buttocks')]: 900,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Brazilian')]: 2200,
  [itemKey('beauty-services', 'waxing', 'Rica Wax — Full Body')]: 3000,

  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Upper Lip')]: 100,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Chin')]: 100,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Face')]: 400,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Jawline')]: 150,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Side Lock')]: 170,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Under Arms')]: 160,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Full Arms')]: 450,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Half Arms')]: 350,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Full Legs')]: 650,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Half Legs')]: 500,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Full Back')]: 500,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Half Back')]: 400,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Full Front')]: 550,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Half Front')]: 400,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Stomach')]: 320,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Behind')]: 500,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Buttocks')]: 700,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Bikini Line')]: 600,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Brazilian')]: 1500,
  [itemKey('beauty-services', 'waxing', 'Reg. Wax — Full Body')]: 2000,

  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Under Arms')]: 300,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Full Arms')]: 650,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Half Arms')]: 500,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Full Legs')]: 1000,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Half Legs')]: 650,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Full Back')]: 700,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Half Back')]: 500,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Half Front')]: 500,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Full Front')]: 700,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Stomach')]: 550,
  [itemKey('beauty-services', 'waxing', 'Cartridge Wax — Full Body')]: 3300,

  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Upper Lip')]: 120,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Fore Head')]: 120,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Chin')]: 120,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Side Lock')]: 120,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Neck')]: 120,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Under Arms')]: 250,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Brazilian')]: 2500,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Ear')]: 200,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Nose')]: 150,
  [itemKey('beauty-services', 'waxing', 'Peeloff Wax — Full Face')]: 600,

  // —— Basic Skin Care ——
  [itemKey('beauty-services', 'basic-skin-care', 'Eyebrow')]: 100,
  [itemKey('beauty-services', 'basic-skin-care', 'Upper Lip')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Chin')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Forehead')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Jawline')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Face')]: 250,

  // —— Manicure ——
  [itemKey('beauty-services', 'manicure', 'Regular')]: 700,
  [itemKey('beauty-services', 'manicure', 'Wine')]: 950,
  [itemKey('beauty-services', 'manicure', 'Chocolate')]: 950,
  [itemKey('beauty-services', 'manicure', 'D-Tan')]: 1200,
  [itemKey('beauty-services', 'manicure', 'Candle Spa')]: 1500,
  [itemKey('beauty-services', 'manicure', 'Signature +')]: 1700,

  // —— Pedicure ——
  [itemKey('beauty-services', 'pedicure', 'Regular')]: 850,
  [itemKey('beauty-services', 'pedicure', 'Wine')]: 1200,
  [itemKey('beauty-services', 'pedicure', 'Chocolate')]: 1200,
  [itemKey('beauty-services', 'pedicure', 'D-Tan')]: 1500,
  [itemKey('beauty-services', 'pedicure', 'Candle Spa')]: 1700,
  [itemKey('beauty-services', 'pedicure', 'Signature +')]: 1900,
  [itemKey('beauty-services', 'pedicure', 'Heel Peel')]: 2000,

  // —— Hands & Feet ——
  [itemKey('beauty-services', 'hands-feet', 'Cut & File')]: 100,
  [itemKey('beauty-services', 'hands-feet', 'Cut File & Polish')]: 200,
  [itemKey('beauty-services', 'hands-feet', 'Nail Cut & File + Nail Polish (French)')]: 200,
  [itemKey('beauty-services', 'hands-feet', 'Reflexology')]: 1000,

  // —— Clean Up ——
  [itemKey(
    'beauty-services',
    'cleanup',
    'Matte Effect Fruit Cleansing for Combination to Oily Skin',
  )]: 1000,
  [itemKey('beauty-services', 'cleanup', 'Deep Cleansing for Acne Prone Skin')]: 1000,
  [itemKey('beauty-services', 'cleanup', 'Lotus Pearl Glow')]: 1400,
  [itemKey('beauty-services', 'cleanup', 'Hydra Cleanup')]: 1800,
  [itemKey('beauty-services', 'cleanup', 'O3+ Clean Up')]: 2000,
  [itemKey('beauty-services', 'cleanup', 'Janssen Clean Up')]: 2200,

  // —— Facial & Masks ——
  [itemKey('beauty-services', 'facial', 'Young Blush')]: 2300,
  [itemKey('beauty-services', 'facial', 'Age Defence')]: 2500,
  [itemKey('beauty-services', 'facial', 'Hydra Facial')]: 2500,
  [itemKey('beauty-services', 'facial', 'Pearl Glow')]: 2800,
  [itemKey('beauty-services', 'facial', 'Light & Bright')]: 2800,
  [itemKey('beauty-services', 'facial', 'Biolight (O3+)')]: 3200,
  [itemKey('beauty-services', 'facial', 'Janssen Facial')]: 4500,
  [itemKey('beauty-services', 'facial', 'Hydra + O3')]: 5500,
  [itemKey('beauty-services', 'facial', 'Hydra + Janssen')]: 6500,

  // —— De-Tan ——
  [itemKey('beauty-services', 'de-tan', 'O3+ — Face')]: 1000,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Face, Neck & Blouse Line')]: 1100,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Full Arms')]: 1100,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Half Arms')]: 700,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Full Back')]: 1200,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Half Back')]: 750,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Full Legs')]: 1450,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Half Legs')]: 900,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Under Arms')]: 400,
  [itemKey('beauty-services', 'de-tan', 'O3+ — Body')]: 4200,
  [itemKey('beauty-services', 'de-tan', 'Janssen — Face')]: 1200,
  [itemKey('beauty-services', 'de-tan', 'Janssen — Face, Neck & Blouse Line')]: 1500,
  [itemKey('beauty-services', 'de-tan', 'Janssen — Full Arms')]: 1400,
  [itemKey('beauty-services', 'de-tan', 'Janssen — Half Arms')]: 1000,
  [itemKey('beauty-services', 'de-tan', 'Janssen — Full Back')]: 1800,
  [itemKey('beauty-services', 'de-tan', 'Janssen — Under Arms')]: 700,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Face')]: 700,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Face, Neck & Blouse Line')]: 850,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Full Arms')]: 850,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Half Arms')]: 500,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Full Back')]: 900,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Half Back')]: 550,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Full Legs')]: 1000,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Half Legs')]: 700,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Under Arms')]: 300,
  [itemKey('beauty-services', 'de-tan', 'Raaga — Body')]: 3200,

  // —— Spa Services ——
  [itemKey('beauty-services', 'spa', 'Sparkling Back Exfoliation + Massage + Wrap')]: 1800,
  [itemKey('beauty-services', 'spa', 'Full Body Exfoliation + Massage + Wrap')]: 6000,
  [itemKey('beauty-services', 'spa', 'Full Body Exfoliation with Scrub Cream')]: 2100,
  [itemKey('beauty-services', 'spa', 'Full Body Exfoliation with Sugar Peel')]: 2800,
  [itemKey('beauty-services', 'spa', 'Sparkling Hands Exfoliation + Massage + Wrap')]: 1500,
  [itemKey('beauty-services', 'spa', 'Sparkling Legs Exfoliation + Massage + Wrap')]: 1700,

  // —— Massage ——
  [itemKey('beauty-services', 'massage', 'Back Massage (with Massage Balm / Essential Oil)')]: 850,
  [itemKey('beauty-services', 'massage', 'Body Massage')]: 2000,

  // —— Makeup (not on PDF rate card; kept from existing site) ——
  [itemKey('beauty-services', 'makeup', "Groom's Makeup")]: 5000,
  [itemKey('beauty-services', 'makeup', "Groom's Hairstyle")]: 2000,
  [itemKey('beauty-services', 'makeup', "Sider's Makeup")]: 3000,
  [itemKey('beauty-services', 'makeup', "Sider's Hairstyle")]: 1000,
  [itemKey('beauty-services', 'makeup', 'Saree Draping')]: 2000,
}

/** Lowest price in each subcategory (for category cards) */
const SUBCATEGORY_STARTING_PRICES: Record<string, number> = {
  'mens-hair::haircut': 200,
  'mens-hair::beard': 300,
  'mens-hair::hair-color': 500,
  'mens-hair::texture-services': 2000,
  'mens-hair::hair-scalp-nourishment': 400,

  'female-hair::haircut': 600,
  'female-hair::fringe': 300,
  'female-hair::wash-styling': 400,
  'female-hair::hair-color': 500,
  'female-hair::texture-services': 6000,
  'female-hair::hair-scalp-nourishment': 600,

  'beauty-services::waxing': 100,
  'beauty-services::basic-skin-care': 60,
  'beauty-services::manicure': 700,
  'beauty-services::pedicure': 850,
  'beauty-services::hands-feet': 100,
  'beauty-services::cleanup': 1000,
  'beauty-services::facial': 2300,
  'beauty-services::de-tan': 300,
  'beauty-services::spa': 1500,
  'beauty-services::massage': 850,
  'beauty-services::makeup': 1000,
}

export function shouldShowPricing(_categoryId: string, _subcategoryId: string): boolean {
  return true
}

export function getItemPrice(
  categoryId: string,
  subcategoryId: string,
  itemName: string,
): number | null {
  if (!shouldShowPricing(categoryId, subcategoryId)) return null
  const exact = ITEM_PRICES[itemKey(categoryId, subcategoryId, itemName)]
  if (exact != null) return exact
  return SUBCATEGORY_STARTING_PRICES[subKey(categoryId, subcategoryId)] ?? null
}

export function formatItemPrice(
  categoryId: string,
  subcategoryId: string,
  itemName: string,
): string | null {
  const price = getItemPrice(categoryId, subcategoryId, itemName)
  if (price == null) return null
  if (ITEM_PRICES[itemKey(categoryId, subcategoryId, itemName)] != null) {
    return formatPrice(price)
  }
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
