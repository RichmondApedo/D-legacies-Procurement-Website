import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dlegacies.vercel.app'; // Update this to your final domain if different
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/request',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
