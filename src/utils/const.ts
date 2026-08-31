import { BRANCHES, HERO_BANNER_IMAGE, LOGO_IMAGE } from './images'

export { LOGO_IMAGE }
export const BANNER_IMAGE = HERO_BANNER_IMAGE

// Color Scheme
export const PRIMARY_COLOR = '#9c9994'
export const SECONDARY_COLOR = '#000000'
export const PRIMARY_HOVER = '#8a8782'
export const SECONDARY_HOVER = '#333333'

/** Main branch (Karve Nagar) — primary contact for site header/footer */
export const MAIN_CONTACT = {
  branchName: 'Karve Nagar',
  phone: '+91 8850327158',
  phoneTel: '+918850327158',
  email: 'reach.thehouseofhair@gmail.com',
  addressLines: [
    'Girija Shankar Vihar Society, Potnis Parisar',
    '86, Lane Number 6, opp. Durga Cafe',
    'Karvenagar, Pune, Maharashtra 411052',
  ],
  whatsappUrl: 'https://wa.me/918850327158',
  social: {
    instagram: 'https://www.instagram.com/thehouseofhairbyshubham',
    facebook: 'https://www.facebook.com/thehouseofhair/',
    youtube: 'https://www.youtube.com/@thehouseofhairbyshubham',
  },
} as const

export interface Branch {
  name: string
  thumbnail: string
  googleMapsLink: string
  bookingUrl: string
  address?: string
  phone?: string
  phoneTel?: string
}

export const BRANCHES_DATA: Branch[] = [
  {
    name: 'Karve Nagar',
    thumbnail: BRANCHES.KARVE_NAGAR,
    googleMapsLink: 'https://maps.app.goo.gl/hrMjwdfWugFgZUbz7',
    bookingUrl: 'https://dingg.app/booking/the-house-of-hair-unisex-salon-karve-nagar',
    address:
      'Girija Shankar Vihar Society, Potnis Parisar, 86, Lane Number 6, opp. Durga Cafe, Karvenagar, Pune, Maharashtra 411052',
    phone: '+91 8850327158',
    phoneTel: '+918850327158',
  },
  {
    name: 'Aundh',
    thumbnail: BRANCHES.AUNDH,
    googleMapsLink: 'https://maps.app.goo.gl/8AK5yxbbN5ReguDC7',
    bookingUrl: 'https://dingg.app/booking/the-house-of-hair-aundh',
    address:
      'Shop no 3, Chaitraban Society, C Wing, Sarja Rd, opp. to Croma mall, Goodwill Society, Sanewadi, Aundh, Pune, Maharashtra 411067',
    phone: '+91 8010546437',
    phoneTel: '+918010546437',
  },
  {
    name: 'Kothrud',
    thumbnail: BRANCHES.KOTHRUD,
    googleMapsLink: 'https://maps.app.goo.gl/WqdycwYLiZghRYqS8',
    bookingUrl: 'https://dingg.app/booking/the-house-of-hair-paud-road',
    address:
      'The House of Hair salon, Rokade Heights, Ideal Colony Metro Station, Mahaganesh Colony, Kothrud, Pune, Maharashtra 411038',
    phone: '+91 8263956805',
    phoneTel: '+918263956805',
  },
]
