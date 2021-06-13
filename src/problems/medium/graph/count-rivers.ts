const buildVisitedMatrix = (matrix: number[][]) => {
    return Array(matrix.length).fill(false).map(row => Array(row.length).fill(false))
}

function riverSizes(matrix: number[][]) {
    let sizes = []
    const visited = buildVisitedMatrix(matrix)
    for (const [rowIdx, row] of matrix.entries()) {
        for (const [colIdx, _] of row.entries()) {
            if (visited[rowIdx][colIdx] || visited[rowIdx][colIdx] === 0) continue
            const size = traverseMatrix(matrix, visited, rowIdx, colIdx)
            sizes.push(size)
        }
    }
    return sizes
}

function traverseMatrix(matrix: number[][], visited: boolean[][], rowIdx: number, colIdx: number) {
    let currentRiverSize = 0
    visited[rowIdx][colIdx] = true
    const nodesToExplore = [[rowIdx, colIdx]]
    while (nodesToExplore.length) {
        const [rowIdx, colIdx] = nodesToExplore.pop()!
        currentRiverSize++
        const unvisitedNeighbours = getUnvisitedNeigbours(matrix, visited, rowIdx, colIdx)
        for (const neigbour of unvisitedNeighbours) nodesToExplore.push(neigbour)
    }
    return currentRiverSize
}

function getUnvisitedNeigbours(matrix: number[][], visited: boolean[][], rowIdx: number, colIdx: number) {
    const unvisitedNeighbours = []
    // up
    if (rowIdx - 1 > 0 && !visited[rowIdx - 1][colIdx]) unvisitedNeighbours.push([rowIdx - 1, colIdx])

    // down
    if (rowIdx + 1 < matrix.length - 1 && !visited[rowIdx + 1][colIdx]) unvisitedNeighbours.push([rowIdx + 1, colIdx])

    // right
    if (colIdx + 1 < matrix[rowIdx].length - 1 && !visited[rowIdx][colIdx + 1]) unvisitedNeighbours.push([rowIdx, colIdx + 1])

    // left
    if (colIdx - 1 > 0 && !visited[rowIdx][colIdx - 1]) unvisitedNeighbours.push([rowIdx, colIdx - 1])

    return unvisitedNeighbours
}




// Do not edit the line below.
exports.riverSizes = riverSizes;
