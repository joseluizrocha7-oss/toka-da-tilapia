const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const file = 'file://' + path.resolve(__dirname, '../carrossel-cardapio-profissional-2026-06-10/carrossel.html');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  const slides = await page.$$('.slide');
  const dir = path.resolve(__dirname, '../carrossel-cardapio-profissional-2026-06-10/instagram');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(dir, 'slide-' + n + '.png') });
    console.log('✓ slide-' + n + '.png');
  }

  await browser.close();
})();
