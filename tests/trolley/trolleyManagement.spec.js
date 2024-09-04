const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('adding item to trolley', async ({ page }) => {

    const searchBar = page.locator('#search');

    await searchBar.click();
    await page.keyboard.type('Milk');
    await page.keyboard.press('Enter');

    await page.locator('.addToTrolley-btn--add').first().click();

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();

    const item = page.locator('#product-282843-title');
    const title = await item.innerText();
    expect(title.toLowerCase()).toContain('milk');

});

test('update quantity of item in trolley', async ({ page }) => {

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    await page.pause();
    await page.locator('.qty-increment').first().click();

    const updatedQuantity = await page.locator('#quantity-282843').inputValue();
    expect(updatedQuantity).toBe('2');

});


