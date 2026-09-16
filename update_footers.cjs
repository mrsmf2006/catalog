const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Let's fix AboutPage footer to include pageNum=2
const aboutFooterTarget = `<div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
             <div className="flex items-center gap-6 w-full justify-end">
               <div className="grid grid-cols-4 gap-2 opacity-30 mt-1">
                 {Array.from({length: 12}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>
            </div>
          </div>`;

const aboutFooterReplacement = `<div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
             <div className="absolute bottom-2.5 right-6 w-10 h-10 bg-[#F9B222] rounded-lg flex items-center justify-center text-[20px] font-black text-[#0C3068] pt-1 px-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
               {(2).toLocaleString('fa-IR')}
             </div>
             <div className="flex items-center gap-6 w-full justify-end">
               <div className="grid grid-cols-6 gap-2 opacity-30 mt-1">
                 {Array.from({length: 18}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>
            </div>
          </div>`;
content = content.replace(aboutFooterTarget, aboutFooterReplacement);

// 2. Let's fix TocPage footer to include pageNum
const tocFooterTarget = `<div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
             <div className="flex items-center gap-6 w-full justify-end">
               <div className="grid grid-cols-4 gap-2 opacity-30 mt-1">
                 {Array.from({length: 12}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>
            </div>
          </div>`;

const tocFooterReplacement = `<div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
             <div className="absolute bottom-2.5 right-6 w-10 h-10 bg-[#F9B222] rounded-lg flex items-center justify-center text-[20px] font-black text-[#0C3068] pt-1 px-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
               {pageNum.toLocaleString('fa-IR')}
             </div>
             <div className="flex items-center gap-6 w-full justify-end">
               <div className="grid grid-cols-6 gap-2 opacity-30 mt-1">
                 {Array.from({length: 18}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>
            </div>
          </div>`;
content = content.replace(tocFooterTarget, tocFooterReplacement);

// 3. Let's fix CatalogPage footer dots
const catalogFooterTarget = `<div className="grid grid-cols-4 gap-2 opacity-30 mt-1">
                 {Array.from({length: 12}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>`;

const catalogFooterReplacement = `<div className="grid grid-cols-6 gap-2 opacity-30 mt-1">
                 {Array.from({length: 18}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>`;
content = content.replace(catalogFooterTarget, catalogFooterReplacement);

// 4. Update the App.tsx page numbering logic
const renderTarget = `{Array.from({ length: Math.ceil(products.length / 32) }).map((_, index) => (
          <TocPage 
            key={\`toc-\${index}\`} 
            items={products.slice(index * 32, (index + 1) * 32)} 
            startIndex={index * 32} 
            pageNum={index + 1}
            totalTocPages={Math.ceil(products.length / 32)}
          />
        ))}

        {products.map((product, index) => (
          <CatalogPage key={product.id} product={product} pageNum={1 + index} />
        ))}`;

const renderReplacement = `{Array.from({ length: Math.ceil(products.length / 32) }).map((_, index) => (
          <TocPage 
            key={\`toc-\${index}\`} 
            items={products.slice(index * 32, (index + 1) * 32)} 
            startIndex={index * 32} 
            pageNum={index + 3} // Cover=1, About=2, Toc starts at 3
            totalTocPages={Math.ceil(products.length / 32)}
          />
        ))}

        {products.map((product, index) => (
          <CatalogPage key={product.id} product={product} pageNum={3 + Math.ceil(products.length / 32) + index} />
        ))}`;
content = content.replace(renderTarget, renderReplacement);


fs.writeFileSync('src/App.tsx', content);
