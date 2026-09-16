const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<div className="flex items-center gap-5 text-[#FFFFFF] rtl:flex-row-reverse w-fit ml-auto">
            <div className="text-right">
              <h1 className="text-[26px] font-black tracking-tight mb-1">طیوران صنعت پویا</h1>
              <div className="h-[2px] w-full bg-[#F9B222] opacity-50 mb-1 rounded-full"></div>
              <p className="text-[12px] font-light opacity-90 tracking-wider">تجهیز و راه‌اندازی سالن‌های مرغداری</p>
            </div>
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
               <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>`;

const replacement = `<div className="flex items-center justify-end text-[#FFFFFF] w-full">
            <div className="w-20 h-20 flex items-center justify-center shrink-0">
               <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>`;

content = content.split(target).join(replacement);

// Also slightly reduce the width of the banner since it doesn't need to be 55% anymore without text,
// making it 250px is a good balance for just the logo.
content = content.replace(/w-\[55\%\]/g, 'w-[250px]');

fs.writeFileSync('src/App.tsx', content);
