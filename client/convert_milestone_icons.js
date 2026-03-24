import sharp from 'sharp';
import path from 'path';

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';

const filesToConvert = [
  { input: 'Connector Image 1.png', output: 'Connector Image 1.webp' },
  { input: 'Connector Image 2.png', output: 'Connector Image 2.webp' },
  { input: 'Connector Image 3.png', output: 'Connector Image 3.webp' },
  { input: 'Connector Image 4.png', output: 'Connector Image 4.webp' },
  { input: 'Connector Image 5.png', output: 'Connector Image 5.webp' },
  { input: 'Connector Image 6.png', output: 'Connector Image 6.webp' },
  { input: 'continuous-one-line-drawing-engineer-industrial-plant-with-chimney.png', output: 'industrial_plant.webp' }
];

async function convertAll() {
  for (const item of filesToConvert) {
    try {
      const inputPath = path.join(assetsDir, item.input);
      const outputPath = path.join(assetsDir, item.output);
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`Successfully converted ${item.input} -> ${item.output}`);
    } catch (err) {
      console.error(`Error converting ${item.input}:`, err);
    }
  }
}

convertAll();
