 function maxWaterConatiner(heights: number[]) {
    let maxVolume = -Infinity, left = 0, right = heights.length - 1
     while (left < right) {
        const currentVolume = Math.min(heights[left], heights[right]) * (right - left)
        maxVolume = Math.max(maxVolume, currentVolume )
        if (heights[left] < heights[right]) left++
        else if (heights[right] < heights[left] ) right --
    }
    return maxVolume
 }
export default maxWaterConatiner