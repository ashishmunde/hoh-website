import { BRANCHES } from './images'

export const LOGO_IMAGE = "https://thehouseofhair.in/wp-content/uploads/2020/01/cropped-house-hair-.png"
export const BANNER_IMAGE = "https://applesalon.in/wp-content/uploads/2024/04/hhh.jpg"

// Color Scheme
export const PRIMARY_COLOR = "#9c9994"
export const SECONDARY_COLOR = "#000000"
export const PRIMARY_HOVER = "#8a8782"
export const SECONDARY_HOVER = "#333333"

// Branch Information

export interface Branch {
  name: string
  thumbnail: string
  googleMapsLink: string
  address?: string
}

export const BRANCHES_DATA: Branch[] = [
  {
    name: 'Karve Nagar',
    thumbnail: BRANCHES.KARVE_NAGAR,
    googleMapsLink: 'https://www.google.com/maps/place/The+House+of+Hair+-+Best+Unisex+Salon+in+Karve+Nagar,+Pune/@18.4699278,73.8301434,15z/data=!4m6!3m5!1s0x3bc2bf774b8670c7:0x429a37e65ae0da6!8m2!3d18.4967942!4d73.8225172!16s%2Fg%2F11h_48105w?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Aundh',
    thumbnail: BRANCHES.AUNDH,
    googleMapsLink: 'https://www.google.com/maps/place/The+House+Of+Hair+-+Best+Unisex+Salon+in+Aundh/@18.5532629,73.8048951,17z/data=!3m2!4b1!5s0x3bc2bf3cba1809e9:0x3e64982012fdccfe!4m6!3m5!1s0x3bc2bf948b54d06f:0xc2780d7179fde94b!8m2!3d18.5532629!4d73.80747!16s%2Fg%2F11qkps48gx?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    name: 'Kothrud',
    thumbnail: BRANCHES.KOTHRUD,
    googleMapsLink: 'https://www.google.com/maps/place/The+House+of+Hair+-+Best+Unisex+Salon+in+Kothrud/@18.5082763,73.8197343,17z/data=!3m2!4b1!5s0x3bc2bf9438fdd68b:0x5e682bebbdc6957d!4m6!3m5!1s0x3bc2bf5d9fcb842d:0x996e1dee8070bab9!8m2!3d18.5082763!4d73.8223092!16s%2Fg%2F11y2klqqbw?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D',
  },
]