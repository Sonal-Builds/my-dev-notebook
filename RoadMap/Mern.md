# MERN Stack + SpringBoot + System Design + AI

## **HTML Syllabus**

## **1. Introduction to HTML**

- **What HTML is**: Purpose (structure of a webpage), role in web development
- **HTML Document Structure**:
    - `<!DOCTYPE html>`
    - `<html>`, `<head>`, `<title>`, `<body>`
    - How browsers interpret HTML

---

## **2. HTML Elements & Tags**

- HTML syntax basics (`<tagname>content</tagname>`)
- Common elements:
    - **Headings**: `<h1>` to `<h6>`
    - **Paragraphs**: `<p>`
    - **Links**: `<a>`
    - **Images**: `<img>`
    - **Lists**: `<ul>`, `<ol>`, `<li>`
- Attributes:
    - `id`, `class`, `title`
    - How attributes modify elements

---

## **3. Text Formatting**

- Formatting tags:
    - Bold: `<b>` / `<strong>`
    - Italic: `<i>` / `<em>`
    - Underline: `<u>`
    - Strikethrough: `<s>` / `<del>`
- Headings hierarchy (`<h1>` to `<h6>`) and when to use each

---

## **4. Links**

- Creating hyperlinks with `<a>`
- Internal links (same website) vs external links (other websites)
- Anchor attributes: `href`, `target`, `rel`

---

## **5. Images**

- Adding images with `<img>`
- Attributes:
    - `src` (image location)
    - `alt` (alternative text)
    - `width` / `height` (size control)

---

## **6. Tables**

- Structure:
    - `<table>`, `<tr>`, `<th>`, `<td>`
- Table headers vs data cells
- Adding borders and basic styling (inline for now)

---

## **7. Building Web Page Structure**

- **Div and Span**:
    - `<div>`: block container
    - `<span>`: inline container
- **Semantic HTML**:
    - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
    - Why semantic tags improve accessibility & SEO

---

## **8. Forms**

- Creating forms with `<form>`
- Input types: `text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`
- `<textarea>`, `<select>`, `<option>`
- Attributes: `name`, `placeholder`, `required`, `min`, `max`, `pattern`

---

## **9. Lists**

- Unordered list: `<ul>`
- Ordered list: `<ol>`
- Nested lists (lists inside lists)

---

## **10. Advanced HTML Topics**

- HTML5 Multimedia:
    - `<audio>` & `<video>` tags
    - `controls`, `<source>` for multiple formats
- HTML5 APIs (basic intro — geolocation, localStorage)
- Meta tags for SEO and mobile responsiveness

## CSS Syllabus

## **1. Introduction to CSS**

- **What CSS is**: Purpose (styling web pages), difference from HTML
- **Relationship with HTML**: HTML = structure, CSS = presentation
- Real-world analogy (CSS as the “clothes & makeup” for HTML)

---

## **2. CSS Syntax**

- CSS rule structure:
- **Selectors**:
    - Element (`p`)
    - Class (`.classname`)
    - ID (`#idname`)
    - Group selectors (`h1, h2`)
    - Descendant & child selectors
- **Linking CSS to HTML**:
    - Inline CSS (`style` attribute)
    - Internal CSS (`<style>` tag)
    - External CSS (`<link>` tag) — preferred method

---

## **3. CSS Box Model**

- Components:
    - **Content**: actual text/image area
    - **Padding**: space between content & border
    - **Border**: frame around the element
    - **Margin**: space between elements
- How `width` & `height` interact with the box model
- `box-sizing: content-box` vs `border-box`

---

## **4. Styling Elements**

- **Colors & Backgrounds**:
    - Named colors, HEX, RGB, HSL
    - Background color, background images
    - Gradients (linear, radial)
- **Fonts**:
    - `font-family`, `font-size`, `font-weight`, `line-height`
    - Using Google Fonts
- **Text Formatting**:
    - `text-align`, `text-decoration`, `letter-spacing`, `word-spacing`
