const { test, expect } = require('@playwright/test');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('create saved list', async ({ page }) => {

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    const headerText = await page.getByRole('heading', { name: 'Trolley' }).innerText();
    expect (headerText).toBe('Trolley'); 

    await page.getByRole('button', { name: 'Save items as list' }).click();
    await page.locator('#listName').fill('Milk');
    await page.keyboard.press('Tab');
    await page.waitForLoadState('networkidle');

    const saveListButton = page.getByRole('button', { name: 'Save list' });
    await saveListButton.click();

    
    expect(page.locator('h1[modal-header=""]')).toBeVisible();


});

test('view saved list', async ({ page }) => {
    
        await page.getByText('Favourites & lists').click();
        await page.getByRole('link', { name: 'Saved lists' }).click();
        await page.waitForLoadState('networkidle');

        // const header = await page.getByRole('heading', { name: 'My saved lists' }).innerText();
        // expect header.toBe("My saved lists");
    
        const list = page.getByRole('link', { name: 'Milk' });
        const count = await list.count();
        expect(count).toBe(1);
    

    });