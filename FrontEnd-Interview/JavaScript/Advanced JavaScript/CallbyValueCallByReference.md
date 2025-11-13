In JavaScript, all function arguments are technically passed by value. However, the way that primitive types and objects behave differs, and that often leads to confusion.

## 📌 Call by Value — for primitive types
When you pass a primitive value (like a number, string, or boolean) to a function, JavaScript creates a copy of that value.
Any changes made inside the function do not affect the original variable.

```javascript
function update(x) {
    x = x + 10;
}
let a = 5;
update(a);
console.log(a); // 5 — original remains unchanged
```
## 📌 Call by "Reference" — for objects and arrays
When you pass an object or array, JavaScript still passes by value, but it's the value of the reference (i.e., the memory address).
That means:

You can mutate the object inside the function (change properties).

But if you reassign the reference, it won’t affect the original.

Example 1 — Mutation (✅ changes original):
```javascript
function modify(obj) {
    obj.name = "Updated";
}
let user = { name: "John" };
modify(user);
console.log(user.name); // "Updated"
```

Example 2 — Reassignment (❌ doesn't change original):
```javascript
function reassign(obj) {
    obj = { name: "New Object" };
}
let user = { name: "John" };
reassign(user);
console.log(user.name); // Still "John"
```
## 🧠 So in an interview, I’d say:
JavaScript is pass-by-value, but when dealing with objects, it's passing the value of the reference. That allows mutation of the object’s contents within the function, but not reassignment of the object itself.

🎯 Bonus: How to Stand Out
If the interviewer follows up:

💬 "So can you summarize when a change inside a function affects the outer variable?"

You could say:

Yes — if you're passing a primitive, changes are local. But if you're passing an object or array and you mutate its properties, the change is reflected outside the function because the reference points to the same memory.
However, reassigning the object reference inside the function breaks the link, so the outer variable is unaffected.

## ✅ Reason for the Type Difference
🔹 1. Primitives are stored directly in the stack (fixed size, immutable)
When you assign a primitive (like a number, string, or boolean), the actual value is stored in memory.

These values are cheap to copy, so JavaScript passes a copy (call by value).
```javascript
let a = 5;
let b = a; // b gets a copy of 5
b = 10;
console.log(a); // Still 5
```
👉 Why?
Because primitives are simple, small, and immutable, passing them by value is more efficient and safe.

🔸 2. Objects are stored in the heap (reference-based, dynamic size)
When you assign an object (array, function, object), the reference (pointer) to that object is stored.

When you pass an object to a function, JavaScript passes the value of that reference.

So the function can access and modify the actual object.

```javascript
let obj = { name: "John" };
let copy = obj; // copy holds a reference to the same object
copy.name = "Alice";
console.log(obj.name); // "Alice"
```
👉 Why?
Because objects can be large and mutable, copying the entire object each time would be expensive.
Instead, JavaScript passes the reference, which is efficient and allows shared access.

⚠️ But Why Can’t JS Fully Do "Call by Reference"?
Even though you can mutate an object, you can’t reassign it and expect that reassignment to reflect outside:

```javascript
function update(o) {
    o = { name: "Changed" };
}
let user = { name: "Original" };
update(user);
console.log(user.name); // Still "Original"
```
💡 Why?
Because o holds a copy of the reference, not the reference itself.
Reassigning o breaks the link—it points to a new object, not the original.

This is JavaScript’s “pass by value of reference” behavior.

| Type      | Stored In | Passed As          | Can Be Mutated? | Can Be Reassigned From Caller? |
| --------- | --------- | ------------------ | --------------- | ------------------------------ |
| Primitive | Stack     | By Value           | ❌               | ❌                              |
| Object    | Heap      | Value of Reference | ✅               | ❌                              |



Great choice! Here are FAANG-style variations of the Call by Value vs Call by Reference concept, often used to test both deep understanding of JavaScript and problem-solving under constraints.

### ✅ Variation 1: "Why doesn't this code update the object?"
```javascript
function update(obj) {
    obj = { name: "Updated" };
}

const person = { name: "John" };
update(person);
console.log(person.name); // ???
```
💬 Expected Interview Answer:
The function is reassigning the local variable obj to a new object, but that change doesn't affect the original person object outside the function.

JavaScript passes objects by value of the reference, not by reference itself. So reassigning inside the function breaks the link.

✅ Output: "John"

### ✅ Variation 2: Mutate vs Reassign Challenge
```javascript
function modifyArray(arr) {
    arr.push(4);      // Mutates the original
    arr = [1, 2, 3];  // Reassigns the local reference
    arr.push(5);      // Only affects the new local array
}

let nums = [0];
modifyArray(nums);
console.log(nums); // ???
```
💬 Expected Answer:
arr.push(4) mutates the original array, so [0] becomes [0, 4].
Then, arr is reassigned to a new array [1, 2, 3] inside the function, but that new array is local. So when we push 5, it affects the new array, not the original.

nums remains [0, 4].

✅ Output: [0, 4]

### ✅ Variation 3: Immutability in Function Arguments
💬 "How would you prevent a function from mutating an object passed to it?"

💡 Suggested Answer:
You can use Object.freeze(obj) to make the object immutable (shallow freeze), or deep clone it before passing, e.g., using:

const clone = JSON.parse(JSON.stringify(obj));
This ensures that any mutations inside the function do not affect the original.

### ✅ Variation 4: "Can we simulate call by reference for primitives?"
💡 Suggested Answer:
Not directly, but we can wrap the primitive inside an object or array and pass that.

```javascript
function modify(wrapper) {
    wrapper.value += 10;
}

let x = { value: 5 };
modify(x);
console.log(x.value); // 15
```
This simulates reference-like behavior for primitives.

### ✅ Variation 5: "What happens if you pass a function as an argument and reassign it?"

```javascript
function changeFn(fn) {
    fn = () => console.log("New function");
}

function originalFn() {
    console.log("Original function");
}

changeFn(originalFn);
originalFn(); // ???
```
💬 Expected Answer:
The original function originalFn is not affected.
Inside changeFn, fn is reassigned to a new function, but this does not update the original binding. So originalFn() still logs "Original function".

✅ Output: "Original function"

🧠 Tips for Interviews:
Be precise with terminology: "JavaScript passes objects by value of the reference."

Give real code examples — interviewers love this.

Demonstrate awareness of edge cases (e.g., mutation vs reassignment, primitives vs objects).

When in doubt, dry-run out loud: explain what happens line by line.