import { test as setup } from '@playwright/test';
const LoginPage = require('./common/loginClass');

const STORAGE_STATE = 'playwright/.auth/user.json'

setup('do login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.USER_NAME, process.env.PASSWORD);

    await loginPage.isLoggedIn();
    await page.context().storageState({ path: STORAGE_STATE });
});