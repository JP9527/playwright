import { Page } from 'playwright';

export class InventoryPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators
    inventoryUrl = () => this.page.url();
    pageHeader = () => this.page.locator('#header_container');
    shoppingCart = () => this.page.locator('#shopping_cart_container a');
    
    //backpack mainpage
    backpackDescriptionMainPage = () => this.page.getByText('carry.allTheThings() with the');
    backpackPriceMainPage = () => this.page.getByText('$29.99');
    backPackImageMainPage = () => this.page.locator('#item_4_img_link');
    backPackLink = () => this.page.locator('#item_4_title_link');
    addToCartButtonMainPage = () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    removeFromCartButtonMainPage = () => this.page.locator('[data-test="remove-sauce-labs-backpack"]');
    cartWithOneItem = () => this.page.locator('a').filter({ hasText: '1' });

    //backppack details page
    backpackNameDetailsPage = () => this.page.getByText('Sauce Labs Backpack');
    backpackDescriptionDetailsPage = () => this.page.getByText('carry.allTheThings() with the');
    backpackPriceDetailsPage = () => this.page.getByText('$');
    backPackImageDetailsPage = () => this.page.getByRole('img', { name: 'Sauce Labs Backpack' });
    addToCartButtonDetailsPage = () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    removeFromCartButtonDetailsPage = () => this.page.locator('[data-test="remove-sauce-labs-backpack"]');
    cartWithOneItemDetailsPage = () => this.page.locator('a').filter({ hasText: '1' });
}