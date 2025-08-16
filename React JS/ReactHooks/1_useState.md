# React Hooks

### What is a Hook in React?
- Hooks are a new feature addition in React version 16.8 Which allows you to use React features without having to write a class. 
- React Hooks let you use state and lifecycle features in functional components.

### Rules of Hooks in React

#### Only Call Hooks at the Top Level

- Don't call Hooks inside loops, conditions, or nested functions

- This ensures Hooks are called in the same order each time a component renders

#### Only Call Hooks from React Functions

- Call Hooks from React function components

- Call Hooks from custom Hooks (functions starting with "use")

### 🧠 Why Were Hooks Introduced?
- Before hooks, class components were the only way to use state and lifecycle features.

### ❌ Problems with Class Components:

1. **Too much boilerplate** (constructor, binding, etc.)
2. **Code splitting was hard** — related logic (e.g., data fetching and cleanup) was split across methods like `componentDidMount` and `componentWillUnmount`.
3. **Poor reusability** — you had to use patterns like HOCs or render props.
4. **Confusing `this` keyword** — beginners often struggled with `this`.

# useState
- useState is a React Hook that allows you to add state to functional components.
- Before hooks, only class components could have state. Now, with useState, function components can manage state too — and much more easily.
- in Class component, the state is always an object.
- with the useState hook, the state dosen't have to be an object.
- The useState hook returns an array with 2 elements.
- The first element is the current value of the state, and the second element is a state setter function.
- When dealing with objects or array, always make sure to spread your state variable and then call the setter function.

### 🔹 State Updates are Asynchronous

- React batches state updates for performance.
```tsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```
- 👉 You might expect count+3, but it only increases by 1.
- Because React doesn’t immediately apply each update, it batches them.

✅ Solution → Use functional updates.

- When new state depends on old state, use:

#### setCount(prev => prev + 1);

```tsx
<button onClick={() => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
}}>
+3
</button>
```
- 👉 This correctly increments by 3. 
### 🔹 Lazy Initialization

If initial value is expensive to compute:
```tsx
  // ❌ Normal initialization → runs on every render
  const [normalValue, setNormalValue] = useState(expensiveComputation());

  // ✅ Lazy initialization → runs only once
  const [lazyValue, setLazyValue] = useState(() => expensiveComputation());
```

- Function only runs once (on mount).
- Saves performance.
- if didn't use callback function every re-render the function expensiveComputation() will call.

### Complete Example
```jsx
import React, { useState } from "react";

// 🏗 Expensive function (runs once with lazy init)
function expensiveComputation() {
  console.log("Running expensive computation...");
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i;
  }
  return total;
}

export default function UseStateCompleteExample() {
  // 1️⃣ Basic state
  const [count, setCount] = useState(0);

  // 2️⃣ String state
  const [name, setName] = useState("Arun");

  // 3️⃣ Object state
  const [user, setUser] = useState({ name: "Arun", age: 32 });

  // 4️⃣ Array state
  const [items, setItems] = useState(["Laptop"]);

  // 5️⃣ Lazy initialization (expensive function runs only once)
  const [expValue] = useState(() => expensiveComputation());

  // 👉 Functional update example
  const increaseBy3 = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>1. Basic State: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={increaseBy3}>Increment by 3 (functional update)</button>

      <h2>2. String State: {name}</h2>
      <button onClick={() => setName("Updated Arun")}>Change Name</button>

      <h2>3. Object State: {user.name}, {user.age}</h2>
      <button onClick={() => setUser(prev => ({ ...prev, age: prev.age + 1 }))}>
        Increase Age
      </button>

      <h2>4. Array State:</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setItems(prev => [...prev, "Phone"])}>
        Add Item
      </button>

      <h2>5. Lazy Initialization Value: {expValue}</h2>
    </div>
  );
}

```

### Real-world Example: Form Handling
```jsx
function Form() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
    </form>
  );
}
```

### Interview-Level Insights

