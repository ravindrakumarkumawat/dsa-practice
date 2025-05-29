/**
 * Graph implementation using an adjacency list.
 * This implementation supports adding edges and printing the graph.
 * TC: O(V + E), where V is the number of nodes and E is the number of edges
 * SC: O(V)
 * Application of DFS Algorithm
 * For finding the path
 * To test if the graph is bipartite
 * For finding the strongly connected components of a graph
 * For detecting cycles in a graph
 */

class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.adjList = new Array(vertices).fill(null).map(() => []);
    this.visited = new Array(vertices).fill(false);
  }

  addEdge(src, dest) {
    this.adjList[src].push(dest);
  }

  // DFS algorithm - stack-based implementation
  DFS(vertex) {
    this.visited[vertex] = true;
    process.stdout.write(vertex + " "); // for Node.js

    for (const adj of this.adjList[vertex]) {
      if (!this.visited[adj]) {
        this.DFS(adj);
      }
    }
  }
   
  // DFS algorithm - stack-based implementation
  // More reusable, encapsulated visited & More stable
  // and allows for multiple DFS calls without interference
  DFS2(start) {
    const visited = new Array(this.V).fill(false);
    const stack = [start];

    while (stack.length > 0) {
      const vertex = stack.pop();

      if (!visited[vertex]) {
        visited[vertex] = true;
        process.stdout.write(vertex + " ");

        // Push neighbors in reverse order for correct DFS order
        for (let i = this.adjList[vertex].length - 1; i >= 0; i--) {
          const neighbor = this.adjList[vertex][i];
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
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
g.addEdge(2, 3);

console.log("Following is Depth First Traversal");
g.DFS(2);
