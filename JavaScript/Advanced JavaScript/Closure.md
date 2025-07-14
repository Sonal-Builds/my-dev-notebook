## 📌 What is a Closure?
A closure is created when a function “remembers” the variables from its lexical scope, even after that outer function has finished executing.

🔹 In Simple Words:
A closure gives you access to an outer function’s variables from an inner function — even after the outer function has returned.

🔧 Example:
```javascript
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer(); // outer runs and returns inner
counter(); // 1
counter(); // 2
counter(); // 3
```
✅ What's happening?
outer() creates count.

inner() forms a closure over count.

Even after outer() is done, count is not garbage collected — because inner still has access to it.

🧠 In Interviews, Say:
A closure is when an inner function retains access to variables from its lexical (outer) scope, even after the outer function has returned.
It’s powerful for encapsulation, data privacy, and function factories.

| Use Case                  | Description                           |
| ------------------------- | ------------------------------------- |
| **Data privacy**          | Hide variables from global scope      |
| **Function factories**    | Return pre-configured functions       |
| **Event handlers**        | Maintain state per handler            |
| **setTimeout/async**      | Retain access to scoped variables     |
| **Currying/partial apps** | Return function with preset arguments |

### ❓Common Interview Follow-ups:
🔸 Q: Can closures cause memory leaks?
Yes, if not managed well. If you retain closures that reference large outer scopes unnecessarily (e.g., DOM nodes), the memory won’t be released.

🔸 Q: What is the difference between closure and scope?
Scope defines where a variable is accessible.
A closure is what preserves that scope, even after the outer function ends.

### 🧠 Bonus: Closure with setTimeout
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3 (NOT 0 1 2 — because closure captures `i` by reference)
```
✅ Fix it with IIFE:

```javascript
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 100);
    })(i);
}
```

### 1️⃣ Create a Counter Function
```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

// Test
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

### 2️⃣ Counter with Reset
```javascript
function counterFactory() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    };
}

// Test
const counter = counterFactory();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.reset());     // 0
console.log(counter.increment()); // 1
```

### 3️⃣ Function Factory (Power)
```javascript
function powerFactory(exp) {
    return function (num) {
        return Math.pow(num, exp);
    };
}

// Test
const square = powerFactory(2);
const cube = powerFactory(3);

console.log(square(5)); // 25
console.log(cube(2));   // 8
```

### 4️⃣ Once Function
```javascript
function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            result = fn.apply(this, args);
            called = true;
        }
        return result;
    };
}

// Test
const init = once(() => console.log('Init done'));

init(); // "Init done"
init(); // Nothing
init(); // Nothing
```
### 5️⃣ Private Data Store
```javascript
function createSecret(secret) {
    return {
        getSecret: function () {
            return secret;
        }
    };
}

// Test
const vault = createSecret('🔐 Hidden value');

console.log(vault.getSecret()); // 🔐 Hidden value
console.log(vault.secret);      // undefined
```
### 6️⃣ Loop Closure Bug (Fix with Closure)
```javascript
function printNumbers() {
    for (var i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
```
✅ Fixed version using let:
```javascript
function printNumbers() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
```
✅ Fixed version using closure (IIFE):
```javascript
function printNumbers() {
    for (var i = 1; i <= 3; i++) {
        (function (j) {
            setTimeout(() => {
                console.log(j);
            }, j * 1000);
        })(i);
    }
}
```
### 7️⃣ Memoization with Closure
```javascript
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) return cache[key];

        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Test
const slowSquare = (n) => {
    console.log('Calculating...');
    return n * n;
};

const fastSquare = memoize(slowSquare);

console.log(fastSquare(4)); // Calculating..., 16
console.log(fastSquare(4)); // 16 (cached)
console.log(fastSquare(5)); // Calculating..., 25
```

## 8️⃣ Currying with Closures
```javascript
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

// Test
console.log(multiply(2)(3)(4)); // 24
```

