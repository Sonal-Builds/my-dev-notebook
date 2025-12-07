
## Math Algorithms
1. [Fibonacci Sequence](#fibonacci-sequence)
2. [Factorial of a Number](#factorial-of-a-number)
3. [Prime Number](#prime-number)


### Fibonacci Sequence

```javascript
function Fibonacci(n) {
    let fib = [0,1]
    if(n < 2) return fib[n];

    for(let i = 2; i<n; i++ ) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(Fibonacci(7))
// Big-O = O(n)

```

### Factorial of a Number

```javascript
function factorial(n) {
    let res =1;
    for(let i =2; i<=n;i++) {
        res *= i
    }
    return res;
}

console.log(factorial(3))
// Big-O = O(n)

```

### <span style="color: blue;">Prime Number</span>
- A prime number is a natural number greater than 1 that has no divisors other than 1 and itself.

```javascript
function isPrime(n) {
    if(n < 2) return false;

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false
// Big-O = O(n)

```
#### <span style="color: gray;">Optimised Solution</span>
```javascript
function isPrime(n) {
    if(n < 2) return false;

    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false
// Big-O = O(sqrt(n))

```