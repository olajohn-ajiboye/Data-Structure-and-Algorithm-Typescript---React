//Time complexity : O(N) || Space: Object(1)
export default function secondLargest(array: number[]): number | null {
	if (!array || array.length < 2) return null
	let max = -Infinity,
		secondMax = -Infinity
	for (const num of array) {
		if (num > max || num > secondMax) {
			if (num > max) {
				secondMax = max
				max = num
			} else {
				secondMax = num
			}
		}
	}
	return secondMax
}
