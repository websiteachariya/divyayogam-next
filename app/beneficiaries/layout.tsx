import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Beneficiaries & Social Service Impact | Divya Yogam Foundation',
  description:
    'Discover how Divya Yogam Foundation serves humanity through youth empowerment, spiritual awakening, organ wellness, and social service initiatives.',
  keywords: [
    'Divya Yogam Beneficiaries',
    'Spiritual Service',
    'Youth Empowerment',
    'Vedic Foundation',
    'Arawindhan Ji Charity',
  ],
  alternates: {
    canonical: 'https://divyayogam.org/beneficiaries',
  },
  openGraph: {
    title: 'Our Beneficiaries & Social Service Impact | Divya Yogam Foundation',
    description: 'Empowering humanity through spiritual awakening and holistic wellness initiatives.',
    url: 'https://divyayogam.org/beneficiaries',
    siteName: 'Divya Yogam',
    images: [{ url: '/images/011A6549.webp', width: 1200, height: 630, alt: 'Divya Yogam Social Impact' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Beneficiaries & Social Service Impact | Divya Yogam Foundation',
    description: 'Empowering humanity through spiritual awakening and holistic wellness initiatives.',
    images: ['/images/011A6549.webp'],
  },
};

export default function BeneficiariesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
