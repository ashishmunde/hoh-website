// Local images (active)
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? "/hoh"

// AWS S3 (disabled — uncomment to restore if account is recovered)
// const S3_BASE_URL = "https://house-of-hair.s3.ap-south-1.amazonaws.com"
// const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? S3_BASE_URL
// Full S3 route list: ./images.s3.backup.ts

// Balayage Images
export const BALAYAGE_IMAGES = [
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_105924_781.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_105934_035.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_110144_793.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_110227_364.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_110232_572.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_110351_850.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_110454_214.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_112639_231.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_114941_299.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_124313_412.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_124551_099.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_124642_569.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_124659_796.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_124712_731.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_124719_425.jpg`,
  `${IMAGE_BASE_URL}/Balayage/IMG_20250801_124815_670.jpg`,
  `${IMAGE_BASE_URL}/Balayage/photo_2025-08-01_13-02-45.jpg`,
  `${IMAGE_BASE_URL}/Balayage/photo_2025-08-01_13-03-17.jpg`,
]

// Female Haircut Images
export const FEMALE_HAIRCUT_IMAGES = [
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_110326_349.jpg`,
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_114048_613.jpg`,
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_114048_690.jpg`,
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_114049_068.jpg`,
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_114049_282.jpg`,
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_115858_382.jpg`,
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_115858_875.jpg`,
  `${IMAGE_BASE_URL}/Female haircut/IMG_20250801_124911_471.jpg`,
]

// Global Images
export const GLOBAL_IMAGES = [
  `${IMAGE_BASE_URL}/Global/IMG_20250801_115909_884.jpg`,
  `${IMAGE_BASE_URL}/Global/IMG_20250801_120010_383.jpg`,
  `${IMAGE_BASE_URL}/Global/IMG_20250801_124511_233.jpg`,
  `${IMAGE_BASE_URL}/Global/IMG_20250801_124519_694.jpg`,
  `${IMAGE_BASE_URL}/Global/IMG_20250801_124523_531.jpg`,
]

// Hair Treatment Images
export const HAIR_TREATMENT_IMAGES = [
  `${IMAGE_BASE_URL}/Hair Treatment/IMG_20250801_112014_936.jpg`,
  `${IMAGE_BASE_URL}/Hair Treatment/IMG_20250801_113152_515.jpg`,
  `${IMAGE_BASE_URL}/Hair Treatment/photo_2025-08-01_12-56-14.jpg`,
  `${IMAGE_BASE_URL}/Hair Treatment/photo_2025-08-01_12-56-22.jpg`,
]

// Highlights Images
export const HIGHLIGHTS_IMAGES = [
  `${IMAGE_BASE_URL}/Highlights/IMG_20250717_133225_527.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_105020_493.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_105056_524.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_105113_867.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_110002_187.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_110006_922.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_110020_301.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_110307_858.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_113455_565.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114025_372.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114034_683.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114110_867.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114205_718.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114218_042.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114646_712.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114653_976.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114716_516.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114727_720.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114754_108.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_114853_703.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115104_980.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115113_997.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115303_800.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115307_981.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115322_123.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115356_135.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115410_825.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115526_107.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115526_249.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115734_666.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115738_745.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115758_185.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115803_676.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_115957_006.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_124412_816.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_124444_519.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_124743_265.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_124931_022.jpg`,
  `${IMAGE_BASE_URL}/Highlights/IMG_20250801_125009_547.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_12-53-51.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_12-55-40.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_12-57-04.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_12-57-20.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_12-57-44.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_12-57-55.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_12-58-59.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_13-00-05.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_13-00-30.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_13-02-23.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_13-04-01.jpg`,
  `${IMAGE_BASE_URL}/Highlights/photo_2025-08-01_13-04-08.jpg`,
]

