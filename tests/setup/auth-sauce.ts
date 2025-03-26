import { test as setup, type Page } from '@playwright/test';
import LoginSauce from '../ui/pages/login-sauce.page';
import uiPages from '../utils/uiPages';

const standard_user = '.auth/sauce.json';

setup('authenticate as standard user', async ({ page }) => {
    const user = process.env.USERNAME_ADMIN!;
    const password = process.env.PASSWORD_AUTH!;
    const baseURL = setup.info().project.use.baseURL!;
    await page.goto(baseURL!+uiPages.loginPageSauce);
    const loginSauce = new LoginSauce(page);
    await loginSauce.doLoginToSauce(user, password);
    await page.waitForURL(baseURL+uiPages.loginPageSauce);
    await page.context().storageState({ path: standard_user });
});