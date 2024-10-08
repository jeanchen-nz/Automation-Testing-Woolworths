/**
 * @file emailPassword.spec.js
 * @description This file contains automated tests for updating email and password on the Woolworths website using Playwright.
 */

const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    /**
     * Hook that runs before each test. Navigates to the Woolworths homepage.
     * @param {Object} page - The Playwright page object.
     */
    await page.goto('https://www.woolworths.co.nz/');
});

test("email update", async ({ page }) => {
    /**
     * Test case for updating the email address.
     * @param {Object} page - The Playwright page object.
     */
    
    // Click on the user greeting button to open account options
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    
    // Navigate to more account options
    await page.getByRole('link', { name: 'More account options' }).click();
    
    // Navigate to manage email and password section
    await page.getByRole('link', { name: 'Manage email and password' }).click();
    
    // Clear the email input field and fill it with a new email address
    await page.locator('#changeEmailInput').fill("");
    await page.locator('#changeEmailInput').fill('test123@mail.com');
    
    // Press the Tab key to move focus out of the email input field
    await page.keyboard.press('Tab');
    
    // Click the button to update the email address
    await page.getByRole('button', { name: 'Update email' }).click();
    
    // Verify that the email update was successful
    await page.locator('text="Successful"').isVisible();

    // Repeat the process with a different email address
    await page.locator('#changeEmailInput').fill("");
    await page.locator('#changeEmailInput').fill('testww@mail.com');
    await page.keyboard.press('Tab');
    await page.getByRole('button', { name: 'Update email' }).click();
    await page.locator('text="Successful"').isVisible();
});

test("password update", async ({ page }) => {
    /**
     * Test case for updating the password.
     * @param {Object} page - The Playwright page object.
     */
    
    // Click on the user greeting button to open account options
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    
    // Navigate to more account options
    await page.getByRole('link', { name: 'More account options' }).click();
    
    // Navigate to manage email and password section
    await page.getByRole('link', { name: 'Manage email and password' }).click();
    
    // Click on the link to reset the password
    await page.getByTestId('resetPasswordLink').click();
    
    // Verify that the password reset instructions are visible
    await expect(page.getByText('Resetting your password here')).toBeVisible();
    
    // Click the button to submit the password reset request
    await page.getByTestId('submitButton').click();
    
    // Verify that the password reset confirmation message is visible
    await expect(page.getByText('We\'ve sent a password reset')).toBeVisible();
});

