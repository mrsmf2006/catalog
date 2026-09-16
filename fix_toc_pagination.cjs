const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// First, find where products are mapped for TOC
const renderTocTarget = `{Array.from({ length: Math.ceil(products.length / 32) }).map((_, index) => (
          <TocPage 
            key={\`toc-\${index}\`} 
            items={products.slice(index * 32, (index + 1) * 32)} 
            startIndex={index * 32} 
            pageNum={index + 3} // Cover=1, About=2, Toc starts at 3
            totalTocPages={Math.ceil(products.length / 32)}
          />
        ))}`;

// Wait, the products might be chunked dynamically. Let's create a chunking function inside App component.
const renderTocReplacement = `
        {/* Dynamic TOC Pagination */}
        {(() => {
          const tocChunks = [];
          let currentChunk = [];
          let currentWeight = 0;
          // Grid rows stretch to the tallest item in the row.
          // To be safe and prevent overflow, we limit the total "weight" (lines) per page.
          // Assuming max 14 rows per page (28 items total if all 1-line). 
          const MAX_WEIGHT_PER_PAGE = 26; 

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
          }
          if (currentChunk.length > 0) {
            tocChunks.push(currentChunk);
          }

          let currentStartIndex = 0;
          return tocChunks.map((chunk, index) => {
            const startIndex = currentStartIndex;
            currentStartIndex += chunk.length;
            
            return (
              <TocPage 
                key={\`toc-\${index}\`} 
                items={chunk} 
                startIndex={startIndex} 
                pageNum={index + 3} 
                totalTocPages={tocChunks.length}
              />
            );
          });
        })()}`;

content = content.replace(renderTocTarget, renderTocReplacement);

// Also need to update the CatalogPage page numbering to account for dynamic TOC pages
const catalogMapTarget = `{products.map((product, index) => (
          <CatalogPage key={product.id} product={product} pageNum={3 + Math.ceil(products.length / 32) + index} />
        ))}`;

const catalogMapReplacement = `{/* Catalog Pages */
        (() => {
          // Calculate TOC pages exactly like above to get the correct offset
          let totalTocPages = 1;
          let currentWeight = 0;
          const MAX_WEIGHT_PER_PAGE = 26; 
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
          }
          
          return products.map((product, index) => (
            <CatalogPage key={product.id} product={product} pageNum={3 + totalTocPages - 1 + index} />
          ));
        })()}`;

content = content.replace(catalogMapTarget, catalogMapReplacement);

fs.writeFileSync('src/App.tsx', content);
