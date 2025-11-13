#🔄 Self-Invoking Functions in JavaScript (IIFE)
A Self-Invoking Function, also known as an IIFE (Immediately Invoked Function Expression), is a function that runs immediately after it is defined.

✅ Syntax
```jsx
(function () {
  // code to run
})();
```
Or with arrow function:

```jsx
(() => {
  // code to run
})();
```
| Purpose                                | Explanation                                             |
| -------------------------------------- | ------------------------------------------------------- |
| ✅ **Avoid polluting the global scope** | Variables/functions stay private within the function    |
| 🔒 **Data encapsulation**              | Great for module patterns or keeping variables "hidden" |
| 🔄 **Run code once**                   | Useful for setup tasks, config, or initialization       |
| 📦 **Used in modules (pre-ES6)**       | Common in revealing module patterns                     |

## 🧠 Interview Insight
Q: Why would you use an IIFE instead of a regular function?
A: To protect variables from the global scope, execute code immediately, and create a one-time setup environment.

##🔄 Global Scope Pollution in JS: A Real Problem
🚨 The Problem
In traditional JavaScript (before ES6 modules), multiple <script> tags shared the same global scope.

```javascript
<!-- script1.js -->
<script>
  var config = { mode: "dark" };
</script>

<!-- script2.js -->
<script>
  console.log(config.mode); // ✅ Accessible
  var config = { mode: "light" }; // ⚠️ Overrides the original
</script>
```
🧨 Issue:
Global variables are accessible across scripts and can easily be overwritten, causing unexpected bugs.

✅ The First Fix: IIFE (Immediately Invoked Function Expression)
IIFE helps to encapsulate variables:

```javascript
// script1.js
(function () {
  var config = { mode: "dark" };
  console.log("Script 1:", config);
})();
```
Now, config is not accessible outside the function — avoiding accidental override.

⚠️ But IIFE has limitations:
Cannot reuse variables across files

Still manually handles dependencies

Becomes unmaintainable in large apps

🚀 The Modern Fix: ES6 Modules (import / export)
With ES6 Modules, each file has its own scope, and you can explicitly control what to share.

```javascript
// config.js
export const config = { mode: "dark" };

// app.js
import { config } from "./config.js";
console.log(config.mode); // dark
```
✅ Benefits:
No global pollution

Clear dependencies

Modular, maintainable, and scalable

# Import | Export | Javascript | Module

## 🤔 What Are Modules?
Modules allow you to split code into reusable pieces, each with its own scope.

They help:

Avoid global namespace pollution

Keep code organized

Enable dependency management

Are standard in modern JS (ES6+)

✅ 1. Use type="module" in your HTML
```javascript
<script type="module" src="main.js"></script>
```
This tells the browser to treat your JS file as a module, enabling import and export.

## 🔄 export — Send code from a file
✅ Named Export
You can export multiple values with names:

```javascript
// utils.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```
```javascript
// main.js
import { sum, multiply } from './utils.js';
console.log(sum(2, 3)); // 5
```
💡 You must use curly braces {} to match the exported names.

✅ Default Export
You can export one main value from a file:

```javascript
// config.js
export default {
  apiUrl: 'https://api.example.com',
};
```
```javascript
// app.js
import config from './config.js';
console.log(config.apiUrl); // https://api.example.com
```
🧠 No curly braces needed — name can be anything when importing.

🔁 import — Bring in exported code
```javascript
import { functionName } from './file.js';        // named import
import defaultThing from './file.js';           // default import
import * as utils from './file.js';             // import everything
```
```javascript
import { add as sum } from './math.js';
console.log(sum(2, 3));
```
# Dynamic import()
Dynamic import() in JavaScript allows you to load modules on demand, rather than at the start of execution. This is extremely useful for code splitting, performance optimization, or conditionally loading modules.

✅ Syntax:
```javascript
import('./module.js')
  .then((module) => {
    // use module
    module.functionName();
  })
  .catch((err) => {
    console.error('Error loading module:', err);
  });
  ```
Or using async/await:

