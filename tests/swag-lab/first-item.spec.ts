import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/swag-lab/login.page';
import { InventoryPage } from '../../page-objects/swag-lab/inventory.page';
import * as userinfo from '../../fixtures/userinfo.json';

test.describe('First item in inventory', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginpage = new LoginPage(page);  
        await loginpage.login(userinfo[0].username, userinfo[0].password);
    });

    test('should have the correct name and description', async ({ page }) => {
        const inventorypage = new InventoryPage(page);
        await expect(inventorypage.backPackLink()).toContainText('Sauce Labs Backpack');
        await expect(inventorypage.backpackDescriptionMainPage()).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(inventorypage.backpackPriceMainPage()).toContainText('$29.99');
        await expect(inventorypage.backPackImageMainPage()).toBeVisible();
    });

    test('buy from main page', async ({ page }) => {
        const inventorypage = new InventoryPage(page);
        await inventorypage.addToCartButtonMainPage().click();
        await expect(inventorypage.removeFromCartButtonMainPage()).toContainText('Remove');
        await expect(inventorypage.cartWithOneItem()).toContainText('1');
    });

    test('should have the correct name and description in details page', async ({ page }) => {
        const inventorypage = new InventoryPage(page);
        await inventorypage.backPackLink().click();
        await expect(inventorypage.backpackNameDetailsPage()).toContainText('Sauce Labs Backpack');
        await expect(inventorypage.backpackDescriptionDetailsPage()).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(inventorypage.backpackPriceDetailsPage()).toContainText('$29.99');
        await expect(inventorypage.backPackImageDetailsPage()).toBeVisible();
    });

    test('buy from details page', async ({ page }) => {
        const inventorypage = new InventoryPage(page);
        await inventorypage.backPackLink().click();
        await inventorypage.addToCartButtonDetailsPage().click();
        await expect(inventorypage.removeFromCartButtonDetailsPage()).toContainText('Remove');
        await expect(inventorypage.cartWithOneItemDetailsPage()).toContainText('1');
    });

    test('snapshot comparison', async ({ page }) => {
        //await page.screenshot({ path: 'screenshots/first-item.png' });
        await expect(page).toHaveScreenshot('benchmarks/first-item.png');
    })
})