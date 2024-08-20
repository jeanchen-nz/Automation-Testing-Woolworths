const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');


test("Mobile Update", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Personal details' }).click();
    await page.locator('#mobilePhone').fill("");
    await page.locator('#mobilePhone').fill('027123112');
    await page.getByRole('button', { name: 'Update details' }).click();
    await page.getByRole('button', { name: 'Details updated' }).isVisible();


});

test("Home Phone Update", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Personal details' }).click();
    await page.locator('#homePhone').fill("095123123");
    await page.getByRole('button', { name: 'Update details' }).click();
    await page.getByRole('button', { name: 'Details updated' }).isVisible();


});
