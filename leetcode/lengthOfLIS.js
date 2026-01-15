// 300. Longest Increasing Subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(!nums || nums.length === 0) return 0

    const n = nums.length
    const dp = new Array(n).fill(1)

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
};

var lengthOfLIS = function(nums) {
    const result = [];

    for (const num of nums) {
        let left = 0;
        let right = result.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (result[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        result[left] = num;
    }

    return result.length;
};