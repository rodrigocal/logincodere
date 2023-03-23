import { chromium, Browser, Page } from 'playwright';

describe('Login Test', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should be able to login successfully', async () => {
    await page.goto('https://m.apuestas.codere.es/');
    await page.click('text=Acceder');
    await page.fill('input[name="username"]', 'your_username');
    await page.fill('input[name="password"]', 'your_password');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    const title = await page.title();
    expect(title).toBe('Codere Apuestas | Apuestas deportivas en España');
  });
});
