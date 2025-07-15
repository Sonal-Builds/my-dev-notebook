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
```javascript
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 30 };
console.log("Original:", user); // { name: "Alice", age: 25 }
console.log("Updated:", updatedUser); // { name: "Alice", age: 30 }
```

// 🔸 2. Merge User Configurations
```javascript
const defaultConfig = { theme: "light", notifications: true };
const userConfig = { theme: "dark" };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log("Final Config:", finalConfig); // { theme: "dark", notifications: true }
```

// 🔸 3. Remove Key from Object
```javascript
const { password, ...safeUser } = {
  name: "Bob",
  email: "bob@example.com",
  password: "123456",
};
console.log("Safe User:", safeUser); // { name: "Bob", email: "bob@example.com" }
```

// 🔸 4. Function Argument Exploder
```javascript
function callWithArgs(fn, argsArray) {
  return fn(...argsArray);
}
console.log("Max:", callWithArgs(Math.max, [1, 5, 3])); // 5
```

// 🔸 5. Shallow Copy Issue
```javascript
const arr1 = [{ name: "A" }];
const arr2 = [...arr1];
arr2[0].name = "B";
console.log("Original Array:", arr1); // [{ name: "B" }], because of shallow copy
```

// 🔸 6. Remove Value from Array
```javascript
function removeValue(arr, val) {
  return arr.filter(item => item !== val);
}
console.log("Filtered:", removeValue([1, 2, 3, 2, 4], 2)); // [1, 3, 4]
```

// 🔸 7. Flatten One-Level Array
```javascript
const nested = [1, 2, [3, 4], 5];
const flattened = [].concat(...nested);
console.log("Flattened:", flattened); // [1, 2, 3, 4, 5]
```

// 🔸 8. Spread with Strings
```javascript
const str = "hello";
const chars = [...str];
console.log("Chars:", chars); // ['h', 'e', 'l', 'l', 'o']
```

// 🔸 9. Custom Extend Function
```javascript
function extend(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
console.log("Extended:", extend({ a: 1 }, { b: 2 }, { a: 3 })); // { a: 3, b: 2 }

// 🔸 10. React Props (conceptual example)
// const Component = (props) => <div {...props} />;
// <Component id="user" className="card" /> will spread props as individual HTML attributes
// Not executable in plain JS
```


## 🟦 1. Equality in JavaScript
JavaScript offers two main types of equality:

Operator	Name	Compares	Coercion
==	Loose Equality	Value	✅ Yes
===	Strict Equality	Value + Type	❌ No

🔹 Example:
```javascript
'5' == 5      // true  -> coerces string to number
'5' === 5     // false -> different types
```
🔥 Use === (strict equality) for predictable results.

🟨 2. Mutable vs Immutable
🔁 Mutable
Can be changed after creation

Includes: Array, Object, Map, Set, etc.

```javascript
let obj = { a: 1 };
obj.a = 2;  // mutated
```
🔒 Immutable
Cannot be changed after creation

Includes: String, Number, Boolean, undefined, null, Symbol, BigInt

```javascript
let str = 'hello';
str[0] = 'H';  // ❌ does nothing
```
🧠 Why This Matters (Interview POV)
🔹 Equality + Mutability Confusion
```javascript
let a = [1, 2];
let b = [1, 2];

console.log(a === b); // false – different references
```
```javascript
let c = a;
console.log(a === c); // true – same reference
```
🔹 Mutable Pitfall
Modifying one reference can accidentally modify all if shared.

```javascript
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);

console.log(arr1); // [1, 2, 3] 😬 mutated arr1!
```
✅ How to Prevent Bugs
Use spread (...) or structured cloning to avoid mutating the original:

```javascript
let newArr = [...arr1]; // shallow clone
```
Immutability helps with:

State management (e.g., Redux)

Debugging and time travel

Safer function design (pure functions)

📌 1. Variable Stores Reference
📌 2. Mutable – Value Can Change
📌 3. Immutable – Value Cannot Change

## 🔐 const vs Immutable in JavaScript
### ✅ const – Reference Cannot Be Reassigned
You cannot reassign the variable to a new reference.

But you can mutate the object it points to (if it's mutable).

```javascript
const arr = [1, 2, 3];
arr.push(4);       // ✅ Allowed
arr = [5, 6];      // ❌ TypeError
```
🔸 Use const to prevent accidental reassignment, not to enforce immutability.

### 🧊 Immutable – Value Cannot Be Changed
Applies to primitive types (string, number, boolean, etc.)

You can't mutate them — you create new ones instead.

```javascript
let str = "hi";
str[0] = "H";      // ❌ No effect
str = "Hi";        // ✅ Creates a new string
```

## 🔍 Common confusion in interviews:

“Is const object immutable?”

Answer:

❌ No. const only locks the reference, not the contents of the object or array.