const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 2000 });

  const galleryPath = path.resolve(__dirname, '../../saidas/gallery.html');
  const fileUrl = 'file://' + galleryPath;
  console.log('Opening:', fileUrl);

  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const outputPath = 'C:/Users/Rocha Digital Studio/.gemini/antigravity-ide/brain/6cc2d01c-7b54-43e0-bf3c-169f5d916219/gallery-capture.png';
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log('Gallery screenshot saved to:', outputPath);

  await browser.close();
})();
