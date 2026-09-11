import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Divine Contributorship Plans — Gold, Platinum & Diamond | Divya Yogam',
  description:
    'Join Divya Yogam Contributorship with Gold (₹500), Platinum (₹1,500), or Diamond (₹5,000) contribution. Includes Avadhani sessions, goal sheet enrichment, and holistic wellness.',
  keywords: [
    'Divya Yogam Contributorship',
    'Gold Plan',
    'Platinum Plan',
    'Diamond Plan',
    'Avadhani Session',
    'Goal Sheet Enrichment',
    'Arawindhan Ji',
  ],
  alternates: {
    canonical: 'https://divyayogam.org/contributorship',
  },
  openGraph: {
    title: 'Divine Contributorship Plans — Gold, Platinum & Diamond | Divya Yogam',
    description:
      'Transform your life with guided Avadhani sessions, goal sheet enrichment, and holistic wellness plans.',
    url: 'https://divyayogam.org/contributorship',
    siteName: 'Divya Yogam',
    images: [
      {
        url: '/images/banner-4.webp',
        width: 1200,
        height: 630,
        alt: 'Divya Yogam Divine Contributorship Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divine Contributorship Plans — Gold, Platinum & Diamond | Divya Yogam',
    description:
      'Transform your life with guided Avadhani sessions, goal sheet enrichment, and holistic wellness plans.',
    images: ['/images/banner-4.webp'],
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
