export default class MinMaxStack {
	constructor(private stack: number[] = [], public stackCache: number[][] = []) {}

	public size() {
		return this.stack.length
	}
	push(value: number) {
		if (!this.size()) {
			this.stackCache.push([value, value])
		} else {
			const [currentMin, currentMax] = this.stackCache[this.stackCache.length - 1]
			const max = Math.max(currentMax, value)
			const min = Math.min(currentMin, value)
			this.stackCache.push([min, max])
		}
		this.stack.push(value)
	}
	pop() {
		this.stack.pop()
		this.stackCache.pop()
	}
	max(): number {
		return this.stackCache[this.size() - 1][1]
	}
	min(): number {
		return this.stackCache[this.size() - 1][0]
	}
}
