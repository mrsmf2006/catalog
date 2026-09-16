const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<a href={\`#page-\${startIndex + idx + 1}\`} key={item.id} className="flex items-center justify-between border-b border-[#D1D5DB] border-dashed pb-1 hover:bg-black/5 transition-colors rounded-sm px-1 -mx-1">`;
const replacement = `<button 
                   onClick={() => {
                     document.getElementById(\`page-\${startIndex + idx + 1}\`)?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   key={item.id} 
                   className="flex items-center justify-between border-b border-[#D1D5DB] border-dashed pb-1 hover:bg-black/5 transition-colors rounded-sm px-1 -mx-1 cursor-pointer w-full text-right"
                >`;

const targetEnd = `</a>`;
const replacementEnd = `</button>`;

content = content.replace(new RegExp(target.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'g'), replacement);

// We need to replace </a> with </button> but ONLY inside the items.map block.
// A simpler way:
content = content.split('</a>').join('</button>');

fs.writeFileSync('src/App.tsx', content);
