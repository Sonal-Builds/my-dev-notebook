# Types of Testing – Especially for Frontend Developers
| **Type**                            | **Purpose**                                                        | **Example (React App)**                              |
| ----------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| ✅ **Unit Testing**                  | Test small, isolated pieces of logic (e.g., functions, components) | Testing a `Button` component renders correctly       |
| 🧩 **Integration Testing**          | Test how multiple units work together                              | Testing form + API + validation flow                 |
| 🌐 **End-to-End (E2E)**             | Simulate real user behavior from start to finish                   | User logs in, adds product to cart, checks out       |
| 👁️ **Visual/Regression Testing**   | Detect visual layout changes or UI breakage                        | Pixel-level diff of `Navbar` layout after CSS change |
| 🧪 **Snapshot Testing**             | Take a snapshot of UI output and compare future renders            | Jest snapshot of `Card` component                    |
| 🔗 **API Testing**                  | Test frontend interaction with APIs (mock or real)                 | Test `axios.post()` sends correct payload            |
| 📐 **Static Type Testing**          | Use TypeScript to catch type errors before runtime                 | Function expects `User[]` but receives `null`        |
| 🧪 **Manual Testing**               | Testing done by QA or developers by manually using the app         | Manually testing in different browsers or devices    |
| 📊 **Performance Testing**          | Identify bottlenecks in app speed or load time                     | Lighthouse, Web Vitals (FCP, LCP, etc.)              |
| 🔒 **Security Testing**             | Ensure app is safe from XSS, CSRF, and other attacks               | Ensuring `dangerouslySetInnerHTML` is used safely    |
| 🌍 **Accessibility (a11y)** Testing | Make sure app is usable with screen readers, keyboard-only users   | Use Lighthouse or axe-core to catch a11y issues      |

# 🧠 Frontend Tools Used in Testing

| **🔍 Type of Testing**         | **Goal**                                                   | **Modern Tools**                             | **Example (Frontend)**                  |
| ------------------------------ | ---------------------------------------------------------- | -------------------------------------------- | --------------------------------------- |
| ✅ **Unit Testing**             | Test a single function/component in isolation              | `Vitest`, `Jest`, `React Testing Library`    | Test a `Counter` component              |
| 🧪 **Integration Testing**     | Test how multiple parts work together (e.g., form + API)   | `Vitest`, `RTL`, `MSW`                       | Test login form calling API             |
| 🌐 **E2E Testing**             | Simulate real user interaction across pages and components | `Cypress`, `Playwright`, `TestCafe`          | Simulate login → add to cart            |
| 📸 **Snapshot Testing**        | Take and compare rendered output snapshots                 | `Vitest`, `Jest`                             | Snapshot of UI layout                   |
| 👁️ **Visual Regression**      | Catch unexpected UI changes pixel-by-pixel                 | `Percy`, `Chromatic`, `Loki`                 | Visual test after changing button style |
| 🌍 **Accessibility (a11y)**    | Ensure screen readers and keyboard nav work properly       | `axe-core`, `eslint-plugin-jsx-a11y`         | Verify all images have `alt` text       |
| 🔗 **API Interaction Testing** | Mock/test how frontend interacts with APIs                 | `Mock Service Worker (MSW)`, `Cypress`       | Mock API response in a form             |
| 🧪 **Static Type Testing**     | Use TypeScript to catch type bugs before runtime           | `tsc`, `tsconfig`, `tslint`, `eslint`        | Component receives wrong prop           |
| ⚡ **Performance Testing**      | Check performance (load time, TTFB, interactivity)         | `Lighthouse`, `Web Vitals`, `React Profiler` | App has poor LCP score                  |
| 🔐 **Security Testing**        | Ensure no XSS, CSRF, or token leakage                      | Manual, `ESLint rules`, headers, Snyk        | Prevent unsafe HTML injection           |
| 🧑‍💻 **Manual Testing**       | Human QA/dev testing in browsers, devices                  | Browsers, dev tools                          | Testing dropdown in Safari              |

# Learning Unit Testing with Vitest: Beginner to Advanced    

## Introduction to Unit Testing
Unit testing is a software testing method where individual components (units) of a software are tested in isolation from the rest of the system. Vitest is a modern, fast testing framework built for Vite projects that's gaining popularity in the JavaScript/TypeScript ecosystem.

Getting Started

1. Installation
First, let's set up Vitest in your project:

```bash
npm install -D vitest
# or
yarn add -D vitest
# or
pnpm add -D vitest
```
2. Basic Configuration

Create a vitest.config.js file:

```javascript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Your Vitest configuration options
  }
})
```

Add a test script to your package.json:

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest watch"
  }
}
```
Beginner Level

Writing Your First Test

Let's test a simple function that adds two numbers:

```javascript
// math.js
export function add(a, b) {
  return a + b
}
Create a test file math.test.js:

javascript
import { expect, test } from 'vitest'
import { add } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})
```
Run the test:

```bash
npm test

### Basic Assertions

Vitest uses expect-style assertions similar to Jest:

```javascript
test('basic assertions', () => {
  // Equality
  expect(1 + 1).toBe(2)
  expect({ a: 1 }).toEqual({ a: 1 })
  
  // Truthiness
  expect(null).toBeNull()
  expect(undefined).toBeUndefined()
  expect(true).toBeTruthy()
  
  // Numbers
  expect(5).toBeGreaterThan(4)
  expect(5).toBeLessThan(6)
  
  // Strings
  expect('hello').toMatch(/llo/)
  
  // Arrays
  expect([1, 2, 3]).toContain(2)
})
```
### Intermediate Level 

Test Suites

Organize related tests into suites with describe:

```javascript
import { describe, expect, test } from 'vitest'

describe('math operations', () => {
  test('addition', () => {
    expect(1 + 1).toBe(2)
  })
  
  test('subtraction', () => {
    expect(3 - 1).toBe(2)
  })
})
Setup and Teardown
javascript
describe('database', () => {
  let db
  
  beforeEach(() => {
    // Initialize database connection before each test
    db = initializeDB()
  })
  
  afterEach(() => {
    // Clean up after each test
    db.close()
  })
  
  test('insert record', () => {
    db.insert({ name: 'test' })
    expect(db.count()).toBe(1)
  })
})
```
### Mocking
Vitest provides powerful mocking capabilities:

```javascript
import { vi, test, expect } from 'vitest'

// Mock a function
const fetchData = vi.fn(() => Promise.resolve('data'))

test('mock function', async () => {
  await expect(fetchData()).resolves.toBe('data')
  expect(fetchData).toHaveBeenCalled()
})

// Mock a module
vi.mock('./api', () => ({
  fetchUsers: vi.fn(() => Promise.resolve(['user1', 'user2']))
}))
```
Testing Asynchronous Code
```javascript
// Promises
test('fetches data', () => {
  return fetchData().then(data => {
    expect(data).toBe('data')
  })
})

// Async/await
test('fetches data', async () => {
  const data = await fetchData()
  expect(data).toBe('data')
})

// Callbacks
test('callback test', done => {
  function callback(data) {
    try {
      expect(data).toBe('data')
      done()
    } catch (error) {
      done(error)
    }
  }
  
  fetchDataWithCallback(callback)
})
```
### Advanced Level

Snapshot Testing

```javascript
test('renders component correctly', () => {
  const result = renderComponent(<MyComponent />)
  expect(result).toMatchSnapshot()
})
```