```javascript
async function loadModule() {
  const module = await import('./module.js');
  module.functionName();
}
```
🧠 Why Use Dynamic Imports?
🔹 Performance Optimization
Only load what’s needed, when it's needed.

Especially helpful in large apps with many features.

🔹 Conditional Imports
```javascript
if (user.role === 'admin') {
  import('./admin-tools.js').then((admin) => admin.init());
}
```
🔹 Event-Based Loading
```javascript
button.addEventListener('click', async () => {
  const { showModal } = await import('./modal.js');
  showModal();
});
```
📦 Returned Value
import() returns a Promise that resolves to the module object.

This object contains all the exported values from that module.

⚠️ Important Notes
Works only in module scripts (<script type="module"> or Node.js with ES module support).

Use relative or absolute paths and include .js extension.

Unlike static import, can’t be used at top-level without await inside modules (or then).

🚀 Example
File: utils.js
```javascript
export function greet(name) {
  console.log(`Hello, ${name}`);
}
```
File: main.js
```javascript
document.getElementById('btn').addEventListener('click', async () => {
  const utils = await import('./utils.js');
  utils.greet('Alice');
});
```
🧩 Real-World Use Cases
Code splitting in frameworks like React, Vue, Angular

Lazy loading features or routes

Internationalization files loaded per locale

Loading heavy libraries like Chart.js or D3.js only when needed

# ✅ Default Parameters in JavaScript
In JavaScript, default parameters allow you to initialize function parameters with default values if no value is provided or if undefined is passed.

🧠 Basic Syntax:
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();          // Hello, Guest!
greet("Alice");   // Hello, Alice!
```
⚠️ Key Behavior:
Only undefined triggers the default value.

Passing null, false, 0, or "" will NOT use the default.

```javascript
function showStatus(status = "active") {
  console.log(status);
}

showStatus(undefined); // active
showStatus(null);      // null
showStatus("");        // ""
```
🧩 Example: Using expressions as default values
```javascript
function total(a, b = a * 2) {
  return a + b;
}

console.log(total(5));   // 5 + 10 = 15
```
🧩 Example: Default value as function
```javascript
function getDefaultName() {
  return "Anonymous";
}

function greet(name = getDefaultName()) {
  console.log(`Hello, ${name}`);
}

greet(); // Hello, Anonymous
```
🔥 Default + Destructuring
```javascript
function createUser({ name = "Guest", age = 18 } = {}) {
  return `${name}, ${age}`;
}

console.log(createUser()); // Guest, 18
console.log(createUser({ name: "Alice" })); // Alice, 18
```
❌ Common Mistake:
```javascript
function greet(name = "Guest") {
  console.log(`Hi, ${name}`);
}

greet(null); // ❌ Output: Hi, null (not "Guest")
```
## 🎯 Interview Insight
"What happens if you pass null or false to a default parameter?"

It won't use the default. Only undefined triggers it.

## ✅ Rest Parameters (...args)
Rest Parameters allow a function to accept an indefinite number of arguments as an array.

🔹 Syntax:
```javascript
function myFunc(...args) {
  console.log(args);
}

myFunc(1, 2, 3); // [1, 2, 3]
```
🔍 Use Case: Sum all numbers
```javascript
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```
🧠 Notes on Rest Parameters:
Only one rest parameter is allowed per function.

It must be the last parameter.

```javascript
function badExample(a, ...b, c) {} // ❌ Syntax Error
```
## ✅ Parameter Destructuring
Parameter Destructuring lets you directly extract values from objects or arrays passed into functions.

🔹 Example 1: Object Destructuring
```javascript
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age}`);
}

greet({ name: "Alice", age: 25 }); // Hello Alice, you are 25
```
🔹 Example 2: Array Destructuring
```javascript
function printFirstTwo([first, second]) {
  console.log(first, second);
}

printFirstTwo([10, 20, 30]); // 10 20
```
🧠 Why It's Useful
Clean and readable

Reduces boilerplate code

Common in React/Node.js (e.g., ({ req, res }) => {})
