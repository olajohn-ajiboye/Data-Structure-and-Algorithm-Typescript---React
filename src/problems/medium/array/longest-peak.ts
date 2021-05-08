function longestPeak(peaks: number[]) {
	let maxPeak = 0
	for (const [index, peak] of peaks.entries()) {
		const isPeak = peaks[index - 1] < peak && peak > peaks[index + 1]
		if (!isPeak) continue
		let leftIndex = index - 1, rightIndex = index + 1
		const currentPeakCount = dfsLeftAndRight(peaks, leftIndex, rightIndex)
		maxPeak = Math.max(currentPeakCount, maxPeak)
	}

	return maxPeak
}

export function dfsLeftAndRight(peaks: number[], leftIndex: number, rightIndex: number, currentPeakCount = 3) {
	while (leftIndex && peaks[leftIndex] > peaks[leftIndex - 1]) {
		leftIndex--
		currentPeakCount++
	}
	// count right
	while (rightIndex && peaks[rightIndex] > peaks[rightIndex + 1]) {
		rightIndex++
		currentPeakCount++
	}
	return currentPeakCount

}


export default longestPeak

