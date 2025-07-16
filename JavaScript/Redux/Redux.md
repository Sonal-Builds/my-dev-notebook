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

