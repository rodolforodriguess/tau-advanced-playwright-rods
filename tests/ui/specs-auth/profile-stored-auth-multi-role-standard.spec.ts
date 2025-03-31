import { test } from '@playwright/test';
import ProfileSauce from '../pages/profile-sauce.page'
import pages from '../../utils/pages';

let profileSauce: ProfileSauce;


test.beforeEach(async ({ page }) => {
    await page.goto(pages.productsPageSauce);
});

test.describe.only('Products - Application', () => {
  test.use({storageState: '.auth/standard_user.json'})
  test(`Swag labs - Standard user`, async ({ page }) => {
    profileSauce = new ProfileSauce(page);
    await profileSauce.checkLoggedInSauce();
  });
});