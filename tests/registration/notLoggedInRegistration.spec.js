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
    await page.locator("#emailInput").fill('wesseicahocru-19101@yopmail.com');
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
    //click on the submit button
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
    await page.locator('#mobile').fill('022 982 8291');
    await page.getByText('Please send me personalised offers and updates from Woolworths.').click();
    
    
    await page.getByTestId('submit').click();
    // click on the submit button
    await page.waitForTimeout(7000);
    // await page.pause();
    // wait for 7 seconds
    await page.getByLabel('Find your street address').fill('867 New North Road, Mount Albert, Aucklan');
    // fill in the address 
    await page.keyboard.press('d');
    // press the 'd' key
    await page.waitForTimeout(1000);
    // wait for 1 second
    await page.keyboard.press('ArrowDown');
    // press the 'ArrowDown' key
    await page.keyboard.press('Enter');
    // press the 'Enter' key
    // await page.getByRole('option', { name: 'Flat1, 867 New North Road, Mount Albert, Auckland 1025' }).click();
    
    await page.waitForTimeout(1000);
    // wait for 1 second
    await page.getByRole('button', { name: 'Add my delivery address' }).click();
    // click on the 'Add my delivery address' button
    //await page.getByRole('link', { name: 'Continue shopping from the' }).click();
    // click on the 'Continue shopping from the' link
    await expect(page.locator('text="Mary, welcome to Woolworths!"')).toBeVisible();
    // expect the 'Mary, welcome to Woolworths!' text to be visible
});

// This test navigates to the Woolworths website, attempts to register with valid details, and verifies that the user is successfully registered by checking for the presence of a welcome message.