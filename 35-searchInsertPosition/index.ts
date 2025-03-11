const searchInsert = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

// Test cases
const numbers: number[] = [1, 3, 5, 6];
const targets: number[] = [5, 2, 7];

targets.forEach((target) => {
  console.log(searchInsert(numbers, target));
});
