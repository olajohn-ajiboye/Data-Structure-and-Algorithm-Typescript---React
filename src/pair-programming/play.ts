// /*
// const [name,time,amount,city]=transactions[i]

// amount > 1000
// time <=60 && name==name && city !== city

// export function invalidTransactions(transactions: string[]): string[] {
//     const invalid: Array<string> = []
// 	transactions.forEach((transaction, index) => {
// 		const [name, time, amount, city] = transaction.split(',')
// 		if (+amount > 1000) invalid.push(transaction)
// 			const [nextName, nextTime, nextAmount, nextCity] = transactions[index + 1].split(',')
// 			console.log(+nextTime - parseInt(time) <= 60, name === nextName, city !== nextCity)
// 			if (+nextTime - parseInt(time) <= 60 && name === nextName && city !== nextCity) {
// 				invalid.push(transaction, transactions[index + 1])
// 			}

// 	})
// 	return invalid

// }

// const check =(s1:string[])=> {
//     return s1.join('') === s1.reverse().join('')
// }

// function validPalindrome(s: string): boolean {
//   let isPalindrome = false

//     s.split('').forEach((st,index)=> {
//         const temp = [...s.split('')]
//         temp.splice(index,1)
//         if(isPalindrome(temp)) isPalindrome = true
//     })

//     return isPalindrome
// };

// /*
// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.

// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.

// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// */

// /*
// 0 1 0 0 - row [row+1],
// 1 0 0 0 - col [col +1]
// 0 1 0 0
// 0 0 0 0

// const intialGrid = [
// 	[0, 1, 0, 0],
// 	[0, 1, 0, 0],
// 	[0, 1, 0, 0],
// 	[0, 0, 0, 0],
// ]

// export function gameOfLife(matrix: number[][], iteration: number) {
// 	let neigbours = 0
// 	matrix.forEach((row, index) => {
// 		row.forEach((col, colIndex) => {
// 			if (row[colIndex - 1] === 1) {
// 				neigbours++
// 			}
// 			if (row[colIndex + 1] === 1) {
// 				neigbours++
// 			}
// 			if (matrix[index + 1]) {
// 				if (matrix[index + 1][colIndex] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index + 1][colIndex + 1] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index + 1][colIndex - 1] === 1) {
// 					neigbours++
// 				}
// 			}

// 			if (matrix[index - 1]) {
// 				if (matrix[index - 1][colIndex] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index - 1][colIndex + 1] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index - 1][colIndex - 1] === 1) {
// 					neigbours++
// 				}
// 			}
// 		})
// 	})
// }

// function largestAltitude(gain: number[]): number {
// 	let highest = 0
// 	const withStart = [0, ...gain]
// 	withStart.forEach((curr, index) => {
// 		if (gain[index + 1]) {
// 			const diff = gain[index + 1] - curr
// 			if (diff > highest) highest = diff
// 		}
// 	})
// 	return highest
// }

// export function countConsistentStrings(allowed: string, words: string[]): number {
// 	let count = 0
// 	const uniqueAllowed = new Set(allowed.split(''))

// 	words.forEach((word) => {
// 		const uniqueWord = Array.from(new Set(word.split('')))
// 		const isConsistent = uniqueWord.every((w) => uniqueAllowed.has(w))
// 		if (isConsistent) count++

// 		// invalid if word has a xter not present in allowed
// 		//if(uniqueA.length === uniqueS.length && uniqueS.join('') ===  uniqueA.join('')) count++
// 	})
// 	return count
// }
// */

// /*
// Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.

// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.

// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// */

// /*
// 0 1 0 0 - row [row+1],
// 1 0 0 0 - col [col +1]
// 0 1 0 0
// 0 0 0 0
// */

// const intialGrid = [
// 	[0, 1, 0, 0],
// 	[0, 1, 0, 0],
// 	[0, 1, 0, 0],
// 	[0, 0, 0, 0],
// ]

// export function gameOfLife(matrix: number[][], iteration: number) {
// 	let neigbours = 0
// 	matrix.forEach((row, index) => {
// 		row.forEach((col, colIndex) => {
// 			if (row[colIndex - 1] === 1) {
// 				neigbours++
// 			}
// 			if (row[colIndex + 1] === 1) {
// 				neigbours++
// 			}
// 			if (matrix[index + 1]) {
// 				if (matrix[index + 1][colIndex] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index + 1][colIndex + 1] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index + 1][colIndex - 1] === 1) {
// 					neigbours++
// 				}
// 			}

// 			if (matrix[index - 1]) {
// 				if (matrix[index - 1][colIndex] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index - 1][colIndex + 1] === 1) {
// 					neigbours++
// 				}
// 				if (matrix[index - 1][colIndex - 1] === 1) {
// 					neigbours++
// 				}
// 			}
// 		})
// 	})
// }

// function largestAltitude(gain: number[]): number {
// 	let highest = 0
// 	const withStart = [0, ...gain]
// 	withStart.forEach((curr, index) => {
// 		if (gain[index + 1]) {
// 			const diff = gain[index + 1] - curr
// 			if (diff > highest) highest = diff
// 		}
// 	})
// 	return highest
// }

// export function countConsistentStrings(allowed: string, words: string[]): number {
// 	let count = 0
// 	const uniqueAllowed = new Set(allowed.split(''))

// 	words.forEach((word) => {
// 		const uniqueWord = Array.from(new Set(word.split('')))
// 		const isConsistent = uniqueWord.every((w) => uniqueAllowed.has(w))
// 		if (isConsistent) count++

// 		// invalid if word has a xter not present in allowed
// 		//if(uniqueA.length === uniqueS.length && uniqueS.join('') ===  uniqueA.join('')) count++
// 	})
// 	return count
// }

// // eslint-disable-next-line no-extend-native
// Array.prototype.at = function (index: number) {
// 	return index > 0 ? this[index] : this[this.length - index]
// }
export {}
