const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const distPath = path.join(__dirname, 'dist');
const zipPath = path.join(rootDir, 'client-dist003.zip');
const altZipPath = path.join(rootDir, 'client-dist.zip');

console.log('Dist path:', distPath);
console.log('Zip path:', zipPath);

if (fs.existsSync(zipPath)) {
    console.log('Removing old zip...');
    fs.unlinkSync(zipPath);
}

console.log('Creating client-dist003.zip via tar.exe (standard POSIX ZIP for PHP ZipArchive compatibility)...');

const tarCommand = `tar.exe -a -c -f "${zipPath}" -C "${distPath}" *`;

try {
    execSync(tarCommand, { stdio: 'inherit' });
    console.log('Successfully created client-dist003.zip!');
    const stats = fs.statSync(zipPath);
    console.log(`Zip size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
    
    // Also keep client-dist.zip in sync
    fs.copyFileSync(zipPath, altZipPath);
    console.log('Also updated client-dist.zip at root.');
} catch (err) {
    console.error('Error zipping dist:', err);
    process.exit(1);
}
