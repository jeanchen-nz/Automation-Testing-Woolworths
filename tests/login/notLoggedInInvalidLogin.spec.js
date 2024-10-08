/**
 * @fileoverview This file contains Playwright tests for the login functionality on the Woolworths website.
 * It includes tests for unregistered email login and invalid password login scenarios.
 */

const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Test for attempting to log in with an unregistered email.
 * 
 * @param {Object} page - The Playwright page object.
 * @returns {Promise<void>}
 */
test("Unregistered email login", async ({ page }) => {
    // Navigate to the Woolworths website
    await page.goto('https://www.woolworths.co.nz/');
    
    // Click on the 'Sign in or Register' button
    await page.getByRole('button', { name: 'Sign in or Register' }).click();
    
    // Click on the 'Sign In' button
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    
    // Fill in the email field with an unregistered email
    await page.getByTestId('email').getByPlaceholder('Please enter email address').fill('tesdtestww@mail.com');
    
    // Click on the submit button
    await page.getByTestId('submitButton').click();
    
    // Expect the 'Create your password' text to be visible
    await expect(page.locator('text="Create your password"')).toBeVisible();
});

/**
 * Test for attempting to log in with an invalid password.
 * 
 * @param {Object} page - The Playwright page object.
 * @returns {Promise<void>}
 */
test("Invalid password login", async ({ page }) => {
    // Navigate to the Woolworths website
    await page.goto('https://www.woolworths.co.nz/');
    
    // Click on the 'Sign in or Register' button
    await page.getByRole('button', { name: 'Sign in or Register' }).click();
    
    // Click on the 'Sign In' button
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    
    // Fill in the email field with a registered email
    await page.getByTestId('email').getByPlaceholder('Please enter email address').fill('testww@mail.com');
    
    // Click on the submit button
    await page.getByTestId('submitButton').click();
    
    // Fill in the password field with an invalid password
    await page.getByTestId('passwordInput').fill('1234');
    
    // Click on the submit button
    await page.getByTestId('submitButton').click();
    
    // Expect the 'Incorrect password' text to be visible
    await expect(page.locator('text="Incorrect password"')).toBeVisible();
});

