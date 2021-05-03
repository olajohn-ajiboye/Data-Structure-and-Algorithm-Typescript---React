/**
 * instantiate currentSum and MaxSum => 0, -Infinity
 * Initial current sum if first K elements. 
 * Create a loop, while index < K don' calculate maxSum. Just add to currentSum
 * For each iteration after, set maxSum to Max of currentSum and currentMaxSum
 * Remove the leftmost element from the window
 * Add current element and repeat the comparison
 * Return maxSum
 */

function maxSumSubArray(array: number[], k: number) {
    let currentSum = 0, maxSum = -Infinity, start = 0
    for (let i = 0; i < array.length; i++){
        currentSum += array[i]
        // only start processing when the windowsize is upto or greater than K
        if (i + 1 === k) {
            maxSum = Math.max(currentSum, maxSum)
        }
        else if(i+1 >k){
            currentSum -= array[start++]
            maxSum = Math.max(currentSum, maxSum)
        }  
    }
    return maxSum
}
export default maxSumSubArray