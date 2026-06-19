const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const file = 'file://' + path.resolve(__dirname, '../../saidas/exemplo-post-prato.html');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const slides = await page.$$('.slide');
  const labels = ['opcao-a-full-frame', 'opcao-b-split-card'];

  for (let i = 0; i < slides.length; i++) {
    const out = path.resolve(__dirname, '../../saidas/' + labels[i] + '.png');
    await slides[i].screenshot({ path: out });
    console.log('✓ ' + labels[i] + '.png');
  }

  await browser.close();
})();
