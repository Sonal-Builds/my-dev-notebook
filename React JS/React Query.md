# React Query 
## A powerful library for data fetching, caching, syncing, and updating server state in React apps.

## 🧠 Why Use React Query?
React Query:

✅ Manages server state (data from APIs)

✅ Handles loading, error, and success states

✅ Provides automatic caching, refetching, pagination, and invalidation

✅ Works with REST or GraphQL

### 🚀 Step-by-Step React Query Setup
✅ 1. Install React Query
```bash
npm install @tanstack/react-query
```
### ✅ 2. Setup QueryClientProvider
Wrap your app in QueryClientProvider in main.tsx (or index.tsx):

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
```
### 🧪 Simple Example: Fetch Users
📄 UserList.tsx
```tsx
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error('Network error')
  return res.json()
}

export const UserList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {(error as Error).message}</p>

  return (
    <ul>
      {data.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```
### 🔁 Auto Refetch, Caching, and Stale Time
```tsx
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 1000 * 60, // 1 minute (prevents refetching if fresh)
  refetchInterval: 10000, // Refetch every 10 seconds
  cacheTime: 1000 * 60 * 5 // Keep cache for 5 mins
})
```
### 📤 POST Example using useMutation
```tsx
import { useMutation, useQueryClient } from '@tanstack/react-query'

const postTodo = async (todo: { title: string }) => {
  const res = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
  })
  return res.json()
}

export const TodoForm = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  return (
    <button onClick={() => mutation.mutate({ title: 'Learn Query' })}>
      Add Todo
    </button>
  )
}
```
### 🔍 DevTools for Debugging
Install:
```bash
npm install @tanstack/react-query-devtools
```
In App.tsx:
```tsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <>
      {/* your app content */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}
```
### 🧠 Key Concepts Table
| Concept             | Description                            |
| ------------------- | -------------------------------------- |
| `useQuery`          | Fetch and cache GET data               |
| `useMutation`       | Handle POST, PUT, DELETE               |
| `queryKey`          | Unique key to identify a query         |
| `staleTime`         | How long data is considered "fresh"    |
| `cacheTime`         | How long unused data stays in memory   |
| `invalidateQueries` | Forces query to refetch after mutation |

## 🤔 Why Use Redux When React Query Exists?
React Query is not a replacement for Redux — they solve different problems:
| 🔍 Use Case                                               | 🔁 Redux                            | 🌐 React Query                   |
| --------------------------------------------------------- | ----------------------------------- | -------------------------------- |
| App **state** (UI, flags, theme, form steps, auth tokens) | ✅ Yes                               | ❌ No                             |
| Server **state** (API calls, remote data, caching)        | ❌ Needs extra setup (thunks, sagas) | ✅ Built-in                       |
| Data caching & re-fetching                                | ❌ Manual                            | ✅ Auto caching, stale-time, etc. |
| Data mutation (POST/PUT/DELETE) + invalidation            | 🚫 Manual with boilerplate          | ✅ Built-in with `useMutation`    |
| Offline sync, retries, pagination                         | ❌ Complex                           | ✅ Native support                 |
| DevTools for tracking server state                        | ❌ Requires middleware               | ✅ DevTools out-of-the-box        |
| Time to set up                                            | ⏱️ High (boilerplate)               | ⚡ Fast (1-line query hook)       |

### ✅ When to Use Redux

Redux shines when your app needs:

Complex UI state across many components
e.g., dark mode, modals, multi-step forms, filters

A single central source of truth for all kinds of app logic

Global control like auth/session, permissions, feature flags

Need to integrate with legacy apps or middleware like Redux Saga or Redux Toolkit Query (RTK Query)

### ✅ When to Use React Query

Use React Query when your app:

Relies heavily on remote API data

Needs features like:

Auto caching

Background refetch

Pagination/infinite scroll

Error handling/retries

Wants to avoid Redux boilerplate

## 🚀 Summary
| Scenario                          | Best Choice                     |
| --------------------------------- | ------------------------------- |
| API data, caching, fetching       | ✅ React Query                   |
| Global UI state, auth, config     | ✅ Redux or Zustand              |
| Complex workflows (saga, polling) | ✅ Redux (advanced)              |
| Fast, simple apps                 | ✅ React Query + Context/Zustand |
