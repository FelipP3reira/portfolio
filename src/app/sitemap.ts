import type { MetadataRoute } from 'next';

const urlBase = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

// Página única: só a home entra no sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: urlBase,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
