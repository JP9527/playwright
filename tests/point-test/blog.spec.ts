import { test, expect } from '@playwright/test';
import { PointMainPage } from '../../page-objects/point-main.page';

test.describe('Blog', () => {

    test('1st blog post', async ({ page }) => { 
      const pointMainPage = new PointMainPage(page);
      await page.goto('https://www.point.com/');

      pointMainPage.clickResourceButton();
      pointMainPage.clickResourceButton();
      pointMainPage.clickBlogLink();
      pointMainPage.clickHomeonwershipLink();
      pointMainPage.clickMortgageeClauseLink();
      pointMainPage.assertHomeonwershipRead()
      //await PointMainPage.clickBlogLink(); 
      //await page.getByLabel('Blog Categories', { exact: true }).getByText('Homeownership').click();
      //await page.getByRole('link', { name: 'What is a mortgagee clause?' }).click();
      //await expect(page.locator('div').filter({ hasText: /^Homeownership•4 min read$/ }).getByRole('link')).toBeVisible();
      //await expect(page.getByText('min read').first()).toBeVisible();
    });
});