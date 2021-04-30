// // export const binarySearch = (array: Array<number>, item: number) => {
// // 	let mid = 0
// // 	let newHalf = []
// // 	'john'.toString()
// // }

// export function schedule(slots: Array<number[][]>): Array<number[]> {
// 	let globalSchedule = Array(24).fill(true)
// 	const output = []

// 	for (let i = 0; i < schedules.length; i++) {
// 		for (const sched of schedules[i]) {
// 			let idx = sched[0]

// 			for (let j = idx; j < sched[1]; j++) {
// 				globalSchedule[j] = false
// 			}
// 		}
// 	}

// 	let slot = []
// 	for (let t = 0; t < globalSchedule.length; t++) {
// 		if (slot.length < 1) {
// 			if (globalSchedule[t] === true) {
// 				slot[0] = t
// 			}
// 		} else {
// 			if (globalSchedule[t] === false) {
// 				slot[1] = t
// 				output.push(slot)
// 				slot = []
// 			}
// 		}
// 	}
// 	if (slot.length > 0 && slot.length < 2) {
// 		slot[1] = 24
// 		output.push(slot)
// 	}
// 	return output
// }
export {}
