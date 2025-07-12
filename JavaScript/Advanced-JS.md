

# `this` keyword, `bind()` | `call()` | `apply()`

- `this` refers to the **object that is executing the current function**. But… its value depends on **how the function is called**.

### 📌 What `this` refers to in different contexts:

| Context                         | What `this` refers to                     |
| ------------------------------ | ---------------------------------------- |
| In a **method**                | The object that owns the method          |
| In a **regular function (strict)** | `undefined`                          |
| In a **regular function (non-strict)** | `window` (in browsers)          |
| In an **arrow function**       | Lexically bound (`this` from outer scope)|
| In a **constructor**           | The newly created object                 |
| In a **DOM event handler**     | The DOM element that triggered the event |
| With **call/apply/bind**       | Explicitly defined                       |

---

### 🔧 `bind()` | `call()` | `apply()` — Comparison

| Method    | What it does                              | Syntax                              |
| --------- | ----------------------------------------- | ----------------------------------- |
| `bind()`  | Returns a new function with `this` set     | `fn.bind(thisArg, arg1, ...)`       |
| `call()`  | Calls function with `this` and args        | `fn.call(thisArg, arg1, arg2, ...)` |
| `apply()` | Calls function with `this` and arg array   | `fn.apply(thisArg, [arg1, arg2])`   |

> 🔹 Arrow functions do **not bind** their own `this`. They inherit it from their parent scope.  
> 🔹 Use `bind()` to lock a function’s `this` value.  
> 🔹 Use `call()` or `apply()` to **temporarily** set `this`.

---

### 🧪 Code Examples

```jsx
const obj = {
    a: 10,
    b: 20,
    fun: function() {
        console.log(this);
    }
};

// bind
const aa = obj.fun.bind(obj);
aa();

// call
obj.fun.call(obj);

// apply
const obj2 = {
    c: function(x, y) {
        console.log(this, x, y);
    }
};

const bb = obj2.c;
bb.apply(obj2, [70, 80]);
🔸 bind() — "Bind and Save"
🎯 Creates a new function with locked-in this
🚫 Does not run the function immediately.
✅ Use it when you want to reuse a function later with a fixed this.

🧠 Think: “I want to bind this, but call later.”


const obj3 = {
    a: 10,
    b: 20,
    function1() {
        console.log(this);
        function inner() {
            console.log('inner', this);
        }
        let qq = inner.bind(this); // bind `this` from outer scope
        qq(); // now call it
    }
};

obj3.function1();
🔸 call() — "Call Now, with Commas"
🎯 Runs the function immediately with a given this and arguments (comma-separated)


func.call(thisArg, arg1, arg2);
🧠 Think: “I want to call the function now, with arguments like a regular call.”

🔸 apply() — "Apply Now, with Array"
🎯 Same as call(), but arguments are passed as an array


func.apply(thisArg, [arg1, arg2]);
🧠 Think: “I want to apply an array of arguments.”