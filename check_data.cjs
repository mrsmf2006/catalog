const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');
content = content.replace("import { Product } from './types';", "");
content = content.replace("export const products: Product[] =", "module.exports =");
fs.writeFileSync('src/data_check.cjs', content);
const data = require('./src/data_check.cjs');

console.log("Total products:", data.length);
// Check product around 30-40
for(let i = 28; i < 38; i++) {
    if(data[i]) {
        console.log(`\n--- Product ${i+1} ---`);
        console.log("Title:", data[i].title);
        console.log("Features:", data[i].features ? data[i].features.length : 'none');
        if(data[i].features) console.log(data[i].features.slice(0,2));
        console.log("Applications:", data[i].applications ? data[i].applications.length : 'none');
    }
}

// Find products with weird features
for(let i=0; i<data.length; i++) {
    let p = data[i];
    if (p.features && p.features.length > 0) {
        let longFeature = p.features.find(f => f.length > 150);
        if (longFeature) {
            console.log(`\nWARNING: Product ${i+1} (${p.title}) has a very long feature: ${longFeature.substring(0, 50)}...`);
        }
    }
}
