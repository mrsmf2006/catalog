const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<div className="w-[30%] bg-[#0C3068] rounded-[24px] p-6 shadow-lg text-white flex flex-col justify-center gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <Phone size={18} className="text-[#F9B222]" />
                     <span className="text-[13px] opacity-80">تلفن:</span>
                  </div>
                  <span className="font-bold tracking-widest text-[15px]" dir="ltr">051 3666 5600</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <Phone size={18} className="text-[#F9B222]" />
                     <span className="text-[13px] opacity-80">همراه:</span>
                  </div>
                  <span className="font-bold tracking-widest text-[15px]" dir="ltr">0911 511 6258</span>
                </div>
                <div className="w-full h-[1px] bg-white/20 my-1"></div>
                <div className="flex items-center justify-center">
                  <span className="font-bold tracking-widest text-[14px]" dir="ltr">info@toyooran.com</span>
                </div>
             </div>`;

const replacement = `<div className="w-[30%] bg-[#0C3068] rounded-[24px] p-6 shadow-lg text-white flex flex-col justify-center gap-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                     <Phone size={18} className="text-[#F9B222]" />
                     <span className="text-[13px] opacity-80">تلفن:</span>
                  </div>
                  <span className="font-bold tracking-widest text-[16px] text-left" dir="ltr">051 3666 5600</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                     <Phone size={18} className="text-[#F9B222]" />
                     <span className="text-[13px] opacity-80">همراه:</span>
                  </div>
                  <span className="font-bold tracking-widest text-[16px] text-left" dir="ltr">0911 511 6258</span>
                </div>
                <div className="w-full h-[1px] bg-white/20"></div>
                <div className="flex items-center justify-center">
                  <span className="font-bold tracking-widest text-[14px]" dir="ltr">info@toyooran.com</span>
                </div>
             </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/App.tsx', content);
