const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('view trolley', async ({ page }) => {

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    const headerText = await page.getByRole('heading', { name: 'Trolley' }).innerText();
    expect (headerText).toBe('Trolley'); 

    const item = page.locator('.product-details');
    await page.waitForSelector('.product-details');
    const count = await item.count();
    console.log(count);

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
    await page.locator('.qty-increment').first().click();

    const updatedQuantity = await page.locator('#quantity-282843').inputValue();
    expect(updatedQuantity).toBe('2');

});

test('remove item from trolley', async ({ page }) => {

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    const removeButton = page.locator('button:has-text("Remove")');
    await removeButton.nth(1).click();

    const item = page.locator('.product-titleAndPrice');
    const count = await item.count();
    expect(count).toBe(1);

});

