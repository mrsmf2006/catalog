const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Fix dynamic TOC Pagination in both places
// Place 1: the TOC rendering
let target1 = `          const MAX_WEIGHT_PER_PAGE = 26; 
          for (let i = 0; i < products.length; i += 2) {
             const leftItem = products[i];
             const rightItem = products[i + 1];
             
             // Estimate lines (weight) based on string length. ~35 chars is roughly one line.
             const leftLines = leftItem ? (leftItem.title.length > 35 ? 2 : 1) : 0;
             const rightLines = rightItem ? (rightItem.title.length > 35 ? 2 : 1) : 0;
             
             // The row takes the max height of its two items
             const rowWeight = Math.max(leftLines, rightLines);

             if (currentWeight + rowWeight > MAX_WEIGHT_PER_PAGE && currentChunk.length > 0) {
               tocChunks.push(currentChunk);
               currentChunk = [];
               currentWeight = 0;
             }
             
             if (leftItem) currentChunk.push(leftItem);
             if (rightItem) currentChunk.push(rightItem);
             currentWeight += rowWeight;
          }`;

let replacement1 = `          const MAX_HEIGHT_PER_PAGE = 740; // 740px available for grid rows safely
          let currentHeight = 0;
          
          for (let i = 0; i < products.length; i += 2) {
             const leftItem = products[i];
             const rightItem = products[i + 1];
             
             const leftLines = leftItem ? (leftItem.title.length > 34 ? 2 : 1) : 0;
             const rightLines = rightItem ? (rightItem.title.length > 34 ? 2 : 1) : 0;
             const maxLines = Math.max(leftLines, rightLines);
             
             // A 1-line row is ~52px (including gap), a 2-line row is ~72px
             const rowHeight = maxLines === 2 ? 76 : 52;

             if (currentHeight + rowHeight > MAX_HEIGHT_PER_PAGE && currentChunk.length > 0) {
               tocChunks.push(currentChunk);
               currentChunk = [];
               currentHeight = 0;
             }
             
             if (leftItem) currentChunk.push(leftItem);
             if (rightItem) currentChunk.push(rightItem);
             currentHeight += rowHeight;
          }`;

content = content.replace(target1, replacement1);

// Place 2: the Catalog mapping calculation
let target2 = `          const MAX_WEIGHT_PER_PAGE = 26; 
          for (let i = 0; i < products.length; i += 2) {
             const leftItem = products[i];
             const rightItem = products[i + 1];
             const leftLines = leftItem ? (leftItem.title.length > 35 ? 2 : 1) : 0;
             const rightLines = rightItem ? (rightItem.title.length > 35 ? 2 : 1) : 0;
             const rowWeight = Math.max(leftLines, rightLines);
             if (currentWeight + rowWeight > MAX_WEIGHT_PER_PAGE && currentWeight > 0) {
               totalTocPages++;
               currentWeight = 0;
             }
             currentWeight += rowWeight;
          }`;

let replacement2 = `          const MAX_HEIGHT_PER_PAGE = 740;
          let currentHeight = 0;
          for (let i = 0; i < products.length; i += 2) {
             const leftItem = products[i];
             const rightItem = products[i + 1];
             const leftLines = leftItem ? (leftItem.title.length > 34 ? 2 : 1) : 0;
             const rightLines = rightItem ? (rightItem.title.length > 34 ? 2 : 1) : 0;
             const maxLines = Math.max(leftLines, rightLines);
             const rowHeight = maxLines === 2 ? 76 : 52;
             
             if (currentHeight + rowHeight > MAX_HEIGHT_PER_PAGE && currentHeight > 0) {
               totalTocPages++;
               currentHeight = 0;
             }
             currentHeight += rowHeight;
          }`;

content = content.replace(target2, replacement2);

fs.writeFileSync('src/App.tsx', content);
