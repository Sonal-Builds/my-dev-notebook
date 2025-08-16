
1. [Side Effects Master Example (React)](#⚡ Side Effects Master Example (React))
1. [Brute Force Approach](#brute-force-approach)
1. [Brute Force Approach](#brute-force-approach)
# useEffect Hook

`useEffect` is a **React Hook** that lets you perform **side effects** in function components — such as:

- Data fetching
- Subscribing to events
- DOM manipulation
- Setting timers

It’s the **functional component replacement for lifecycle methods** like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

- Side effects = anything outside React’s pure rendering (e.g. fetching data, subscriptions, DOM manipulation, timers, logging).

### Why Not Make useEffect Itself Async?
- ❌ useEffect must return either undefined or a cleanup function, but async functions always return a promise → React will not handle that properly.

### Syntax
```jsx
useEffect(() => {
  // effect code (runs after render)
  return () => {
    // cleanup code (runs before unmount / before next effect)
  };
}, [dependencies]);
```

### Lifecycle Mapping (Class vs Function)

- In class components, we had:
- componentDidMount → runs after first render
- componentDidUpdate → runs after updates
- componentWillUnmount → cleanup

👉 With useEffect, all of these are unified into one hook depending on dependencies.


| Dependency Array | Effect Behavior |  |
| --- | --- | --- |
| `[]` (empty) | Runs once on mount |  |
| `[a, b]` | Runs on mount and whenever `a` or `b` changes |  |
| *No array at all* | ❌ Runs on every render (⚠️ avoid unless needed) |  |

#### Cleanup Function
```jsx 
///Used for unsubscribing, clearing timers, or avoiding memory leaks.

useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);

  return () => {
    clearInterval(timer); // cleanup on unmount
  };
}, []);


///👉 Without cleanup, you risk memory leaks.
```

### 🟢 Fetch Data on Mount

```jsx
useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  }
  fetchData();
}, []);

```
### 🟢 Syncing State with Local Storage
```jsx
const [theme, setTheme] = useState("light");

useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```

### 🟢 Event Listener with Cleanup
```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
```

### ⚡ Side Effects Master Example (React)
```jsx
import React, { useState, useEffect, useRef } from "react";

export default function SideEffectsMaster() {
  const [data, setData] = useState(null);           // API Fetch
  const [count, setCount] = useState(0);            // Timer counter
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Resize listener
  const inputRef = useRef();                        // DOM focus

  // 1️⃣ Fetch Data (API call) → only once on mount
  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(result => setData(result));

    // No cleanup needed for fetch
  }, []);

  // 2️⃣ Window Resize Listener → runs on mount, cleans up on unmount
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Cleaning up resize listener...");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 3️⃣ Timer (setInterval) → runs every second, cleans up on unmount
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
      console.log("Tick");
    }, 1000);

    return () => {
      console.log("Clearing interval...");
      clearInterval(timer);
    };
  }, []);

  // 4️⃣ DOM Manipulation (focus input) → only once
  useEffect(() => {
    inputRef.current.focus();
    console.log("Input focused!");
  }, []);

  // 5️⃣ Logging / Analytics → run on every render
  useEffect(() => {
    console.log("Component rendered / updated!");
  });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🔹 Side Effects Master Example</h2>

      {/* API Data */}
      <h3>1. API Data:</h3>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}

      {/* Resize */}
      <h3>2. Window Width:</h3>
      <p>{windowWidth}px</p>

      {/* Timer */}
      <h3>3. Timer Count:</h3>
      <p>{count}</p>

      {/* DOM Manipulation */}
      <h3>4. Focused Input:</h3>
      <input ref={inputRef} placeholder="I get auto-focused!" />

      {/* Manual Update */}
      <h3>5. Manual Update:</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
    </div>
  );
}

```
### Advanced Interview Questions

Q1. Difference between useEffect and useLayoutEffect?

useEffect → runs asynchronously after paint.

useLayoutEffect → runs synchronously before paint.
👉 Use useLayoutEffect when you need to measure DOM before it’s shown (e.g., animations).

Q2. Why does React warn about missing dependencies in useEffect?

Missing dependencies → effect may run with stale values.

React’s ESLint plugin helps detect these.

Workarounds: useRef, useCallback, or useMemo.

Q3. Can we make useEffect async?

Not directly.

Correct way:

useEffect(() => {
  const fetchData = async () => { ... };
  fetchData();
}, []);


Q4. When does cleanup run?

Before component unmount.

Before re-running the same effect on dependency change.

Q5. What are common patterns where useEffect is misused?

Fetching data inside useEffect but updating wrong dependencies → infinite loop.

Using it to manage derived state instead of computing inside render.

Forgetting cleanup in event listeners.

### ⚡ Advanced React Hooks Interview Q&A
1️⃣ Explain the difference between useState and useReducer.

useState → best for simple state (booleans, numbers, strings).

useReducer → best for complex state logic with multiple transitions, often involving objects/arrays.

useReducer centralizes state transitions using a reducer function.

// useState
const [count, setCount] = useState(0);

// useReducer
function reducer(state, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });

2️⃣ Can you use hooks inside loops or conditions? Why not?

❌ No. Hooks must run in the same order every render.

If you put them in loops/conditions, order changes → React can’t map hook state correctly.

✅ Solution → Always call hooks at the top level of the component.

3️⃣ What is the difference between controlled and uncontrolled components with hooks?

Controlled → React state drives the input.

Uncontrolled → DOM manages its own state, accessed via ref.

// Controlled
<input value={name} onChange={e => setName(e.target.value)} />

// Uncontrolled
<input ref={inputRef} />

4️⃣ How do you fetch data using useEffect correctly? What problems occur if you don’t clean up?

Always handle cleanup → avoid memory leaks / race conditions.

Problems: setting state on unmounted components, multiple fetches overriding each other.

✅ Fix → use AbortController or cleanup flags.

5️⃣ Explain stale closures in useEffect.

Functions inside effects capture old state values if not in dependencies.

Fix: use functional updates (setState(prev => ...)) or include in deps.

6️⃣ What is the difference between useEffect, useLayoutEffect, and useInsertionEffect?

useEffect → async, after paint.

useLayoutEffect → sync, before paint (blocks UI until done).

useInsertionEffect → runs before DOM mutations (used mostly by CSS-in-JS libs).

7️⃣ How would you implement debouncing or throttling inside a useEffect?
useEffect(() => {
  const handler = setTimeout(() => {
    console.log("Debounced search:", query);
  }, 500);

  return () => clearTimeout(handler); // cleanup
}, [query]);

8️⃣ How do you persist values between renders without causing re-renders?

useRef persists values without re-renders.

useState causes re-render when updated.

const countRef = useRef(0); // persists, no re-render
const [count, setCount] = useState(0); // re-renders

9️⃣ How would you memoize expensive computations inside hooks?

Use useMemo or lazy init in useState.

const value = useMemo(() => expensiveCalc(data), [data]);
const [state] = useState(() => expensiveInit());

🔟 How does React ensure cleanup functions are called properly on component unmount?

React calls the returned cleanup function from useEffect during unmount.

Ensures event listeners, intervals, and subscriptions don’t leak.

1️⃣1️⃣ Why do we need to add dependencies in useEffect?

Dependencies ensure effect always has the latest values.

If you leave them out → stale closures or missing updates.

1️⃣2️⃣ How do you avoid infinite loops in useEffect?

Don’t update state unconditionally inside effect.

Use proper dependency arrays and memoization for functions/objects.

1️⃣3️⃣ When should you use custom hooks? Example?

When logic is reused across components (data fetching, localStorage, event listeners).

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => 
    JSON.parse(localStorage.getItem(key)) || initial
  );
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
}

