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

test.only('create personal recipes', async ({ page}) => {
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

test('view detailed recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();

    await page.locator('.recipeStamp-title').nth(0).click();
   

    expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
    expect(page.getByRole('heading', { name: 'Method' })).toBeVisible();


});

test('add ingredients to trolley', async ({ page}) => {

    await page.locator('span:has-text("Recipes")').click();

    await page.locator('.recipeStamp-title').nth(0).click();
    await page.getByRole('button', { name: 'Add items to trolley', exact: true }).click();
    
    
    await page.getByRole('button', { name: 'Add to trolley', exact: true }).click();
    const ingredient = await page.locator('.ingredientStamp-productName').nth(0).textContent();

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    
    const item = page.locator('.product-titleAndPrice');
    const count = await item.count();
    for (let i = 0; i < count; i++) {
        const title = await item.nth(i).innerText();
        expect(title.toLowerCase()).toContain(ingredient);
    }

});