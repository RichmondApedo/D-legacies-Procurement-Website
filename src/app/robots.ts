import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dlegacies.vercel.app'; // Update this to your final domain if different

  return ({
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/'], // Just in case any old admin paths remain indexed
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  });
}
