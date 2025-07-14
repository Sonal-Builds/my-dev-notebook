##🔹 Shallow Copy
A shallow copy copies only the top-level properties. If a property is a reference (object, array), it still points to the same memory.

✅ Use Cases:
Quick copies of flat objects/arrays.

When nested structures don't change.

❌ Risk:
Changing nested values affects the original object.

🔸 Example:
```javascript
const original = { name: "Alice", details: { age: 25 } };
const shallow = { ...original };

shallow.details.age = 30;

console.log(original.details.age); // 🔥 30 — changed in original too
```
Methods that do shallow copy:
Object.assign({}, obj)

{ ...obj } (spread operator)

Array.prototype.slice()

[...array]

## 🔹 Deep Copy
A deep copy copies everything, including nested objects/arrays, by recursively cloning each level.

✅ Use Cases:
When you want complete isolation between original and copy.

🔸 Example:
```javascript
const original = { name: "Alice", details: { age: 25 } };
const deep = JSON.parse(JSON.stringify(original));

deep.details.age = 30;

console.log(original.details.age); // ✅ 25 — original remains unchanged
```
❌ Limitations of JSON.parse(JSON.stringify()):
Drops functions

Loses undefined, Date, Map, Set, etc.

✅ Recommended Deep Copy (Advanced):
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clone = {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}
```