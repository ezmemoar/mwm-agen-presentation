import { photos } from './images'

export interface BentoItem {
  type: 'photo' | 'note'
  /** Tailwind grid-span classes, e.g. `col-span-2 row-span-2`. */
  span: string
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
    span: 'col-span-2 row-span-2',
    src: photos.pilgrimsWide,
    alt: 'Jemaah di Masjidil Haram, Makkah',
    caption: 'Jemaah di pelataran Masjidil Haram',
  },
  {
    type: 'photo',
    span: 'col-span-1 row-span-2',
    arch: true,
    src: photos.nabawiThumb,
    alt: 'Masjid Nabawi, Madinah',
  },
  {
    type: 'photo',
    span: 'col-span-1 row-span-1',
    src: photos.nabawiDome,
    alt: 'Kubah hijau Masjid Nabawi, Madinah',
  },
  {
    type: 'note',
    span: 'col-span-1 row-span-1',
    headline: '20.000+',
    body: 'momen ibadah terekam bersama jemaah',
  },
  {
    type: 'photo',
    span: 'col-span-2 row-span-1',
    src: photos.haramWide,
    alt: 'Suasana Masjidil Haram, Makkah',
  },
  {
    type: 'photo',
    span: 'col-span-1 row-span-1',
    src: photos.madinah,
    alt: 'Madinah, Arab Saudi',
  },
  {
    type: 'photo',
    span: 'col-span-1 row-span-1',
    src: photos.kaabaThumb,
    alt: 'Kakbah, Masjidil Haram',
  },
]
