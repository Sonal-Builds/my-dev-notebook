# Problems
1. [Find the Largest element in an array](#find-the-largest-element-in-an-array)
2. [Find Second Smallest and Second Largest Element in an array](#find-second-smallest-and-second-largest-element-in-an-array)
3. [Check if an Array is Sorted](#check-if-an-array-is-sorted)





## Find the Largest element in an array

### Brute Force Approach
Complexity Analysis:
- Time Complexity: O(N*log(N))
- Space Complexity: O(n)
```javascript
function sortArr(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];

console.log("The Largest element in the array is: " + sortArr(arr1));
console.log("The Largest element in the array is: " + sortArr(arr2));
```
## Recursive Approach
Complexity Analysis:
- Time Complexity - O(n)
- Space Complicity - O(1)
```javascript
function Largest2(arr) {
    let max = arr[0]
    for(i=1;i<arr.length;i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

console.log(Largest2([5,2,7,6,10,5,4,3,2]))
```

## Find Second Smallest and Second Largest Element in an array

### Solution 1: (Brute Force) [this approach only works if there are no duplicates]
Complexity Analysis:
- Time Complexity: O(NlogN), For sorting the array
- Space Complexity: O(1)
```javascript
function getElements(arr) {
  if (arr.length === 0 || arr.length === 1) {
    console.log(-1 + " " + -1); // Edge case when only one element is present in the array
    return;
  }

  arr.sort((a, b) => a - b);
  let small = arr[1];
  let large = arr[arr.length - 2];
  console.log("Second smallest is " + small);
  console.log("Second largest is " + large);
}

const arr = [1, 2, 4, 6, 7, 5];
getElements(arr);
```
### Optimal Approach
Complexity Analysis:
- Time Complexity - O(n)
- Space Complicity - O(1)
```javascript
function SecondLarge(arr) {
    large = -Infinity;
    second_large= -Infinity

    for(let num of arr) {
        if(num > large) {
            second_large = large;
            large = num;
        } else if(num > second_large && num !== large) {
            second_large = num
        }
    }

    return second_large
}

console.log(SecondLarge([4,6,2,8,5,9,1,3,4,5]))
console.log(SecondLarge([1,2,3,2,4,3]))

function secondSmallest(arr) {
let small = Infinity;
let second_small = Infinity;
for(let num of arr) {
    if(num < small) {
        second_small = small;
        small = num;
    } else if(num < second_small && num !== small) {
        second_small = num;
    }
}
return second_small
}

console.log(secondSmallest([5,2,6,7,4,10,1,0]))
```
## Check if an Array is Sorted

### Brute Force Approach
Complexity Analysis:
- Time Complexity: O(N^2)
- Space Complexity: O(1)
```javascript
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i])
        return false;
    }
  }

  return true;
}

const arr = [1, 2, 3, 4, 5];
const ans = isSorted(arr);
if (ans) console.log("True");
else console.log("False");
```
### Optimal Approach
- Time Complexity: O(N)
- Space Complexity: O(1)
```javascript
function SortedArray(arr) {
    for(let i=1;i<arr.length;i++) {
        if(arr[i] < arr[i-1]) {
            return false
        }
    }
    return true
}

console.log(SortedArray([1,2,3,4,5,6]))
console.log(SortedArray([6,4,2,5,2,4,5]))
```

## Left Rotate the Array by One
### Optimal Approach
- Time Complexity: O(N)
- Space Complexity: O(1)
```javascript
function LeftRotate(arr,k) {
     if(k === 0) return arr
     let first = arr[0]

     for(i=0; i<arr.length - 1;i++) {
         arr[i] = arr[i+1]
     }
      arr[arr.length - 1] = first
    return LeftRotate(arr,k-1)
 }

 console.log(LeftRotate([1,2,3,4,5],2))
```