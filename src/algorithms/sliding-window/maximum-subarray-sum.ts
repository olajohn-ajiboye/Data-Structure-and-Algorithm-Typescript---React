export function maxSubArrayLength(nums: number[], size: number): number | null {
    /**
     * - intially loop through array until size k 
     * - compute running sum at each iteration / compare with mx
     * - Always update the max
     * -At each iteration
     *    - add current num to shoft the window
     *    - remove the farthest num
     *    - return the max when array length is reached
     */
    if (nums.length < size) return null
    let runningSum = 0
    let maxSum = -Infinity
    for (const [index, num] of nums.entries()) {
        runningSum += num
        if (index >= size) {
            runningSum = runningSum - nums[index - size]
        }
        maxSum = Math.max(runningSum, maxSum)
    }
    return maxSum
}