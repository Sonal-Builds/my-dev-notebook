# Problems
1. [Find the Largest element in an array](#Find the Largest element in an array)




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
```javascript
//Time Complexity - O(n)
//Space Complicity - O(1)
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
