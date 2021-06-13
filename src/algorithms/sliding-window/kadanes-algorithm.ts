export function kadanesAlgorithm(nums: number[]) {
    if (nums.length < 1) return 0
    let maxValueSumHere = nums[0], maxSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        // add the currentNUM to running sum her
        const sumNow = maxValueSumHere + nums[i]
        // this has possibility of making the numer really small or improving the sum.
        // make this check, if it decreases the sum, then make that number the maxValue here so it can be replaced in next iteration.
        // or until we get a bigger value
        maxValueSumHere = Math.max(sumNow, nums[i])
        maxSum = Math.max(maxValueSumHere, maxSum)
    }
    return maxSum
}