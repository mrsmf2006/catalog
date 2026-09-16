const { chromium } = require('playwright');
(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setContent('<h1>Hello World</h1>');
    await page.pdf({ path: 'test_playwright.pdf' });
    await browser.close();
    console.log('Playwright success');
  } catch (e) {
    console.error('Playwright error:', e);
  }
})();
