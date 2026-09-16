const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-center">
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
          </div>`;

const replacement = `<div className="grid grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-4 text-[#374151] leading-[2.1] text-justify font-medium text-[14px]">
              <p>
                شرکت <span className="font-black text-[#0C3068]">طیوران صنعت پویا</span> به عنوان مشاور، طراح و مجری توسعه و بهره‌برداری پروژه‌های صنعتی، با بیش از ۵۰ سال تجربه درخشان در صنعت دام، طیور و آبزیان فعالیت می‌کند.
              </p>
              <p>
                ما با افتخار مجری بیش از ۲۰۰ پروژه ملی و بین‌المللی بوده‌ایم. ما تنها تولیدکننده بشقاب‌های پروانه‌ای تحت لیسانس Butterfly Concepts و تنها دارنده تاییدیه FDA آمریکا در منطقه هستیم و در زمینه تولید تخصصی جت هیتر و تجهیزات گرمایشی پیشگام می‌باشیم.
              </p>
              <p>
                <span className="font-black text-[#0C3068]">خدمات اصلی ما:</span> طراحی، ساخت و تجهیز کامل سوله و کارخانجات، تولید ماشین‌آلات خطوط تولید خوراک، تامین تجهیزات تخصصی مرغداری، تولید انواع خوراک، مکمل، روغن و دارو، و همچنین مشاوره توسعه و افزایش راندمان.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0C3068] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-white shadow-lg h-[150px]">
                <Building2 size={32} className="text-[#F9B222] mb-3" />
                <span className="font-black text-[18px]">نیم قرن تجربه</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">بیش از ۵۰ سال سابقه درخشان</span>
              </div>
              <div className="bg-[#EAEAEA] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[150px]">
                <CheckCircle2 size={32} className="text-[#0C3068] mb-3" />
                <span className="font-black text-[18px]">۲۰۰+ پروژه</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">پروژه‌های موفق ملی و بین‌المللی</span>
              </div>
              <div className="bg-[#EAEAEA] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[150px]">
                <Award size={32} className="text-[#0C3068] mb-3" />
                <span className="font-black text-[18px]">تاییدیه FDA</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">دارنده لیسانس Butterfly آمریکا</span>
              </div>
              <div className="bg-[#F9B222] p-5 rounded-[24px] flex flex-col items-center justify-center text-center text-[#0C3068] shadow-lg h-[150px]">
                <Factory size={32} className="text-[#0C3068] mb-3" />
                <span className="font-black text-[18px]">تجهیز کامل</span>
                <span className="text-[11px] opacity-80 mt-1 leading-tight">صفر تا صد ماشین‌آلات و تجهیزات</span>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full flex gap-4">
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
             </div>
             
             <div className="w-[30%] bg-[#0C3068] rounded-[24px] p-6 shadow-lg text-white flex flex-col justify-center gap-3">
                <div className="flex items-center gap-3 rtl:flex-row-reverse" dir="ltr">
                  <span className="font-bold tracking-widest text-[16px]">051 3666 5600</span>
                  <Phone size={18} className="text-[#F9B222]" />
                </div>
                <div className="flex items-center gap-3 rtl:flex-row-reverse" dir="ltr">
                  <span className="font-bold tracking-widest text-[16px]">0911 511 6258</span>
                  <Phone size={18} className="text-[#F9B222]" />
                </div>
                <div className="w-full h-[1px] bg-white/20 my-1"></div>
                <div className="flex items-center justify-between">
                  <span className="font-bold tracking-widest text-[12px]">info@toyooran.com</span>
                </div>
             </div>
          </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/App.tsx', content);
