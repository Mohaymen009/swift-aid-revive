const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your site URL
const siteUrl = 'https://emrs.ae';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more routes as needed
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
