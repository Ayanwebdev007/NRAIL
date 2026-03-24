import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';
const files = fs.readdirSync(assetsDir).filter(f => f.toLowerCase().endsWith('.png'));

console.log('--- ALL PNG FILES ---');
files.forEach(f => {
  if (/\d{4}/.test(f)) {
    console.log(`YEAR_LIKE: ${f}`);
  }
});
