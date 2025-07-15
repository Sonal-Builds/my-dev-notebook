# **Promise in JavaScript**

- In JavaScript, a promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It allows you to handle asynchronous tasks in a more structured and manageable way, similar to callbacks but with better error handling and chaining capabilities.
    
    A **`Promise`** can be in one of three states:
    
    1. **Pending**: Initial state, neither fulfilled nor rejected.
    2. **Fulfilled**: The operation completed successfully.
    3. **Rejected**: The operation failed.
    
    ```jsx
    // Example of creating a Promise
    const myPromise = new Promise((resolve, reject) => {
      // Asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
          resolve(randomNumber); // Resolve the Promise with a value
        } else {
          reject(new Error('Number is less than 0.5')); // Reject the Promise with an error
        }
      }, 1000);
    });
    
    // Example of using a Promise
    myPromise
      .then((result) => {
        console.log('Promise fulfilled with result:', result);
      })
      .catch((error) => {
        console.error('Promise rejected with error:', error);
      });
    
    ```
    

# Promise Chaining in JavaScript

- Promise chaining in JavaScript allows you to execute multiple asynchronous operations sequentially, where each operation depends on the result of the previous one. It provides a clean and concise way to manage complex asynchronous flows.
    
    ```jsx
    // First asynchronous operation (returns a Promise)
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Data fetched');
        }, 1000);
      });
    };
    
    // Second asynchronous operation that depends on the result of the first one
    const processData = (data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data.toUpperCase());
        }, 1000);
      });
    };
    
    // Third asynchronous operation that depends on the result of the second one
    const displayData = (processedData) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(processedData);
          resolve('Data displayed');
        }, 1000);
      });
    };
    
    // Chain promises together
    fetchData()
      .then(processData)
      .then(displayData)
      .then((result) => {
        console.log(result); // Output: Data displayed
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
    
    ```
    

# Catch in promise in JavaScript.

- In JavaScript promises, the **`catch`** method is used to handle errors that occur during the execution of a promise chain. It allows you to gracefully handle and recover from errors in asynchronous operations.
    
    ```jsx
    // Example of a promise that resolves after a timeout
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
          resolve(randomNumber);
        } else {
          reject(new Error('Number is less than 0.5'));
        }
      }, 1000);
    });
    
    // Using then and catch to handle success and failure
    myPromise
      .then((result) => {
        console.log('Promise fulfilled with result:', result);
      })
      .catch((error) => {
        console.error('Promise rejected with error:', error);
      });
    
    ```
    

# Util functions in Promise

- promise.resolve()
    
    In JavaScript, **`Promise.resolve()`** is a static method of the **`Promise`** object that creates and returns a new Promise object that is resolved with the given value. It allows you to easily create a promise that is already resolved with a specific value, which is useful when you want to interact with asynchronous code using the promise-based API, even if the operation is synchronous.
    
    ```jsx
    // Example 1: Creating a resolved promise with a value
    const resolvedPromise = Promise.resolve('Resolved value');
    resolvedPromise.then((value) => {
    console.log(value); // Output: Resolved value
    });
    ```
    
    ```jsx
    // Example 2: Creating a resolved promise with a synchronous operation
    const result = 42;
    const resolvedPromise2 = Promise.resolve(result);
    resolvedPromise2.then((value) => {
    console.log(value); // Output: 42
    });
    ```
    
- promise.reject()
    
    In JavaScript, **`Promise.reject()`** is a static method of the **`Promise`** object that creates and returns a new Promise object that is rejected with the given reason (usually an error). It allows you to easily create a promise that is already rejected with a specific reason, which is useful when you want to interact with asynchronous code using the promise-based API, even if the operation encounters an error.
    
- promise.all()
    
    In JavaScript, **`Promise.all()`** is a static method of the **`Promise`** object that takes an iterable (e.g., an array) of promises as input and returns a single Promise object that resolves when all of the input promises have resolved, or rejects if any of the input promises are rejected.
    
    ```jsx
    // Example: Using Promise.all() with an array of promises
    const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
    const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000));
    ```
    
    ```jsx
    Promise.all([promise1, promise2, promise3])
    .then((values) => {
    console.log('All promises resolved:', values);
    })
    .catch((error) => {
    console.error('One or more promises rejected:', error);
    });
    ```
    
- promise.race()
    
    n JavaScript, **`Promise.race()`** is a static method of the **`Promise`** object that takes an iterable (e.g., an array) of promises as input and returns a single Promise object that resolves or rejects as soon as one of the input promises resolves or rejects. The race is won by the first promise to settle.