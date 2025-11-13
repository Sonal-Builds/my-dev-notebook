- In JavaScript, there are mainly three types of callbacks:
    
    In JavaScript, a callback is a function that is passed as an argument to another function and is invoked or executed inside that function at a later point in time. Callbacks are a way to achieve asynchronous behavior in JavaScript, allowing functions to be executed after certain actions or events occur.
    
    1. **Synchronous Callbacks**:
    Synchronous callbacks are executed immediately after a synchronous function call finishes. In other words, they are executed in the same stack as the function that calls them. Synchronous callbacks are commonly used in scenarios like array methods (**`forEach`**, **`map`**, **`filter`**, etc.), where the callback is invoked synchronously for each element of the array.
        
        ```jsx
        const numbers = [1, 2, 3];
        numbers.forEach(function(number) {
          console.log(number * 2);
        });
        ```
        
    2. **Asynchronous Callbacks**:
    Asynchronous callbacks are executed after an asynchronous operation completes. This could be after a timer expires, an AJAX request completes, or an event occurs. Asynchronous callbacks are commonly used in scenarios like handling responses from asynchronous operations such as AJAX requests or setTimeout functions.
        
        ```jsx
        setTimeout(function() {
          console.log("This is an asynchronous callback.");
        }, 2000);
        ```
        
    3. **Error-First Callbacks**:
    Error-first callbacks are a convention in Node.js where callbacks take the form of **`(err, result) => {...}`**. The first parameter (**`err`**) is reserved for any error that occurred during the operation, and the second parameter (**`result`**) contains the result of the operation. Error-first callbacks are commonly used in Node.js for handling asynchronous operations, such as file I/O or database queries.
        
        ```jsx
        fs.readFile('example.txt', 'utf8', function(err, data) {
          if (err) {
            console.error("Error reading file:", err);
            return;
          }
          console.log("File content:", data);
        });
        ```
        
    
    These are the main types of callbacks in JavaScript, each serving a different purpose depending on the nature of the operation being performed.

   ## ⚠️ Why Use Async Callbacks?
Non-blocking UI (especially in browsers)

Handle tasks like:

Network requests

Timers

File operations

Used heavily in Node.js & front-end apps

✅ What Is an Asynchronous Callback?
An asynchronous callback is a function that is passed as an argument to another function, and is executed after an asynchronous operation is completed (like a timer, API call, or file read).

Think: “I’ll call you back when I’m done!”

🚨 Issues with Asynchronous Callbacks in JavaScript
Asynchronous callbacks were the first way JavaScript handled async behavior (like file reads, API calls, timers). But they come with serious issues, especially as your app grows.
🧨 1. Callback Hell (Pyramid of Doom)
When callbacks are nested inside each other, the code becomes unreadable and hard to manage:

```jsx
getData(function(a) {
  parse(a, function(b) {
    validate(b, function(c) {
      save(c, function(d) {
        console.log(d);
      });
    });
  });
});
```
👎 Problems:
Hard to read

Hard to debug

Hard to handle errors

Hard to reuse logic

✅ The Modern Solution: Promises & Async/Await
```jsx
async function process() {
  try {
    const data = await getData();
    const parsed = await parse(data);
    const validated = await validate(parsed);
    await save(validated);
    console.log("Done!");
  } catch (err) {
    console.error("Something went wrong", err);
  }
}
```
