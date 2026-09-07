import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Divine Membership Plans — Gold, Platinum & Diamond | Divya Yogam',
  description:
    'Join Divya Yogam with Gold (₹500), Platinum (₹1,500), or Diamond (₹5,000) membership. Includes Avadhani sessions, goal sheet enrichment, and holistic wellness.',
  keywords: [
    'Divya Yogam Membership',
    'Gold Plan',
    'Platinum Plan',
    'Diamond Plan',
    'Avadhani Session',
    'Goal Sheet Enrichment',
    'Arawindhan Ji',
  ],
  alternates: {
    canonical: 'https://divyayogam.org/membership',
  },
  openGraph: {
    title: 'Divine Membership Plans — Gold, Platinum & Diamond | Divya Yogam',
    description:
      'Transform your life with guided Avadhani sessions, goal sheet enrichment, and holistic wellness plans.',
    url: 'https://divyayogam.org/membership',
    siteName: 'Divya Yogam',
    images: [
      {
        url: '/images/banner-4.webp',
        width: 1200,
        height: 630,
        alt: 'Divya Yogam Divine Membership Plans',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divine Membership Plans — Gold, Platinum & Diamond | Divya Yogam',
    description:
      'Transform your life with guided Avadhani sessions, goal sheet enrichment, and holistic wellness plans.',
    images: ['/images/banner-4.webp'],
  },
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
