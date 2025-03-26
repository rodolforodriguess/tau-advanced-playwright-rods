import { test } from '@playwright/test';
import LoginSauce from '../pages/login-sauce.page';
import pages from '../../utils/pages';

const userName = process.env.USER_SAUCE_STANDARD!;
const password = process.env.PASSWORD_STANDARD_USER!;
let loginSauce: LoginSauce;


test.beforeEach(async ({ page }) => {
    await page.goto(pages.loginPageSauce);
    loginSauce = new LoginSauce(page);
});

test.describe('Sauce - Login', () => {
  test(`successfull login to Sauce`, async () => {
    console.log(userName);
    console.log(password);
    await loginSauce.doLoginToSauce(userName, password);
    await loginSauce.checkLoggedInSauce();
  });
});
