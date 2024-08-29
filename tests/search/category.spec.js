const { test, expect } = require('@playwright/test');
const exp = require('constants');
const LoginPage = require('../common/loginClass');


test("search by category", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');
    await page.getByText('Browse').click();
    await page.getByRole('menuitem', { name: 'Fruit & Veg' }).click();
    await page.getByRole('menuitem', { name: 'Fruit', exact: true }).click();
    await page.getByRole('menuitem', { name: 'Apples' }).click();
    await page.pause();

    const productTitles = page.locator('cdx-card');
    const productCount = await productTitles.count();

    for (let i = 0; i < productCount; i++) {
        const card = productTitles.nth(i)
        const exploreButton = page.getByLabel('linkText')
        if(exploreButton) {
            continue;
        }

        const title = await card.innerText();
        expect(title.toLowerCase()).toContain('apple'); 
        
        }


});



