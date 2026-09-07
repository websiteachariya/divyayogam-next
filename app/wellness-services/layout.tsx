import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Holistic Wellness Services & Consultations | Divya Yogam',
  description:
    'Explore holistic wellness consulting, Pancha Kosha purification, cellular organ rejuvenation, and spiritual health guidance with Divya Yogam.',
  keywords: [
    'Divya Yogam Wellness Services',
    'Organ Rejuvenation Consultation',
    'Pancha Kosha Alignment',
    'Cellular Health',
  ],
  alternates: {
    canonical: 'https://divyayogam.org/wellness-services',
  },
  openGraph: {
    title: 'Holistic Wellness Services & Consultations | Divya Yogam',
    description: 'Explore holistic wellness consulting and Pancha Kosha purification services.',
    url: 'https://divyayogam.org/wellness-services',
    siteName: 'Divya Yogam',
    images: [{ url: '/images/banner-4.webp', width: 1200, height: 630, alt: 'Divya Yogam Wellness Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holistic Wellness Services & Consultations | Divya Yogam',
    description: 'Explore holistic wellness consulting and Pancha Kosha purification services.',
    images: ['/images/banner-4.webp'],
  },
};

export default function WellnessServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
