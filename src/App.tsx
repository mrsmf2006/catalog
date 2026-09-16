import React, { useEffect, useState } from 'react';
import { Settings, CheckCircle2, Factory, Bird, Building2, Package, Download, Phone, Lightbulb } from 'lucide-react';
import { products } from './data';
import { Product } from './types';

const CoverPage: React.FC = () => {
  return (
    <div 
      className="catalog-page-shell relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: 'var(--page-mb, 2rem)'
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
        <div className="absolute inset-0 w-full h-full">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Cover Background" className="w-full h-full object-cover mix-blend-overlay opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C3068] via-[#0C3068]/95 to-[#051838] mix-blend-multiply"></div>
        </div>

        {/* Artistic geometric elements */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#F9B222] to-transparent rounded-bl-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#F9B222] to-transparent rounded-tr-full opacity-10 blur-3xl"></div>
        
        {/* Dynamic mesh pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Gold accent line */}
        <div className="absolute top-0 right-12 w-1 h-full bg-gradient-to-b from-transparent via-[#F9B222]/50 to-transparent"></div>
        <div className="absolute top-0 right-16 w-[1px] h-full bg-gradient-to-b from-transparent via-[#F9B222]/20 to-transparent"></div>
        
        {/* Decorative corner */}
        <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-[#F9B222]/40 rounded-tl-3xl"></div>
        <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-[#F9B222]/40 rounded-br-3xl"></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-20">
          {/* Main content container with glassmorphism */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[48px] p-16 flex flex-col items-center w-full max-w-[600px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Inner glow */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-1000 group-hover:opacity-100"></div>
            
            <div className="w-48 h-48 flex items-center justify-center mb-12 relative">
              <div className="absolute inset-0 bg-[#F9B222]/10 rounded-full blur-2xl"></div>
              <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_25px_rgba(249,178,34,0.4)]" />
            </div>
            
            <h1 className="text-[#FFFFFF] text-[64px] font-black tracking-tight mb-2 drop-shadow-lg text-center leading-tight">
              کاتالوگ جامع محصولات
            </h1>
            
            <div className="w-16 h-1.5 bg-[#F9B222] rounded-full my-8 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1/2 h-full bg-white/50 animate-pulse"></div>
            </div>
            
            <h2 className="text-[#F9B222] text-[32px] font-black tracking-wide drop-shadow-md">
              طیوران صنعت پویا
            </h2>
            <p className="text-[#E5E7EB] text-[18px] font-medium mt-4 tracking-wider opacity-90 text-center">
              پیشگام در تجهیز و راه‌اندازی سالن‌های مرغداری و صنعتی
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 w-full flex items-center justify-between px-20">
           <div className="flex gap-2">
             {Array.from({length: 3}).map((_, i) => (
               <div key={i} className="w-2 h-2 bg-[#F9B222] rounded-full opacity-60"></div>
             ))}
           </div>
           <span className="text-[#FFFFFF] font-medium tracking-[0.4em] text-[16px] opacity-70" dir="ltr">
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
      className="catalog-page-shell relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: 'var(--page-mb, 2rem)'
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
        <div className="absolute top-0 left-0 w-[140px] h-[130px] bg-[#0C3068] rounded-br-[60px] z-10 flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="w-[85px] h-[85px] flex items-center justify-center shrink-0 pb-2 pr-2">
             <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        </div>

        <div className="pt-[150px] px-16 flex flex-col">
          <div className="flex items-center gap-4 mb-6 justify-end flex-row-reverse">
             <h2 className="text-[#0C3068] text-[36px] font-black">درباره شرکت</h2>
             <div className="w-12 h-1.5 bg-[#F9B222] rounded-full"></div>
          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-8 items-start">
            <div className="space-y-3 text-[#374151] leading-[1.95] font-medium text-[13px]" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              <p>
                <span className="font-black text-[#0C3068]">طیوران صنعت پویا</span> با بیش از نیم قرن تجربه در صنعت دام، طیور و آبزیان، به‌عنوان مشاور، طراح و مجری پروژه‌های صنعتی، بیش از ۲۰۰ پروژه ملی و بین‌المللی را در کارنامه خود دارد.
              </p>
              <p>
                از طراحی و ساخت سازه‌های سبک و باکیفیت و سالن‌های مرغداری در سراسر کشور، تا تجهیز و راه‌اندازی کامل پروژه‌ها؛ از تولید و تأمین تجهیزات تخصصی مرغداری، تا طراحی و تولید ماشین‌آلات صنعتی با برند <span className="font-black text-[#0C3068]">IMACHINE</span> در صنعت خوراک.
              </p>
              <p>
                در کنار این تجربه صنعتی، توسعه فناوری‌های اختصاصی نیز بخشی از مسیر ماست؛ از جمله دانخوری پروانه‌ای پویا، به‌عنوان فناوری اختصاصی و انحصاری این مجموعه. امروز با تکیه بر تحقیق و توسعه، همکاری با مجموعه‌های فناور و دانش‌بنیان، و تفاهم‌نامه‌های همکاری با دانشگاه‌هایی همچون دانشگاه منابع طبیعی گلستان، در مسیر به‌کارگیری فناوری‌های نوین و ظرفیت‌های علمی کشور، از جمله هوش مصنوعی و تحلیل داده در صنعت طیور حرکت می‌کنیم.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0C3068] p-4 rounded-[24px] flex flex-col items-center justify-center text-center text-white shadow-lg h-[138px]">
                <Building2 size={28} className="text-[#F9B222] mb-2" />
                <span className="font-black text-[16px]">نیم قرن تجربه</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">صنعت دام، طیور و آبزیان</span>
              </div>
              <div className="bg-[#EAEAEA] p-4 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[138px]">
                <CheckCircle2 size={28} className="text-[#0C3068] mb-2" />
                <span className="font-black text-[16px]">۲۰۰+ پروژه</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">ملی و بین‌المللی</span>
              </div>
              <div className="bg-[#EAEAEA] p-4 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[138px]">
                <Lightbulb size={28} className="text-[#0C3068] mb-2" />
                <span className="font-black text-[15px] leading-tight">فناوری اختصاصی</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">دانخوری پروانه‌ای پویا</span>
              </div>
              <div className="bg-[#F9B222] p-4 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[138px]">
                <Factory size={28} className="text-[#0C3068] mb-2" />
                <span className="font-black text-[16px]">تجهیز کامل</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">سالن، تجهیزات و ماشین‌آلات</span>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full flex gap-4">
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
                   <span className="text-gray-600 text-[12px] truncate">دانشگاه منابع طبیعی گلستان</span>
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
             </div>
             
             <div className="w-[30%] bg-[#0C3068] rounded-[24px] p-6 shadow-lg text-white flex flex-col justify-center gap-3">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                     <Phone size={18} className="text-[#F9B222]" />
                     <span className="text-[13px] opacity-80">تلفن:</span>
                  </div>
                  <span className="font-bold tracking-widest text-[16px] text-left" dir="ltr">۰۵۱ ۳۶۶۶ ۵۶۰۰</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                     <Phone size={18} className="text-[#F9B222]" />
                     <span className="text-[13px] opacity-80">همراه:</span>
                  </div>
                  <span className="font-bold tracking-widest text-[16px] text-left" dir="ltr">+۹۸ ۹۱۵ ۱۱۲ ۶۲۵۸</span>
                </div>
                <div className="w-full h-[1px] bg-white/20"></div>
                <div className="flex items-center justify-center">
                  <span className="font-bold tracking-widest text-[14px]" dir="ltr">info@toyooran.com</span>
                </div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-transparent flex justify-between items-end z-20">
          <div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
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
      className="catalog-page-shell relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: 'var(--page-mb, 2rem)'
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
        <div className="absolute top-0 left-0 w-[140px] h-[130px] bg-[#0C3068] rounded-br-[60px] z-10 flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="w-[85px] h-[85px] flex items-center justify-center shrink-0 pb-2 pr-2">
             <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        </div>

        <div className="pt-[180px] px-16 flex flex-col h-[1063px]">
          <div className="flex items-center gap-4 mb-10 shrink-0 justify-start">
             <h2 className="text-[#0C3068] text-[36px] font-black">فهرست محصولات</h2>
             <div className="w-12 h-1.5 bg-[#F9B222] rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-4 content-start overflow-hidden pb-4">
             {items.map((item, idx) => (
                <button 
                   onClick={() => {
                     document.getElementById(`page-${3 + totalTocPages + startIndex + idx}`)?.scrollIntoView({ behavior: 'smooth' });
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
                </button>
             ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-transparent flex justify-between items-end z-20">
          <div className="w-[35%] h-[60px] bg-[#383838] rounded-tl-[60px] flex items-center pl-12 pr-20 relative">
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
      id={`page-${pageNum}`}
      className="catalog-page-shell relative mx-auto shrink-0 print:block print:w-auto print:h-auto print:m-0"
      style={{
        width: 'calc(794px * var(--page-scale, 1))',
        height: 'calc(1123px * var(--page-scale, 1))',
        marginBottom: 'var(--page-mb, 2rem)'
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
        <div className="absolute top-0 left-0 w-[140px] h-[130px] bg-[#0C3068] rounded-br-[60px] z-10 flex items-center justify-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="w-[85px] h-[85px] flex items-center justify-center shrink-0 pb-2 pr-2">
             <img src="/tspk-logo.svg" alt="TSP Logo" className="w-full h-full object-contain drop-shadow-md" />
          </div>
        </div>

        {/* Main Content Area (Starting below header) */}
        <div className="pt-[140px] px-12 relative z-0 flex flex-col items-center">
          
          {/* Image Container */}
          <div className="w-full h-[320px] rounded-[32px] relative flex items-center justify-center mt-2 shadow-sm border border-gray-100 overflow-hidden bg-white shrink-0">
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
                  <h2 className="text-[28px] font-black text-[#FFFFFF] drop-shadow-md leading-tight text-right w-full pr-6 line-clamp-2">{product.title}</h2>
               </div>
            </div>
          </div>
        </div>

        {/* Texts Section */}
        <div className="mt-[45px] px-14 flex-1">
          {/* Product Introduction */}
          <div className="mb-5">
            <div className="flex items-center gap-3 mb-4 justify-end flex-row-reverse">
              <h3 className="text-[#0C3068] text-[22px] font-black">معرفی محصول</h3>
              <div className="w-12 h-1 bg-[#F9B222] rounded-full"></div>
            </div>
            <p className="text-[#374151] leading-[1.95] text-right font-medium text-[13.5px]">
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
              <div className="space-y-3">
                {product.features.slice(0, 5).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#F9B222] shrink-0 mt-0.5" size={22} strokeWidth={2.5} />
                    <span className="text-[#1F2937] font-bold text-[13.5px] leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Column: Applications Box */}
            <div className="bg-[#EAEAEA] rounded-[24px] p-5 pb-5 relative">
              <h4 className="text-[#0C3068] text-[20px] font-black mb-4 text-center">کاربردها</h4>
              <div className="space-y-0 px-2 relative z-10">
                {product.applications.slice(0, 5).map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-3 border-b border-[rgba(209,213,219,0.3)] last:border-0">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      {getIcon(app.icon)}
                    </div>
                    <span className="text-[#1F2937] font-bold text-[13.5px] leading-snug">{app.label}</span>
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
               <div className="grid grid-cols-6 gap-2 opacity-30 mt-1">
                 {Array.from({length: 18}).map((_, i) => (
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
    const isPrint = new URLSearchParams(window.location.search).has('print')
      || window.matchMedia('print').matches;

    const handleResize = () => {
      if (isPrint) {
        document.documentElement.style.setProperty('--page-scale', '1');
        return;
      }
      const padding = window.innerWidth < 640 ? 24 : 64;
      const availableWidth = window.innerWidth - padding;
      const targetWidth = 794;
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
        <a 
          href="/catalog.pdf"
          download="catalog-toyooran.pdf"
          id="download-btn"
          onClick={async (event) => {
            event.preventDefault();
            try {
              const response = await fetch('/catalog.pdf');
              if (!response.ok) throw new Error('pdf missing');
              const blob = await response.blob();
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'catalog-toyooran.pdf';
              document.body.appendChild(link);
              link.click();
              link.remove();
              URL.revokeObjectURL(url);
            } catch {
              window.location.href = '/catalog.pdf';
            }
          }}
          className="flex items-center gap-2 px-6 py-4 bg-[#0C3068] text-[#FFFFFF] rounded-full shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all hover:bg-[#0a2550] hover:-translate-y-1"
        >
          <Download size={22} />
          <span className="font-bold text-lg hidden sm:inline">دانلود PDF آفلاین</span>
        </a>
        
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
        
        
        {/* Dynamic TOC Pagination */}
        {(() => {
          const tocChunks = [];
          let currentChunk = [];
          let currentWeight = 0;
          // Grid rows stretch to the tallest item in the row.
          // Use available height (680px) to determine when to paginate.
          // If the grid row exceeds this height, push chunk.
          const MAX_HEIGHT_PER_PAGE = 660; 
          let currentHeight = 0;
          
          for (let i = 0; i < products.length; i += 2) {
             const leftItem = products[i];
             const rightItem = products[i + 1];
             
             const leftLines = leftItem ? (leftItem.title.length > 32 ? 2 : 1) : 0;
             const rightLines = rightItem ? (rightItem.title.length > 32 ? 2 : 1) : 0;
             const maxLines = Math.max(leftLines, rightLines);
             
             // A 1-line row is ~52px, a 2-line row is ~76px
             const rowHeight = maxLines === 2 ? 80 : 52;

             if (currentHeight + rowHeight > MAX_HEIGHT_PER_PAGE && currentChunk.length > 0) {
               tocChunks.push(currentChunk);
               currentChunk = [];
               currentHeight = 0;
             }
             
             if (leftItem) currentChunk.push(leftItem);
             if (rightItem) currentChunk.push(rightItem);
             currentHeight += rowHeight;
          }
          if (currentChunk.length > 0) {
            tocChunks.push(currentChunk);
          }

          let currentStartIndex = 0;
          return tocChunks.map((chunk, index) => {
            const startIndex = currentStartIndex;
            currentStartIndex += chunk.length;
            
            return (
              <TocPage 
                key={`toc-${index}`} 
                items={chunk} 
                startIndex={startIndex} 
                pageNum={index + 3} 
                totalTocPages={tocChunks.length}
              />
            );
          });
        })()}

        {/* Catalog Pages */
        (() => {
          // Calculate TOC pages exactly like above to get the correct offset
          let totalTocPages = 1;
          let currentWeight = 0;
          const MAX_HEIGHT_PER_PAGE = 660;
          let currentHeight = 0;
          for (let i = 0; i < products.length; i += 2) {
             const leftItem = products[i];
             const rightItem = products[i + 1];
             const leftLines = leftItem ? (leftItem.title.length > 32 ? 2 : 1) : 0;
             const rightLines = rightItem ? (rightItem.title.length > 32 ? 2 : 1) : 0;
             const maxLines = Math.max(leftLines, rightLines);
             const rowHeight = maxLines === 2 ? 80 : 52;
             
             if (currentHeight + rowHeight > MAX_HEIGHT_PER_PAGE && currentHeight > 0) {
               totalTocPages++;
               currentHeight = 0;
             }
             currentHeight += rowHeight;
          }
          
          return products.map((product, index) => (
            <CatalogPage key={product.id} product={product} pageNum={3 + totalTocPages - 1 + index} />
          ));
        })()}
      </div>
      
    </div>
  );
}
