import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://divyayogam.org';
  const routes = [
    '',
    '/contributorship',
    '/happy-shambala',
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
    '/publication',
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
    changeFrequency: route === '' || route === '/contributorship' || route === '/happy-shambala' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/contributorship' || route === '/happy-shambala' ? 0.9 : 0.8,
  }));
}
