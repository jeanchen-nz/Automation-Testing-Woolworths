/**
 * @file /Users/jeanchen/Documents/GitHub/Automation-Testing-Woolworths/tests/profile/mobileUpdate.spec.js
 * @description This file contains automated tests for updating mobile and home phone details on the Woolworths website using Playwright.
 */

const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

/**
 * Before each test, navigate to the Woolworths homepage.
 * 
 * @param {Object} page - The Playwright page object.
 */
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

/**
 * Test to update the mobile phone number in the user's personal details.
 * 
 * @param {Object} page - The Playwright page object.
 */
test("Mobile Update", async ({ page }) => {
    // Click on the user greeting button
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    
    // Navigate to more account options
    await page.getByRole('link', { name: 'More account options' }).click();
    
    // Navigate to personal details
    await page.getByRole('link', { name: 'Personal details' }).click();
    
    // Clear the mobile phone input field
    await page.locator('#mobilePhone').fill("");
    
    // Fill the mobile phone input field with a new number
    await page.locator('#mobilePhone').fill('0271231132');
    
    // Click the update details button
    await page.getByRole('button', { name: 'Update details' }).click();
    
    // Verify that the details updated confirmation is visible
    await page.getByRole('button', { name: 'Details updated' }).isVisible();
});

/**
 * Test to update the home phone number in the user's personal details.
 * 
 * @param {Object} page - The Playwright page object.
 */
test("Home Phone Update", async ({ page }) => {
    // Click on the user greeting button
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    
    // Navigate to more account options
    await page.getByRole('link', { name: 'More account options' }).click();
    
    // Navigate to personal details
    await page.getByRole('link', { name: 'Personal details' }).click();
    
    // Fill the home phone input field with a new number
    await page.locator('#homePhone').fill("095123125");
    
    // Click the update details button
    await page.getByRole('button', { name: 'Update details' }).click();
    
    // Verify that the details updated confirmation is visible
    await page.getByRole('button', { name: 'Details updated' }).isVisible();
});

