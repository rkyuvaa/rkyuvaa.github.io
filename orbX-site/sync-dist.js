import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(__dirname, 'dist');
const distAssetsDir = path.resolve(distDir, 'assets');
const rootAssetsDir = path.resolve(rootDir, 'assets');

// 1. Ensure root assets directory exists and copy dist/assets/* -> root/assets/*
if (!fs.existsSync(rootAssetsDir)) {
  fs.mkdirSync(rootAssetsDir, { recursive: true });
}

let heroBannerFile = null;
if (fs.existsSync(distAssetsDir)) {
  const files = fs.readdirSync(distAssetsDir);
  for (const file of files) {
    const src = path.resolve(distAssetsDir, file);
    const dest = path.resolve(rootAssetsDir, file);
    fs.copyFileSync(src, dest);
    if (file.startsWith('OrbX Business Suite Partnership Banner') && file.endsWith('.webp')) {
      heroBannerFile = file;
    }
  }
  console.log(`✓ Synced ${files.length} assets to root/assets/`);
}

// 2. Copy dist/index.html -> root index.html with above-the-fold hero image preload
const distIndex = path.resolve(distDir, 'index.html');
const rootIndex = path.resolve(rootDir, 'index.html');
if (fs.existsSync(distIndex)) {
  let html = fs.readFileSync(distIndex, 'utf8');
  if (heroBannerFile && !html.includes(heroBannerFile)) {
    const preloadTag = `    <link rel="preload" as="image" href="/assets/${heroBannerFile}" type="image/webp" fetchpriority="high" />\n  </head>`;
    html = html.replace('</head>', preloadTag);
  }
  fs.writeFileSync(rootIndex, html, 'utf8');
  console.log('✓ Synced dist/index.html to root index.html with hero WebP preload');
}
