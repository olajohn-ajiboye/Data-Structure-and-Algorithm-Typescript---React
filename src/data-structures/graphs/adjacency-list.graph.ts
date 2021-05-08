export class GraphNode {
  constructor(public vertexId: number, public adjacencyList = new Set<number>()) { }

  addEdge(id: number) {
    if (id === this.vertexId) throw Error("Node can't be adjacent to itself");
    this.adjacencyList.add(id);
  }

  getAdjacentVertices() {
    return Array.from(this.adjacencyList).sort((a, b) => a - b);
  }
}

export class AdjacencySetGraph {

  constructor(
    public numberOfVertices: number,
    public directed: boolean = false,
    public verticesList: GraphNode[] = []
  ) {
    for (let i = 0; i < numberOfVertices; i++) {
      this.verticesList[i] = new GraphNode(i);
    }
  }

  addEdge(v1: number, v2: number, weight = 1) {
    this.verticesList[v1].addEdge(v2);
    if (!this.directed) this.verticesList[v2].addEdge(v1);
  }
  getAdjacentVertices(vertexId: number) {
    return this.verticesList[vertexId].getAdjacentVertices();
  }

  getIndegree(vertexId: number) {
    let degreeCount = 0;
    for (let i = 0; i < this.numberOfVertices; i++) {
      if (this.getAdjacentVertices(i).indexOf(vertexId)) {
        degreeCount++;
      }
    }
  }
}
