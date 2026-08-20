import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingWidget from '@/components/layout/FloatingWidget';
import { Manrope, DM_Serif_Display, Cormorant_Garamond } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://divyayogam.org'),
  title: {
    default: 'Divya Yogam — Awaken Within | Organ Meditation & Sacred Sciences',
    template: '%s | Divya Yogam',
  },
  description:
    'Discover profound inner stillness, cellular organ rejuvenation, and sacred Vedic wisdom with Divya Yogam guided by Arawindhan Ji.',
  keywords: [
    'Divya Yogam',
    'Arawindhan Ji',
    'Organ Meditation',
    'Quantum Habits',
    'Pancha Kosha Purification',
    'Vedic Sciences',
    'Meditation Retreats',
    'Spiritual Awakening',
    'Cellular Rejuvenation',
  ],
  authors: [{ name: 'Divya Yogam' }],
  creator: 'Divya Yogam',
  publisher: 'Divya Yogam Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-circle.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.png',
    apple: '/images/favicon-circle.webp',
  },
  openGraph: {
    title: 'Divya Yogam — Awaken Within | Organ Meditation & Sacred Sciences',
    description:
      'Awaken the divine within and live a life of purpose, peace, and cellular health through authentic yogic practices and organ meditation.',
    url: 'https://divyayogam.org',
    siteName: 'Divya Yogam',
    images: [
      {
        url: '/images/011A6549.webp',
        width: 1200,
        height: 630,
        alt: 'Divya Yogam Community Gathering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divya Yogam — Awaken Within',
    description: 'Transform your body, mind, and spirit with ancient Vedic sciences and organ meditation.',
    images: ['/images/011A6549.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#352043',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSerif.variable} ${cormorant.variable} overflow-x-hidden max-w-full`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/banner-4.webp" as="image" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-screen flex flex-col text-[#5E5865] selection:bg-[#C8A34A]/30 selection:text-[#47206A] relative font-body antialiased bg-[#F8F2E8] lg:bg-[url('/images/bg-6.webp')] bg-cover bg-center lg:bg-fixed bg-no-repeat overflow-x-hidden max-w-full w-full"
        suppressHydrationWarning
      >
        <ScrollProgress />
        <Navbar />
        <FloatingWidget />

        <main className="flex-grow w-full max-w-full overflow-x-hidden">{children}</main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
