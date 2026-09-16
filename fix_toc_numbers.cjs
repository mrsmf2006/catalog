const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<button 
                   onClick={() => {
                     document.getElementById(\`page-\${startIndex + idx + 1}\`)?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   key={item.id} 
                   className="flex items-start justify-between border-b border-[#D1D5DB] border-dashed pb-1.5 hover:bg-black/5 transition-colors rounded-sm px-1 -mx-1 cursor-pointer w-full text-right"
                >
                   <div className="flex items-start gap-3 w-full pr-1">
                     <div className="w-6 h-6 rounded bg-[#EAEAEA] text-[#0C3068] flex items-center justify-center text-[12px] font-black shrink-0 mt-[2px]">
                       {startIndex + idx + 1}
                     </div>
                     <span className="font-bold text-[14px] text-[#1F2937] leading-snug break-words pl-2" title={item.title}>
                       {item.title}
                     </span>
                   </div>
                   <span className="font-black text-[#0C3068] text-[15px] shrink-0 mt-[2px]">
                     {(startIndex + idx + 1).toLocaleString('fa-IR')}
                   </span>
                </button>`;

const replacement = `<button 
                   onClick={() => {
                     document.getElementById(\`page-\${3 + totalTocPages + startIndex + idx}\`)?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   key={item.id} 
                   className="flex items-start justify-between border-b border-[#D1D5DB] border-dashed pb-1.5 hover:bg-black/5 transition-colors rounded-sm px-1 -mx-1 cursor-pointer w-full text-right"
                >
                   <div className="flex items-start gap-3 w-full pr-1">
                     <div className="min-w-[24px] h-6 px-1 rounded bg-[#EAEAEA] text-[#0C3068] flex items-center justify-center text-[13px] font-black shrink-0 mt-[2px]">
                       {(startIndex + idx + 1).toLocaleString('fa-IR')}
                     </div>
                     <span className="font-bold text-[14px] text-[#1F2937] leading-snug break-words pl-2" title={item.title}>
                       {item.title}
                     </span>
                   </div>
                   <span className="font-black text-[#0C3068] text-[15px] shrink-0 mt-[2px]">
                     {(3 + totalTocPages + startIndex + idx).toLocaleString('fa-IR')}
                   </span>
                </button>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/App.tsx', content);
