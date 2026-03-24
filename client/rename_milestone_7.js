import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';
const files = fs.readdirSync(assetsDir);

const targetFile = files.find(f => f.toLowerCase().includes('continuous') && f.toLowerCase().endsWith('.png'));

if (targetFile) {
  const oldPath = path.join(assetsDir, targetFile);
  const newPath = path.join(assetsDir, 'milestone_7.png');
  fs.renameSync(oldPath, newPath);
  console.log(`SUCCESS: Renamed "${targetFile}" to milestone_7.png`);
} else {
  console.log('Target file not found');
}
