const { chromium } = require('../conteudo/carrossel-cardapio-2026-06-08/node_modules/playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const file = 'file://' + path.resolve(__dirname, '../sites/principal/index.html');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const dir = path.resolve(__dirname, '../saidas');
  await page.screenshot({ path: path.join(dir, 'site-toka-full.png'), fullPage: true });
  await page.screenshot({ path: path.join(dir, 'site-toka-hero.png'), clip: { x: 0, y: 0, width: 1280, height: 900 } });
  console.log('OK');
  await browser.close();
})();
