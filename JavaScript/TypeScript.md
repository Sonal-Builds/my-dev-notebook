
## 🧠 What is TypeScript?

TypeScript is a programming language that builds on JavaScript by adding static types. It helps developers find and fix errors before running the code by checking types during development and developed by Microsoft.

- "It is a Super Set of JavaScript"

TypeScript extends JavaScript by adding optional static types. This means every valid JavaScript file is also a valid TypeScript file.

- "Detects error in code without running it"

TypeScript uses static type checking. It checks types and errors at compile time, so you catch bugs before running the code.

- "It needs to be converted to JS to run"

Browsers and Node.js cannot run .ts files directly. You must transpile (compile) TypeScript to plain JavaScript using the TypeScript compiler (tsc).

- "The compilation process removes all the types"

When you compile TypeScript, all the type annotations are stripped out. The resulting JavaScript is pure, clean, and type-free.

## 🔧 TypeScript vs JavaScript
| Feature        | JavaScript | TypeScript                   |
| -------------- | ---------- | ---------------------------- |
| Typing         | Dynamic    | Static                       |
| Error Checking | Runtime    | Compile-time                 |
| Scalability    | Limited    | Better suited for large apps |
| Learning Curve | Easier     | Slightly steeper             |

## TypeScript in Your Project
```bash
npm install typescript --save-dev
```
## Globally Installing TypeScript
You can use npm to install TypeScript globally, this means that you can use the tsc command anywhere in your terminal.
```bash
npm install -g typescript
```
## Inference in TypeScript
Type inference means TypeScript can automatically figure out the type of a variable even if you don’t explicitly declare it.
```typescript
let name = "Alice";
name = 42; // ❌ Error: Type 'number' is not assignable to type 'string'
```
- TypeScript infers that name is of type string because it’s assigned a string.

## 🧾 Defining Types in TypeScript
In TypeScript, you can explicitly define types to make your code more predictable and readable. This is done using type annotations.

### 🔹 Basic Type Definitions
```typescript
let name: string = "Alice";
let age: number = 30;
let isAdmin: boolean = true;
```
### 🔹 Array Types
```typescript
let scores: number[] = [90, 85, 100];
let names: string[] = ["Alice", "Bob"];
```
###🔹 Object Types
```typescript
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};
```
### 🔹 Function Types
```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```
### 🔹 Custom type Alias
```typescript
type User = {
  name: string;
  age: number;
};

let person: User = {
  name: "Bob",
  age: 25,
};
```
### 🔹 interface (Similar to type)
```typescript
interface Product {
  id: number;
  title: string;
}

let item: Product = {
  id: 1,
  title: "Laptop",
};
```
### 🧠 When to Define Types?

For function arguments and return values

For objects, arrays, and API responses

To create reusable type-safe components

## 🔀 Union Types & ❓ Optional Properties in TypeScript

### 🔹 Union Types (|)
Union types let a value be more than one type.
```typescript
let status: string | number;
let values: (string | number)[] = ["one", 2, "three", 4];
```

### ❓ Optional Properties in Arrays & Objects
1. Object with Optional Property in an Array
```typescript
type User = {
  id: number;
  name: string;
  email?: string; // optional
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

```
# 🔧 TypeScript Functions – Basics + Types
```typescript
//✅ 1. Basic Function with Types
function greet(name: string): string {
  return `Hello, ${name}`;
}

//✅ 2. Function with Multiple Parameters
function add(a: number, b: number): number {
  return a + b;
}

//✅ 3. Optional Parameters (?)
function log(message: string, level?: string): void {
  console.log(level ? `[${level}] ${message}` : message);
}

//✅ 4. Default Parameters
function greetUser(name: string = "Guest"): void {
  console.log(`Welcome, ${name}`);
}

//✅ 5. Union Types in Parameters
function printId(id: number | string): void {
  console.log(`Your ID is: ${id}`);
}

//✅ 6. Function Type Aliases
type AddFn = (a: number, b: number) => number;

const add: AddFn = (x, y) => x + y;

//✅ 7. Arrow Function with Types
const double = (num: number): number => num * 2;

//✅ 8. Function Returning Object
function createUser(name: string): { id: number; name: string } {
  return { id: Date.now(), name };
}

//✅ 9. Function with Array and Object Parameters
function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

function showUser(user: { name: string; age?: number }) {
  console.log(user.name);
}
```
# 🆚 type vs interface (Quick Guide)
| Feature       | `type`                                   | `interface`                       |
| ------------- | ---------------------------------------- | --------------------------------- |
| Object shapes | ✅ Yes                                    | ✅ Yes                             |
| Extendable    | ✅ (via `&`)                              | ✅ (via `extends`)                 |
| Union types   | ✅ Yes                                    | ❌ No                              |
| Preferred for | Primitives, unions, complex compositions | Classes, API shapes, OOP patterns |


