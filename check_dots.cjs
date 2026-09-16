const data = require('./src/data_check.cjs');
for (let i = 0; i < data.length; i++) {
    if (data[i].description && data[i].description.includes('...')) {
        console.log(`[${i}] ${data[i].title}\n   -> ${data[i].description}\n`);
    }
}
