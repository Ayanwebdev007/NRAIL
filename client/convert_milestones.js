import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';
const files = [
    '1983.png',
    '1993.jpg',
    '1995.jpg',
    '1998.jpg',
    '2014.png',
    '2024.jpg',
    '2025.jpg'
];

async function convert() {
    for (const file of files) {
        const inputPath = path.join(assetsDir, file);
        if (fs.existsSync(inputPath)) {
            const outputPath = path.join(assetsDir, `${path.parse(file).name}.webp`);
            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);
            console.log(`Converted ${file} to ${path.parse(file).name}.webp`);
        } else {
            console.log(`File not found: ${file}`);
        }
    }
}

convert();
