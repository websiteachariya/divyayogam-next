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
    ],
  },
  { name: 'Sciences', path: '/sciences' },
  { name: 'Events', path: '/events' },
  { name: 'Transformation', path: '/transformation' },
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
  tagline: 'Awaken Within',
  url: 'https://divyayogam.org',
  email: 'contact@divyayogam.org',
  phone: '+91 (800) 108-YOGA',
} as const;
