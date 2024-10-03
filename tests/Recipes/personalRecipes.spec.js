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

test('view personal recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('text="Saved Recipes"').click();
    const recipesTitle = page.getByLabel('Prep & Cook Time5 mins + 10')
    await expect(recipesTitle).toBeVisible();

});

test('delete personal recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('text="Saved Recipes"').click();
    await page.locator('.recipeStamp-image').click();
    
    await page.getByRole('button', { name: 'Saved', exact: true }).click();

    await page.locator('span:has-text("Recipes")').click();
    await page.locator('text="Saved Recipes"').click();

    expect(page.locator('.listContent-errorMessage')).toBeVisible();


});
