import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foundation Story & Vision — Master Arawindhan Ji | Divya Yogam',
  description:
    'Read the divine origin story of Divya Yogam Foundation, established by Master Arawindhan Ji to revive sacred organ meditation and yogic sciences.',
  keywords: [
    'Divya Yogam Foundation Story',
    'Arawindhan Ji History',
    'Organ Meditation Lineage',
    'Vedic Sciences',
  ],
  alternates: {
    canonical: 'https://divyayogam.org/foundation-story',
  },
  openGraph: {
    title: 'Foundation Story & Vision — Master Arawindhan Ji | Divya Yogam',
    description: 'Read the story of Divya Yogam Foundation and its vision for global spiritual awakening.',
    url: 'https://divyayogam.org/foundation-story',
    siteName: 'Divya Yogam',
    images: [{ url: '/images/arawindhan-ji.webp', width: 1200, height: 630, alt: 'Master Arawindhan Ji' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Story & Vision — Master Arawindhan Ji | Divya Yogam',
    description: 'Read the story of Divya Yogam Foundation and its vision for global spiritual awakening.',
    images: ['/images/arawindhan-ji.webp'],
  },
};

export default function FoundationStoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
