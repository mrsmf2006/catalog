const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({});

async function fixDescriptions() {
    let data = require('./src/data_check.cjs');
    let changed = 0;
    
    for (let i = 0; i < data.length; i++) {
        let p = data[i];
        let desc = p.description || '';
        
        let isBroken = desc.includes('...') || 
                       desc.includes('ویژگی ها') || 
                       desc.includes('دسته بندی') || 
                       desc.includes('توضیحات') ||
                       desc.includes('نقد و بررسی‌ها') ||
                       desc.length < 20;
                       
        if (isBroken) {
            console.log(`Fixing: ${p.title}`);
            const prompt = `
شما یک کپی‌رایتر حرفه‌ای صنعتی هستید.
محصول زیر دارای توضیحات نامرتب و ناقص است. 
لطفاً یک پاراگراف معرفی کوتاه، جذاب، کامل و حرفه‌ای (حداکثر ۳ تا ۴ خط) برای آن بنویسید که جملات به طور طبیعی و با نقطه تمام شوند.
از هیچ بولت‌پوینت، لیست یا کلمات اضافی مثل "توضیحات" یا "ویژگی‌ها" استفاده نکنید. فقط یک متن روان.

نام محصول: ${p.title}
متن خام فعلی: ${desc}
`;
            try {
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: prompt,
                });
                if (response.text) {
                    p.description = response.text.trim().replace(/\n/g, ' ');
                    changed++;
                    console.log(`Fixed -> ${p.description.substring(0, 50)}...\n`);
                }
            } catch (e) {
                console.log(`Failed for ${p.title}: ${e.message}`);
            }
            
            // Avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    if (changed > 0) {
        const out = `import { Product } from './types';\n\nexport const products: Product[] = ${JSON.stringify(data, null, 2)};`;
        fs.writeFileSync('src/data.ts', out);
        console.log(`Successfully fixed ${changed} descriptions with AI!`);
    } else {
        console.log('No broken descriptions found.');
    }
}

fixDescriptions();
