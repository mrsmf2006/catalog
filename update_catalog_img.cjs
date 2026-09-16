const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `{/* Gray Image Container */}
          <div className="w-full h-[320px] bg-[#E8E9EB] rounded-[30px] relative flex items-center justify-center mt-2">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-contain rounded-[30px]" />
            ) : (
              <div className="text-[#D1D5DB]">
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            )}

            {/* Blue Title Banner Overlapping Bottom */}
            <div className="absolute -bottom-8 left-10 right-10 h-[100px] bg-[#0C3068] rounded-[24px] flex items-center justify-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <div className="text-center w-full px-16 flex items-center justify-center h-full">
                <h2 className="text-[30px] font-black text-[#FFFFFF] drop-shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] leading-tight">{product.title}</h2>
              </div>
              
              {/* Yellow Gear Icon on the Right Edge */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#F9B222] rounded-[20px] flex items-center justify-center border-[4px] border-[#F5F6F8] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <Settings size={32} className="text-[#0C3068]" strokeWidth={2} />
              </div>
            </div>
          </div>`;

const replacement = `{/* Image Container */}
          <div className="w-full h-[340px] rounded-[32px] relative flex items-center justify-center mt-4 shadow-sm border border-gray-100 overflow-hidden bg-white">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-[#D1D5DB] bg-gray-50 w-full h-full flex items-center justify-center">
                <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            )}

            {/* Enhanced Gradient Overlay for Title */}
            <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[#0C3068]/95 via-[#0C3068]/70 to-transparent flex items-end justify-center pb-6">
               <div className="text-center px-12 relative z-10 w-full flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#F9B222] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                    <Settings size={26} className="text-[#0C3068]" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-[34px] font-black text-[#FFFFFF] drop-shadow-md leading-tight text-right w-full pr-6">{product.title}</h2>
               </div>
            </div>
          </div>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/App.tsx', content);
