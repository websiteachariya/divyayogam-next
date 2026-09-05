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
        src: '/images/favicon.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/images/logo.png.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
