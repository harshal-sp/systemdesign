import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.resolve('content/docs');

function getAllFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, allFiles);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      allFiles.push(filePath);
    }
  });
  return allFiles;
}

function cleanImageTag(fullTag, attrs) {
  const srcMatch = attrs.match(/src=["']([^"']+)["']/i);
  if (!srcMatch) return fullTag;

  let src = srcMatch[1].trim().replace(/\/{2,}/g, '/');
  if (src.startsWith('http:/') && !src.startsWith('http://')) {
    src = src.replace('http:/', 'http://');
  }
  if (src.startsWith('https:/') && !src.startsWith('https://')) {
    src = src.replace('https:/', 'https://');
  }

  const altMatch = attrs.match(/alt=["']([^"']*)["']/i);
  let alt = altMatch ? altMatch[1].trim() : '';

  if (!alt) {
    const filename = path.basename(src, path.extname(src));
    alt = filename.replace(/[-_]/g, ' ');
  }

  return `\n\n![${alt}](${src})\n\n`;
}

const files = getAllFiles(DOCS_DIR);
let totalReplacements = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Replace <div style="...">\s*<img ... />\s*</div>
  content = content.replace(/<div[^>]*>\s*<img\s+([^>]*?)>\s*<\/div>/gi, (match, attrs) => {
    totalReplacements++;
    return cleanImageTag(match, attrs);
  });

  // 2. Replace standalone <img ... >
  content = content.replace(/<img\s+([^>]*?)>/gi, (match, attrs) => {
    totalReplacements++;
    return cleanImageTag(match, attrs);
  });

  // 3. Fix any double slashes in markdown image paths: ![](/images/chapters/01-scaling//message-queue.png)
  content = content.replace(/(!\[[^\]]*\]\()([^)]+)(\))/g, (match, before, src, after) => {
    const cleanSrc = src.replace(/([^:])\/{2,}/g, '$1/');
    return `${before}${cleanSrc}${after}`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`✅ Normalized ${totalReplacements} image tags across ${files.length} markdown documents!`);
