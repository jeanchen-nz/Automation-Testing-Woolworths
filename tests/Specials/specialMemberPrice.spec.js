const { test, expect } = require('@playwright/test'); 
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('member price', async ({ page }) => {
    await page.getByRole('button', { name: 'Specials & offers' }).click();
    await page.pause();
    await page.getByRole('link', { name: 'Member Price', exact: true }).click();
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
// this test is for checking the member price. It will click on the specials and offers button, then click on the member price button. It will then check if the products displayed are member price products.    

test('specials', async ({ page }) => {
    await page.getByRole('button', { name: 'Specials & offers' }).click();
    await page.locator('#cdk-overlay-0').getByRole('link', { name: 'Specials & offers' })
    await page.waitForLoadState('networkidle');

    const productTitles = page.getByLabel('Special.');
    const productCount = await productTitles.count();

    for (let i = 0; i < productCount; i++) {
        const card = productTitles.nth(i)
        
        if (productTitles) {
            continue;
        }

        const title = await card.innerText();
        expect(title.toLowerCase()).toContain('special');
    }

});
// this test is for checking the specials. It will click on the specials and offers button, then click on the specials button. It will then check if the products displayed are specials.