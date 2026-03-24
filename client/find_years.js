import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';
const files = fs.readdirSync(assetsDir);

console.log('--- YEAR-LIKE ASSETS ---');
files.forEach(f => {
  if (/\d{4}/.test(f)) {
    console.log(`FOUND: ${f}`);
  }
});
