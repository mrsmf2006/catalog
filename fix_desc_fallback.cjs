const fs = require('fs');
const xlsx = require('xlsx');

const wb = xlsx.readFile('دیتای-محصولات.xlsx');
const rows = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header: 1});
let data = require('./src/data_check.cjs');

// Build map of titles to excel rows
const titleMap = {};
for (let i = 2; i < rows.length; i++) {
    const row = rows[i];
    if (row && row[1]) {
        titleMap[row[1].trim()] = row;
    }
}

for (let p of data) {
    let row = titleMap[p.title];
    if (row) {
        let summary = row[7] ? String(row[7]).trim() : '';
        let full = row[8] ? String(row[8]).trim() : '';
        
        // Prefer summary if it's long enough and doesn't have junk
        if (summary && summary.length > 30 && !summary.includes('ویژگی ها:') && !summary.includes('دسته بندی')) {
             p.description = summary;
        } 
        // Else fallback to cleaning up full text
        else if (full) {
             let cleaned = full.replace(/دسته بندی.*?توضیحات/g, '')
                               .replace(/ویژگی(های محصول| ها)?\s*:.*?(\n|$)/g, '')
                               .replace(/نقد و بررسی‌ها.*/g, '')
                               .replace(/مشخصات( فنی)?(:| )/g, '')
                               .replace(/\s+/g, ' ')
                               .trim();
             
             if (cleaned.startsWith(p.title)) cleaned = cleaned.substring(p.title.length).trim();
             
             if (cleaned.length > 50) {
                 p.description = cleaned;
             }
        }
    }
    
    // Clean up any remaining junk strings
    if (p.description) {
         p.description = p.description
            .replace(/دسته بندی.*?توضیحات/g, '')
            .replace(/ویژگی(های محصول| ها)?\s*:.*?(\n|$)/g, '')
            .replace(/نقد و بررسی‌ها.*/g, '')
            .replace(/این سایت از اکیسمت برای کاهش جفنگ استفاده می‌کند.*/g, '')
            .replace(/\s+/g, ' ')
            .trim();
            
         if (p.description.startsWith(p.title)) {
             p.description = p.description.substring(p.title.length).trim();
         }
         
         // Remove dangling '...' at the very end if it's clearly cut off mid-sentence
         p.description = p.description.replace(/\s*\.\.\.\s*$/, '.');
    }
}

const out = `import { Product } from './types';\n\nexport const products: Product[] = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync('src/data.ts', out);
console.log('Descriptions fixed using fallback regex strategy!');
