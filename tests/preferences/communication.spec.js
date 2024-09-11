const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});


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


test("preferences via SMS", async ({ page }) => {
    
    
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    await page.locator('#ss-preference-sms div').click();


});


test("preferences about alcohol", async ({ page }) => {
    
    
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    await page.getByLabel('I\'m alcohol free:').click();

});


    
