const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const targetAddresses = `<div className="mt-8 w-full flex gap-4">
             {/* Contact and address footer inside about page */}
             <div className="flex-1 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                   <Phone size={20} className="text-[#0C3068]" />
                   <span className="font-bold text-[#0C3068]">دفتر مرکزی:</span>
                   <span className="text-gray-600 text-[13px]">مشهد، میدان مادر، مجتمع تجاری ادیب، طبقه ۳، واحد ۴۰۶</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                   <Building2 size={20} className="text-[#0C3068]" />
                   <span className="font-bold text-[#0C3068]">دفتر تحقیق و توسعه:</span>
                   <span className="text-gray-600 text-[13px]">گرگان، دانشگاه منابع طبیعی گلستان، ساختمان همکاری‌های بین‌الملل</span>
                </div>
                <div className="flex items-center gap-3">
                   <Factory size={20} className="text-[#0C3068]" />
                   <span className="font-bold text-[#0C3068]">کارخانه:</span>
                   <span className="text-gray-600 text-[13px]">مشهد، بلوار میثاق</span>
                </div>
             </div>`;

const replaceAddresses = `<div className="mt-8 w-full flex gap-4">
             {/* Contact and address footer inside about page */}
             <div className="flex-1 bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                   <Phone size={18} className="text-[#0C3068] shrink-0" />
                   <span className="font-bold text-[#0C3068] shrink-0 text-[14px]">دفتر مرکزی:</span>
                   <span className="text-gray-600 text-[12px] truncate">مشهد، میدان مادر، مجتمع تجاری ادیب، طبقه ۳، واحد ۴۰۶</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                   <Building2 size={18} className="text-[#0C3068] shrink-0" />
                   <span className="font-bold text-[#0C3068] shrink-0 text-[14px]">دفتر تحقیق و توسعه:</span>
                   <span className="text-gray-600 text-[12px] truncate">گرگان، دانشگاه منابع طبیعی گلستان، ساختمان همکاری‌های بین‌الملل</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                   <Building2 size={18} className="text-[#0C3068] shrink-0" />
                   <span className="font-bold text-[#0C3068] shrink-0 text-[14px]">دفتر بازرگانی:</span>
                   <span className="text-gray-600 text-[12px] truncate">گرگان، کارخانه نوآوری</span>
                </div>
                <div className="flex items-center gap-3">
                   <Factory size={18} className="text-[#0C3068] shrink-0" />
                   <span className="font-bold text-[#0C3068] shrink-0 text-[14px]">کارخانه:</span>
                   <span className="text-gray-600 text-[12px] truncate">مشهد، بلوار میثاق</span>
                </div>
             </div>`;

const targetText = `<div className="space-y-4 text-[#374151] leading-[2.1] text-justify font-medium text-[14px]">
              <p>`;

const replaceText = `<div className="space-y-4 text-[#374151] leading-[2.1] font-medium text-[14px]" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>`;

content = content.replace(targetAddresses, replaceAddresses);
content = content.replace(targetText, replaceText);

// Also add justify to the other paragraphs to be safe
content = content.replace(
  /<p>\n                ما با افتخار/g, 
  '<p style={{ textAlign: \'justify\', textJustify: \'inter-word\' }}>\n                ما با افتخار'
);
content = content.replace(
  /<p>\n                <span className="font-black text-\[#0C3068\]">خدمات/g, 
  '<p style={{ textAlign: \'justify\', textJustify: \'inter-word\' }}>\n                <span className="font-black text-[#0C3068]">خدمات'
);

fs.writeFileSync('src/App.tsx', content);
