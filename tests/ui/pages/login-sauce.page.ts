import { type Page, type Locator , expect } from '@playwright/test';

class LoginSauce {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly password: Locator;
    readonly userName: Locator;
    readonly appLogo: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.userName = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.appLogo = page.locator('.app_logo');
    }

    async doLoginToSauce(email: string, password: string) {
        console.log(email, password);
        await this.userName.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async checkLoggedInSauce() {
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await expect(this.page).toHaveTitle(/Swag Labs/);
    }
}

export default LoginSauce;