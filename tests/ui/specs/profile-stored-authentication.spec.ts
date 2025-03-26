import { test } from '@playwright/test';
import ProfilePage from '../pages/profile-page';
import LoginSauce from '../pages/login-sauce.page';
import pages from '../../utils/pages';

let profilePage: ProfilePage;
let loginSauce: LoginSauce;

test.beforeEach(async ({ page }) => {
    // await page.goto(pages.profile);
    await page.goto(pages.loginPageSauce);
    profilePage = new ProfilePage(page);
    loginSauce = new LoginSauce(page);
});

test.describe('Profile - Stored Auth', () => {
    test('Check logged in', async () => {
        await profilePage.checkLoggedIn();
    });
});

test.describe.only('Profile - SauceDemo', ()=> {
    test('Check it is logged in SauceDemo', async ()=> {
        // await loginSauce.checkLoggedInSauce();
    })
})
