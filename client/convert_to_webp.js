import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src', 'assets');

const files = fs.readdirSync(assetsDir);
const imageExts = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function convertImages() {
  for (const file of files) {
    const ext = path.extname(file);
    if (imageExts.includes(ext)) {
      const filePath = path.join(assetsDir, file);
      // Remove any trailing query parameters if they exist in file names (rare, but just in case)
      const baseName = path.basename(file, ext).split('?')[0]; 
      const newFileName = baseName + '.webp';
      
      try {
        await sharp(filePath)
          .webp({ quality: 85 }) // High quality compression
          .toFile(path.join(assetsDir, newFileName));
        console.log(`Converted: ${file} -> ${newFileName}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

convertImages().then(() => console.log('All conversions complete.'));