- **Display & Visibility**:
    - `display`: `block`, `inline`, `inline-block`
    - `visibility: hidden` vs `display: none`

---

## **5. Layout Techniques**

- **Display Types**:
    - Block, inline, inline-block
- **Floats**:
    - `float: left/right`
    - Clearing floats (`clear`)
- **Positioning**:
    - `static` (default)
    - `relative`, `absolute`, `fixed`, `sticky`
    - Z-index control
- **Flexbox**:
    - Main concepts: container vs items
    - Properties: `justify-content`, `align-items`, `flex-wrap`, `gap`
- **Grid Layout**:
    - `display: grid`
    - Rows & columns with `grid-template-rows` / `grid-template-columns`
    - `grid-gap`, `grid-area`

---

## **6. Responsive Design**

- **Media Queries**:
    - Syntax: `@media (max-width: 768px) { ... }`
    - Common breakpoints for mobile, tablet, desktop
- **Viewport & Units**:
    - Relative units (`%`, `em`, `rem`)
    - Viewport units (`vw`, `vh`)
- **Responsive Images**:
    - `max-width: 100%`
    - Using `srcset` for multiple resolutions

## **Javascript Syllabus:**

## **Phase 1: Fundamentals**

### **1. Variables**

- `var`, `let`, `const` — when and why to use each
- Scope types: block, functional, global
- Hoisting behavior

### **2. Data Types**

