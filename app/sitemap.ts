import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.alastreplastering.com';
  const now = new Date();

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/alastre-shell`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}