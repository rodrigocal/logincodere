import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://m.apuestas.codere.es/');
  await page.click('text=Acceder');

  await browser.close();
})();