
# Learning React Unit Testing with Jest and React Testing Library: Beginner to Advanced

## Introduction to React Testing

Testing React applications ensures your components work as expected. The standard stack is:

Jest: Test runner and assertion library

React Testing Library (RTL): Helps test components like users interact with them

jest-dom: Custom Jest matchers for DOM assertions

### Getting Started
1. Installation
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest
```
2. Basic Configuration

Create/setup these files:

jest.config.js:

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

jest.setup.js:
```javascript
import '@testing-library/jest-dom';
```
## Beginner Level

Testing a Simple Component

Button.js:

```jsx
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);
export default Button;
Button.test.js:

jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  await userEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```
Testing Component Props

Greeting.js:

```jsx
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
export default Greeting;
Greeting.test.js:
```
```jsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('displays greeting with name', () => {
  render(<Greeting name="Alice" />);
  expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
});

test('displays default greeting when no name', () => {
  render(<Greeting />);
  expect(screen.getByText('Hello, !')).toBeInTheDocument();
});
```
## Intermediate Level

Testing Forms

LoginForm.js:

```jsx
import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};
LoginForm.test.js:
```
```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

test('submits form with email and password', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);
  
  await userEvent.type(screen.getByPlaceholderText('Email'), 'test@example.com');
  await userEvent.type(screen.getByPlaceholderText('Password'), 'password123');
  await userEvent.click(screen.getByText('Login'));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});
Testing Hooks with renderHook
Install additional package:

bash
npm install --save-dev @testing-library/react-hooks
useCounter.js:
```
```jsx
import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return { count, increment, decrement };
};
useCounter.test.js:
```

```jsx
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should use counter', () => {
  const { result } = renderHook(() => useCounter());
  
  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe('function');
});

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
```
## Advanced Level

Testing Context API

ThemeContext.js:

```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
ThemeToggle.test.js:
```
```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme } from './ThemeContext';

const TestComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span>Current theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

test('toggles theme', async () => {
  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );
  
  expect(screen.getByText(/current theme: light/i)).toBeInTheDocument();
  
  await userEvent.click(screen.getByText('Toggle Theme'));
  expect(screen.getByText(/current theme: dark/i)).toBeInTheDocument();
});
```
## Testing Redux Components
First install redux testing utilities:

```bash
npm install --save-dev @reduxjs/toolkit react-redux
Counter.js:
```
```jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
```
Counter.test.js:

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import Counter from './Counter';

const renderWithRedux = (component, { initialState } = {}) => {
  const store = configureStore({
    reducer: { counter: counterReducer },
    preloadedState: initialState
  });
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};

test('renders with initial state', () => {
  renderWithRedux(<Counter />, {
    initialState: { counter: { value: 10 } }
  });
  expect(screen.getByText('10')).toBeInTheDocument();
});

test('can increment and decrement', async () => {
  const { store } = renderWithRedux(<Counter />);
  
  await userEvent.click(screen.getByText('+'));
  expect(store.getState().counter.value).toBe(1);
  
  await userEvent.click(screen.getByText('-'));
  expect(store.getState().counter.value).toBe(0);
});
```
Testing React Router Components

Install react-router:

```bash
npm install react-router-dom
```
Navigation.js:

```jsx
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);
```
Navigation.test.js:

```jsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
});
```
## Mocking API Calls with MSW (Mock Service Worker)

Install MSW:

```bash
npm install --save-dev msw
```
UserList.js:

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```
UserList.test.js:

```jsx
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import UserList from './UserList';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('displays list of users', async () => {
  render(<UserList />);
  
  await waitFor(() => {
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});

test('displays error message when API fails', async () => {
  server.use(
    rest.get('/api/users', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  
  render(<UserList />);
  
  await waitFor(() => {
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
```
Best Practices for React Testing

Test behavior, not implementation: Focus on what users see and do

Use screen for queries: Avoid destructuring render methods

Prefer *ByRole queries: They most closely mimic how users find elements

Use async/await properly: Handle asynchronous behavior with waitFor

Keep tests isolated: Mock external dependencies

Avoid snapshot testing for components: They often lead to brittle tests

Test edge cases: Empty states, error states, loading states

Keep tests focused: Each test should verify one specific behavior

## Advanced Patterns

Custom Render Functions 

Create test-utils.js:

```jsx
import { render } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders = ({ children }) => (
  <ThemeProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
```
Now in your tests:

```jsx
import { render, screen } from '../test-utils';

test('uses custom render', () => {
  render(<ComponentNeedingContextAndRouter />);
  // Test as normal
});
```
Component Interaction Tests
Accordion.test.js:

```jsx
test('expands and collapses content', async () => {
  render(<Accordion title="Section" content="Details" />);
  
  expect(screen.queryByText('Details')).not.toBeInTheDocument();
  
  await userEvent.click(screen.getByText('Section'));
  expect(screen.getByText('Details')).toBeInTheDocument();
  
  await userEvent.click(screen.getByText('Section'));
  expect(screen.queryByText('Details')).not.toBeInTheDocument();
});
```
Conclusion
React testing with Jest and React Testing Library provides a powerful way to ensure your components work as expected. Key takeaways:

Start simple: Test basic rendering and interactions first

Test behavior: Focus on what users experience

Handle complexity: Learn to test hooks, context, and async code

Mock wisely: Use tools like MSW for API mocking

Follow best practices: Keep tests maintainable and valuable

As you become more comfortable with React testing, you'll be able to:

Test complex state management

Implement integration tests between components

Set up end-to-end testing with tools like Cypress

Integrate testing into your CI/CD pipeline

Remember that good tests give you confidence to refactor and add features without breaking existing functionality.