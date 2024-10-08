/**
 * @fileoverview This file contains automated tests for communication preferences on the Woolworths website.
 * It uses Playwright for browser automation and testing.
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
 * Test to update communication preferences via email.
 * 
 * @param {Object} page - The Playwright page object.
 */
test("preferences via email", async ({ page }) => {
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    await page.getByText('Woolworths NZ weekly email').click();
    await page.getByText('Woolworths promotions').click();
    await page.getByLabel('Online shopping:').click();
    await page.getByLabel('Customer feedback:').click();
    await page.locator('#ss-preference-email div').click();
});

/**
 * Test to update communication preferences via SMS.
 * 
 * @param {Object} page - The Playwright page object.
 */
test("preferences via SMS", async ({ page }) => {
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    await page.locator('#ss-preference-sms div').click();
});

/**
 * Test to update communication preferences about alcohol.
 * 
 * @param {Object} page - The Playwright page object.
 */
test("preferences about alcohol", async ({ page }) => {
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    await page.getByLabel('I\'m alcohol free:').click();
});


    
