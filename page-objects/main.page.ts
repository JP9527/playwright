import { expect, test, Page } from '@playwright/test';

export class MainPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    // locators
    getStartedLink = () => this.page.getByRole('link', { name: 'Get started' });
    installationHeader = () => this.page.getByRole('heading', { name: 'Installation' });


    //actions
     public async clickGetStarted() {
        await this.getStartedLink().click();
    }
}