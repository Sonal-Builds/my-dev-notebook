## 🔹 Spread Operator (...) in JavaScript
✅ Definition
The spread operator ... takes an iterable (like an array, string, or object) and expands it into individual elements.

🧠 Why It's Important in Interviews
Used for cloning and merging arrays/objects

Simplifies function argument handling

Common in React props, destructuring, and more

Often confused with the rest operator → be able to explain the difference

🔸 Syntax & Use Cases
1. Array Cloning
```javascript
const original = [1, 2, 3];
const copy = [...original]; // [1, 2, 3]
```
2. Array Merging
```javascript
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b]; // [1, 2, 3, 4]
```
3. Function Arguments
```javascript
function sum(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
sum(...nums); // 6
```
4. Object Cloning and Merging
```javascript
const user = { name: "John", age: 30 };
const updated = { ...user, age: 31 }; 
// { name: "John", age: 31 }
```
5. String to Characters
```javascript
const chars = [..."hello"]; 
// ['h', 'e', 'l', 'l', 'o']
```
⚠️ Shallow Copy Warning
```javascript
const obj = { nested: { a: 1 } };
const clone = { ...obj };
clone.nested.a = 99;
console.log(obj.nested.a); // 99 ❌ (not a deep copy)
```
Spread only performs shallow copying.

For deep cloning, use structuredClone (new) or utilities like Lodash.

// 🔸 1. Clone and Modify Without Mutating
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 30 };
console.log("Original:", user); // { name: "Alice", age: 25 }
console.log("Updated:", updatedUser); // { name: "Alice", age: 30 }

// 🔸 2. Merge User Configurations
const defaultConfig = { theme: "light", notifications: true };
const userConfig = { theme: "dark" };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log("Final Config:", finalConfig); // { theme: "dark", notifications: true }

// 🔸 3. Remove Key from Object
const { password, ...safeUser } = {
  name: "Bob",
  email: "bob@example.com",
  password: "123456",
};
console.log("Safe User:", safeUser); // { name: "Bob", email: "bob@example.com" }

// 🔸 4. Function Argument Exploder
function callWithArgs(fn, argsArray) {
  return fn(...argsArray);
}
console.log("Max:", callWithArgs(Math.max, [1, 5, 3])); // 5

// 🔸 5. Shallow Copy Issue
const arr1 = [{ name: "A" }];
const arr2 = [...arr1];
arr2[0].name = "B";
console.log("Original Array:", arr1); // [{ name: "B" }], because of shallow copy

// 🔸 6. Remove Value from Array
function removeValue(arr, val) {
  return arr.filter(item => item !== val);
}
console.log("Filtered:", removeValue([1, 2, 3, 2, 4], 2)); // [1, 3, 4]

// 🔸 7. Flatten One-Level Array
const nested = [1, 2, [3, 4], 5];
const flattened = [].concat(...nested);
console.log("Flattened:", flattened); // [1, 2, 3, 4, 5]

// 🔸 8. Spread with Strings
const str = "hello";
const chars = [...str];
console.log("Chars:", chars); // ['h', 'e', 'l', 'l', 'o']

// 🔸 9. Custom Extend Function
function extend(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
console.log("Extended:", extend({ a: 1 }, { b: 2 }, { a: 3 })); // { a: 3, b: 2 }

// 🔸 10. React Props (conceptual example)
// const Component = (props) => <div {...props} />;
// <Component id="user" className="card" /> will spread props as individual HTML attributes
// Not executable in plain JS
