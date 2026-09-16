/** Format rupee amount for display */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}

function itemKey(
  categoryId: string,
  subcategoryId: string,
  itemName: string,
  groupName?: string,
): string {
  return groupName
    ? `${categoryId}::${subcategoryId}::${groupName}::${itemName}`
    : `${categoryId}::${subcategoryId}::${itemName}`
}

function subKey(categoryId: string, subcategoryId: string): string {
  return `${categoryId}::${subcategoryId}`
}

/**
 * Exact rates from the rate card, keyed by category::subcategory::[group::]item.
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

  [itemKey('female-hair', 'wash-styling', 'Hairwash & Paddle Dry (If oil is applied ₹100 extra)')]: 400,
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
  [itemKey('beauty-services', 'waxing', 'Upper Lip', 'Rica Wax')]: 130,
  [itemKey('beauty-services', 'waxing', 'Chin', 'Rica Wax')]: 130,
  [itemKey('beauty-services', 'waxing', 'Face', 'Rica Wax')]: 450,
  [itemKey('beauty-services', 'waxing', 'Side Lock', 'Rica Wax')]: 200,
  [itemKey('beauty-services', 'waxing', 'Under Arms', 'Rica Wax')]: 250,
  [itemKey('beauty-services', 'waxing', 'Full Arms', 'Rica Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Half Arms', 'Rica Wax')]: 400,
  [itemKey('beauty-services', 'waxing', 'Full Legs', 'Rica Wax')]: 850,
  [itemKey('beauty-services', 'waxing', 'Half Legs', 'Rica Wax')]: 550,
  [itemKey('beauty-services', 'waxing', 'Full Back', 'Rica Wax')]: 650,
  [itemKey('beauty-services', 'waxing', 'Half Back', 'Rica Wax')]: 450,
  [itemKey('beauty-services', 'waxing', 'Full Front', 'Rica Wax')]: 650,
  [itemKey('beauty-services', 'waxing', 'Half Front', 'Rica Wax')]: 450,
  [itemKey('beauty-services', 'waxing', 'Stomach', 'Rica Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Behind', 'Rica Wax')]: 700,
  [itemKey('beauty-services', 'waxing', 'Bikini Line', 'Rica Wax')]: 800,
  [itemKey('beauty-services', 'waxing', 'Buttocks', 'Rica Wax')]: 900,
  [itemKey('beauty-services', 'waxing', 'Brazilian', 'Rica Wax')]: 2200,
  [itemKey('beauty-services', 'waxing', 'Full Body', 'Rica Wax')]: 3000,

  [itemKey('beauty-services', 'waxing', 'Upper Lip', 'Reg. Wax')]: 100,
  [itemKey('beauty-services', 'waxing', 'Chin', 'Reg. Wax')]: 100,
  [itemKey('beauty-services', 'waxing', 'Face', 'Reg. Wax')]: 400,
  [itemKey('beauty-services', 'waxing', 'Jawline', 'Reg. Wax')]: 150,
  [itemKey('beauty-services', 'waxing', 'Side Lock', 'Reg. Wax')]: 170,
  [itemKey('beauty-services', 'waxing', 'Under Arms', 'Reg. Wax')]: 160,
  [itemKey('beauty-services', 'waxing', 'Full Arms', 'Reg. Wax')]: 450,
  [itemKey('beauty-services', 'waxing', 'Half Arms', 'Reg. Wax')]: 350,
  [itemKey('beauty-services', 'waxing', 'Full Legs', 'Reg. Wax')]: 650,
  [itemKey('beauty-services', 'waxing', 'Half Legs', 'Reg. Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Full Back', 'Reg. Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Half Back', 'Reg. Wax')]: 400,
  [itemKey('beauty-services', 'waxing', 'Full Front', 'Reg. Wax')]: 550,
  [itemKey('beauty-services', 'waxing', 'Half Front', 'Reg. Wax')]: 400,
  [itemKey('beauty-services', 'waxing', 'Stomach', 'Reg. Wax')]: 320,
  [itemKey('beauty-services', 'waxing', 'Behind', 'Reg. Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Buttocks', 'Reg. Wax')]: 700,
  [itemKey('beauty-services', 'waxing', 'Bikini Line', 'Reg. Wax')]: 600,
  [itemKey('beauty-services', 'waxing', 'Brazilian', 'Reg. Wax')]: 1500,
  [itemKey('beauty-services', 'waxing', 'Full Body', 'Reg. Wax')]: 2000,

  [itemKey('beauty-services', 'waxing', 'Under Arms', 'Cartridge Wax')]: 300,
  [itemKey('beauty-services', 'waxing', 'Full Arms', 'Cartridge Wax')]: 650,
  [itemKey('beauty-services', 'waxing', 'Half Arms', 'Cartridge Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Full Legs', 'Cartridge Wax')]: 1000,
  [itemKey('beauty-services', 'waxing', 'Half Legs', 'Cartridge Wax')]: 650,
  [itemKey('beauty-services', 'waxing', 'Full Back', 'Cartridge Wax')]: 700,
  [itemKey('beauty-services', 'waxing', 'Half Back', 'Cartridge Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Half Front', 'Cartridge Wax')]: 500,
  [itemKey('beauty-services', 'waxing', 'Full Front', 'Cartridge Wax')]: 700,
  [itemKey('beauty-services', 'waxing', 'Stomach', 'Cartridge Wax')]: 550,
  [itemKey('beauty-services', 'waxing', 'Full Body', 'Cartridge Wax')]: 3300,

  [itemKey('beauty-services', 'waxing', 'Upper Lip', 'Peeloff Wax')]: 120,
  [itemKey('beauty-services', 'waxing', 'Fore Head', 'Peeloff Wax')]: 120,
  [itemKey('beauty-services', 'waxing', 'Chin', 'Peeloff Wax')]: 120,
  [itemKey('beauty-services', 'waxing', 'Side Lock', 'Peeloff Wax')]: 120,
  [itemKey('beauty-services', 'waxing', 'Neck', 'Peeloff Wax')]: 120,
  [itemKey('beauty-services', 'waxing', 'Under Arms', 'Peeloff Wax')]: 250,
  [itemKey('beauty-services', 'waxing', 'Ear', 'Peeloff Wax')]: 200,
  [itemKey('beauty-services', 'waxing', 'Nose', 'Peeloff Wax')]: 150,
  [itemKey('beauty-services', 'waxing', 'Full Face', 'Peeloff Wax')]: 600,
  [itemKey('beauty-services', 'waxing', 'Brazilian', 'Peeloff Wax')]: 2500,

  // —— Basic Skin Care ——
  [itemKey('beauty-services', 'basic-skin-care', 'Upper Lip')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Chin')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Forehead')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Jawline')]: 60,
  [itemKey('beauty-services', 'basic-skin-care', 'Eyebrow')]: 100,
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
  [itemKey('beauty-services', 'de-tan', 'Face', 'O3+')]: 1000,
  [itemKey('beauty-services', 'de-tan', 'Face, Neck & Blouse Line', 'O3+')]: 1100,
  [itemKey('beauty-services', 'de-tan', 'Full Arms', 'O3+')]: 1100,
  [itemKey('beauty-services', 'de-tan', 'Half Arms', 'O3+')]: 700,
  [itemKey('beauty-services', 'de-tan', 'Full Back', 'O3+')]: 1200,
  [itemKey('beauty-services', 'de-tan', 'Half Back', 'O3+')]: 750,
  [itemKey('beauty-services', 'de-tan', 'Full Legs', 'O3+')]: 1450,
  [itemKey('beauty-services', 'de-tan', 'Half Legs', 'O3+')]: 900,
  [itemKey('beauty-services', 'de-tan', 'Under Arms', 'O3+')]: 400,
  [itemKey('beauty-services', 'de-tan', 'Body', 'O3+')]: 4200,
  [itemKey('beauty-services', 'de-tan', 'Face', 'Janssen')]: 1200,
  [itemKey('beauty-services', 'de-tan', 'Face, Neck & Blouse Line', 'Janssen')]: 1500,
  [itemKey('beauty-services', 'de-tan', 'Full Arms', 'Janssen')]: 1400,
  [itemKey('beauty-services', 'de-tan', 'Half Arms', 'Janssen')]: 1000,
  [itemKey('beauty-services', 'de-tan', 'Full Back', 'Janssen')]: 1800,
  [itemKey('beauty-services', 'de-tan', 'Under Arms', 'Janssen')]: 700,
  [itemKey('beauty-services', 'de-tan', 'Face', 'Raaga')]: 700,
  [itemKey('beauty-services', 'de-tan', 'Face, Neck & Blouse Line', 'Raaga')]: 850,
  [itemKey('beauty-services', 'de-tan', 'Full Arms', 'Raaga')]: 850,
  [itemKey('beauty-services', 'de-tan', 'Half Arms', 'Raaga')]: 500,
  [itemKey('beauty-services', 'de-tan', 'Full Back', 'Raaga')]: 900,
  [itemKey('beauty-services', 'de-tan', 'Half Back', 'Raaga')]: 550,
  [itemKey('beauty-services', 'de-tan', 'Full Legs', 'Raaga')]: 1000,
  [itemKey('beauty-services', 'de-tan', 'Half Legs', 'Raaga')]: 700,
  [itemKey('beauty-services', 'de-tan', 'Under Arms', 'Raaga')]: 300,
  [itemKey('beauty-services', 'de-tan', 'Body', 'Raaga')]: 3200,

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

/** Prices marked with * on the rate card */
const STARRED_KEYS = new Set([
  itemKey('mens-hair', 'hair-color', 'Global Color'),
  itemKey('mens-hair', 'hair-color', 'Ammonia Free Global Color'),
  itemKey('mens-hair', 'hair-color', 'Hi-Lights'),
  itemKey('mens-hair', 'hair-color', 'Crazy Color (Blue, Green, Ash)'),
  itemKey('mens-hair', 'hair-color', 'Beard Color'),
  itemKey('mens-hair', 'texture-services', 'Cysteine'),
  itemKey('mens-hair', 'texture-services', 'Hair Restoration'),
  itemKey('mens-hair', 'hair-scalp-nourishment', 'Hairspa Loreal'),
  itemKey('mens-hair', 'hair-scalp-nourishment', 'Hairspa Schwarzkopf'),

  itemKey('female-hair', 'wash-styling', 'Blowdry (In-turn, Out-turn, Straight)'),
  itemKey('female-hair', 'wash-styling', 'Blow Dry with Shampoo & Conditioner'),
  itemKey('female-hair', 'wash-styling', 'Ironing'),
  itemKey('female-hair', 'wash-styling', 'Crimping'),
  itemKey('female-hair', 'wash-styling', 'Iron Tong'),
  itemKey('female-hair', 'wash-styling', 'Tong'),
  itemKey('female-hair', 'hair-color', 'Ammonia-Free Touch Up'),
  itemKey('female-hair', 'hair-color', 'Touch Up'),
  itemKey('female-hair', 'hair-color', 'Ammonia-Free Global Color'),
  itemKey('female-hair', 'hair-color', 'Global Color'),
  itemKey('female-hair', 'hair-color', 'Hi-Lights & Babylight'),
  itemKey('female-hair', 'hair-color', 'Balayage & Ombre'),
  itemKey('female-hair', 'hair-color', 'Per Streaks'),
  itemKey('female-hair', 'hair-color', 'Crazy Color'),
  itemKey('female-hair', 'texture-services', 'Cysteine Treatment'),
  itemKey('female-hair', 'texture-services', 'Hair Restoration'),
  itemKey('female-hair', 'hair-scalp-nourishment', 'Hairspa Loreal'),
  itemKey('female-hair', 'hair-scalp-nourishment', 'Hairspa Schwarzkopf'),
  itemKey('female-hair', 'hair-scalp-nourishment', 'Hairspa Naturica'),
  itemKey('female-hair', 'hair-scalp-nourishment', 'Head Massage (20Mins)'),
  itemKey('female-hair', 'hair-scalp-nourishment', 'Head Massage with Wash'),
])

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
  groupName?: string,
): number | null {
  if (!shouldShowPricing(categoryId, subcategoryId)) return null
  const exact = ITEM_PRICES[itemKey(categoryId, subcategoryId, itemName, groupName)]
  if (exact != null) return exact
  return SUBCATEGORY_STARTING_PRICES[subKey(categoryId, subcategoryId)] ?? null
}

export function formatItemPrice(
  categoryId: string,
  subcategoryId: string,
  itemName: string,
  groupName?: string,
): string | null {
  const key = itemKey(categoryId, subcategoryId, itemName, groupName)
  const price = getItemPrice(categoryId, subcategoryId, itemName, groupName)
  if (price == null) return null
  const star = STARRED_KEYS.has(key) ? '*' : ''
  if (ITEM_PRICES[key] != null) {
    return `${formatPrice(price)}${star}`
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
