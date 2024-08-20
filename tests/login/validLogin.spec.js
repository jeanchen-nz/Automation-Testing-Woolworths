/**
 * Represents a Login Page.
 * @class
 */
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test("Valid Registration", async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
    await page.getByRole('button', { name: 'Sign in or Register' }).click();
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await page.getByTestId('email').getByPlaceholder('Please enter email address').fill('testww@mail.com');
    await page.getByTestId('submitButton').click();
    await page.getByTestId('passwordInput').fill('Countdown@2024');
    await page.getByTestId('submitButton').click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('button', { name: 'Kia ora, Mary' })).toBeVisible();
  });


  
