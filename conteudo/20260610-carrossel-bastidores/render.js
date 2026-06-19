const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  console.log('Iniciando renderização do carrossel...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const file = 'file://' + path.resolve(__dirname, 'carrossel.html');
  console.log('Abrindo arquivo:', file);
  await page.goto(file, { waitUntil: 'networkidle' });
  
  // Aguarda carregar fontes e imagens externas
  await page.waitForTimeout(4000);

  const slides = await page.$$('.slide');
  const dir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    const outputPath = path.join(dir, `slide-${n}.png`);
    await slides[i].screenshot({ path: outputPath });
    console.log(`✓ slide-${n}.png gerado com sucesso.`);
  }

  await browser.close();
  console.log(`\nFinalizado! ${slides.length} slides salvos na pasta instagram/`);
})();
