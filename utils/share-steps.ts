import { LoginPage } from "../page-objects/swag-lab/login.page";

export class shareSteps {
    page: LoginPage;

    constructor(page: LoginPage) {
        this.page = page;
    }

    //actions
    
    public async login(username: string, password: string) {
        const loginpage = new LoginPage(this.page);
        await loginpage.username().fill(username);
        await loginpage.password().fill(password);
        await loginpage.loginButton().click();
    }

}