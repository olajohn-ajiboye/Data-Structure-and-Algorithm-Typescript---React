import { AdjacencySetGraph } from './../../../data-structures/graphs/adjacency-list.graph';
/**
 * BFS Graph Implementation
 * Create a queue, add the starting node as first element in the Queue. Also a list with explored or not
 * Start treating the queue => While queue is not empty
 *  - Pop the last element on queue, this is what needs to be explored
 *  - Check wether it has been explored. If explored ,just add it's adjancey to the queue
 *  - If not explore 
 */


export function bfsGraph(graph: AdjacencySetGraph, startNode = 0) {
    let Q = [startNode]
    let lookupTable = new Map()
    const result = []
    while (Q.length) {
        // first on the queue
        const nodeToExplore = Q.shift()!
        // check if it is already explored
        if (lookupTable.has(nodeToExplore)) continue
        // else mark it as visited because we are going to visit it now
        lookupTable.set(nodeToExplore, true)
        result.push(nodeToExplore)
        graph.getAdjacentVertices(nodeToExplore).forEach(element => {
            if (!lookupTable.has(element)) Q.push(element)
        });
    }
    return result

}