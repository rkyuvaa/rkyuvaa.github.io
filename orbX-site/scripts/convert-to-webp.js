// scripts/convert-to-webp.js
// Run with: node scripts/convert-to-webp.js
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { resolve, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const bannerDir = resolve(__dirname, '../src/assets/banners');
const webpDir   = resolve(bannerDir, 'webp');

if (!existsSync(webpDir)) mkdirSync(webpDir, { recursive: true });

const files = readdirSync(bannerDir).filter(f => extname(f).toLowerCase() === '.png');

console.log(`Converting ${files.length} PNG banners → WebP (quality 82)…\n`);

let done = 0;
for (const file of files) {
  const src  = resolve(bannerDir, file);
  const dest = resolve(webpDir, basename(file, '.png') + '.webp');
  await sharp(src)
    .webp({ quality: 82, effort: 4 })
    .toFile(dest);
  const srcStat  = (await import('fs')).statSync(src).size;
  const destStat = (await import('fs')).statSync(dest).size;
  const saving   = (((srcStat - destStat) / srcStat) * 100).toFixed(1);
  console.log(`  ✓ ${file}  →  ${(destStat/1024).toFixed(0)}KB  (saved ${saving}%)`);
  done++;
}
console.log(`\nDone. ${done}/${files.length} images converted.`);
