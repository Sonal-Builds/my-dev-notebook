    # 🔄 Middleware in JavaScript (with Redux Context)

Middleware is like a middle layer between dispatching an action and the moment it reaches the reducer. It’s used to intercept, modify, log, delay, or trigger side effects in the Redux data flow.

## ✅ What Middleware Can Do

- Log actions (redux-logger)

- Handle async operations (redux-thunk, redux-saga)

- Validate or filter actions

- Show loaders/spinners

- Send analytics/events

| Middleware        | Use Case                        |
| ----------------- | ------------------------------- |
| `redux-thunk`     | Async logic using functions     |
| `redux-saga`      | Complex async using generators  |
| `redux-logger`    | Log actions/state               |
| Custom Middleware | Error handling, analytics, etc. |

## 🔹 Basic Flow

1 Action → 2. Middleware → 3. Reducer → 4. Store Update

## 🔹 Simple Example
```javascript
const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  let result = next(action); // Pass to the next middleware or reducer
  console.log('Next State:', store.getState());
  return result;
};
```
## 🔹 Applying Middleware
```javascript
import { createStore, applyMiddleware } from 'redux';
const store = createStore(reducer, applyMiddleware(loggerMiddleware));
```

# 📦 redux-logger – Redux Middleware for Debugging

redux-logger is a popular middleware for Redux that logs actions and state changes to the console — super useful for debugging and understanding the flow of your Redux app.

##🔍 What It Does

Every time you dispatch an action, redux-logger:

- Logs the previous state

- Logs the action being dispatched

- Logs the next state

## ✅ Installation
```bash 
npm install redux-logger
```
## 🧠 Basic Setup
```javascript
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger));
```

📋 Example Output in Console
```bash
action SET_USER @ 12:00:00.000
prev state { user: null }
action     { type: "SET_USER", payload: { name: "Sonal" } }
next state { user: { name: "Sonal" } }
```

## 🛑 When to Avoid

In production: Logs can expose sensitive data and slow down performance.

Use conditionally:

```javascript
const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));
```

## 🧩 2. Create a Custom Logger Middleware
```javascript
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('%cDispatching:', 'color: green;', action);
  const result = next(action); // Pass action to next middleware or reducer
  console.log('%cNext State:', 'color: blue;', store.getState());
  return result; // Optional: Useful if next() returns something
};
```
This is exactly how middleware like redux-logger is built!
```javascript
const store = createStore(
  counterReducer,
  applyMiddleware(loggerMiddleware)
);
```

