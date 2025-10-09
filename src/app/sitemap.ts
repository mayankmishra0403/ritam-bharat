// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Helper function to get all blog post slugs
const getPostSlugs = () => {
  const postsDirectory = path.join(process.cwd(), '_posts');
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => filename.replace('.md', ''));
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ritambharat.software';

  // Get all blog post slugs
  const postSlugs = getPostSlugs();
  const postUrls = postSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(), // We can make this more specific later
  }));

  // Add static and dynamic URLs
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}