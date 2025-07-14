# 🧩 What is Destructuring?
Destructuring lets you unpack values from arrays or properties from objects into distinct variables, with elegant syntax.

## ✅ Array Destructuring
```javascript
const arr = [10, 20, 30];

// Traditional
const first = arr[0];
const second = arr[1];

// Destructuring
const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
```
🔹 Skipping Values
```javascript
const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3
```
🔹 Rest Syntax
```javascript
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]
```
✅ Object Destructuring
```javascript
const user = { name: "Alice", age: 25 };

const { name, age } = user;
console.log(name); // Alice
```
🔹 Renaming Variables
```javascript
const { name: userName } = user;
console.log(userName); // Alice
```
🔹 Default Values
```javascript
const { city = "Unknown" } = user;
console.log(city); // "Unknown"
```
🔹 Nested Destructuring
```javascript
const user2 = {
  name: "Bob",
  address: {
    city: "Paris",
    zip: 75000
  }
};

const {
  address: { city, zip }
} = user2;

console.log(city); // Paris
```

🚀 Use Cases in Interviews & FAANG Codebases
🔸 Function Parameters
```javascript
function greet({ name, age }) {
  console.log(`Hi ${name}, you're ${age} years old`);
}

greet({ name: "John", age: 30 });
```
🔸 Swapping Variables (⚡ quick trick)
```javascript
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1
```