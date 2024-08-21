const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');


test("email update", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Manage email and password' }).click();
    await page.locator('#changeEmailInput').fill("");
    await page.locator('#changeEmailInput').fill('test123@mail.com');
    await page.keyboard.press('Tab');
    await page.getByRole('button', { name: 'Update email' }).click();
    await page.locator('text="Successful"').isVisible();

    await page.locator('#changeEmailInput').fill("");
    await page.locator('#changeEmailInput').fill('testww@mail.com');
    await page.keyboard.press('Tab');
    await page.getByRole('button', { name: 'Update email' }).click();
    await page.locator('text="Successful"').isVisible();

});

test("password update", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Manage email and password' }).click();
    await page.getByTestId('resetPasswordLink').click();
    await expect(page.getByText('Resetting your password here')).toBeVisible();
    await page.getByTestId('submitButton').click();
    await expect(page.getByText('We\'ve sent a password reset')).toBeVisible();


});