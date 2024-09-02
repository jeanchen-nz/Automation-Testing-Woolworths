const { test, expect } = require('@playwright/test'); 
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('searching for popular items', async ({ page }) => {
    const searchBar = page.locator('#search'); 
    await searchBar.click(); 
    await page.pause();

    const popularItems = [
        'Milk',
        'Bread',
        'Eggs',
        'Biscuits',
        'Butter',
        'Crackers',
        'Bananas',
        'Chips',
        'Cheese'
    ];

    const suggestions = await page.getByRole('option').all();
    
    let texts = [];
    for (const suggestion of suggestions) {
        const text = await suggestion.innerText();
        texts.push(text);
    }

    for (const item of popularItems) {
        const itemFound = texts.includes(item);
        expect(itemFound).toBeTruthy();
    }

});