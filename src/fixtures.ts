import { expect, test as base } from '@playwright/test';

const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/account/forgot_password', (route, request) => {
      console.log(request.url(), request.method(), request.postDataJSON());
      route.fulfill();
    });
    await use(page);
  },
});

export { expect, test };
