import { longestPeak } from './index'

describe('Longest Peak', () => {
    const arrayOne = [1, 2, 3, 4, 3, 2, 1, 0, 1]
    const arrayTwo = [1, 2, 3, 4, 3, 2, 1, 0, 1, 0, -1, -2, -3, -4, -5, -6, -7]
    const arrayThree = [0]
    const arrayFour: number[] = []
    const arrayFive = [1, 2, 1]
    it('Should return longest peak in list in an array', () => {
        expect(longestPeak(arrayOne)).toBe(8)
        expect(longestPeak(arrayTwo)).toBe(10)
        expect(longestPeak(arrayThree)).toBe(0)
        expect(longestPeak(arrayFour)).toBe(0)
        expect(longestPeak(arrayFive)).toBe(3)
    })
})

