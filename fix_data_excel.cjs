const fs = require('fs');
const xlsx = require('xlsx');

const wb = xlsx.readFile('دیتای-محصولات.xlsx');
const rows = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {header: 1});

const excelData = {};
for (let i = 2; i < rows.length; i++) {
    const row = rows[i];
    if (!row || !row[1]) continue;
    let title = row[1].trim();
    
    let summary = row[7] ? String(row[7]).trim() : '';
    let full = row[8] ? String(row[8]).trim() : '';
    let featuresStr = row[10] ? String(row[10]).trim() : '';
    
    // Description logic
    let desc = summary;
    if (!desc || desc.includes('اکیسمت') || desc.length < 30) {
        // use full description
        if (full) {
            let m = full.match(/معرفی [^\s]+(.*)(ویژگی‌های کلیدی|جدول مشخصات|کاربردها)/);
            if (m) desc = m[1].trim();
            else desc = full.substring(0, 300);
            
            desc = desc.replace(/نقد و بررسی‌ها.*/g, '').replace(/دسته بندی.*?برند:.*?(توضیحات)/g, '').trim();
            if (desc.startsWith(title)) desc = desc.substring(title.length).trim();
            if (desc.length > 300) {
                let dot = desc.lastIndexOf('.', 300);
                if (dot > 50) desc = desc.substring(0, dot + 1);
                else desc = desc.substring(0, 300) + '...';
            }
        }
    }
    
    // Features logic
    let features = [];
    if (featuresStr) {
        // Features might be separated by '؛' or '\n' or '-'
        let rawFeatures = featuresStr.split(/[؛\n]/);
        features = rawFeatures.map(f => f.replace(/^-/, '').trim()).filter(f => f.length > 3 && f.length < 150);
    }
    
    excelData[title] = { desc, features };
}

let data = require('./src/data_check.cjs');

for (let p of data) {
    let ex = excelData[p.title];
    if (ex) {
        if (ex.desc && ex.desc.length > 20) {
            p.description = ex.desc;
        }
        if (ex.features && ex.features.length > 0) {
            p.features = ex.features;
        }
    }
    
    // Clean up description if still has weird text
    if (p.description) {
        p.description = p.description.replace(/\s+/g, ' ');
    }
    
    // Fix long features if any exist
    if (p.features) {
        p.features = p.features.map(f => {
            if (f.length > 100) return f.substring(0, 97) + '...';
            return f;
        });
    }
}

const out = `import { Product } from './types';\n\nexport const products: Product[] = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync('src/data.ts', out);
console.log('Fixed data.ts using Excel exact matches');
