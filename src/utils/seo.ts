import { HERO_BANNER_IMAGE, LOGO_IMAGE } from '@/utils/images'
import { MAIN_CONTACT } from '@/utils/const'

/** Site-wide SEO and local search configuration */

export const SITE_URL = 'https://thehouseofhair.in'
export const SITE_NAME = 'The House of Hair'
export const SITE_TAGLINE = 'Best Unisex Salon & Celebrity Hairstylist in Pune'
export const OG_IMAGE = HERO_BANNER_IMAGE

/** Public social profiles for Organization sameAs */
export const SOCIAL_PROFILES = [
  MAIN_CONTACT.social.instagram,
  MAIN_CONTACT.social.facebook,
  MAIN_CONTACT.social.youtube,
] as const

/**
 * Opening hours for local schema (update if salon hours change).
 * Format: 24h HH:MM
 */
export const OPENING_HOURS = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '10:00',
  closes: '20:00',
} as const

export const CONTACT_EMAIL = MAIN_CONTACT.email
export const CONTACT_PHONE = MAIN_CONTACT.phoneTel

/** Primary local keywords for Pune salon discovery */
export const SEO_KEYWORDS = [
  // Near-me / intent
  'hairstylist near me',
  'hair salon near me',
  'salon near me',
  'unisex salon near me',
  'best salon near me',
  'hair cutting near me',
  'hair colour near me',
  'makeup artist near me',
  // Brand / celebrity
  'celebrity stylist',
  'celebrity hairstylist',
  'celebrity hair stylist Pune',
  'The House of Hair',
  'House of Hair Pune',
  // City
  'salon in Pune',
  'best salon in Pune',
  'unisex salon in Pune',
  'hairstylist in Pune',
  'hair salon Pune',
  'best hair salon Pune',
  // Locations
  'salon in Kothrud',
  'salons in Kothrud',
  'best salon in Kothrud',
  'hair salon Kothrud',
  'hairstylist Kothrud',
  'unisex salon Kothrud',
  'salon in Aundh',
  'salons in Aundh',
  'best salon in Aundh',
  'hair salon Aundh',
  'hairstylist Aundh',
  'unisex salon Aundh',
  'salon in Karve Nagar',
  'salons in Karve Nagar',
  'hair salon Karve Nagar',
  'salon Paud Road',
  // Services
  'balayage Pune',
  'hair highlights Pune',
  'global hair colour Pune',
  'hair treatment Pune',
  'mens haircut Pune',
  'ladies haircut Pune',
  'groom makeup Pune',
  'makeup and hairstyle Pune',
  'bridal makeup Pune',
  'hair spa Pune',
  'facial salon Pune',
].join(', ')

export const DEFAULT_DESCRIPTION =
  'The House of Hair — celebrity hairstylist & best unisex salon in Pune with branches in Karve Nagar, Kothrud (Paud Road) and Aundh. Haircuts, colour, balayage, treatments, beauty & makeup. Book your stylist near you today.'

export interface PageSeo {
  title: string
  description: string
  path: string
  keywords?: string
}

