const fs = require('fs');
let content = fs.readFileSync('src/data.ts', 'utf8');
content = content.replace("import { Product } from './types';", "");
content = content.replace("export const products: Product[] =", "module.exports =");
fs.writeFileSync('src/data_check.cjs', content);