# 🎯 Literal Union Types (a.k.a. Named Union Types)
Named types let you define custom reusable types using either type or interface. This makes your code cleaner, readable, and DRY (Don't Repeat Yourself).

```typescript
type Value = 25 | 50 | 75;

let v1: Value = 25;  // ✅
let v2: Value = 60;  // ❌ Error: Type '60' is not assignable to type 'Value'

//🧠 Use Cases:
type Status = "loading" | "success" | "error";

let s: Status = "success"; // ✅
s = "idle";                // ❌ Error
```

# 🔁 Function Overloading in TypeScript
Function overloading in TypeScript lets you define multiple type signatures for the same function — so it can behave differently depending on the input types.
```typescript
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

combine("Hi ", "there"); // "Hi there"
combine(10, 20);         // 30
```

# 🧬 Generics in TypeScript – Explained Simply
Generics let you write reusable, type-safe code that works with any data type, while still preserving type information.
✅ Simple definition:

Generics are like variables for types. They allow functions, classes, and types to work with different types without losing type safety.

```typescript
//🔹 1. Generic Function
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");  // returns string
identity<number>(42);       // returns number
//T is a type variable (like a placeholder for a type)

//Type is inferred automatically if not specified
const result = identity(true); // T = boolean

//🔹 2. Generic with Arrays
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

firstElement<string>(["a", "b", "c"]); // returns "a"

🔹 3. Generic Type Alias
type ApiResponse<T> = {
  data: T;
  success: boolean;
};

const userResponse: ApiResponse<{ name: string }> = {
  data: { name: "Alice" },
  success: true,
};

🔹 4. Generic Interface
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 123 };

🔹 5. Generic Constraints (Limits What T Can Be)
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("hello");         // ✅
logLength([1, 2, 3]);        // ✅
logLength(42);               // ❌ Error: number has no length

```

## 🔁 1. Merging with type (using intersections &)
```typescript
type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Staff = Person & Employee;

const s: Staff = {
  name: "Alice",
  id: 101,
};
```
## 🧬 2. Merging with interface (using extends)
```typescript
interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

const e: Employee = {
  name: "Bob",
  id: 202,
};
```
### 🧠 Bonus: Interface Merging (Declaration Merging)
```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Sam",
  age: 25,
};

//TypeScript automatically merges interfaces with the same name
//type cannot do this — you'd get a duplicate identifier erro

```

# 🧭 enum in TypeScript — Explained Simply
An enum (short for enumeration) is a special TypeScript feature used to define a set of named constant values. It makes your code more readable, organized, and type-safe when dealing with a fixed set of options.
```typescript
// 🔹 1. Numeric Enum (Default)
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let move: Direction = Direction.Up;
console.log(move); // 0

//By default, values start at 0 and increment.
//You can assign custom numbers:
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}


//🔹 2. String Enum
enum Size {
  Small = "S",
  Medium = "M",
  Large = "L"
}
let shirtSize: Size = Size.Medium;


// 🔹 3. Heterogeneous Enum (not recommended)
enum Mix {
  No = 0,
  Yes = "YES"
}


//🔹 4. Enum with Function
enum Role {
  Admin,
  User,
  Guest
}

function checkAccess(role: Role) {
  if (role === Role.Admin) {
    console.log("Full access");
  }
}

//🔹 5. Reverse Mapping (only for numeric enums)
enum Fruit {
  Apple = 1,
  Banana = 2
}

console.log(Fruit[1]); // "Apple"

```
## 🔁 Alternatives to enum

```typescript
type Status = "success" | "error" | "loading";
✅ Lighter and more readable
❌ No reverse lookup, no constant representation
```
## 🧊 as const in TypeScript — Explained Clearly
```typescript
const colors = ["red", "green", "blue"] as const;

//🔹 Use Case: Immutable Object
const config = {
  env: "production",
  debug: false,
} as const;

```

# 🔑 typeof – Get the Type of a Value - not understood later will check