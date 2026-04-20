import { expect, type Locator, type Page } from '@playwright/test';
import { env } from '../config/env';
import { buildPath } from '../utils/url.util';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(env.loginUsernameSelector);
    this.passwordInput = page.locator(env.loginPasswordSelector);
    this.submitButton = page.locator(env.loginSubmitSelector);
  }

  async goto(): Promise<void> {
    await this.page.goto(buildPath(env.loginPath));
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectLoginSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(env.loginSuccessUrlPattern);
  }
}