## 🔒 What Are Closure Questions Testing?
FAANG closure questions often test:

Scope mastery (especially lexical scope)

Function encapsulation and private state

Memory optimization or state retention

Functional patterns (like currying or memoization)

✅ Real FAANG Closure Questions with Explanations
### 1️⃣ Google — Implement once(fn)
✅ Run a function only once, no matter how many times it’s called.

🔍 Why it’s asked:
Tests your ability to use closures for persistent state across function calls.

```javascript
function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            result = fn.apply(this, args);
            called = true;
        }
        return result;
    };
}

// Usage
const init = once(() => console.log("Init"));
init(); // "Init"
init(); // nothing
```
✅ Concepts: Closure, state retention, function control

### 2️⃣ Meta — add(1)(2)(3)...()
✅ Create a chainable function that returns the sum when finally called with ().

🔍 Why it’s asked:
Tests currying, closure chaining, and toString or valueOf coercion.

```javascript
function add(a) {
    let sum = a;

    function inner(b) {
        if (b === undefined) return sum;
        sum += b;
        return inner;
    }

    return inner;
}

// Usage
console.log(add(1)(2)(3)()); // 6
```
✅ Concepts: Closures for accumulation, currying

### 3️⃣ Amazon — Memoize a Function
✅ Return a function that caches previous results to avoid recomputation.

🔍 Why it’s asked:
Checks your use of closures for data caching and optimization.

```javascript
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = args.join(",");
        if (key in cache) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Usage
const square = memoize(n => n * n);
console.log(square(5)); // 25
console.log(square(5)); // 25 (cached)
```
✅ Concepts: Cache management with closures

### 4️⃣ Netflix — Throttle Function
✅ Allow a function to run at most once every X ms.

🔍 Why it’s asked:
Evaluates your understanding of time-based state control inside closures.
```javascript
function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// Usage
const throttled = throttle(() => console.log("Run!"), 1000);
throttled(); // Run!
throttled(); // ignored if within 1s
```
✅ Concepts: Closure with time logic and performance

### 5️⃣ Apple — Counter with Encapsulation
✅ Create an object with increment(), decrement() and value() methods, but hide count.

🔍 Why it’s asked:
Checks data privacy using closures, a common pattern in JS modules.

```javascript
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        value: () => count
    };
}

// Usage
const counter = createCounter();
counter.increment(); // 1
counter.decrement(); // 0
console.log(counter.value()); // 0
```
✅ Concepts: Data privacy, function scope

### 6️⃣ Google — Loop and Closure Bug
✅ Output 1, 2, 3... with delays using setTimeout.

🔍 Why it’s asked:
Tests understanding of function scope vs block scope in closures.

```javascript
for (var i = 1; i <= 3; i++) {
    (function (j) {
        setTimeout(() => console.log(j), j * 1000);
    })(i);
}

// OR with `let`
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
```
✅ Concepts: Function scoping (var) vs block scoping (let), IIFE

### 7️⃣ Facebook — Custom bind() Implementation
✅ Recreate Function.prototype.bind.

🔍 Why it’s asked:
Tests knowledge of closure, this, and function context binding.

```javascript
Function.prototype.myBind = function (context, ...args1) {
    const fn = this;
    return function (...args2) {
        return fn.apply(context, [...args1, ...args2]);
    };
};

function greet(greeting, name) {
    return `${greeting}, ${name}`;
}

const sayHi = greet.myBind(null, "Hi");
console.log(sayHi("Alice")); // Hi, Alice
```
✅ Concepts: Custom function wrappers with closure

### 8️⃣ Amazon — Debounce Function
✅ Delay execution until a pause in calls.

🔍 Why it’s asked:
Verifies closure knowledge for asynchronous behavior control.

```javascript
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Usage
const debounced = debounce(() => console.log("Typing done..."), 500);
debounced(); debounced(); debounced(); // Only one log after 500ms
```
✅ Concepts: Closures with timers and async patterns