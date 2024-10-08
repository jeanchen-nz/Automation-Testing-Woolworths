/**
 * @fileoverview This file contains the LoginPage class which provides methods to perform login actions on the Woolworths website using Playwright.
 */

const { test, expect } = require('@playwright/test');
const exp = require('constants');

/**
 * Represents the login page of the Woolworths website.
 */
class LoginPage {
  /**
   * Creates an instance of LoginPage.
   * @param {import('@playwright/test').Page} page - The Playwright page object.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Logs in to the Woolworths website using the provided email and password.
   * @param {string} email - The email address to use for login.
   * @param {string} password - The password to use for login.
   * @returns {Promise<void>}
   */
  async login(email, password) {
    await this.page.goto('https://www.woolworths.co.nz/');
    await this.page.getByRole('button', { name: 'Sign in or Register' }).click();
    await this.page.getByRole('button', { name: 'Sign In', exact: true }).click();
    await this.page.getByTestId('email').getByPlaceholder('Please enter email address').fill(email);
    await this.page.getByTestId('email').hover();
    await this.page.keyboard.press('Tab');
    await this.page.waitForTimeout(1000);
    await this.page.getByTestId('submitButton').click();
    await this.page.getByTestId('passwordInput').fill(password);
    await this.page.getByTestId('passwordInput').hover();
    await this.page.keyboard.press('Tab');
    await this.page.waitForTimeout(1000);
    await this.page.getByTestId('submitButton').click();
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Checks if the user is logged in by verifying the presence of a greeting message.
   * @returns {Promise<boolean>} - A promise that resolves to true if the user is logged in, otherwise false.
   */
  async isLoggedIn() {
    return await this.page.getByRole('span', { name: 'Kia ora, Mary' }).isVisible();
  }
}

module.exports = LoginPage;


