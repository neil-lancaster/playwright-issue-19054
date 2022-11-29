import { ForgotPasswordPage } from './ForgotPasswordPage';
import { test } from './fixtures';

test('navigates to the reset password page when the user sends an email', async ({
  page,
}) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.start();
  await forgotPasswordPage.populateEmail('name@email.com');
  await forgotPasswordPage.confirmEmail();
});
