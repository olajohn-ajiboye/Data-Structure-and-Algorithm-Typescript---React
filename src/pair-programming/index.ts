let currentPosition = [0, 0]
let facing = 'North'
export function turtle(key: string) {
	const LEFT: Record<string, string> = {
		North: 'West',
	}
	const RIGHT: Record<string, string> = {
		North: 'East',
		East: 'South',
		South: 'West',
		West: 'North',
	}
	switch (key) {
		case 'L':
			facing = LEFT[`${facing}`]
			break
		case 'R':
			facing = RIGHT[facing]
			break
		case 'M':
			if (facing === 'West') {
				currentPosition[0]--
			} else if (facing === 'East') {
				currentPosition[0]++
			} else if (facing === 'North') {
				currentPosition[1]++
			} else if (facing === 'South') {
				currentPosition[1]--
			}
			break
	}
	return [currentPosition, facing]
}


