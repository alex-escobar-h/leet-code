# 35. Search Insert Position

[LeetCode Problem](https://leetcode.com/problems/search-insert-position/description/)

## Question

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

## Solution Explanation

### Binary Search Approach:

Because the array is sorted and the time complexity needs to be `O(log n)`, a binary search is a good option for this solution. The binary search finds the target value or the insert position in a sorted array.

### Two Pointers:

Maintains a `right` and `left` pointer to represent the current search range within the array.

### Calculate Midpoint:

In each iteration, `mid` is calculated to check wheter the target is at, below, or above this midpoint

- `nums[mid] === target`: Function returns `mid` as the target is found
- `nums[mid] < target`: Search range is adjusted to the left half by setting `left = mid + 1`
- `nums[mid] >= target`: Search range is adjusted to the left half by setting `right = mid - 1`
- `target not found`: Returns `left` as it represnts the correct insertion index for the target

## Time Complexity: O(log n)

The binary search algorithm operates by dividing the search range in half each iteration. As a result, the time complexity is logarithmic in relation to the length of the input array `nums`

## Space Complexity: O(1)

The function uses a constant amount of additional space, regardless of input size. It only requires `left`, `right`, and `mid` to keep track of the state during the search process.
