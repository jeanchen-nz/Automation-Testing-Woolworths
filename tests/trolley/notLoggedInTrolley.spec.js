const { test, expect } = require('@playwright/test');

test('prevent view trolley without login', async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    await page.waitForLoadState('networkidle');
    // Check if the user is redirected to the login page
    await page.getByRole('heading', { name: 'Enter your email' }).isVisible();

});
// this test is for preventing the user from viewing the trolley without logging in. It will click on the review order or checkout button and check if the user is redirected to the login page.

test('prevent adding item to trolley without login', async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
    const searchBar = page.locator('#search');
    await searchBar.click();
    await page.keyboard.type('Milk');
    await page.keyboard.press('Enter');
    await page.locator('.addToTrolley-btn--add').first().click();
    await page.waitForLoadState('networkidle');
    // Check if a popup is displayed with text 'Sign in to add items to your trolley.'
    await page.locator('text="Sign in to add items to your trolley."').isVisible();

});
// this test is for preventing the user from adding an item to the trolley without logging in. It will search for Milk and add it to the trolley. It will then check if a popup is displayed with the text 'Sign in to add items to your trolley.'