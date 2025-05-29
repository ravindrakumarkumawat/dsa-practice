class Graph {
  constructor(numVertices, isDirected = false, isWeighted = false) {
    this.numVertices = numVertices;
    this.isDirected = isDirected;
    this.isWeighted = isWeighted;

    this.adjMatrix = Array.from({ length: numVertices }, () =>
      new Array(numVertices).fill(isWeighted ? 0 : false)
    );
  }

  addEdge(i, j, weight = 1) {
    if (this.isWeighted) {
      this.adjMatrix[i][j] = weight;
      if (!this.isDirected) this.adjMatrix[j][i] = weight;
    } else {
      this.adjMatrix[i][j] = true;
      if (!this.isDirected) this.adjMatrix[j][i] = true;
    }
  }

  removeEdge(i, j) {
    this.adjMatrix[i][j] = this.isWeighted ? 0 : false;
    if (!this.isDirected) {
      this.adjMatrix[j][i] = this.isWeighted ? 0 : false;
    }
  }

  hasEdge(i, j) {
    return this.isWeighted ? this.adjMatrix[i][j] !== 0 : this.adjMatrix[i][j];
  }

  getNeighbors(vertex) {
    const neighbors = [];
    for (let j = 0; j < this.numVertices; j++) {
      if (this.hasEdge(vertex, j)) {
        neighbors.push(j);
      }
    }
    return neighbors;
  }

  degree(vertex) {
    return this.getNeighbors(vertex).length;
  }

  numEdges() {
    let count = 0;
    for (let i = 0; i < this.numVertices; i++) {
      for (let j = 0; j < this.numVertices; j++) {
        if (this.hasEdge(i, j)) count++;
      }
    }
    return this.isDirected ? count : count / 2;
  }

  isConnected() {
    const visited = new Array(this.numVertices).fill(false);
    const dfs = (v) => {
      visited[v] = true;
      for (let i = 0; i < this.numVertices; i++) {
        if (this.hasEdge(v, i) && !visited[i]) dfs(i);
      }
    };
    dfs(0);
    return visited.every(Boolean);
  }

  dfs(start = 0) {
    const visited = new Array(this.numVertices).fill(false);
    const result = [];

    const dfsHelper = (v) => {
      visited[v] = true;
      result.push(v);
      for (let i = 0; i < this.numVertices; i++) {
        if (this.hasEdge(v, i) && !visited[i]) {
          dfsHelper(i);
        }
      }
    };

    dfsHelper(start);
    return result;
  }

  bfs(start = 0) {
    const visited = new Array(this.numVertices).fill(false);
    const queue = [start];
    const result = [];

    visited[start] = true;

    while (queue.length) {
      const v = queue.shift();
      result.push(v);
      for (let i = 0; i < this.numVertices; i++) {
        if (this.hasEdge(v, i) && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }

    return result;
  }

  detectCycle() {
    const visited = new Array(this.numVertices).fill(false);
    const recStack = new Array(this.numVertices).fill(false);

    const dfs = (v) => {
      visited[v] = true;
      recStack[v] = true;

      for (let i = 0; i < this.numVertices; i++) {
        if (this.hasEdge(v, i)) {
          if (!visited[i] && dfs(i)) return true;
          else if (recStack[i]) return true;
        }
      }

      recStack[v] = false;
      return false;
    };

    for (let i = 0; i < this.numVertices; i++) {
      if (!visited[i] && dfs(i)) return true;
    }

    return false;
  }

  topologicalSort() {
    const inDegree = new Array(this.numVertices).fill(0);
    for (let i = 0; i < this.numVertices; i++) {
      for (let j = 0; j < this.numVertices; j++) {
        if (this.hasEdge(i, j)) inDegree[j]++;
      }
    }

    const queue = [];
    for (let i = 0; i < this.numVertices; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    const result = [];
    while (queue.length > 0) {
      const u = queue.shift();
      result.push(u);
      for (let v = 0; v < this.numVertices; v++) {
        if (this.hasEdge(u, v)) {
          inDegree[v]--;
          if (inDegree[v] === 0) queue.push(v);
        }
      }
    }

    return result.length === this.numVertices ? result : null;
  }

  // Shortest path algorithms 
  dijkstra(start) {
    const dist = new Array(this.numVertices).fill(Infinity);
    const visited = new Array(this.numVertices).fill(false);
    dist[start] = 0;

    for (let i = 0; i < this.numVertices; i++) {
      let u = -1;
      for (let j = 0; j < this.numVertices; j++) {
        if (!visited[j] && (u === -1 || dist[j] < dist[u])) u = j;
      }
      if (dist[u] === Infinity) break;
      visited[u] = true;

      for (let v = 0; v < this.numVertices; v++) {
        if (this.hasEdge(u, v) && dist[u] + this.adjMatrix[u][v] < dist[v]) {
          dist[v] = dist[u] + this.adjMatrix[u][v];
        }
      }
    }

    return dist;
  }

  primsMST() {
    const key = new Array(this.numVertices).fill(Infinity);
    const parent = new Array(this.numVertices).fill(-1);
    const mstSet = new Array(this.numVertices).fill(false);

    key[0] = 0;

    for (let count = 0; count < this.numVertices - 1; count++) {
      let u = -1;
      for (let v = 0; v < this.numVertices; v++) {
        if (!mstSet[v] && (u === -1 || key[v] < key[u])) u = v;
      }

      mstSet[u] = true;

      for (let v = 0; v < this.numVertices; v++) {
        if (this.hasEdge(u, v) && !mstSet[v] && this.adjMatrix[u][v] < key[v]) {
          parent[v] = u;
          key[v] = this.adjMatrix[u][v];
        }
      }
    }

    return parent;
  }

  toString() {
    let s = '';
    for (let i = 0; i < this.numVertices; i++) {
      s += i + ': ';
      for (let j = 0; j < this.numVertices; j++) {
        s += this.adjMatrix[i][j] + ' ';
      }
      s += '\n';
    }
    return s;
  }
}

// Example usage
const g = new Graph(5, true, true);
g.addEdge(0, 1, 2);
g.addEdge(0, 2, 3);
g.addEdge(1, 3, 4);
g.addEdge(3, 4, 1);
console.log("Adjacency Matrix:\n" + g.toString());
console.log("DFS:", g.dfs(0));
console.log("BFS:", g.bfs(0));
console.log("Connected:", g.isConnected());
console.log("Cycle Detected:", g.detectCycle());
console.log("Edges Count:", g.numEdges());
console.log("Topological Sort:", g.topologicalSort());
console.log("Dijkstra's Shortest Paths from 0:", g.dijkstra(0));
console.log("Prim's MST (parent array):", g.primsMST());
