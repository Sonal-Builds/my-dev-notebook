## Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) is a programming paradigm centered around objects — data structures that bundle state (properties) and behavior (methods).

JavaScript supports OOP through:

Prototypes (ES5 and before)
Classes (ES6 and beyond)

| Concept           | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| **Class**         | A blueprint for creating objects                               |
| **Object**        | An instance of a class                                         |
| **Constructor**   | A method for initializing new objects                          |
| **Encapsulation** | Hiding implementation details using closures or private fields |
| **Inheritance**   | One class inherits properties/methods from another             |
| **Polymorphism**  | Same method name behaves differently based on object context   |
| **Abstraction**   | Hiding complexity by exposing only necessary parts             |

## 🏗️ What is a Class in JavaScript?
A class is a template for creating objects with shared structure (properties) and behavior (methods).
JavaScript introduced classes in ES6 (2015), as syntactic sugar over its existing prototype-based inheritance.

🔹 Basic Syntax
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
  }
}

const john = new Person("John", 30);
john.greet(); // Hi, I'm John and I'm 30
```

## 🚀 What are Static Methods?
Static methods are methods defined on the class itself, not on instances of the class.
They are typically used for utility functions that don't rely on instance data.
```javascript
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(3, 4)); // 7
```
You can’t call a static method on an instance:
```javascript
const util = new MathUtil();
util.add(3, 4); // ❌ TypeError: util.add is not a function
```
```javascript

class User {
  static validRoles = ["admin", "editor", "viewer"];

  constructor(name, role) {
    if (!User.isValidRole(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    this.name = name;
    this.role = role;
  }

  // 🔹 Instance method
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm a ${this.role}`);
  }

  // 🔹 Static method
  static isValidRole(role) {
    return User.validRoles.includes(role);
  }
}

// 🔸 Usage
const john = new User("John", "admin"); // ✅ valid
john.introduce(); // Hi, I'm John and I'm a admin

// const jane = new User("Jane", "hacker"); // ❌ Throws Error

console.log(User.isValidRole("editor")); // true
console.log(User.isValidRole("ghost"));  // false
```

## 🧠 What are Getters and Setters?
Getter → A method that gets the value of a property.

Setter → A method that sets the value of a property (with optional validation or transformation).

🎯 They allow controlled access to private or internal properties.

🔹 Syntax
```javascript
class Person {
  constructor(name) {
    this._name = name; // convention: _ means "private"
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    if (newName.length < 2) {
      console.log("Name is too short");
      return;
    }
    this._name = newName;
  }
}

const p = new Person("John");

console.log(p.name);     // ✅ calls getter: "John"

p.name = "Al";           // ✅ calls setter: sets _name
console.log(p.name);     // "Al"

p.name = "A";            // ❌ triggers validation: "Name is too short"
```

| Feature    | Getter                  | Setter                        |
| ---------- | ----------------------- | ----------------------------- |
| Purpose    | Read property           | Write/update property         |
| Syntax     | `get propName() {}`     | `set propName(value) {}`      |
| Usage      | Access like a property  | Assign like a property        |
| Common Use | Hide internal structure | Add validation/transformation |

🧪 Real-World Example: Celsius ↔ Fahrenheit
```javascript
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(f) {
    this._celsius = ((f - 32) * 5) / 9;
  }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77°F

temp.fahrenheit = 86;
console.log(temp); // _celsius updated to ~30°C
```
🔍 Why Use Getters/Setters?
Encapsulation: Hide internal logic

Validation: Prevent invalid assignments

Computed Properties: Dynamically return values

Immutable Properties: Block or control writes

⚠️ Interview Tip
Q: Why not just make _name public?

Because direct access gives users full control — they could break app logic by setting invalid data or accessing internals they shouldn’t.


