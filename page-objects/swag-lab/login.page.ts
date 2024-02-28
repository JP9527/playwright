import { Page } from 'playwright';

export class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    // locators
    username = () => this.page.locator('[data-test="username"]');
    password = () => this.page.locator('[data-test="password"]');
    loginButton = () => this.page.locator('[data-test="login-button"]');
    errorMsg = () => this.page.locator('[data-test="error"]');
    usernameError = () => this.page.locator('svg').first();
    passwordError = () => this.page.locator('svg').nth(1);


    // actions
    public async login(username: string, password: string) {
        await this.username().fill(username);
        await this.password().fill(password);
        await this.loginButton().click();
    }

}