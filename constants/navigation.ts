export interface NavItem {
  name: string;
  path?: string;
  children?: { name: string; path: string }[];
}

export const NAV_LINKS: NavItem[] = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Foundation Story', path: '/foundation-story' },
      { name: 'Vision & Mission', path: '/vision' },
    ],
  },
  {
    name: 'Practices',
    path: '/practices',
    children: [
      { name: 'Practices Overview', path: '/practices' },
      { name: 'Organ Meditation', path: '/organ-meditation' },
      { name: 'Quantum Habits', path: '/quantum-habits' },
      { name: 'Wellness & Services', path: '/wellness-services' },
    ],
  },

  {
  name: 'Sciences',
  path: '/sciences',
  children: [
    { name: 'Sciences Overview', path: '/sciences' },
    { name: 'Blog', path: '/blog' },
  ],
},


  {
    name: 'Events',
    path: '/events',
    children: [
      { name: 'Sacred Events', path: '/events' },
      { name: 'Happy Shambhala', path: '/happy-shambhala' },
    ],
  },
  {
    name: 'Transformation',
    path: '/transformation',
    children: [
      { name: 'Transformation', path: '/transformation' },
      { name: 'Beneficiaries', path: '/beneficiaries' },
    ],
  },
  {
    name: 'Gallery',
    path: '/gallery',
    children: [
      { name: 'Gallery', path: '/gallery' },
      { name: 'Testimonials', path: '/testimonials' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

export const SITE_CONFIG = {
  name: 'Divya Yogam',
  legalName: 'DIVINE GRACE FOUNDATION',
  address: 'R.S.Nos.222/1, 222/2, Pondy Main Road, Villianur, Puducherry - 605 110.',
  tagline: 'Awaken Within',
  url: 'https://divyayogam.org',
  email: 'info@divyayogam.org',
  phone: '+91 94425 48809 / +91 94895 14685 / +91 93444 97460',
} as const;
