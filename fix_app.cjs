const fs = require('fs');

const appTsxContent = `import React, { useEffect, useState } from 'react';
import { Settings, CheckCircle2, Factory, Bird, Building2, Package, Download, Phone, Loader2 } from 'lucide-react';
import { products } from './data';
import { Product } from './types';

const CoverPage: React.FC = () => {
  return (
    <div 
      className="relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: '2rem'
      }}
    >
      <div 
        className="catalog-page-container w-[794px] h-[1123px] bg-[#0C3068] absolute top-0 right-0 print:static print:w-[210mm] print:h-[297mm] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] print:shadow-none overflow-hidden text-right font-sans page-break-after-always flex flex-col items-center justify-center" 
        dir="rtl"
        style={{
          transform: 'scale(var(--page-scale, 1))',
          transformOrigin: 'top right',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[400px] bg-[#F9B222] rounded-br-[400px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFFFFF] rounded-tl-[600px] opacity-5"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-40 h-40 flex items-center justify-center mb-10">
            <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(249,178,34,0.3)]" />
          </div>
          
          <h1 className="text-[#FFFFFF] text-[70px] font-black tracking-tight mb-6 drop-shadow-lg text-center leading-tight">
            کاتالوگ جامع<br/>محصولات
          </h1>
          <div className="w-32 h-2 bg-[#F9B222] rounded-full mb-8"></div>
          <h2 className="text-[#F9B222] text-[36px] font-black tracking-wide">
            طیوران صنعت پویا
          </h2>
          <p className="text-[#E5E7EB] text-[20px] font-light mt-4 tracking-wider">
            پیشگام در تجهیز و راه‌اندازی سالن‌های مرغداری و صنعتی
          </p>
        </div>

        <div className="absolute bottom-12 left-0 w-full flex justify-center">
           <span className="text-[#FFFFFF] font-bold tracking-[0.3em] text-[18px] opacity-80" dir="ltr">
             WWW.TOYOORAN.COM
           </span>
        </div>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div 
      className="relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: '2rem'
      }}
    >
      <div 
        className="catalog-page-container w-[794px] h-[1123px] bg-[#F5F6F8] absolute top-0 right-0 print:static print:w-[210mm] print:h-[297mm] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] print:shadow-none overflow-hidden text-right font-sans page-break-after-always" 
        dir="rtl"
        style={{
          transform: 'scale(var(--page-scale, 1))',
          transformOrigin: 'top right',
        }}
      >
        <div className="absolute top-0 left-0 w-[55%] h-[140px] bg-[#0C3068] rounded-br-[100px] z-10 flex flex-col justify-center px-16 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-5 text-[#FFFFFF] rtl:flex-row-reverse w-fit ml-auto">
            <div className="text-right">
              <h1 className="text-[26px] font-black tracking-tight mb-1">طیوران صنعت پویا</h1>
              <div className="h-[2px] w-full bg-[#F9B222] opacity-50 mb-1 rounded-full"></div>
              <p className="text-[12px] font-light opacity-90 tracking-wider">تجهیز و راه‌اندازی سالن‌های مرغداری</p>
            </div>
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
               <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>
        </div>

        <div className="pt-[190px] px-16 flex flex-col">
          <div className="flex items-center gap-4 mb-8 justify-end flex-row-reverse">
             <h2 className="text-[#0C3068] text-[36px] font-black">درباره شرکت</h2>
             <div className="w-12 h-1.5 bg-[#F9B222] rounded-full"></div>
          </div>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-5 text-[#374151] leading-[2.1] text-justify font-medium text-[15px]">
              <p>
                شرکت <span className="font-black text-[#0C3068]">طیوران صنعت پویا</span> با سال‌ها تجربه درخشان در زمینه طراحی، تولید و تجهیز سالن‌های مرغداری و گلخانه‌های صنعتی، به عنوان یکی از پیشگامان این صنعت در کشور شناخته می‌شود.
              </p>
              <p>
                هدف اصلی ما ارائه محصولات با بالاترین استانداردهای کیفیت و بهره‌گیری از تکنولوژی‌های روز دنیا برای افزایش بهره‌وری و کاهش هزینه‌های تولید مشتریان عزیزمان است. ما معتقدیم که موفقیت ما در گرو موفقیت و رضایت مشتریانمان است.
              </p>
              <p>
                تیم مهندسی و تحقیق و توسعه ما همواره در حال بررسی و بومی‌سازی جدیدترین نوآوری‌های جهانی است تا محصولاتی سازگار با شرایط اقلیمی و نیازهای خاص پرورش‌دهندگان داخلی ارائه نماید. پشتیبانی ۲۴ ساعته از مهم‌ترین نقاط قوت ماست.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0C3068] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-white shadow-lg h-[150px]">
                <Factory size={32} className="text-[#F9B222] mb-3" />
                <span className="font-black text-[18px]">تولید ملی</span>
                <span className="text-[11px] opacity-80 mt-1">افتخار ساخت ایران</span>
              </div>
              <div className="bg-[#EAEAEA] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[150px]">
                <CheckCircle2 size={32} className="text-[#0C3068] mb-3" />
                <span className="font-black text-[18px]">کیفیت برتر</span>
                <span className="text-[11px] opacity-80 mt-1">استانداردهای جهانی</span>
              </div>
              <div className="bg-[#EAEAEA] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[150px]">
                <Phone size={32} className="text-[#0C3068] mb-3" />
                <span className="font-black text-[18px]">پشتیبانی</span>
                <span className="text-[11px] opacity-80 mt-1">۲۴ ساعته و مستمر</span>
              </div>
              <div className="bg-[#F9B222] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[150px]">
                <Building2 size={32} className="text-[#0C3068] mb-3" />
                <span className="font-black text-[18px]">پروژه‌ها</span>
                <span className="text-[11px] opacity-80 mt-1">صدها پروژه موفق</span>
              </div>
            </div>
          </div>

          <div className="mt-12 w-full h-[240px] bg-[#0C3068] rounded-[32px] overflow-hidden relative shadow-lg">
             <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Factory" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0C3068] via-transparent to-transparent opacity-80"></div>
             <div className="absolute bottom-6 right-8 text-white">
               <h3 className="text-[24px] font-black tracking-wide">توسعه پایدار صنعتی</h3>
               <p className="text-[14px] opacity-80 mt-1 font-light">تجهیزات مدرن برای نسل آینده تولید</p>
             </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-transparent flex justify-between items-end z-20">
          <div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
             <div className="flex items-center gap-6 w-full justify-end">
               <div className="grid grid-cols-4 gap-2 opacity-30 mt-1">
                 {Array.from({length: 12}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>
            </div>
          </div>
          <div className="pb-4 px-12">
            <span className="text-[#6B7280] font-bold tracking-widest text-[14px]" dir="ltr">
              www.toyooran.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TocPage: React.FC<{ items: Product[], startIndex: number, pageNum: number, totalTocPages: number }> = ({ items, startIndex, pageNum, totalTocPages }) => {
  return (
    <div 
      className="relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: '2rem'
      }}
    >
      <div 
        className="catalog-page-container w-[794px] h-[1123px] bg-[#F5F6F8] absolute top-0 right-0 print:static print:w-[210mm] print:h-[297mm] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] print:shadow-none overflow-hidden text-right font-sans page-break-after-always" 
        dir="rtl"
        style={{
          transform: 'scale(var(--page-scale, 1))',
          transformOrigin: 'top right',
        }}
      >
        <div className="absolute top-0 left-0 w-[55%] h-[140px] bg-[#0C3068] rounded-br-[100px] z-10 flex flex-col justify-center px-16 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-5 text-[#FFFFFF] rtl:flex-row-reverse w-fit ml-auto">
            <div className="text-right">
              <h1 className="text-[26px] font-black tracking-tight mb-1">طیوران صنعت پویا</h1>
              <div className="h-[2px] w-full bg-[#F9B222] opacity-50 mb-1 rounded-full"></div>
              <p className="text-[12px] font-light opacity-90 tracking-wider">تجهیز و راه‌اندازی سالن‌های مرغداری</p>
            </div>
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
               <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>
        </div>

        <div className="pt-[180px] px-16 flex flex-col h-[1063px]">
          <div className="flex items-center gap-4 mb-10 justify-end flex-row-reverse shrink-0">
             <h2 className="text-[#0C3068] text-[36px] font-black">فهرست محصولات</h2>
             <div className="w-12 h-1.5 bg-[#F9B222] rounded-full"></div>
             {totalTocPages > 1 && (
                <span className="text-[#6B7280] font-bold text-[16px] mr-auto mt-2">
                  (صفحه {pageNum} از {totalTocPages})
                </span>
             )}
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-3 content-start overflow-hidden pb-4">
             {items.map((item, idx) => (
                <button 
                   onClick={() => {
                     document.getElementById(\`page-\${startIndex + idx + 1}\`)?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   key={item.id} 
                   className="flex items-center justify-between border-b border-[#D1D5DB] border-dashed pb-1 hover:bg-black/5 transition-colors rounded-sm px-1 -mx-1 cursor-pointer w-full text-right"
                >
                   <div className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded bg-[#EAEAEA] text-[#0C3068] flex items-center justify-center text-[12px] font-black shrink-0">
                       {startIndex + idx + 1}
                     </div>
                     <span className="font-bold text-[14px] text-[#1F2937] truncate max-w-[210px]" title={item.title}>
                       {item.title}
                     </span>
                   </div>
                   <span className="font-black text-[#0C3068] text-[15px] shrink-0">
                     {(startIndex + idx + 1).toLocaleString('fa-IR')}
                   </span>
                </button>
             ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-transparent flex justify-between items-end z-20">
          <div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
             <div className="flex items-center gap-6 w-full justify-end">
               <div className="grid grid-cols-4 gap-2 opacity-30 mt-1">
                 {Array.from({length: 12}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>
            </div>
          </div>
          <div className="pb-4 px-12">
            <span className="text-[#6B7280] font-bold tracking-widest text-[14px]" dir="ltr">
              www.toyooran.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CatalogPage: React.FC<{ product: Product, pageNum: number }> = ({ product, pageNum }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'factory': return <Factory className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      case 'bird': return <Bird className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      case 'building': return <Building2 className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
      default: return <Package className="text-[#4B5563]" size={26} strokeWidth={1.5} />;
    }
  };

  return (
    <div 
      id={\`page-\${pageNum}\`}
      className="relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: '2rem'
      }}
    >
      <div 
        className="catalog-page-container w-[794px] h-[1123px] bg-[#F5F6F8] absolute top-0 right-0 print:static print:w-[210mm] print:h-[297mm] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] print:shadow-none overflow-hidden text-right font-sans page-break-after-always" 
        dir="rtl"
        style={{
          transform: 'scale(var(--page-scale, 1))',
          transformOrigin: 'top right',
        }}
      >
        
        {/* Top Left Header Shape - Dark Blue Sweep */}
        <div className="absolute top-0 left-0 w-[55%] h-[140px] bg-[#0C3068] rounded-br-[100px] z-10 flex flex-col justify-center px-16 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-5 text-[#FFFFFF] rtl:flex-row-reverse w-fit ml-auto">
            <div className="text-right">
              <h1 className="text-[26px] font-black tracking-tight mb-1">طیوران صنعت پویا</h1>
              <div className="h-[2px] w-full bg-[#F9B222] opacity-50 mb-1 rounded-full"></div>
              <p className="text-[12px] font-light opacity-90 tracking-wider">تجهیز و راه‌اندازی سالن‌های مرغداری</p>
            </div>
            <div className="w-16 h-16 flex items-center justify-center shrink-0">
               <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>
        </div>

        {/* Main Content Area (Starting below header) */}
        <div className="pt-[160px] px-12 relative z-0 flex flex-col items-center">
          
          {/* Gray Image Container */}
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
          </div>
        </div>

        {/* Texts Section */}
        <div className="mt-[70px] px-14 flex-1">
          {/* Product Introduction */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 justify-end flex-row-reverse">
              <h3 className="text-[#0C3068] text-[22px] font-black">معرفی محصول</h3>
              <div className="w-12 h-1 bg-[#F9B222] rounded-full"></div>
            </div>
            <p className="text-[#374151] leading-[2.4] text-right font-medium text-[16px]">
              {product.description}
            </p>
          </div>

          {/* Features & Applications Grid */}
          <div className="grid grid-cols-[1fr_320px] gap-12 items-start">
            
            {/* Right Column: Features */}
            <div>
              <div className="flex items-center gap-3 mb-6 justify-end flex-row-reverse">
                <h4 className="text-[#0C3068] text-[22px] font-black">ویژگی‌های کلیدی</h4>
                <div className="w-12 h-1 bg-[#F9B222] rounded-full"></div>
              </div>
              <div className="space-y-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#F9B222] shrink-0" size={24} strokeWidth={2.5} />
                    <span className="text-[#1F2937] font-bold text-[16px]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Column: Applications Box */}
            <div className="bg-[#EAEAEA] rounded-[24px] p-6 pb-6 relative">
              <h4 className="text-[#0C3068] text-[20px] font-black mb-4 text-center">کاربردها</h4>
              <div className="space-y-0 px-2 relative z-10">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-3 border-b border-[rgba(209,213,219,0.3)] last:border-0">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      {getIcon(app.icon)}
                    </div>
                    <span className="text-[#1F2937] font-bold text-[14px] leading-tight">{app.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-transparent flex justify-between items-end z-20">
          
          {/* Dark Bottom Right Shape */}
          <div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
            {/* Page Number (Moved to bottom right corner) */}
            <div className="absolute bottom-2.5 right-6 w-10 h-10 bg-[#F9B222] rounded-lg flex items-center justify-center text-[20px] font-black text-[#0C3068] pt-1 px-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
              {pageNum.toLocaleString('fa-IR')}
            </div>

            <div className="flex items-center gap-6 w-full justify-end">
               {/* Dots */}
               <div className="grid grid-cols-4 gap-2 opacity-30 mt-1">
                 {Array.from({length: 12}).map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full" />
                 ))}
               </div>
            </div>
          </div>

          {/* Website URL */}
          <div className="pb-4 px-12">
            <span className="text-[#6B7280] font-bold tracking-widest text-[14px]" dir="ltr">
              www.toyooran.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  useEffect(() => {
    const handleResize = () => {
      const padding = window.innerWidth < 640 ? 24 : 64;
      const availableWidth = window.innerWidth - padding;
      const targetWidth = 794; // A4 layout width in px
      let newScale = 1;
      
      if (availableWidth < targetWidth) {
        newScale = availableWidth / targetWidth;
      }
      
      document.documentElement.style.setProperty('--page-scale', newScale.toString());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#E5E7EB] py-6 md:py-10 print:py-0 print:bg-[#FFFFFF] flex flex-col items-center overflow-x-hidden">
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden flex items-center gap-4 flex-row-reverse">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-4 bg-[#0C3068] text-[#FFFFFF] rounded-full shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all hover:bg-[#0a2550] hover:-translate-y-1"
        >
          <Download size={22} />
          <span className="font-bold text-lg">چاپ / دانلود PDF</span>
        </button>

        <a 
          href="https://toyooran.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-4 bg-[#F9B222] text-[#0C3068] rounded-full shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] hover:bg-[#e5a019] transition-all hover:-translate-y-1"
        >
          <Phone size={22} />
          <span className="font-bold text-lg">تماس با ما</span>
        </a>
      </div>

      {/* Catalog Pages */}
      <div id="catalog-content" className="w-full flex flex-col items-center pb-24 print:pb-0 print:block">
        <CoverPage />
        <AboutPage />
        
        {Array.from({ length: Math.ceil(products.length / 32) }).map((_, index) => (
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
        ))}
      </div>
      
    </div>
  );
}
`;

fs.writeFileSync('src/App.tsx', appTsxContent);
