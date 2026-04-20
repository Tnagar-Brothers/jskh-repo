import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://example.com',
  loginPath: process.env.LOGIN_PATH ?? '/login',
  username: process.env.USERNAME ?? '',
  password: process.env.PASSWORD ?? '',
  loginUsernameSelector: process.env.LOGIN_USERNAME_SELECTOR ?? 'input[name="username"]',
  loginPasswordSelector: process.env.LOGIN_PASSWORD_SELECTOR ?? 'input[name="password"]',
  loginSubmitSelector: process.env.LOGIN_SUBMIT_SELECTOR ?? 'button[type="submit"]',
  loginSuccessUrlPattern: process.env.LOGIN_SUCCESS_URL_PATTERN ?? '**/dashboard'
};
