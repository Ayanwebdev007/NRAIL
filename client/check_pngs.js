const fs = require('fs');
const path = require('path');

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';
const files = fs.readdirSync(assetsDir).filter(f => f.toLowerCase().endsWith('.png'));

console.log('--- PNG FILES ---');
files.forEach(f => {
    console.log(`FILE: ${f}`);
});
