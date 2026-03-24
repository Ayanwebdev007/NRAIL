import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';
const files = fs.readdirSync(assetsDir);

const targetFile = files.find(f => f.toLowerCase().includes('continuous') && f.toLowerCase().endsWith('.png'));

if (targetFile) {
  const inputPath = path.join(assetsDir, targetFile);
  const outputPath = path.join(assetsDir, 'industrial_plant.webp');
  
  sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(outputPath)
    .then(() => console.log(`SUCCESS: Converted "${targetFile}" to industrial_plant.webp`))
    .catch(err => console.error('ERROR:', err));
} else {
  console.log('Target file not found');
}