1️⃣4️⃣ What are the pitfalls of using useEffect for data fetching in concurrent React (React 18)?

Effects may run multiple times (Strict Mode).

Race conditions possible.

Suspense is now preferred for async data fetching.

1️⃣5️⃣ How does React’s batched updates affect state updates inside useEffect?

React batches multiple state updates into one render → better performance.

Example: setA(1); setB(2); inside same effect → only 1 re-render.

1️⃣6️⃣ If you have multiple useEffects, in what order do they run?

They run in the order they are defined in the component.

1️⃣7️⃣ How would you implement a setInterval inside useEffect without stale state?
useEffect(() => {
  const id = setInterval(() => setCount(prev => prev + 1), 1000);
  return () => clearInterval(id);
}, []);

1️⃣8️⃣ What’s the difference between using useEffect and useCallback for event handlers?

useEffect → runs side effects (attach/remove listeners).

useCallback → memoizes a function so identity is stable between renders.

1️⃣9️⃣ Why might your useEffect run twice in dev mode (React Strict Mode)?

Strict Mode intentionally double-invokes effects (dev only) → detects side effect bugs.

2️⃣0️⃣ Imagine you have a race condition in fetching data with useEffect. How do you handle it?

Use AbortController or cleanup flags to cancel old requests.

2️⃣1️⃣ How do you cancel an API request in useEffect when the component unmounts?
const controller = new AbortController();
fetch(url, { signal: controller.signal });
return () => controller.abort();

2️⃣2️⃣ What’s the difference between storing something in useRef vs useState?

useRef → persists values without re-render.

useState → persists values with re-render.

2️⃣3️⃣ Can you explain the difference between side effects that require cleanup vs those that don’t?

Require cleanup → subscriptions, timers, event listeners, async tasks.

Don’t require cleanup → logging, analytics, data fetch (if managed).

2️⃣4️⃣ How would you write a custom hook for syncing state to localStorage?

✅ Already shown in 1️⃣3️⃣ (useLocalStorage example).

