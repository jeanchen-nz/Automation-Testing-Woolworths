const { test, expect } = require('@playwright/test');
const exp = require('constants');

test("Unregistered email login", async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
    await page.getByRole('button', { name: 'Sign in or Register' }).click();
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByTestId('email').getByPlaceholder('Please enter email address').fill('tesdtestww@mail.com');
    await page.getByTestId('submitButton').click();
    await expect(page.locator('text="Create your password"')).toBeVisible();
    
});


test("Invalid password login", async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
    await page.getByRole('button', { name: 'Sign in or Register' }).click();
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByTestId('email').getByPlaceholder('Please enter email address').fill('testww@mail.com');
    await page.getByTestId('submitButton').click();
    await page.getByTestId('passwordInput').fill('1234');
    await page.getByTestId('submitButton').click();
    await expect(page.locator('text="Incorrect password"')).toBeVisible();

});



