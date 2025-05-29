/**
 * Floyd-Warshall Algorithm
 * For finding shortest paths in a weighted graph with positive or negative edge weights (but no negative cycles)
 * For calculating transitive closure of a graph
 * For finding the shortest path between all pairs of vertices
 * 
 * Floyd Warshall Algorithm Applications
 * To find the shortest path is a directed graph
 * To find the transitive closure of directed graphs
 * To find the Inversion of real matrices
 * For testing whether an undirected graph is bipartite
 * Measure	Complexity
Time Complexity	O(V^3)
Space Complexity	O(V^2)
 */

class FloydWarshall {
  constructor() {
    this.INF = Infinity;
    this.nV = 4;
  }

  floydWarshall(graph) {
    const matrix = Array.from({ length: this.nV }, (_, i) =>
      Array.from({ length: this.nV }, (_, j) => graph[i][j])
    );

    for (let k = 0; k < this.nV; k++) {
      for (let i = 0; i < this.nV; i++) {
        for (let j = 0; j < this.nV; j++) {
          if (matrix[i][k] + matrix[k][j] < matrix[i][j]) {
            matrix[i][j] = matrix[i][k] + matrix[k][j];
          }
        }
      }
    }

    this.printMatrix(matrix);
  }

  printMatrix(matrix) {
    for (let i = 0; i < this.nV; i++) {
      let row = '';
      for (let j = 0; j < this.nV; j++) {
        row += (matrix[i][j] === this.INF ? 'INF' : matrix[i][j]) + '\t';
      }
      console.log(row);
    }
  }
}

// Example usage
const INF = Infinity;
const graph = [
  [0, 3, INF, 5],
  [2, 0, INF, 4],
  [INF, 1, 0, INF],
  [INF, INF, 2, 0]
];

const fw = new FloydWarshall();
fw.floydWarshall(graph);

export default FloydWarshall;
