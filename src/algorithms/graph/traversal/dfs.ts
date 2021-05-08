import { AdjacencySetGraph } from './../../../data-structures/graphs/adjacency-list.graph';

export function dfsGraph(graph: AdjacencySetGraph, startNode = 0, lookUp = new Map(), result: number[] = []) {
    if (lookUp.has(startNode)) return
    lookUp.set(startNode, true)
    result.push(startNode)
    const adjacents = graph.getAdjacentVertices(startNode)
    adjacents.forEach(node => {
        if (!lookUp.has(node)) dfsGraph(graph, node, lookUp, result)
    })
    return result
}