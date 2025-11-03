# useContext Hook

- useContext is a React Hook that lets a component access shared data from a context provider without passing props manually through each level of the component tree.
- It helps avoid "prop drilling"(passing props through multiple levels) and makes global state like theme, authentication, or user data easy to use across the app.

## How it Works

- You create a Context with React.createContext(defaultValue).

- Wrap your component tree with a Provider.

- Use useContext(ContextName) inside components to get the value.

## Basic Example
```jsx
import React, { createContext, useContext } from "react";

// Step 1: Create Context
const ThemeContext = createContext("light");

function ThemedButton() {
  // Step 2: Consume Context
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === "dark" ? "black" : "white" }}>
    {theme} Mode
  </button>;
}

export default function App() {
  return (
    // Step 3: Provide Context Value
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

```

## Advanced Example with State + Context

```jsx 
//App.js
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/Profile";

export default function App() {
  return (
    <AuthProvider>
      <div style={{ padding: "20px" }}>
        <h1>React useContext Example</h1>
        <Profile />
      </div>
    </AuthProvider>
  );
}

//context/AuthContext.js
import React, { createContext, useState, useContext } from "react";

// 1. Create Context
const AuthContext = createContext();

// 2. Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom Hook (Best Practice)
export function useAuth() {
  return useContext(AuthContext);
}

//components/Profile.js
import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome {user.name}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Arun")}>Login</button>
      )}
    </div>
  );
}

```