# 🧠 What is Redux Toolkit?

Redux Toolkit (RTK) is the official, recommended way to use Redux.

🔧 It simplifies Redux development by reducing boilerplate, improving code readability, and making Redux easier to learn and use.

## ⚡ Why Redux Toolkit?

Traditional Redux had:

Too much boilerplate (action types, creators, reducers)

Complex setup

Mutability issues (you had to be very careful not to mutate state directly)

Middleware and devtools setup was manual

Redux Toolkit solves all of that with:
| Feature          | Traditional Redux | Redux Toolkit             |
| ---------------- | ----------------- | ------------------------- |
| Boilerplate      | A lot             | Very little               |
| Immer            | ❌                 | ✅ (built-in immutability) |
| DevTools         | Manual            | ✅ Auto-configured         |
| Async (thunk)    | Manual setup      | ✅ Built-in                |
| Slice-based code | ❌                 | ✅ Organized & clean       |
| Middleware       | Manual            | ✅ Easy to add             |

# 🚀 Core APIs of Redux Toolkit
## 1. configureStore()

Creates the Redux store and auto-applies:

Redux DevTools

Middleware like Redux Thunk

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```
## 2. createSlice()

Creates:

Action types

Action creators

Reducer — all in one!

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    addByAmount: (state, action) => { state.value += action.payload }
  }
});

export const { increment, decrement, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```
## 3. createAsyncThunk()

Simplifies async logic (like API calls):

```javascript
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://api.example.com/users');
    return await response.json();
  }
);
```

## 4. createReducer() (less used)
Gives control like traditional reducers but allows using immer for mutable-like syntax.

# 🧪 Example Flow (Counter)

counterSlice.js
```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value++ },
    decrement: (state) => { state.value-- },
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

store.js
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});
```

App.js
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
```

## ✅ Advantages of Redux Toolkit

| Benefit              | Why it matters                          |
| -------------------- | --------------------------------------- |
| 🚀 Fast setup        | No manual boilerplate                   |
| 🔒 Safer code        | Uses `immer` to prevent mutation        |
| 🧩 Modular           | Encourages slice-based state            |
| ⚙️ DevTools          | Built-in support                        |
| 🌐 Async ready       | `createAsyncThunk` simplifies API calls |
| 👶 Beginner friendly | Clear structure and consistent patterns |

# Redux Toolkit with an async API call using createAsyncThunk

## 📁 Project Structure
```bash
/src
  ├── features/
  │    └── users/
  │         ├── userSlice.js
  ├── store.js
  ├── App.js
  └── index.js
```
## 1. userSlice.js – Create Slice with Async Thunk
```javascript
// src/features/users/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action using createAsyncThunk
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Something went wrong';
      });
  }
});

export default userSlice.reducer;
```

## 2. store.js – Configure Store
```javascript
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer
  }
});

export default store;
```
## 3. App.js – Use It in Component
```javascript
// src/App.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './features/users/userSlice';

function App() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
```
## 4. index.js – Wrap App in Provider
```javascript
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
## ✅ Summary of the Flow

createAsyncThunk creates the async action.

Inside the slice:

pending is triggered before fetch.

fulfilled is called when the API is successful.

rejected is called if the API fails.

You dispatch fetchUsers() just like any normal action.