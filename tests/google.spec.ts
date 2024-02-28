import { test, expect } from '@playwright/test';

test('has title', async({ page }) => {
    await page.goto("https://www.google.com/");
    //await expect(page).toHaveTitle(/google/);
})

test('test search', async({ page }) =>{
    await page.goto("https://www.google.com/");
    await page.getByLabel('Search', { exact: true }).click();
    await page.getByLabel('Search', { exact: true }).fill('playwright');
    await page.getByLabel('Google Search').first().click();
    
    await expect(page).toHaveTitle(/playwright - Google Search/);
})