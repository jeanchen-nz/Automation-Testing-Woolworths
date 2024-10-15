const { test, expect } = require('@playwright/test');
const exp = require('constants');

test("Invalid email Registration", async ({ page }) => {
    await page.goto("https://www.woolworths.co.nz/");

    await page.locator('button:has-text("Sign in or Register")').click();
    await page.locator("text='Register for online shopping'").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#emailInput").fill('useratdomaindotcom');
    await page.getByTestId('submitButton').click();
    await expect(page.locator('text="Please enter a valid email address"')).toBeVisible();

});
// This test navigates to the Woolworths website, attempts to register with an invalid email address, and verifies that the error message 'Please enter a valid email address' is displayed.

test("Invalid missing fields Registration", async ({ page }) => {
    await page.goto("https://www.woolworths.co.nz/");

    await page.locator('button:has-text("Sign in or Register")').click();
    await page.locator("text='Register for online shopping'").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#emailInput").fill('eurost@gmail.com');
    await page.getByTestId('submitButton').click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByTestId('passwordInput').fill('');
    await expect(page.locator('.submit-button')).toBeDisabled();

});
// This test navigates to the Woolworths website, attempts to register with missing fields, and verifies that the submit button is disabled.

test("Invalid password Registration", async ({ page }) => {
    await page.goto("https://www.woolworths.co.nz/");

    await page.locator('button:has-text("Sign in or Register")').click();
    await page.locator("text='Register for online shopping'").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#emailInput").fill('eurost@gmail.com');
    await page.getByTestId('submitButton').click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByTestId('passwordInput').fill('1234');
    await expect(page.locator('.submit-button')).toBeDisabled();

});
// This test navigates to the Woolworths website, attempts to register with an invalid password, and verifies that the submit button is disabled.

test.only("Duplicate email Registration", async ({ page }) => {
    await page.goto("https://www.woolworths.co.nz/");

    await page.locator('button:has-text("Sign in or Register")').click();
    await page.locator("text='Register for online shopping'").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#emailInput").fill('testww@mail.com');
    await page.getByTestId('submitButton').click();
    //await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('text="Enter your existing Woolworths account password to sign in."')).toBeVisible();

});
// This test navigates to the Woolworths website, attempts to register with a duplicate email address, and verifies that the error message 'Enter your existing Woolworths account password to sign in.' is displayed.

test("Invalid DOB Registration", async ({ page }) => {
    await page.goto("https://www.woolworths.co.nz/");

    await page.locator('button:has-text("Sign in or Register")').click();
    await page.locator("text='Register for online shopping'").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#emailInput").fill('eurost@gmail.com');
    await page.getByTestId('submitButton').click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByTestId('passwordInput').fill('Woolworths@1234');
    await page.locator("button#showPassword").click();
    await page.locator('.submit-button').click();
    await page.getByLabel('First name *').fill('Mary');
    await page.locator('#lastName').fill('Lee');
    await page.locator('#dobDay').fill('11');
    await page.locator('#dobMonth').fill('12');
    await page.locator('#dobYear').fill('2024');
    await page.locator('#mobile').fill('022 982 829');
    await expect(page.locator('text="The entered date of birth is not a valid date of birth."')).toBeVisible();

});
// This test navigates to the Woolworths website, attempts to register with an invalid date of birth, and verifies that the error message 'The entered date of birth is not a valid date of birth.' is displayed.


    
