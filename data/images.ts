/**
 * Every remote asset the deck references, in one place — swap a URL here and it
 * updates on every slide that uses it.
 */
export const brandLogo
  = 'https://bb71d2eac085c69b0.nos.wjv-1.neo.id/1710408602-478630/17708782534377-MJIzTJueE1.png'

export const photos = {
  /** Cover: the whole Haram seen from above, Kakbah at its centre. */
  kaabaAerial: 'https://images.unsplash.com/photo-1720482229376-d5574ffeb0c8?auto=format&fit=crop&w=2000&q=80',
  kaabaCrowd: 'https://images.unsplash.com/photo-1605553378313-22d0dc541393?auto=format&fit=crop&w=1800&q=80',
  kaabaNight: 'https://images.unsplash.com/photo-1771170983433-1576bc4a7eec?auto=format&fit=crop&w=1800&q=80',
  kaaba: 'https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?auto=format&fit=crop&w=1200&q=80',
  kaabaThumb: 'https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?auto=format&fit=crop&w=700&q=80',
  nabawi: 'https://images.unsplash.com/photo-1523151164408-6540213bd2c8?auto=format&fit=crop&w=1800&q=80',
  nabawiThumb: 'https://images.unsplash.com/photo-1523151164408-6540213bd2c8?auto=format&fit=crop&w=700&q=80',
  nabawiDome: 'https://images.unsplash.com/photo-1692977579997-948328cdb7d2?auto=format&fit=crop&w=700&q=80',
  haram: 'https://images.unsplash.com/photo-1579305796153-ab71ce202953?auto=format&fit=crop&w=1800&q=80',
  haramWide: 'https://images.unsplash.com/photo-1579305796153-ab71ce202953?auto=format&fit=crop&w=1200&q=80',
  pilgrims: 'https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=1800&q=80',
  pilgrimsWide: 'https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=1200&q=80',
  madinah: 'https://images.unsplash.com/photo-1577295605163-132e25c3c914?auto=format&fit=crop&w=700&q=80',
} as const

/**
 * Institution marks, hot-linked from their public sources. Wikimedia serves
 * these with permissive CORS and stable paths; the two that have no public
 * asset fall back to a typographic tile (see `CredentialBadge` / `PartnerCard`).
 */
export const logos = {
  kan: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Logo_KAN.png',
  asita: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/LOGO_ASITA.jpg/500px-LOGO_ASITA.jpg',
  kemenag: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Seal_of_the_Ministry_of_Religious_Affairs_of_the_Republic_of_Indonesia.svg',
  bankIndonesia: 'https://upload.wikimedia.org/wikipedia/commons/3/39/BI_Logo.png',
  indosat: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Indosat_Ooredoo_Hutchison.svg',
  elnusa: 'https://upload.wikimedia.org/wikipedia/id/d/d1/Logo_Elnusa.svg',
  bpkp: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Logo_BPKP_%282020%29.png',
  alKahfi: 'https://pesantrenalkahfi.com/wp-content/uploads/2023/08/LOGO-WEB-AL-KAHFI-2.webp',
} as const

const brochureBase = 'https://brosur.mwm.web.id/brosur/img'

export const brochures = {
  barokah9: `${brochureBase}/9a3c514cdc8ff58b7eb6ace6f06f0eae14a063a9f844be98f7173f42e019c121.jpg`,
  umroh13: `${brochureBase}/46d0515ac03acf594c58ce02e80181f02c0dbb5b56a664c54ec0206e45a807ec.jpg`,
  barokah9Waris: `${brochureBase}/b57f2232ce0ab6dee365f055cae9757fe6ddf5f8e893074a701b2ebe4649dc62.jpg`,
} as const
