import { Locator, Page } from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly confirmEmailButton: Locator;
  readonly resetPasswordButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.confirmEmailButton = page.getByRole('button', {
      name: 'Confirm email',
    });
    this.resetPasswordButton = page.getByRole('button', {
      name: 'Reset password',
    });
  }

  async start() {
    await this.page.goto('http://localhost:3000/forgot-password');
  }

  async populateEmail(value: string) {
    await this.emailInput.fill(value);
  }

  async confirmEmail() {
    await this.confirmEmailButton.click();
  }
}
