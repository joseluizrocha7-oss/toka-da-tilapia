const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 1600 });

  const testPath = path.resolve(__dirname, '../../saidas/test-images-3.html');
  const fileUrl = 'file://' + testPath;
  console.log('Opening:', fileUrl);

  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(4000); // Aguarda carregar todas do Unsplash

  const outputPath = 'C:/Users/Rocha Digital Studio/.gemini/antigravity-ide/brain/6cc2d01c-7b54-43e0-bf3c-169f5d916219/images-test-3.png';
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log('Test 3 screenshot saved to:', outputPath);

  await browser.close();
})();
