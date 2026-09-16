const { chromium } = require('playwright');
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const PORT = 4173;
const DIST = path.join(__dirname, 'dist');
const PUBLIC_PDF = path.join(__dirname, 'public', 'catalog.pdf');
const DIST_PDF = path.join(DIST, 'catalog.pdf');

async function launchBrowser() {
  const chromePath = process.env.CHROME_PATH
    || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const options = {
    headless: true,
    args: ['--disable-dev-shm-usage', '--font-render-hinting=none'],
  };
  if (fs.existsSync(chromePath)) {
    console.log(`Using Chrome: ${chromePath}`);
    return chromium.launch({ ...options, executablePath: chromePath });
  }
  try {
    return await chromium.launch({ ...options, channel: 'msedge' });
  } catch {
    return chromium.launch({ ...options, channel: 'chrome' });
  }
}

async function generate() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html missing. Run `npx vite build` first.');
  }

  const app = express();
  app.use(express.static(DIST));
  app.get('*', (_req, res) => res.sendFile(path.join(DIST, 'index.html')));

  const server = http.createServer(app);
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(PORT, resolve);
  });
  console.log(`Serving dist on http://localhost:${PORT}`);

  let browser;
  try {
    browser = await launchBrowser();
    const page = await browser.newPage({
      viewport: { width: 1200, height: 1700 },
    });
    page.setDefaultTimeout(180000);

    const url = `http://127.0.0.1:${PORT}/?print=true`;
    console.log(`Opening ${url}`);
    await page.goto(url, { waitUntil: 'load', timeout: 120000 });

    await page.waitForSelector('.catalog-page-container', { timeout: 60000 });
    await page.waitForFunction(
      () => document.querySelectorAll('.catalog-page-container').length > 20,
      { timeout: 60000 }
    );

    await page.evaluate(async () => {
      document.documentElement.style.setProperty('--page-scale', '1');
      document.documentElement.style.setProperty('--page-mb', '0px');
      await document.fonts.ready;
      const images = Array.from(document.images);
      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );
    });

    const pageCount = await page.$$eval(
      '.catalog-page-container',
      (els) => els.length
    );
    console.log(`Catalog pages ready: ${pageCount}`);

    await page.emulateMedia({ media: 'print' });

    const pdfDoc = await PDFDocument.create();
    const pageHandles = await page.$$('.catalog-page-container');
    const a4Width = 595.28;
    const a4Height = 841.89;

    for (let i = 0; i < pageHandles.length; i++) {
      process.stdout.write(`\rRendering page ${i + 1}/${pageHandles.length}   `);
      const screenshotBuffer = await pageHandles[i].screenshot({
        type: 'jpeg',
        quality: 82,
        animations: 'disabled',
      });
      const img = await pdfDoc.embedJpg(screenshotBuffer);
      const pdfPage = pdfDoc.addPage([a4Width, a4Height]);
      pdfPage.drawImage(img, {
        x: 0,
        y: 0,
        width: a4Width,
        height: a4Height,
      });
    }
    console.log('');

    const pdfBytes = await pdfDoc.save();
    fs.writeFileSync(DIST_PDF, pdfBytes);
    fs.mkdirSync(path.dirname(PUBLIC_PDF), { recursive: true });
    fs.copyFileSync(DIST_PDF, PUBLIC_PDF);

    const mb = (pdfBytes.length / (1024 * 1024)).toFixed(2);
    console.log(`PDF saved: ${DIST_PDF} (${mb} MB, ${pageCount} pages)`);
    console.log(`Copied to: ${PUBLIC_PDF}`);
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

generate()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Error generating PDF:', err);
    process.exit(1);
  });
