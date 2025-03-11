const maxArea = (height: number[]): number => {
  // Initialize the max area to 0
  let maxArea: number = 0;
  // Set two pointers for the beginning and start of the array
  let start: number = 0;
  let end: number = height.length - 1;

  // EDGE CASE: there's two lines and they're the same height. Return the height as the max area
  if (height.length === 2 && height[start] === height[end]) {
    return height[start];
  }

  while (start < end) {
    // Calculate the area with the shorter line as the limiting height
    if (height[start] < height[end]) {
      let area = height[start] * (end - start);
      maxArea = maxArea > area ? maxArea : area;
      start++;
    } else {
      // If the height at the end pointer is less or equal, calculate the area
      let area = height[end] * (end - start);
      maxArea = maxArea > area ? maxArea : area;
      end--;
    }
  }
  return maxArea;
};

// Test cases:
const heights = [
  [1, 8, 6, 2, 5, 4, 8, 3, 7],
  [1, 1],
];

heights.forEach((h) => {
  console.log(maxArea(h));
});
