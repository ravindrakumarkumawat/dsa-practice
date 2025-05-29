/**
 * Strongly Connected Components (SCC) in a directed graph using Kosaraju's algorithm.
 * This implementation finds all strongly connected components in a directed graph.
 * A strongly connected component is a maximal subgraph where every vertex is reachable from every other vertex.
 * This implementation uses two depth-first searches (DFS):
 * 1. The first DFS is used to fill a stack with vertices in the order of their finishing times.
 * 2. The second DFS is performed on the transposed graph (where all edges are reversed) to find the strongly connected components.
 * The algorithm runs in O(V + E) time, where V is the number of vertices and E is the number of edges.
 * 
 * Strongly Connected Components Applications
 * Vehicle routing applications
 * Maps
 * Model-checking in formal verification
 */

class Graph {
  constructor(V) {
    this.V = V;
    this.adj = new Array(V).fill(0).map(() => []);
  }

  // Add edge
  addEdge(s, d) {
    this.adj[s].push(d);
  }

  // DFS Utility
  DFSUtil(s, visited) {
    visited[s] = true;
    process.stdout.write(s + " ");
    for (let n of this.adj[s]) {
      if (!visited[n]) {
        this.DFSUtil(n, visited);
      }
    }
  }

  // Transpose graph
  transpose() {
    const g = new Graph(this.V);
    for (let s = 0; s < this.V; s++) {
      for (let d of this.adj[s]) {
        g.adj[d].push(s);
      }
    }
    return g;
  }

  // Fill stack with finish time order
  fillOrder(s, visited, stack) {
    visited[s] = true;
    for (let n of this.adj[s]) {
      if (!visited[n]) {
        this.fillOrder(n, visited, stack);
      }
    }
    stack.push(s);
  }

  // Print strongly connected components
  printSCC() {
    const stack = [];
    const visited = new Array(this.V).fill(false);

    // Fill vertices in stack according to their finish times
    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.fillOrder(i, visited, stack);
      }
    }

    // Create a reversed graph
    const gr = this.transpose();

    // Mark all vertices as not visited for second DFS
    visited.fill(false);

    // Process all vertices in order defined by Stack
    while (stack.length > 0) {
      const s = stack.pop();
      if (!visited[s]) {
        gr.DFSUtil(s, visited);
        console.log();
      }
    }
  }
}

// Driver code
const g = new Graph(8);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 0);
g.addEdge(4, 5);
g.addEdge(5, 6);
g.addEdge(6, 4);
g.addEdge(6, 7);

console.log("Strongly Connected Components:");
g.printSCC();





/**
 * Graph implementation using adjacency lists with linked lists.
 * This implementation supports adding edges, performing depth-first search (DFS),
 * transposing the graph, and finding strongly connected components (SCC) using Kosaraju's algorithm.
 */
// Linked List Node class
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List class for each adjacency list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append a node at the end
  add(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  // Return iterator (as array)
  getNodes() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    return result;
  }
}

// Graph class
class GraphLL {
  constructor(V) {
    this.V = V;
    this.adj = new Array(V).fill(0).map(() => new LinkedList());
  }

  addEdge(s, d) {
    this.adj[s].add(d);
  }

  DFSUtil(s, visited) {
    visited[s] = true;
    process.stdout.write(s + " ");
    const neighbors = this.adj[s].getNodes();
    for (let n of neighbors) {
      if (!visited[n]) {
        this.DFSUtil(n, visited);
      }
    }
  }

  transpose() {
    const g = new GraphLL(this.V);
    for (let s = 0; s < this.V; s++) {
      const neighbors = this.adj[s].getNodes();
      for (let d of neighbors) {
        g.addEdge(d, s); // reverse direction
      }
    }
    return g;
  }

  fillOrder(s, visited, stack) {
    visited[s] = true;
    const neighbors = this.adj[s].getNodes();
    for (let n of neighbors) {
      if (!visited[n]) {
        this.fillOrder(n, visited, stack);
      }
    }
    stack.push(s);
  }

  printSCC() {
    const stack = [];
    const visited = new Array(this.V).fill(false);

    for (let i = 0; i < this.V; i++) {
      if (!visited[i]) {
        this.fillOrder(i, visited, stack);
      }
    }

    const gr = this.transpose();

    visited.fill(false);

    while (stack.length > 0) {
      const s = stack.pop();
      if (!visited[s]) {
        gr.DFSUtil(s, visited);
        console.log();
      }
    }
  }
}

// Driver code
const gh = new GraphLL(8);
gh.addEdge(0, 1);
gh.addEdge(1, 2);
gh.addEdge(2, 3);
gh.addEdge(2, 4);
gh.addEdge(3, 0);
gh.addEdge(4, 5);
gh.addEdge(5, 6);
gh.addEdge(6, 4);
gh.addEdge(6, 7);

console.log("Strongly Connected Components:");
gh.printSCC();