- Primitive types: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`
- Objects (non-primitive type)
- `typeof` operator

---

## **Phase 2: Operations & Control Flow**

### **1. Type Casting**

- Explicit casting: `Number()`, `String()`, `Boolean()`
- Implicit casting (type coercion)
- Difference between type conversion and coercion

### **2. Operators**

- Assignment: `=`, `+=`, `=`, etc.
- Comparison: `==`, `===`, `!=`, `!==`
- Arithmetic: `+`, , , `/`, `%`
- Logical: `&&`, `||`, `!`
- Conditional (ternary) `?:`
- Bitwise (optional for beginners)

### **3. Equality Comparisons**

- Loose (`==`) vs strict (`===`) equality
- `Object.is()` for special cases

### **4. Control Flow**

- `if...else`
- `switch` statement

---

## **Phase 3: Advanced Fundamentals**

### **1. Loops**

- `for` loop
- `for...in` (objects)
- `for...of` (iterables)
- `while` and `do...while` loops
- `break` and `continue`

### **2. Functions**

- Function declaration vs expression
- Arrow functions
- Parameters and default values
- Return values

---

## **Phase 4: Data Structures**

### **1. Arrays**

- Creation methods
- Common methods: `push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`
- `Map`, `Set`, `WeakMap`, `WeakSet` basics
- JSON basics (parse & stringify)

### **2. Error Handling**

- `try...catch...finally`
- Throwing custom errors
- Error objects

---

## **Phase 5: Objects & ES6 Features**

### **1. Objects**

- Object literal creation
- Properties and methods
- `this` keyword in different contexts

### **2. Modern JS Features**

- Destructuring assignment (objects & arrays)
- Template literals & string interpolation
- Default parameters
- Rest and spread syntax (`...`)
- Advanced `Map` & `Set` usage

---

## **Phase 6: Asynchronous JavaScript**

- Callbacks
- Promises (creating, chaining, error handling)
- `async/await`
- Callback hell and how to avoid it

---

## **Phase 7: DOM Manipulation & Events**

### **1. DOM Basics**

- Selecting elements: `getElementById`, `querySelector`
- Modifying content: `innerHTML`, `textContent`
- Modifying styles: `.style`

### **2. Events**

- Adding events: `addEventListener`
- Common events: `click`, `submit`, `change`, etc.
- Event propagation (bubbling & capturing)

### **3. Working with APIs**

- Fetch API (GET/POST requests)
- Handling JSON responses

### **4. Browser Storage**

- `localStorage` vs `sessionStorage`

### **5. Modules**

- CommonJS vs ES Modules (`import` / `export`)

## **Advanced JavaScript Concepts**

- **Closures**
    - How functions “remember” variables from their scope
    - Practical use cases (e.g., private variables)
- **Higher-Order Functions**
    - Functions that take/return other functions (`map`, `filter`, `reduce`)
- **IIFE (Immediately Invoked Function Expressions)**
    - How and why to use them
- **Event Loop & Concurrency**
    - Call stack, task queue, microtasks, `setTimeout` behavior
- **Debouncing & Throttling**
    - Performance optimization for events (scroll, resize, input)

## **Git and Github**

- **Basics of Version Control Systems (VCS)**
- **Setting Up Git**
- **Basic Git Commands**
- **Understanding the Git Workflow**
- **Working with GitHub**
- **Cloning and Pulling Repositories**
- **Branching and Merging**
- **Handling Merge Conflicts**
- **Working with .gitignore**
- **Undoing Changes**
- **Collaborating on GitHub (Fork, Pull Requests, Issues**
- **Advanced Git Concepts(Stashing, rebasing etc)**

## TypeScript

### **1. TypeScript Basics (Differences from JS)**

- What TypeScript actually is (superset of JS, compiles to JS).
- How the TypeScript compiler (`tsc`) works.
- Type annotations for:
    - **Primitives**: `string`, `number`, `boolean`, `null`, `undefined`
    - **Special types**: `any`, `unknown`, `never`, `void`

### **2. Working with Objects & Arrays**

- Object type annotations (`{ name: string; age: number }`)
- Optional and readonly properties
- Array types (`string[]` or `Array<string>`)
- Tuples (`[string, number]`)

### **3. Functions**

- Parameter and return types
- Optional parameters
- Default parameters
- Function type aliases

### **4. Advanced Types**

- Union types (`string | number`)
- Intersection types (`A & B`)
- Literal types (`'success' | 'error'`)
- Type narrowing (type guards with `typeof`, `instanceof`, and custom guards)

### **5. Type Aliases & Interfaces**

- `type` vs `interface`
- Extending interfaces
- Merging interfaces

### **6. Classes with TypeScript**

- Access modifiers (`public`, `private`, `protected`)
- `readonly` properties
- Implementing interfaces in classes
- Abstract classes

### **7. Generics**

- Generic functions
- Generic interfaces
- Constraints on generics (`<T extends object>`)

### **8. Utility Types (Built-in)**

- `Partial`, `Required`, `Readonly`
- `Pick`, `Omit`, `Record`
- `ReturnType`, `Parameters`

### **9. Modules & Namespaces**

- Import/export with TypeScript
- Configuring paths in `tsconfig.json`

## **React Syllabus**

## **Phase 1: React Fundamentals**

### **1. Introduction to React**

- What is React & why use it
- SPA (Single Page Applications) vs traditional websites
- React DOM vs regular DOM

### **2. Setting up a React Project**

- Using CDN link to setup project from scratch
- Using **Vite or Parcel** for faster setup
- Folder structure best practices

### **3. JSX (JavaScript XML)**

- JSX syntax rules
- Embedding expressions
- JSX vs HTML differences

### **4. Components**

- Functional components (preferred modern approach)
- Props (passing data to components)
- Default props & prop types
- Component reusability

---

## **Phase 2: State & Events**

### **1. State Management (useState)**

- Declaring and updating state
- State immutability rules

### **2. Handling Events**

- Event binding in React
- Passing arguments to event handlers

### **3. Conditional Rendering**

- Using `if` statements in JSX
- Ternary operator & logical `&&`

### **4. Lists & Keys**

- Rendering lists with `.map()`
- Importance of `key` prop

---

## **Phase 3: Hooks Basics**

- **useState** (managing local component state)
- **useEffect** (side effects, fetching data, subscriptions)
- **useRef** (accessing DOM elements, persisting values)

---

## **Phase 4: Styling in React**

- CSS in React (external, inline, CSS modules)
- Styled-components (CSS-in-JS)
- Tailwind CSS basics

---

## **Phase 5: Forms & User Input**

- Controlled vs uncontrolled components
- Handling form inputs and validation

---

## **Phase 6: Intermediate Hooks & State Management**

- **useReducer** (complex state logic)
- **useContext** (prop drilling solution)
- Combining `useReducer` + `useContext`

---

## **Phase 7: React Router**

- Setting up **React Router v7+**
- `BrowserRouter`, `Routes`, `Route`
- Dynamic routes (`/user/:id`)
- Navigation with `Link` and `useNavigate`

---

## **Phase 8: Data Fetching**

- Fetch API with `useEffect`
- Axios in React
- Loading & error states
- Async/await with data fetching

---

## **Phase 9: Advanced React Concepts**

- Custom hooks (reusable logic)
- Memoization: **React.memo**, **useCallback**, **useMemo**
- Performance optimization
- Lazy loading & code splitting (`React.lazy`, `Suspense`)

---

## **Phase 10: Working with APIs**

- REST API integration
- Error handling patterns

---

## **Phase 11: State Management Libraries**

- Redux Toolkit (modern Redux)

## **Phase 12: Deployment**

- Building for production
- Deploying to **Netlify**, **Vercel**

# Backend NodeJS

### **1. Fundamentals of Backend Development**

- Understanding how the backend works
- Client-Server architecture
- HTTP protocol (methods, status codes, headers)
- REST API basics
- Introduction to APIs (REST)

### **2. Node.js Basics**

- What is Node.js and its event-driven architecture
- Installing Node.js & npm
- Using the REPL
- Modules (built-in: fs, path, http, events, os)
- Creating a simple HTTP server
- Package management with npm/yarn
- Understanding `package.json` and `package-lock.json`
- Environment variables with `dotenv`

### **3. Express.js Basics**

- Introduction to Express.js
- Setting up an Express server
- Routing (GET, POST, PUT, DELETE)
- Middleware (built-in & custom)
- Serving static files
- Handling JSON & form data
- Error handling
- Modularizing routes and controllers

### **4. Working with Databases (MongoDB & Mongoose)**

- Introduction to MongoDB
- CRUD operations in MongoDB
- Installing & connecting MongoDB with Node.js
- Introduction to Mongoose
- Defining Schemas & Models
- Data validation
- Querying data with Mongoose
- Pagination, sorting, and filtering

### **5. Authentication & Authorization**

- Introduction to authentication
- JWT (JSON Web Tokens)
- Session & cookie-based authentication
- Password hashing with bcrypt
- Role-based access control
- OAuth (Google, GitHub login)

### **6. Advanced Express.js**

- Request validation with Joi/Yup
- File upload handling (Multer)
- API versioning
- Rate limiting & security with Helmet & CORS

### **7. WebSocket, Socket.IO, and Real-time Communication**

- Introduction to WebSocket
- Setting up WebSocket server in Node.js
- Introduction to Socket.IO
- Real-time chat application
- Broadcasting messages
- Socket.IO namespaces & rooms
- WebRTC basics
- Peer-to-peer video/audio communication
- Integrating WebRTC with Socket.IO signaling

### **8. File & Media Handling**

- Handling file uploads with Multer
- Uploading images/videos to Cloudinary
- Cloudinary transformations & optimizations
- Serving uploaded files securely

### **9. Performance Optimization & Caching**

- Introduction to Redis
- Setting up Redis with Node.js
- Caching database queries
- Implementing rate limiting with Redis
- Pub/Sub pattern in Redis

### **10. Security in Backend**

- Environment variable management
- HTTPS & SSL
- Data validation & sanitization
- Preventing SQL/NoSQL injection
- Preventing XSS & CSRF attacks
- API key management

### **11. Testing & Debugging**

- Debugging with VS Code
- Postman for API testing

### **12. Deployment**

- Preparing a production build
- Environment configuration for production
- Deploying on:
    - Render / Railway / Vercel / Heroku
    - AWS EC2 / DigitalOcean
- Connecting to managed MongoDB (MongoDB Atlas)
- Using PM2 for process management

---

# **Java & SpringBoot Syllabus :**

### **Phase 1: Core Java Foundation**

### **1. Java Basics Refresher**

- JVM, JDK, JRE — how Java runs
- Data types, variables, operators
- Control statements (if, switch, loops)
- Arrays & Strings
- Methods & overloading

### **2. Object-Oriented Programming (OOP)**

- Classes & Objects
- Constructors & this keyword
- Inheritance, Composition, Association
- Method Overriding & Polymorphism
- super keyword
- Abstract classes & Interfaces
- Encapsulation & Access Modifiers

### **3. Core Java Advanced**

- Exception Handling (Checked, Unchecked, Custom)
- Collections Framework
- Generics
- Java I/O & NIO
- Multithreading & Concurrency basics
- Lambda expressions & Streams API
- Functional Interfaces
- Java 8–17 Features (var, records, switch expressions, pattern matching etc.)

### **Phase 2: Web Fundamentals**

- Introduction to the Web
- URLs & Resources
- Client-Server Interaction
- REST & APIs

### **Phase 3: Spring & Spring Boot Fundamentals**

### **1. Spring Core Concepts**

- Dependency Injection (DI) & Inversion of Control (IoC)
- Spring Beans & Scopes
- Bean lifecycle & @PostConstruct / @PreDestroy
- All annotations in Springboot @Controller @Component, @Service, @Repository
- @Autowired & Qualifiers
- Spring Configuration (Java-based, XML-based, Annotation-based)
- SpringBoot Interceptors

### **2. Spring Boot Basics**

- What is Spring Boot? Why it’s used?
- application.properties & application.yml
- Auto-configuration & Starter dependencies
- Spring Boot project structure
- Running a Spring Boot application
- Profiles in Spring Boot (dev, test, prod)

### **3. Building REST APIs**

- @RestController vs @Controller
- Request mapping annotations (@GetMapping, @PostMapping, etc.)
- Path variables & query parameters
- Request & Response objects (@RequestBody, @ResponseBody)
- JSON serialization/deserialization (Jackson)
- Connecting with Other Micro-services (Feign Clients)

---

### Phase 4 : SQL Master Class

- What is a relational database? Tables, rows, columns, constraints
- Queries in SQL (DML, DQL, DDL)
- Primary vs foreign keys, candidate keys
- Normalization in SQL : 1NF, 2NF, 3NF, BCNF
- Table Joins in SQL
- Indexing and Scaling SQL servers
- Transactions and Concurrency in SQL

### **Phase 5: Advanced Spring Boot + Ecosystem**

### **1. Spring Data JPA & Databases**

- Introduction to ORM & Hibernate
- JPA annotations (@Entity, @Id, @GeneratedValue)
- Repository pattern & Spring Data Repositories
- Derived query methods
- JPQL & Native queries
- Pagination & Sorting

### **2. Spring Boot with MySQL/PostgreSQL**

- Connecting to relational databases
- Transactions (@Transactional)
- Database migrations with Flyway/Liquibase

### **3. Validation & Error Handling**

- Bean validation with @Valid & @NotNull
- Global exception handling (@ControllerAdvice)
- Custom error responses

### **4. Spring Security**

- Basics of authentication & authorization
- In-memory authentication
- Role-based access control
- JWT authentication & stateless APIs

### **5. Spring Boot Integrations**

- Sending Emails
- Scheduling tasks (@Scheduled)
- File uploads & downloads
- REST API consumption with RestTemplate & WebClient

### 6. Deployment

- **Packaging Your Spring Boot Application**
- Maven / Gradle build:
    - `mvn clean package` → produces a **fat JAR** (`.jar` with all dependencies)
    - `java -jar target/app.jar` to run locally
- Configuring `application.properties` for **prod** profile
- Externalizing secrets (env vars, `.env` files, AWS SSM, etc.)
- Deployment on Render / Railway / Heroku
- CI/CD for Spring Boot
- Deploying SQL DB independently : Neon / Supabase