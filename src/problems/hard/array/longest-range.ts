/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums: number[]) {
    const hash: Record<number, boolean> = {}
    let longestRange = 0, bestRange: number[] = []
    /* put all numbers in hash for quick lookup */
    nums.forEach(num => hash[num] = true)

    // now explore all numbers 

    for (const num of nums) {
        /* check if num has been explored before */

        if (hash[num]) continue
        hash[num] = false
        /* now explore nums to left and right */
        let currentRangeLength = 1
        let left = num - 1, right = num + 1

        while (hash[left]) {
            currentRangeLength++
            left--
        }
        while (hash[right]) {
            currentRangeLength++
            right++
        }
        if (currentRangeLength > longestRange) {
            longestRange = currentRangeLength
            bestRange = [left + 1, right - 1]
        }
    }
    return bestRange
}

export default longestConsecutive