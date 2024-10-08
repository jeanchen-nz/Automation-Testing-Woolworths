/**
 * Test suite for valid registration on Woolworths website.
 * 
 * @file /Users/jeanchen/Documents/GitHub/Automation-Testing-Woolworths/tests/login/notLoggedInValidLogin.spec.js
 */

const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Test case for valid registration.
 * 
 * This test navigates to the Woolworths website, attempts to sign in with valid credentials,
 * and verifies that the user is successfully logged in by checking for the presence of a 
 * greeting button with the user's name.
 * 
 * @param {Object} page - The Playwright page object used to interact with the browser.
 */
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

  