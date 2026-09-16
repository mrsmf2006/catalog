const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<div className="flex items-center gap-4 mb-10 justify-end flex-row-reverse shrink-0">
             <h2 className="text-[#0C3068] text-[36px] font-black">فهرست محصولات</h2>
             <div className="w-12 h-1.5 bg-[#F9B222] rounded-full"></div>
             {totalTocPages > 1 && (
                <span className="text-[#6B7280] font-bold text-[16px] mr-auto mt-2">
                  (صفحه {pageNum} از {totalTocPages})
                </span>
             )}
          </div>`;

const replacement = `<div className="flex items-center gap-4 mb-10 shrink-0 justify-start">
             <h2 className="text-[#0C3068] text-[36px] font-black">فهرست محصولات</h2>
             <div className="w-12 h-1.5 bg-[#F9B222] rounded-full"></div>
          </div>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/App.tsx', content);
