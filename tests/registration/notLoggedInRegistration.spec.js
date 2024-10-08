const { test, expect } = require('@playwright/test');
const exp = require('constants');

test("Valid Registration", async ({ page }) => {
    await page.goto("https://www.woolworths.co.nz/");
// go to the Woolworths website
    await page.locator('button:has-text("Sign in or Register")').click();
    // click on the 'Sign in or Register' button
    await page.locator("text='Register for online shopping'").click();
    // click on the 'Register for online shopping' button
    await page.waitForLoadState('networkidle');
    // wait for the page to load
    await page.locator("#emailInput").fill('wesseicahocru-9111@yopmail.com');
    // fill in the email field with a valid email address   
    await page.getByTestId('submitButton').click();
    // click on the submit button
    await page.waitForLoadState('domcontentloaded');
    // wait for the page to load
    await page.getByTestId('passwordInput').fill('Woolworths@2024');
    // fill in the password field with a valid password
    await page.locator("button#showPassword").click();
    // click on the 'show password' button
    await page.locator('.submit-button').click();
    // click on the submit button
    await page.getByLabel('First name *').fill('Mary');
    // fill in the first name field with 'Mary'
    await page.locator('#lastName').fill('Lee');
    // fill in the last name field with 'Lee'
    await page.locator('#dobDay').fill('11');
    // fill in the day of birth field with '11'
    await page.locator('#dobMonth').fill('12');
    // fill in the month of birth field with '12'
    await page.locator('#dobYear').fill('1999');
    // fill in the year of birth field with '1999'
    await page.locator('#mobile').fill('022 982 828');
    // fill in the mobile number field with '022 982 828'
    await page.locator('label:has-text("Please send me personalised offers and updates from Woolworths.")').click();
    // click on the 'Please send me personalised offers and updates from Woolworths.' checkbox
    await page.getByTestId('submit').click();
    // click on the submit button
    await page.waitForTimeout(7000);
    // wait for 7 seconds
    await page.getByLabel('Find your street address').fill('PO Box 89084, Torbay, Aucklan');
    // fill in the street address field with 'PO Box 89084, Torbay, Aucklan'
    await page.keyboard.press('d');
    // press the 'd' key
    await page.waitForTimeout(1000);
    // wait for 1 second
    await page.keyboard.press('ArrowDown');
    // press the 'ArrowDown' key
    await page.keyboard.press('Enter');
    // press the 'Enter' key
    await page.getByRole('option', { name: 'PO Box 89084, Torbay, Auckland' }).click();
    // click on the 'PO Box 89084, Torbay, Auckland' option
    await page.waitForTimeout(1000);
    // wait for 1 second
    await page.getByRole('button', { name: 'Add my delivery address' }).click();
    // click on the 'Add my delivery address' button
    await page.getByRole('link', { name: 'Continue shopping from the' }).click();
    // click on the 'Continue shopping from the' link
    await expect(page.locator('text="Mary, welcome to Woolworths!"')).toBeVisible();
    // expect the 'Mary, welcome to Woolworths!' text to be visible
});

// This test navigates to the Woolworths website, attempts to register with valid details, and verifies that the user is successfully registered by checking for the presence of a welcome message.