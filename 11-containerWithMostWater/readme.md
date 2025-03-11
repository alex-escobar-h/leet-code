# 11. Container With Most Water

[LeetCode Problem](https://leetcode.com/problems/container-with-most-water/)

## Question

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

## Solution Explanation:

### **Two-pointer Technique**:

The function initializes two pointers, `start` at the beginning and `end` at end of the `height` array.

### **Calculate Area**:

In each iteration, it calculates the area formed between the lines at the `start` and `end` pointers, using the shorter of the two height multiplied by the distance between the pointers (`end - start`).

### **Move Pointers**:

The pointer corresponding to the shorter line is moved inward to potentially find a taller line, maximizing the area.

### **Update Maximum Area**:

The maximum area found during the iterations is stored in `maxArea`, which is returned at the end.

## Time Complexity: O(n)

The function performs a single pass through the array with two pointers, each moving towards the center. It runs in linear time relative to the size of the input array

## Space Complexity: O(1)

The function uses a constant amount of extra space for variables (`maxArea`, `start`, `end`, `area`), making it space-efficient.
