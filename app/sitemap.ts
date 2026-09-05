import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://divyayogam.org';
  const routes = [
    '',
    '/about',
    '/vision',
    '/practices',
    '/organ-meditation',
    '/quantum-habits',
    '/sciences',
    '/events',
    '/transformation',
    '/testimonials',
    '/gallery',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/terms-and-conditions',
    '/refund-policy',
    '/refund-and-cancellation',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
