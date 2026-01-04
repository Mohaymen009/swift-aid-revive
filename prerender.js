```javascript
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTES = [
  "/",
  "/about-us",
  "/licensing",
  "/medical-oversight",
  "/services",
  "/ambulance-services-uae",
  "/non-emergency-medical-transport-uae",
  "/doctor-on-call-uae",
  "/home-healthcare-services-uae",
  "/wellness-diagnostic-services-uae",
  "/dubai-ambulance-services",
  "/abu-dhabi-ambulance-services",
  "/sharjah-ambulance-services",
  "/ajman-ambulance-services",
  "/ras-al-khaimah-ambulance-services",
  "/fujairah-ambulance-services",
  "/umm-al-quwain-ambulance-services",
  "/blog/how-to-choose-ambulance-service",
  "/blog/private-ambulance-services-across-uae",
  "/blog/emergency-patient-transfers-uae",
];

const DIST_DIR = path.join(__dirname, 'dist');

async function prerender() {
  console.log('🚀 Starting Prerender...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ directory not found. Please run build first.');
    process.exit(1);
  }

  // Start Vite Preview Server programmatically
  console.log('🔌 Starting preview server...');
  const previewServer = await preview({
    preview: { port: 4173, strictPort: true },
    root: __dirname,
    configFile: false, // Use default or load if needed, false prevents re-bundling issues
    mode: 'production'
  });

  const BASE_URL = 'http://localhost:4173';
  
  // Wait for server? (preview returns promise resolving to server)
  previewServer.printUrls();

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    try {
      const url = `${ BASE_URL }${ route } `;
      console.log(`Rendering: ${ route }...`);
      
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      const content = await page.content();
      
      const filePath = route === '/' 
        ? path.join(DIST_DIR, 'index.html')
        : path.join(DIST_DIR, route, 'index.html');

      const dirPath = path.dirname(filePath);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(filePath, content);
      console.log(`✅ Saved: ${ filePath } `);
    } catch (error) {
      console.error(`❌ Failed to render ${ route }: `, error);
    }
  }

  await browser.close();
  previewServer.httpServer.close(); // Clean shutdown
  console.log('✨ Prerender complete.');
  process.exit(0);
}

prerender();
```
