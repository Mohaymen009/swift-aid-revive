import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site URL
const siteUrl = 'https://emrs.ae';

const today = new Date().toISOString().split('T')[0];
const routes = [
  // Homepage
  { url: '/', lastmod: today, changefreq: 'daily', priority: 1.0 },
  // Main Service Pages
  { url: '/ambulance-services-uae/', lastmod: today, changefreq: 'weekly', priority: 0.9 },
  { url: '/non-emergency-medical-transport-uae/', lastmod: today, changefreq: 'weekly', priority: 0.9 },
  { url: '/doctor-on-call-uae/', lastmod: today, changefreq: 'weekly', priority: 0.9 },
  { url: '/home-healthcare-services-uae/', lastmod: today, changefreq: 'weekly', priority: 0.9 },
  { url: '/wellness-diagnostic-services-uae/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  // Emirate Pages
  { url: '/dubai-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { url: '/abu-dhabi-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { url: '/sharjah-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { url: '/ajman-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { url: '/ras-al-khaimah-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { url: '/fujairah-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { url: '/umm-al-quwain-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  { url: '/al-ain-ambulance-services/', lastmod: today, changefreq: 'weekly', priority: 0.8 },
  // Hub
  { url: '/services/', lastmod: today, changefreq: 'monthly', priority: 0.7 },
  { url: '/about-us/', lastmod: today, changefreq: 'monthly', priority: 0.6 },
  { url: '/licensing/', lastmod: today, changefreq: 'monthly', priority: 0.5 },
  { url: '/medical-oversight/', lastmod: today, changefreq: 'monthly', priority: 0.5 },
  // Blog Posts
  { url: '/blog/how-to-choose-ambulance-service/', lastmod: today, changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/private-ambulance-services-across-uae/', lastmod: today, changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/emergency-patient-transfers-uae/', lastmod: today, changefreq: 'monthly', priority: 0.7 }
];

const generateSitemap = () => {
  const urls = routes.map(route => `
  <url>
    <loc>${siteUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');

  // Ensure the public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, sitemap.trim());
  console.log(`✅ Sitemap generated successfully at ${outputPath}`);
};

try {
  generateSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
