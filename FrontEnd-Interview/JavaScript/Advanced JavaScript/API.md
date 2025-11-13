
#💡 What is an API?
API stands for Application Programming Interface.
It’s a set of rules that allows two software programs to communicate with each other.

In simple terms:

👉 API is a messenger that takes a request from you, tells a system what you want, and brings back the response.

| Type        | Example                               | Use Case                   |
| ----------- | ------------------------------------- | -------------------------- |
| REST        | `GET /users/1`                        | Standard web APIs          |
| GraphQL     | Single endpoint with flexible queries | Precise data fetching      |
| WebSocket   | Real-time communication               | Chats, live feeds          |
| SDK/Library | Stripe JS SDK                         | Interact with APIs in code |


JavaScript's approach to handling APIs has evolved dramatically since its inception in 1995. Here's a comprehensive timeline of how API handling has progressed:

## 1. Early Days (1995-2005): XMLHttpRequest (XHR)
XMLHttpRequest (XHR) was the foundation of AJAX (Asynchronous JavaScript and XML):

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
```
Characteristics:

Verbose syntax with callback hell potential

No support for promises

Limited error handling

Cross-browser inconsistencies

## 2. jQuery Era (2006-2013)
jQuery simplified AJAX calls with its $.ajax() method:

```javascript
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.error(error);
  }
});
```
Improvements:

Simplified syntax

Better cross-browser compatibility

Support for various data formats (JSON, XML, HTML)

Still callback-based

## 3. Promise-Based Approaches (2014-2017)
Native Promises were introduced (ES6/ES2015):

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  ```
Key developments:

Fetch API (replacing XHR)

Promise chains instead of callbacks

Better error handling

Still required manual handling of response parsing

## 4. Async/Await (2017-Present)
ES2017 introduced async/await syntax:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
Advantages:

Synchronous-looking code for asynchronous operations

Better error handling with try/catch

More readable and maintainable code

| Technique             | Use Case                       |
| --------------------- | ------------------------------ |
| `fetch + async/await` | Vanilla JS, small apps         |
| `axios`               | Large apps needing rich config |
| `React Query / SWR`   | Production-grade frontend apps |
| `AbortController`     | Cancel fetch requests          |
| `Retry Logic`         | Handle unstable APIs           |
| `Error Boundaries`    | Wrap API-dependent components  |


#📡 What is a REST API?
REST (Representational State Transfer) is a set of architectural rules for designing networked applications (like web services).

A REST API uses HTTP methods to perform operations on data, typically represented as resources (like users, posts, products).

##🧱 CRUD Operations with REST
CRUD = Create, Read, Update, Delete
These map directly to HTTP methods:

CRUD Operation	HTTP Method	Description	URL Example
Create	POST	Add a new resource	POST /users
Read	GET	Retrieve existing data	GET /users, GET /users/1
Update	PUT / PATCH	Modify existing data	PUT /users/1
Delete	DELETE	Remove data	DELETE /users/1

✍️ Sample CRUD in JavaScript using fetch()
```jsx
// CREATE (POST)
fetch('/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice', age: 30 })
});

// READ (GET)
fetch('/users')
  .then(res => res.json())
  .then(data => console.log(data));

// UPDATE (PUT or PATCH)
fetch('/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice Updated' })
});

// DELETE
fetch('/users/1', { method: 'DELETE' });
```
🧠 REST Principles (Simplified)
🔗 Stateless: Every request contains all info needed (no memory between requests)

🌐 Resource-Based: URLs represent resources (e.g., /users/5)

📥 Standard Methods: Uses HTTP verbs like GET, POST, PUT, DELETE

🔄 Uniform Interface: Same structure across different parts of the API

| Status Code | Meaning               | Usage                   |
| ----------- | --------------------- | ----------------------- |
| 200         | OK                    | Successful GET or PUT   |
| 201         | Created               | After a successful POST |
| 204         | No Content            | After DELETE            |
| 400         | Bad Request           | Invalid user input      |
| 401         | Unauthorized          | Authentication needed   |
| 404         | Not Found             | Resource doesn't exist  |
| 500         | Internal Server Error | Server crashed          |

📈 Advanced Interview Questions
How do you handle errors when making REST API calls?

Use .catch, check res.ok, use try/catch in async/await.

How do you optimize multiple API calls?

Use Promise.all, batching, or pagination for large lists.

How do you handle authentication?

Use JWT, store tokens securely (not in localStorage if sensitive), send via headers.

What’s the difference between REST and GraphQL?

REST: fixed endpoints per resource

GraphQL: single endpoint, flexible query structure

How do you secure a REST API?

HTTPS, Authentication (JWT, OAuth), Rate Limiting, Input Validation.

## 🧩 Problem Statement:
Implement the following operations using JavaScript fetch() and REST API methods:

Create a new user

Fetch all users

Delete a user by ID

Update a user’s email

🔧 API Endpoint Assumption
We'll use https://jsonplaceholder.typicode.com/users — a mock API that simulates REST endpoints.

🧬 ✅ Full Code with Explanation
```jsx
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// 1️⃣ Create a new user (POST)
async function createUser(userData) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        const newUser = await response.json();
        console.log('✅ User Created:', newUser);
        return newUser;
    } catch (error) {
        console.error('❌ Error creating user:', error);
    }
}

// 2️⃣ Fetch all users (GET)
async function fetchUsers() {
    try {
        const response = await fetch(BASE_URL);
        const users = await response.json();
        console.log('📦 All Users:', users);
        return users;
    } catch (error) {
        console.error('❌ Error fetching users:', error);
    }
}

// 3️⃣ Delete a user by ID (DELETE)
async function deleteUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            console.log(`🗑️ User ${userId} deleted successfully.`);
        }
    } catch (error) {
        console.error('❌ Error deleting user:', error);
    }
}

// 4️⃣ Update a user's email (PUT)
async function updateUserEmail(userId, newEmail) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: newEmail }),
        });
        const updatedUser = await response.json();
        console.log('🔄 Updated User:', updatedUser);
        return updatedUser;
    } catch (error) {
        console.error('❌ Error updating user:', error);
    }
}

// ✅ Example Usage
(async () => {
    await createUser({ name: 'John Doe', email: 'john@example.com' });
    await fetchUsers();
    await updateUserEmail(1, 'newemail@example.com');
    await deleteUser(1);
})();
```