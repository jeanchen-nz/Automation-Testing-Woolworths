const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('adding items', async ({ page }) => {

    const searchBar = page.locator('#search');

    await searchBar.click();
    await page.keyboard.type('Milk');
    await page.keyboard.press('Enter');
    await page.pause();
    //await page.waitForLoadState('networkidle');
    //locator('cdx-card').first()
    await page.locator('.addToTrolley-btn--add').first().click();
    //await page.waitForLoadState('networkidle');


    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    //await page.waitForLoadState('networkidle');

    const item = page.locator('#product-282843-title');
    const title = await item.innerText();
    expect(title.toLowerCase()).toContain('milk');

});