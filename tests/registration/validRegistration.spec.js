const { test, expect } = require('@playwright/test');
const exp = require('constants');

test("Valid Registration", async ({ page }) => {
    await page.goto("https://www.woolworths.co.nz/");

    await page.locator('button:has-text("Sign in or Register")').click();
    await page.locator("text='Register for online shopping'").click();
    await page.waitForLoadState('networkidle');
    await page.locator("#emailInput").fill('wesseicahocru-9326@yopmail.com');
    await page.getByTestId('submitButton').click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByTestId('passwordInput').fill('Woolworths@2024');
    await page.locator("button#showPassword").click();
    await page.locator('.submit-button').click();
    await page.getByLabel('First name *').fill('Mary');
    await page.locator('#lastName').fill('Lee');
    await page.locator('#dobDay').fill('11');
    await page.locator('#dobMonth').fill('12');
    await page.locator('#dobYear').fill('1999');
    await page.locator('#mobile').fill('022 982 829');
    await page.locator('label:has-text("Please send me personalised offers and updates from Woolworths.")').click();
    await page.getByTestId('submit').click();
    await page.waitForTimeout(7000);
    await page.locator('.inputText').fill('PO Box 89084, Torbay, Aucklan');
    await page.keyboard.press('d');
    await page.waitForTimeout(1000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.getByRole('option', { name: 'PO Box 89084, Torbay, Auckland' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add my delivery address' }).click();
    await page.getByRole('link', { name: 'Continue shopping from the' }).click();
    await expect(page.locator('text="Mary, welcome to Woolworths!"')).toBeVisible();
});