# Thunk Middleware in Redux

Thunk middleware is a popular middleware for Redux that allows you to write action creators that return functions instead of action objects. This enables you to handle asynchronous logic in your Redux application.

## Basic Example
```javascript
// Regular action creator (synchronous)
function increment() {
  return { type: 'INCREMENT' };
}

// Thunk action creator (can be asynchronous)
function incrementAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}
```

# Custom Thunk Middleware (for understanding purpuse)

#🧠 What does Thunk do?

Thunk allows action creators to return a function instead of an object. That function can contain async logic and receive dispatch and getState.

## ⚙️ Step 1: Create a Custom Thunk Middleware
```javascript
// customThunk.js
const customThunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    // If action is a function, call it with dispatch and getState
    return action(dispatch, getState);
  }
  return next(action); // Else, pass action to reducer
};

export default customThunk;
```
## ⚙️ Step 2: Create Redux Store with Custom Middleware
```javascript
// store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import customThunk from './customThunk';
import { userReducer } from './reducer';

const store = createStore(userReducer, applyMiddleware(customThunk));

export default store;
```
## 🧪 Step 3: Create Async Thunk Action
```javascript
// actions.js
export const fetchUsers = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_FAIL", error: error.message });
    }
  };
};
```
## 🧱 Step 4: Reducer
```javascript
// reducer.js
const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
```
## ⚛️ Step 5: Use in React
```javascript
// App.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './actions';

export default function App() {
  const { loading, users, error } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Custom Thunk Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

✅ Summary

🔧 You created your own thunk middleware.

🧠 You now understand how redux-thunk works under the hood.

⚛️ Used in a real React app with async action (API call).

## Awesome! Now that you’ve built your own custom thunk, let’s see how to do the same flow using the official redux-thunk middleware in a React + Redux app.

## ✅ Final Goal:
Fetch users from an API using redux-thunk (installed via npm/yarn).

## 📦 Step 1: Install redux-thunk
```bash
npm install redux redux-thunk react-redux
```
## ⚙️ Step 2: Create Redux Store with Thunk Middleware
```javascript
// store.js
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducer';

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
```
## 🧪 Step 3: Thunk Action Creator
```javascript
// actions.js
export const fetchUsers = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_FAIL', error: error.message });
    }
  };
};
```
## 🧱 Step 4: Reducer
```javascript
// reducer.js
const initialState = {
  loading: false,
  users: [],
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
```
## ⚛️ Step 5: Use in React Component
```javascript
// App.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## ✅ Summary of Thunk Middleware Flow:

Step	What it does

redux-thunk	Lets you return a function from action creators

Middleware Layer	Intercepts async function & injects dispatch

Dispatch Sequence	FETCH_START → FETCH_SUCCESS / FETCH_FAIL

# 🧪 3. Thunk withExtraArgument

📌 What is it?

A lesser-known but powerful feature of Redux Thunk: it allows passing a third argument to all thunks globally (besides dispatch and getState).

🧩 How to use:
Step 1: Configure Thunk with extra argument
```javascript
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const api = {
  getUsers: () => fetch('https://jsonplaceholder.typicode.com/users')
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api)) // 👈 passing extra
);
```
## Step 2: Use it inside thunk
```javascript
// userActions.js
export const fetchUsers = () => {
  return async (dispatch, getState, api) => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
    try {
      const response = await api.getUsers(); // 👈 using extraArgument
      const data = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_USERS_FAILURE', payload: err.message });
    }
  };
};
```

## 🚀 1. Dispatch Chaining

📌 What is it?
In Thunk, you can dispatch another action from inside a thunk—this is called dispatch chaining.

```javascript
// userActions.js
export const setLoading = () => ({
  type: 'SET_LOADING'
});

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(setLoading()); // First dispatch
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch({ type: 'SET_USERS', payload: data }); // Second dispatch
  };
};
```


```javascript
function deleteItem(id) {
  return function (dispatch, getState, { deleteAPI }) {
    dispatch(setLoading(true));

    return deleteAPI(id)
      .then(() => dispatch(setLoading(false)))
      .catch(() => {
        dispatch(setLoading(false));
        dispatch(setError('An Error Occurred'));
      });
  };
}
```
