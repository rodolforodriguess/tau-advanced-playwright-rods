import { type Page, type Locator , expect, type BrowserContext } from '@playwright/test';

class Products {

    readonly page: Page;
    readonly LoggedInLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.LoggedInLabel = page.getByText('Products'); 
    }

    async checkLoggedInSauce() {
        await expect(this.LoggedInLabel).toBeVisible();
    }
}

export default Products;