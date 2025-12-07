
## Math Algorithms
1. [Fibonacci Sequence](#fibonacci-sequence)
2. [Factorial of a Number](#factorial-of-a-number)


### 1. Fibonacci Sequence

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

```

### 1. Factorial of a Number

```javascript
function factorial(n) {
    let res =1;
    for(let i =2; i<=n;i++) {
        res *= i
    }
    return res;
}

console.log(factorial(3))

```