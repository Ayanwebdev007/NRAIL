const fs = require('fs');
const path = require('path');

const srcHtaccess = path.join(__dirname, 'public', '.htaccess');
const destHtaccess = path.join(__dirname, 'dist', '.htaccess');

if (fs.existsSync(srcHtaccess)) {
    fs.copyFileSync(srcHtaccess, destHtaccess);
    console.log('Successfully copied .htaccess to dist/.htaccess');
} else {
    console.warn('.htaccess file not found in public directory');
}
