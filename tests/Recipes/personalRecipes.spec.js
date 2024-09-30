const { test, expect } = require('@playwright/test');
const LoginPage = require('../common/loginClass');
const exp = require('constants');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('view recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();

    expect(page.locator('text="Recipes"')).toBeVisible();

});

test('create personal recipes', async ({ page}) => {
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('.recipeStamp-title').nth(0).click();
    
    await page.getByRole('button', { name: 'Save', exact: true }).click();

    expect(page.getByRole('button', { name: 'Saved' })).toBeVisible();


});