// Homepage Images
export const HOMEPAGE_IMAGES = [
  `${IMAGE_BASE_URL}/Home Page Photos/Balayage.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/Global 1.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/Highlighjts 1.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/Highlighjts.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_105048_374.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_105117_855.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_110227_364.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_112650_002.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_113045_697.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_113455_565.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_113512_330.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_114100_209.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115104_980.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115307_981.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115335_659.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115352_925.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115520_441.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115605_344.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115758_185.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_115923_351.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124444_519.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124523_531.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124642_569.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124659_796.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124712_731.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124719_425.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124749_842.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124805_338.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/IMG_20250801_124931_022.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/balayage 1.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/balayage 2.jpg`,
  `${IMAGE_BASE_URL}/Home Page Photos/balayage 3.jpg`,
]

// Men's Haircut Images
export const MENS_HAIRCUT_IMAGES = [
  `${IMAGE_BASE_URL}/Men_s Haircut/photo_2025-08-01_12-56-05.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/IMG_20250801_112241_918.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/IMG_20250801_112254_546.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/IMG_20250801_112711_207.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/IMG_20250801_114449_073.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/IMG_20250801_114748_901.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/IMG_20250801_115010_685.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/IMG_20250801_115339_000.jpg`,

  `${IMAGE_BASE_URL}/Men_s Haircut/photo_2025-08-01_12-58-17.jpg`,
  `${IMAGE_BASE_URL}/Men_s Haircut/photo_2025-08-01_13-01-01.jpg`,
]

// Make-up and Hairstyle Images
export const MAKEUP_AND_HAIRSTYLE_IMAGES = [
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0507(1).JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0507.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0508(1).JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0508.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0510(1).JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0510.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0512(1).JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0512.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0518(1).JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0518.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0519(1).JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0519.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0521.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0528.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0530(1).JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/VK5_0530.JPG`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-29.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-31.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-34.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-35.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-37.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-42.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-43.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-44.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-46.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-48.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-49.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-58.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-54-59.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-55-00.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-55-01.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-55-02.jpg`,
  `${IMAGE_BASE_URL}/Makeup & Hairstyle/photo_2025-08-01_12-55-03.jpg`,
]

// All Gallery Images (combined for gallery page)
export const ALL_GALLERY_IMAGES = [
  ...BALAYAGE_IMAGES,
  ...FEMALE_HAIRCUT_IMAGES,
  ...GLOBAL_IMAGES,
  ...HAIR_TREATMENT_IMAGES,
  ...HIGHLIGHTS_IMAGES,
  ...HOMEPAGE_IMAGES,
  ...MENS_HAIRCUT_IMAGES,
  ...MAKEUP_AND_HAIRSTYLE_IMAGES,
]

// Organized by category for easy access
export const GALLERY_IMAGES_BY_CATEGORY = {
  balayage: BALAYAGE_IMAGES,
  femaleHaircut: FEMALE_HAIRCUT_IMAGES,
  global: GLOBAL_IMAGES,
  hairTreatment: HAIR_TREATMENT_IMAGES,
  highlights: HIGHLIGHTS_IMAGES,
  homepage: HOMEPAGE_IMAGES,
  mensHaircut: MENS_HAIRCUT_IMAGES,
  makeupAndHairstyle: MAKEUP_AND_HAIRSTYLE_IMAGES,
}

export const BRANCHES = {
  AUNDH: `${IMAGE_BASE_URL}/Branches/Aundh.webp`,
  KARVE_NAGAR: `${IMAGE_BASE_URL}/Branches/KarveNagar.jpg`,
  KOTHRUD: `${IMAGE_BASE_URL}/Branches/Kothrud.webp`,
  // S3: AUNDH: "https://house-of-hair.s3.ap-south-1.amazonaws.com/branches/Aundh.webp",
  // S3: KARVE_NAGAR: "https://house-of-hair.s3.ap-south-1.amazonaws.com/branches/KarveNagar.jpg",
  // S3: KOTHRUD: "https://house-of-hair.s3.ap-south-1.amazonaws.com/branches/Kothrud.webp",
}