/**
 * Graph implementation using an adjacency list.
 * This implementation supports adding edges and printing the graph.
 */

class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.adjList = new Array(vertices);

    for (let i = 0; i < vertices; i++) {
      this.adjList[i] = [];
    }
  }

  // Add edge (undirected graph)
  addEdge(src, dest) {
    this.adjList[src].push(dest);
    this.adjList[dest].push(src);
  }

  // Print graph
  printGraph() {
    for (let i = 0; i < this.adjList.length; i++) {
      const connections = this.adjList[i].join(' -> ');
      console.log(`\nVertex ${i}:\n -> ${connections}`);
    }
  }
}

// Example usage:
const V = 5;
const graph = new Graph(V);

// Add edges
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);

// Print the graph
graph.printGraph();
