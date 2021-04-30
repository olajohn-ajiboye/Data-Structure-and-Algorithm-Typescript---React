export class DoubleNode {
	constructor(public val: number, public prev: DoubleNode | null = null, public next: DoubleNode | null = null) {}
}

export class MyLinkedList {
	constructor(public head: DoubleNode | null = null, public tail: DoubleNode | null = null, public size = 0) {}

	get(index: number): number {
		console.log(this.getAt(index))
		return this.getAt(index)?.val ?? 0
	}
	private getAt(index: number): DoubleNode | null {
		if (index < 0 || index >= this.size) return null
		let current = this.head
		if (index === 0) return this.head
		for (let i = 0; i < index; i++) current = current!.next
		return current
	}

	addAtIndex(index: number, val: number) {
		if (index < 0 || index >= this.size) return
		const nodeToAdd = new DoubleNode(val)
		if (!this.head) {
			this.head = nodeToAdd
		} else {
			let current = this.head
			for (let i = 0; i < index; i++) current = current.next!
			const previous = current.prev
			previous!.next = nodeToAdd
			nodeToAdd.next = current
			current!.prev = nodeToAdd
		}
		this.size++
	}

	deleteAtIndex(index: number) {
		if (index < 0 || index >= this.size) return
		let current = this.head
		for (let i = 0; i < index; i++) current = current!.next!
		const prev = current?.prev ?? null
		if (!prev) this.head = null
		else prev.next = current!.next
		this.size--
	}

	addAtHead(val: number) {
		this.addAtIndex(0, val)
	}
	addAtTail(val: number) {
		this.addAtIndex(this.size - 1, val)
	}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
