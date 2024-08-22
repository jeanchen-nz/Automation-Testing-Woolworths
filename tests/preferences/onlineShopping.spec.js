const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');


test("packing slip", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Online shopping preferences' }).click();
    await page.locator('#digital-packing-slip').click();
    await expect(page.locator('#digital-packing-slip')).toBeChecked();
    await page.getByRole('button', { name: 'Update preferences' }).click();
    await page.locator('text="Preferences updated"').isVisible();
    

});

test("other preferences", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Online shopping preferences' }).click();
    await page.getByText('Yes, I\'d like to receive').click();
    await page.getByText('Show \“Have you forgotten').click();
    await page.getByText('Default \“Yes').click();
    await page.getByRole('button', { name: 'Update preferences' }).click();
    await page.locator('text="Preferences updated"').isVisible();


});


