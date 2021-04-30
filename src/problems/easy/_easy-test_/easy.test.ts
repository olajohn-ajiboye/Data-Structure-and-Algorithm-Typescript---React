import { secondLargest, MinMaxStack } from '../index'

describe('Second largest function', () => {
	const arrayOne = [1, 4, 6, 78, 9]
	const arrayTwo = [1, -4, 6, -78, -9]
	const arrayThree = [1]
	const arrayFour: number[] = []
	const arrayFive = [1, 2]
	it('Should return second largest element in an array', () => {
		expect(secondLargest(arrayOne)).toBe(9)
		expect(secondLargest(arrayTwo)).toBe(1)
		expect(secondLargest(arrayThree)).toBe(null)
		expect(secondLargest(arrayFour)).toBe(null)
		expect(secondLargest(arrayFive)).toBe(1)
	})
})

describe('Min Max Stack', () => {
	const stack = new MinMaxStack()
	stack.push(1)
	stack.push(9)
	stack.push(-1)
	stack.push(4)
	it('Should verify stack', () => {
		expect(stack.max()).toBe(9)
		expect(stack.min()).toBe(-1)
		expect(stack.size()).toBe(4)
		stack.pop()
		stack.pop()

		expect(stack.max()).toBe(9)
		expect(stack.min()).toBe(1)
		expect(stack.size()).toBe(2)
		stack.push(10)
		expect(stack.max()).toBe(10)
	})
})
