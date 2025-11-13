## ✅ React Hooks (Complete List)
### 🔹 Basic Hooks

- useState → Manages state inside a function component.

- useEffect → Handles side effects (data fetching, subscriptions, timers, DOM updates).

- useContext → Accesses values from React Context without prop drilling.

### 🔹 Additional Hooks

- useReducer → Alternative to useState for complex state logic (similar to Redux).

- useCallback → Memoizes functions to avoid unnecessary re-creations.

- useMemo → Memoizes expensive computations to avoid recalculations.

- useRef → Stores mutable values across renders (doesn’t cause re-render).

- useImperativeHandle → Customizes what gets exposed when using forwardRef.

- useLayoutEffect → Like useEffect, but runs synchronously after DOM mutations (before browser paint).

- useDebugValue → Displays debug info for custom hooks in React DevTools.

### 🔹 React 18+ (Concurrent Features Hooks)

- useTransition → Marks state updates as non-urgent (keeps UI responsive).

- useDeferredValue → Defers a value until less urgent rendering happens.

- useId → Generates stable unique IDs for accessibility / SSR.

- useSyncExternalStore → For subscribing to external stores (Redux, Zustand, etc.) with guaranteed consistency in concurrent mode.

- useInsertionEffect → Runs before any DOM mutations (for injecting styles, libraries like styled-components/emotion).

### 🔹 Hooks for Custom Implementations

- You can create Custom Hooks by combining built-in hooks (naming convention: useSomething).
- Example: useLocalStorage, useFetch, useDarkMode.