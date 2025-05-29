/**
 * Graph implementation using an adjacency list.
 * This implementation supports adding edges and performing a Breadth First Search (BFS).
 * It prints the nodes in the order they are visited.
 * TC: O(V + E), where V is the number of nodes and E is the number of edges
 * SC: O(V)
 */

class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.adjList = new Array(vertices).fill(null).map(() => []);
  }

  // Add edge (directed)
  addEdge(v, w) {
    this.adjList[v].push(w);
  }

  // BFS algorithm - Queue-based implementation
  BFS(start) {
    const visited = new Array(this.V).fill(false);
    const queue = [];

    visited[start] = true;
    queue.push(start);

    while (queue.length !== 0) {
      const s = queue.shift();
      process.stdout.write(s + " ");

      for (const neighbor of this.adjList[s]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

// Example usage
const g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("Following is Breadth First Traversal (starting from vertex 2):");
g.BFS(2);

/**
 * BFS Algorithm Applications
 * To build index by search index
 * For GPS navigation
 * Path finding algorithms
 * In Ford-Fulkerson algorithm to find maximum flow in a network
 * Cycle detection in an undirected graph
 * In minimum spanning tree
 */
