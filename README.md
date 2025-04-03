# Cloud Calculator Automation Framework

A robust **Test Automation Framework (TAF)** for testing the [Google Cloud Calculator](https://cloud.google.com/products/calculator), leveraging modern web testing technologies.

## 🚀 Key Features

- Comprehensive UI testing for Google Cloud Calculator
- Advanced WebdriverIO (v9) with TypeScript integration
- Cross-browser and localization support
- Detailed reporting with Allure
- Dynamic test configuration
- Robust Page Object Model implementation

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Language** | TypeScript |
| **Test Framework** | WebdriverIO + Mocha |
| **Assertion Library** | Chai |
| **Browser Automation** | Chrome (Chromedriver) |
| **Reporting** | Allure Reports |
| **Environment Management** | cross-env, dotenv |
| **Additional Tools** | moment (logging), screenshot capture |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Run Tests

#### 🔸 Run all tests (default to `en`)
```bash
npm test:en
```

#### 🔸 Run smoke suite (English)
```bash
npm run test:smoke:en
```


> ℹ️ Locale-based text is dynamically injected using `process.env.LOCALE`

---

### 3. Generate & View Allure Report

```bash
npm run test:allure:open
```

---

## 🌐 Localization Support

You can run tests in multiple languages by setting the `LOCALE` environment variable. Supported:

- `en` – English
- `es` – Spanish

You can easily extend this via `config/locales.ts`.

---

## 📸 Screenshots on Failure

Failed tests will automatically save a screenshot to:

```
/logs/screenshots/test-fail-<timestamp>.png
```

---

## 🧪 Suites

```ts
suites: {
  smoke: ['./src/tests/smoke/**/*.tests.ts'],
}
```

Basic all Run with English locale:

```bash
npx npm run test:en
```

---

## 🧹 Clean Up

To remove old logs and reports:

```bash
npm run clean
```

---