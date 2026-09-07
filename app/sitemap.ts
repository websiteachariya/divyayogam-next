import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://divyayogam.org';
  const routes = [
    '',
    '/membership',
    '/happy-shambhala',
    '/beneficiaries',
    '/foundation-story',
    '/wellness-services',
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
    '/blog',
    '/privacy-policy',
    '/terms',
    '/terms-and-conditions',
    '/refund-policy',
    '/refund-and-cancellation',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/membership' || route === '/happy-shambhala' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/membership' || route === '/happy-shambhala' ? 0.9 : 0.8,
  }));
}
