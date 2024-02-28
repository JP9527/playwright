import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-objects/swag-lab/login.page';
import { InventoryPage } from '../../page-objects/swag-lab/inventory.page';
import * as userinfo from '../../fixtures/userinfo.json';

test.describe('Login test suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('login failed', async ({ page }) => {
        //console.log('userinfo:', userinfo)
        const loginpage = new LoginPage(page);   
        await loginpage.login(userinfo[1].username, userinfo[1].password);
        await expect(loginpage.usernameError()).toBeVisible();
        await expect(loginpage.passwordError()).toBeVisible();
        await expect(loginpage.errorMsg()).toContainText(userinfo[1].message);
    });

    test('login failed with only username', async ({ page }) => {
        const loginpage = new LoginPage(page);   
        await loginpage.login('standard_user', '');
        await expect(loginpage.usernameError()).toBeVisible();
        await expect(loginpage.passwordError()).toBeVisible();
        await expect(loginpage.errorMsg()).toContainText('Epic sadface: Password is required');
    });

    test('login failed with only password', async ({ page }) => {
        const loginpage = new LoginPage(page);   
        await loginpage.login('', 'secret_sauce');
        await expect(loginpage.usernameError()).toBeVisible();
        await expect(loginpage.passwordError()).toBeVisible();
        await expect(loginpage.errorMsg()).toContainText('Epic sadface: Username is required');
    });

    test('login successful', async ({ page }) => {
        const loginpage = new LoginPage(page);
        const inventorypage = new InventoryPage(page);
        await loginpage.login('standard_user', 'secret_sauce');
        await expect(inventorypage.inventoryUrl()).toBe('https://www.saucedemo.com/inventory.html');
        await expect(inventorypage.pageHeader()).toContainText('Swag Labs');
        await expect(inventorypage.shoppingCart()).toBeVisible();
    })
})