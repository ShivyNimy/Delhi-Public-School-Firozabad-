/* Minimal static "build": copies the site into dist/ for Vercel. No transpiling. */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const INCLUDE = ['index.html', 'assets'];

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

for (const item of INCLUDE) {
  const src = path.join(ROOT, item);
  const dest = path.join(DIST, item);
  fs.cpSync(src, dest, { recursive: true });
}

console.log('Static site copied to dist/:', fs.readdirSync(DIST).join(', '));
