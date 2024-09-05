const { test, expect } = require('@playwright/test');
const exp = require('constants');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(email, password) {
    await this.page.goto('https://www.woolworths.co.nz/');
    await this.page.getByRole('button', { name: 'Sign in or Register' }).click();
    await this.page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await this.page.getByTestId('email').getByPlaceholder('Please enter email address').fill(email);
    //move mouse cursor to email input field
    await this.page.getByTestId('email').hover();

    await this.page.keyboard.press('Tab');

    //wait for 1 second
    await this.page.waitForTimeout(1000);

    await this.page.getByTestId('submitButton').click();
    await this.page.getByTestId('passwordInput').fill(password);
    await this.page.getByTestId('passwordInput').hover();

    await this.page.keyboard.press('Tab');
    //wait for 1 second
    await this.page.waitForTimeout(1000);
    await this.page.getByTestId('submitButton').click();
    await this.page.waitForLoadState('networkidle');
  }

  async isLoggedIn() {
    return await this.page.getByRole('span', { name: 'Kia ora, Mary' }).isVisible();
  }
}

module.exports = LoginPage;

