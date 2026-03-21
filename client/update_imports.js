import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const srcDir = path.join(process.cwd(), 'src');

walk(srcDir, function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Matches relative asset imports ending in valid image extensions
    const regex = /(['"])([\.\/].*?\.(?:jpg|jpeg|png|JPG|JPEG|PNG))(\?v=\d+)?(['"])/g;
    
    let newContent = content.replace(regex, (match, p1, p2, p3, p4) => {
       const base = p2.substring(0, p2.lastIndexOf('.'));
       return `${p1}${base}.webp${p3 || ''}${p4}`;
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated imports in: ${filePath}`);
    }
  }
});
console.log('Finished updating JSX references to WebP.');
