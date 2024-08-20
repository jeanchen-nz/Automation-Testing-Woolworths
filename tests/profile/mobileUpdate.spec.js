const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');


test("Mobile Update", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    //const isLoggedIn = await loginPage.isLoggedIn();
    //expect(isLoggedIn).toBeTruthy();
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    //await page.waitForLoadState('domcontentloaded');
    await page.getByRole('link', { name: 'Personal details' }).click();
    await page.locator('#mobilePhone').fill("");
    await page.locator('#mobilePhone').fill('027123112');
    await page.getByRole('button', { name: 'Update details' }).click();
    await page.getByRole('button', { name: 'Details updated' }).isVisible();


});
