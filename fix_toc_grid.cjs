const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// The items inside TOC page are using grid-cols-2. Let's make sure it handles height well.
const target = `<div className="grid grid-cols-2 gap-x-16 gap-y-3 content-start overflow-hidden pb-4">`;
const replacement = `<div className="grid grid-cols-2 gap-x-16 gap-y-4 content-start overflow-hidden pb-4">`;

content = content.replace(target, replacement);

fs.writeFileSync('src/App.tsx', content);
