import { maxSubArrayLength } from '../maximum-subarray-sum'

describe('maxSubArrayLength', () => {
    const array = [0, 1, 2, 3, 4, 5]
    const arrayOne = [1, 4, 6, 78, 9]
    const arrayTwo = [1, 4, 6, 78, 9]
    const arrayThree = [1]
    const arrayFour: number[] = []
    const arrayFive = [1, 2]
    it('Should return max value with given window size', () => {
        expect(maxSubArrayLength(array, 2)).toBe(9)
        expect(maxSubArrayLength(array, 3)).toBe(12)
        expect(maxSubArrayLength(arrayOne, 3)).not.toBe(12)
    })
    it('Should return null if array size is less than window', () => {
        expect(maxSubArrayLength(arrayFive, 3)).toBe(null)
        expect(maxSubArrayLength(arrayThree, 2)).toBe(null)
    })
    it('Should return null for empty array', () => {
        expect(maxSubArrayLength(arrayFour, 3)).toBe(null)
    })
})
