import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(__dirname, 'dist');
const distAssetsDir = path.resolve(distDir, 'assets');
const rootAssetsDir = path.resolve(rootDir, 'assets');

// 1. Copy dist/index.html -> root index.html
const distIndex = path.resolve(distDir, 'index.html');
const rootIndex = path.resolve(rootDir, 'index.html');
if (fs.existsSync(distIndex)) {
  fs.copyFileSync(distIndex, rootIndex);
  console.log('✓ Synced dist/index.html to root index.html');
}

// 2. Ensure root assets directory exists and copy dist/assets/* -> root/assets/*
if (!fs.existsSync(rootAssetsDir)) {
  fs.mkdirSync(rootAssetsDir, { recursive: true });
}

if (fs.existsSync(distAssetsDir)) {
  const files = fs.readdirSync(distAssetsDir);
  for (const file of files) {
    const src = path.resolve(distAssetsDir, file);
    const dest = path.resolve(rootAssetsDir, file);
    fs.copyFileSync(src, dest);
  }
  console.log(`✓ Synced ${files.length} assets to root/assets/`);
}
