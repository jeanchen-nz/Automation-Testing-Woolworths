const { test, expect } = require('@playwright/test');
const LoginPage = require('../common/loginClass');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.woolworths.co.nz/');
});

test('create saved list', async ({ page }) => {

    await page.getByRole('link', { name: 'Review order or checkout $' }).click();
    const headerText = await page.getByRole('heading', { name: 'Trolley' }).innerText();
    expect (headerText).toBe('Trolley'); 

    await page.getByRole('button', { name: 'Save items as list' }).click();
    await page.locator('#listName').fill('Milk');
    await page.keyboard.press('Tab');
    await page.waitForLoadState('networkidle');

    const saveListButton = page.getByRole('button', { name: 'Save list' });
    await saveListButton.click();

    
    expect(page.locator('h1[modal-header=""]')).toBeVisible();


});
// this test is for creating a saved list. It will click on the review order or checkout button, then save the items as a list and name the list as Milk. It will then click on the save list button and check if the modal is visible.

test('view saved list', async ({ page }) => {
    
        await page.getByText('Favourites & lists').click();
        await page.getByRole('link', { name: 'Saved lists' }).click();
        await page.waitForLoadState('networkidle');

        // const header = await page.getByRole('heading', { name: 'My saved lists' }).innerText();
        // expect header.toBe("My saved lists");
    
        const list = page.getByRole('link', { name: 'Milk' });
        const count = await list.count();
        expect(count).toBe(1);
    

    });
    // this test is for viewing the saved list. It will click on the favourites and lists button, then click on the saved lists button. It will then check if the saved list named Milk is visible.

test('edit saved list', async ({ page}) => {

    await page.getByText('Browse').click();
    await page.getByRole('menuitem', { name: 'Fruit & Veg' }).click();
    await page.getByRole('menuitem', { name: 'Fruit', exact: true }).click();
    await page.getByRole('menuitem', { name: 'Apples' }).click();

    const productTitles = await page.locator('img[src*="155003.jpg"]');
    await productTitles.click();
    await page.getByText('Add to saved list').click();
    await page.locator('.product-savedList').click();


    await page.getByText('Favourites & lists').click();
    await page.getByRole('link', { name: 'Saved lists' }).click();
    await page.waitForLoadState('networkidle');

    await page.getByRole('link', { name: 'Milk' }).click();
    const newProduct = page.locator('.cdx-card-cup-adjustment');
    const newProductCount = await newProduct.count();
   
    for (let i = 0; i < newProductCount; i++) {
        const card = newProduct.nth(i)
        const exploreButton = page.getByLabel('linkText')
        if (exploreButton) {
            continue;
        }

        const title = await card.innerText();
        expect(title.toLowerCase()).toContain('apple');
    }

        
});
//  this test is for editing the saved list. It will click on the browse button and then select the fruit and veg category, then the fruit category, and finally the apples category. It will then click on the add to saved list button and then click on the saved list. It will then click on the favourites and lists button, then click on the saved lists button. It will then click on the saved list named Milk and check if the products displayed are

test('delete product from saved list', async ({ page }) => {
        
        await page.getByText('Favourites & lists').click();
        await page.getByRole('link', { name: 'Saved lists' }).click();
        await page.waitForLoadState('networkidle');
    
        await page.getByRole('link', { name: 'Milk' }).click();
       
        const trashIcon = page.locator('product-stamp-grid').filter({ hasText: 'fresh fruit apples royal gala' }).getByLabel('Remove from saved list');
    
        await trashIcon.click();
        await page.waitForLoadState('networkidle');
        
        page.getByRole('button', { name: 'Remove', exact: true }).click();

});
// this test is for deleting a product from the saved list. It will click on the favourites and lists button, then click on the saved lists button. It will then click on the saved list named Milk, then click on the remove from saved list button and then click on the remove button.

test('delete saved list', async ({ page }) => {
    
        await page.getByText('Favourites & lists').click();
        await page.getByRole('link', { name: 'Saved lists' }).click();
        await page.waitForLoadState('networkidle');
        
        const deleteButton = page.getByRole('main').getByRole('img')
        await deleteButton.click();
        await page.locator('button:has-text("Yes, delete list")').click();

        await page.waitForLoadState('networkidle');
        const textElement = page.locator('text="No saved lists."');
        await expect(textElement).toBeVisible();

    });
 // this test is for deleting the saved list. It will click on the favourites and lists button, then click on the saved lists button. It will then click on the delete button and then click on the yes, delete list button. It will then check if the message "No saved lists." is displayed.
