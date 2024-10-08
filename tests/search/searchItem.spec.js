const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test("search by category", async ({ page }) => {
    await page.getByText('Browse').click();
    await page.getByRole('menuitem', { name: 'Fruit & Veg' }).click();
    await page.getByRole('menuitem', { name: 'Fruit', exact: true }).click();
    await page.getByRole('menuitem', { name: 'Apples' }).click();

    const productTitles = page.locator('cdx-card');
    const productCount = await productTitles.count();

    for (let i = 0; i < productCount; i++) {
        const card = productTitles.nth(i)
        const exploreButton = page.getByLabel('linkText')
        if (exploreButton) {
            continue;
        }

        const title = await card.innerText();
        expect(title.toLowerCase()).toContain('apple');
    }
});
// this test is for searching by category. It will click on the browse button and then select the fruit and veg category, then the fruit category, and finally the apples category. It will then check if the products displayed are apples.

test("search by search bar", async ({ page }) => {
    await page.locator('#search').fill('apple');
    await page.locator('#search').press('Enter');

    const productTitles = page.locator('cdx-card');
    const productCount = await productTitles.count();

    for (let i = 0; i < productCount; i++) {
        const card = productTitles.nth(i)
        const exploreButton = page.getByLabel('linkText')
        if (exploreButton) {
            continue;
        }

        const title = await card.innerText();
        expect(title.toLowerCase()).toContain('apple');

    }

});
// this test is for searching by the search bar. It will type in apple in the search bar and then check if the products displayed are apples

test("search by invalid keywords", async ({ page }) => {
    await page.locator('#search').fill('xyz123');
    await page.locator('#search').press('Enter');
    await expect(page.locator('.heading--huge')).toHaveText('No results found for "xyz123"');
});
// this test is for searching by invalid keywords. It will type in xyz123 in the search bar and then check if the message "No results found for "xyz123"" is displayed.


