const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});


test("Mobile Update", async ({ page }) => {
    
    
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Personal details' }).click();
    await page.locator('#mobilePhone').fill("");
    await page.locator('#mobilePhone').fill('0271231131');
    await page.getByRole('button', { name: 'Update details' }).click();
    await page.getByRole('button', { name: 'Details updated' }).isVisible();


});

test("Home Phone Update", async ({ page }) => {
    
   
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Personal details' }).click();
    await page.locator('#homePhone').fill("095123124");
    await page.getByRole('button', { name: 'Update details' }).click();
    await page.getByRole('button', { name: 'Details updated' }).isVisible();


});
