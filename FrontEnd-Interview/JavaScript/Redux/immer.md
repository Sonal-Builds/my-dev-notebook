# 🧠 Immer in JavaScript (and Redux)

Immer is a small library that helps you work with immutable state in a more natural way — by allowing you to write “mutating” code that updates the state immutably under the hood.

## 📦 Why Use Immer?
✅ Write cleaner and more readable code
✅ Avoid manually copying deep structures
✅ Great fit for Redux reducers
✅ Ensures immutability (which is critical in React state management)

## ✍️ Without Immer (Manual Immutable Update)
```javascript
const nextState = {
  ...state,
  user: {
    ...state.user,
    name: 'Alice'
  }
}
```
## ✨ With Immer (Mutating Code, Immutable Result)
```javascript
import { produce } from 'immer';

const nextState = produce(state, draft => {
  draft.user.name = 'Alice';  // looks like mutation, but it's not!
});
```
## 🚀 Immer in Redux Reducer
```javascript
import { produce } from 'immer';

const reducer = (state = initialState, action) => 
  produce(state, draft => {
    switch(action.type) {
      case 'INCREMENT':
        draft.count += 1;
        break;
      case 'SET_NAME':
        draft.name = action.payload;
        break;
    }
});
```
🛠️ Install
```bash
npm install immer
# or
yarn add immer
```
## 🧪 Real Example: Updating Nested State
```javascript
const state = {
  user: {
    name: 'Sonal',
    preferences: {
      theme: 'light'
    }
  }
};

const newState = produce(state, draft => {
  draft.user.preferences.theme = 'dark';
});
```
✅ state remains unchanged

✅ newState has the updated theme

## ⚙️ 1. What is React.memo?
React.memo is a higher-order component used to memoize functional components. It prevents unnecessary re-renders by doing a shallow comparison of props:

```javascript
const MyComponent = React.memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});
✅ Re-renders only if props change (by shallow comparison)
```

## ⚠️ 2. Why Mutation Breaks React.memo
If you mutate props or state, React.memo can’t detect changes, because the reference stays the same even if the contents change.

Example (❌ Mutation):
```javascript
const obj = { name: "Sonal" };
const mutated = obj;
mutated.name = "Ravi";

console.log(obj === mutated); // true ❗
```
Even though obj.name changed, the object reference is still the same.
➡️ React.memo won’t detect this change and won’t re-render, leading to bugs.

## ✅ 3. How Immer Solves This
Immer helps by creating new references whenever something inside the object changes — even if the code looks like mutation.

Example with Immer:
```javascript
import { produce } from 'immer';

const nextState = produce(prevState, draft => {
  draft.user.name = "Ravi";
});

console.log(prevState === nextState); // false ✅
```
👉 Since Immer returns a new reference, React.memo will detect changes and re-render appropriately.