import { kadanesAlgorithm } from '../Kadanes-algorithm'

describe('kadanesAlgorithm', () => {
    const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    const arrayOne = [5, 4, -1, 7, 8]
    const arrayTwo: number[] = []
    const arrayThree = [1]

    it('Should return correct sum', () => {
        expect(kadanesAlgorithm(array)).toBe(6)
        expect(kadanesAlgorithm(arrayOne)).toBe(23)
        expect(kadanesAlgorithm(arrayThree)).toBe(1)
    })
    it('Should return 0 for empty array', () => {
        expect(kadanesAlgorithm(arrayTwo)).toBe(0)
    })
})
