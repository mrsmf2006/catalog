const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({});

async function processQueue(items, concurrency = 5) {
    const results = [];
    for (let i = 0; i < items.length; i += concurrency) {
        const chunk = items.slice(i, i + concurrency);
        const promises = chunk.map(async (item) => {
            const prompt = `شما یک کپی‌رایتر حرفه‌ای صنعتی هستید.
محصول زیر دارای توضیحات نامرتب و ناقص است. 
لطفاً یک پاراگراف معرفی کوتاه، جذاب، کامل و حرفه‌ای (حداکثر ۳ تا ۴ خط) برای آن بنویسید که جملات به طور طبیعی و با نقطه تمام شوند.
از هیچ بولت‌پوینت، لیست یا کلمات اضافی مثل "توضیحات" یا "ویژگی‌ها" استفاده نکنید. فقط یک متن روان.

نام محصول: ${item.title}
متن خام فعلی: ${item.description || item.title}`;
            
            try {
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                });
                if (response.text) {
                    return { index: item.index, text: response.text.trim().replace(/\n/g, ' ') };
                }
            } catch (e) {
                console.log(`Failed ${item.index}: ${e.message}`);
            }
            return { index: item.index, text: null };
        });
        
        const chunkResults = await Promise.all(promises);
        results.push(...chunkResults);
        console.log(`Processed ${Math.min(i + concurrency, items.length)} / ${items.length}`);
    }
    return results;
}

async function fix() {
    let data = require('./src/data_check.cjs');
    
    let toFix = [];
    for (let i = 0; i < data.length; i++) {
        let desc = data[i].description || '';
        let isBroken = desc.includes('...') || 
                       desc.includes('ویژگی ها') || 
                       desc.includes('ویژگی') || 
                       desc.includes('دسته بندی') || 
                       desc.includes('توضیحات') ||
                       desc.includes('نقد و بررسی‌ها') ||
                       desc.length < 20;
        if (isBroken) {
            toFix.push({ index: i, title: data[i].title, description: desc });
        }
    }
    
    console.log(`Found ${toFix.length} items to fix.`);
    
    if (toFix.length > 0) {
        const results = await processQueue(toFix);
        
        for (const res of results) {
            if (res.text) {
                data[res.index].description = res.text;
            }
        }
        
        const out = `import { Product } from './types';\n\nexport const products: Product[] = ${JSON.stringify(data, null, 2)};`;
        fs.writeFileSync('src/data.ts', out);
        
        // Also update data_check for next time
        fs.writeFileSync('src/data_check.cjs', `module.exports = ${JSON.stringify(data, null, 2)};`);
        console.log("Data saved successfully!");
    }
}

fix();
