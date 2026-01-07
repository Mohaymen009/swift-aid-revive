import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SitemapGeneratorProps {
  routes: Array<{
    path: string;
    lastmod?: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }>;
}

const SitemapGenerator = ({ routes }: SitemapGeneratorProps) => {
  const { pathname } = useLocation();
  const baseUrl = 'https://emrs.ae';

  useEffect(() => {
    // Generate sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${routes
        .map(({ path, lastmod = new Date().toISOString().split('T')[0], changefreq = 'weekly', priority = 0.8 }) => {
          return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
        })
        .join('')}
</urlset>`;

    // Create a blob and download link for the sitemap
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';

    // Only download on the homepage to prevent multiple downloads
    if (pathname === '/') {
      link.click();
    }

    // Cleanup
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [pathname, routes]);

  return null; // This component doesn't render anything
};

export default SitemapGenerator;
