import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Divya Yogam — Awaken Within',
    short_name: 'Divya Yogam',
    description: 'Awaken the divine within through authentic yogic practices and organ meditation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F2E8',
    theme_color: '#47206A',
    icons: [
      {
        src: '/favicon.webp',
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'any',
      },
      {
        src: '/favicon-32x32.webp',
        sizes: '32x32',
        type: 'image/webp',
      },
      {
        src: '/images/favicon-circle.webp',
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'maskable',
      },
    ],
  };
}
