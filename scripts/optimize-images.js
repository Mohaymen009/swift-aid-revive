const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob'));

// Configuration
const CONFIG = {
  inputDirs: [
    path.join(__dirname, '../public/images'),
    path.join(__dirname, '../src/assets')
  ],
  outputDir: path.join(__dirname, '../public/optimized-images'),
  // Image optimization settings
  formats: ['webp'], // Add 'avif' if needed
  qualities: {
    webp: 80,
    jpg: 85,
    png: 90,
  },
  // Target image dimensions (width in pixels)
  sizes: [
    { suffix: '-sm', width: 640 },
    { suffix: '-md', width: 768 },
    { suffix: '-lg', width: 1024 },
    { suffix: '-xl', width: 1366 },
    { suffix: '-2xl', width: 1920 },
  ],
  // File patterns to include
  include: ['**/*.{jpg,jpeg,png,webp}'],
  // File patterns to exclude
  exclude: ['**/optimized-*', '**/*.svg']
};

// Create output directory if it doesn't exist
fs.ensureDirSync(CONFIG.outputDir);

// Process a single image file
async function processImage(filePath) {
  const parsedPath = path.parse(filePath);
  const relativeDir = path.relative(process.cwd(), path.dirname(filePath));
  const outputBaseDir = path.join(CONFIG.outputDir, relativeDir);
  
  // Skip if already in optimized directory
  if (relativeDir.includes('optimized-')) {
    console.log(`Skipping already optimized file: ${filePath}`);
    return;
  }

  // Create output directory if it doesn't exist
  await fs.ensureDir(outputBaseDir);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Generate WebP version
    for (const size of CONFIG.sizes) {
      // Skip if the original is smaller than the target size
      if (metadata.width && metadata.width <= size.width) {
        continue;
      }
      
      const outputFileName = `${parsedPath.name}${size.suffix}.webp`;
      const outputPath = path.join(outputBaseDir, outputFileName);
      
      await image
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ 
          quality: CONFIG.qualities.webp,
          effort: 6 // CPU usage 0-6 (higher is better compression but slower)
        })
        .toFile(outputPath);
      
      console.log(`Created: ${outputPath} (${size.width}px)`);
      
      // Generate AVIF version if enabled
      if (CONFIG.formats.includes('avif')) {
        const avifOutputPath = outputPath.replace(/\.webp$/, '.avif');
        await image
          .resize({ width: size.width, withoutEnlargement: true })
          .avif({ 
            quality: CONFIG.qualities.avif || 60,
            effort: 6
          })
          .toFile(avifOutputPath);
        
        console.log(`Created: ${avifOutputPath} (${size.width}px)`);
      }
    }
    
    // Create original size WebP version
    const originalWebpPath = path.join(outputBaseDir, `${parsedPath.name}.webp`);
    await image
      .webp({ 
        quality: CONFIG.qualities.webp,
        effort: 6
      })
      .toFile(originalWebpPath);
    
    console.log(`Created: ${originalWebpPath} (original size)`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all images in the input directories
async function processAllImages() {
  try {
    console.log('Starting image optimization...');
    
    for (const inputDir of CONFIG.inputDirs) {
      if (!fs.existsSync(inputDir)) {
        console.warn(`Input directory does not exist: ${inputDir}`);
        continue;
      }
      
      const files = await glob(CONFIG.include, { 
        cwd: inputDir,
        ignore: CONFIG.exclude,
        absolute: true,
        nodir: true
      });
      
      console.log(`Found ${files.length} images to process in ${inputDir}`);
      
      for (const file of files) {
        await processImage(file);
      }
    }
    
    console.log('Image optimization complete!');
    
  } catch (error) {
    console.error('Error during image processing:', error);
    process.exit(1);
  }
}

// Run the optimization
processAllImages();
