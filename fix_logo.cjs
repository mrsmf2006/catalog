const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<div className="text-right">
              <h1 className="text-[26px] font-black tracking-tight mb-1">طیوران صنعت پویا</h1>
              <div className="h-[2px] w-full bg-[#F9B222] opacity-50 mb-1 rounded-full"></div>
              <p className="text-[12px] font-light opacity-90 tracking-wider">تجهیز و راه‌اندازی سالن‌های مرغداری</p>
            </div>
            <div className="w-14 h-14 bg-[#F9B222] rounded-2xl flex items-center justify-center shrink-0 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border-[3px] border-[rgba(255,255,255,0.1)]">
               <span className="text-[#0C3068] font-black text-[22px] tracking-tighter mt-1">TSP</span>
            </div>`;

const replacement = `<div className="text-right">
              <h1 className="text-[26px] font-black tracking-tight mb-1">طیوران صنعت پویا</h1>
              <div className="h-[2px] w-full bg-[#F9B222] opacity-50 mb-1 rounded-full"></div>
              <p className="text-[12px] font-light opacity-90 tracking-wider">تجهیز و راه‌اندازی سالن‌های مرغداری</p>
            </div>
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
               <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>`;

content = content.split(target).join(replacement);
fs.writeFileSync('src/App.tsx', content);
