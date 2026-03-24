import fs from 'fs';
import path from 'path';

const assetsDir = 'c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets';
const files = fs.readdirSync(assetsDir)
    .map(f => {
        const stats = fs.statSync(path.join(assetsDir, f));
        return { name: f, mtime: stats.mtime };
    })
    .sort((a, b) => b.mtime - a.mtime);

console.log('--- RECENT ASSETS ---');
files.slice(0, 20).forEach(f => {
    console.log(`${f.mtime.toISOString()} - ${f.name}`);
});
