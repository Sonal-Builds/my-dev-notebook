
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

# 🔧 Most Used TypeScript Utility Types
```typescript
// 1. ✅ Partial<Type>
// Makes all properties optional

type User = { name: string; age: number };
type PartialUser = Partial<User>; // { name?: string; age?: number }

// 2. ✅ Required<Type>
// Makes all properties required

type Props = { title?: string };
type RequiredProps = Required<Props>; // { title: string }

// 3. ✅ Readonly<Type>
// Makes all properties read-only

type Todo = { id: number; task: string };
const todo: Readonly<Todo> = { id: 1, task: "Learn TS" };
todo.task = "Update"; // ❌ Error: Cannot assign to 'task'

// 4. ✅ Pick<Type, Keys>
// Picks a subset of properties

type User = { id: number; name: string; email: string };
type BasicInfo = Pick<User, "id" | "name">; // { id: number; name: string }

// 5. ✅ Omit<Type, Keys>
//  Removes a subset of properties

type User = { id: number; name: string; email: string };
type NoEmail = Omit<User, "email">; // { id: number; name: string }

// 6. ✅ Record<Keys, Type>
//Constructs an object type with specified keys and value types

type Theme = "dark" | "light";
type ThemeColors = Record<Theme, string>; // { dark: string; light: string }

// 7. ✅ Exclude<UnionType, ExcludedMembers>
// Removes types from a union

type Status = "success" | "error" | "loading";
type NonError = Exclude<Status, "error">; // "success" | "loading"

// 8. ✅ Extract<Type, Union>
// Extracts types that are common to both

type A = "a" | "b" | "c";
type B = "a" | "z";
type Common = Extract<A, B>; // "a"

// 9. ✅ NonNullable<Type>
// Removes null and undefined from a type

type Maybe = string | null | undefined;
type Clean = NonNullable<Maybe>; // string

// 10. ✅ ReturnType<Function>
// Extracts the return type of a function

function getUser() {
  return { id: 1, name: "Alice" };
}
type UserReturn = ReturnType<typeof getUser>; // { id: number; name: string }

// 11. ✅ Parameters<Function>
// Extracts the parameter types of a function

function greet(name: string, age: number) {}
type Args = Parameters<typeof greet>; // [name: string, age: number]

// 12. ✅ Awaited<Type>
// Gets the resolved type of a Promise

type ApiResponse = Promise<string>;
type Resolved = Awaited<ApiResponse>; // string

```
## 📦 Summary Cheat Sheet
```typescript
Partial<T>     // Makes all properties optional
Required<T>    // Makes all properties required
Readonly<T>    // Makes all properties readonly
Pick<T, K>     // Pick a subset of keys
Omit<T, K>     // Omit a subset of keys
Record<K, T>   // Map keys to a value type
Exclude<T, U>  // Exclude from union
Extract<T, U>  // Extract common members
NonNullable<T> // Remove null and undefined
ReturnType<T>  // Get return type of function
Parameters<T>  // Get parameters of function
Awaited<T>     // Get resolved value of a Promise
```

# any / unknow / never / void / null
```typescript
// 🔹 any
// ✅ Means: Disable type checking
// TypeScript gives up. Anything goes.

let value: any = 5;
value = "hello";  // ✅ No error
value = {};       // ✅ No error
❗ Use sparingly – defeats TypeScript's purpose.

// 🔹 unknown
// ✅ Means: Don't know the type yet (but safer than any)
// You must check the type before using it.

let value: unknown = "hello";
value = 10;

// console.log(value.toFixed()); ❌ Error: Object is of type 'unknown'
if (typeof value === "number") {
  console.log(value.toFixed()); ✅
}
//👍 Use unknown when you don’t know the type yet (e.g., from API).

// 🔹 never
// ✅ Means: Something that never happens
// Functions that throw errors or infinite loops.

// Exhaustive checks in switch/case.

function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
// ✅ Used in advanced types and exhaustive switch statements.

// 🔹 void
// ✅ Means: No return value
// Used in functions that return nothing.

function logMessage(message: string): void {
  console.log(message);
}
// Common in event handlers, logging, etc.

// 🔹 null and undefined
// ✅ Are values and types in TS

let x: null = null;
let y: undefined = undefined;
By default, you must enable strictNullChecks to avoid accidental null/undefined.

// 🧠 Best Practice: Use with | unions

type User = {
  name: string;
  email?: string | null;
};
```

# 📦 What is tsconfig.json? (https://www.typescriptlang.org/tsconfig/)
It tells the TypeScript compiler how to compile your code.

When you run tsc, it looks for this file to know:

- What files to include/ignore

- What JavaScript features to output

- Which type rules to follow

### 🔧 Sample tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES6",                // Output JS version (ES6, ES2020, etc.)
    "module": "ESNext",             // Module system (ESNext, CommonJS, etc.)
    "jsx": "react-jsx",             // For React apps
    "strict": true,                 // Enable all strict type checks
    "esModuleInterop": true,       // Import default exports from non-TS modules
    "skipLibCheck": true,          // Skip type checks in node_modules
    "forceConsistentCasingInFileNames": true, // Avoid casing issues
    "moduleResolution": "node",    // How modules are resolved
    "outDir": "./dist",            // Where compiled JS goes
    "baseUrl": ".",                // For path aliasing
    "paths": {
      "@components/*": ["src/components/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}

```
### 🧪 Try It Yourself
```bash
npx tsc --init
```

# React Typescript ToDo
### instalation
```bash
$ npm create vite@latest
```
# React + TypeScript
## 🧠 1. Component Props & Children
```typescript
type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);
```
### ✅ With children
```typescript
type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => <div>{children}</div>;

```
## 🧱 2. useState with TypeScript
```typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```
## 🧩 3. useRef
```typescript
const inputRef = useRef<HTMLInputElement>(null);
```
## 🎯 4. useEffect
```typescript
useEffect(() => {
  // Side effect
}, []);
```
## ⚙️ 5. Event Handling
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
```
## 🔁 6. Passing State and Setters
```typescript
type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
```
## 📄 7. Custom Types & Interfaces
```typescript
type User = {
  name: string;
  age: number;
};

interface Product {
  id: string;
  price: number;
}
```
## 🎛️ 8. Union & Optional Types
```typescript
type Status = "idle" | "loading" | "error";

type Props = {
  size?: "sm" | "md" | "lg";
};
```
## 🔢 9. Generics in Components
```typescript
type ListProps<T> = {
  items: T[];
  render: (item: T) => JSX.Element;
};

function List<T>({ items, render }: ListProps<T>) {
  return <ul>{items.map(render)}</ul>;
}
```
## 🏗️ 10. Type Utilities
```typescript
Partial<T>, Pick<T, K>, Omit<T, K>, Record<K, T>, ReturnType<T>
```
## 🧩 11. Context API with TypeScript
```typescript
type ThemeContextType = { theme: string; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
```
## 🧰 12. Custom Hooks
```typescript
function useCounter(initial: number = 0): [number, () => void] {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((c) => c + 1);
  return [count, increment];
}
```