Q1. Difference between useState and this.setState (class)?

- useState replaces state, doesn’t merge.

- this.setState merges shallowly.

Q2. Why is functional update (prev => ...) needed?

- Because React batches state updates.

- Ensures correct value based on previous state.

Q3. When would you use lazy initialization?

- When initial value calculation is expensive (e.g., parsing big data).

Q4. How does useState work internally?

- React keeps a linked list of hooks for each component.

- Each useState call is stored in order.

- On re-render, React retrieves the state in the same order.

### 🔥 Advanced useState Interview Questions
#### 1️⃣ Why are state updates in useState asynchronous and batched?

- React batches updates for performance.
- If React updated state immediately after every setState, it would cause multiple re-renders → performance issues.
- Instead, React schedules updates and applies them together.

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

//Without batching → 3 re-renders.
//With batching → 1 re-render (but incorrect result if not using prev).
//✅ Correct way:

setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1); // count + 3
```

#### 2️⃣ Why does useState not merge objects like this.setState in class components?

- useState replaces the entire state variable.

- this.setState in classes does shallow merge.

- In functional components, you must merge manually with the spread operator.
```jsx
setUser({ name: "Arun" }); 
// ❌ overwrites whole object, removes age

setUser(prev => ({ ...prev, name: "Arun" })); 
// ✅ merges correctly
```
#### 3️⃣ What happens if you call useState inside a loop or condition?

- ❌ React will throw an error.

- Hooks rely on call order consistency.

- React stores hooks in a linked list per component. Changing the order breaks React’s mapping.

- 👉 Always call hooks at the top level.

#### 4️⃣ Difference between passing a value vs a function in useState(initialValue)?

- useState(value) → runs value immediately every render.

- useState(() => value) → lazy initialization, function runs only once (on mount).

- 👉 Useful for expensive calculations or reading from localStorage.

#### 5️⃣ Can you update state after a component is unmounted?

- If you try to set state after unmount (e.g., inside async callback), React logs a memory leak warning.
- Cleanup in useEffect
- Or use a flag (isMounted)
- Or use AbortController in fetch.

6️⃣ How does React know which state belongs to which useState call?

Answer:

React maintains a linked list of hooks internally.

On every render, React steps through hooks in the same order they were declared.

That’s why hook call order must not change.

7️⃣ Why is updating state inside render discouraged?

Answer:

Updating state during render → infinite re-renders.

State updates must happen inside event handlers or effects.

8️⃣ Why is functional update form safer in concurrent React (React 18+)?

Answer:

In concurrent mode, React may pause, restart, or discard renders.

If you rely on stale state directly, you may get wrong results.

Functional update (setState(prev => ...)) ensures you always get the latest committed state.

9️⃣ How do you preserve previous state when updating arrays or objects?

Answer:

React state is immutable. You cannot mutate directly.

Always create new copies with spread operators.

👉 Example:

// Array
setItems(prev => [...prev, "new item"]);

// Object
setUser(prev => ({ ...prev, age: prev.age + 1 }));

🔟 Trick Question: What happens here?
const [count, setCount] = useState(0);

setCount(5);
setCount(5);
setCount(5);

console.log(count); 


Answer:

console.log(count) prints 0, not 5.

Because state updates are asynchronous and don’t update immediately.

The updates will be applied in the next render.

🧠 Mock Interview Q&A (FAANG Style)

Q: How is useState implemented internally?
A: React keeps a list of hook states per component. Each useState call creates a "hook fiber" node in a linked list. On re-render, React traverses the list in the same order, reusing existing state instead of recreating.

Q: Can we pass a callback to setState like class components?
A: No. In class components:

this.setState((prev) => prev + 1, callback);


In useState, setState does not accept a callback. You must use useEffect if you want to run code after state changes.

Q: If two useState hooks have the same initial value, how does React differentiate them?
A: React differentiates them by call order, not by value. That’s why hook order must not change.
