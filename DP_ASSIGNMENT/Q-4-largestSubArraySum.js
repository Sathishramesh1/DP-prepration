// <!-- Question 4
// Problem Description:
// Given an integer array `nums`, find the subarray with the largest sum, and return its sum.
// Input Description:
// An integer array `nums`.
// Output Description:
// The sum of the subarray with the largest sum.
// Examples:
// **Example 1:**
// - Input: `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]`
// - Output: `6`
// - Explanation: The subarray `[4, -1, 2, 1]` has the largest sum `6`.
// **Example 2:**
// - Input: `nums = [1]`
// - Output: `1`
// - Explanation: The subarray `[1]` has the largest sum `1`.
// **Example 3:**
// - Input: `nums = [5, 4, -1, 7, 8]`
// - Output: `23`
// - Explanation: The subarray `[5, 4, -1, 7, 8]` has the largest sum `23`.
// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4 -->

//solution using

var maxSubArray = function (nums) {
  let sum = 0;
  let maxsum = nums[0];
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    sum += nums[i];
    if (sum > maxsum) {
      maxsum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxsum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
