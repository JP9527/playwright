import { test, expect } from '@playwright/test';
import { MainPage } from '../page-objects/main.page';

test.describe('Example test', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('has title', async ({ page }) => {
    //await page.goto('https://playwright.dev/');
    const mainPage = new MainPage(page);
  
    await mainPage.navigate();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {
  
    const mainPage = new MainPage(page);
  
    await mainPage.navigate();
  
    // Click the get started link.
    await mainPage.getStartedLink().click();
    //await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(mainPage.installationHeader()).toBeVisible();
  });
  
});


