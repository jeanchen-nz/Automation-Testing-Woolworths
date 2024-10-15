const { test, expect } = require('@playwright/test');

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
// this test is for viewing the trolley. It will click on the review order or checkout button and check if the user is redirected to the trolley page.

test('adding item to trolley', async ({ page }) => {

    const searchBar = page.locator('#search');

    await searchBar.click();
    await page.pause();
    await page.keyboard.type('Milk');
    await page.keyboard.press('Enter');

    await page.locator('.addToTrolley-btn--add').first().click();

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();

    const item = page.locator('#product-705692-title');
    const title = await item.innerText();
    expect(title.toLowerCase()).toContain('milk');

});
// this test is for adding an item to the trolley. It will search for Milk and add it to the trolley. It will then check if the item is displayed in the trolley.

test('update quantity of item in trolley', async ({ page }) => {

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    await page.locator('.qty-increment').first().click();
    await page.pause();
    const updatedQuantity = await page.locator('#quantity-705692').inputValue();
    expect(updatedQuantity).toBe('2');

});
// this test is for updating the quantity of an item in the trolley. It will click on the review order or checkout button and then increment the quantity of the first item in the trolley. It will then check if the quantity is updated to 2.

test('remove item from trolley', async ({ page }) => {

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    const removeButton = page.locator('button:has-text("Remove")');
    await removeButton.nth(1).click();
    

    const item = page.locator('.product-titleAndPrice');
    const count = await item.count();
    expect(count).toBe(1);

});
// this test is for removing an item from the trolley. It will click on the review order or checkout button and then click on the remove button of the second item in the trolley. It will then check if the item is removed from the trolley.

test('trolley persistency', async({ page }) =>{


    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    const headerText = await page.getByRole('heading', { name: 'Trolley' }).innerText();
    expect (headerText).toBe('Trolley'); 

    const item = page.locator('.product-details');
    await page.waitForSelector('.product-details');
    const count = await item.count();
    console.log(count);

    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'Sign Out' }).click();

    await page.waitForURL('https://www.woolworths.co.nz/');

    let loginPage = new LoginPage(page);
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);

    await loginPage.isLoggedIn();

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    const item2 = page.locator('.product-details');
    await page.waitForSelector('.product-details');
    const count2 = await item2.count();
    console.log(count2);

    expect(count).toBe(count2);

});
// this test is for checking the trolley persistency. It will click on the review order or checkout button and check the number of items in the trolley. It will then log out and log back in and check if the number of items in the trolley is the same.