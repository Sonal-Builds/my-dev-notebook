# 🧠 What is Redux?

- Redux is a state management library commonly used in JavaScript applications, especially with React.

- It helps manage and centralize application state in a predictable and scalable way.

- Why Redux - Efficient in Re-rendering, Easy to add states,

- Advantages - Update State Asynchronously -Thunk, Mutable State Update- immer

## 🧰 Core Concepts of Redux:

Store – Holds the state of your application.

Action – Plain JavaScript objects that describe what happened (type + payload).

Reducer – A pure function that takes current state and action, then returns a new state.

Dispatch – Sends an action to the store to update the state.

# Redux Core - in Plain JavaScript

User clicks "Increment"

      ↓

store.dispatch({ type: "INCREMENT" })

      ↓

Reducer gets current state, adds 1 to count

      ↓

New state is returned → Store updates it

      ↓

store.subscribe() detects change → Updates UI


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Plain Redux App</title>
</head>
<body>
  <h1>Redux Counter</h1>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>
  <p>Count: <span id="count">0</span></p>

  <!-- Load Redux from CDN -->
  <script src="https://unpkg.com/redux@4.2.1/dist/redux.min.js"></script>
  <!-- <script src="index.js"></script> -->
  <script src="redux.js"></script>
</body>
</html>
```
```javascript
const initialState = {
    count:0
}

//Create reducer function
function counterReducer(prev=initialState,action) {
    switch (action.type) {
        case 'increment':
            return {...prev, count :prev.count + 1}
        
        case 'decrement':
            return {...prev, count :prev.count - 1}

         default:
            return prev
        
    }
}

//Create Redux store
const store = Redux.createStore(counterReducer);

// for first load
// const state = store.getState();
// document.getElementById('count').innerText = state.count;

//Update UI on state change
store.subscribe(() => {
    document.getElementById('count').innerText = store.getState().count;
})

// Dispatch actions
document.getElementById('increment').onclick = () => {
    store.dispatch({
        type:"increment"
    })
}

document.getElementById('decrement').onclick = () => {
    store.dispatch({
        type:"decrement"
    })
}
```

## 🧠 Summary (In 3 Sentences)

Redux uses a central "store" to keep all app data.

You "dispatch" actions to tell Redux what happened.

The "reducer" updates the state, and the UI reflects that change.


# 🔁 Redux in React – Minimal & Simple Version (No Action Creators)

## 📦 1. Install Redux Packages
```bash
npm install redux react-redux
```

## 🧠 2. Create the Reducer

File: reducer.js

```javascript
const initialState = {
  count: 0
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
}
```
## 🧱 3. Create the Store

File: store.js

```javascript
import { createStore } from 'redux';
import { counterReducer } from './reducer';

export const store = createStore(counterReducer);
```
## 🌐 4. Provide Store to React

File: index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
## ⚙️ 5. Use Redux in Component

File: App.js

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default App;
```

# ✅ Step-by-Step: Using combineReducers & Action Creators in React Redux

📁 Folder Structure

/src
  ├── actions/
  │    ├── counterActions.js
  │    └── authActions.js
  ├── reducers/
  │    ├── counterReducer.js
  │    ├── authReducer.js
  │    └── rootReducer.js
  ├── store.js
  ├── App.js
  └── index.js

## 📄 1. counterActions.js

```javascript
export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};
```
## 📄 2. authActions.js
```javascript
export const login = () => {
  return { type: "LOGIN" };
};

export const logout = () => {
  return { type: "LOGOUT" };
};
```
## 📄 3. counterReducer.js
```javascript
const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```
## 📄 4. authReducer.js
```javascript
const initialState = { isAuthenticated: false };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true };
    case "LOGOUT":
      return { isAuthenticated: false };
    default:
      return state;
  }
};
```
## 📄 5. rootReducer.js
```javascript
import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
```
## 📄 6. store.js
```javascript
import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer);
```
## 📄 7. App.js
```javascript
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";
import { login, logout } from "./actions/authActions";

function App() {
  const count = useSelector((state) => state.counter.count);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h2>Auth: {isAuth ? "Logged In" : "Logged Out"}</h2>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default App;
```
📄 8. index.js
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

