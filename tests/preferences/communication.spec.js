/**
 * @fileoverview This file contains automated tests for communication preferences on the Woolworths website.
 * It uses Playwright for browser automation and testing.
 */
// Import the Playwright test library and the expect assertion library

// Import the constants module

// Import the LoginPage class from the common directory
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
 * @description This test navigates through the Woolworths website to update the communication preferences for email notifications.
 * It clicks on the user greeting button, navigates to more account options, and then to communication preferences.
 * It selects various email communication options such as Woolworths NZ weekly email, Woolworths promotions, Online shopping, and Customer feedback.
 * Finally, it confirms the preferences by clicking on the email preference section.
 */
test("preferences via email", async ({ page }) => {
    /**
     * Click on the user greeting button.
     */
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    
    /**
     * Click on the link for more account options.
     */
    await page.getByRole('link', { name: 'More account options' }).click();
    
    /**
     * Click on the link for communication preferences.
     */
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    
    /**
     * Select the Woolworths NZ weekly email option.
     */
    await page.getByText('Woolworths NZ weekly email').click();
    
    /**
     * Select the Woolworths promotions option.
     */
    await page.getByText('Woolworths promotions').click();
    
    /**
     * Select the Online shopping option.
     */
    await page.getByLabel('Online shopping:').click();
    
    /**
     * Select the Customer feedback option.
     */
    await page.getByLabel('Customer feedback:').click();
    
    /**
     * Confirm the email preferences by clicking on the email preference section.
     */
    await page.locator('#ss-preference-email div').click();
});

/**
 * Test to update communication preferences via SMS.
 * 
 * @param {Object} page - The Playwright page object.
 * @description This test navigates through the Woolworths website to update the communication preferences for SMS notifications.
 * It clicks on the user greeting button, navigates to more account options, and then to communication preferences.
 * Finally, it confirms the preferences by clicking on the SMS preference section.
 */
test("preferences via SMS", async ({ page }) => {
    /**
     * Click on the user greeting button.
     */
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    
    /**
     * Click on the link for more account options.
     */
    await page.getByRole('link', { name: 'More account options' }).click();
    
    /**
     * Click on the link for communication preferences.
     */
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    
    /**
     * Confirm the SMS preferences by clicking on the SMS preference section.
     */
    await page.locator('#ss-preference-sms div').click();
});

/**
 * Test to update communication preferences about alcohol.
 * 
 * @param {Object} page - The Playwright page object.
 * @description This test navigates through the Woolworths website to update the communication preferences regarding alcohol notifications.
 * It clicks on the user greeting button, navigates to more account options, and then to communication preferences.
 * Finally, it selects the option indicating that the user is alcohol-free.
 */
test("preferences about alcohol", async ({ page }) => {
    /**
     * Click on the user greeting button.
     */
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    
    /**
     * Click on the link for more account options.
     */
    await page.getByRole('link', { name: 'More account options' }).click();
    
    /**
     * Click on the link for communication preferences.
     */
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    
    /**
     * Select the option indicating that the user is alcohol-free.
     */
    await page.getByLabel('I\'m alcohol free:').click();
});


    