2️⃣5️⃣ Can you explain React hook rules and what the ESLint plugin react-hooks/exhaustive-deps does?

Rules of Hooks:

Call hooks only at the top level.

Call hooks only inside React components/custom hooks.

exhaustive-deps → warns if dependencies are missing in useEffect, preventing stale closures.

## 🔴 Advanced / FAANG-Level React Hooks Q&A
1. What is the difference between useEffect, useLayoutEffect, and useInsertionEffect?

useEffect
Runs after the paint is committed to the screen. Non-blocking. Best for data fetching, subscriptions, logging.

useEffect(() => {
  console.log("Runs after paint");
}, []);


useLayoutEffect
Runs synchronously after DOM mutations but before the browser paints. Blocks rendering. Useful for DOM measurements or synchronizing layout.

useLayoutEffect(() => {
  const rect = divRef.current.getBoundingClientRect();
  console.log("DOM size:", rect);
}, []);


useInsertionEffect
Runs before DOM mutations are applied. Mostly used by styling libraries (e.g., styled-components) to inject CSS before render to avoid flicker. Rare in normal apps.

📌 Interview Tip:

useEffect → async/non-blocking side effects

useLayoutEffect → layout sync (measure DOM, scroll)

useInsertionEffect → CSS-in-JS libraries

2. How would you implement debouncing or throttling inside a useEffect?

✅ Debounce Example (search API call only after user stops typing):

const [query, setQuery] = useState("");
useEffect(() => {
  const handler = setTimeout(() => {
    if (query) {
      fetch(`/api/search?q=${query}`);
    }
  }, 500); // debounce delay

  return () => clearTimeout(handler); // cleanup on re-render
}, [query]);


✅ Throttle Example (API call every 1s max):

useEffect(() => {
  let lastCall = 0;
  const interval = setInterval(() => {
    const now = Date.now();
    if (now - lastCall >= 1000) {
      fetch("/api/data");
      lastCall = now;
    }
  }, 200);

  return () => clearInterval(interval);
}, []);

3. How do you persist values between renders without causing re-renders? (useRef vs useState)

useState → persists values and triggers re-renders.

useRef → persists values without re-renders.

Example:

const [count, setCount] = useState(0); // re-renders UI when changed
const renderCount = useRef(0);         // persists silently

useEffect(() => {
  renderCount.current++;
}, []);

console.log("Re-render count:", renderCount.current);


📌 Use useRef for values like timers, DOM refs, previous state, mutable values.

4. How would you memoize expensive computations inside hooks? (useMemo + lazy init in useState)

useMemo Example:

const expensiveValue = useMemo(() => {
  console.log("Calculating...");
  return heavyCalculation(data);
}, [data]);


Lazy init in useState:

const [value] = useState(() => heavyCalculation(initialData));


📌 useMemo recalculates when dependencies change.
📌 Lazy init in useState runs only once on mount.

5. How does React ensure cleanup functions are called properly on component unmount?

useEffect can return a cleanup function.

React ensures cleanup runs before next effect run or when component unmounts.

Example:

useEffect(() => {
  const id = setInterval(() => console.log("running"), 1000);
  return () => clearInterval(id); // cleanup
}, []);


📌 Guarantee: Cleanup prevents memory leaks (timers, event listeners, subscriptions).

6. Why do we need to add dependencies in useEffect? What happens if you leave them out?

Dependencies tell React when to re-run effect.

Missing dependencies → stale data or bugs.

Extra dependencies → unnecessary re-renders.

Example:

useEffect(() => {
  console.log(user.name); 
}, [user.name]); // rerun only when user.name changes


📌 ESLint react-hooks/exhaustive-deps helps enforce correctness.

7. How do you avoid infinite loops in useEffect?

Common cause:

useEffect(() => {
  setState(value + 1); // ❌ updates state → triggers effect again
});


✅ Fix:

Add dependency array.

Use functional updates.

Ensure side effects don’t directly update state without condition.

useEffect(() => {
  setCount(c => c + 1);
}, []); // runs once

8. When should you use custom hooks? Can you give an example from your projects?

Use custom hooks when logic is reusable across multiple components.

Example: Fetching data, syncing with localStorage, listening to window size.

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => 
    JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}


Usage:

const [theme, setTheme] = useLocalStorage("theme", "light");

9. What are the pitfalls of using useEffect for data fetching in concurrent React (React 18)?

Race conditions → multiple fetches can resolve out of order.

Double execution in Strict Mode → duplicate requests.

Memory leaks if fetch resolves after unmount.

✅ Fix:

Use AbortController to cancel fetches.

Or use libraries like React Query / SWR that handle concurrency.

10. How does React’s batched updates affect state updates inside useEffect?

React batches multiple state updates into one re-render (in React 18, even in async code).

Example:

useEffect(() => {
  setCount(c => c + 1);
  setFlag(true);
}, []);


Both updates are batched → component re-renders only once.

📌 Before React 18, batching only happened in event handlers, not async code.