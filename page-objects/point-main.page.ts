import { expect } from '@playwright/test';
import { Page } from 'playwright';

export class PointMainPage {   
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigate() {
        await this.page.goto('https://www.point.com/');
    }

    //locators
    resourceButton = () =>this.page.getByRole('button', { name: 'Resources' });
    blogLink = () =>this.page.getByRole('link', { name: 'Blog We write about personal' });
    homeonwershipLink = () =>this.page.getByLabel('Blog Categories', { exact: true }).getByText('Homeownership');
    mortgageeClauseLink = () =>this.page.getByRole('link', { name: 'What is a mortgagee clause?' });
    homeonwershipRead = () =>this.page.locator('div').filter({ hasText: /^Homeownership•4 min read$/ }).getByRole('link');

    //actions
    public async clickResourceButton() {
        await this.resourceButton().click();
        //await this.page.waitForSelector(this.blogLink(), { state: 'visible' });
    }

    public async clickBlogLink() {
        await this.blogLink().click();
    }

    public async clickHomeonwershipLink() {
        await this.homeonwershipLink().click();
    }

    public async clickMortgageeClauseLink() {
        await this.mortgageeClauseLink().click();
    }

    public async assertHomeonwershipRead() {
        await expect(this.homeonwershipRead()).toBeVisible();
    }
}