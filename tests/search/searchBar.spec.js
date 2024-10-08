const { test, expect } = require('@playwright/test'); 
const exp = require('constants');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});
// go to the woolworths homepage

test('searching for popular items', async ({ page }) => {
    const searchBar = page.locator('#search'); 
    
    await searchBar.click(); 
  

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
// this test is for searching for popular items. It will click on the search bar and then check if the popular items are displayed in the suggestions.

test('Auto suggestion for search bar', async ({ page }) => {
   
    const searchBar = page.locator('#search'); 

    await searchBar.click();
    await page.keyboard.press('M');
    await page.keyboard.press('I');
    await page.pause();


    const suggestions = await page.getByRole('option').all();
    
    let texts = [];
    for (const suggestion of suggestions) {
        const text = await suggestion.innerText();
        texts.push(text);
        console.log(text);
    }

    for (const text of texts) {
        expect(text.toLowerCase()).toContain('mi');
    }
});
// this test is for the auto suggestion in the search bar. It will click on the search bar, type 'MI' and then check if the suggestions contain 'MI'.


