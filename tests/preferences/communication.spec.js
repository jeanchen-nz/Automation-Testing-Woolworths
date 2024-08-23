const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');


test("preferences via email", async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByRole('button', { name: 'Kia ora, Mary' }).click();
    await page.getByRole('link', { name: 'More account options' }).click();
    await page.getByRole('link', { name: 'Communication preferences' }).click();
    await page.getByText('Woolworths NZ weekly email').click();
    await page.getByText('Woolworths promotions').click();
    await page.getByLabel('Online shopping:').click();
    await page.getByLabel('Customer feedback:').click();
    await page.locator('#ss-preference-email div').click();
   

});


    
