import { test as setup, type Page } from '@playwright/test';
import LoginSauce from '../ui/pages/login-sauce.page';
import uiPages from '../utils/uiPages';

const standard_user = '.auth/standard_user.json';

setup('authenticate as standard user', async ({ page }) => {
    const user = process.env.USER_SAUCE_STANDARD!;
    const password = process.env.PASSWORD_STANDARD_USER!;
    const baseURL = setup.info().project.use.baseURL!;
    await page.goto(baseURL!+uiPages.loginPageSauce);
    const loginSauce = new LoginSauce(page);
    await loginSauce.doLoginToSauce(user, password);
    await loginSauce.checkLoggedInSauce();
    await page.context().storageState({ path: standard_user });
});