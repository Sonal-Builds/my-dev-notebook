## 🔸 High-Order Array Methods (🔥 Used in FAANG Interviews)
✅ forEach()
Used for iteration (no return value).

```javascript
[1, 2, 3].forEach(num => console.log(num));
```
✅ map()
Returns a new array after transforming each element.

```javascript
const doubled = [1, 2, 3].map(num => num * 2); // [2, 4, 6]
```
✅ filter()
Filters items based on condition.

```javascript
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0); // [2, 4]
```
✅ reduce()
Reduces array to a single value.

```javascript
const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0); // 6
```
✅ find()
Returns the first matching element.

```javascript
const result = [1, 4, 6].find(num => num > 3); // 4
```
✅ findIndex()
Returns index of the first match.

```javascript
const index = [5, 12, 8].findIndex(num => num > 10); // 1
```
✅ some() / every()
some → true if any element passes

every → true if all pass

```javascript
[1, 2, 3].some(num => num > 2);  // true
[1, 2, 3].every(num => num > 0); // true
```
✅ flat() / flatMap()
```javascript
[1, [2, [3]]].flat(2); // [1, 2, 3]
['a', 'b'].flatMap(x => [x, x]); // ['a', 'a', 'b', 'b']
```

✂️ 5. slice() – Copy a part of an array
Returns a new shallow copy from a start to end index (non-inclusive).

Does not change the original array.
```javascript
const nums = [1, 2, 3, 4];
const part = nums.slice(1, 3);
console.log(part); // [2, 3]
```
🔸 Use for copying or extracting parts of an array.

💥 6. splice() – Add/remove items in place
Mutates the original array.
```javascript
const nums = [1, 2, 3, 4];
nums.splice(1, 2); // Remove 2 elements from index 1
console.log(nums); // [1, 4]
```
🔸 Use when you need to insert, remove or replace items in-place.

🔄 7. sort() – Sorts the array in place
Mutates original array.

Use a comparator for custom logic.

```javascript
const nums = [3, 1, 4];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 3, 4]
```
🔸 Use with caution, as it mutates the array.

🔃 8. reverse() – Reverses in place
Mutates original array.

```javascript
const nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]
```
🔸 Great for backward traversals or reversing logic.

## ✅ Mutates the original array

| Method         | What it does                                |
| -------------- | ------------------------------------------- |
| `push()`       | Adds elements to the **end**                |
| `pop()`        | Removes the **last** element                |
| `shift()`      | Removes the **first** element               |
| `unshift()`    | Adds elements to the **beginning**          |
| `splice()`     | Adds/removes/replaces elements at any index |
| `sort()`       | Sorts the array in place (mutates!)         |
| `reverse()`    | Reverses the array **in-place**             |
| `copyWithin()` | Copies part of array within itself          |
| `fill()`       | Fills array elements with a value           |

## ❌ Does NOT mutate the original array

| Method               | What it does                                   |
| -------------------- | ---------------------------------------------- |
| `map()`              | Creates a new array                            |
| `filter()`           | Creates a new array with matching items        |
| `reduce()`           | Returns a single value (or a new array/object) |
| `slice()`            | Returns a shallow copy (sub-array)             |
| `concat()`           | Combines arrays into a new one                 |
| `flat()`             | Flattens array (returns new one)               |
| `flatMap()`          | Map + Flatten (returns new one)                |
| `includes()`         | Checks for value (no mutation)                 |
| `find()`             | Returns first match (no mutation)              |
| `every()` / `some()` | Return boolean (no mutation)                   |
| `findIndex()`        | Returns index (no mutation)                    |
| `indexOf()`          | Returns index (no mutation)                    |
| `join()`             | Returns a string (no mutation)                 |

## ✂️ splice() – "Modify the original array"
### 📌 Key Points:
Mutates the original array ❗

Can remove, replace, or add elements

Returns an array of removed elements

📘 Syntax:
```javascript
array.splice(start, deleteCount, item1, item2, ...)
Param	Meaning
start	Index to start changing the array
deleteCount	Number of items to remove
item1,...	Optional: elements to add at start index
```

✅ Examples:
🔻 Remove elements:
```javascript
const nums = [10, 20, 30, 40];
const removed = nums.splice(1, 2);
console.log(nums);    // [10, 40]
console.log(removed); // [20, 30]
```
➕ Insert elements:
```javascript
const arr = [1, 4];
arr.splice(1, 0, 2, 3); // Insert at index 1, delete 0
console.log(arr); // [1, 2, 3, 4]
```
🔄 Replace elements:
```javascript
const arr = [1, 2, 3];
arr.splice(1, 1, 99);  // Replace index 1
console.log(arr); // [1, 99, 3]
```
🧠 Interview Use:
Used when modifying in-place is acceptable.

Handy for deleting or inserting elements dynamically.

### 🔪 slice() – "Copy a portion of the array"
## 📌 Key Points:
Does NOT mutate the original array ✅

Creates a shallow copy of part of the array

Returns a new array

📘 Syntax:
```javascript
array.slice(start, end)
Param	Meaning
start	Index to begin (inclusive)
end	Index to end (exclusive, optional)
```

✅ Examples:
📤 Copy part of an array:
```javascript
const nums = [10, 20, 30, 40];
const part = nums.slice(1, 3);
console.log(part); // [20, 30]
console.log(nums); // [10, 20, 30, 40] ← unchanged
```
📋 Copy entire array:
```javascript
const nums = [1, 2, 3];
const copy = nums.slice();
console.log(copy); // [1, 2, 3]
```
📉 Slice from the end:
```javascript
const nums = [1, 2, 3, 4];
const lastTwo = nums.slice(-2);
console.log(lastTwo); // [3, 4]
```
🧠 Interview Use:
Use to preserve immutability.

Ideal for creating subarrays or clones.

| Feature        | `splice()`            | `slice()`              |
| -------------- | --------------------- | ---------------------- |
| Mutates array  | ✅ Yes                 | ❌ No                   |
| Returns        | Removed items         | Copied subarray        |
| Use for        | Add/remove/replace    | Extract/clone          |
| Common mistake | Forgetting it mutates | None (safe by default) |

👨‍💻 FAANG-style Tip:
“If mutation causes bugs in your app’s state — prefer slice().
Use splice() carefully and only when direct changes are intended.”