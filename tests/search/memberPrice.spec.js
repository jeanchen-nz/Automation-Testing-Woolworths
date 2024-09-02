const { test, expect } = require('@playwright/test'); 
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('member price', async ({ page }) => {
    await page.getByRole('button', { name: 'Specials & offers' }).click();
    await page.getByRole('link', { name: 'Member Price'}).click();
    await page.waitForLoadState('networkidle');


    const productTitles = page.getByLabel('Member Price.');
    const productCount = await productTitles.count();

    for (let i = 0; i < productCount; i++) {
        const card = productTitles.nth(i)
        
        if (productTitles) {
            continue;
        }

        const title = await card.innerText();
        expect(title.toLowerCase()).toContain('member price');
    }


});
    