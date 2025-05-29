/**
 * Bellman-Ford Algorithm
 * The Bellman-Ford algorithm is used to find the shortest path from a single source vertex to all other vertices in a weighted graph. It can handle graphs with negative weight edges and can also detect negative weight cycles.
 * TC: O(V * E), where V is the number of vertices and E is the number of edges
 * SC: O(V)
 * Bellman Ford's Algorithm Applications
 * For calculating shortest paths in routing algorithms
 * For finding the shortest path
 */
class Graph {
  constructor(vertices, edges) {
    this.V = vertices;
    this.E = edges;
    this.edgeList = new Array(edges).fill(null).map(() => ({ s: 0, d: 0, w: 0 }));
  }

  bellmanFord(source) {
    const dist = new Array(this.V).fill(Infinity);
    dist[source] = 0;

    // Step 2: Relax all edges |V| - 1 times
    for (let i = 1; i < this.V; i++) {
      for (let j = 0; j < this.E; j++) {
        const { s, d, w } = this.edgeList[j];
        if (dist[s] !== Infinity && dist[s] + w < dist[d]) {
          dist[d] = dist[s] + w;
        }
      }
    }

    // Step 3: Check for negative-weight cycles
    for (let j = 0; j < this.E; j++) {
      const { s, d, w } = this.edgeList[j];
      if (dist[s] !== Infinity && dist[s] + w < dist[d]) {
        console.log("Graph contains a negative weight cycle");
        return;
      }
    }

    // No negative cycle found, print distances
    this.printSolution(dist);
  }

  printSolution(dist) {
    console.log("Vertex Distance from Source");
    for (let i = 0; i < dist.length; i++) {
      console.log(`${i}\t\t${dist[i]}`);
    }
  }
}

// Example usage
const V = 5;
const E = 5;
const graph = new Graph(V, E);

// edge 0 --> 1
graph.edgeList[0] = { s: 0, d: 1, w: 5 };

// edge 0 --> 2
graph.edgeList[1] = { s: 0, d: 2, w: 4 };

// edge 1 --> 3
graph.edgeList[2] = { s: 1, d: 3, w: 3 };

// edge 2 --> 1
graph.edgeList[3] = { s: 2, d: 1, w: 6 };

// edge 3 --> 2
graph.edgeList[4] = { s: 3, d: 2, w: 2 };

// Run Bellman-Ford
graph.bellmanFord(0);
