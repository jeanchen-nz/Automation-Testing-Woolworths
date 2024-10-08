/**
 * @file onlineShopping.spec.js
 * @description This file contains automated tests for online shopping preferences on the Woolworths website using Playwright.
 */

const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    /**
     * Navigates to the Woolworths homepage before each test.
     * @param {Object} page - The Playwright page object.
     */
    await page.goto('https://www.woolworths.co.nz/');
});

test("packing slip", async ({ page }) => {
    /**
     * Test to verify the functionality of the digital packing slip preference.
     * @param {Object} page - The Playwright page object.
     */
    
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Online shopping preferences' }).click();
    await page.locator('#digital-packing-slip').click();
    await expect(page.locator('#digital-packing-slip')).toBeChecked();
    await page.getByRole('button', { name: 'Update preferences' }).click();
    await page.locator('text="Preferences updated"').isVisible();
});

test("other preferences", async ({ page }) => {
    /**
     * Test to verify the functionality of other online shopping preferences.
     * @param {Object} page - The Playwright page object.
     */
    
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Online shopping preferences' }).click();
    await page.getByText('Yes, I\'d like to receive').click();
    await page.getByText('Show \“Have you forgotten').click();
    await page.getByText('Default \“Yes').click();
    await page.getByRole('button', { name: 'Update preferences' }).click();
    await page.locator('text="Preferences updated"').isVisible();
});


