const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace pt-[160px] to pt-[120px]
content = content.replace(/className="pt-\[160px\] px-12 relative z-0 flex flex-col items-center"/, 'className="pt-[140px] px-12 relative z-0 flex flex-col items-center"');

// Replace image h-[340px] to h-[320px]
content = content.replace(/className="w-full h-\[340px\] rounded-\[32px\] relative flex items-center justify-center mt-4 shadow-sm border border-gray-100 overflow-hidden bg-white"/, 'className="w-full h-[320px] rounded-[32px] relative flex items-center justify-center mt-2 shadow-sm border border-gray-100 overflow-hidden bg-white"');

// Replace mt-[70px] to mt-[40px] for Texts Section
content = content.replace(/className="mt-\[70px\] px-14 flex-1"/, 'className="mt-[45px] px-14 flex-1"');

// Reduce mb-8 to mb-5 on description to save space
content = content.replace(/className="mb-8"(\s*)>\s*<div className="flex items-center gap-3 mb-4 justify-end flex-row-reverse"/g, 'className="mb-5"$1>\n            <div className="flex items-center gap-3 mb-4 justify-end flex-row-reverse"');

fs.writeFileSync('src/App.tsx', content);
