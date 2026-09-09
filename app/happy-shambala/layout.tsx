import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Happy Shambala — Divine Consciousness & Rejuvenation | Divya Yogam',
  description:
    'Experience Happy Shambala, a sacred journey into cellular healing, organ meditation, and high-vibrational living under Master Arawindhan Ji.',
  keywords: [
    'Happy Shambala',
    'Divya Yogam',
    'Cellular Rejuvenation',
    'Organ Meditation',
    'Arawindhan Ji',
    'High Vibrational Living',
  ],
  alternates: {
    canonical: 'https://divyayogam.org/happy-shambala',
  },
  openGraph: {
    title: 'Happy Shambala — Divine Consciousness & Rejuvenation | Divya Yogam',
    description:
      'Experience Happy Shambala, a sacred journey into cellular healing, organ meditation, and high-vibrational living.',
    url: 'https://divyayogam.org/happy-shambala',
    siteName: 'Divya Yogam',
    images: [
      {
        url: '/images/con-6.webp',
        width: 1200,
        height: 630,
        alt: 'Happy Shambala Divya Yogam Journey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Shambala — Divine Consciousness & Rejuvenation | Divya Yogam',
    description: 'Sacred journey into cellular healing and high-vibrational living under Arawindhan Ji.',
    images: ['/images/con-6.webp'],
  },
};

export default function HappyShambalaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
