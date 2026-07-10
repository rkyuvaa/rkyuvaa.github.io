const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/#0B5D4B/gi, '#023020')
    .replace(/#0b5d4b/gi, '#023020')
    .replace(/11,93,75/g, '2,48,32')
    .replace(/#084437/gi, '#011a12')
    .replace(/#2E8B57/gi, '#00a86b')
    .replace(/#2e8b57/gi, '#00a86b')
    .replace(/#DDF5E8/gi, '#00c87f')
    .replace(/#ddf5e8/gi, '#00c87f');
    
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated: ' + filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        walkDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir('orbX-site');
