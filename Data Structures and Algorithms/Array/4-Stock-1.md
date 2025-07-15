## Brute Force Approach
Intuition:
The outer loop will track the day we are buying the stock and the inner loop will track the day we are selling the stock.

Compute the profit for each pair and keep track of the maximum profit.

```javascript
var maxProfit = function(prices) {
    let maxProfit = 0;
    // Iterate over each day, considering it as the buying day
    for (let i = 0; i < prices.length; i++) {
        // Iterate over the later days, considering them as the selling day
        for (let j = i + 1; j < prices.length; j++) {
            // Calculate profit for each buy-sell pair
            let profit = prices[j] - prices[i];
            // Keep track of the maximum profit
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};
```
Time Complexity: O(n^2) - We have to check every pair of days.

Space Complexity: O(1) - We only use a constant amount of space.

##Optimized One Pass Approach
This solution attempts to go through the price list just once while keeping track of the minimum buying price encountered so far and computing the profit if we were to sell the stock at the current day price. This method exploits the fact that selling must occur after buying.

Intuition:
Start by setting minPrice to a very large number which will be updated as we encounter lower prices.

Traverse through each price and at each step update the minPrice if the current price is lower.

Calculate a potential profit at each step by subtracting minPrice from the current price and compare it to maxProfit.

Keep track of the highest profit encountered.
```javascript
var maxProfit = function(prices) {
    let buyingPrice = prices[0];
    let profit = 0;
    // let maxProfit = profit;

    for(let i=1; i< prices.length; i++){
        if(prices[i] < buyingPrice) {
            buyingPrice = prices[i];
            // profit = 0;
        }
        else if(prices[i] - buyingPrice > profit){
            profit = prices[i] - buyingPrice;
            // if(profit > maxProfit) {
            //     maxProfit = profit;
            // }
        }
    }
    return profit;
};
```
Time Complexity: O(n) - We traverse the list only once.

Space Complexity: O(1) - No extra space is used beyond a few variables.