const { chromium } = require('playwright');
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

const server = http.createServer(app);

server.listen(4173, async () => {
  console.log('Server started on 4173');
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: 1200, height: 1600 }
    });
    
    page.setDefaultTimeout(300000);
    
    console.log('Navigating to http://localhost:4173?print=true');
    await page.goto('http://localhost:4173?print=true', { waitUntil: 'networkidle' });
    
    console.log('Waiting for images to load...');
    await page.evaluate(async () => {
      document.documentElement.style.setProperty('--page-scale', '1');
      window.addEventListener('resize', (e) => {
        e.stopPropagation();
        document.documentElement.style.setProperty('--page-scale', '1');
      }, true);
      
      await document.fonts.ready;
      const images = Array.from(document.images);
      await Promise.all(images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      }));
      await new Promise(r => setTimeout(r, 2000));
    });
    
    await page.addStyleTag({ content: '.print\\:hidden, #download-btn { display: none !important; }' });
    
    console.log('Generating PDF from screenshots...');
    
    const pageElements = await page.$$('.catalog-page-container');
    console.log(`Found ${pageElements.length} pages to process.`);
    
    const pdfDoc = await PDFDocument.create();
    
    for (let i = 0; i < pageElements.length; i++) {
      console.log(`Processing page ${i + 1}/${pageElements.length}...`);
      const el = pageElements[i];
      
      const screenshotBuffer = await el.screenshot({ 
        type: 'jpeg', 
        quality: 85
      });
      
      const img = await pdfDoc.embedJpg(screenshotBuffer);
      
      // A4 dimensions in points (72 points per inch)
      const a4Width = 595.28;
      const a4Height = 841.89;
      
      const pdfPage = pdfDoc.addPage([a4Width, a4Height]);
      pdfPage.drawImage(img, {
        x: 0,
        y: 0,
        width: a4Width,
        height: a4Height
      });
    }
    
    console.log('Saving PDF...');
    const pdfBytes = await pdfDoc.save();
    
    const pdfPath = path.join(__dirname, 'dist/catalog.pdf');
    fs.writeFileSync(pdfPath, pdfBytes);
    
    console.log('PDF generated successfully at dist/catalog.pdf');
    
    fs.copyFileSync(pdfPath, path.join(__dirname, 'public/catalog.pdf'));
    console.log('Copied PDF to public/catalog.pdf');
    
    await browser.close();
  } catch (err) {
    console.error('Error generating PDF:', err);
  } finally {
    server.close();
    process.exit(0);
  }
});
