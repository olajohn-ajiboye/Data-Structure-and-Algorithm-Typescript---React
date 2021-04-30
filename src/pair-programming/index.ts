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

function logB(a: number, b: number) {
	return a + b
}



function isRobotBounded(instructions: string): boolean {
  let x =0, y=0, direction =0
  // 0: North, 1: East, 2: South, 3: West
  const possibleMoves = {
      0: [0,1],
      1: [1,0],
      2: [0,-1],
      3: [-1,0]
  }
  instructions.split('').forEach(key=> {
      if(key == 'L') direction = (direction + 3) % 4
      else if  if(key == 'R') direction = (direction + 1) % 4
      else {
          x = x + possibleMoves[direction][0]
          y = y + possibleMoves[direction][1]
      }
  })
   return (x==0 && y ==0) || direction !=0
};