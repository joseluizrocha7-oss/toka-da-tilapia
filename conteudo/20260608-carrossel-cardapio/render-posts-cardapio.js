const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const file = 'file://' + path.resolve(__dirname, '../posts-cardapio-2026-06-10/posts.html');
  await page.goto(file, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const slides = await page.$$('.slide');
  const dir = path.resolve(__dirname, '../posts-cardapio-2026-06-10/instagram');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const nomes = [
    'espeto-de-tilapia-com-queijo',
    'ceviche-de-tilapia',
    'ceviche-de-tilapia-2',
    'marmitex-isca-file-tilapia',
    'marmitex-camarao-milanesa',
    'tilapia-a-parmegiana',
    'tilapia-a-grega',
    'tilapia-ao-molho-mediterraneo',
    'tilapia-com-farofa-de-banana',
    'tilapia-com-farofa-de-banana-2',
    'tilapia-gratinada',
    'tilapia-gratinada-2',
    'porcao-file-tilapia',
    'porcao-camarao-empanado',
    'porcao-mista-v1',
    'porcao-mista-v2-bandeja',
    'porcao-mista-v3-elegante',
  ];

  for (let i = 0; i < slides.length; i++) {
    const out = path.join(dir, nomes[i] + '.png');
    await slides[i].screenshot({ path: out });
    console.log('✓ ' + nomes[i] + '.png');
  }

  await browser.close();
})();
