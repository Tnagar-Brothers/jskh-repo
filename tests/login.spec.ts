import { test } from '../fixtures/test.fixture';
import { users } from '../test-data/users';

test.describe('Login', () => {
  test('should login with valid credentials', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await loginPage.expectLoginSuccess();
  });
});
