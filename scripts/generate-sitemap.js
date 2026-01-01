const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your site URL
const siteUrl = 'https://emrs.ae';

// Define your routes (keep in sync with src/App.tsx)
const today = new Date().toISOString().split('T')[0];
const routes = [
  // Homepage
  { url: '/', lastmod: today, changefreq: 'weekly', priority: 1.0 },
  // Hub
  { url: '/services', lastmod: today, changefreq: 'weekly', priority: 0.9 },
  // Main Service Pages
  { url: '/ambulance-services-uae', lastmod: today, changefreq: 'weekly', priority: 0.95 },
  { url: '/non-emergency-medical-transport-uae', lastmod: today, changefreq: 'weekly', priority: 0.95 },
  { url: '/doctor-on-call-uae', lastmod: today, changefreq: 'weekly', priority: 0.95 },
  { url: '/home-healthcare-services-uae', lastmod: today, changefreq: 'weekly', priority: 0.95 },
  { url: '/wellness-diagnostic-services-uae', lastmod: today, changefreq: 'weekly', priority: 0.95 },
  // Emirate Pages
  { url: '/dubai-ambulance-services', lastmod: today, changefreq: 'monthly', priority: 0.9 },
  { url: '/abu-dhabi-ambulance-services', lastmod: today, changefreq: 'monthly', priority: 0.9 },
  { url: '/sharjah-ambulance-services', lastmod: today, changefreq: 'monthly', priority: 0.9 },
  { url: '/ajman-ambulance-services', lastmod: today, changefreq: 'monthly', priority: 0.9 },
  { url: '/ras-al-khaimah-ambulance-services', lastmod: today, changefreq: 'monthly', priority: 0.9 },
  { url: '/fujairah-ambulance-services', lastmod: today, changefreq: 'monthly', priority: 0.9 },
  { url: '/umm-al-quwain-ambulance-services', lastmod: today, changefreq: 'monthly', priority: 0.9 },
  // Blog Posts
  { url: '/blog/how-to-choose-ambulance-service', lastmod: today, changefreq: 'monthly', priority: 0.8 },
  { url: '/blog/private-ambulance-services-across-uae', lastmod: today, changefreq: 'monthly', priority: 0.8 },
  { url: '/blog/emergency-patient-transfers-uae', lastmod: today, changefreq: 'monthly', priority: 0.8 }
];

// Create a stream to write to
const sitemapStream = new SitemapStream({ hostname: siteUrl });

// Write the sitemap to a file
const writeStream = fs.createWriteStream(path.resolve(__dirname, '../public/sitemap.xml'));
sitemapStream.pipe(writeStream);

// Add your routes to the sitemap
const stream = Readable.from(routes).pipe(sitemapStream);

// Generate the sitemap
streamToPromise(stream).then(() => {
  console.log('Sitemap generated successfully!');
}).catch(console.error);
