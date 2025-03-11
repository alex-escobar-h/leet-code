# 121 - Best Time to Buy and Sell Stock

[LeetCode Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

## Question

You are given an array prices where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

The `maxProfit` function calculates the maximum profit by iterating through the prices array. It tracks the lowest price (`minPrice`) and computes the profit for each day by subtracting `minPrice` from the current price. If the calculated profit is higher than the current `maxProfit`, it updates `maxProfit`. Finally, it returns the highest profit.

## Solution Explanation

The `maxProfit` function calculates the max profit by iterating through the `prices` array.

## Time Complexity: O(n)

The function loops throught the `prices` array once.

## Space Complexity: O(1)

Only two variables used, both with constant space used.
