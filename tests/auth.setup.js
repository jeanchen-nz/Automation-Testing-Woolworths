import { test as setup } from '@playwright/test';
const LoginPage = require('./common/loginClass');

const STORAGE_STATE = 'playwright/.auth/user.json'

setup('do login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('testww@mail.com', 'Countdown@2024');

    await loginPage.isLoggedIn();
    await page.context().storageState({ path: STORAGE_STATE });
});