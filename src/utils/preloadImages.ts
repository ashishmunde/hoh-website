import {
  ALL_GALLERY_IMAGES,
  BRANCHES,
  HERO_BANNER_IMAGE,
  HERO_BANNER_MOBILE_IMAGE,
  LOGO_IMAGE,
} from '@/utils/images'
import { SERVICE_COVERS } from '@/utils/serviceThumbnails'
import { WORK_GALLERY_CATEGORIES } from '@/utils/workGallery'

/** Unique image URLs needed for first paint / homepage (not full gallery). */
export function getCriticalSiteImageUrls(): string[] {
  const isMobile =
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  const urls = [
    LOGO_IMAGE,
    isMobile ? HERO_BANNER_MOBILE_IMAGE : HERO_BANNER_IMAGE,
    ...Object.values(BRANCHES),
    ...Object.values(SERVICE_COVERS),
    ...WORK_GALLERY_CATEGORIES.map((c) => c.thumbnail),
  ]
  return [...new Set(urls.filter(Boolean))]
}

/** @deprecated Prefer getCriticalSiteImageUrls for faster first load; kept for full warm cache if needed. */
export function getAllSiteImageUrls(): string[] {
  const urls = [
    ...getCriticalSiteImageUrls(),
    ...ALL_GALLERY_IMAGES,
  ]
  return [...new Set(urls.filter(Boolean))]
}

function loadOne(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

export interface PreloadProgress {
  loaded: number
  total: number
  percent: number
}

/**
 * Preload images with limited concurrency. Failed loads still count toward progress
 * so a missing asset cannot block the app indefinitely.
 */
export async function preloadImages(
  urls: string[],
  onProgress?: (progress: PreloadProgress) => void,
  concurrency = 8,
): Promise<void> {
  const total = urls.length
  if (total === 0) {
    onProgress?.({ loaded: 0, total: 0, percent: 100 })
    return
  }

  let loaded = 0
  let index = 0

  const report = () => {
    onProgress?.({
      loaded,
      total,
      percent: Math.round((loaded / total) * 100),
    })
  }

  report()

  const workers = Array.from({ length: Math.min(concurrency, total) }, async () => {
    while (index < total) {
      const current = index++
      await loadOne(urls[current]!)
      loaded++
      report()
    }
  })

  await Promise.all(workers)
}
