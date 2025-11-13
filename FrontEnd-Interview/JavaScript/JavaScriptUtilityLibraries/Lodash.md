## 🔍 What is Lodash?
Lodash is a modern JavaScript utility library that makes working with arrays, objects, functions, and more much easier and faster.

✅ Lodash is known for simplifying complex JS operations with short, optimized methods.

📚 Why Learn Lodash?
Reason	Benefit
Cleaner syntax	Short, readable code
Cross-browser support	Handles edge cases internally
Interview-friendly	Shows deep understanding of data manipulation
Performance optimized	Internally faster than native JS in some cases

🛠 Most Useful Lodash Methods (with Examples)
🔸 1. _.cloneDeep()
Deep copy an object/array (avoids mutation bugs)

```javascript
const _ = require("lodash");

const obj = { a: 1, b: { c: 2 } };
const copy = _.cloneDeep(obj);
copy.b.c = 5;

console.log(obj.b.c); // Still 2 ✅
```
🔸 2. _.get() and _.set()
Safely access/set deeply nested values.

```javascript
const user = { profile: { email: "a@example.com" } };

const email = _.get(user, "profile.email"); // "a@example.com"
_.set(user, "profile.phone", "12345");

console.log(user.profile.phone); // "12345"
```
🔸 3. _.debounce() and _.throttle()
Control the rate of function calls (great for scroll/resize/search)

```javascript
// Debounce: delays execution until user stops typing
const debouncedFn = _.debounce(() => console.log("Search!"), 300);

// Throttle: ensures it runs at most once per interval
const throttledFn = _.throttle(() => console.log("Scroll!"), 1000);
```
🔸 4. _.uniq() and _.uniqBy()
Remove duplicates from arrays

```javascript
_.uniq([1, 2, 2, 3]); // [1, 2, 3]

_.uniqBy([{id:1}, {id:2}, {id:1}], 'id'); // [{id:1}, {id:2}]
```
🔸 5. _.groupBy()
Group array of objects by a field

```javascript
const arr = [{type:'fruit', name:'apple'}, {type:'fruit', name:'banana'}, {type:'veg', name:'carrot'}];

_.groupBy(arr, 'type');
/*
{
  fruit: [{...}, {...}],
  veg: [{...}]
}
*/
```

✅ 1. Deep Clone an Object Without Mutation
🧩 Problem:
You receive a nested object. Create a deep copy so that modifying the new object does not affect the original.

```javascript
const user = {
  name: "Alice",
  address: {
    city: "NY",
    zip: 12345
  }
};

const clonedUser = _.cloneDeep(user);
clonedUser.address.city = "LA";

console.log(user.address.city); // Expected: "NY"
```
✅ Why Lodash? JS Object.assign() or {...} does a shallow copy. Lodash handles nested objects too.

✅ 2. Group Items by Property
🧩 Problem:
Group a list of products by their category.

```javascript
const products = [
  { name: "Apple", category: "fruit" },
  { name: "Banana", category: "fruit" },
  { name: "Carrot", category: "vegetable" }
];

const grouped = _.groupBy(products, 'category');

/* Expected Output:
{
  fruit: [{ name: "Apple", ... }, { name: "Banana", ... }],
  vegetable: [{ name: "Carrot", ... }]
}
*/
```
✅ Why Lodash? Writing custom grouping logic is verbose. _.groupBy() makes it super readable.

✅ 3. Get Nested Property Safely
🧩 Problem:
Safely extract a deeply nested property (user.profile.twitter), even if intermediate levels are missing.

```javascript
const user = {
  profile: {
    name: "Bob"
    // twitter might not exist
  }
};

const twitter = _.get(user, 'profile.twitter', 'N/A');
console.log(twitter); // Expected: 'N/A'
```
✅ Why Lodash? Prevents TypeError when accessing undefined properties. Native optional chaining (?.) does similar but not all browsers support it equally.

✅ 4. Debounce a Function
🧩 Problem:
Implement an auto-save that triggers only after the user stops typing for 1 second.

```javascript
const saveDraft = _.debounce(() => {
  console.log("Draft saved!");
}, 1000);
```

inputElement.addEventListener('input', saveDraft);
✅ Why Lodash? Debounce is tricky to write manually. Lodash does it reliably across browsers.

✅ 5. Remove Duplicates by Key
🧩 Problem:
Remove duplicate objects from an array by a unique id.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }
];

const uniqueUsers = _.uniqBy(users, 'id');
```

// Expected: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
✅ Why Lodash? Set only works for primitives. Lodash's _.uniqBy() handles objects by key.