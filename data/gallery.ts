export interface BentoItem {
  type: 'photo' | 'note'
  /** `feature` is the tall image on the left; `square` are the four stacked tiles. */
  tile: 'feature' | 'square'
  /** Cut the tile to the deck's arch. Reserved for the tall portrait tiles. */
  arch?: boolean
  src?: string
  alt?: string
  caption?: string
  headline?: string
  body?: string
}

export const galleryItems: BentoItem[] = [
  {
    type: 'photo',
    tile: 'feature',
    src: '/images/dokumentasi/dokumentasi-1.png',
    alt: 'Jemaah di Masjidil Haram, Makkah',
    caption: 'Jemaah di pelataran Masjidil Haram',
  },
  {
    type: 'photo',
    tile: 'square',
    src: '/images/dokumentasi/dokumentasi-2.jpg',
    alt: 'Masjid Nabawi, Madinah',
  },
  {
    type: 'photo',
    tile: 'square',
    src: '/images/dokumentasi/dokumentasi-3.png',
    alt: 'Kubah hijau Masjid Nabawi, Madinah',
  },
  {
    type: 'photo',
    tile: 'square',
    src: '/images/dokumentasi/dokumentasi-4.jpg',
    alt: 'Suasana Masjidil Haram, Makkah',
  },
  {
    type: 'photo',
    tile: 'square',
    src: '/images/dokumentasi/dokumentasi-5.jpg',
    alt: 'Madinah, Arab Saudi',
  },
]
