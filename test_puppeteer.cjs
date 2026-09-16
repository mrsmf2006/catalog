const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent('<h1>Hello World</h1>');
    await page.pdf({ path: 'test.pdf' });
    await browser.close();
    console.log('Puppeteer success');
  } catch (e) {
    console.error('Puppeteer error:', e);
  }
})();