export const PAGE_SEO: Record<string, PageSeo> = {
  home: {
    title: 'The House of Hair | Best Unisex Salon & Celebrity Hairstylist in Pune',
    description: DEFAULT_DESCRIPTION,
    path: '/home',
    keywords: SEO_KEYWORDS,
  },
  services: {
    title: 'Salon Services in Pune | Hair, Beauty & Makeup | The House of Hair',
    description:
      'Explore hair services, beauty treatments and makeup at The House of Hair — unisex salon in Karve Nagar, Kothrud & Aundh, Pune. Haircuts, colour, balayage, facial, waxing & more.',
    path: '/services',
    keywords: SEO_KEYWORDS,
  },
  gallery: {
    title: 'Hair Salon Gallery Pune | Balayage, Highlights & Styles | The House of Hair',
    description:
      'See real client results from The House of Hair Pune — balayage, highlights, haircuts, colour and makeup and hairstyle by our celebrity stylists.',
    path: '/gallery',
    keywords: SEO_KEYWORDS,
  },
  about: {
    title: 'About The House of Hair | Celebrity Hairstylist Salon in Pune',
    description:
      'Meet The House of Hair — a premium unisex salon and celebrity hairstylist destination in Pune with salons in Karve Nagar, Kothrud and Aundh.',
    path: '/about',
    keywords: SEO_KEYWORDS,
  },
  contact: {
    title: 'Contact The House of Hair | Book Salon Appointment in Pune',
    description:
      'Contact The House of Hair — book hair, beauty & makeup appointments at our Karve Nagar, Kothrud or Aundh branches in Pune.',
    path: '/contact',
    keywords: SEO_KEYWORDS,
  },
}

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p}`
}

function upsertMeta(
  attr: 'name' | 'property',
  key: string,
  content: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Apply document title + meta tags for the current page */
export function applyPageSeo(seo: PageSeo) {
  const title = seo.title
  const description = seo.description
  const url = absoluteUrl(seo.path)
  const keywords = seo.keywords ?? SEO_KEYWORDS
  const image = OG_IMAGE


  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('name', 'keywords', keywords)
  upsertMeta('name', 'author', SITE_NAME)
  upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
  upsertMeta('name', 'googlebot', 'index, follow')
  upsertMeta('name', 'geo.region', 'IN-MH')
  upsertMeta('name', 'geo.placename', 'Pune')
  upsertMeta('name', 'geo.position', '18.4967942;73.8225172')
  upsertMeta('name', 'ICBM', '18.4967942, 73.8225172')

  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:locale', 'en_IN')
  upsertMeta('property', 'og:image', image)

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', image)

  upsertLink('canonical', url)
}

export interface LocalBusinessBranch {
  name: string
  streetAddress: string
  addressLocality: string
  postalCode: string
  telephone: string
  latitude: number
  longitude: number
  url: string
  image?: string
}

/** JSON-LD for Google local / Maps rich results */
export function buildLocalBusinessJsonLd(branches: LocalBusinessBranch[]) {
  const main = branches[0]
  const openingHoursSpecification = OPENING_HOURS.days.map((day) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day,
    opens: OPENING_HOURS.opens,
    closes: OPENING_HOURS.closes,
  }))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: LOGO_IMAGE,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        sameAs: [...SOCIAL_PROFILES],
        description: DEFAULT_DESCRIPTION,
      },
      {
        '@type': 'HairSalon',
        '@id': `${SITE_URL}/#salon`,
        name: SITE_NAME,
        alternateName: ['House of Hair', 'HOH Salon Pune', 'The House of Hair Pune'],
        url: SITE_URL,
        image: [OG_IMAGE, LOGO_IMAGE],
        telephone: main?.telephone ?? CONTACT_PHONE,
        email: CONTACT_EMAIL,
        priceRange: '₹₹',
        openingHoursSpecification,
        address: main
          ? {
              '@type': 'PostalAddress',
              streetAddress: main.streetAddress,
              addressLocality: main.addressLocality,
              addressRegion: 'Maharashtra',
              postalCode: main.postalCode,
              addressCountry: 'IN',
            }
          : undefined,
        geo: main
          ? {
              '@type': 'GeoCoordinates',
              latitude: main.latitude,
              longitude: main.longitude,
            }
          : undefined,
        areaServed: [
          { '@type': 'City', name: 'Pune' },
          { '@type': 'Place', name: 'Karve Nagar' },
          { '@type': 'Place', name: 'Kothrud' },
          { '@type': 'Place', name: 'Aundh' },
          { '@type': 'Place', name: 'Paud Road' },
        ],
        knowsAbout: [
          'Celebrity hairstyling',
          'Unisex hair salon',
          'Balayage',
          'Hair colour',
          'Haircut',
          'Hair treatment',
          'Makeup and Hairstyle',
          'Beauty services',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Salon services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Haircut' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Colour' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balayage' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hair Treatment' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Beauty Services' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Makeup and Hairstyle' } },
          ],
        },
        department: branches.map((b, i) => ({
          '@type': 'HairSalon',
          '@id': `${SITE_URL}/#branch-${i}`,
          name: `${SITE_NAME} — ${b.name}`,
          telephone: b.telephone,
          url: b.url,
          image: b.image,
          email: CONTACT_EMAIL,
          openingHoursSpecification,
          address: {
            '@type': 'PostalAddress',
            streetAddress: b.streetAddress,
            addressLocality: b.addressLocality,
            addressRegion: 'Maharashtra',
            postalCode: b.postalCode,
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: b.latitude,
            longitude: b.longitude,
          },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
    ],
  }
}

export function injectJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}
