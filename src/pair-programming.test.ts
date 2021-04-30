import { turtle } from './pair-programming'

describe('turtle', () => {
	it('return count of consistent string', () => {
		expect(turtle('M')).toStrictEqual([[0, 1], 'North'])
		expect(turtle('L')).toStrictEqual([[0, 1], 'West'])
		expect(turtle('M')).toStrictEqual([[-1, 1], 'West'])
		expect(turtle('M')).toStrictEqual([[-2, 1], 'West'])
		expect(turtle('R')).toStrictEqual([[-2, 1], 'North'])
		expect(turtle('R')).toStrictEqual([[-2, 1], 'East'])
		expect(turtle('M')).toStrictEqual([[-1, 1], 'East'])
	})
})
