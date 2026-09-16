const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `<button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-4 bg-[#0C3068] text-[#FFFFFF] rounded-full shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all hover:bg-[#0a2550] hover:-translate-y-1"
        >
          <Download size={22} />
          <span className="font-bold text-lg">چاپ / دانلود PDF</span>
        </button>`;

const replacement = `<a 
          href="/catalog.pdf"
          download="TSP-Catalog.pdf"
          id="download-btn"
          className="flex items-center gap-2 px-6 py-4 bg-[#0C3068] text-[#FFFFFF] rounded-full shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all hover:bg-[#0a2550] hover:-translate-y-1"
        >
          <Download size={22} />
          <span className="font-bold text-lg">دانلود PDF آفلاین</span>
        </a>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/App.tsx', content);
