const {test,expect} = require('@playwright/test');
const exp = require('constants');

test("Valid Registration", async({page})=>
{
    await page.goto("https://www.woolworths.co.nz/");
    await expect(page).toHaveTitle("Woolworths");



})