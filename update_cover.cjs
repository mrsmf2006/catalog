const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<div className="absolute top-0 left-0 w-full h-[400px] bg-[#F9B222] rounded-br-[400px] opacity-10"></div>
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
        </div>`;

const replacement = `<div className="absolute inset-0 w-full h-full">
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
        </div>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/App.tsx', content);
