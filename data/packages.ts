import { brochures } from './images'

export interface PackageFeature {
  /** UnoCSS icon class, e.g. `i-heroicons-paper-airplane`. */
  icon: string
  text: string
}

export interface PackageUpgrade {
  label: string
  price: string
}

/** One cell of the four-up spec strip every package slide renders. */
export interface PackageSpec {
  icon: string
  label: string
  value: string
  note: string
}

/**
 * Every package answers the same questions in the same order — duration,
 * airline, both hotels, price, dates, what is included — so a reader comparing
 * three slides is always looking at the same fact in the same place.
 */
export interface UmrohPackage {
  id: string
  badge: string
  title: string
  /** One line under the title: what makes this the package to pick. */
  lead: string
  price: string
  duration: string
  airline: { name: string, icon: string, note: string }
  hotelMakkah: { name: string, grade: string }
  hotelMadinah: { name: string, grade: string }
  brochure: string
  brochureAlt: string
  /** Empty when dates are not yet published. */
  departures: string[]
  includes: PackageFeature[]
  upgrades?: PackageUpgrade[]
}

export const priceDisclaimer
  = '*Harga sewaktu-waktu dapat berubah mengikuti kebijakan maskapai, pemerintah Indonesia, dan Kerajaan Arab Saudi.'

export const packages: UmrohPackage[] = [
  {
    id: 'barokah-9',
    badge: 'Paket 01',
    title: 'Umroh Barokah 9 Hari',
    lead: 'Penerbangan langsung Garuda Indonesia — sembilan hari penuh untuk beribadah.',
    price: 'Rp27,5 Juta',
    duration: '9 Hari',
    airline: { name: 'Garuda Indonesia', icon: 'i-heroicons-paper-airplane', note: 'Direct flight' },
    hotelMakkah: { name: 'Jada Ajyad', grade: 'Setaraf bintang 3' },
    hotelMadinah: { name: 'Manazel Al Falah', grade: 'Setaraf bintang 4' },
    brochure: brochures.barokah9,
    brochureAlt: 'Brosur Umroh Barokah 9 Hari',
    departures: ['27 Sep 2026', '14 Okt 2026', '17 Nov 2026'],
    includes: [
      { icon: 'i-heroicons-gift', text: 'Bonus koper kabin senilai Rp400.000' },
    ],
  },
  {
    id: 'umroh-13',
    badge: 'Paket 02',
    title: 'Umroh 13 Hari',
    lead: 'Waktu terlama di Tanah Suci, dengan harga paling terjangkau.',
    price: 'Rp25,8 Juta',
    duration: '13 Hari',
    airline: { name: 'Ethiopian Airlines', icon: 'i-simple-icons-ethiopianairlines', note: 'Transit flight' },
    hotelMakkah: { name: 'Fajar Badea 4', grade: 'Setaraf bintang 3' },
    hotelMadinah: { name: 'Manazel Al Falah', grade: 'Setaraf bintang 4' },
    brochure: brochures.umroh13,
    brochureAlt: 'Brosur Umroh 13 Hari',
    departures: [],
    includes: [
      { icon: 'i-heroicons-cake', text: 'Makan 4x dari maskapai (PP)' },
      { icon: 'i-heroicons-building-library', text: '2x Sholat Jumat — Haram & Nabawi' },
      { icon: 'i-heroicons-map-pin', text: '3x Miqat — Bir Ali, Ji\'ranah, Aisyah' },
      { icon: 'i-heroicons-globe-alt', text: 'Kunjungan Jabal Khandamah' },
      { icon: 'i-heroicons-sparkles', text: 'Free Al-Baik' },
    ],
    upgrades: [
      { label: 'Upgrade Hotel Makkah ke Jada Ajyad', price: 'Rp26,8 Juta' },
      { label: 'Tambahan kereta gantung & kereta cepat', price: '+Rp2 Juta' },
    ],
  },
  {
    id: 'barokah-9-waris',
    badge: 'Paket 03',
    title: 'Umroh Barokah 9 Hari',
    lead: 'Sembilan hari beribadah sekaligus mendalami ilmu waris bersama pakarnya.',
    price: 'Rp31,9 Juta',
    duration: '9 Hari',
    airline: { name: 'Lion Air', icon: 'i-simple-icons-lionair', note: 'Direct flight' },
    hotelMakkah: { name: 'Jada Ajyad', grade: 'Setaraf bintang 3' },
    hotelMadinah: { name: 'Manazel Al Falah', grade: 'Setaraf bintang 4' },
    brochure: brochures.barokah9Waris,
    brochureAlt: 'Brosur Umroh Barokah 9 Hari bersama Pakar Ilmu Waris',
    departures: ['26 Des 2026'],
    includes: [
      { icon: 'i-heroicons-book-open', text: 'Kajian Ilmu Waris bersama Ustadz Dr. Marullah Marzuq, M.Ag., LLM, Hafidzahullah' },
    ],
  },
]

/** The same four facts, in the same order, on every package slide. */
export function packageSpecs(pkg: UmrohPackage): PackageSpec[] {
  return [
    { icon: 'i-heroicons-calendar-days', label: 'Durasi', value: pkg.duration, note: 'Pulang pergi' },
    { icon: pkg.airline.icon, label: 'Maskapai', value: pkg.airline.name, note: pkg.airline.note },
    { icon: 'i-heroicons-building-library', label: 'Hotel Makkah', value: pkg.hotelMakkah.name, note: pkg.hotelMakkah.grade },
    { icon: 'i-heroicons-building-office-2', label: 'Hotel Madinah', value: pkg.hotelMadinah.name, note: pkg.hotelMadinah.grade },
  ]
}

export function findPackage(id: string): UmrohPackage {
  const found = packages.find(pkg => pkg.id === id)
  if (!found)
    throw new Error(`Unknown package: ${id}`)

  return found
}
