# Playwright Web Automation Framework

Minimal TypeScript Playwright test automation framework for web testing only.

## Folder Structure

```text
.
├── config/
│   └── env.ts
├── fixtures/
│   └── test.fixture.ts
├── pages/
│   └── LoginPage.ts
├── test-data/
│   └── users.ts
├── tests/
│   └── login.spec.ts
├── utils/
│   ├── env.util.ts
│   └── url.util.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npm run install:browsers
```

Create a local environment file:

```bash
cp .env.example .env
```

Update `.env` with your application URL, credentials, and selectors.

## Environment Variables

| Variable | Description | Default |
| --- | --- | --- |
| `BASE_URL` | Application base URL | `https://example.com` |
| `LOGIN_PATH` | Login page path | `/login` |
| `USERNAME` | Valid test username | empty |
| `PASSWORD` | Valid test password | empty |
| `LOGIN_USERNAME_SELECTOR` | Username input selector | `input[name="username"]` |
| `LOGIN_PASSWORD_SELECTOR` | Password input selector | `input[name="password"]` |
| `LOGIN_SUBMIT_SELECTOR` | Login button selector | `button[type="submit"]` |
| `LOGIN_SUCCESS_URL_PATTERN` | Expected URL after login | `**/dashboard` |

## Run Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Debug tests:

```bash
npm run test:debug
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Open the HTML report:

```bash
npm run report
```

## Example Test

The sample login test is in `tests/login.spec.ts`.

It uses:

- `pages/LoginPage.ts` for page interactions
- `fixtures/test.fixture.ts` for shared page objects
- `test-data/users.ts` for test data
- `.env` for environment-specific values

## Notes

- This framework is web-only.
- Mobile and API test support are intentionally not included yet.
- HTML reporting is configured in `playwright.config.ts`.
