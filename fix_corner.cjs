const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<div className="absolute top-0 left-0 w-[250px] h-[140px] bg-[#0C3068] rounded-br-[100px] z-10 flex flex-col justify-center px-16 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-end text-[#FFFFFF] w-full">
            <div className="w-20 h-20 flex items-center justify-center shrink-0">
               <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>
        </div>`;

const replacement = `<div className="absolute top-0 left-0 w-[140px] h-[130px] bg-[#0C3068] rounded-br-[60px] z-10 flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="w-[85px] h-[85px] flex items-center justify-center shrink-0 pb-2 pr-2">
             <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        </div>`;

content = content.split(target).join(replacement);

fs.writeFileSync('src/App.tsx', content);
