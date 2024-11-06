
/**
 * @file personalRecipes.spec.js
 * @description This file contains Playwright tests for various functionalities related to personal recipes on the Woolworths website.
 */

const { test, expect } = require('@playwright/test');
const LoginPage = require('../common/loginClass');
const exp = require('constants');

/**
 * Before each test, navigate to the Woolworths homepage.
 * @param {Object} page - The Playwright page object.
 */
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

/**
 * Test to view recipes.
 * @param {Object} page - The Playwright page object.
 */
test('view recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();

    const title = page.getByRole('heading', { name: 'Easy Meals' });

    await expect(title).toBeVisible();
});

/**
 * Test to create personal recipes.
 * @param {Object} page - The Playwright page object.
 */
test('create personal recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('.recipeStamp-title').nth(0).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();

    await expect(page.getByRole('button', { name: 'Saved', exact: true })).toBeVisible();
});

/**
 * Test to view personal recipes.
 * @param {Object} page - The Playwright page object.
 */
test('view personal recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('text="Saved Recipes"').click();
    const recipesTitle = page.getByLabel('Cheesy Pulled Pork Nachos');
    await expect(recipesTitle).toBeVisible();
});

/**
 * Test to delete personal recipes.
 * @param {Object} page - The Playwright page object.
 */
test.only('delete personal recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('text="Saved Recipes"').click();
    
    await page.getByLabel('Remove Cheesy Pulled Pork').click();
    
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('text="Saved Recipes"').click();
    await expect(page.locator('.listContent-errorMessage')).toBeVisible();
});

/**
 * Test to view detailed recipes.
 * @param {Object} page - The Playwright page object.
 */
test('view detailed recipes', async ({ page }) => {
    await page.locator('span:has-text("Recipes")').click();
    await page.locator('.recipeStamp-title').nth(0).click();
    await expect(page.getByRole('heading', { name: 'Ingredients' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Method' })).toBeVisible();
});

/**
 * Test to add ingredients to the trolley.
 * @param {Object} page - The Playwright page object.
 */
test('add ingredients to trolley', async ({ page }) => {
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

