export function longestPeak(peaks: number[]) {
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
	while (peaks[leftIndex] > peaks[leftIndex - 1]) {
		leftIndex--
		currentPeakCount++
	}
	// count right
	while (peaks[rightIndex] > peaks[rightIndex + 1]) {
		rightIndex++
		currentPeakCount++
	}
	return currentPeakCount

}
export function recursedfsLeftnRight(peaks: number[], leftIndex: number, rightIndex: number, currentPeakCount = 3) {
	if (peaks[leftIndex] > peaks[leftIndex - 1]) {
		currentPeakCount++
		recursedfsLeftnRight(peaks, leftIndex - 1, rightIndex, currentPeakCount)
	}
	if (peaks[rightIndex] > peaks[rightIndex + 1]) {
		currentPeakCount++
		recursedfsLeftnRight(peaks, leftIndex, rightIndex + 1, currentPeakCount)
	}
	return currentPeakCount
}


