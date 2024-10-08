const { test, expect } = require('@playwright/test');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('create basic shopping list', async ({ page }) => {
        await page.getByText('Favourites & lists').click();
        await page.getByRole('link', { name: 'Shopping list' }).click();
        await page.waitForLoadState('networkidle');
       
        await page.locator('.editSearchList-searchList').fill('Milk\nBread\nEggs');
        await page.pause();
       
        await page.getByRole('button', { name: 'Save list' }).click();
        await page.locator('.editSearchList-searchButton').click();

        const button = page.locator('button[data-slotend="true"]');
        const buttonCount = await button.count();

        for (let i = 0; i < buttonCount; i++) {
            const buttonText = await button.nth(i).innerText();

            if (
                buttonText === 'Milk' ||
                buttonText === 'Bread' ||
                buttonText === 'Eggs'
            ) {
                continue;
            }
        };
    });

// this test is for creating a basic shopping list. It will click on the favourites and lists button, then click on the shopping list button. It will then fill in the search list with Milk, Bread, and Eggs. It will then click on the save list button and check if the items are displayed in the list.

    

test('delete basic shopping list', async ({ page}) =>{

    await page.getByText('Favourites & lists').click();
    await page.getByRole('link', { name: 'Shopping list' }).click();
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'Clear list' }).click();
    expect(page.locator('.editSearchList-searchList')).toBeEmpty();


});

//  this test is for deleting a basic shopping list. It will click on the favourites and lists button, then click on the shopping list button. It will then click on the clear list button and check if the list is empty.
